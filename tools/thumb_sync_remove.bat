@echo off
chcp 65001 >nul
setlocal EnableExtensions
rem ============================================================
rem 썸네일 동기화 작업을 작업 스케줄러에서 지웁니다.
rem ThewellnessThumbSync 작업만 삭제합니다.
rem 저장된 로그인(갱신 토큰), 로그, 매니페스트는 지우지 않습니다.
rem 그것까지 지우려면 %LOCALAPPDATA%\thewellness 폴더를 직접 삭제하세요.
rem 사진 폴더(MYBOX)와 Supabase 버킷은 건드리지 않습니다.
rem ============================================================

schtasks /Delete /F /TN "ThewellnessThumbSync"
if errorlevel 1 (
  echo 작업이 없거나 지우지 못했습니다.
  exit /b 1
)
echo 썸네일 동기화 작업을 지웠습니다.
exit /b 0
