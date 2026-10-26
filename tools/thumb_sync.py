# -*- coding: utf-8 -*-
"""MYBOX 썸네일 폴더를 비공개 Supabase Storage 버킷 thumbs 로 올립니다.

원본: N:\\개인\\00.사진+영상\\10. AI 썸네일
긴 변 1350px, JPEG 품질 82, EXIF 방향 적용, 메타데이터 제거.
버킷 경로는 상대 경로의 sha1 입니다. 한글 이름은 thumb_index 에 둡니다.
로그인 창은 처음 한 번만 뜨고, 저장하는 것은 갱신 토큰뿐입니다.
MYBOX(원본 폴더)에는 아무 것도 쓰지 않습니다. 토큰은 로그에 남기지 않습니다.
"""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import logging
import os
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

# 공개 키입니다. 서비스 롤 키를 넣지 마세요.
# 같은 저장소의 planner-sync-config.js 가 있으면 그 값을 우선 씁니다.
DEFAULT_SUPABASE_URL = "https://zjjziazvnhbkyygrtoxs.supabase.co"
DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_wohPCoYeIohjOW0KulBAvw_5qSTVV5F"
SOURCE_DIR = r"N:\개인\00.사진+영상\10. AI 썸네일"
BUCKET = "thumbs"
LONG_EDGE = 1350
JPEG_QUALITY = 82
MAX_BYTES = 5 * 1024 * 1024
IMAGE_EXT = {".jpg", ".jpeg", ".png"}
TASK_NAME = "ThewellnessThumbSync"
LOG = logging.getLogger("thumb_sync")


class SyncError(Exception):
    pass


class InvalidGrant(SyncError):
    pass


class HttpError(SyncError):
    def __init__(self, status, message):
        super().__init__("HTTP %s %s" % (status, message))
        self.status = status


def app_dir() -> Path:
    base = os.environ.get("LOCALAPPDATA")
    if not base:
        base = str(Path.home() / "AppData" / "Local")
    path = Path(base) / "thewellness"
    path.mkdir(parents=True, exist_ok=True)
    return path


def safe_text(raw) -> str:
    if isinstance(raw, bytes):
        text = raw.decode("utf-8", errors="replace")
    else:
        text = str(raw or "")
    text = re.sub(r"eyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}", "[token]", text)
    text = re.sub(r"sb_(?:secret|publishable)_[A-Za-z0-9_-]+", "[key]", text)
    return text[:300]


def setup_log() -> None:
    path = app_dir() / "thumb_sync.log"
    try:
        if path.exists() and path.stat().st_size > 1_000_000:
            backup = path.with_suffix(".log.1")
            if backup.exists():
                backup.unlink()
            path.replace(backup)
    except OSError:
        pass
    LOG.setLevel(logging.INFO)
    LOG.handlers.clear()
    file_handler = logging.FileHandler(path, encoding="utf-8")
    file_handler.setFormatter(logging.Formatter("%(asctime)s %(message)s"))
    LOG.addHandler(file_handler)
    stream = sys.stderr
    if stream is not None and hasattr(stream, "isatty") and stream.isatty():
        console = logging.StreamHandler(stream)
        console.setFormatter(logging.Formatter("%(message)s"))
        LOG.addHandler(console)


def atomic_write(path: Path, text: str) -> None:
    tmp = path.with_suffix(path.suffix + ".tmp")
    with tmp.open("w", encoding="utf-8", newline="\n") as handle:
        handle.write(text)
        handle.flush()
        os.fsync(handle.fileno())
    os.replace(tmp, path)


