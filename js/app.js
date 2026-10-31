/**
 * ========================================================
 * 🐝 主程式狀態與介面控制器 (App State & Tab Controller)
 * ========================================================
 */

const App = (function() {
    // 遊戲與介面全域狀態
    const state = {
        currentTab: 'learn',         // 'learn', 'speak', 'write', 'review'
        currentDatasetKey: 'sb_Part1', // 預設 Spelling Bee Part 1
        wrongWords: [],              // 錯題本 (怪獸本)
        currentWordList: []          // 當前載入的單字清單
    };

    // 取得當前資料集的所有單字清單
    function getCurrentWordList() {
        const key = state.currentDatasetKey;
        if (key.startsWith('sb_')) {
            const partName = key.replace('sb_', ''); // e.g. "Part1"
            return (typeof SPELLING_BEE_DATA !== 'undefined' && SPELLING_BEE_DATA[partName]) || [];
        } else if (key.startsWith('ww_')) {
            const weekName = key.replace('ww_', ''); // e.g. "Week_5"
            return (typeof WEEKLY_WORDS_DATA !== 'undefined' && WEEKLY_WORDS_DATA[weekName]) || [];
        }
        return [];
    }

    // 初始化 App
    function init() {
        // 綁定資料集切換選單
        const datasetSelector = document.getElementById('datasetSelector');
        if (datasetSelector) {
            datasetSelector.addEventListener('change', (e) => {
                state.currentDatasetKey = e.target.value;
                AudioManager.stopAll();
                AudioManager.playTapSound();
                
                // 強制重新獲取該週/單元單字清單 (修復問題 1)
                state.currentWordList = getCurrentWordList();
                
                // 若在測驗分頁，立即重新初始化題目
                if (state.currentTab === 'speak' || state.currentTab === 'write') {
                    Game.initQuiz(state.currentWordList, state.currentTab);
                }
                
                renderCurrentTab();
            });
        }

        // 綁定導航分頁 Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                if (targetTab) {
                    switchTab(targetTab);
                }
            });
        });

        // 預設進入學習分頁
        switchTab('learn');
    }

    // 切換分頁
    function switchTab(tabName) {
        state.currentTab = tabName;
        AudioManager.stopAll();
        AudioManager.playTapSound();

        // 更新 Tab 按鈕高亮
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

        // 控制小蜜蜂進度條顯示
        const progressBar = document.getElementById('bee-progress-bar');
        if (progressBar) {
            if (tabName === 'speak' || tabName === 'write') {
                progressBar.classList.remove('hidden');
            } else {
                progressBar.classList.add('hidden');
            }
        }

        // 即時重新抓取清單
        state.currentWordList = getCurrentWordList();

        // 若切換至遊戲測驗模式，初始化遊戲清單
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
        // 確保任何時候渲染都是最新選擇的週次單字
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

        const headerBar = document.createElement('div');
        headerBar.className = 'flex items-center justify-between bg-white px-5 py-3 rounded-2xl border border-emerald-100 shadow-sm mb-4 pop-in';
        headerBar.innerHTML = `
            <div class="font-black text-emerald-800 text-sm sm:text-base flex items-center gap-2">
                <span>📚</span> 本單元共 <span class="text-emerald-600 text-lg sm:text-xl">${words.length}</span> 個單字
            </div>
            <div class="text-xs sm:text-sm font-bold text-slate-400">
                點擊彩色音節可單獨聽聲音喔！
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
        
        const typeBadge = item.type ? `
            <span class="absolute top-4 left-4 text-xs font-black px-2.5 py-1 rounded-full ${
                item.type === 'Phonics' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
            }">
                ${item.type}
            </span>
        ` : '';

        const syllables = item.syllables || [item.word];
        const isMultiSyllable = syllables.length > 1;

        let syllableHTML = '';
        if (isMultiSyllable) {
            syllableHTML = syllables.map((syl, i) => {
                const colorClass = `chip-color-${i % 5}`;
                return `
                    <button onclick="AudioManager.playTapSound(); AudioManager.speakSyllable('${syl}')" 
                            class="syllable-chip ${colorClass} btn-press"
                            title="點擊單獨聽發音">
                        ${syl}
                    </button>
                `;
            }).join('<span class="text-slate-300 font-black text-xl mx-0.5">-</span>');
        } else {
            syllableHTML = `
                <button onclick="AudioManager.playTapSound(); AudioManager.speakWord('${item.word}')" 
                        class="syllable-chip chip-color-0 btn-press text-2xl px-5 py-1.5"
                        title="點擊單獨聽發音">
                    ${item.word}
                </button>
            `;
        }

        // 採用台灣小學標準：國字右側直排注音 (高度齊平)
        const zhuyinHTML = generateZhuyinHTML(item.chinese, "text-2xl sm:text-3xl");
        const chinesePlainText = item.chinese.map(c => c.c).join('');
        const wordCardId = `word-card-${item.id}`;

        card.innerHTML = `
            ${typeBadge}
            <div class="text-6xl sm:text-7xl mb-3 mt-2">${item.emoji}</div>
            
            <div class="flex items-center justify-center flex-wrap gap-1 mb-2">
                ${syllableHTML}
            </div>
            
            <div id="${wordCardId}-letters" class="text-3xl font-black text-slate-700 tracking-wider font-mono mb-3 min-h-[2.2rem] flex items-center justify-center">
                ${item.word.split('').map((char, i) => `<span class="letter-span" data-char-index="${i}">${char}</span>`).join('')}
            </div>

            <div class="flex items-center gap-2 mb-4 w-full justify-center">
                <button onclick="AudioManager.speakWord('${item.word}')" 
                        class="btn-press bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-4 py-2 rounded-2xl font-black text-sm flex items-center gap-1.5 border border-emerald-200">
                    <svg class="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg>
                    <span>聽單字</span>
                </button>

                <button onclick="App.triggerSpell('${item.word}', '${wordCardId}-letters')" 
                        class="btn-press bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-800 px-4 py-2 rounded-2xl font-black text-sm flex items-center gap-1.5 border border-fuchsia-200">
                    <span class="text-base">🔤</span>
                    <span>拼字母</span>
                </button>
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
                        <p class="text-rose-700 text-xs sm:text-sm font-bold">點擊「淨化收服」，再次答對就能奪回單字喔！</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-12">
                ${state.wrongWords.map(item => `
                    <div id="monster-card-${item.id}" class="bg-white rounded-3xl p-5 border-2 border-rose-200 shadow-sm flex flex-col items-center pop-in relative hover:shadow-md transition-all">
                        <div class="text-6xl mb-2">${item.emoji}</div>
                        <div class="text-3xl font-black text-slate-800 mb-1 font-mono tracking-wider">${item.word}</div>
                        <div class="mb-4">${generateZhuyinHTML(item.chinese, "text-2xl")}</div>

                        <div class="flex gap-2 w-full mt-auto">
                            <button onclick="AudioManager.speakWord('${item.word}')" class="btn-press flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl text-sm font-black flex items-center justify-center gap-1 border border-slate-200">
                                <span>🔊</span> 聽音
                            </button>
                            <button onclick="App.purifyMonster('${item.id}')" class="btn-press flex-2 bg-rose-500 hover:bg-rose-600 text-white py-2.5 px-4 rounded-xl text-sm font-black flex items-center justify-center gap-1 shadow-sm border-b-2 border-rose-700">
                                <span>✨</span> 淨化收服
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 淨化收服小怪獸
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
            
            // 拆解注音符號與聲調 (聲調: ˊ ˇ ˋ ˙)
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
