사용자에게 하는 답변은 항상 한글로 쓴다.

# 이 폴더에서 파일을 쓸 때

Git이 없고 N: 마이박스 + 한글 파일명이라, Cursor 로컬 히스토리가 **다른 파일 내용을 덮어쓴 사고**가 반복된다. 새 문서는 새 파일명으로만 만든다.

쓰기 전에 대상 파일 앞부분을 읽고, `tools/file-identity.json` 마커와 맞는지 확인한다. 안 맞으면 그 경로에 쓰지 않는다. 작업 후 `python tools/check_file_identity.py`를 실행한다.

마케팅·카피 작업은 `.cursor/rules/marketing-lenses.mdc`를 따르고, 세부 논의·업데이트는 `마케팅_전략.md`에 쌓는다.

「마케팅 현황 업데이트」 요청은 플래너 「분석하기」 버튼과 같다. 데스크탑에서 네이버 연결이 있으면 플래너가 `광고연결켜기.bat`을 켜고 `/analyze`를 시작한다(`tools/channel_fetch.py` → `tools/marketing_report.py`). 인스타·쓰레드는 플래너 「발행완료」 기준이라 확인하지 않는다(로그인 정보는 저장하지 않는다). channel_fetch가 실패한 채널만 `tools/channel_check.js` 함수로 브라우저에서 읽는다.

홍보 현황은 「브랜딩」(SNS·소식·채널 프로필 검토) · 「약수점」「인천점」(네이버·구글 키워드 광고) 탭이다. 사용자가 붙여 넣은 보고서의 `T번호`는 그 보고서 안의 할 일, 「채널 검토 PL-01」 같은 ID는 `플래너/ops-channel-review-seed.js` 항목이다 — 그 항목의 now·fix·where로 붙여 넣을 문구 초안을 만들고 위치를 안내한다(계정 화면 수정은 사용자가 직접). 「채널 프로필 다시 검토」 요청이면 seed 맨 위 sources 페이지를 브라우저로 다시 열어 now를 고치고 checkedAt·version을 올린다.

광고 반영은 플래너 「적용하기」가 기본이다: 사용자가 `광고연결켜기.bat`(= `tools/ads_apply_server.py`, 127.0.0.1:28765)을 켜 두면 플래너가 미리보기 → 「이대로 적용」으로 네이버(`tools/naver_apply.py`)·구글(`tools/google_ads_sync.py`의 `sync_plan`)에 반영한다. 플래너에서 고친 키워드·소재는 플래너 저장값이라 커서 CLI는 시드 기준이다 — 커서로 반영할 때는 사용자가 플래너에서 고친 게 없는지 먼저 묻는다.

「네이버 키워드·소재 반영」 요청은 CSV 대신 API로 한다: `python tools/naver_apply.py`(옵션 없이 = 미리보기)로 바뀔 내용을 보여 주고, 사용자가 확인하면 `--apply` (`--branch`, `--scope keywords,ads,extensions`). 그룹 구성·지역·전용 소재는 `tools/naver_groups.json`, 지역·확장 검색은 `tools/naver_setup_groups.py`. 뺀 항목은 끄기만 한다. 삭제(`naver_kw_cleanup.py --delete`)는 사용자가 명시할 때만.

「구글 캠페인·키워드 반영」 요청도 Editor CSV 대신 API로 한다: `tools/google_ads_sync.py`를 먼저 옵션 없이 실행(구글 검증만)해 바뀔 내용을 보여 주고, 사용자가 확인하면 `--apply`. 새 캠페인은 일시중지로 만들어지고, 켜기는 사용자가 원할 때 `--start`. 로그인 만료 시 `python tools/google_ads_api.py login`. API는 탐색기 등급이라 하루 2,880건(한국 시간 오후 4시쯤 초기화) — 「Too many requests」면 다음 날 다시 한다.

광고 API 키는 `_비공개키/` (네이버 `naver-searchad/config.json`, 구글 `google-ads/client_secret.json`·`token.json`, 인스타·쓰레드 `meta/instagram.json`·`threads.json` — `tools/meta_api.py`, Meta 앱 「RealMovement Planner」, @dr.park_dc.pt 하나로 올리고 다른 계정은 공동작업자)에 둔다. 여러 컴퓨터가 마이박스로 공유하는 폴더다. 내용을 읽거나 채팅에 출력하지 말고, `플래너/`나 깃허브에 복사하지 않는다.

| 파일 | 마커 |
|---|---|
| `전문가과정_통합.html` | `전문가 과정` |
| `프로필.html` | `미카닥 박준규 — 근골격계 전문가의 움직임 처방` |
| `플래너/플래너.html` | `브랜딩 플래너` |
| `강사앱/self.html` | `셀프 가이드` |
| `리얼무브먼트_부스안내.html` | `체험 부스 안내` |
| `IFC 국제얼굴교정학회.html` | `국제얼굴교정학회 공식 프로그램` |
| `이마트 제안서/문화센터_얼굴운동_강의안-260918.html` | `문화센터 얼굴 운동 강의안` |
| `강사앱/강사앱.html` | `Re:Al 회원 관리` |
| `전력 관리.html` | `전력 관리` |
| `명함 & 브로셔/리얼무브먼트_인천_브로셔.html` | `인천점 브로셔` |
| `명함 & 브로셔/리얼무브먼트_약수_브로셔.html` | `약수점 브로셔` |
| `HTML_미리보기.bat` / `전력서버켜기.bat` | `@echo off` |
| `open_html.py` | `http.server` |
