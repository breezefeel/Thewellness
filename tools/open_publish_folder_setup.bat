@echo off
chcp 65001 >nul
setlocal EnableExtensions
rem ============================================================
rem 플래너에서 릴스 파일 칸을 누르면 MYBOX 「11. 발행 확인」 폴더가 열리게 합니다.
rem 이 파일은 한 번만 실행하면 됩니다. 관리자 권한은 필요 없습니다.
rem 현재 사용자 레지스트리(HKCU)에 thewellness-folder:// 주소를 하나 등록합니다.
rem 등록된 명령은 아래 폴더를 탐색기로 여는 것뿐입니다. 주소에 무엇이 붙어도 다른 폴더는 열지 않습니다.
rem 처음 누를 때 브라우저가 「탐색기를 열까요?」라고 물으면 허용하세요. 「항상 허용」을 고르면 다시 묻지 않습니다.
rem 지울 때는 open_publish_folder_remove.bat 을 실행하세요.
rem ============================================================

set "KEY=HKCU\Software\Classes\thewellness-folder"
set "FOLDER=N:\개인\00.사진+영상\11. 발행 확인"

reg add "%KEY%" /ve /d "URL:Thewellness Folder" /f >nul
if errorlevel 1 goto :fail
reg add "%KEY%" /v "URL Protocol" /d "" /f >nul
if errorlevel 1 goto :fail
reg add "%KEY%\shell\open\command" /ve /d "explorer.exe \"%FOLDER%\"" /f >nul
if errorlevel 1 goto :fail

echo 등록했습니다. 플래너의 릴스 파일 칸을 누르면 아래 폴더가 열립니다.
echo   %FOLDER%
if not exist "%FOLDER%" (
  echo 지금은 이 폴더를 찾지 못했습니다. N: 드라이브^(MYBOX^)가 연결돼 있는지 확인해 주세요.
)
exit /b 0

:fail
echo 등록하지 못했습니다. 이 창을 닫고 다시 실행해 보세요.
exit /b 1
