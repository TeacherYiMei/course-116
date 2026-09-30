# 資訊科闖關網站｜完整專案包 v5

這個 ZIP 同時保存：
1. 目前可操作的 v5 網站程式
2. 專案母檔 v3
3. 版本紀錄
4. 網站啟動方式
5. 後續開發待辦

## 先看哪裡？
- 教師入口：`teacher.html`
- 一般入口：`index.html`
- 專案基準：`project_docs/資訊科闖關網站_專案母檔_v3.md`

## 本機測試
不要直接雙擊 Python 頁面測試。
在專案根目錄開啟命令提示字元：

    python -m http.server 8000

瀏覽器開啟：

    http://localhost:8000/

教師入口：

    http://localhost:8000/teacher.html

## 目前資料
目前仍以 localStorage 為主，尚未接 Firebase。