def load_public_config() -> tuple[str, str]:
    url = DEFAULT_SUPABASE_URL
    key = DEFAULT_SUPABASE_ANON_KEY
    cfg = Path(__file__).resolve().parent.parent / "planner-sync-config.js"
    if cfg.exists():
        text = cfg.read_text(encoding="utf-8")
        found_url = re.search(r"PLANNER_SUPABASE_URL\s*=\s*'([^']+)'", text)
        found_key = re.search(r"PLANNER_SUPABASE_ANON_KEY\s*=\s*'([^']+)'", text)
        if found_url:
            url = found_url.group(1).strip()
        if found_key:
            key = found_key.group(1).strip()
    lowered = key.lower()
    if "service_role" in lowered or lowered.startswith("sb_secret"):
        raise SystemExit("서비스 롤 키는 사용할 수 없습니다.")
    return url.rstrip("/"), key


def clean_rel(rel: str) -> str:
    text = str(rel or "").replace("\\", "/").lstrip("/")
    return unicodedata.normalize("NFC", text)


def object_key(rel: str) -> str:
    """<하위폴더 sha1>/<상대경로 sha1>.jpg — 한글 경로는 인덱스에만 둡니다."""
    rel = clean_rel(rel)
    folder, _sep, _name = rel.rpartition("/")
    folder_key = hashlib.sha1(folder.encode("utf-8")).hexdigest()[:12] if folder else "root"
    file_key = hashlib.sha1(rel.encode("utf-8")).hexdigest()
    return "%s/%s.jpg" % (folder_key, file_key)


def folder_and_name(rel: str) -> tuple[str, str]:
    rel = clean_rel(rel)
    folder, _sep, name = rel.rpartition("/")
    return folder, name


def fit_long_edge(img, edge: int):
    from PIL import Image

    width, height = img.size
    if max(width, height) == edge:
        return img
    resample = getattr(getattr(Image, "Resampling", Image), "LANCZOS")
    if width >= height:
        new_w = edge
        new_h = max(1, round(height * edge / float(width)))
    else:
        new_h = edge
        new_w = max(1, round(width * edge / float(height)))
    return img.resize((new_w, new_h), resample)


def prepare_jpeg(path: Path) -> tuple[bytes, int, int]:
    from PIL import Image, ImageOps

    with Image.open(path) as raw:
        raw.load()
        image = ImageOps.exif_transpose(raw)
        if image.mode in ("RGBA", "LA") or (image.mode == "P" and "transparency" in image.info):
            rgba = image.convert("RGBA")
            base = Image.new("RGB", rgba.size, (255, 255, 255))
            base.paste(rgba, mask=rgba.getchannel("A"))
            image = base
        else:
            image = image.convert("RGB")
        image = fit_long_edge(image, LONG_EDGE)
        quality = JPEG_QUALITY
        data = b""
        while True:
            buf = io.BytesIO()
            image.save(buf, format="JPEG", quality=quality, optimize=True)
            data = buf.getvalue()
            if len(data) <= MAX_BYTES or quality <= 50:
                break
            quality -= 6
        width, height = image.size
        return data, width, height


def iter_images(root: Path):
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [name for name in dirnames if name and not name.startswith(".")]
        for name in filenames:
            if not name or name.startswith("."):
                continue
            if Path(name).suffix.lower() not in IMAGE_EXT:
                continue
            full = Path(dirpath) / name
            rel = clean_rel(full.relative_to(root).as_posix())
            try:
                stat = full.stat()
                size = int(stat.st_size)
                mtime_ns = int(stat.st_mtime_ns)
            except OSError as exc:
                LOG.warning("상태를 읽지 못했습니다. %s (%s)", rel, exc)
                size = -1
                mtime_ns = -1
            yield rel, full, size, mtime_ns


def load_manifest(path: Path) -> dict:
    if not path.exists():
        return {"v": 1, "files": {}}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        LOG.warning("매니페스트를 읽지 못해 새로 비교합니다.")
        return {"v": 1, "files": {}}
    files = data.get("files") if isinstance(data, dict) else None
    if not isinstance(files, dict):
        return {"v": 1, "files": {}}
    return {"v": 1, "files": files}


def save_manifest(path: Path, manifest: dict) -> None:
    atomic_write(path, json.dumps(manifest, ensure_ascii=False, indent=2))


