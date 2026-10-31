# 🌟 寶貝英語大冒險 (Spelling Bee & Phonics Adventure)

專為**國小一年級小朋友**設計的 Spelling Bee 聽音拼字與自然發音練習網頁。  
特別針對 **iPad 觸控螢幕** 與 **兒童認知習慣** 打造，零外部音檔依賴，純靜態網頁設計，支援一鍵部署至 GitHub Pages！

---

## ✨ 核心特色

1. **方案 C：音節拆分彩色視圖（Syllable Chunks）**
   * **單音節不拆**：如 `cat`、`dog`、`act` 保持純色展示。
   * **雙/多音節標註**：如 `rab-bit`、`cook-ie`、`hel-i-cop-ter` 拆為馬卡龍撞色積木，**手點個別音節直接發音**！
2. **三段式階梯練習（有得玩又真正背得起來）**：
   * 🧩 **字母磁鐵積木拼字（iPad 首選）**：聽聲音，點擊打散的字母積木自動吸附進空格，答對清脆叮咚 + 迷你煙火。
   * 🗣️ **看圖口說翻卡自測**：看大圖大聲說出單字，翻開對答案，答錯怪獸吃字飛出。
   * 📝 **正式 Spelling Bee 紙筆模式**：大喇叭唸題，模擬學校比試，拿白板或紙筆寫完對答案。
3. **🐝 小蜜蜂採蜜闖關地圖**：
   * 頂部動態跑道，答對小蜜蜂飛向下一朵花，集滿單元抵達終點大蜂蜜罐！
4. **👾 怪獸本進化（淨化收服機制）**：
   * 錯題自動由小怪獸抓走；進入怪獸本挑戰成功，怪獸轉化為愛心被淨化收服。
5. **iPad 專屬體驗優化**：
   * **防誤觸**：禁用雙擊連點縮放（`touch-action: manipulation`），禁止長按反白放大鏡。
   * **純程式碼合成音效（Web Audio API）**：答對、吞吃、積木敲擊、星星琶音、過關號角完全免外包音檔，零延遲不卡頓。
   * **PWA 支援**：iPad Safari 點「分享 ➔ 加入主畫面」，即可全螢幕無網址列執行，宛如原生 App。

---

## 📂 專案架構

```text
spelling_bee/
├── index.html              # 主頁面骨架（PWA 與 iPad 視窗適配）
├── manifest.json           # PWA 應用清單
├── css/
│   └── style.css           # 馬卡龍撞色標籤、磁鐵積木、iPad 觸控樣式
├── js/
│   ├── audio.js            # iOS Audio Unlock、Web Audio 合成音效、TTS 朗讀
│   ├── game.js             # 字母積木拼字、看圖口說、紙筆聽寫狀態機
│   └── app.js              # 全域狀態、單元切換、怪獸本淨化
└── data/
    ├── spelling_bee.js     # Spelling Bee Starter A (Part 1~4 共 60 字)
    └── weekly_words.js     # 每周學習單字 (第 5~19 週共 275 個項目)
```

---

## 🚀 如何上傳到 GitHub 並開啟 GitHub Pages

### 步驟 1：建立 GitHub Repository 並推送程式碼
在終端機（Terminal / PowerShell）中執行：

```bash
git init
git add .
git commit -m "Initial commit: Spelling Bee Adventure"
git branch -M main
git remote add origin https://github.com/<你的GitHub帳號>/<你的Repo名稱>.git
git push -u origin main
```

### 步驟 2：開啟 GitHub Pages（免費免伺服器）
1. 進入你的 GitHub Repository 頁面。
2. 點擊頂部的 **Settings** ➔ 左側選單選擇 **Pages**。
3. 在 **Build and deployment** 下方的 **Branch**：
   * 選擇 `main` 分支。
   * 資料夾保持 `/ (root)`。
   * 點擊 **Save**。
4. 等待 1~2 分鐘，上方會出現專屬網址（例如 `https://<帳號>.github.io/<Repo名稱>/`）。
5. 在 iPad 上開啟該網址，點擊 Safari 底部「分享」按鈕 ➔ 選擇 **「加入主畫面」**，即可作為獨立 App 供小朋友練習！
