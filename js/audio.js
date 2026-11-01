/**
 * ========================================================
 * 🐝 音訊與發音核心模組 (針對 iPad Safari 觸控與音訊優化)
 * 支援：Phonics 分塊智慧擬音發音 (speakChunk) 與 連音拼讀 (blendChunks)
 * 解決：徹底杜絕分塊偷唸整詞、消除 'sss' 重複唸問題、實現純尾輔音獨立發音
 * ========================================================
 */

const AudioManager = (function() {
    let audioCtx = null;
    let isUnlocked = false;
    let synth = window.speechSynthesis;
    let currentSpellToken = 0;

    // ========================================================
    // 🎯 Phonics 自然發音高精度擬音字典 (Phonetic Chunk Map)
    // 包含：單輔音、輔音叢、尾輔音、韻基擬音字 (確保 100% 獨立發音，絕不唸整詞)
    // ========================================================
    const PHONETIC_CHUNK_MAP = {
        // --- 1. 首音與單輔音 (短促自然發音，避免唸成字母名稱如 B -> /biː/) ---
        'b': 'buh',
        'c': 'kuh',
        'd': 'duh',
        'f': 'fuh',
        'g': 'guh',
        'h': 'huh',
        'j': 'juh',
        'k': 'kuh',
        'l': 'luh',
        'm': 'muh',
        'n': 'nuh',
        'p': 'puh',
        'r': 'ruh',
        's': 'suh',    // 👈 修正：改用 suh，徹底解決唸成三次 "S-S-S" 的問題！
        't': 'tuh',
        'v': 'vuh',
        'w': 'wuh',
        'y': 'yuh',
        'z': 'zuh',    // 👈 修正：改用 zuh，避免唸成 "Z-Z-Z"
        'ch': 'chuh',
        'sh': 'shh',
        'th': 'thuh',
        'bl': 'bluh',
        'br': 'bruh',
        'cl': 'kluh',
        'dr': 'druh',
        'fl': 'fluh',
        'pl': 'pluh',
        'sl': 'sluh',
        'st': 'stuh',
        'qu': 'kwuh',
        'str': 'struh',

        // --- 2. 純尾輔音叢 (無母音尾音，短促爆破，不唸前綴母音與整詞) ---
        'ct': 'kt',     // act 尾音 /kt/，直接發短促爆破音，絕不唸整詞 act！
        'dd': 'duh',    // add 尾音 /d/
        'pe': 'puh',    // ape 尾音 /p/ (e 靜音)
        'gg': 'guh',    // egg 尾音 /ɡ/
        'lf': 'lf',     // elf 尾音 /lf/
        'nk': 'nk',     // ink 尾音 /ŋk/
        'x': 'ks',      // ax / ox 尾音 /ks/
        'p': 'puh',     // up 尾音 /p/
        't': 'tuh',     // at 尾音 /t/

        // --- 3. 韻基 (Rime) 專屬擬音字 (發精準韻母音，完全不帶首音) ---
        'ich': 'itch',  // 👈 修正：rich 的 ich，發單字 itch (/ɪtʃ/)，絕不唸 rich！
        'afe': 'aif',   // 👈 修正：safe 的 afe，發擬音 aif (/eɪf/)，絕不唸 safe！
        'ose': 'oze',   // rose / nose / hose 韻基 (/oʊz/)
        'ase': 'aze',   // vase 韻基 (/eɪz/)
        'ove': 'uv',    // dove / love 韻基 (/ʌv/)
        'olk': 'oke',   // yolk 韻基 (/oʊk/)
        'umb': 'um',    // thumb 韻基 (/ʌm/)
        'alk': 'awk',   // walk 韻基 (/ɔːk/)
        'ild': 'iled',  // child 韻基 (/aɪld/)
        'omb': 'ohm',   // comb 韻基 (/oʊm/)
        'are': 'air',   // care 韻基 (/er/)
        'ire': 'ire',   // fire 韻基 (/aɪər/)
        'ore': 'ore',   // more 韻基 (/ɔːr/)
        'oor': 'ore',   // door 韻基 (/ɔːr/)
        'our': 'ore',   // four 韻基 (/ɔːr/)
        'eer': 'ear',   // deer 韻基 (/ɪr/)
        'ere': 'ear',   // here 韻基 (/ɪr/)
        'irl': 'url',   // girl 韻基 (/ɜːrl/)
        'orm': 'urm',   // worm 韻基 (/ɜːrm/)
        'eath': 'eth',  // feather 韻基 (/ɛð/)
        'eaf': 'eef',   // leaf 韻基 (/iːf/)
        'saur': 'sore', // dinosaur 尾音 (/sɔːr/)
        'trich': 'tritch', // ostrich 尾音 (/trɪtʃ/)

        // --- 4. 雙音節與多音節弱讀尾綴 ---
        'dle': 'dull',  // candle 尾音 (/dəl/)
        'tle': 'tull',  // rattle 尾音 (/təl/)
        'ble': 'bull',  // vegetables 尾音 (/bəl/)
        'lar': 'ler',   // collar 尾音 (/lər/)
        'phant': 'funt',// elephant 尾音 (/fənt/)
        'pus': 'puss',  // octopus 尾音 (/pəs/)
        'bra': 'bruh',  // zebra 尾音 (/brə/)
        'zer': 'zeer',  // zero 首音節 (/zɪr/)
        'na': 'nuh',    // iguana 尾音 (/nə/)
        'la': 'luh',    // umbrella 尾音 (/ə/)

        // --- 5. 母音變體 ---
        'a': 'aah',     // 短母音 /æ/
        'ay': 'ay',     // 長母音 /eɪ/
        'ee': 'ee',     // 長母音 /iː/
        'ea': 'ee',
        'ey': 'ee',
        'ie': 'ee'
    };

    // 1. 初始化並解鎖 iOS AudioContext
    function getAudioContext() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                audioCtx = new AudioContextClass();
            }
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    // 2. iOS 觸控解鎖機制
    function unlockAudio() {
        if (isUnlocked) return;
        
        const ctx = getAudioContext();
        if (ctx) {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            gain.gain.value = 0.001;
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(0);
            osc.stop(ctx.currentTime + 0.05);
        }

        if (synth) {
            const emptyUtterance = new SpeechSynthesisUtterance('');
            emptyUtterance.volume = 0;
            synth.speak(emptyUtterance);
        }

        isUnlocked = true;
    }

    ['touchstart', 'touchend', 'mousedown', 'keydown'].forEach(evt => {
        window.addEventListener(evt, unlockAudio, { once: true, passive: true });
    });

    // ========================================================
    // 🎵 Web Audio 純程式碼合成音效
    // ========================================================

    function playSuccessSound() {
        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.07);

            gain.gain.setValueAtTime(0, now + idx * 0.07);
            gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.07 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.35);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + idx * 0.07);
            osc.stop(now + idx * 0.07 + 0.36);
        });
    }

    function playErrorSound() {
        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(90, now + 0.32);

        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.33);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.34);
    }

    function playTapSound() {
        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.06);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.07);
    }

    function playStarSound() {
        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        const starFreqs = [783.99, 987.77, 1174.66, 1567.98];
        
        starFreqs.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.05);

            gain.gain.setValueAtTime(0.12, now + idx * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.22);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + idx * 0.05);
            osc.stop(now + idx * 0.05 + 0.23);
        });
    }

    function playFanfare() {
        const ctx = getAudioContext();
        if (!ctx) return;

        const now = ctx.currentTime;
        const melody = [
            { f: 523.25, d: 0.12, wait: 0.0 },
            { f: 523.25, d: 0.12, wait: 0.14 },
            { f: 523.25, d: 0.12, wait: 0.28 },
            { f: 659.25, d: 0.28, wait: 0.42 },
            { f: 587.33, d: 0.14, wait: 0.72 },
            { f: 659.25, d: 0.14, wait: 0.88 },
            { f: 783.99, d: 0.45, wait: 1.04 },
        ];

        melody.forEach(note => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(note.f, now + note.wait);

            gain.gain.setValueAtTime(0, now + note.wait);
            gain.gain.linearRampToValueAtTime(0.2, now + note.wait + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + note.wait + note.d);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + note.wait);
            osc.stop(now + note.wait + note.d + 0.05);
        });
    }

    // ========================================================
    // 🗣️ Web Speech API 發音核心與 Phonics 分塊發音引擎
    // ========================================================

    // 1. 朗讀英文整詞
    function speakWord(word, rate = 0.85) {
        if (!synth || !word) return;
        synth.cancel();

        const cleanWord = word.trim();
        if (!cleanWord) return;

        const utterance = new SpeechSynthesisUtterance(cleanWord);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        utterance.pitch = 1.05;
        synth.speak(utterance);
    }

    // 2. 朗讀單個字母
    function speakLetter(letter) {
        if (!synth || !letter) return;
        synth.cancel();

        const cleanLetter = letter.trim().toUpperCase();
        if (!cleanLetter) return;

        const utterance = new SpeechSynthesisUtterance(cleanLetter + ",");
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        synth.speak(utterance);
    }

    let activeChunkAudio = null;

    function stopChunkAudio() {
        if (activeChunkAudio) {
            try {
                activeChunkAudio.pause();
                activeChunkAudio.currentTime = 0;
            } catch (e) {}
            activeChunkAudio = null;
        }
    }

    // 播放專屬微音檔 (返回 Promise，播放完畢 resolve)
    function playChunkAudio(wavUrl) {
        return new Promise((resolve) => {
            stopChunkAudio();
            if (synth) synth.cancel();

            const audio = new Audio(wavUrl);
            activeChunkAudio = audio;

            let resolved = false;
            const done = (ok) => {
                if (resolved) return;
                resolved = true;
                if (activeChunkAudio === audio) activeChunkAudio = null;
                resolve(ok);
            };

            audio.onended = () => done(true);
            audio.onerror = () => done(false);
            audio.play().catch(() => done(false));
        });
    }

    // 尋找分塊專屬微音檔 URL
    function getChunkAudioUrl(chunk) {
        if (!chunk) return null;
        const map = (typeof CHUNK_AUDIO_MAP !== 'undefined') ? CHUNK_AUDIO_MAP : (window.CHUNK_AUDIO_MAP || null);
        if (!map) return null;

        if (typeof chunk === 'object') {
            const text = (chunk.text || '').trim().toLowerCase();
            const ipa = (chunk.ipa || '').trim();
            const exactKey = `${text}|${ipa}`;
            if (map[exactKey]) return map[exactKey];

            // 若找不到 exact，嘗試 text 前綴搜尋
            for (const [k, url] of Object.entries(map)) {
                if (k.startsWith(text + '|')) return url;
            }
        } else if (typeof chunk === 'string') {
            const clean = chunk.trim().toLowerCase();
            for (const [k, url] of Object.entries(map)) {
                if (k.startsWith(clean + '|')) return url;
            }
        }
        return null;
    }

    // 3. 核心：解析單一分塊的最佳擬音發音 (絕不偷唸整詞)
    function resolveChunkSpeech(chunk, fallbackWord = '') {
        if (typeof chunk === 'string') {
            const clean = chunk.trim().toLowerCase();
            const ttsFallback = (typeof CHUNK_TTS_FALLBACK !== 'undefined') ? CHUNK_TTS_FALLBACK : (window.CHUNK_TTS_FALLBACK || {});
            return { text: ttsFallback[clean] || PHONETIC_CHUNK_MAP[clean] || clean, rate: 0.88 };
        }
        if (!chunk) {
            return { text: '', rate: 0.88 };
        }

        const text = (chunk.text || '').trim().toLowerCase();
        let speakAs = (chunk.speakAs || '').trim().toLowerCase();
        const ipa = chunk.ipa || '';

        // 規則 1：若 speakAs 與整詞相同 (原本 wholeWord 舊殘留)，強制作廢，改用 text 本身！
        if (fallbackWord && speakAs === fallbackWord.trim().toLowerCase()) {
            speakAs = text;
        }

        // 規則 2：優先比對 A軌防縮寫 TTS 備援字典
        const ttsFallback = (typeof CHUNK_TTS_FALLBACK !== 'undefined') ? CHUNK_TTS_FALLBACK : (window.CHUNK_TTS_FALLBACK || {});
        if (ttsFallback[text]) {
            return { text: ttsFallback[text], rate: 0.88 };
        }

        // 規則 3：比對擬音字典 (text 與 speakAs 雙向比對)
        if (PHONETIC_CHUNK_MAP[text]) {
            return { text: PHONETIC_CHUNK_MAP[text], rate: 0.88 };
        }
        if (PHONETIC_CHUNK_MAP[speakAs]) {
            return { text: PHONETIC_CHUNK_MAP[speakAs], rate: 0.88 };
        }

        // 規則 4：短母音 /æ/ 處理 (如 a in act/add)
        if (text === 'a' && ipa.includes('æ')) {
            return { text: 'aah', rate: 0.9 };
        }

        // 規則 5：帶母音的自然韻基或音節 (如 ask, elp, ent, old, ump, cook, rab)
        const finalWord = speakAs || text;
        return { text: finalWord, rate: 0.82 };
    }

    // 4. 點擊單一拼讀塊 (Chunk) 發音 (B軌微音檔優先 ➔ A軌防縮寫 TTS 備援)
    async function speakChunk(chunk, fallbackWord = '') {
        stopAll();

        const wavUrl = getChunkAudioUrl(chunk);
        if (wavUrl) {
            const ok = await playChunkAudio(wavUrl);
            if (ok) return;
        }

        if (!synth) return;
        const { text, rate } = resolveChunkSpeech(chunk, fallbackWord);
        if (!text || text === '-') return;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        utterance.pitch = 1.05;
        synth.speak(utterance);
    }

    function speakSyllable(syllable, rate = 0.8) {
        speakChunk(syllable);
    }

    // 5. 🔗 連音拼讀 (優先 B軌微音檔無縫銜接 ➔ 最後合體唸整詞)
    async function blendChunks(wordObj, onChunkHighlight, onComplete) {
        stopAll();

        currentSpellToken++;
        const token = currentSpellToken;
        const chunks = wordObj.chunks || [];

        if (chunks.length <= 1) {
            if (onChunkHighlight) onChunkHighlight(0);
            speakWord(wordObj.word, 0.85);
            await new Promise(r => setTimeout(r, 700));
            if (onChunkHighlight) onChunkHighlight(-1);
            if (onComplete) onComplete();
            return;
        }

        // 逐塊朗讀分塊聲音 (優先 B軌微音檔，無縫緊密連讀)
        for (let i = 0; i < chunks.length; i++) {
            if (currentSpellToken !== token) return;

            const chunk = chunks[i];
            if (onChunkHighlight) onChunkHighlight(i);

            const wavUrl = getChunkAudioUrl(chunk);
            if (wavUrl) {
                await playChunkAudio(wavUrl);
                // 裁切後的音檔無多餘靜音，加上 70ms 輕微呼吸感即可緊密銜接
                await new Promise(r => setTimeout(r, 70));
            } else {
                const { text, rate } = resolveChunkSpeech(chunk, wordObj.word);
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-US';
                utterance.rate = rate;
                utterance.pitch = 1.05;
                synth.speak(utterance);
                await new Promise(r => setTimeout(r, 550));
            }
        }

        if (currentSpellToken !== token) return;

        // 停頓一下後全塊高亮，合體唸出完整單字
        if (onChunkHighlight) onChunkHighlight('all');
        await new Promise(r => setTimeout(r, 120));

        if (currentSpellToken !== token) return;
        speakWord(wordObj.word, 0.9);

        await new Promise(r => setTimeout(r, 750));
        if (currentSpellToken === token) {
            if (onChunkHighlight) onChunkHighlight(-1);
            if (onComplete) onComplete();
        }
    }

    // 6. 朗讀中文意思
    function speakChinese(text) {
        if (!synth || !text) return;
        synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-TW';
        utterance.rate = 0.9;
        synth.speak(utterance);
    }

    // 7. A-B-C 逐字節奏拼讀
    async function spellWord(word, onLetterCallback, onCompleteCallback) {
        if (!synth || !word) return;
        synth.cancel();

        currentSpellToken++;
        const token = currentSpellToken;
        const cleanWord = word.trim();

        for (let i = 0; i < cleanWord.length; i++) {
            if (currentSpellToken !== token) return;

            const char = cleanWord[i];

            if (onLetterCallback) {
                onLetterCallback(i, char);
            }

            if (char === ' ' || char === '-') {
                await new Promise(r => setTimeout(r, 200));
                continue;
            }

            const utterance = new SpeechSynthesisUtterance(char.toUpperCase() + ",");
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            synth.speak(utterance);

            await new Promise(r => setTimeout(r, 750));
        }

        if (currentSpellToken !== token) return;

        if (onLetterCallback) {
            onLetterCallback(-1, null);
        }

        await new Promise(r => setTimeout(r, 250));
        speakWord(cleanWord, 0.9);

        if (onCompleteCallback) {
            onCompleteCallback();
        }
    }

    function stopAll() {
        stopChunkAudio();
        if (synth) synth.cancel();
        currentSpellToken++;
    }

    return {
        unlockAudio,
        playSuccessSound,
        playErrorSound,
        playTapSound,
        playStarSound,
        playFanfare,
        speakWord,
        speakLetter,
        speakChunk,
        speakSyllable,
        blendChunks,
        speakChinese,
        spellWord,
        stopAll
    };
})();
