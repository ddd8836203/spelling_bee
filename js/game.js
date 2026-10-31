/**
 * ========================================================
 * 🎮 遊戲引擎核心模組 (Game Engine)
 * 實作三段式互動：字母磁鐵積木拼字、看圖口說、紙筆聽寫
 * ========================================================
 */

const Game = (function() {
    // 遊戲運行狀態
    const state = {
        mode: 'speak',           // 'speak' 或 'write'
        writeSubMode: 'tiles',   // 'tiles' (積木拼字) 或 'paper' (紙筆聽寫)
        list: [],                // 當前測驗單字清單 (已打亂)
        currentIndex: 0,         // 當前題目索引
        isAnswerRevealed: false, // 是否已翻開答案
        isUpperCase: true,       // 字母大小寫切換 (預設大寫)
        
        // 積木拼字專用狀態
        currentSlots: [],        // 插槽陣列 [{ slotIndex, char, tileId }]
        currentTiles: [],        // 備選字母池 [{ tileId, char, isUsed }]
        isTilesRevealed: false   // 積木模式是否已點「看答案」
    };

    // 常見干擾字母集 (供積木模式使用)
    const DISTRACTOR_LETTERS = ['e', 'a', 's', 't', 'o', 'r', 'i', 'n', 'c', 'l'];

    // 初始化/重設測驗
    function initQuiz(wordList, mode) {
        state.mode = mode;
        state.currentIndex = 0;
        state.isAnswerRevealed = false;
        state.isTilesRevealed = false;
        
        // 洗牌打亂題目順序
        state.list = [...wordList].sort(() => Math.random() - 0.5);
        
        if (state.mode === 'write') {
            if (state.writeSubMode === 'tiles') {
                setupTilesForCurrentWord(true); // true 表示進入新題目，播放單字發音
            } else {
                playQuestionWord();
            }
        }
    }

    // 取得當前題目
    function getCurrentItem() {
        if (!state.list || state.currentIndex >= state.list.length) return null;
        return state.list[state.currentIndex];
    }

    // 播放當前題目整詞發音
    function playQuestionWord() {
        const item = getCurrentItem();
        if (item) {
            setTimeout(() => AudioManager.speakWord(item.word, 0.8), 200);
        }
    }

    // 切換大小寫 (按了切換並重唸單字發音)
    function toggleCase() {
        state.isUpperCase = !state.isUpperCase;
        AudioManager.playTapSound();

        const item = getCurrentItem();
        if (item) {
            // 切換時重新朗讀單字
            AudioManager.speakWord(item.word, 0.85);

            // 更新備選積木字母
            state.currentTiles.forEach(tile => {
                tile.char = state.isUpperCase ? tile.char.toUpperCase() : tile.char.toLowerCase();
            });

            // 更新插槽字母
            state.currentSlots.forEach(slot => {
                if (slot.char) {
                    slot.char = state.isUpperCase ? slot.char.toUpperCase() : slot.char.toLowerCase();
                }
            });
        }

        const mainContent = document.getElementById('main-content');
        if (mainContent && state.mode === 'write') {
            renderWriteQuiz(mainContent);
        }
    }

    // ========================================================
    // 🗣️ 階梯二：看圖口說 (Speak Tab)
    // ========================================================
    function renderSpeakQuiz(container) {
        const item = getCurrentItem();
        if (!item) {
            App.updateBeeProgress(state.list.length, state.list.length);
            renderQuizFinished(container);
            return;
        }

        const total = state.list.length;
        const currentNum = state.currentIndex + 1;
        const cardId = `speak-card-${item.id}`;

        App.updateBeeProgress(state.currentIndex, total);

        const zhuyinHTML = App.generateZhuyinHTML ? App.generateZhuyinHTML(item.chinese, "text-2xl sm:text-3xl") : '';
        const syllables = item.syllables || [item.word];

        container.innerHTML = `
            <div class="flex flex-col items-center justify-center flex-grow pop-in pb-12">
                <div class="mb-5 flex items-center gap-2">
                    <span class="bg-amber-100 text-amber-900 px-5 py-2 rounded-full font-black text-base sm:text-lg border border-amber-200 shadow-sm flex items-center gap-2">
                        <span>🗣️ 看圖說英文</span>
                        <span class="bg-amber-500 text-white text-xs px-2.5 py-0.5 rounded-full">${currentNum} / ${total}</span>
                    </span>
                </div>

                <div id="${cardId}" class="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-lg border-4 border-amber-300 flex flex-col items-center w-full max-w-lg transition-transform">
                    <div class="text-8xl sm:text-9xl mb-6 mt-2">${item.emoji}</div>

                    ${!state.isAnswerRevealed ? `
                        <div class="mb-6 flex items-center justify-center min-h-[3rem]">
                            ${zhuyinHTML}
                        </div>
                        <p class="text-slate-400 font-black text-sm sm:text-base mb-8">看著圖片，大聲說出英文單字喔！</p>
                        
                        <button onclick="Game.revealSpeakAnswer()" 
                                class="btn-press bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-2xl py-4 px-10 rounded-2xl shadow-md w-full border-b-4 border-amber-600 transition-colors">
                            看答案 👀
                        </button>
                    ` : `
                        <div class="flex flex-col items-center w-full pop-in">
                            <div class="flex items-center gap-1.5 mb-3 flex-wrap justify-center">
                                ${syllables.map((syl, i) => `
                                    <button onclick="AudioManager.speakSyllable('${syl}')" class="syllable-chip chip-color-${i % 5} btn-press">
                                        ${syl}
                                    </button>
                                `).join('<span class="text-slate-300 font-black text-xl">-</span>')}
                            </div>

                            <div class="mb-6 flex items-center justify-center min-h-[3rem]">
                                ${zhuyinHTML}
                            </div>

                            <button onclick="AudioManager.speakWord('${item.word}')" 
                                    class="btn-press bg-indigo-100 hover:bg-indigo-200 text-indigo-700 p-4 rounded-full mb-8 border border-indigo-200">
                                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg>
                            </button>

                            <div class="flex gap-4 w-full">
                                <button onclick="Game.handleSpeakResult(false, '${cardId}')" 
                                        class="btn-press bg-rose-500 hover:bg-rose-600 text-white font-black text-xl py-4 rounded-2xl shadow-md flex-1 border-b-4 border-rose-700">
                                    ❌ 我答錯
                                </button>
                                <button onclick="Game.handleSpeakResult(true, '${cardId}')" 
                                        class="btn-press bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl py-4 rounded-2xl shadow-md flex-1 border-b-4 border-emerald-700">
                                    ⭕ 我答對
                                </button>
                            </div>
                        </div>
                    `}
                </div>
            </div>
        `;

        if (state.isAnswerRevealed) {
            setTimeout(() => AudioManager.speakWord(item.word), 150);
        }
    }

    function revealSpeakAnswer() {
        state.isAnswerRevealed = true;
        AudioManager.playTapSound();
        const mainContent = document.getElementById('main-content');
        if (mainContent) renderSpeakQuiz(mainContent);
    }

    function handleSpeakResult(isCorrect, cardId) {
        const item = getCurrentItem();
        if (!item) return;

        if (isCorrect) {
            AudioManager.playSuccessSound();
            state.currentIndex++;
            state.isAnswerRevealed = false;
            const mainContent = document.getElementById('main-content');
            if (mainContent) renderSpeakQuiz(mainContent);
        } else {
            AudioManager.playErrorSound();
            App.addWrongWord(item);

            const card = document.getElementById(cardId);
            if (card) card.classList.add('animate-eat');

            setTimeout(() => {
                state.currentIndex++;
                state.isAnswerRevealed = false;
                const mainContent = document.getElementById('main-content');
                if (mainContent) renderSpeakQuiz(mainContent);
            }, 850);
        }
    }

    // ========================================================
    // ✍️ 階梯一 & 三：聽音拼寫 (Write Tab)
    // ========================================================
    function renderWriteQuiz(container) {
        const item = getCurrentItem();
        if (!item) {
            App.updateBeeProgress(state.list.length, state.list.length);
            renderQuizFinished(container);
            return;
        }

        const total = state.list.length;
        const currentNum = state.currentIndex + 1;

        App.updateBeeProgress(state.currentIndex, total);

        // 頂部子模式與大小寫切換列
        const subModeSwitchHTML = `
            <div class="flex items-center justify-between mb-4 w-full max-w-lg gap-2">
                <span class="bg-purple-100 text-purple-900 px-3.5 py-1.5 rounded-full font-black text-xs sm:text-sm border border-purple-200 shrink-0">
                    ✍️ 聽音拼寫 (${currentNum} / ${total})
                </span>

                <div class="flex items-center gap-2">
                    <!-- 大小寫切換按鈕 (切換並重唸單字) -->
                    <button onclick="Game.toggleCase()" 
                            class="btn-press bg-white hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-2xl font-black text-xs border-2 border-purple-200 shadow-sm flex items-center gap-1"
                            title="切換字母大/小寫並朗讀發音">
                        <span class="text-sm">🔤</span>
                        <span>${state.isUpperCase ? '大寫 Aa' : '小寫 aA'}</span>
                    </button>

                    <!-- 積木/紙筆切換 -->
                    <div class="flex bg-slate-200 p-1 rounded-2xl text-xs font-black">
                        <button onclick="Game.setWriteSubMode('tiles')" class="px-2.5 py-1 rounded-xl transition-all ${state.writeSubMode === 'tiles' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600'}">
                            🧩 積木
                        </button>
                        <button onclick="Game.setWriteSubMode('paper')" class="px-2.5 py-1 rounded-xl transition-all ${state.writeSubMode === 'paper' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-600'}">
                            📝 紙筆
                        </button>
                    </div>
                </div>
            </div>
        `;

        if (state.writeSubMode === 'tiles') {
            renderTilesMode(container, item, subModeSwitchHTML);
        } else {
            renderPaperMode(container, item, subModeSwitchHTML);
        }
    }

    function setWriteSubMode(subMode) {
        state.writeSubMode = subMode;
        AudioManager.playTapSound();
        if (subMode === 'tiles') {
            setupTilesForCurrentWord(true);
        } else {
            playQuestionWord();
        }
        const mainContent = document.getElementById('main-content');
        if (mainContent) renderWriteQuiz(mainContent);
    }

    // --------------------------------------------------------
    // 🧩 模式 A：字母磁鐵積木拼字
    // --------------------------------------------------------
    function setupTilesForCurrentWord(shouldPlayWordAudio = false) {
        const item = getCurrentItem();
        if (!item) return;

        const targetChars = item.word.split('');
        
        state.currentSlots = targetChars.map((_, i) => ({
            slotIndex: i,
            char: '',
            tileId: null
        }));

        const poolChars = [...targetChars];
        const distractorCount = targetChars.length <= 4 ? 1 : 2;
        
        for (let i = 0; i < distractorCount; i++) {
            const randomD = DISTRACTOR_LETTERS[Math.floor(Math.random() * DISTRACTOR_LETTERS.length)];
            poolChars.push(randomD);
        }

        poolChars.sort(() => Math.random() - 0.5);

        state.currentTiles = poolChars.map((char, index) => ({
            tileId: `tile-${index}`,
            char: state.isUpperCase ? char.toUpperCase() : char.toLowerCase(),
            isUsed: false
        }));

        state.isTilesRevealed = false;
        state.isAnswerRevealed = false;

        // 僅在進入新題目時朗讀單字，選字母時不再重覆朗讀
        if (shouldPlayWordAudio) {
            playQuestionWord();
        }
    }

    function renderTilesMode(container, item, headerHTML) {
        const isAllFilled = state.currentSlots.every(s => s.char !== '');
        const zhuyinHTML = App.generateZhuyinHTML ? App.generateZhuyinHTML(item.chinese, "text-2xl sm:text-3xl") : '';

        // 根據字母長度自適應插槽尺寸，確保永遠排成同一橫排不折行
        const wordLen = item.word.length;
        let slotSizeClass = "w-14 h-16 sm:w-16 sm:h-20 text-2xl sm:text-3xl"; // 1~4 字
        let tileSizeClass = "w-14 h-16 sm:w-16 sm:h-20 text-2xl sm:text-3xl";

        if (wordLen === 5 || wordLen === 6) {
            slotSizeClass = "w-11 h-14 sm:w-13 sm:h-16 text-xl sm:text-2xl";
            tileSizeClass = "w-11 h-14 sm:w-13 sm:h-16 text-xl sm:text-2xl";
        } else if (wordLen >= 7) {
            slotSizeClass = "w-9 h-12 sm:w-11 sm:h-14 text-lg sm:text-xl";
            tileSizeClass = "w-9 h-12 sm:w-11 sm:h-14 text-lg sm:text-xl";
        }

        container.innerHTML = `
            <div class="flex flex-col items-center justify-center flex-grow pop-in pb-12 w-full">
                ${headerHTML}

                <div id="tiles-card" class="bg-white rounded-[2.5rem] p-5 sm:p-8 shadow-lg border-4 border-purple-200 flex flex-col items-center w-full max-w-lg transition-transform">
                    
                    <!-- 題目 Emoji 圖示 -->
                    <div class="text-7xl sm:text-8xl mb-2 pop-in">${item.emoji}</div>

                    <!-- 聽聲音大喇叭 -->
                    <button onclick="AudioManager.speakWord('${item.word}')" 
                            class="btn-press bg-purple-500 hover:bg-purple-600 text-white p-4 sm:p-5 rounded-full shadow-md mb-2 transition-colors animate-pulse"
                            title="再聽一次單字發音">
                        <svg class="w-10 h-10 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg>
                    </button>
                    
                    <!-- 國字直排注音 (高度齊平) -->
                    <div class="mb-5 flex items-center justify-center min-h-[3rem]">
                        ${zhuyinHTML}
                    </div>

                    <!-- 字母目標插槽列 (橫排不折行) -->
                    <div id="slots-container" class="flex items-center justify-center gap-1.5 sm:gap-2 mb-6 w-full flex-nowrap overflow-x-auto py-1">
                        ${state.currentSlots.map(slot => `
                            <div onclick="${state.isTilesRevealed ? '' : `Game.returnTileFromSlot(${slot.slotIndex})`}" 
                                 class="tile-slot ${slotSizeClass} ${slot.char ? 'filled' : ''} ${state.isTilesRevealed ? 'slot-revealed' : ''} btn-press shrink-0">
                                ${slot.char}
                            </div>
                        `).join('')}
                    </div>

                    <!-- 下方備選字母磁鐵積木池 -->
                    <div class="bg-slate-50 p-4 sm:p-5 rounded-3xl border-2 border-slate-100 w-full mb-6">
                        <div class="text-xs font-black text-slate-400 text-center mb-3">
                            ${state.isTilesRevealed ? '已翻開答案，快把它記下來喔！' : '點擊字母排進空格中：'}
                        </div>
                        <div class="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                            ${state.currentTiles.map(tile => `
                                <button onclick="${state.isTilesRevealed ? '' : `Game.placeTileToSlot('${tile.tileId}')`}" 
                                        class="letter-tile-btn ${tileSizeClass} bg-white hover:bg-slate-100 text-slate-800 ${tile.isUsed || state.isTilesRevealed ? 'used' : 'btn-press'}">
                                    ${tile.char}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <!-- 操作按鈕列 -->
                    <div class="flex gap-3 w-full">
                        ${!state.isTilesRevealed ? `
                            <button onclick="Game.resetCurrentTiles()" class="btn-press flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-3.5 rounded-2xl font-black text-sm sm:text-base">
                                🔄 清除重排
                            </button>

                            <button onclick="Game.giveUpAndRevealTiles()" class="btn-press flex-1 bg-rose-100 hover:bg-rose-200 text-rose-800 py-3.5 rounded-2xl font-black text-sm sm:text-base border border-rose-300 flex items-center justify-center gap-1">
                                <span>👀</span>
                                <span>看答案</span>
                            </button>

                            ${isAllFilled ? `
                                <button onclick="Game.checkTilesAnswer()" class="btn-press flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-2xl font-black text-base shadow-md border-b-4 border-emerald-700 animate-bounce">
                                    檢查 ✨
                                </button>
                            ` : ''}
                        ` : `
                            <button onclick="Game.nextTileQuestion()" class="btn-press w-full bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-2xl font-black text-xl shadow-md border-b-4 border-purple-700 flex items-center justify-center gap-2">
                                <span>我記住了，下一題 ➔</span>
                            </button>
                        `}
                    </div>

                </div>
            </div>
        `;
    }

    // 點擊字母 ➔ 唸所選的字母 (解決問題 1)
    function placeTileToSlot(tileId) {
        if (state.isTilesRevealed) return;

        const tile = state.currentTiles.find(t => t.tileId === tileId);
        if (!tile || tile.isUsed) return;

        const emptySlot = state.currentSlots.find(s => s.char === '');
        if (!emptySlot) return;

        tile.isUsed = true;
        emptySlot.char = tile.char;
        emptySlot.tileId = tile.tileId;

        // 朗讀所選的字母 (例如選 J 唸 "J")，不唸整個單字！
        AudioManager.speakLetter(tile.char);

        const mainContent = document.getElementById('main-content');
        if (mainContent) renderWriteQuiz(mainContent);

        // 全部填滿時做自動檢查
        if (state.currentSlots.every(s => s.char !== '')) {
            setTimeout(checkTilesAnswer, 400);
        }
    }

    // 點擊插槽退回字母
    function returnTileFromSlot(slotIndex) {
        if (state.isTilesRevealed) return;

        const slot = state.currentSlots[slotIndex];
        if (!slot || !slot.char) return;

        const tile = state.currentTiles.find(t => t.tileId === slot.tileId);
        if (tile) tile.isUsed = false;

        slot.char = '';
        slot.tileId = null;

        AudioManager.playTapSound();

        const mainContent = document.getElementById('main-content');
        if (mainContent) renderWriteQuiz(mainContent);
    }

    // 清除重排
    function resetCurrentTiles() {
        AudioManager.playTapSound();
        setupTilesForCurrentWord(false);
        const mainContent = document.getElementById('main-content');
        if (mainContent) renderWriteQuiz(mainContent);
    }

    // 檢查積木拼字答案
    function checkTilesAnswer() {
        if (state.isTilesRevealed) return;

        const item = getCurrentItem();
        if (!item) return;

        const assembledWord = state.currentSlots.map(s => s.char).join('').toLowerCase();
        const targetWord = item.word.toLowerCase();

        const card = document.getElementById('tiles-card');
        const slotElements = document.querySelectorAll('.tile-slot');

        if (assembledWord === targetWord) {
            AudioManager.playSuccessSound();
            slotElements.forEach(el => el.classList.add('slot-correct'));

            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { y: 0.6 }
                });
            }

            setTimeout(() => {
                state.currentIndex++;
                setupTilesForCurrentWord(true); // 進入下一題，自動朗讀新單字
                const mainContent = document.getElementById('main-content');
                if (mainContent) renderWriteQuiz(mainContent);
            }, 1200);

        } else {
            AudioManager.playErrorSound();
            slotElements.forEach(el => el.classList.add('slot-wrong'));
            if (card) card.classList.add('shake');

            App.addWrongWord(item);

            setTimeout(() => {
                if (card) card.classList.remove('shake');
                slotElements.forEach(el => el.classList.remove('slot-wrong'));
            }, 600);
        }
    }

    // 看答案
    function giveUpAndRevealTiles() {
        const item = getCurrentItem();
        if (!item) return;

        App.addWrongWord(item);
        AudioManager.playErrorSound();

        state.isTilesRevealed = true;

        const correctChars = (state.isUpperCase ? item.word.toUpperCase() : item.word.toLowerCase()).split('');
        state.currentSlots.forEach((slot, i) => {
            slot.char = correctChars[i] || '';
        });

        AudioManager.speakWord(item.word);

        const mainContent = document.getElementById('main-content');
        if (mainContent) renderWriteQuiz(mainContent);
    }

    // 看完答案前進下一題
    function nextTileQuestion() {
        AudioManager.playTapSound();
        state.currentIndex++;
        setupTilesForCurrentWord(true); // 進入下一題，自動朗讀新單字
        const mainContent = document.getElementById('main-content');
        if (mainContent) renderWriteQuiz(mainContent);
    }

    // --------------------------------------------------------
    // 📝 模式 B：實體紙筆聽寫模式
    // --------------------------------------------------------
    function renderPaperMode(container, item, headerHTML) {
        const zhuyinHTML = App.generateZhuyinHTML ? App.generateZhuyinHTML(item.chinese, "text-2xl sm:text-3xl") : '';
        const syllables = item.syllables || [item.word];
        const displayWord = state.isUpperCase ? item.word.toUpperCase() : item.word.toLowerCase();

        container.innerHTML = `
            <div class="flex flex-col items-center justify-center flex-grow pop-in pb-12 w-full">
                ${headerHTML}

                <div class="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-lg border-4 border-purple-300 flex flex-col items-center w-full max-w-lg transition-transform">
                    
                    ${!state.isAnswerRevealed ? `
                        <div class="text-7xl mb-4">${item.emoji}</div>
                        <button onclick="AudioManager.speakWord('${item.word}', 0.8)" 
                                class="btn-press bg-purple-500 hover:bg-purple-600 text-white p-7 rounded-full shadow-lg mb-4 animate-pulse transition-colors">
                            <svg class="w-14 h-14 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div class="mb-6 flex items-center justify-center min-h-[3rem]">${zhuyinHTML}</div>
                        <p class="text-xl font-black text-slate-600 mb-8">仔細聽，寫在白板或紙上喔！</p>
                        
                        <button onclick="Game.revealPaperAnswer()" 
                                class="btn-press bg-purple-500 hover:bg-purple-600 text-white font-black text-2xl py-4 px-10 rounded-2xl shadow-md w-full border-b-4 border-purple-700 transition-colors">
                            看答案 👀
                        </button>
                    ` : `
                        <div class="text-7xl mb-4">${item.emoji}</div>
                        <div class="text-4xl font-black text-slate-800 tracking-wider mb-2 font-mono">${displayWord}</div>
                        <div class="flex items-center gap-2 mb-3 flex-wrap justify-center">
                            ${syllables.map((syl, i) => `
                                <button onclick="AudioManager.speakSyllable('${syl}')" class="syllable-chip chip-color-${i % 5} btn-press">
                                    ${state.isUpperCase ? syl.toUpperCase() : syl.toLowerCase()}
                                </button>
                            `).join('<span class="text-slate-300 font-black text-xl">-</span>')}
                        </div>
                        <div class="mb-6 flex items-center justify-center min-h-[3rem]">${zhuyinHTML}</div>

                        <div class="flex gap-4 w-full">
                            <button onclick="Game.handlePaperResult(false)" 
                                    class="btn-press bg-rose-500 hover:bg-rose-600 text-white font-black text-xl py-4 rounded-2xl shadow-md flex-1 border-b-4 border-rose-700">
                                ❌ 寫錯了
                            </button>
                            <button onclick="Game.handlePaperResult(true)" 
                                    class="btn-press bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl py-4 rounded-2xl shadow-md flex-1 border-b-4 border-emerald-700">
                                ⭕ 全對！
                            </button>
                        </div>
                    `}

                </div>
            </div>
        `;

        if (state.isAnswerRevealed) {
            setTimeout(() => AudioManager.speakWord(item.word), 150);
        }
    }

    function revealPaperAnswer() {
        state.isAnswerRevealed = true;
        AudioManager.playTapSound();
        const mainContent = document.getElementById('main-content');
        if (mainContent) renderWriteQuiz(mainContent);
    }

    function handlePaperResult(isCorrect) {
        const item = getCurrentItem();
        if (!item) return;

        if (isCorrect) {
            AudioManager.playSuccessSound();
        } else {
            AudioManager.playErrorSound();
            App.addWrongWord(item);
        }

        state.currentIndex++;
        state.isAnswerRevealed = false;
        playQuestionWord(); // 進入下一題朗讀發音
        const mainContent = document.getElementById('main-content');
        if (mainContent) renderWriteQuiz(mainContent);
    }

    // ========================================================
    // 🏆 測驗完成畫面
    // ========================================================
    function renderQuizFinished(container) {
        AudioManager.playFanfare();

        container.innerHTML = `
            <div class="flex-grow flex flex-col items-center justify-center p-8 text-center pop-in">
                <div class="text-8xl mb-4 animate-bounce">🏆</div>
                <h2 class="text-3xl sm:text-4xl font-black text-amber-500 mb-3 drop-shadow-sm">太厲害了！</h2>
                <p class="text-slate-600 text-lg font-bold mb-8">你完成了本單元的所有測驗！蜂蜜罐滿滿的囉 🍯</p>
                
                <button onclick="App.switchTab('${state.mode}')" 
                        class="btn-press bg-emerald-500 hover:bg-emerald-600 text-white font-black text-2xl py-4 px-10 rounded-2xl shadow-lg border-b-4 border-emerald-700 transition-all">
                    再挑戰一次 🔄
                </button>
            </div>
        `;

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }

    return {
        initQuiz,
        toggleCase,
        renderSpeakQuiz,
        renderWriteQuiz,
        revealSpeakAnswer,
        handleSpeakResult,
        setWriteSubMode,
        placeTileToSlot,
        returnTileFromSlot,
        resetCurrentTiles,
        checkTilesAnswer,
        giveUpAndRevealTiles,
        nextTileQuestion,
        revealPaperAnswer,
        handlePaperResult
    };
})();
