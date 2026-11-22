@echo off
title Pagecraft - keep this window open
cd /d "%~dp0"
start "" cmd /c "timeout /t 2 >nul & start http://localhost:4321/"
node tools\serve.cjs
pause
