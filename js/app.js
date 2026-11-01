/**
 * ========================================================
 * 🐝 主程式狀態與介面控制器 (App State & Tab Controller)
 * 支援：Phonics 拼讀分塊 (Onset-Rime / Compound / Morpheme / Syllable)
 * ========================================================
 */

const App = (function() {
    // 遊戲與介面全域狀態
    const state = {
        currentTab: 'learn',         // 'learn', 'speak', 'write', 'review'
        currentDatasetKey: 'sb_Part1', // 預設 Spelling Bee Part 1
        wrongWords: [],              // 錯題本 (怪獸本)
        currentWordList: [],         // 當前載入的單字清單
        wordMap: {}                  // id -> wordObj 快速查找表
    };

    // 分塊策略中文標籤對照
    const CHUNK_TYPE_LABELS = {
        'onset-rime': '🧩 首音+韻基',
        'compound': '🔗 複合字拆詞',
        'morpheme': '🌱 詞素拆分',
        'syllable': '🎵 音節拆分',
        'morpheme + syllable': '🎵 音節+詞素'
    };

    // 取得當前資料集的所有單字清單
    function getCurrentWordList() {
        const key = state.currentDatasetKey;
        let list = [];
        if (key.startsWith('sb_')) {
            const partName = key.replace('sb_', '');
            list = (typeof SPELLING_BEE_DATA !== 'undefined' && SPELLING_BEE_DATA[partName]) || [];
        } else if (key.startsWith('ww_')) {
            const weekName = key.replace('ww_', '');
            list = (typeof WEEKLY_WORDS_DATA !== 'undefined' && WEEKLY_WORDS_DATA[weekName]) || [];
        }
        list.forEach(item => {
            state.wordMap[item.id] = item;
        });
        return list;
    }

    // 根據 ID 取得單字物件
    function getWordById(id) {
        return state.wordMap[id] || state.wrongWords.find(w => w.id === id) || null;
    }

    // 初始化 App
    function init() {
        const datasetSelector = document.getElementById('datasetSelector');
        if (datasetSelector) {
            datasetSelector.addEventListener('change', (e) => {
                state.currentDatasetKey = e.target.value;
                AudioManager.stopAll();
                AudioManager.playTapSound();
                
                state.currentWordList = getCurrentWordList();
                
                if (state.currentTab === 'speak' || state.currentTab === 'write') {
                    Game.initQuiz(state.currentWordList, state.currentTab);
                }
                
                renderCurrentTab();
            });
        }

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                if (targetTab) {
                    switchTab(targetTab);
                }
            });
        });

        switchTab('learn');
    }

    // 切換分頁
    function switchTab(tabName) {
        state.currentTab = tabName;
        AudioManager.stopAll();
        AudioManager.playTapSound();

        document.querySelectorAll('.tab-btn').forEach(btn => {
            const isTarget = btn.getAttribute('data-tab') === tabName;
            if (isTarget) {
                btn.classList.remove('opacity-50');
                btn.classList.add('opacity-100', 'ring-4', 'ring-white/80', 'shadow-lg');
            } else {
                btn.classList.remove('opacity-100', 'ring-4', 'ring-white/80', 'shadow-lg');
                btn.classList.add('opacity-50');
            }
        });

        const progressBar = document.getElementById('bee-progress-bar');
        if (progressBar) {
            if (tabName === 'speak' || tabName === 'write') {
                progressBar.classList.remove('hidden');
            } else {
                progressBar.classList.add('hidden');
            }
        }

        state.currentWordList = getCurrentWordList();

        if (tabName === 'speak' || tabName === 'write') {
            Game.initQuiz(state.currentWordList, tabName);
        }

        renderCurrentTab();
    }

    // 更新小蜜蜂採蜜進度條
    function updateBeeProgress(current, total) {
        const progressBar = document.getElementById('bee-progress-bar');
        if (!progressBar) return;

        if (state.currentTab !== 'speak' && state.currentTab !== 'write') {
            progressBar.classList.add('hidden');
            return;
        }

        progressBar.classList.remove('hidden');
        const runner = document.getElementById('bee-runner');
        const text = document.getElementById('bee-progress-text');
        const fill = document.getElementById('bee-progress-fill');

        const percentage = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;
        
        if (runner) runner.style.left = `calc(${percentage}% - 16px)`;
        if (fill) fill.style.width = `${percentage}%`;
        if (text) text.textContent = `🐝 採集進度：${current} / ${total}`;
    }

    // 渲染當前分頁
    function renderCurrentTab() {
        state.currentWordList = getCurrentWordList();

        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        mainContent.innerHTML = '';

        if (state.currentTab === 'learn') {
            renderLearnTab(mainContent);
        } else if (state.currentTab === 'speak') {
            Game.renderSpeakQuiz(mainContent);
        } else if (state.currentTab === 'write') {
            Game.renderWriteQuiz(mainContent);
        } else if (state.currentTab === 'review') {
            renderReviewTab(mainContent);
        }
    }

    // ========================================================
    // 🧩 產生拼讀分塊 HTML (供學習卡、口說卡、聽寫解答共用)
    // ========================================================
    function renderChunksHTML(item, containerId, isUpperCase = false) {
        const chunks = item.chunks || [];
        if (chunks.length === 0) {
            const displayWord = isUpperCase ? item.word.toUpperCase() : item.word;
            return `
                <div id="${containerId}" class="flex items-center justify-center flex-wrap gap-1.5">
                    <button onclick="AudioManager.playTapSound(); AudioManager.speakWord('${item.word}')" 
                            class="syllable-chip chip-color-0 btn-press">
                        <span>${displayWord}</span>
                    </button>
                </div>
            `;
        }

        const buttonsHTML = chunks.map((chunk, i) => {
            const roleTag = chunk.roleTag || 'syllable';
            let colorClass = `chip-color-${i % 5}`;
            if (roleTag === 'onset' || roleTag === 'prefix') colorClass = 'chip-role-onset';
            else if (roleTag === 'rime' || roleTag === 'root') colorClass = 'chip-role-rime';
            else if (roleTag === 'coda') colorClass = 'chip-role-coda';
            else if (roleTag === 'compound') colorClass = 'chip-role-compound';
            else if (roleTag === 'suffix') colorClass = 'chip-role-suffix';

            const displayText = isUpperCase ? chunk.text.toUpperCase() : chunk.text;
            const ipaText = chunk.ipa || '';

            return `
                <button onclick="App.handleChunkTap('${item.id}', ${i}, '${containerId}')" 
                        data-chunk-idx="${i}"
                        class="syllable-chip ${colorClass} btn-press"
                        title="${chunk.role || '點擊聽分塊發音'}">
                    <span>${displayText}</span>
                    ${ipaText ? `<span class="chunk-ipa">${ipaText}</span>` : ''}
                </button>
            `;
        }).join('<span class="text-slate-300 font-black text-lg mx-0.5">+</span>');

        return `
            <div id="${containerId}" class="flex items-center justify-center flex-wrap gap-1">
                ${buttonsHTML}
            </div>
        `;
    }

    // 點擊單一分塊按鈕發音與動畫
    function handleChunkTap(wordId, chunkIdx, containerId) {
        const item = getWordById(wordId);
        if (!item || !item.chunks || !item.chunks[chunkIdx]) return;

        const chunk = item.chunks[chunkIdx];
        AudioManager.playTapSound();

        const container = document.getElementById(containerId);
        if (container) {
            const btns = container.querySelectorAll('.syllable-chip');
            btns.forEach((b, idx) => {
                if (idx === chunkIdx) b.classList.add('chunk-highlight');
                else b.classList.remove('chunk-highlight');
            });
            setTimeout(() => {
                btns.forEach(b => b.classList.remove('chunk-highlight'));
            }, 500);
        }

        AudioManager.speakChunk(chunk, item.word);
    }

    // 觸發「🔗 連音拼讀」(依序唸每個分塊並高亮 ➔ 最後合起來唸整字)
    function triggerBlend(wordId, containerId) {
        const item = getWordById(wordId);
        if (!item) return;

        const container = document.getElementById(containerId);
        const btns = container ? container.querySelectorAll('.syllable-chip') : [];

        AudioManager.blendChunks(item, (highlightIdx) => {
            btns.forEach((btn, i) => {
                if (highlightIdx === 'all' || i === highlightIdx) {
                    btn.classList.add('chunk-highlight');
                } else {
                    btn.classList.remove('chunk-highlight');
                }
            });
        }, () => {
            btns.forEach(btn => btn.classList.remove('chunk-highlight'));
        });
    }

    // 切換展開老師拼讀小叮嚀與同字族
    function toggleNoteDrawer(drawerId) {
        AudioManager.playTapSound();
        const el = document.getElementById(drawerId);
        if (el) {
            el.classList.toggle('hidden');
        }
    }

    // ========================================================
    // 📖 學習單字頁面渲染 (Learn Tab)
    // ========================================================
    function renderLearnTab(container) {
        const words = state.currentWordList;
        if (!words || words.length === 0) {
            container.innerHTML = `
                <div class="bg-white rounded-3xl p-10 text-center border-2 border-emerald-100 pop-in">
                    <div class="text-6xl mb-3">🤔</div>
                    <h3 class="text-xl font-black text-slate-600">目前選擇的分類沒有單字喔！</h3>
                </div>
            `;
            return;
        }

        // 圖例與統計列
        const headerBar = document.createElement('div');
        headerBar.className = 'flex flex-wrap items-center justify-between gap-2 bg-white px-5 py-3.5 rounded-2xl border border-emerald-100 shadow-sm mb-4 pop-in';
        headerBar.innerHTML = `
            <div class="font-black text-emerald-800 text-sm sm:text-base flex items-center gap-2">
                <span>📚</span> 共 <span class="text-emerald-600 text-lg sm:text-xl">${words.length}</span> 個單字
            </div>
            <div class="flex flex-wrap items-center gap-2 text-xs font-black">
                <span class="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 border border-blue-200">首音 Onset</span>
                <span class="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-200">韻基 Rime</span>
                <span class="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-200">複合詞</span>
                <span class="text-slate-400 hidden sm:inline">｜點積木聽拆音，點「連音」聽合體！</span>
            </div>
        `;
        container.appendChild(headerBar);

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 pb-12';

        words.forEach((item, index) => {
            const card = createWordCard(item, index);
            grid.appendChild(card);
        });

        container.appendChild(grid);
    }

    function createWordCard(item, index) {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-3xl p-5 shadow-sm border-2 border-slate-100 hover:border-emerald-200 flex flex-col items-center pop-in hover:shadow-md transition-all relative';
        
        // 左上角分類標籤 (Phonics / Reading Plus)
        const typeBadge = item.type ? `
            <span class="absolute top-4 left-4 text-xs font-black px-2.5 py-1 rounded-full ${
                item.type === 'Phonics' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
            }">
                ${item.type}
            </span>
        ` : '';

        // 右上角分塊策略標籤 (如 首音+韻基)
        const chunkTypeLabel = item.chunkType ? (CHUNK_TYPE_LABELS[item.chunkType] || item.chunkType) : '';
        const strategyBadge = chunkTypeLabel ? `
            <span class="absolute top-4 right-4 text-[11px] font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                ${chunkTypeLabel}
            </span>
        ` : '';

        const wordCardId = `word-card-${item.id}`;
        const chunksContainerId = `${wordCardId}-chunks`;
        const drawerId = `${wordCardId}-drawer`;

        const chunksHTML = renderChunksHTML(item, chunksContainerId, false);
        const zhuyinHTML = generateZhuyinHTML(item.chinese, "text-2xl sm:text-3xl");
        const chinesePlainText = item.chinese.map(c => c.c).join('');

        // 特殊發音提示 (如靜音 e、例外音)
        const specialNoteHTML = item.specialNote ? `
            <div class="bg-amber-50 border border-amber-200 text-amber-800 text-xs font-black px-3 py-1 rounded-xl mb-2 text-center">
                ✨ ${item.specialNote}
            </div>
        ` : '';

        // 同家族單字按鈕群
        const siblings = item.siblings || [];
        const siblingsHTML = siblings.length > 0 ? `
            <div class="mt-2 pt-2 border-t border-slate-200/70">
                <div class="text-[11px] font-black text-slate-500 mb-1">
                    🌱 同字族好朋友 (<span class="text-emerald-700 font-mono">${item.anchor || ''}</span>) — 點擊聽發音：
                </div>
                <div class="flex flex-wrap gap-1.5">
                    ${siblings.map(sib => {
                        const cleanSib = sib.replace(/（.*?）/g, '').trim();
                        return `
                            <button onclick="AudioManager.playTapSound(); AudioManager.speakWord('${cleanSib}')" 
                                    class="btn-press bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg text-xs font-black font-mono shadow-2xs">
                                🔊 ${sib}
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
        ` : '';

        card.innerHTML = `
            ${typeBadge}
            ${strategyBadge}
            <div class="text-6xl sm:text-7xl mb-3 mt-6">${item.emoji}</div>
            
            <!-- 拼讀分塊積木區 (點各分塊獨立發音) -->
            <div class="mb-2 w-full">
                ${chunksHTML}
            </div>

            ${specialNoteHTML}
            
            <!-- 整字與音標顯示區 (A-B-C 拼讀時高亮顯示在此) -->
            <div class="flex items-baseline justify-center gap-2 mb-3">
                <div id="${wordCardId}-letters" class="text-2xl sm:text-3xl font-black text-slate-700 tracking-wider font-mono flex items-center justify-center">
                    ${item.word.split('').map((char, i) => `<span class="letter-span" data-char-index="${i}">${char}</span>`).join('')}
                </div>
                ${item.ipa ? `<span class="text-xs font-bold text-slate-400 font-mono">${item.ipa}</span>` : ''}
            </div>

            <!-- 發音控制按鈕列 (聽整字 / 連音拼讀 / A-B-C 拼字 / 拼讀祕訣) -->
            <div class="flex items-center gap-1.5 sm:gap-2 mb-3 w-full justify-center flex-wrap">
                <button onclick="AudioManager.speakWord('${item.word}')" 
                        class="btn-press bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-3 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1 border border-emerald-200">
                    <span>🔊</span>
                    <span>聽單字</span>
                </button>

                <button onclick="App.triggerBlend('${item.id}', '${chunksContainerId}')" 
                        class="btn-press bg-amber-100 hover:bg-amber-200 text-amber-900 px-3 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1 border border-amber-300">
                    <span>🔗</span>
                    <span>連音拼讀</span>
                </button>

                <button onclick="App.triggerSpell('${item.word}', '${wordCardId}-letters')" 
                        class="btn-press bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-800 px-3 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1 border border-fuchsia-200">
                    <span>🔤</span>
                    <span>A-B-C</span>
                </button>

                ${(item.uiNote || siblings.length > 0) ? `
                    <button onclick="App.toggleNoteDrawer('${drawerId}')" 
                            class="btn-press bg-sky-100 hover:bg-sky-200 text-sky-800 px-2.5 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1 border border-sky-200"
                            title="展開老師拼讀小叮嚀与同字族">
                        <span>💡</span>
                        <span>祕訣</span>
                    </button>
                ` : ''}
            </div>

            <!-- 老師小叮嚀 & 同字族抽屜 (點擊 💡 祕訣展開) -->
            <div id="${drawerId}" class="hidden w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 mb-3 text-left text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                ${item.uiNote ? `<div>👩‍🏫 <span class="text-slate-900">${item.uiNote}</span></div>` : ''}
                ${siblingsHTML}
            </div>

            <!-- 底部中文與直排注音 (高度齊平) -->
            <div class="flex items-center justify-between w-full mt-auto pt-3 border-t-2 border-dashed border-slate-100 px-2 min-h-[3rem]">
                <div class="flex items-center gap-1">
                    ${zhuyinHTML}
                </div>
                <button onclick="AudioManager.speakChinese('${chinesePlainText}')" 
                        class="btn-press bg-orange-100 hover:bg-orange-200 text-orange-700 p-2 rounded-full border border-orange-200"
                        title="聽中文發音">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        `;

        return card;
    }

    function triggerSpell(word, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const letterSpans = container.querySelectorAll('.letter-span');
        AudioManager.spellWord(word, (highlightIdx) => {
            letterSpans.forEach((span, i) => {
                if (i === highlightIdx) {
                    span.classList.add('letter-highlight');
                } else {
                    span.classList.remove('letter-highlight');
                }
            });
        }, () => {
            letterSpans.forEach(span => span.classList.remove('letter-highlight'));
        });
    }

    function addWrongWord(item) {
        state.wordMap[item.id] = item;
        if (!state.wrongWords.find(w => w.id === item.id)) {
            state.wrongWords.push(item);
            updateMonsterBadge();
        }
    }

    function updateMonsterBadge() {
        const badge = document.getElementById('monster-badge');
        if (!badge) return;
        const count = state.wrongWords.length;
        if (count > 0) {
            badge.textContent = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }

    // ========================================================
    // 👾 怪獸本 (Monster Album - 淨化收服)
    // ========================================================
    function renderReviewTab(container) {
        if (state.wrongWords.length === 0) {
            container.innerHTML = `
                <div class="bg-white rounded-3xl p-10 text-center border-2 border-emerald-100 pop-in">
                    <div class="text-7xl mb-4 animate-bounce">🎉</div>
                    <h3 class="text-2xl font-black text-emerald-600 mb-2">太棒了！怪獸本空空的！</h3>
                    <p class="text-slate-500 font-bold text-lg">目前沒有任何答錯的怪獸，你是拼字小英雄！🐝✨</p>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <div class="bg-rose-100 border-2 border-rose-300 rounded-3xl p-4 sm:p-5 mb-5 flex items-center justify-between shadow-sm pop-in">
                <div class="flex items-center gap-3">
                    <span class="text-4xl animate-bounce">👾</span>
                    <div>
                        <h3 class="text-rose-950 font-black text-lg">怪獸抓走了 ${state.wrongWords.length} 個單字！</h3>
                        <p class="text-rose-700 text-xs sm:text-sm font-bold">點分塊練習拼讀，學會後點擊「淨化收服」奪回單字！</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-12">
                ${state.wrongWords.map(item => {
                    const chunkContainerId = `monster-chunks-${item.id}`;
                    return `
                        <div id="monster-card-${item.id}" class="bg-white rounded-3xl p-5 border-2 border-rose-200 shadow-sm flex flex-col items-center pop-in relative hover:shadow-md transition-all">
                            <div class="text-6xl mb-2">${item.emoji}</div>
                            <div class="mb-2 w-full">${renderChunksHTML(item, chunkContainerId, false)}</div>
                            <div class="text-2xl font-black text-slate-700 mb-2 font-mono tracking-wider">${item.word}</div>
                            <div class="mb-4">${generateZhuyinHTML(item.chinese, "text-2xl")}</div>

                            <div class="flex gap-2 w-full mt-auto">
                                <button onclick="App.triggerBlend('${item.id}', '${chunkContainerId}')" class="btn-press flex-1 bg-amber-100 hover:bg-amber-200 text-amber-900 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-1 border border-amber-200">
                                    <span>🔗</span> 連音拼讀
                                </button>
                                <button onclick="App.purifyMonster('${item.id}')" class="btn-press flex-1 bg-rose-500 hover:bg-rose-600 text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-1 shadow-sm border-b-2 border-rose-700">
                                    <span>✨</span> 淨化收服
                                </button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    function purifyMonster(itemId) {
        const card = document.getElementById(`monster-card-${itemId}`);
        AudioManager.playStarSound();

        if (card) {
            card.classList.add('animate-purify');
        }

        setTimeout(() => {
            state.wrongWords = state.wrongWords.filter(w => w.id !== itemId);
            updateMonsterBadge();

            if (state.wrongWords.length === 0) {
                AudioManager.playFanfare();
                if (typeof confetti === 'function') {
                    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
                }
            }

            const mainContent = document.getElementById('main-content');
            if (mainContent && state.currentTab === 'review') {
                renderReviewTab(mainContent);
            }
        }, 750);
    }

    // ========================================================
    // 🇹🇼 台灣小學標準注音排版 (國字右側直排注音，高度齊平)
    // ========================================================
    function generateZhuyinHTML(chineseArr, sizeClass = "text-2xl sm:text-3xl") {
        if (!chineseArr || !Array.isArray(chineseArr)) return '';
        
        return chineseArr.map(item => {
            const char = item.c;
            const pinyin = item.p || '';
            
            let tone = '';
            let symbols = [];
            for (let i = 0; i < pinyin.length; i++) {
                const ch = pinyin[i];
                if (['ˊ', 'ˇ', 'ˋ', '˙'].includes(ch)) {
                    tone = ch;
                } else {
                    symbols.push(ch);
                }
            }
            
            const isLightTone = tone === '˙';
            
            return `
                <div class="zhuyin-word inline-flex items-center select-none">
                    <span class="${sizeClass} font-black text-slate-800 leading-none">${char}</span>
                    <div class="zhuyin-col flex flex-col items-center justify-center font-bold text-slate-500 text-[11px] sm:text-xs ml-0.5 relative leading-[1.05]">
                        ${isLightTone ? `<span class="text-[9px] -mb-1 text-center font-black">˙</span>` : ''}
                        ${symbols.map(s => `<span>${s}</span>`).join('')}
                        ${(!isLightTone && tone) ? `<span class="zhuyin-tone text-slate-600">${tone}</span>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    return {
        init,
        switchTab,
        renderChunksHTML,
        handleChunkTap,
        triggerBlend,
        toggleNoteDrawer,
        triggerSpell,
        addWrongWord,
        updateBeeProgress,
        purifyMonster,
        generateZhuyinHTML
    };
})();

window.addEventListener('DOMContentLoaded', () => {
    App.init();
});