def read_refresh(path: Path) -> str:
    if not path.exists():
        return ""
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return ""
    token = data.get("refresh_token") if isinstance(data, dict) else ""
    return token if isinstance(token, str) else ""


def save_refresh(path: Path, refresh: str) -> None:
    # 이 파일에는 갱신 토큰만 둡니다. 접근 토큰·비밀번호·원본 폴더는 쓰지 않습니다.
    atomic_write(path, json.dumps({"refresh_token": refresh}, ensure_ascii=False))
    try:
        os.chmod(path, 0o600)
    except OSError:
        pass


class RunLock:
    def __init__(self, path: Path):
        self.path = path
        self.handle = None

    def acquire(self) -> bool:
        self.handle = open(self.path, "a+b")
        try:
            if os.name == "nt":
                import msvcrt

                self.handle.seek(0, os.SEEK_END)
                if self.handle.tell() == 0:
                    self.handle.write(b"0")
                    self.handle.flush()
                self.handle.seek(0)
                msvcrt.locking(self.handle.fileno(), msvcrt.LK_NBLCK, 1)
            else:
                import fcntl

                fcntl.flock(self.handle.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
        except OSError:
            try:
                self.handle.close()
            except OSError:
                pass
            self.handle = None
            return False
        return True

    def release(self) -> None:
        if not self.handle:
            return
        try:
            if os.name == "nt":
                import msvcrt

                self.handle.seek(0)
                msvcrt.locking(self.handle.fileno(), msvcrt.LK_UNLCK, 1)
            else:
                import fcntl

                fcntl.flock(self.handle.fileno(), fcntl.LOCK_UN)
        except OSError:
            pass
        try:
            self.handle.close()
        except OSError:
            pass
        self.handle = None


def http_request(method: str, url: str, headers: dict, body: bytes | None, timeout: int):
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as res:
            return res.status, res.read()
    except urllib.error.HTTPError as exc:
        return exc.code, exc.read()


def request(method, url, headers, body=None, timeout=60, ok=(200, 201, 204), attempts=3):
    data = body
    if body is not None and not isinstance(body, bytes):
        data = json.dumps(body, ensure_ascii=False).encode("utf-8")
        headers = dict(headers)
        headers.setdefault("Content-Type", "application/json")
    last = "연결 실패"
    for attempt in range(attempts):
        try:
            status, raw = http_request(method, url, headers, data, timeout)
        except (urllib.error.URLError, TimeoutError, ConnectionError, OSError) as exc:
            last = safe_text(exc)
            time.sleep(2 ** attempt)
            continue
        if status in (429, 500, 502, 503, 504) and attempt + 1 < attempts:
            last = "HTTP %s" % status
            time.sleep(2 ** attempt)
            continue
        if status not in ok:
            raise HttpError(status, safe_text(raw))
        if not raw:
            return None
        try:
            return json.loads(raw.decode("utf-8"))
        except json.JSONDecodeError:
            return raw
    raise SyncError(last)


def auth_headers(key: str, token: str | None = None) -> dict:
    return {
        "apikey": key,
        "Authorization": "Bearer " + (token or key),
        "Content-Type": "application/json",
        "Accept": "application/json",
    }


def describe_auth_failure(status: int, raw: bytes) -> None:
    code = ""
    desc = ""
    try:
        obj = json.loads(raw.decode("utf-8", errors="replace") or "{}")
        code = str(obj.get("error") or "")
        desc = str(obj.get("error_description") or obj.get("msg") or obj.get("message") or "")
    except json.JSONDecodeError:
        desc = ""
    text = safe_text(desc)
    blob = (code + " " + desc).lower()
    if "refresh" in blob:
        raise InvalidGrant(text or "로그인이 만료되었습니다.")
    if status in (400, 401, 422):
        raise InvalidGrant(text or "이메일 또는 비밀번호가 맞지 않습니다.")
    raise HttpError(status, text or "로그인 요청 실패")


def auth_token(url: str, key: str, payload: dict) -> tuple[str, str, float]:
    grant = "refresh_token" if "refresh_token" in payload else "password"
    endpoint = url + "/auth/v1/token?grant_type=" + grant
    body = json.dumps(payload).encode("utf-8")
    try:
        status, raw = http_request("POST", endpoint, auth_headers(key), body, 30)
    except (urllib.error.URLError, TimeoutError, ConnectionError, OSError) as exc:
        raise SyncError("로그인 서버에 연결하지 못했습니다. " + safe_text(exc))
    if status not in (200, 201):
        describe_auth_failure(status, raw)
    try:
        data = json.loads(raw.decode("utf-8"))
    except json.JSONDecodeError as exc:
        raise SyncError("로그인 응답을 읽지 못했습니다.") from exc
    access = data.get("access_token") or ""
    refresh = data.get("refresh_token") or ""
    if not access or not refresh:
        raise SyncError("로그인 응답에 세션이 없습니다.")
    expires = time.time() + int(data.get("expires_in") or 3600)
    return access, refresh, expires


def ask_login() -> dict | None:
    try:
        import tkinter as tk
        from tkinter import messagebox
    except Exception as exc:
        LOG.error("로그인 창을 열지 못했습니다. (%s)", safe_text(exc))
        return None
    root = tk.Tk()
    root.title("썸네일 동기화 로그인")
    root.resizable(False, False)
    try:
        root.attributes("-topmost", True)
    except tk.TclError:
        pass
    frame = tk.Frame(root, padx=16, pady=14)
    frame.pack()
    tk.Label(frame, text="플래너에 쓰는 팀 계정으로 로그인합니다.").grid(row=0, column=0, columnspan=2, sticky="w", pady=(0, 10))
    tk.Label(frame, text="이메일").grid(row=1, column=0, sticky="w")
    email = tk.Entry(frame, width=36)
    email.grid(row=1, column=1, pady=4)
    tk.Label(frame, text="비밀번호").grid(row=2, column=0, sticky="w")
    password = tk.Entry(frame, width=36, show="•")
    password.grid(row=2, column=1, pady=4)
    result = {"ok": False, "email": "", "password": ""}

    def submit(_event=None):
        result["ok"] = True
        result["email"] = email.get().strip()
        result["password"] = password.get()
        root.destroy()

    def cancel(_event=None):
        root.destroy()

    buttons = tk.Frame(frame)
    buttons.grid(row=3, column=0, columnspan=2, pady=(10, 0))
    tk.Button(buttons, text="로그인", width=12, command=submit).pack(side="left", padx=4)
    tk.Button(buttons, text="취소", width=12, command=cancel).pack(side="left", padx=4)
    root.bind("<Return>", submit)
    root.bind("<Escape>", cancel)
    email.focus_set()
    root.mainloop()
    if not result["ok"]:
        return None
    if not result["email"] or not result["password"]:
        try:
            messagebox.showwarning("썸네일 동기화", "이메일과 비밀번호를 입력해 주세요.")
        except tk.TclError:
            pass
        return ask_login()
    return result


class Client:
    def __init__(self, url: str, key: str, access: str, refresh: str, expires: float, session_path: Path):
        self.url = url
        self.key = key
        self.access = access
        self.refresh = refresh
        self.expires = expires
        self.session_path = session_path

    def headers(self, extra=None) -> dict:
        base = auth_headers(self.key, self.access)
        if extra:
            base.update(extra)
        return base

    def refresh_if_needed(self) -> None:
        if time.time() < self.expires - 90:
            return
        access, refresh, expires = auth_token(self.url, self.key, {"refresh_token": self.refresh})
        self.access = access
        self.refresh = refresh
        self.expires = expires
        save_refresh(self.session_path, refresh)

    def list_storage(self) -> set[str]:
        found = set()
        seen = set()

        def walk(prefix: str) -> None:
            if prefix in seen or prefix.count("/") > 6:
                return
            seen.add(prefix)
            offset = 0
            while True:
                self.refresh_if_needed()
                rows = request(
                    "POST",
                    self.url + "/storage/v1/object/list/" + BUCKET,
                    self.headers(),
                    {"prefix": prefix, "limit": 1000, "offset": offset, "sortBy": {"column": "name", "order": "asc"}},
                    timeout=60,
                )
                if not isinstance(rows, list) or not rows:
                    return
                for row in rows:
                    if not isinstance(row, dict):
                        continue
                    name = str(row.get("name") or "")
                    if not name or name == ".emptyFolderPlaceholder":
                        continue
                    if row.get("id") is None:
                        walk(prefix + name.strip("/") + "/")
                    else:
                        found.add(prefix + name)
                if len(rows) < 1000:
                    return
                offset += 1000

        walk("")
        return found

    def list_index(self) -> set[str]:
        found = set()
        offset = 0
        while True:
            self.refresh_if_needed()
            rows = request(
                "GET",
                self.url + "/rest/v1/thumb_index?select=path&limit=1000&offset=%d" % offset,
                self.headers(),
                timeout=60,
            )
            if not isinstance(rows, list) or not rows:
                break
            for row in rows:
                if isinstance(row, dict) and row.get("path"):
                    found.add(str(row["path"]))
            if len(rows) < 1000:
                break
            offset += 1000
        return found

    def upload(self, key: str, data: bytes) -> None:
        self.refresh_if_needed()
        quoted = "/".join(urllib.parse.quote(part, safe="") for part in key.split("/"))
        request(
            "POST",
            self.url + "/storage/v1/object/" + BUCKET + "/" + quoted,
            self.headers({"Content-Type": "image/jpeg", "x-upsert": "true"}),
            data,
            timeout=120,
        )

    def upsert_index(self, row: dict) -> None:
        self.refresh_if_needed()
        request(
            "POST",
            self.url + "/rest/v1/thumb_index?on_conflict=path",
            self.headers({"Prefer": "resolution=merge-duplicates,return=minimal"}),
            [row],
            timeout=60,
        )

    def delete_object(self, key: str) -> None:
        self.refresh_if_needed()
        quoted = "/".join(urllib.parse.quote(part, safe="") for part in key.split("/"))
        try:
            request(
                "DELETE",
                self.url + "/storage/v1/object/" + BUCKET + "/" + quoted,
                self.headers(),
                timeout=60,
                ok=(200, 204, 404),
            )
        except HttpError as exc:
            if exc.status != 404:
                raise

    def delete_index(self, key: str) -> None:
        self.refresh_if_needed()
        request(
            "DELETE",
            self.url + "/rest/v1/thumb_index?path=eq." + urllib.parse.quote(key, safe=""),
            self.headers(),
            timeout=60,
            ok=(200, 204, 404),
        )


def open_session(url: str, key: str, session_path: Path, dry_run: bool) -> Client | None:
    refresh = read_refresh(session_path)
    if refresh:
        try:
            access, new_refresh, expires = auth_token(url, key, {"refresh_token": refresh})
            save_refresh(session_path, new_refresh)
            LOG.info("저장된 로그인으로 세션을 갱신했습니다.")
            return Client(url, key, access, new_refresh, expires, session_path)
        except InvalidGrant:
            LOG.info("저장된 로그인이 만료되어 다시 묻습니다.")
            try:
                session_path.unlink()
            except OSError:
                pass
        except SyncError as exc:
            LOG.error("세션 갱신 실패: %s", safe_text(exc))
            if dry_run:
                return None
            raise
    if dry_run:
        LOG.info("로그인이 없어 원격 삭제 확인은 건너뜁니다.")
        return None
    while True:
        creds = ask_login()
        if not creds:
            LOG.info("로그인을 취소했습니다.")
            return None
        email = creds["email"]
        password = creds["password"]
        creds["password"] = ""
        try:
            access, new_refresh, expires = auth_token(url, key, {"email": email, "password": password})
            save_refresh(session_path, new_refresh)
            LOG.info("로그인했습니다. (%s)", email)
            return Client(url, key, access, new_refresh, expires, session_path)
        except InvalidGrant as exc:
            LOG.info("로그인 실패: %s", safe_text(exc))
            try:
                import tkinter as tk
                from tkinter import messagebox

                root = tk.Tk()
                root.withdraw()
                messagebox.showerror("썸네일 동기화", "이메일 또는 비밀번호가 맞지 않습니다.")
                root.destroy()
            except Exception:
                return None
        finally:
            password = ""


def keys_to_delete(present, manifest_files, remote_paths) -> set[str]:
    desired = {object_key(rel) for rel in present}
    stale = set()
    for rel, entry in manifest_files.items():
        if not isinstance(entry, dict) or not entry.get("path"):
            continue
        if rel not in present or entry.get("path") != object_key(rel):
            stale.add(str(entry["path"]))
    return (set(remote_paths) | stale) - desired


def sync_once(dry_run: bool) -> int:
    root = Path(SOURCE_DIR)
    LOG.info("원본 폴더: %s%s", root, " (미리보기)" if dry_run else "")
    if not root.is_dir():
        LOG.error("원본 폴더가 없습니다.")
        return 1
    url, key = load_public_config()
    base = app_dir()
    manifest_path = base / "thumb_manifest.json"
    session_path = base / "thumb_sync.json"
    manifest = load_manifest(manifest_path)
    files = manifest["files"]
    local = list(iter_images(root))
    present = {rel for rel, _full, _size, _mtime in local}
    try:
        client = open_session(url, key, session_path, dry_run)
    except SyncError as exc:
        LOG.error("로그인 실패: %s", safe_text(exc))
        return 1
    if client is None and not dry_run:
        return 0
    remote = set()
    remote_ok = False
    if client is not None:
        try:
            remote = client.list_storage() | client.list_index()
            remote_ok = True
        except SyncError as exc:
            LOG.error("원격 목록을 읽지 못했습니다. 삭제는 건너뜁니다. %s", safe_text(exc))
            if not dry_run:
                return 1
    uploaded = skipped = deleted = failed = 0
    for rel, full, size, mtime_ns in local:
        key = object_key(rel)
        entry = files.get(rel) if isinstance(files.get(rel), dict) else None
        unchanged = bool(
            entry
            and int(entry.get("mtime_ns") or -1) == mtime_ns
            and int(entry.get("size") or -2) == size
            and entry.get("path") == key
            and size > 0
        )
        on_remote = (not remote_ok) or key in remote
        if unchanged and on_remote:
            skipped += 1
            continue
        if size <= 0:
            LOG.info("건너뜀 (비어 있거나 아직 받지 못함): %s", rel)
            skipped += 1
            continue
        folder, name = folder_and_name(rel)
        if dry_run:
            LOG.info("올릴 예정: %s -> %s", rel, key)
            uploaded += 1
            continue
        try:
            data, width, height = prepare_jpeg(full)
            if not data or len(data) > MAX_BYTES:
                raise SyncError("만든 JPEG가 비어 있거나 5MB를 넘습니다.")
            assert client is not None
            client.upload(key, data)
            client.upsert_index({
                "path": key,
                "folder": folder,
                "name": name,
                "width": width,
                "height": height,
                "bytes": len(data),
                "updated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            })
            files[rel] = {"mtime_ns": mtime_ns, "size": size, "path": key, "bytes": len(data)}
            save_manifest(manifest_path, manifest)
            uploaded += 1
            LOG.info("올림: %s -> %s (%d bytes, %dx%d)", rel, key, len(data), width, height)
        except Exception as exc:
            failed += 1
            LOG.error("실패: %s (%s)", rel, safe_text(exc))
    delete_keys = keys_to_delete(present, files, remote) if remote_ok else set()
    if not remote_ok and dry_run:
        LOG.info("원격 목록이 없어 삭제 예정을 계산하지 않습니다.")
    for key in sorted(delete_keys):
        if dry_run:
            LOG.info("지울 예정: %s", key)
            deleted += 1
            continue
        try:
            assert client is not None
            client.delete_object(key)
            client.delete_index(key)
            deleted += 1
            LOG.info("지움: %s", key)
        except Exception as exc:
            failed += 1
            LOG.error("삭제 실패: %s (%s)", key, safe_text(exc))
    if not dry_run:
        for rel in [rel for rel in list(files) if rel not in present]:
            files.pop(rel, None)
        for rel, entry in list(files.items()):
            if isinstance(entry, dict) and entry.get("path") and entry.get("path") != object_key(rel):
                files.pop(rel, None)
        save_manifest(manifest_path, manifest)
    verb = "예정" if dry_run else "완료"
    LOG.info("끝 (%s). 올림 %d, 그대로 %d, 삭제 %d, 실패 %d", verb, uploaded, skipped, deleted, failed)
    return 1 if failed else 0


def xml_escape(text: str) -> str:
    return (
        str(text)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def write_task_xml(target: Path) -> int:
    pythonw = Path(sys.executable).with_name("pythonw.exe")
    if not pythonw.exists():
        print("pythonw.exe 를 찾지 못했습니다. Python 3.12 전체 설치가 필요합니다.", file=sys.stderr)
        return 1
    script = str(Path(__file__).resolve())
    user = os.environ.get("USERNAME") or os.environ.get("USER") or ""
    domain = os.environ.get("USERDOMAIN") or ""
    user_id = (domain + "\\" + user) if domain and user else user
    arguments = '"%s" --once' % script
    description = "AI 썸네일 폴더를 비공개 thumbs 버킷에 동기화"
    xml = """<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.2" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Description>%s</Description>
  </RegistrationInfo>
  <Triggers>
    <TimeTrigger>
      <StartBoundary>2026-01-01T00:00:00</StartBoundary>
      <Enabled>true</Enabled>
      <Repetition>
        <Interval>PT10M</Interval>
        <StopAtDurationEnd>false</StopAtDurationEnd>
      </Repetition>
    </TimeTrigger>
    <LogonTrigger>
      <Enabled>true</Enabled>
      <UserId>%s</UserId>
    </LogonTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <UserId>%s</UserId>
      <LogonType>InteractiveToken</LogonType>
      <RunLevel>LeastPrivilege</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>false</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>false</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>true</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>true</RunOnlyIfNetworkAvailable>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>true</Hidden>
    <ExecutionTimeLimit>PT1H</ExecutionTimeLimit>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>%s</Command>
      <Arguments>%s</Arguments>
      <WorkingDirectory>%s</WorkingDirectory>
    </Exec>
  </Actions>
</Task>
""" % (
        xml_escape(description),
        xml_escape(user_id),
        xml_escape(user_id),
        xml_escape(str(pythonw)),
        xml_escape(arguments),
        xml_escape(str(Path(script).parent)),
    )
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(xml.encode("utf-16"))
    return 0


def parse_args(argv: list[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="AI 썸네일 폴더를 비공개 Supabase thumbs 버킷과 맞춥니다.")
    parser.add_argument("--once", action="store_true", help="한 번만 실행하고 종료합니다. 생략해도 한 번만 실행합니다.")
    parser.add_argument("--dry-run", action="store_true", help="올리거나 지우지 않고 로그만 남깁니다.")
    parser.add_argument("--emit-task-xml", metavar="FILE", help=argparse.SUPPRESS)
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(sys.argv[1:] if argv is None else argv)
    if args.emit_task_xml:
        return write_task_xml(Path(args.emit_task_xml))
    setup_log()
    lock = RunLock(app_dir() / "thumb_sync.lock")
    if not lock.acquire():
        LOG.info("이미 실행 중이라 이번 실행은 건너뜁니다.")
        return 0
    try:
        mode = "한 번 실행"
        if args.dry_run:
            mode += ", 미리보기"
        LOG.info("시작 (%s)", mode)
        return sync_once(dry_run=bool(args.dry_run))
    finally:
        lock.release()


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except KeyboardInterrupt:
        raise SystemExit(1)
