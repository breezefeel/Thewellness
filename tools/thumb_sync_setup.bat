@echo off
chcp 65001 >nul
setlocal EnableExtensions
rem ============================================================
rem 썸네일 동기화 작업을 Windows 작업 스케줄러에 등록합니다.
rem 현재 로그온한 사용자로 등록합니다. 관리자 권한은 필요 없습니다.
rem 10분마다 실행하고, 로그온할 때도 한 번 실행합니다.
rem 창은 뜨지 않습니다. pythonw 로 tools\thumb_sync.py --once 를 숨겨 실행합니다.
rem 이 파일은 한 번만 실행하면 됩니다. 등록 직후 로그인 창이 열립니다.
rem 플래너 이메일과 비밀번호는 그 창에서만 입력합니다.
rem 컴퓨터에는 갱신 토큰만 저장합니다. 사진 폴더(MYBOX)에는 아무 것도 쓰지 않습니다.
rem 기록은 %LOCALAPPDATA%\thewellness\thumb_sync.log 에 남습니다.
rem 작업을 지울 때는 thumb_sync_remove.bat 을 실행하세요.
rem ============================================================

set "TASK=ThewellnessThumbSync"
set "SCRIPT=%~dp0thumb_sync.py"
set "XML=%TEMP%\thewellness-thumb-sync.xml"

where py >nul 2>&1
if errorlevel 1 (
  echo Python 런처^(py^)를 찾지 못했습니다. Python 3.12를 설치한 뒤 다시 실행하세요.
  exit /b 1
)

py -3.12 "%SCRIPT%" --emit-task-xml "%XML%"
if errorlevel 1 (
  echo 작업 설정 파일을 만들지 못했습니다. Python 3.12에 pythonw.exe 가 있는지 확인해 주세요.
  exit /b 1
)

schtasks /Create /F /TN "%TASK%" /XML "%XML%"
set "RC=%ERRORLEVEL%"
del /f /q "%XML%" >nul 2>&1
if not "%RC%"=="0" (
  echo 작업 등록에 실패했습니다. 작업 스케줄러에서 %TASK% 를 확인해 주세요.
  exit /b %RC%
)

echo 작업을 등록했습니다. 10분마다, 그리고 로그온할 때 창 없이 동기화합니다.
echo 지금 로그인 창을 엽니다. 플래너 이메일과 비밀번호를 한 번 입력하세요.
for /f "delims=" %%I in ('py -3.12 -c "import pathlib,sys; p=pathlib.Path(sys.executable).with_name('pythonw.exe'); print(p if p.exists() else sys.executable)"') do set "PYW=%%I"
start "" "%PYW%" "%SCRIPT%" --once
echo 기록: %LOCALAPPDATA%\thewellness\thumb_sync.log
exit /b 0
