/**
 * Spelling Bee Starter A 單字庫 (Part 1 ~ Part 4 共 60 字)
 * 來源：IMG_4022.HEIC & 一年級_egle/單字拼讀分塊.md
 */
const SPELLING_BEE_DATA = {
  "Part1": [
    {
      "id": "sb_1_1",
      "word": "act",
      "syllables": [
        "act"
      ],
      "chinese": [
        {
          "c": "行",
          "p": "ㄒㄧㄥˊ"
        },
        {
          "c": "動",
          "p": "ㄉㄨㄥˋ"
        }
      ],
      "emoji": "🎬🏃",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/ækt/",
      "chunks": [
        {
          "text": "a",
          "ipa": "/æ/",
          "role": "onset（母音開頭，onset 為母音本身）",
          "roleTag": "onset",
          "speakAs": "a",
          "speakMode": "direct"
        },
        {
          "text": "ct",
          "ipa": "/kt/",
          "role": "rime-coda",
          "roleTag": "coda",
          "speakAs": "act",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-act",
      "siblings": [
        "fact",
        "pact",
        "tact",
        "tract"
      ],
      "uiNote": "a 發短音 /æ/，ct 是字尾輔音叢，整個字只有一個音節。-act 是一個字族，換開頭字母就能拼出 fact（事實）、pact（協議）。",
      "specialNote": ""
    },
    {
      "id": "sb_1_2",
      "word": "add",
      "syllables": [
        "add"
      ],
      "chinese": [
        {
          "c": "增",
          "p": "ㄗㄥ"
        },
        {
          "c": "加",
          "p": "ㄐㄧㄚ"
        }
      ],
      "emoji": "➕🔢",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/æd/",
      "chunks": [
        {
          "text": "a",
          "ipa": "/æ/",
          "role": "onset（母音開頭）",
          "roleTag": "onset",
          "speakAs": "a",
          "speakMode": "direct"
        },
        {
          "text": "dd",
          "ipa": "/d/",
          "role": "rime-coda（雙 d 只發一個 /d/）",
          "roleTag": "coda",
          "speakAs": "add",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ad",
      "siblings": [
        "bad",
        "dad",
        "had",
        "mad",
        "sad"
      ],
      "uiNote": "a 發短音 /æ/，dd 雖然有兩個 d，但只發一個 /d/ 的聲音。-ad 字族：bad、sad、mad 都是好朋友。",
      "specialNote": "雙 d（dd）只發一個 /d/，不重複發音"
    },
    {
      "id": "sb_1_3",
      "word": "air",
      "syllables": [
        "air"
      ],
      "chinese": [
        {
          "c": "空",
          "p": "ㄎㄨㄥ"
        },
        {
          "c": "氣",
          "p": "ㄑㄧˋ"
        }
      ],
      "emoji": "💨🌬️",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/er/",
      "chunks": [
        {
          "text": "air",
          "ipa": "/er/",
          "role": "whole-rime（r-controlled，整組不可拆）",
          "roleTag": "rime",
          "speakAs": "air",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "r-controlled",
      "anchor": "air",
      "siblings": [
        "fair",
        "pair",
        "chair",
        "hair",
        "stair"
      ],
      "uiNote": "air 三個字母合在一起發一個聲音 /er/，不能分開唸。像 fair（公平）、chair（椅子）都有這個聲音。",
      "specialNote": "r-controlled 母音，air 整組不可拆"
    },
    {
      "id": "sb_1_4",
      "word": "any",
      "syllables": [
        "any"
      ],
      "chinese": [
        {
          "c": "任",
          "p": "ㄖㄣˋ"
        },
        {
          "c": "何",
          "p": "ㄏㄜˊ"
        }
      ],
      "emoji": "❓🤷",
      "part": 1,
      "chunkType": "syllable",
      "ipa": "/ˈɛn.i/",
      "chunks": [
        {
          "text": "an",
          "ipa": "/ɛn/",
          "role": "syllable-1",
          "roleTag": "syllable",
          "speakAs": "an",
          "speakMode": "direct"
        },
        {
          "text": "y",
          "ipa": "/i/",
          "role": "syllable-2",
          "roleTag": "syllable",
          "speakAs": "ee",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "exception",
      "anchor": "any",
      "siblings": [
        "many"
      ],
      "uiNote": "any 的 a 不發短音 /æ/，而是發 /ɛ/（接近注音的 ㄝ），這是例外字，要特別記住。結尾 y 發 /i/。",
      "specialNote": "⚠️ 例外發音：a 發 /ɛ/ 而非一般短音 /æ/"
    },
    {
      "id": "sb_1_5",
      "word": "ape",
      "syllables": [
        "ape"
      ],
      "chinese": [
        {
          "c": "猿",
          "p": "ㄩㄢˊ"
        },
        {
          "c": "猴",
          "p": "ㄏㄡˊ"
        }
      ],
      "emoji": "🦍🐒",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/eɪp/",
      "chunks": [
        {
          "text": "a",
          "ipa": "/eɪ/",
          "role": "onset（magic-e 使 a 發長音）",
          "roleTag": "onset",
          "speakAs": "ay",
          "speakMode": "phonetic"
        },
        {
          "text": "pe",
          "ipa": "/p/ + silent e",
          "role": "rime（magic-e 結構，e 靜音）",
          "roleTag": "rime",
          "speakAs": "ape",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "magic-e",
      "anchor": "-ape",
      "siblings": [
        "cape",
        "tape",
        "grape",
        "shape",
        "drape"
      ],
      "uiNote": "字尾的 e 是魔法師，它不發聲，但讓前面的 a 從短音變成長音，唸字母名 /eɪ/（就是英文字母 A 的名字）。-ape 字族：cape、tape、grape 都是好朋友。",
      "specialNote": "magic-e：字尾 e 靜音，使 a 發長音 /eɪ/"
    },
    {
      "id": "sb_1_6",
      "word": "away",
      "syllables": [
        "a",
        "way"
      ],
      "chinese": [
        {
          "c": "離",
          "p": "ㄌㄧˊ"
        },
        {
          "c": "開",
          "p": "ㄎㄞ"
        }
      ],
      "emoji": "🏃‍♂️👋",
      "part": 1,
      "chunkType": "syllable",
      "ipa": "/əˈweɪ/",
      "chunks": [
        {
          "text": "a",
          "ipa": "/ə/",
          "role": "syllable-1（弱化母音 schwa）",
          "roleTag": "syllable",
          "speakAs": "a",
          "speakMode": "direct"
        },
        {
          "text": "w",
          "ipa": "/w/",
          "role": "syllable-2 onset",
          "roleTag": "onset",
          "speakAs": "w",
          "speakMode": "phonetic"
        },
        {
          "text": "ay",
          "ipa": "/eɪ/",
          "role": "syllable-2 rime（vowel team）",
          "roleTag": "rime",
          "speakAs": "ay",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "vowel-team",
      "anchor": "ay",
      "siblings": [
        "day",
        "say",
        "play",
        "stay",
        "way",
        "ray"
      ],
      "uiNote": "a-way 兩個音節。第一個 a 發很輕的 /ə/ 聲音。第二個音節 way 裡的 ay 是一對好朋友，固定發 /eɪ/。",
      "specialNote": "第一音節 a 為弱化 schwa /ə/"
    },
    {
      "id": "sb_1_7",
      "word": "barn",
      "syllables": [
        "barn"
      ],
      "chinese": [
        {
          "c": "穀",
          "p": "ㄍㄨˇ"
        },
        {
          "c": "倉",
          "p": "ㄘㄤ"
        }
      ],
      "emoji": "🏚️🐎",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/bɑːrn/",
      "chunks": [
        {
          "text": "b",
          "ipa": "/b/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "b",
          "speakMode": "phonetic"
        },
        {
          "text": "arn",
          "ipa": "/ɑːrn/",
          "role": "rime（r-controlled，ar 不可拆）",
          "roleTag": "rime",
          "speakAs": "barn",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "r-controlled",
      "anchor": "ar",
      "siblings": [
        "car",
        "star",
        "farm",
        "park",
        "dark",
        "yarn"
      ],
      "uiNote": "b 發 /b/，arn 裡面的 ar 是 r 控制母音，固定唸 /ɑːr/（喉嚨往後的聲音），整組 arn 不能拆開。",
      "specialNote": "r-controlled：ar 整組不可拆"
    },
    {
      "id": "sb_1_8",
      "word": "bay",
      "syllables": [
        "bay"
      ],
      "chinese": [
        {
          "c": "海",
          "p": "ㄏㄞˇ"
        },
        {
          "c": "灣",
          "p": "ㄨㄢ"
        }
      ],
      "emoji": "🌊🏖️",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/beɪ/",
      "chunks": [
        {
          "text": "b",
          "ipa": "/b/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "b",
          "speakMode": "phonetic"
        },
        {
          "text": "ay",
          "ipa": "/eɪ/",
          "role": "rime（vowel team）",
          "roleTag": "rime",
          "speakAs": "ay",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ay",
      "siblings": [
        "day",
        "say",
        "may",
        "play",
        "stay",
        "clay",
        "hay",
        "pay",
        "ray",
        "way"
      ],
      "uiNote": "b 發 /b/，ay 是母音組合，固定發 /eɪ/。-ay 字族超多：day、say、play、stay，換開頭就是新單字！",
      "specialNote": ""
    },
    {
      "id": "sb_1_9",
      "word": "bunny",
      "syllables": [
        "bun",
        "ny"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "兔",
          "p": "ㄊㄨˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🐰🥕",
      "part": 1,
      "chunkType": "syllable",
      "ipa": "/ˈbʌn.i/",
      "chunks": [
        {
          "text": "b",
          "ipa": "/b/",
          "role": "syllable-1 onset",
          "roleTag": "onset",
          "speakAs": "b",
          "speakMode": "phonetic"
        },
        {
          "text": "un",
          "ipa": "/ʌn/",
          "role": "syllable-1 rime",
          "roleTag": "rime",
          "speakAs": "un",
          "speakMode": "direct"
        },
        {
          "text": "ny",
          "ipa": "/ni/",
          "role": "syllable-2（nn 切一個歸前一個歸後）",
          "roleTag": "syllable",
          "speakAs": "nee",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-un",
      "siblings": [
        "bun",
        "fun",
        "run",
        "sun",
        "gun",
        "nut",
        "funny",
        "sunny",
        "runny"
      ],
      "uiNote": "bun-ny 兩個音節。第一個音節 bun 裡的 u 發短音 /ʌ/。雙 n 從中間切，前後各一個。結尾 ny 發 /ni/。",
      "specialNote": "雙 n（nn）從中間切，兩個音節各取一個 n"
    },
    {
      "id": "sb_1_10",
      "word": "cab",
      "syllables": [
        "cab"
      ],
      "chinese": [
        {
          "c": "計",
          "p": "ㄐㄧˋ"
        },
        {
          "c": "程",
          "p": "ㄔㄥˊ"
        },
        {
          "c": "車",
          "p": "ㄔㄜ"
        }
      ],
      "emoji": "🚕🚖",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/kæb/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/k/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "k",
          "speakMode": "phonetic"
        },
        {
          "text": "ab",
          "ipa": "/æb/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "ab",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ab",
      "siblings": [
        "tab",
        "dab",
        "grab",
        "jab",
        "lab",
        "crab"
      ],
      "uiNote": "c 發 /k/，ab 裡的 a 發短音 /æ/。-ab 字族：tab（標籤）、grab（抓）、jab（戳）。",
      "specialNote": ""
    },
    {
      "id": "sb_1_11",
      "word": "calf",
      "syllables": [
        "calf"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "牛",
          "p": "ㄋㄧㄡˊ"
        }
      ],
      "emoji": "🐄🍼",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/kæf/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/k/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "k",
          "speakMode": "phonetic"
        },
        {
          "text": "alf",
          "ipa": "/æf/",
          "role": "rime（l 靜音）",
          "roleTag": "rime",
          "speakAs": "calf",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "silent-letter",
      "anchor": "silent-l",
      "siblings": [
        "half",
        "calm",
        "palm",
        "talk",
        "walk"
      ],
      "uiNote": "c 發 /k/，alf 裡面的 l 不發音，整個字唸 /kæf/。l 字母在某些字裡是沉默的，要特別記住！",
      "specialNote": "⚠️ 靜音字母：l 不發音，全字發 /kæf/"
    },
    {
      "id": "sb_1_12",
      "word": "candy",
      "syllables": [
        "can",
        "dy"
      ],
      "chinese": [
        {
          "c": "糖",
          "p": "ㄊㄤˊ"
        },
        {
          "c": "果",
          "p": "ㄍㄨㄛˇ"
        }
      ],
      "emoji": "🍬🍭",
      "part": 1,
      "chunkType": "syllable",
      "ipa": "/ˈkæn.di/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/k/",
          "role": "syllable-1 onset",
          "roleTag": "onset",
          "speakAs": "k",
          "speakMode": "phonetic"
        },
        {
          "text": "an",
          "ipa": "/æn/",
          "role": "syllable-1 rime",
          "roleTag": "rime",
          "speakAs": "an",
          "speakMode": "direct"
        },
        {
          "text": "dy",
          "ipa": "/di/",
          "role": "syllable-2",
          "roleTag": "syllable",
          "speakAs": "dee",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-an",
      "siblings": [
        "can",
        "fan",
        "man",
        "pan",
        "ran",
        "tan",
        "van"
      ],
      "uiNote": "can-dy 兩個音節。第一個音節 can 的 a 發短音 /æ/。-an 字族超多：can、fan、man、pan。",
      "specialNote": ""
    },
    {
      "id": "sb_1_13",
      "word": "care",
      "syllables": [
        "care"
      ],
      "chinese": [
        {
          "c": "關",
          "p": "ㄍㄨㄢ"
        },
        {
          "c": "心",
          "p": "ㄒㄧㄣ"
        }
      ],
      "emoji": "❤️🫂",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/ker/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/k/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "k",
          "speakMode": "phonetic"
        },
        {
          "text": "are",
          "ipa": "/er/",
          "role": "rime（r-controlled，are 整組不可拆）",
          "roleTag": "rime",
          "speakAs": "care",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "r-controlled",
      "anchor": "are",
      "siblings": [
        "bare",
        "dare",
        "fare",
        "hare",
        "rare",
        "share",
        "spare",
        "stare"
      ],
      "uiNote": "c 發 /k/，are 是 r 控制母音組合，整組唸 /er/，不能拆成 a + r + e。-are 字族：bare（裸露）、dare（敢）、share（分享）。",
      "specialNote": "r-controlled：are 整組不可拆"
    },
    {
      "id": "sb_1_14",
      "word": "child",
      "syllables": [
        "child"
      ],
      "chinese": [
        {
          "c": "孩",
          "p": "ㄏㄞˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🧒🧸",
      "part": 1,
      "chunkType": "onset-rime",
      "ipa": "/tʃaɪld/",
      "chunks": [
        {
          "text": "ch",
          "ipa": "/tʃ/",
          "role": "onset（digraph，整組一個音）",
          "roleTag": "onset",
          "speakAs": "ch",
          "speakMode": "phonetic"
        },
        {
          "text": "ild",
          "ipa": "/aɪld/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "child",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "digraph",
      "anchor": "ch",
      "siblings": [
        "chin",
        "chip",
        "chat",
        "chair",
        "cheese",
        "chick"
      ],
      "uiNote": "ch 是二合字母，c 和 h 合在一起發 /tʃ/（像中文的 ㄔ），不能分開唸 /k/+/h/。-ild 裡的 i 發長音 /aɪ/。",
      "specialNote": "ch 是 digraph，整組發 /tʃ/，不可分開"
    },
    {
      "id": "sb_1_15",
      "word": "city",
      "syllables": [
        "ci",
        "ty"
      ],
      "chinese": [
        {
          "c": "城",
          "p": "ㄔㄥˊ"
        },
        {
          "c": "市",
          "p": "ㄕˋ"
        }
      ],
      "emoji": "🏙️🌆",
      "part": 1,
      "chunkType": "syllable",
      "ipa": "/ˈsɪt.i/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/s/",
          "role": "syllable-1 onset（soft-c，c 在 i 前發 /s/）",
          "roleTag": "onset",
          "speakAs": "s",
          "speakMode": "phonetic"
        },
        {
          "text": "it",
          "ipa": "/ɪt/",
          "role": "syllable-1 rime",
          "roleTag": "rime",
          "speakAs": "it",
          "speakMode": "direct"
        },
        {
          "text": "y",
          "ipa": "/i/",
          "role": "syllable-2",
          "roleTag": "syllable",
          "speakAs": "ee",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "exception",
      "anchor": "soft-c",
      "siblings": [
        "circle",
        "cent",
        "center",
        "ceiling",
        "cinema"
      ],
      "uiNote": "city 的 c 是軟音，因為後面跟著 i，所以 c 發 /s/ 而不是 /k/。規律：c 在 e、i、y 前面發 /s/。",
      "specialNote": "⚠️ soft-c：c 在 i 前發 /s/，不是 /k/"
    }
  ],
  "Part2": [
    {
      "id": "sb_2_1",
      "word": "cold",
      "syllables": [
        "cold"
      ],
      "chinese": [
        {
          "c": "冷",
          "p": "ㄌㄥˇ"
        }
      ],
      "emoji": "🥶❄️",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/koʊld/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/k/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "k",
          "speakMode": "phonetic"
        },
        {
          "text": "old",
          "ipa": "/oʊld/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "old",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-old",
      "siblings": [
        "bold",
        "fold",
        "gold",
        "hold",
        "mold",
        "sold",
        "told",
        "scold"
      ],
      "uiNote": "c 發 /k/，old 裡的 o 發長音 /oʊ/（像 o 字母的名字）。-old 字族：bold（大膽）、gold（金子）、hold（握住）、told（說過了）。",
      "specialNote": ""
    },
    {
      "id": "sb_2_2",
      "word": "color",
      "syllables": [
        "col",
        "or"
      ],
      "chinese": [
        {
          "c": "顏",
          "p": "ㄧㄢˊ"
        },
        {
          "c": "色",
          "p": "ㄙㄜˋ"
        }
      ],
      "emoji": "🎨🌈",
      "part": 2,
      "chunkType": "syllable",
      "ipa": "/ˈkʌl.ər/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/k/",
          "role": "syllable-1 onset",
          "roleTag": "onset",
          "speakAs": "k",
          "speakMode": "phonetic"
        },
        {
          "text": "ol",
          "ipa": "/ʌl/",
          "role": "syllable-1 rime（o 在此發 /ʌ/，例外）",
          "roleTag": "rime",
          "speakAs": "ul",
          "speakMode": "phonetic"
        },
        {
          "text": "or",
          "ipa": "/ər/",
          "role": "syllable-2（r-controlled，弱化）",
          "roleTag": "syllable",
          "speakAs": "color",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "r-controlled",
      "anchor": "or",
      "siblings": [
        "doctor",
        "actor",
        "motor"
      ],
      "uiNote": "col-or 兩個音節。第一個音節的 o 發 /ʌ/（短音變體）。第二個音節 or 是 r 控制母音，在這裡發很輕的 /ər/。",
      "specialNote": "o 在此發 /ʌ/ 而非標準 /ɑ/，為非重讀音節弱化"
    },
    {
      "id": "sb_2_3",
      "word": "cookie",
      "syllables": [
        "cook",
        "ie"
      ],
      "chinese": [
        {
          "c": "餅",
          "p": "ㄅㄧㄥˇ"
        },
        {
          "c": "乾",
          "p": "ㄍㄢ"
        }
      ],
      "emoji": "🍪🍫",
      "part": 2,
      "chunkType": "syllable",
      "ipa": "/ˈkʊk.i/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/k/",
          "role": "syllable-1 onset",
          "roleTag": "onset",
          "speakAs": "k",
          "speakMode": "phonetic"
        },
        {
          "text": "ook",
          "ipa": "/ʊk/",
          "role": "syllable-1 rime（短 oo，/ʊ/ 不是 /uː/）",
          "roleTag": "rime",
          "speakAs": "ook",
          "speakMode": "direct"
        },
        {
          "text": "ie",
          "ipa": "/i/",
          "role": "syllable-2（vowel team 結尾）",
          "roleTag": "syllable",
          "speakAs": "ee",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "vowel-team",
      "anchor": "oo（短音 /ʊ/）",
      "siblings": [
        "book",
        "cook",
        "hook",
        "look",
        "took"
      ],
      "uiNote": "cook-ie 兩個音節。oo 在這裡發短音 /ʊ/（嘴巴微微圓），不是 moon 的長音 /uː/。ie 結尾發 /i/。",
      "specialNote": "⚠️ oo 在此為短音 /ʊ/，不是 moon 的長音 /uː/"
    },
    {
      "id": "sb_2_4",
      "word": "cow",
      "syllables": [
        "cow"
      ],
      "chinese": [
        {
          "c": "乳",
          "p": "ㄖㄨˇ"
        },
        {
          "c": "牛",
          "p": "ㄋㄧㄡˊ"
        }
      ],
      "emoji": "🐮🥛",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/kaʊ/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/k/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "k",
          "speakMode": "phonetic"
        },
        {
          "text": "ow",
          "ipa": "/aʊ/",
          "role": "rime（vowel team，此處 ow=/aʊ/）",
          "roleTag": "rime",
          "speakAs": "ow",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "vowel-team",
      "anchor": "ow（/aʊ/ 組）",
      "siblings": [
        "bow",
        "how",
        "now",
        "wow",
        "plow",
        "brown"
      ],
      "uiNote": "c 發 /k/，ow 在這裡發 /aʊ/（嘴巴從大張到合攏）。注意：ow 有兩種讀法，cow 的 ow 是 /aʊ/，snow 的 ow 是 /oʊ/。",
      "specialNote": "⚠️ ow 有兩種讀法：cow 的 /aʊ/ vs snow 的 /oʊ/，此字為 /aʊ/"
    },
    {
      "id": "sb_2_5",
      "word": "cub",
      "syllables": [
        "cub"
      ],
      "chinese": [
        {
          "c": "幼",
          "p": "ㄧㄡˋ"
        },
        {
          "c": "獸",
          "p": "ㄕㄡˋ"
        }
      ],
      "emoji": "🐻🦁",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/kʌb/",
      "chunks": [
        {
          "text": "c",
          "ipa": "/k/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "k",
          "speakMode": "phonetic"
        },
        {
          "text": "ub",
          "ipa": "/ʌb/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "ub",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ub",
      "siblings": [
        "hub",
        "rub",
        "sub",
        "tub",
        "club",
        "grub",
        "shrub"
      ],
      "uiNote": "c 發 /k/，ub 的 u 發短音 /ʌ/。-ub 字族：hub（中心）、rub（摩擦）、tub（浴缸）、club（俱樂部）。",
      "specialNote": ""
    },
    {
      "id": "sb_2_6",
      "word": "day",
      "syllables": [
        "day"
      ],
      "chinese": [
        {
          "c": "白",
          "p": "ㄅㄞˊ"
        },
        {
          "c": "天",
          "p": "ㄊㄧㄢ"
        }
      ],
      "emoji": "☀️☀️",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/deɪ/",
      "chunks": [
        {
          "text": "d",
          "ipa": "/d/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "d",
          "speakMode": "phonetic"
        },
        {
          "text": "ay",
          "ipa": "/eɪ/",
          "role": "rime（vowel team）",
          "roleTag": "rime",
          "speakAs": "ay",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ay",
      "siblings": [
        "bay",
        "hay",
        "may",
        "pay",
        "say",
        "way",
        "play",
        "stay",
        "clay",
        "pray"
      ],
      "uiNote": "d 發 /d/，ay 固定發 /eɪ/。-ay 字族大家庭：bay、hay、play、stay，換開頭字母就是新單字！",
      "specialNote": ""
    },
    {
      "id": "sb_2_7",
      "word": "dot",
      "syllables": [
        "dot"
      ],
      "chinese": [
        {
          "c": "圓",
          "p": "ㄩㄢˊ"
        },
        {
          "c": "點",
          "p": "ㄉㄧㄢˇ"
        }
      ],
      "emoji": "🔴⚫",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/dɑt/",
      "chunks": [
        {
          "text": "d",
          "ipa": "/d/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "d",
          "speakMode": "phonetic"
        },
        {
          "text": "ot",
          "ipa": "/ɑt/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "ot",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ot",
      "siblings": [
        "hot",
        "lot",
        "not",
        "pot",
        "rot",
        "got",
        "shot",
        "spot"
      ],
      "uiNote": "d 發 /d/，ot 的 o 發短音 /ɑ/（嘴巴大大張開）。-ot 字族：hot、not、pot、got，換開頭就能拼！",
      "specialNote": ""
    },
    {
      "id": "sb_2_8",
      "word": "dove",
      "syllables": [
        "dove"
      ],
      "chinese": [
        {
          "c": "鴿",
          "p": "ㄍㄜ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🕊️🌿",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/dʌv/",
      "chunks": [
        {
          "text": "d",
          "ipa": "/d/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "d",
          "speakMode": "phonetic"
        },
        {
          "text": "ove",
          "ipa": "/ʌv/",
          "role": "rime（magic-e 例外：o 沒有發長音）",
          "roleTag": "rime",
          "speakAs": "dove",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "exception",
      "anchor": "-ove（例外組）",
      "siblings": [
        "love",
        "above",
        "glove"
      ],
      "uiNote": "d 發 /d/，ove 看起來是 magic-e，但這個字是例外！o 沒有變長音，而是發 /ʌ/（短促的聲音），整個 ove 唸 /ʌv/。love、glove 也一樣。",
      "specialNote": "⚠️ magic-e 例外：ove 應發長音 /oʊv/ 但實際發 /ʌv/"
    },
    {
      "id": "sb_2_9",
      "word": "easy",
      "syllables": [
        "ea",
        "sy"
      ],
      "chinese": [
        {
          "c": "簡",
          "p": "ㄐㄧㄢˇ"
        },
        {
          "c": "單",
          "p": "ㄉㄢ"
        }
      ],
      "emoji": "👌✨",
      "part": 2,
      "chunkType": "syllable",
      "ipa": "/ˈiː.zi/",
      "chunks": [
        {
          "text": "ea",
          "ipa": "/iː/",
          "role": "syllable-1（vowel team，vowel-initial）",
          "roleTag": "syllable",
          "speakAs": "ee",
          "speakMode": "phonetic"
        },
        {
          "text": "sy",
          "ipa": "/zi/",
          "role": "syllable-2（s 在母音間發 /z/）",
          "roleTag": "syllable",
          "speakAs": "zee",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "vowel-team",
      "anchor": "ea（/iː/ 組）",
      "siblings": [
        "eat",
        "bean",
        "leaf",
        "meat",
        "read",
        "team",
        "sea",
        "teach"
      ],
      "uiNote": "ea-sy 兩個音節。ea 是母音組合，固定發長音 /iː/。s 在兩個母音中間，發 /z/ 的聲音。",
      "specialNote": "s 在母音間發 /z/（voiced）"
    },
    {
      "id": "sb_2_10",
      "word": "elf",
      "syllables": [
        "elf"
      ],
      "chinese": [
        {
          "c": "精",
          "p": "ㄐㄧㄥ"
        },
        {
          "c": "靈",
          "p": "ㄌㄧㄥˊ"
        }
      ],
      "emoji": "🧝🧚",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/ɛlf/",
      "chunks": [
        {
          "text": "e",
          "ipa": "/ɛ/",
          "role": "onset（母音開頭）",
          "roleTag": "onset",
          "speakAs": "e",
          "speakMode": "phonetic"
        },
        {
          "text": "lf",
          "ipa": "/lf/",
          "role": "rime-coda",
          "roleTag": "coda",
          "speakAs": "elf",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-elf",
      "siblings": [
        "self",
        "shelf"
      ],
      "uiNote": "e 發短音 /ɛ/，lf 是字尾輔音叢。-elf 字族：self（自己）、shelf（架子）。",
      "specialNote": ""
    },
    {
      "id": "sb_2_11",
      "word": "fall",
      "syllables": [
        "fall"
      ],
      "chinese": [
        {
          "c": "秋",
          "p": "ㄑㄧㄡ"
        },
        {
          "c": "天",
          "p": "ㄊㄧㄢ"
        }
      ],
      "emoji": "🍂🍁",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/fɔːl/",
      "chunks": [
        {
          "text": "f",
          "ipa": "/f/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "f",
          "speakMode": "phonetic"
        },
        {
          "text": "all",
          "ipa": "/ɔːl/",
          "role": "rime（a 在 ll 前發 /ɔː/）",
          "roleTag": "rime",
          "speakAs": "all",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-all",
      "siblings": [
        "ball",
        "call",
        "hall",
        "mall",
        "tall",
        "wall",
        "small",
        "stall"
      ],
      "uiNote": "f 發 /f/，all 裡的 a 在 ll 前面發 /ɔː/（嘴巴圓圓的聲音）。-all 字族：ball、call、tall、wall，換開頭就能拼！",
      "specialNote": "a 在 ll 前發 /ɔː/ 而非短音 /æ/"
    },
    {
      "id": "sb_2_12",
      "word": "fly",
      "syllables": [
        "fly"
      ],
      "chinese": [
        {
          "c": "蒼",
          "p": "ㄘㄤ"
        },
        {
          "c": "蠅",
          "p": "ㄧㄥˊ"
        }
      ],
      "emoji": "🪰🪰",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/flaɪ/",
      "chunks": [
        {
          "text": "fl",
          "ipa": "/fl/",
          "role": "onset（輔音叢）",
          "roleTag": "onset",
          "speakAs": "fl",
          "speakMode": "phonetic"
        },
        {
          "text": "y",
          "ipa": "/aɪ/",
          "role": "rime（y 在單音節字末發 /aɪ/）",
          "roleTag": "rime",
          "speakAs": "eye",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-y（單音節，y=/aɪ/）",
      "siblings": [
        "by",
        "my",
        "cry",
        "dry",
        "fry",
        "sky",
        "try",
        "why"
      ],
      "uiNote": "fl 是輔音叢，f 和 l 連著發音。y 在單音節字結尾發 /aɪ/（像 I 的名字）。-y 字族：by、my、cry、sky。",
      "specialNote": "y 在單音節字尾發 /aɪ/（vs 多音節字尾 y=/i/ 如 happy）"
    },
    {
      "id": "sb_2_13",
      "word": "fun",
      "syllables": [
        "fun"
      ],
      "chinese": [
        {
          "c": "好",
          "p": "ㄏㄠˇ"
        },
        {
          "c": "玩",
          "p": "ㄨㄢˊ"
        }
      ],
      "emoji": "🥳🎉",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/fʌn/",
      "chunks": [
        {
          "text": "f",
          "ipa": "/f/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "f",
          "speakMode": "phonetic"
        },
        {
          "text": "un",
          "ipa": "/ʌn/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "un",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-un",
      "siblings": [
        "bun",
        "gun",
        "run",
        "sun",
        "spun",
        "stun"
      ],
      "uiNote": "f 發 /f/，un 的 u 發短音 /ʌ/。-un 字族：bun（小圓麵包）、run（跑）、sun（太陽）、gun（槍）。",
      "specialNote": ""
    },
    {
      "id": "sb_2_14",
      "word": "gum",
      "syllables": [
        "gum"
      ],
      "chinese": [
        {
          "c": "口",
          "p": "ㄎㄡˇ"
        },
        {
          "c": "香",
          "p": "ㄒㄧㄤ"
        },
        {
          "c": "糖",
          "p": "ㄊㄤˊ"
        }
      ],
      "emoji": "🍬🧼",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/ɡʌm/",
      "chunks": [
        {
          "text": "g",
          "ipa": "/ɡ/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "g",
          "speakMode": "phonetic"
        },
        {
          "text": "um",
          "ipa": "/ʌm/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "um",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-um",
      "siblings": [
        "bum",
        "drum",
        "hum",
        "mum",
        "rum",
        "sum",
        "plum"
      ],
      "uiNote": "g 發 /ɡ/，um 的 u 發短音 /ʌ/。-um 字族：drum（鼓）、hum（嗡嗡）、plum（梅子）。",
      "specialNote": ""
    },
    {
      "id": "sb_2_15",
      "word": "gun",
      "syllables": [
        "gun"
      ],
      "chinese": [
        {
          "c": "水",
          "p": "ㄕㄨㄟˇ"
        },
        {
          "c": "槍",
          "p": "ㄑㄧㄤ"
        }
      ],
      "emoji": "🔫💦",
      "part": 2,
      "chunkType": "onset-rime",
      "ipa": "/ɡʌn/",
      "chunks": [
        {
          "text": "g",
          "ipa": "/ɡ/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "g",
          "speakMode": "phonetic"
        },
        {
          "text": "un",
          "ipa": "/ʌn/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "un",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-un",
      "siblings": [
        "bun",
        "fun",
        "run",
        "sun",
        "spun"
      ],
      "uiNote": "g 發 /ɡ/，un 的 u 發短音 /ʌ/。和 fun、sun、run 是同一個 -un 字族。",
      "specialNote": ""
    }
  ],
  "Part3": [
    {
      "id": "sb_3_1",
      "word": "hay",
      "syllables": [
        "hay"
      ],
      "chinese": [
        {
          "c": "乾",
          "p": "ㄍㄢ"
        },
        {
          "c": "草",
          "p": "ㄘㄠˇ"
        }
      ],
      "emoji": "🌾🐴",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/heɪ/",
      "chunks": [
        {
          "text": "h",
          "ipa": "/h/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "h",
          "speakMode": "phonetic"
        },
        {
          "text": "ay",
          "ipa": "/eɪ/",
          "role": "rime（vowel team）",
          "roleTag": "rime",
          "speakAs": "ay",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ay",
      "siblings": [
        "bay",
        "day",
        "may",
        "pay",
        "say",
        "way",
        "play"
      ],
      "uiNote": "h 發 /h/，ay 固定發 /eɪ/。和 day、bay、play 同一個 -ay 大家族。",
      "specialNote": ""
    },
    {
      "id": "sb_3_2",
      "word": "help",
      "syllables": [
        "help"
      ],
      "chinese": [
        {
          "c": "幫",
          "p": "ㄅㄤ"
        },
        {
          "c": "忙",
          "p": "ㄇㄤˊ"
        }
      ],
      "emoji": "🤝🆘",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/hɛlp/",
      "chunks": [
        {
          "text": "h",
          "ipa": "/h/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "h",
          "speakMode": "phonetic"
        },
        {
          "text": "elp",
          "ipa": "/ɛlp/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "help",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-elp",
      "siblings": [
        "yelp",
        "kelp"
      ],
      "uiNote": "h 發 /h/，elp 的 e 發短音 /ɛ/。-elp 字族不多：yelp（狗叫聲）、kelp（海藻）。",
      "specialNote": ""
    },
    {
      "id": "sb_3_3",
      "word": "here",
      "syllables": [
        "here"
      ],
      "chinese": [
        {
          "c": "這",
          "p": "ㄓㄜˋ"
        },
        {
          "c": "裡",
          "p": "ㄌㄧˇ"
        }
      ],
      "emoji": "👇📍",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/hɪr/",
      "chunks": [
        {
          "text": "h",
          "ipa": "/h/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "h",
          "speakMode": "phonetic"
        },
        {
          "text": "ere",
          "ipa": "/ɪr/",
          "role": "rime（r-controlled，ere 整組不可拆）",
          "roleTag": "rime",
          "speakAs": "here",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "r-controlled",
      "anchor": "ere（/ɪr/）",
      "siblings": [
        "mere",
        "sphere",
        "hear",
        "fear"
      ],
      "uiNote": "h 發 /h/，ere 是 r 控制母音，整組唸 /ɪr/。不能拆成 e + r + e 分開唸。",
      "specialNote": "r-controlled：ere 整組不可拆"
    },
    {
      "id": "sb_3_4",
      "word": "hill",
      "syllables": [
        "hill"
      ],
      "chinese": [
        {
          "c": "山",
          "p": "ㄕㄢ"
        },
        {
          "c": "丘",
          "p": "ㄑㄧㄡ"
        }
      ],
      "emoji": "⛰️🌄",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/hɪl/",
      "chunks": [
        {
          "text": "h",
          "ipa": "/h/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "h",
          "speakMode": "phonetic"
        },
        {
          "text": "ill",
          "ipa": "/ɪl/",
          "role": "rime（雙 l 只發一個 /l/）",
          "roleTag": "rime",
          "speakAs": "ill",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ill",
      "siblings": [
        "bill",
        "fill",
        "mill",
        "pill",
        "will",
        "drill",
        "grill",
        "skill",
        "spill",
        "still"
      ],
      "uiNote": "h 發 /h/，ill 的 i 發短音 /ɪ/，雙 l 只發一個 /l/。-ill 字族：bill、fill、will、still，換開頭能拼好多！",
      "specialNote": "雙 ll 只發一個 /l/"
    },
    {
      "id": "sb_3_5",
      "word": "hop",
      "syllables": [
        "hop"
      ],
      "chinese": [
        {
          "c": "單",
          "p": "ㄉㄢ"
        },
        {
          "c": "腳",
          "p": "ㄐㄧㄠˇ"
        },
        {
          "c": "跳",
          "p": "ㄊㄧㄠˋ"
        }
      ],
      "emoji": "🦘🐇",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/hɑp/",
      "chunks": [
        {
          "text": "h",
          "ipa": "/h/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "h",
          "speakMode": "phonetic"
        },
        {
          "text": "op",
          "ipa": "/ɑp/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "op",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-op",
      "siblings": [
        "cop",
        "mop",
        "pop",
        "top",
        "drop",
        "stop",
        "shop",
        "crop"
      ],
      "uiNote": "h 發 /h/，op 的 o 發短音 /ɑ/。-op 字族：mop、pop、top、stop、shop，換開頭就能拼！",
      "specialNote": ""
    },
    {
      "id": "sb_3_6",
      "word": "lap",
      "syllables": [
        "lap"
      ],
      "chinese": [
        {
          "c": "大",
          "p": "ㄉㄚˋ"
        },
        {
          "c": "腿",
          "p": "ㄊㄨㄟˇ"
        }
      ],
      "emoji": "🦵🧒",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/læp/",
      "chunks": [
        {
          "text": "l",
          "ipa": "/l/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "l",
          "speakMode": "phonetic"
        },
        {
          "text": "ap",
          "ipa": "/æp/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "ap",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ap",
      "siblings": [
        "cap",
        "map",
        "nap",
        "rap",
        "tap",
        "clap",
        "snap",
        "trap"
      ],
      "uiNote": "l 發 /l/，ap 的 a 發短音 /æ/。-ap 字族：cap、map、nap、clap、snap，換開頭就能拼！",
      "specialNote": ""
    },
    {
      "id": "sb_3_7",
      "word": "late",
      "syllables": [
        "late"
      ],
      "chinese": [
        {
          "c": "遲",
          "p": "ㄔˊ"
        },
        {
          "c": "到",
          "p": "ㄉㄠˋ"
        }
      ],
      "emoji": "⏰🏃",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/leɪt/",
      "chunks": [
        {
          "text": "l",
          "ipa": "/l/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "l",
          "speakMode": "phonetic"
        },
        {
          "text": "ate",
          "ipa": "/eɪt/",
          "role": "rime（magic-e，a 發長音）",
          "roleTag": "rime",
          "speakAs": "ate",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "magic-e",
      "anchor": "-ate",
      "siblings": [
        "date",
        "fate",
        "gate",
        "hate",
        "mate",
        "rate",
        "skate",
        "plate",
        "state"
      ],
      "uiNote": "l 發 /l/，ate 是 magic-e 字族，e 靜音讓 a 發長音 /eɪ/。-ate 字族超豐富：date、gate、plate、state！",
      "specialNote": "magic-e：字尾 e 靜音，使 a 發長音 /eɪ/"
    },
    {
      "id": "sb_3_8",
      "word": "like",
      "syllables": [
        "like"
      ],
      "chinese": [
        {
          "c": "喜",
          "p": "ㄒㄧˇ"
        },
        {
          "c": "歡",
          "p": "ㄏㄨㄢ"
        }
      ],
      "emoji": "❤️👍",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/laɪk/",
      "chunks": [
        {
          "text": "l",
          "ipa": "/l/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "l",
          "speakMode": "phonetic"
        },
        {
          "text": "ike",
          "ipa": "/aɪk/",
          "role": "rime（magic-e，i 發長音）",
          "roleTag": "rime",
          "speakAs": "ike",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "magic-e",
      "anchor": "-ike",
      "siblings": [
        "bike",
        "hike",
        "mike",
        "pike",
        "spike",
        "strike"
      ],
      "uiNote": "l 發 /l/，ike 是 magic-e 字族，e 靜音讓 i 發長音 /aɪ/（i 字母的名字）。-ike 字族：bike（腳踏車）、hike（健行）。",
      "specialNote": "magic-e：字尾 e 靜音，使 i 發長音 /aɪ/"
    },
    {
      "id": "sb_3_9",
      "word": "line",
      "syllables": [
        "line"
      ],
      "chinese": [
        {
          "c": "排",
          "p": "ㄆㄞˊ"
        },
        {
          "c": "隊",
          "p": "ㄉㄨㄟˋ"
        },
        {
          "c": "線",
          "p": "ㄒㄧㄢˋ"
        }
      ],
      "emoji": "📏➖",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/laɪn/",
      "chunks": [
        {
          "text": "l",
          "ipa": "/l/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "l",
          "speakMode": "phonetic"
        },
        {
          "text": "ine",
          "ipa": "/aɪn/",
          "role": "rime（magic-e，i 發長音）",
          "roleTag": "rime",
          "speakAs": "ine",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "magic-e",
      "anchor": "-ine",
      "siblings": [
        "dine",
        "fine",
        "mine",
        "nine",
        "pine",
        "vine",
        "wine",
        "shine",
        "spine"
      ],
      "uiNote": "l 發 /l/，ine 是 magic-e 字族，e 靜音讓 i 發長音 /aɪ/。-ine 字族：nine、pine、vine、shine，換開頭就能拼！",
      "specialNote": "magic-e：字尾 e 靜音，使 i 發長音 /aɪ/"
    },
    {
      "id": "sb_3_10",
      "word": "look",
      "syllables": [
        "look"
      ],
      "chinese": [
        {
          "c": "看",
          "p": "ㄎㄢˋ"
        }
      ],
      "emoji": "👀🔍",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/lʊk/",
      "chunks": [
        {
          "text": "l",
          "ipa": "/l/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "l",
          "speakMode": "phonetic"
        },
        {
          "text": "ook",
          "ipa": "/ʊk/",
          "role": "rime（短 oo=/ʊ/）",
          "roleTag": "rime",
          "speakAs": "ook",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "vowel-team",
      "anchor": "oo（短音 /ʊ/）",
      "siblings": [
        "book",
        "cook",
        "hook",
        "took",
        "nook"
      ],
      "uiNote": "l 發 /l/，ook 的 oo 發短音 /ʊ/（嘴巴微圓）。-ook 字族：book、cook、hook、took，全都是短 oo。",
      "specialNote": "⚠️ oo 在此為短音 /ʊ/，不是 moon 的長音 /uː/"
    },
    {
      "id": "sb_3_11",
      "word": "love",
      "syllables": [
        "love"
      ],
      "chinese": [
        {
          "c": "愛",
          "p": "ㄞˋ"
        }
      ],
      "emoji": "❤️🥰",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/lʌv/",
      "chunks": [
        {
          "text": "l",
          "ipa": "/l/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "l",
          "speakMode": "phonetic"
        },
        {
          "text": "ove",
          "ipa": "/ʌv/",
          "role": "rime（magic-e 例外，同 dove）",
          "roleTag": "rime",
          "speakAs": "love",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "exception",
      "anchor": "-ove（例外組，同 dove）",
      "siblings": [
        "dove",
        "above",
        "glove"
      ],
      "uiNote": "l 發 /l/，ove 是 magic-e 例外，o 沒有發長音，而是發 /ʌv/。和 dove、glove 一樣都是例外字。",
      "specialNote": "⚠️ magic-e 例外：ove 發 /ʌv/ 而非 /oʊv/"
    },
    {
      "id": "sb_3_12",
      "word": "low",
      "syllables": [
        "low"
      ],
      "chinese": [
        {
          "c": "低",
          "p": "ㄉㄧ"
        }
      ],
      "emoji": "🔉📉",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/loʊ/",
      "chunks": [
        {
          "text": "l",
          "ipa": "/l/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "l",
          "speakMode": "phonetic"
        },
        {
          "text": "ow",
          "ipa": "/oʊ/",
          "role": "rime（vowel team，此處 ow=/oʊ/）",
          "roleTag": "rime",
          "speakAs": "ow",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "vowel-team",
      "anchor": "ow（/oʊ/ 組）",
      "siblings": [
        "blow",
        "flow",
        "glow",
        "grow",
        "know",
        "show",
        "snow"
      ],
      "uiNote": "l 發 /l/，ow 在這裡發 /oʊ/（嘴巴圓圓往前推）。注意：ow 的 /oʊ/ vs cow 的 /aʊ/ 不一樣！",
      "specialNote": "⚠️ ow 有兩種讀法：此字為 /oʊ/ vs cow 的 /aʊ/"
    },
    {
      "id": "sb_3_13",
      "word": "more",
      "syllables": [
        "more"
      ],
      "chinese": [
        {
          "c": "更",
          "p": "ㄍㄥˋ"
        },
        {
          "c": "多",
          "p": "ㄉㄨㄛ"
        }
      ],
      "emoji": "➕📈",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/mɔːr/",
      "chunks": [
        {
          "text": "m",
          "ipa": "/m/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "m",
          "speakMode": "phonetic"
        },
        {
          "text": "ore",
          "ipa": "/ɔːr/",
          "role": "rime（r-controlled，ore 整組不可拆）",
          "roleTag": "rime",
          "speakAs": "more",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "r-controlled",
      "anchor": "ore",
      "siblings": [
        "bore",
        "core",
        "fore",
        "gore",
        "lore",
        "pore",
        "sore",
        "store",
        "score",
        "shore"
      ],
      "uiNote": "m 發 /m/，ore 是 r 控制母音，整組唸 /ɔːr/。-ore 字族：store、score、shore，換開頭就能拼！",
      "specialNote": "r-controlled：ore 整組不可拆"
    },
    {
      "id": "sb_3_14",
      "word": "move",
      "syllables": [
        "move"
      ],
      "chinese": [
        {
          "c": "移",
          "p": "ㄧˊ"
        },
        {
          "c": "動",
          "p": "ㄉㄨㄥˋ"
        }
      ],
      "emoji": "🏃📦",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/muːv/",
      "chunks": [
        {
          "text": "m",
          "ipa": "/m/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "m",
          "speakMode": "phonetic"
        },
        {
          "text": "ove",
          "ipa": "/uːv/",
          "role": "rime（magic-e 例外：o 發 /uː/ 而非 /oʊ/）",
          "roleTag": "rime",
          "speakAs": "move",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "exception",
      "anchor": "-ove（/uːv/ 組）",
      "siblings": [
        "prove",
        "groove"
      ],
      "uiNote": "m 發 /m/，ove 的 o 是例外，發 /uː/（像 moon 的聲音）。move、prove 的 ove 都發 /uːv/，和 dove 的 /ʌv/ 不同。",
      "specialNote": "⚠️ magic-e 例外：ove 發 /uːv/（move, prove）而非 /oʊv/"
    },
    {
      "id": "sb_3_15",
      "word": "nap",
      "syllables": [
        "nap"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "睡",
          "p": "ㄕㄨㄟˋ"
        }
      ],
      "emoji": "😴💤",
      "part": 3,
      "chunkType": "onset-rime",
      "ipa": "/næp/",
      "chunks": [
        {
          "text": "n",
          "ipa": "/n/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "n",
          "speakMode": "phonetic"
        },
        {
          "text": "ap",
          "ipa": "/æp/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "ap",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ap",
      "siblings": [
        "cap",
        "lap",
        "map",
        "rap",
        "tap",
        "clap",
        "snap",
        "trap"
      ],
      "uiNote": "n 發 /n/，ap 的 a 發短音 /æ/。和 cap、lap、map 是同一個 -ap 字族。",
      "specialNote": ""
    }
  ],
  "Part4": [
    {
      "id": "sb_4_1",
      "word": "open",
      "syllables": [
        "o",
        "pen"
      ],
      "chinese": [
        {
          "c": "打",
          "p": "ㄉㄚˇ"
        },
        {
          "c": "開",
          "p": "ㄎㄞ"
        }
      ],
      "emoji": "📂📖",
      "part": 4,
      "chunkType": "syllable",
      "ipa": "/ˈoʊ.pən/",
      "chunks": [
        {
          "text": "o",
          "ipa": "/oʊ/",
          "role": "syllable-1（VCV 規則，o 發長音）",
          "roleTag": "syllable",
          "speakAs": "oh",
          "speakMode": "phonetic"
        },
        {
          "text": "pen",
          "ipa": "/pən/",
          "role": "syllable-2（p + 弱化母音 + n）",
          "roleTag": "syllable",
          "speakAs": "pen",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "syllable-pattern",
      "anchor": "VCV",
      "siblings": [
        "over",
        "oval",
        "odor"
      ],
      "uiNote": "o-pen 兩個音節。第一個音節只有一個 o，因為 VCV 規則（兩個母音中間只有一個輔音），o 發長音 /oʊ/。",
      "specialNote": "VCV 規則：輔音歸後音節，前母音發長音"
    },
    {
      "id": "sb_4_2",
      "word": "pass",
      "syllables": [
        "pass"
      ],
      "chinese": [
        {
          "c": "通",
          "p": "ㄊㄨㄥ"
        },
        {
          "c": "過",
          "p": "ㄍㄨㄛˋ"
        }
      ],
      "emoji": "🎫🎟️",
      "part": 4,
      "chunkType": "onset-rime",
      "ipa": "/pæs/",
      "chunks": [
        {
          "text": "p",
          "ipa": "/p/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "p",
          "speakMode": "phonetic"
        },
        {
          "text": "ass",
          "ipa": "/æs/",
          "role": "rime（雙 s 只發一個 /s/）",
          "roleTag": "rime",
          "speakAs": "ass",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ass",
      "siblings": [
        "bass",
        "class",
        "glass",
        "grass",
        "mass"
      ],
      "uiNote": "p 發 /p/，ass 的 a 發短音 /æ/，雙 s 只發一個 /s/。-ass 字族：class（班級）、glass（玻璃杯）、grass（草）。",
      "specialNote": "雙 ss 只發一個 /s/"
    },
    {
      "id": "sb_4_3",
      "word": "pizza",
      "syllables": [
        "piz",
        "za"
      ],
      "chinese": [
        {
          "c": "披",
          "p": "ㄆㄧ"
        },
        {
          "c": "薩",
          "p": "ㄙㄚˋ"
        }
      ],
      "emoji": "🍕🧀",
      "part": 4,
      "chunkType": "syllable",
      "ipa": "/ˈpiːt.sə/",
      "chunks": [
        {
          "text": "piz",
          "ipa": "/piːt/",
          "role": "syllable-1（zz 在義大利語中發 /ts/）",
          "roleTag": "syllable",
          "speakAs": "peet",
          "speakMode": "phonetic"
        },
        {
          "text": "za",
          "ipa": "/sə/",
          "role": "syllable-2（z 發 /z/ 或 /s/，母音弱化為 schwa）",
          "roleTag": "syllable",
          "speakAs": "za",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "exception",
      "anchor": "pizza（義大利語外來字）",
      "siblings": [],
      "uiNote": "pizza 是義大利語外來字，zz 發 /ts/ 的聲音，整個字唸 /piːtsə/。這個字的拼音規則和英文一般規則不同，要特別記住！",
      "specialNote": "⚠️ 義大利外來字：zz 發 /ts/，為例外發音"
    },
    {
      "id": "sb_4_4",
      "word": "pony",
      "syllables": [
        "po",
        "ny"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "馬",
          "p": "ㄇㄚˇ"
        }
      ],
      "emoji": "🐴🎠",
      "part": 4,
      "chunkType": "syllable",
      "ipa": "/ˈpoʊ.ni/",
      "chunks": [
        {
          "text": "p",
          "ipa": "/p/",
          "role": "syllable-1 onset",
          "roleTag": "onset",
          "speakAs": "p",
          "speakMode": "phonetic"
        },
        {
          "text": "o",
          "ipa": "/oʊ/",
          "role": "syllable-1 rime（VCV，o 發長音）",
          "roleTag": "rime",
          "speakAs": "oh",
          "speakMode": "phonetic"
        },
        {
          "text": "ny",
          "ipa": "/ni/",
          "role": "syllable-2",
          "roleTag": "syllable",
          "speakAs": "nee",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "syllable-pattern",
      "anchor": "VCV + -y 結尾",
      "siblings": [
        "only",
        "holy",
        "cozy",
        "lazy"
      ],
      "uiNote": "po-ny 兩個音節。第一個音節的 o，因為 VCV 規則發長音 /oʊ/。結尾 y 在多音節字發 /i/。",
      "specialNote": "VCV 規則：前 o 發長音 /oʊ/；多音節字尾 y=/i/"
    },
    {
      "id": "sb_4_5",
      "word": "pop",
      "syllables": [
        "pop"
      ],
      "chinese": [
        {
          "c": "啪",
          "p": "ㄆㄚ"
        },
        {
          "c": "一",
          "p": "ㄧ"
        },
        {
          "c": "聲",
          "p": "ㄕㄥ"
        }
      ],
      "emoji": "🍿💥",
      "part": 4,
      "chunkType": "onset-rime",
      "ipa": "/pɑp/",
      "chunks": [
        {
          "text": "p",
          "ipa": "/p/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "p",
          "speakMode": "phonetic"
        },
        {
          "text": "op",
          "ipa": "/ɑp/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "op",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-op",
      "siblings": [
        "cop",
        "hop",
        "mop",
        "top",
        "drop",
        "stop",
        "shop"
      ],
      "uiNote": "p 發 /p/，op 的 o 發短音 /ɑ/。和 hop、mop、top、stop 是同一個 -op 字族。",
      "specialNote": ""
    },
    {
      "id": "sb_4_6",
      "word": "puppy",
      "syllables": [
        "pup",
        "py"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "狗",
          "p": "ㄍㄡˇ"
        }
      ],
      "emoji": "🐶🐾",
      "part": 4,
      "chunkType": "syllable",
      "ipa": "/ˈpʌp.i/",
      "chunks": [
        {
          "text": "p",
          "ipa": "/p/",
          "role": "syllable-1 onset",
          "roleTag": "onset",
          "speakAs": "p",
          "speakMode": "phonetic"
        },
        {
          "text": "up",
          "ipa": "/ʌp/",
          "role": "syllable-1 rime",
          "roleTag": "rime",
          "speakAs": "up",
          "speakMode": "direct"
        },
        {
          "text": "py",
          "ipa": "/pi/",
          "role": "syllable-2（pp 從中切）",
          "roleTag": "syllable",
          "speakAs": "pee",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-up",
      "siblings": [
        "cup",
        "pup",
        "sup",
        "guppy"
      ],
      "uiNote": "pup-py 兩個音節。up 的 u 發短音 /ʌ/。雙 p 從中間切，前後各一個。結尾 py 發 /pi/。",
      "specialNote": "雙 pp 從中間切"
    },
    {
      "id": "sb_4_7",
      "word": "rabbit",
      "syllables": [
        "rab",
        "bit"
      ],
      "chinese": [
        {
          "c": "兔",
          "p": "ㄊㄨˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🐰🥕",
      "part": 4,
      "chunkType": "syllable",
      "ipa": "/ˈræb.ɪt/",
      "chunks": [
        {
          "text": "r",
          "ipa": "/r/",
          "role": "syllable-1 onset",
          "roleTag": "onset",
          "speakAs": "r",
          "speakMode": "phonetic"
        },
        {
          "text": "ab",
          "ipa": "/æb/",
          "role": "syllable-1 rime",
          "roleTag": "rime",
          "speakAs": "ab",
          "speakMode": "direct"
        },
        {
          "text": "bit",
          "ipa": "/bɪt/",
          "role": "syllable-2（bb 從中切）",
          "roleTag": "syllable",
          "speakAs": "bit",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "syllable-pattern",
      "anchor": "VCCV（雙輔音從中切）",
      "siblings": [
        "ribbon",
        "button"
      ],
      "uiNote": "rab-bit 兩個音節。bb 從中間切。第一個音節 rab 的 a 發短音 /æ/。第二個音節 bit 的 i 發短音 /ɪ/。",
      "specialNote": "雙 bb 從中間切"
    },
    {
      "id": "sb_4_8",
      "word": "rich",
      "syllables": [
        "rich"
      ],
      "chinese": [
        {
          "c": "富",
          "p": "ㄈㄨˋ"
        },
        {
          "c": "有",
          "p": "ㄧㄡˇ"
        }
      ],
      "emoji": "💰💎",
      "part": 4,
      "chunkType": "onset-rime",
      "ipa": "/rɪtʃ/",
      "chunks": [
        {
          "text": "r",
          "ipa": "/r/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "r",
          "speakMode": "phonetic"
        },
        {
          "text": "ich",
          "ipa": "/ɪtʃ/",
          "role": "rime（ch 是 digraph，整組 ich 不可拆）",
          "roleTag": "rime",
          "speakAs": "rich",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ich",
      "siblings": [
        "which",
        "stitch"
      ],
      "uiNote": "r 發 /r/，ich 的 i 發短音 /ɪ/，ch 是二合字母發 /tʃ/。整個 ich 唸 /ɪtʃ/。",
      "specialNote": "ch 在字尾仍為 digraph，發 /tʃ/"
    },
    {
      "id": "sb_4_9",
      "word": "robot",
      "syllables": [
        "ro",
        "bot"
      ],
      "chinese": [
        {
          "c": "機",
          "p": "ㄐㄧ"
        },
        {
          "c": "器",
          "p": "ㄑㄧˋ"
        },
        {
          "c": "人",
          "p": "ㄖㄣˊ"
        }
      ],
      "emoji": "🤖⚡",
      "part": 4,
      "chunkType": "syllable",
      "ipa": "/ˈroʊ.bɑt/",
      "chunks": [
        {
          "text": "ro",
          "ipa": "/roʊ/",
          "role": "syllable-1（r + 長母音 o，VCV）",
          "roleTag": "syllable",
          "speakAs": "roe",
          "speakMode": "phonetic"
        },
        {
          "text": "bot",
          "ipa": "/bɑt/",
          "role": "syllable-2",
          "roleTag": "syllable",
          "speakAs": "bot",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "syllable-pattern",
      "anchor": "VCV",
      "siblings": [
        "moment",
        "broken"
      ],
      "uiNote": "ro-bot 兩個音節。第一個音節 ro 是開放音節（後面只有一個輔音），o 發長音 /oʊ/。第二個音節 bot 的 o 發短音 /ɑ/。",
      "specialNote": ""
    },
    {
      "id": "sb_4_10",
      "word": "safe",
      "syllables": [
        "safe"
      ],
      "chinese": [
        {
          "c": "安",
          "p": "ㄢ"
        },
        {
          "c": "全",
          "p": "ㄑㄩㄢˊ"
        }
      ],
      "emoji": "🛡️🦺",
      "part": 4,
      "chunkType": "onset-rime",
      "ipa": "/seɪf/",
      "chunks": [
        {
          "text": "s",
          "ipa": "/s/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "s",
          "speakMode": "phonetic"
        },
        {
          "text": "afe",
          "ipa": "/eɪf/",
          "role": "rime（magic-e，a 發長音）",
          "roleTag": "rime",
          "speakAs": "safe",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "magic-e",
      "anchor": "-afe",
      "siblings": [
        "chafe",
        "cave",
        "wave",
        "save"
      ],
      "uiNote": "s 發 /s/，afe 是 magic-e，e 靜音讓 a 發長音 /eɪ/。",
      "specialNote": "magic-e：字尾 e 靜音，使 a 發長音 /eɪ/"
    },
    {
      "id": "sb_4_11",
      "word": "shy",
      "syllables": [
        "shy"
      ],
      "chinese": [
        {
          "c": "害",
          "p": "ㄏㄞˋ"
        },
        {
          "c": "羞",
          "p": "ㄒㄧㄡ"
        }
      ],
      "emoji": "🙈😳",
      "part": 4,
      "chunkType": "onset-rime",
      "ipa": "/ʃaɪ/",
      "chunks": [
        {
          "text": "sh",
          "ipa": "/ʃ/",
          "role": "onset（digraph）",
          "roleTag": "onset",
          "speakAs": "sh",
          "speakMode": "phonetic"
        },
        {
          "text": "y",
          "ipa": "/aɪ/",
          "role": "rime（單音節字尾 y=/aɪ/）",
          "roleTag": "rime",
          "speakAs": "eye",
          "speakMode": "phonetic"
        }
      ],
      "memoryAnchorType": "digraph",
      "anchor": "sh",
      "siblings": [
        "she",
        "ship",
        "shop",
        "shoe",
        "shell",
        "shine",
        "show"
      ],
      "uiNote": "sh 是二合字母，整組發 /ʃ/（像 shhh 叫人安靜的聲音）。y 在單音節字尾發 /aɪ/。",
      "specialNote": "sh 是 digraph，整組發 /ʃ/，不可分開"
    },
    {
      "id": "sb_4_12",
      "word": "sick",
      "syllables": [
        "sick"
      ],
      "chinese": [
        {
          "c": "生",
          "p": "ㄕㄥ"
        },
        {
          "c": "病",
          "p": "ㄅㄧㄥˋ"
        }
      ],
      "emoji": "🤒😷",
      "part": 4,
      "chunkType": "onset-rime",
      "ipa": "/sɪk/",
      "chunks": [
        {
          "text": "s",
          "ipa": "/s/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "s",
          "speakMode": "phonetic"
        },
        {
          "text": "ick",
          "ipa": "/ɪk/",
          "role": "rime（ck 是 digraph）",
          "roleTag": "rime",
          "speakAs": "ick",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ick",
      "siblings": [
        "kick",
        "lick",
        "nick",
        "pick",
        "tick",
        "trick",
        "brick",
        "click",
        "slick",
        "stick",
        "thick"
      ],
      "uiNote": "s 發 /s/，ick 的 i 發短音 /ɪ/，ck 是二合字母發 /k/。-ick 字族超多：kick、pick、thick、stick！",
      "specialNote": "ck 是 digraph，整組發 /k/"
    },
    {
      "id": "sb_4_13",
      "word": "stop",
      "syllables": [
        "stop"
      ],
      "chinese": [
        {
          "c": "停",
          "p": "ㄊㄧㄥˊ"
        }
      ],
      "emoji": "🛑✋",
      "part": 4,
      "chunkType": "onset-rime",
      "ipa": "/stɑp/",
      "chunks": [
        {
          "text": "st",
          "ipa": "/st/",
          "role": "onset（輔音叢）",
          "roleTag": "onset",
          "speakAs": "st",
          "speakMode": "phonetic"
        },
        {
          "text": "op",
          "ipa": "/ɑp/",
          "role": "rime",
          "roleTag": "rime",
          "speakAs": "op",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-op",
      "siblings": [
        "cop",
        "hop",
        "mop",
        "pop",
        "top",
        "drop",
        "shop"
      ],
      "uiNote": "st 是輔音叢，s 和 t 連著發音。op 的 o 發短音 /ɑ/。和 hop、pop、shop 是同一個 -op 字族。",
      "specialNote": ""
    },
    {
      "id": "sb_4_14",
      "word": "wax",
      "syllables": [
        "wax"
      ],
      "chinese": [
        {
          "c": "蠟",
          "p": "ㄌㄚˋ"
        }
      ],
      "emoji": "🕯️🛹",
      "part": 4,
      "chunkType": "onset-rime",
      "ipa": "/wæks/",
      "chunks": [
        {
          "text": "w",
          "ipa": "/w/",
          "role": "onset",
          "roleTag": "onset",
          "speakAs": "w",
          "speakMode": "phonetic"
        },
        {
          "text": "ax",
          "ipa": "/æks/",
          "role": "rime（x 發 /ks/）",
          "roleTag": "rime",
          "speakAs": "ax",
          "speakMode": "direct"
        }
      ],
      "memoryAnchorType": "word-family",
      "anchor": "-ax",
      "siblings": [
        "ax",
        "max",
        "tax",
        "fax",
        "lax",
        "relax"
      ],
      "uiNote": "w 發 /w/，ax 的 a 發短音 /æ/，x 固定發 /ks/（兩個音）。-ax 字族：ax、max、tax、fax。",
      "specialNote": "x 固定發 /ks/（複合音）"
    },
    {
      "id": "sb_4_15",
      "word": "zipper",
      "syllables": [
        "zip",
        "per"
      ],
      "chinese": [
        {
          "c": "拉",
          "p": "ㄌㄚ"
        },
        {
          "c": "鍊",
          "p": "ㄌㄧㄢˋ"
        }
      ],
      "emoji": "🤐🧥",
      "part": 4,
      "chunkType": "syllable",
      "ipa": "/ˈzɪp.ər/",
      "chunks": [
        {
          "text": "z",
          "ipa": "/z/",
          "role": "syllable-1 onset",
          "roleTag": "onset",
          "speakAs": "z",
          "speakMode": "phonetic"
        },
        {
          "text": "ip",
          "ipa": "/ɪp/",
          "role": "syllable-1 rime",
          "roleTag": "rime",
          "speakAs": "ip",
          "speakMode": "direct"
        },
        {
          "text": "per",
          "ipa": "/pər/",
          "role": "syllable-2（r-controlled，弱化）",
          "roleTag": "syllable",
          "speakAs": "zipper",
          "speakMode": "wholeWord"
        }
      ],
      "memoryAnchorType": "r-controlled",
      "anchor": "er（弱化 /ər/）",
      "siblings": [
        "butter",
        "letter",
        "pepper",
        "supper"
      ],
      "uiNote": "zip-per 兩個音節。第一個音節 zip 的 i 發短音 /ɪ/。pp 從中切，per 的 er 是 r 控制母音，發輕聲 /ər/。",
      "specialNote": "雙 pp 從中間切；er 為弱化 r-controlled /ər/"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SPELLING_BEE_DATA };
}
