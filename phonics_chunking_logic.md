# 英文單字自然拼讀分塊與發音工程規範（Phonics Chunking & Audio Spec）

> **版本**：v2.0  
> **更新日期**：2026-11-01  
> **適用對象**：國小一～六年級學生英語拼讀教學、Spelling Bee 練習系統、跨平台 Web / iPad 網頁應用。  
> **v2.0 升級摘要**：
> 1. **新增「B軌 SSML 國際音標微音檔」架構**：徹底解決瀏覽器原生 TTS 遇縮寫（如 `ig` 唸 I-G、`os` 唸 O-S、`afe` 唸 A-I-F）亂唸字母名的死穴。
> 2. **新增「音訊 DSP 裁切與音量正規化」標準**：規範 40ms 頭尾靜音裁切與 Peak Normalization，確保分塊連音拼讀時零延遲、不爆音。
> 3. **新增「A軌 防縮寫雙子音 TTS 擬音字典」**：無音檔時自動 fallback 雙子音（`igg`, `oss`, `ayff`, `suh`）。
> 4. **新增「響應式插槽（Slot）排版標準」**：規範單字長度自適應縮放，杜絕 6 字以上單字折行破版。
> 5. **新增「新單字擴充標準作業程序（SOP）」**：提供可直接複製執行的 Python / PowerShell 自動生成腳本。

---

