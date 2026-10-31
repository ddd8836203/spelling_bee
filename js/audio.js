/**
 * ========================================================
 * 🐝 音訊與發音核心模組 (針對 iPad Safari 觸控與音訊優化)
 * ========================================================
 */

const AudioManager = (function() {
    let audioCtx = null;
    let isUnlocked = false;
    let synth = window.speechSynthesis;
    let currentSpellToken = 0;

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

    // 2. iOS 觸控解鎖機制 (首次點擊時觸發)
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
        console.log("Audio and SpeechSynthesis unlocked for iPad/iOS.");
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
    // 🗣️ Web Speech API 發音核心
    // ========================================================

    // 1. 朗讀英文單字
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

    // 2. 朗讀單個字母 (如選 J 時唸 "J")
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

    // 3. 朗讀單個音節
    function speakSyllable(syllable, rate = 0.8) {
        if (!synth || !syllable) return;
        synth.cancel();

        const cleanSyllable = syllable.trim();
        if (!cleanSyllable || cleanSyllable === '-') return;

        const utterance = new SpeechSynthesisUtterance(cleanSyllable);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        synth.speak(utterance);
    }

    // 4. 朗讀中文意思
    function speakChinese(text) {
        if (!synth || !text) return;
        synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-TW';
        utterance.rate = 0.9;
        synth.speak(utterance);
    }

    // 5. A-B-C 逐字節奏拼讀
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
        speakSyllable,
        speakChinese,
        spellWord,
        stopAll
    };
})();
