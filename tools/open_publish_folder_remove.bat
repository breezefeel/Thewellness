@echo off
chcp 65001 >nul
setlocal EnableExtensions
rem ============================================================
rem open_publish_folder_setup.bat 이 등록한 thewellness-folder:// 주소를 지웁니다.
rem 사진 폴더(MYBOX)와 플래너 데이터는 건드리지 않습니다.
rem ============================================================

reg delete "HKCU\Software\Classes\thewellness-folder" /f >nul 2>&1
if errorlevel 1 (
  echo 등록된 주소가 없거나 지우지 못했습니다.
  exit /b 1
)
echo 등록을 지웠습니다. 플래너의 릴스 파일 칸을 눌러도 폴더가 열리지 않습니다.
exit /b 0