## 目錄
- [一、核心原則與三大驗證標準](#一核心原則與三大驗證標準)
- [二、分塊切分四大策略](#二分塊切分四大策略)
  - [策略 ①：Onset + Rime（首音 + 韻基）](#策略-onset--rime首音--韻基)
  - [策略 ②：Compound（複合字拆詞）](#策略-compound複合字拆詞)
  - [策略 ③：Morpheme（詞素拆分）](#策略-morpheme詞素拆分)
  - [策略 ④：Syllable（音節拆分）](#策略-syllable音節拆分)
- [三、特殊音素與自然發音邊界處理](#三特殊音素與自然發音邊界處理)
- [四、前端資料庫 Schema 規範](#四前端資料庫-schema-規範)
- [五、B軌：SSML 國際音標離線微音檔與 DSP 規格](#五b軌ssml-國際音標離線微音檔與-dsp-規格)
- [六、A軌：防縮寫雙子音 TTS 擬音字典規則](#六a軌防縮寫雙子音-tts-擬音字典規則)
- [七、「🔗 連音拼讀（Sound-It-Out Blending）」互動時序規範](#七-連音拼讀sound-it-out-blending互動時序規範)
- [八、前端 UI 插槽自適應排版與色彩編碼規範](#八前端-ui-插槽自適應排版與色彩編碼規範)
- [九、新增單字標準作業程序（New Word SOP）](#九新增單字標準作業程序new-word-sop)
- [十、避坑指南（Trap & Solution 完整對照表）](#十避坑指南trap--solution-完整對照表)

---

## 一、核心原則與三大驗證標準

本規範的目標是讓國小孩子**用最少的記憶負擔，聽音能拼、見字能讀**。分塊切割必須通過以下三個檢驗：

1. **聲音可還原性（Acoustic Reconstructibility）**：孩子將每個分塊的聲音依序連讀（Blend），100% 能合成出該字的正確發音，不含多餘的輔音或母音殘留。
2. **模組可複用性（Word-Family Reusability）**：分塊盡量選用高頻韻基（如 `-old`, `-ump`, `-ick`）或高頻前後綴，讓孩子學會一個分塊就能拼出一整族單字（網絡效應）。
3. **意義可依附性（Semantic Anchoring）**：多音節字或複合字優先沿著「有意義的詞素邊界」切，讓孩子在記拼字的同時理解字義邏輯。

---

## 二、分塊切分四大策略

分塊決策具有嚴格的優先順序：

$$\text{Onset-Rime (單音節)} \longrightarrow \text{Compound (複合字)} \longrightarrow \text{Morpheme (詞素)} \longrightarrow \text{Syllable (音節)}$$

```
          [收到單字]
              │
    ┌─────────┴─────────┐
    ▼                   ▼
單音節字？          多音節字？
    │                   │
    ▼                   ├─► 是複合字？ ──► 策略 ② Compound
策略 ① Onset-Rime       │
                        ├─► 有前後綴？ ──► 策略 ③ Morpheme
                        │
                        └─► 無詞素結構 ──► 策略 ④ Syllable
```

---

### 策略 ①：Onset + Rime（首音 + 韻基）

#### 適用條件
- 單字只有 **1 個音節**（音標中只有 1 個母音核心）。
- 無複合字或前後綴結構。

#### 定義
- **Onset（首音）**：母音之前的所有輔音（可以是 0 個、單子音、或輔音叢）。
- **Rime（韻基）**：母音核心加上其後的所有輔音（記憶的核心單元）。

#### 切分標準
1. **常規字**：切為 `[Onset] + [Rime]` 兩塊。
   * `cat` $\rightarrow$ `[c]` (/k/) + `[at]` (/æt/)
   * `cold` $\rightarrow$ `[c]` (/k/) + `[old]` (/oʊld/)
   * `jump` $\rightarrow$ `[j]` (/dʒ/) + `[ump]` (/ʌmp/)
   * `child` $\rightarrow$ `[ch]` (/tʃ/) + `[ild]` (/aɪld/)
2. **母音開頭字（Onset 為空）**：切為 `[首母音] + [尾輔音叢]`。
   * `act` $\rightarrow$ `[a]` (/æ/) + `[ct]` (/kt/)
   * `add` $\rightarrow$ `[a]` (/æ/) + `[dd]` (/d/)
   * `ox`  $\rightarrow$ `[o]` (/ɑ/) + `[x]` (/ks/)
   * `up`  $\rightarrow$ `[u]` (/ʌ/) + `[p]` (/p/)
3. **二合字母（Digraph）與輔音叢（Cluster）不可拆**：
   * `ship` $\rightarrow$ `[sh]` + `[ip]`（二合輔音 `sh` 一體）
   * `black` $\rightarrow$ `[bl]` + `[ack]`（輔音叢 `bl` 一體）
   * `strong` $\rightarrow$ `[str]` + `[ong]`（三輔音叢 `str` 一體）
4. **Magic-E（CVCe 結構）**：字尾不發音的 `e` 歸入 Rime，使前方母音發長音。
   * `cake` $\rightarrow$ `[c]` + `[ake]` (/eɪk/)
   * `safe` $\rightarrow$ `[s]` + `[afe]` (/eɪf/)
   * `rope` $\rightarrow$ `[r]` + `[ope]` (/oʊp/)

---

### 策略 ②：Compound（複合字拆詞）

#### 適用條件
- 單字由**兩個或多個可獨立成詞的英文單字**拼合而成。
- 拆開後每個單元在字典中都有獨立含義。

#### 切分標準
沿原始字詞邊界切割，絕不跨字分割：
* `greenhouse` $\rightarrow$ `[green]` + `[house]`（綠色的房子 $\rightarrow$ 溫室）
* `rainbow`    $\rightarrow$ `[rain]` + `[bow]`（下雨出現的弓 $\rightarrow$ 彩虹）
* `football`   $\rightarrow$ `[foot]` + `[ball]`
* `mailbox`    $\rightarrow$ `[mail]` + `[box]`
* `watermelon` $\rightarrow$ `[water]` + `[melon]`

---

### 策略 ③：Morpheme（詞素拆分）

#### 適用條件
- 單字帶有明確的前綴（Prefix）或後綴（Suffix）。
- 移除詞素後，字根（Root）可獨立成詞或為辨識性高的語義單位。

#### 常見前後綴清單
* **前綴（Prefix）**：`un-`（否定）、`re-`（再次）、`mis-`（錯誤）、`pre-`（事前）、`dis-`（相反）、`sub-`（底下）。
* **後綴（Suffix）**：`-ful`（充滿）、`-less`（缺乏）、`-ness`（性質）、`-ment`（結果）、`-dom`（領域）、`-ly`（副詞）、`-able`（能夠）、`-er/-or`（人/物）。

#### 切分標準
* 前綴 + 字根：`unhappy` $\rightarrow$ `[un]` + `[happy]`；`mistake` $\rightarrow$ `[mis]` + `[take]`
* 字根 + 後綴：`kingdom` $\rightarrow$ `[king]` + `[dom]`；`careful` $\rightarrow$ `[care]` + `[ful]`
* 複合詞素：`unkindness` $\rightarrow$ `[un]` + `[kind]` + `[ness]`

---

### 策略 ④：Syllable（音節拆分）

#### 適用條件
- 多音節字，且無明顯複合字或常見前後綴結構。

#### 音節劃分六大定律
1. **VCV 定律**（母-子-母）：輔音歸後音節。
   * `open` $\rightarrow$ `[o]` + `[pen]`
   * `color` $\rightarrow$ `[co]` + `[lor]`
2. **VCCV 定律**（母-子-子-母）：從兩輔音中間切開。
   * `magnet` $\rightarrow$ `[mag]` + `[net]`
   * `rabbit` $\rightarrow$ `[rab]` + `[bit]`
   * `butter` $\rightarrow$ `[but]` + `[ter]`（雙寫輔音各自歸一邊）
3. **VCCCV 定律**（母-三子-母）：保留合法 Onset 給後音節。
   * `monster` $\rightarrow$ `[mon]` + `[ster]`（`st` 為合法首音）
4. **子音 + le（Consonant-le）**：字尾 `-ble`, `-cle`, `-dle`, `-ple`, `-tle` 獨立成末音節。
   * `candle` $\rightarrow$ `[can]` + `[dle]`
   * `rattle` $\rightarrow$ `[rat]` + `[tle]`
   * `vegetables` $\rightarrow$ `[veg]` + `[ta]` + `[ble]`
5. **R-controlled 組合不可跨音節切**：`ar`, `er`, `ir`, `or`, `ur` 一體化。
   * `fortune` $\rightarrow$ `[for]` + `[tune]`
   * `garden`  $\rightarrow$ `[gar]` + `[den]`

---

## 三、特殊音素與自然發音邊界處理

| 分類 | 字母組合 | 音標 | 處理規則 | 範例 |
| :--- | :--- | :--- | :--- | :--- |
| **R 控制母音** | `ar`, `er`, `ir`, `or`, `ur`, `air`, `ear` | `/ɑːr/`, `/ɜːr/`, `/ɔːr/`, `/er/`, `/ɪr/` | 永遠視為不可拆分的單一母音音素 | `car` (`[c]+[ar]`), `girl` (`[g]+[irl]`), `air` (`[air]`) |
| **雙字母母音** | `ai`, `ay`, `ee`, `ea`, `oa`, `oo`, `oi`, `oy`, `ou`, `ow` | `/eɪ/`, `/iː/`, `/oʊ/`, `/uː/`, `/ɔɪ/`, `/aʊ/` | 母音隊伍（Vowel Team）不可從中拆開 | `rain` (`[r]+[ain]`), `moon` (`[m]+[oon]`), `meat` (`[m]+[eat]`) |
| **二合輔音** | `ch`, `sh`, `th`, `wh`, `ph`, `ck`, `ng`, `qu` | `/tʃ/`, `/ʃ/`, `/θ/`, `/w/`, `/f/`, `/k/`, `/ŋ/`, `/kw/` | 代表單一輔音音位，嚴禁拆成單字母 | `chick` (`[ch]+[ick]`), `queen` (`[qu]+[een]`), `ring` (`[r]+[ing]`) |
| **靜音字母** | `kn-`, `wr-`, `gn-`, `-mb`, `-lf`, `-lk` | `/n/`, `/r/`, `/n/`, `/m/`, `/f/`, `/k/` | 靜音字母跟隨所屬模塊，在筆記（`uiNote`）中向學生解釋 | `calf` (`[c]+[alf]`, 註明 l 靜音), `thumb` (`[th]+[umb]`, 註明 b 靜音) |

---

## 四、前端資料庫 Schema 規範

在 `data/chunks_data.js` 中，每個單字以結構化 JSON 描述：

```javascript
"safe": {
  "word": "safe",
  "chunkType": "onset-rime",
  "ipa": "/seɪf/",
  "chunks": [
    {
      "text": "s",
      "ipa": "/s/",
      "role": "onset",
      "roleTag": "onset",       // onset | rime | coda | compound | prefix | suffix | root | syllable
      "speakAs": "s",
      "speakMode": "phonetic"   // v2.0 統一為 phonetic 或 direct，廢除 wholeWord
    },
    {
      "text": "afe",
      "ipa": "/eɪf/",
      "role": "rime（magic-e，a 發長音）",
      "roleTag": "rime",
      "speakAs": "safe",
      "speakMode": "phonetic"
    }
  ],
  "memoryAnchorType": "magic-e", // word-family | magic-e | r-controlled | vowel-team | digraph | compound | prefix | suffix | exception
  "anchor": "-afe",
  "siblings": ["chafe", "cave", "wave", "save"],
  "uiNote": "s 發 /s/，afe 是 magic-e，e 靜音讓 a 發長音 /eɪ/。",
  "specialNote": "magic-e：字尾 e 靜音，使 a 發長音 /eɪ/"
}
```

---

## 五、B軌：SSML 國際音標離線微音檔與 DSP 規格

### 5-1 為什麼原生 TTS 必敗？
瀏覽器原生 `window.speechSynthesis` 對於拼讀模塊有天然盲區：
* 縮寫誤判：`ig` 唸成 **I-G**、`os` 唸成 **O-S**、`afe` 唸成 **A-I-F**、`ip` 唸成 **I-P**、`et` 唸成 **E-T**。
* 擬音字連讀重複：`s` 擬音設為 `'sss'` 時被唸成 **S-S-S**。
* 音標不支援：丟 IPA 給瀏覽器 TTS 會報錯或靜音。

### 5-2 離線微音檔規格（B 軌標準）
為徹底解決以上問題，所有分塊透過本機 Windows `.NET System.Speech` 離線批次合成：
* **語音引擎**：`Microsoft Zira Desktop`（en-US 女聲）。
* **音訊格式**：16,000 Hz / 16-bit / Mono WAV。
* **SSML 格式規範（關鍵限制）**：
  ```xml
  <speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>
    <prosody rate='-10%'>
      <phoneme alphabet='ipa' ph='{clean_ipa}'>{clean_text}</phoneme>
    </prosody>
  </speak>
  ```
  > ⚠️ **死穴警報**：`ph` 屬性字串中**絕對不能有空格**（例如 `/eɪf/` 必須傳 `ph="eɪf"`，傳 `"eɪ f"` 會直接觸發 FormatException 拋錯崩潰）。

### 5-3 DSP 音訊處理標準（Python scipy + numpy）
每個生成的 WAV 檔案必須通過自動化 DSP 處理，確保分塊連音時零延遲、不爆音：
1. **能量閥值靜音裁切（Silence Trimming）**：
   $$\text{threshold} = \max\left(120.0, \; \max(|x|) \times 0.02\right)$$
   切除頭尾環境底噪與 TTS 預設空白。
2. **40ms 保護邊界（Padding）**：
   頭尾嚴格保留 40ms（640 samples @ 16kHz）淡入淡出空間，避免裁切邊緣產生 Click 爆音。
3. **峰值正規化（Peak Normalization）**：
   * **純氣音 / 爆破音 / 尾音叢**（如 `p`, `ct`, `s`, `x`, `t`, `k`）：標準化至 **24,000**（防止短促子音過度微弱）。
   * **母音 / 韻基 / 雙音節**（如 `afe`, `ig`, `os`, `arn`, `ook`）：標準化至 **27,000**。
4. **檔案大小控制**：單一微音檔約 5 KB ~ 20 KB，全套 286 個音檔總和約 3.7 MB，載入毫秒秒開。

---

## 六、A軌：防縮寫雙子音 TTS 擬音字典規則

當微音檔在離線或例外環境無法載入時，前端引擎自動降級至 A 軌。A 軌必須遵守**「雙子音閉音節防縮寫拼寫鐵律」**：

| 分塊分類 | 範例分塊 | 原生 TTS 誤判 | A軌防縮寫映射 | 發音原理 |
| :--- | :--- | :--- | :--- | :--- |
| **短母音韻基** | `ig`, `ip`, `et`, `ab`, `ub`, `ot` | I-G, I-P, E-T, A-B, U-B, O-T | `"igg"`, `"ipp"`, `"ett"`, `"abb"`, `"ubb"`, `"aht"` | 雙子音強迫閉音節，禁止 TTS 當縮寫 |
| **Magic-E 韻基** | `afe`, `ose`, `ase`, `ove` | A-I-F, 唸成全字 safe | `"ayff"`, `"oze"`, `"aze"`, `"uv"` | 用 `ay` 鎖定 `/eɪ/`，用 `z` 鎖定濁擦音 |
| **感嘆母音** | `ox` 的 `o` | 嘆氣拖音 "ahhh" | `"ah."` (`rate: 1.15`) | 句號強制降調 + 提速，收斂為短音 `/ɑ/` |
| **首輔音** | `s`, `z`, `b`, `c/k`, `d`, `p` | "S-S-S", 字母名 Bee, Dee | `"suh"`, `"zuh"`, `"buh"`, `"kuh"`, `"duh"`, `"puh"` | 短促清音素，消除連讀重複 |
| **純尾輔音叢** | `act` 的 `ct`, `add` 的 `dd`, `x` | 唸整字 act, add, ox | `"kt"`, `"duh"`, `"kss"` | 短促爆破音，絕不偷唸整字 |

---

## 七、「🔗 連音拼讀（Sound-It-Out Blending）」互動時序規範

連音拼讀是幫助孩子將聲音合體的關鍵互動。

```
[分塊 1 亮起] ──► 播微音檔 1 ──► onended ──► [70ms 呼吸間隔]
                                                      │
[分塊 2 亮起] ◄── 播微音檔 2 ◄── onended ◄─────────────┘
      │
[70ms 呼吸間隔]
      │
[全體分塊同時亮起 (All Highlight)] ──► [120ms 蓄力停頓] ──► [唸出完整單字 "safe!"]
```

* **單塊高亮**：點擊單一分塊，只播該塊聲音，不高亮其他塊。
* **微音檔銜接**：透過音檔原生 `onended` 事件驅動，分塊間隔僅留 **70ms** 呼吸感，徹底解決以往固定 `setTimeout(680ms)` 拖泥帶水的節奏問題。
* **合體頓音**：所有分塊拼完後，全體色塊同時發光高亮，停留 **120ms** 後由 TTS 堅定朗讀整單字，強化合音成就感。

---

## 八、前端 UI 插槽自適應排版與色彩編碼規範

### 8-1 語意角色色彩編碼（Semantic Color Tokens）
為降低孩子的視覺認知負擔，所有卡片與分塊採用語意統一色彩：

| 語意角色 | 說明 | CSS Class | 視覺色彩 |
| :--- | :--- | :--- | :--- |
| **Onset / Prefix** | 首音 / 前綴詞素 | `.chip-role-onset` | 冰藍色（背景 `#dbeafe`，文字 `#1e40af`） |
| **Rime / Root** | 核心韻基 / 詞根 | `.chip-role-rime` | 暖琥珀黃（背景 `#fef3c7`，文字 `#92400e`） |
| **Coda** | 尾輔音叢 | `.chip-role-coda` | 蜜桃粉橘（背景 `#ffedd5`，文字 `#9a3412`） |
| **Compound** | 複合字詞塊 | `.chip-role-compound` | 薰衣草紫（背景 `#f3e8ff`，文字 `#6b21a8`） |
| **Suffix** | 後綴詞素 | `.chip-role-suffix` | 薄荷綠（背景 `#d1fae5`，文字 `#065f46`） |
| **Syllable** | 一般音節輪替 | `.chip-color-0~4` | 柔和馬卡龍輪替 |

### 8-2 插槽防折行響應式佈局鐵律
在聽音拼寫（字母積木模式）中，長單字（6~9 字）若強制固定寬度必會在 iPad 或手機上換行破版。

#### ❌ 錯誤寫法（嚴禁使用）
```css
/* 嚴禁在 CSS 中對 slot 寫死固定寬高，特別是 media query */
.tile-slot { width: 3.5rem; height: 4rem; }
@media (min-width: 640px) { .tile-slot { width: 4.25rem; } } /* 會覆蓋 JS class 導致 jacket 折行 */
```

#### ✅ 正確規範
1. **容器設定**：容器必須具備 `flex-nowrap`, `overflow-x-auto`，並給予 `max-w-full`。
2. **插槽樣式**：`.tile-slot` 移除固定寬高，加上 `flex-shrink: 0`。
3. **JS 動態長度分級**：
   * **3～4 字母單字**（如 `cat`, `dog`, `book`）：
     `slotSizeClass = "w-14 h-16 sm:w-16 sm:h-20 text-2xl sm:text-3xl"`
   * **5～6 字母單字**（如 `jacket`, `horse`, `rabbit`）：
     `slotSizeClass = "w-11 h-14 sm:w-13 sm:h-16 text-xl sm:text-2xl"`（完美一排居中）
   * **7 字母以上長單字**（如 `elephant`, `dinosaur`, `umbrella`）：
     `slotSizeClass = "w-9 h-12 sm:w-11 sm:h-14 text-lg sm:text-xl"`

---

## 九、新增單字標準作業程序（New Word SOP）

未來若要新增第 20 週單字或建立新年級題庫，請嚴格依照以下 4 步 SOP 執行：

### 步驟 1：依四大策略切分單字
填寫單字結構，確認每個 chunk 的 `text` 與標準 `ipa`（標註 roleTag）：
```javascript
// 例：新增單字 "rocket"
"rocket": {
  "word": "rocket",
  "chunkType": "syllable",
  "ipa": "/ˈrɑk.ɪt/",
  "chunks": [
    { "text": "rock", "ipa": "/rɑk/", "roleTag": "syllable", "speakMode": "phonetic" },
    { "text": "et",   "ipa": "/ɪt/",  "roleTag": "syllable", "speakMode": "phonetic" }
  ],
  "memoryAnchorType": "word-family",
  "anchor": "-ocket",
  "siblings": ["pocket", "socket", "locket"],
  "uiNote": "rock 發 /rɑk/，et 弱化發 /ɪt/。火箭 rocket，口袋 pocket！"
}
```

### 步驟 2：檢查音檔庫是否已有該分塊
查詢 `data/chunk_audio_map.js` 中是否已有 `rock|/rɑk/` 與 `et|/ɪt/`。若已有，直接共用音檔，不需重新生成！

### 步驟 3：若有新分塊，執行一鍵生成腳本
在 PowerShell 終端機執行下列微腳本，立即合成新分塊並自動完成 DSP 裁切：

```powershell
# 1. 使用 SAPI SSML 合成新分塊 WAV
Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice("Microsoft Zira Desktop")
$fmt = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(16000, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)

$newChunkText = "rock"
$newChunkIpa  = "rɑk" # 記住：不能有空格與斜線
$rawWav = "audio/chunks/chunk_raw_$newChunkText.wav"

$synth.SetOutputToWaveFile($rawWav, $fmt)
$ssml = "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><prosody rate='-10%'><phoneme alphabet='ipa' ph='$newChunkIpa'>$newChunkText</phoneme></prosody></speak>"
$synth.SpeakSsml($ssml)
$synth.Dispose()

# 2. 呼叫 Python 執行 40ms DSP 裁切與音量正規化
python -c "
import numpy as np, os
from scipy.io import wavfile
sr, data = wavfile.read('$rawWav')
thresh = max(120.0, np.max(np.abs(data)) * 0.02)
idx = np.where(np.abs(data) > thresh)[0]
if len(idx) > 0:
    pad = int(sr * 0.04)
    data = data[max(0, idx[0]-pad):min(len(data), idx[-1]+pad)]
peak = np.max(np.abs(data))
if peak > 0:
    data = np.clip(data.astype(np.float32) * (27000.0 / peak), -32767, 32767).astype(np.int16)
finalPath = 'audio/chunks/chunk_$newChunkText.wav'
wavfile.write(finalPath, sr, data)
os.remove('$rawWav')
print('音檔生成成功:', finalPath)
"
```

### 步驟 4：更新對照表並驗證
將新分塊加入 `data/chunk_audio_map.js` 與 `data/chunks_data.js`，並於瀏覽器中點擊確認發音與拼讀動畫。

---

## 十、避坑指南（Trap & Solution 完整對照表）

| 案發現場 | 踩坑現象 | 根本原因 | v2.0 終極解法 |
| :--- | :--- | :--- | :--- |
| **`safe` 的 `afe`** | 唸成 A-I-F 或整詞 safe | 字典無 `afe` 假字，TTS 當縮寫 | B軌直接採用 `/eɪf/` 專屬音檔；A軌備援用 `"ayff"` |
| **`pig` 的 `ig`** | 唸成 Instagram 縮寫 "I-G" | 短字串命中大寫縮寫詞庫 | B軌採用 `/ɪɡ/` 專屬音檔；A軌備援用雙子音 `"igg"` |
| **`ostrich` 的 `os`** | 唸成作業系統 "O-S" | 短字串命中 OS 縮寫庫 | B軌採用 `/ɑs/` 專屬音檔；A軌備援用雙子音 `"ahss"` |
| **`ox` 的 `o`** | 唸成 "Ahhh~" 嘆氣長音 | 命中英文感嘆詞庫 | B軌採用 `/ɑ/` 專屬音檔；A軌備援用句號收音 `"ah."` |
| **首音 `s`** | 連唸三次 "S-S-S" | 擬音寫 `'sss'` 被當成連讀字母 | B軌採用 `/s/` 純正擦音；A軌備援用 `'suh'` |
| **尾音 `act` 的 `ct`** | 偷唸整詞 act 或唸 "C-T" | 輔音無母音，TTS 瞎猜 | B軌採用 `/kt/` 純爆破氣音；A軌備援用 `'kt'` |
| **`jacket` 積木模式** | 第 6 個插槽掉到第二行 | CSS `@media (min-width: 640px)` 寫死寬度 | 移除 slot 固定寬高，JS 依字長動態指定 `w-11`，容器強制 `flex-nowrap` |
| **SSML 合成例外** | FormatException 程式崩潰 | `<phoneme ph="...">` 內帶有空白或註解文字 | 清除所有空格、重音符號、斜線及 `+ silent e` 備註 |
| **微音檔爆音或截斷** | 播放時有喀答聲或吃字 | 裁切邊緣過於陡峭，振幅突變 | DSP 切割保留嚴格 40ms（640 samples）前後過渡緩衝 |

---

*本文件由 DeepMind Antigravity 工程團隊制定，為全專案發音、分塊與排版之最高技術準則。*
