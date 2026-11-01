/**
 * 一年級 Egle 老師 — 英文單字拼讀分塊資料庫 (共 257 字)
 * 來源：一年級_egle/單字拼讀分塊.md
 */
const CHUNKS_DATA = {
  "act": {
    "word": "act",
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
  "add": {
    "word": "add",
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
  "air": {
    "word": "air",
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
  "any": {
    "word": "any",
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
  "ape": {
    "word": "ape",
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
  "away": {
    "word": "away",
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
  "barn": {
    "word": "barn",
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
  "bay": {
    "word": "bay",
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
  "bunny": {
    "word": "bunny",
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
  "cab": {
    "word": "cab",
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
  "calf": {
    "word": "calf",
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
  "candy": {
    "word": "candy",
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
  "care": {
    "word": "care",
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
  "child": {
    "word": "child",
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
  "city": {
    "word": "city",
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
  },
  "cold": {
    "word": "cold",
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
  "color": {
    "word": "color",
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
  "cookie": {
    "word": "cookie",
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
  "cow": {
    "word": "cow",
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
  "cub": {
    "word": "cub",
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
  "day": {
    "word": "day",
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
  "dot": {
    "word": "dot",
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
  "dove": {
    "word": "dove",
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
  "easy": {
    "word": "easy",
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
  "elf": {
    "word": "elf",
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
  "fall": {
    "word": "fall",
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
  "fly": {
    "word": "fly",
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
  "fun": {
    "word": "fun",
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
  "gum": {
    "word": "gum",
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
  "gun": {
    "word": "gun",
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
  },
  "hay": {
    "word": "hay",
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
  "help": {
    "word": "help",
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
  "here": {
    "word": "here",
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
  "hill": {
    "word": "hill",
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
  "hop": {
    "word": "hop",
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
  "lap": {
    "word": "lap",
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
  "late": {
    "word": "late",
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
  "like": {
    "word": "like",
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
  "line": {
    "word": "line",
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
  "look": {
    "word": "look",
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
  "love": {
    "word": "love",
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
  "low": {
    "word": "low",
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
  "more": {
    "word": "more",
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
  "move": {
    "word": "move",
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
  "nap": {
    "word": "nap",
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
  },
  "open": {
    "word": "open",
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
  "pass": {
    "word": "pass",
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
  "pizza": {
    "word": "pizza",
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
  "pony": {
    "word": "pony",
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
  "pop": {
    "word": "pop",
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
  "puppy": {
    "word": "puppy",
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
  "rabbit": {
    "word": "rabbit",
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
  "rich": {
    "word": "rich",
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
  "robot": {
    "word": "robot",
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
  "safe": {
    "word": "safe",
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
  "shy": {
    "word": "shy",
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
  "sick": {
    "word": "sick",
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
  "stop": {
    "word": "stop",
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
  "wax": {
    "word": "wax",
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
  "zipper": {
    "word": "zipper",
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
  },
  "ham": {
    "word": "ham",
    "chunkType": "onset-rime",
    "ipa": "/hæm/",
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
        "text": "am",
        "ipa": "/æm/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "am",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-am",
    "siblings": [
      "am",
      "cam",
      "dam",
      "jam",
      "ram",
      "yam",
      "clam",
      "slam",
      "tram"
    ],
    "uiNote": "h 發 /h/，am 的 a 發短音 /æ/。-am 字族：jam（果醬）、clam（蛤蜊）、yam（山藥）。",
    "specialNote": ""
  },
  "hat": {
    "word": "hat",
    "chunkType": "onset-rime",
    "ipa": "/hæt/",
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
        "text": "at",
        "ipa": "/æt/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "at",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-at",
    "siblings": [
      "bat",
      "cat",
      "fat",
      "mat",
      "pat",
      "rat",
      "sat",
      "flat",
      "chat",
      "that"
    ],
    "uiNote": "h 發 /h/，at 的 a 發短音 /æ/。-at 字族超多：cat、bat、mat、flat，換開頭就能拼！",
    "specialNote": ""
  },
  "hammer": {
    "word": "hammer",
    "chunkType": "syllable",
    "ipa": "/ˈhæm.ər/",
    "chunks": [
      {
        "text": "h",
        "ipa": "/h/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "h",
        "speakMode": "phonetic"
      },
      {
        "text": "am",
        "ipa": "/æm/",
        "role": "syllable-1 rime",
        "roleTag": "rime",
        "speakAs": "am",
        "speakMode": "direct"
      },
      {
        "text": "mer",
        "ipa": "/mər/",
        "role": "syllable-2（mm 從中切，er 弱化）",
        "roleTag": "syllable",
        "speakAs": "hammer",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "er（弱化 /ər/）",
    "siblings": [
      "summer",
      "butter",
      "dinner",
      "runner"
    ],
    "uiNote": "ham-mer 兩個音節。第一個 ham 的 a 發短音 /æ/。mm 從中切，第二個音節 mer 的 er 發輕聲 /ər/。",
    "specialNote": "雙 mm 從中間切"
  },
  "hand": {
    "word": "hand",
    "chunkType": "onset-rime",
    "ipa": "/hænd/",
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
        "text": "and",
        "ipa": "/ænd/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "and",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-and",
    "siblings": [
      "band",
      "land",
      "sand",
      "stand",
      "brand",
      "grand",
      "strand"
    ],
    "uiNote": "h 發 /h/，and 的 a 發短音 /æ/。-and 字族：band（樂團）、land（陸地）、sand（沙子）、stand（站立）。",
    "specialNote": ""
  },
  "hose": {
    "word": "hose",
    "chunkType": "onset-rime",
    "ipa": "/hoʊz/",
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
        "text": "ose",
        "ipa": "/oʊz/",
        "role": "rime（magic-e，o 發長音，s 在 magic-e 前發 /z/）",
        "roleTag": "rime",
        "speakAs": "hose",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "magic-e",
    "anchor": "-ose",
    "siblings": [
      "nose",
      "rose",
      "pose",
      "dose",
      "those",
      "close"
    ],
    "uiNote": "h 發 /h/，ose 是 magic-e，e 靜音讓 o 發長音 /oʊ/，s 在這裡發 /z/。-ose 字族：nose、rose、close。",
    "specialNote": "magic-e；s 在 magic-e 前發 /z/（有聲）"
  },
  "helicopter": {
    "word": "helicopter",
    "chunkType": "syllable",
    "ipa": "/ˈhɛl.ɪ.kɑp.tər/",
    "chunks": [
      {
        "text": "hel",
        "ipa": "/hɛl/",
        "role": "syllable-1",
        "roleTag": "syllable",
        "speakAs": "hel",
        "speakMode": "direct"
      },
      {
        "text": "i",
        "ipa": "/ɪ/",
        "role": "syllable-2",
        "roleTag": "syllable",
        "speakAs": "ih",
        "speakMode": "phonetic"
      },
      {
        "text": "cop",
        "ipa": "/kɑp/",
        "role": "syllable-3",
        "roleTag": "syllable",
        "speakAs": "cop",
        "speakMode": "direct"
      },
      {
        "text": "ter",
        "ipa": "/tər/",
        "role": "syllable-4（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "helicopter",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "4-syllable",
    "siblings": [
      "calculator",
      "refrigerator"
    ],
    "uiNote": "hel-i-cop-ter 共四個音節，一個一個拍手唸：HEL-i-cop-ter。重音在第一個音節 HEL。最後的 ter 發輕聲 /tər/。",
    "specialNote": "四音節字，建議拍手練習節拍"
  },
  "house": {
    "word": "house",
    "chunkType": "onset-rime",
    "ipa": "/haʊs/",
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
        "text": "ouse",
        "ipa": "/aʊs/",
        "role": "rime（vowel team ou=/aʊ/）",
        "roleTag": "rime",
        "speakAs": "house",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ou（/aʊ/）",
    "siblings": [
      "mouse",
      "louse",
      "blouse",
      "out",
      "loud",
      "cloud"
    ],
    "uiNote": "h 發 /h/，ouse 裡的 ou 是母音組合，發 /aʊ/（嘴巴從大張到合攏）。-ouse 字族：mouse（老鼠）、louse（蝨子）。",
    "specialNote": ""
  },
  "horse": {
    "word": "horse",
    "chunkType": "onset-rime",
    "ipa": "/hɔːrs/",
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
        "text": "orse",
        "ipa": "/ɔːrs/",
        "role": "rime（r-controlled，orse 整組不可拆）",
        "roleTag": "rime",
        "speakAs": "horse",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "or（/ɔːr/）",
    "siblings": [
      "force",
      "forge",
      "gorge",
      "porch",
      "torch"
    ],
    "uiNote": "h 發 /h/，orse 裡的 or 是 r 控制母音，整組唸 /ɔːr/，不能拆開。整個 orse 唸 /ɔːrs/。",
    "specialNote": "r-controlled：or 整組不可拆"
  },
  "helmet": {
    "word": "helmet",
    "chunkType": "syllable",
    "ipa": "/ˈhɛl.mɪt/",
    "chunks": [
      {
        "text": "hel",
        "ipa": "/hɛl/",
        "role": "syllable-1",
        "roleTag": "syllable",
        "speakAs": "hel",
        "speakMode": "direct"
      },
      {
        "text": "met",
        "ipa": "/mɪt/",
        "role": "syllable-2",
        "roleTag": "syllable",
        "speakAs": "met",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "VCCV",
    "siblings": [
      "velvet",
      "blanket",
      "market"
    ],
    "uiNote": "hel-met 兩個音節，lm 從中切。第一個音節 hel 的 e 發短音 /ɛ/。第二個音節 met 的 e 也發短音，但弱化成 /ɪ/。",
    "specialNote": ""
  },
  "ink": {
    "word": "ink",
    "chunkType": "onset-rime",
    "ipa": "/ɪŋk/",
    "chunks": [
      {
        "text": "i",
        "ipa": "/ɪ/",
        "role": "onset（母音開頭）",
        "roleTag": "onset",
        "speakAs": "ih",
        "speakMode": "phonetic"
      },
      {
        "text": "nk",
        "ipa": "/ŋk/",
        "role": "rime-coda（n 在 k 前發 /ŋ/）",
        "roleTag": "coda",
        "speakAs": "ink",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ink",
    "siblings": [
      "link",
      "mink",
      "pink",
      "rink",
      "sink",
      "wink",
      "think",
      "drink",
      "shrink"
    ],
    "uiNote": "i 發短音 /ɪ/，nk 是字尾輔音叢，n 在 k 前發 /ŋ/（鼻音）。-ink 字族：pink、sink、wink、drink！",
    "specialNote": "n 在 k 前發鼻音 /ŋ/"
  },
  "igloo": {
    "word": "igloo",
    "chunkType": "syllable",
    "ipa": "/ˈɪɡ.luː/",
    "chunks": [
      {
        "text": "ig",
        "ipa": "/ɪɡ/",
        "role": "syllable-1（母音開頭）",
        "roleTag": "syllable",
        "speakAs": "ig",
        "speakMode": "direct"
      },
      {
        "text": "loo",
        "ipa": "/luː/",
        "role": "syllable-2（長 oo=/uː/）",
        "roleTag": "syllable",
        "speakAs": "loo",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "oo（長音 /uː/）",
    "siblings": [
      "moon",
      "food",
      "cool",
      "pool",
      "tool"
    ],
    "uiNote": "ig-loo 兩個音節。第一個 ig 的 i 發短音 /ɪ/。第二個 loo 的 oo 發長音 /uː/（像 moon 的聲音）。",
    "specialNote": ""
  },
  "car": {
    "word": "car",
    "chunkType": "onset-rime",
    "ipa": "/kɑːr/",
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
        "text": "ar",
        "ipa": "/ɑːr/",
        "role": "rime（r-controlled）",
        "roleTag": "rime",
        "speakAs": "car",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ar",
    "siblings": [
      "bar",
      "far",
      "jar",
      "star",
      "scar",
      "spar"
    ],
    "uiNote": "c 發 /k/，ar 是 r 控制母音，整組唸 /ɑːr/（喉嚨往後的聲音）。-ar 字族：bar、jar、star。",
    "specialNote": "r-controlled：ar 整組不可拆"
  },
  "cap": {
    "word": "cap",
    "chunkType": "onset-rime",
    "ipa": "/kæp/",
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
      "lap",
      "map",
      "nap",
      "rap",
      "tap",
      "clap",
      "snap",
      "trap"
    ],
    "uiNote": "c 發 /k/，ap 的 a 發短音 /æ/。和 lap、nap、map 是同一個 -ap 字族。",
    "specialNote": ""
  },
  "can": {
    "word": "can",
    "chunkType": "onset-rime",
    "ipa": "/kæn/",
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
        "text": "an",
        "ipa": "/æn/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "an",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-an",
    "siblings": [
      "fan",
      "man",
      "pan",
      "ran",
      "tan",
      "van",
      "plan",
      "scan",
      "span"
    ],
    "uiNote": "c 發 /k/，an 的 a 發短音 /æ/。-an 字族：fan、man、pan、plan，換開頭就能拼！",
    "specialNote": ""
  },
  "candle": {
    "word": "candle",
    "chunkType": "syllable",
    "ipa": "/ˈkæn.dəl/",
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
        "text": "dle",
        "ipa": "/dəl/",
        "role": "syllable-2（consonant + le 結尾）",
        "roleTag": "syllable",
        "speakAs": "candle",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "consonant + le",
    "siblings": [
      "handle",
      "bundle",
      "gentle",
      "simple",
      "table"
    ],
    "uiNote": "can-dle 兩個音節。第一個 can 的 a 發短音 /æ/。字尾 dle 是輔音 + le 的結構，發 /dəl/，這是常見的結尾模式。",
    "specialNote": "consonant + le 結尾為獨立末音節"
  },
  "carrot": {
    "word": "carrot",
    "chunkType": "syllable",
    "ipa": "/ˈkær.ət/",
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
        "text": "ar",
        "ipa": "/ær/",
        "role": "syllable-1 rime（r-controlled）",
        "roleTag": "rime",
        "speakAs": "carrot",
        "speakMode": "wholeWord"
      },
      {
        "text": "rot",
        "ipa": "/rət/",
        "role": "syllable-2（r + 弱化母音）",
        "roleTag": "syllable",
        "speakAs": "rot",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ar（短 r-controlled /ær/ vs 長 /ɑːr/）",
    "siblings": [
      "barrel",
      "narrow",
      "parrot"
    ],
    "uiNote": "car-rot 兩個音節。第一個音節 car 的 ar 是 r 控制母音，但這裡重音略短，發 /ær/。第二個音節 rot 的母音弱化。",
    "specialNote": "雙 rr 從中切；ar 在此發較短的 /ær/"
  },
  "comb": {
    "word": "comb",
    "chunkType": "onset-rime",
    "ipa": "/koʊm/",
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
        "text": "omb",
        "ipa": "/oʊm/",
        "role": "rime（b 靜音）",
        "roleTag": "rime",
        "speakAs": "comb",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "silent-letter",
    "anchor": "silent-b",
    "siblings": [
      "bomb",
      "climb",
      "dumb",
      "lamb",
      "limb",
      "thumb",
      "tomb"
    ],
    "uiNote": "c 發 /k/，omb 的 b 不發音，整個字唸 /koʊm/。靜音 b 在很多字裡都會出現：thumb、lamb、bomb。",
    "specialNote": "⚠️ 靜音字母：b 不發音，全字發 /koʊm/"
  },
  "corn": {
    "word": "corn",
    "chunkType": "onset-rime",
    "ipa": "/kɔːrn/",
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
        "text": "orn",
        "ipa": "/ɔːrn/",
        "role": "rime（r-controlled）",
        "roleTag": "rime",
        "speakAs": "corn",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "or",
    "siblings": [
      "born",
      "horn",
      "torn",
      "worn",
      "scorn",
      "short",
      "sport"
    ],
    "uiNote": "c 發 /k/，orn 的 or 是 r 控制母音，整組唸 /ɔːr/，加上 n 就是 /ɔːrn/。-orn 字族：born、horn、torn。",
    "specialNote": "r-controlled：or 整組不可拆"
  },
  "collar": {
    "word": "collar",
    "chunkType": "syllable",
    "ipa": "/ˈkɑl.ər/",
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
        "ipa": "/ɑl/",
        "role": "syllable-1 rime（o 發短音 /ɑ/）",
        "roleTag": "rime",
        "speakAs": "ol",
        "speakMode": "direct"
      },
      {
        "text": "lar",
        "ipa": "/lər/",
        "role": "syllable-2（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "collar",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ar（弱化 /ər/）",
    "siblings": [
      "dollar",
      "cellar",
      "pillar"
    ],
    "uiNote": "col-lar 兩個音節。第一個 col 的 o 發短音 /ɑ/。第二個 lar 的 ar 在非重音節弱化成輕聲 /ər/。",
    "specialNote": "ar 在非重音節弱化為 /ər/"
  },
  "coat": {
    "word": "coat",
    "chunkType": "onset-rime",
    "ipa": "/koʊt/",
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
        "text": "oat",
        "ipa": "/oʊt/",
        "role": "rime（vowel team oa=/oʊ/）",
        "roleTag": "rime",
        "speakAs": "oat",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "oa",
    "siblings": [
      "boat",
      "goat",
      "moat",
      "road",
      "toad",
      "float",
      "throat"
    ],
    "uiNote": "c 發 /k/，oat 裡的 oa 是母音組合，固定發長音 /oʊ/。-oat 字族：boat（船）、goat（山羊）、float（漂浮）。",
    "specialNote": ""
  },
  "elephant": {
    "word": "elephant",
    "chunkType": "syllable",
    "ipa": "/ˈɛl.ɪ.fənt/",
    "chunks": [
      {
        "text": "el",
        "ipa": "/ɛl/",
        "role": "syllable-1（母音開頭）",
        "roleTag": "syllable",
        "speakAs": "el",
        "speakMode": "direct"
      },
      {
        "text": "e",
        "ipa": "/ɪ/",
        "role": "syllable-2（弱化）",
        "roleTag": "syllable",
        "speakAs": "ih",
        "speakMode": "phonetic"
      },
      {
        "text": "phant",
        "ipa": "/fənt/",
        "role": "syllable-3（ph=/f/，a 弱化）",
        "roleTag": "syllable",
        "speakAs": "elephant",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "digraph",
    "anchor": "ph",
    "siblings": [
      "phone",
      "photo",
      "phrase",
      "alphabet",
      "dolphin"
    ],
    "uiNote": "el-e-phant 三個音節。ph 是二合字母，發 /f/（不是 p+h 分開唸）。重音在第一個音節 EL。",
    "specialNote": "ph 是 digraph，發 /f/ 不是 /p/"
  },
  "elbow": {
    "word": "elbow",
    "chunkType": "syllable",
    "ipa": "/ˈɛl.boʊ/",
    "chunks": [
      {
        "text": "el",
        "ipa": "/ɛl/",
        "role": "syllable-1（母音開頭）",
        "roleTag": "syllable",
        "speakAs": "el",
        "speakMode": "direct"
      },
      {
        "text": "bow",
        "ipa": "/boʊ/",
        "role": "syllable-2（ow=/oʊ/）",
        "roleTag": "syllable",
        "speakAs": "bow",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ow（/oʊ/）",
    "siblings": [
      "below",
      "rainbow",
      "meadow"
    ],
    "uiNote": "el-bow 兩個音節，母音開頭。第二個音節 bow 的 ow 發 /oʊ/（不是 cow 的 /aʊ/）。",
    "specialNote": ""
  },
  "egg": {
    "word": "egg",
    "chunkType": "onset-rime",
    "ipa": "/ɛɡ/",
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
        "text": "gg",
        "ipa": "/ɡ/",
        "role": "rime-coda（雙 g 只發一個 /ɡ/）",
        "roleTag": "coda",
        "speakAs": "egg",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "double-consonant",
    "siblings": [
      "add",
      "odd",
      "inn"
    ],
    "uiNote": "e 發短音 /ɛ/，gg 雙 g 只發一個 /ɡ/。整個字就是 /ɛɡ/。",
    "specialNote": "雙 gg 只發一個 /ɡ/"
  },
  "elevator": {
    "word": "elevator",
    "chunkType": "syllable",
    "ipa": "/ˈɛl.ɪ.veɪ.tər/",
    "chunks": [
      {
        "text": "el",
        "ipa": "/ɛl/",
        "role": "syllable-1（母音開頭）",
        "roleTag": "syllable",
        "speakAs": "el",
        "speakMode": "direct"
      },
      {
        "text": "e",
        "ipa": "/ɪ/",
        "role": "syllable-2（弱化）",
        "roleTag": "syllable",
        "speakAs": "ih",
        "speakMode": "phonetic"
      },
      {
        "text": "va",
        "ipa": "/veɪ/",
        "role": "syllable-3（magic-e 型長音，a 在開放音節發長音）",
        "roleTag": "syllable",
        "speakAs": "vay",
        "speakMode": "phonetic"
      },
      {
        "text": "tor",
        "ipa": "/tər/",
        "role": "syllable-4（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "elevator",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "4-syllable",
    "siblings": [
      "helicopter",
      "refrigerator"
    ],
    "uiNote": "el-e-va-tor 四個音節，拍手練習：EL-e-va-tor。重音在第一個音節。第三個音節 va 的 a 發長音 /eɪ/。最後 tor 發輕聲 /tər/。",
    "specialNote": "四音節字，建議拍手練習"
  },
  "fence": {
    "word": "fence",
    "chunkType": "onset-rime",
    "ipa": "/fɛns/",
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
        "text": "ence",
        "ipa": "/ɛns/",
        "role": "rime（e 發短音，ce 發 /s/）",
        "roleTag": "rime",
        "speakAs": "fence",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ence",
    "siblings": [
      "hence",
      "pence",
      "dense",
      "tense"
    ],
    "uiNote": "f 發 /f/，ence 的 e 發短音 /ɛ/，ce 是軟音發 /s/（c 在 e 前是軟音）。整個 ence 唸 /ɛns/。",
    "specialNote": "soft-c：c 在 e 前發 /s/"
  },
  "belt": {
    "word": "belt",
    "chunkType": "onset-rime",
    "ipa": "/bɛlt/",
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
        "text": "elt",
        "ipa": "/ɛlt/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "belt",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-elt",
    "siblings": [
      "felt",
      "melt",
      "welt",
      "smelt"
    ],
    "uiNote": "b 發 /b/，elt 的 e 發短音 /ɛ/。-elt 字族：felt（感覺到）、melt（融化）。",
    "specialNote": ""
  },
  "dress": {
    "word": "dress",
    "chunkType": "onset-rime",
    "ipa": "/drɛs/",
    "chunks": [
      {
        "text": "dr",
        "ipa": "/dr/",
        "role": "onset（輔音叢）",
        "roleTag": "onset",
        "speakAs": "dr",
        "speakMode": "phonetic"
      },
      {
        "text": "ess",
        "ipa": "/ɛs/",
        "role": "rime（雙 s 只發一個 /s/）",
        "roleTag": "rime",
        "speakAs": "ess",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ess",
    "siblings": [
      "bless",
      "mess",
      "less",
      "press",
      "stress",
      "guess"
    ],
    "uiNote": "dr 是輔音叢，d 和 r 連著發音。ess 的 e 發短音 /ɛ/，ss 只發一個 /s/。-ess 字族：mess、less、press。",
    "specialNote": "雙 ss 只發一個 /s/"
  },
  "net": {
    "word": "net",
    "chunkType": "onset-rime",
    "ipa": "/nɛt/",
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
        "text": "et",
        "ipa": "/ɛt/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "et",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-et",
    "siblings": [
      "bet",
      "get",
      "jet",
      "let",
      "met",
      "pet",
      "set",
      "wet",
      "fret"
    ],
    "uiNote": "n 發 /n/，et 的 e 發短音 /ɛ/。-et 字族：bet、get、jet、pet、set、wet。",
    "specialNote": ""
  },
  "sled": {
    "word": "sled",
    "chunkType": "onset-rime",
    "ipa": "/slɛd/",
    "chunks": [
      {
        "text": "sl",
        "ipa": "/sl/",
        "role": "onset（輔音叢）",
        "roleTag": "onset",
        "speakAs": "sl",
        "speakMode": "phonetic"
      },
      {
        "text": "ed",
        "ipa": "/ɛd/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "ed",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ed",
    "siblings": [
      "bed",
      "fed",
      "led",
      "red",
      "wed",
      "shed",
      "sped",
      "fled"
    ],
    "uiNote": "sl 是輔音叢，s 和 l 連著發音。ed 的 e 發短音 /ɛ/。-ed 字族：bed、red、shed、fled。",
    "specialNote": ""
  },
  "ten": {
    "word": "ten",
    "chunkType": "onset-rime",
    "ipa": "/tɛn/",
    "chunks": [
      {
        "text": "t",
        "ipa": "/t/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "t",
        "speakMode": "phonetic"
      },
      {
        "text": "en",
        "ipa": "/ɛn/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "en",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-en",
    "siblings": [
      "ben",
      "den",
      "hen",
      "men",
      "pen",
      "then",
      "when",
      "glen"
    ],
    "uiNote": "t 發 /t/，en 的 e 發短音 /ɛ/。-en 字族：hen（母雞）、men（男人們）、pen（筆）、when（什麼時候）。",
    "specialNote": ""
  },
  "shell": {
    "word": "shell",
    "chunkType": "onset-rime",
    "ipa": "/ʃɛl/",
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
        "text": "ell",
        "ipa": "/ɛl/",
        "role": "rime（雙 l 只發一個 /l/）",
        "roleTag": "rime",
        "speakAs": "ell",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ell",
    "siblings": [
      "bell",
      "cell",
      "fell",
      "sell",
      "tell",
      "well",
      "yell",
      "smell",
      "spell",
      "swell"
    ],
    "uiNote": "sh 是二合字母發 /ʃ/，ell 的 e 發短音 /ɛ/，ll 只發一個 /l/。-ell 字族：bell、tell、well、spell。",
    "specialNote": "sh 是 digraph；雙 ll 只發一個 /l/"
  },
  "bed": {
    "word": "bed",
    "chunkType": "onset-rime",
    "ipa": "/bɛd/",
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
        "text": "ed",
        "ipa": "/ɛd/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "ed",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ed",
    "siblings": [
      "fed",
      "led",
      "red",
      "wed",
      "shed",
      "sled",
      "fled"
    ],
    "uiNote": "b 發 /b/，ed 的 e 發短音 /ɛ/。和 red、shed、sled 是同一個 -ed 字族。",
    "specialNote": ""
  },
  "web": {
    "word": "web",
    "chunkType": "onset-rime",
    "ipa": "/wɛb/",
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
        "text": "eb",
        "ipa": "/ɛb/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "web",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-eb",
    "siblings": [
      "ebb"
    ],
    "uiNote": "w 發 /w/，eb 的 e 發短音 /ɛ/。-eb 字族不多，這個字靠意義記憶（蜘蛛網）會比較有效。",
    "specialNote": ""
  },
  "bell": {
    "word": "bell",
    "chunkType": "onset-rime",
    "ipa": "/bɛl/",
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
        "text": "ell",
        "ipa": "/ɛl/",
        "role": "rime（雙 l 只發一個 /l/）",
        "roleTag": "rime",
        "speakAs": "ell",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ell",
    "siblings": [
      "cell",
      "fell",
      "sell",
      "tell",
      "well",
      "yell",
      "shell",
      "smell"
    ],
    "uiNote": "b 發 /b/，ell 的 e 發短音 /ɛ/，ll 只發一個 /l/。和 shell、well、tell 是同一個 -ell 字族。",
    "specialNote": "雙 ll 只發一個 /l/"
  },
  "fish": {
    "word": "fish",
    "chunkType": "onset-rime",
    "ipa": "/fɪʃ/",
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
        "text": "ish",
        "ipa": "/ɪʃ/",
        "role": "rime（sh 是 digraph）",
        "roleTag": "rime",
        "speakAs": "ish",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ish",
    "siblings": [
      "dish",
      "wish",
      "swish"
    ],
    "uiNote": "f 發 /f/，ish 的 i 發短音 /ɪ/，sh 是二合字母發 /ʃ/。-ish 字族：dish（盤子）、wish（希望）。",
    "specialNote": "sh 在字尾仍為 digraph，發 /ʃ/"
  },
  "fork": {
    "word": "fork",
    "chunkType": "onset-rime",
    "ipa": "/fɔːrk/",
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
        "text": "ork",
        "ipa": "/ɔːrk/",
        "role": "rime（r-controlled）",
        "roleTag": "rime",
        "speakAs": "fork",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "or",
    "siblings": [
      "cork",
      "pork",
      "stork",
      "work"
    ],
    "uiNote": "f 發 /f/，ork 的 or 是 r 控制母音，整組唸 /ɔːr/，加上 k 就是 /ɔːrk/。-ork 字族：cork、pork、stork。",
    "specialNote": "r-controlled：or 整組不可拆"
  },
  "fire": {
    "word": "fire",
    "chunkType": "onset-rime",
    "ipa": "/faɪər/",
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
        "text": "ire",
        "ipa": "/aɪər/",
        "role": "rime（magic-e + r，i 發長音後接 r）",
        "roleTag": "rime",
        "speakAs": "fire",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ire（/aɪər/）",
    "siblings": [
      "hire",
      "tire",
      "wire",
      "entire",
      "admire"
    ],
    "uiNote": "f 發 /f/，ire 是 r 控制母音組合，i 發長音 /aɪ/ 後接 /ər/，整組唸 /aɪər/。-ire 字族：hire（雇用）、tire（輪胎）、wire（電線）。",
    "specialNote": "magic-e + r-controlled 複合：ire 整組不可拆"
  },
  "fan": {
    "word": "fan",
    "chunkType": "onset-rime",
    "ipa": "/fæn/",
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
        "text": "an",
        "ipa": "/æn/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "an",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-an",
    "siblings": [
      "can",
      "man",
      "pan",
      "ran",
      "tan",
      "van",
      "plan"
    ],
    "uiNote": "f 發 /f/，an 的 a 發短音 /æ/。和 can、man、pan 是同一個 -an 字族。",
    "specialNote": ""
  },
  "foot": {
    "word": "foot",
    "chunkType": "onset-rime",
    "ipa": "/fʊt/",
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
        "text": "oot",
        "ipa": "/ʊt/",
        "role": "rime（短 oo=/ʊ/）",
        "roleTag": "rime",
        "speakAs": "foot",
        "speakMode": "wholeWord"
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
    "uiNote": "f 發 /f/，oot 的 oo 發短音 /ʊ/（嘴巴微圓）。-oot 這個字族只有 foot（短音），注意不要和 boot、root（長音 /uː/）搞混。",
    "specialNote": "⚠️ oo 短音 /ʊ/，不同於 boot 的長音 /uː/"
  },
  "feet": {
    "word": "feet",
    "chunkType": "onset-rime",
    "ipa": "/fiːt/",
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
        "text": "eet",
        "ipa": "/iːt/",
        "role": "rime（vowel team ee=/iː/）",
        "roleTag": "rime",
        "speakAs": "eet",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ee",
    "siblings": [
      "bee",
      "fee",
      "see",
      "tree",
      "free",
      "meet",
      "beet",
      "fleet",
      "street"
    ],
    "uiNote": "f 發 /f/，eet 的 ee 是母音組合，固定發長音 /iː/。-eet 字族：meet（見面）、beet（甜菜）、fleet（艦隊）。",
    "specialNote": ""
  },
  "four": {
    "word": "four",
    "chunkType": "onset-rime",
    "ipa": "/fɔːr/",
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
        "text": "our",
        "ipa": "/ɔːr/",
        "role": "rime（r-controlled，ou 在 r 前變 /ɔː/）",
        "roleTag": "rime",
        "speakAs": "four",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "our（/ɔːr/）",
    "siblings": [
      "pour",
      "your",
      "court",
      "course"
    ],
    "uiNote": "f 發 /f/，our 在這裡是 r 控制，整組唸 /ɔːr/。注意：our 在不同字有不同讀音，four 的 our 唸 /ɔːr/，不是 our（我們的）的 /aʊər/。",
    "specialNote": "⚠️ our 有多種讀法：此字為 /ɔːr/"
  },
  "fox": {
    "word": "fox",
    "chunkType": "onset-rime",
    "ipa": "/fɑks/",
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
        "text": "ox",
        "ipa": "/ɑks/",
        "role": "rime（x=/ks/）",
        "roleTag": "rime",
        "speakAs": "ox",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ox",
    "siblings": [
      "box",
      "ox",
      "pox",
      "lox"
    ],
    "uiNote": "f 發 /f/，ox 的 o 發短音 /ɑ/，x 發 /ks/。-ox 字族：box（箱子）、ox（公牛）。",
    "specialNote": "x 固定發 /ks/"
  },
  "football": {
    "word": "football",
    "chunkType": "compound",
    "ipa": "/ˈfʊt.bɔːl/",
    "chunks": [
      {
        "text": "foot",
        "ipa": "/fʊt/",
        "role": "compound-part-1",
        "roleTag": "compound",
        "speakAs": "foot",
        "speakMode": "direct"
      },
      {
        "text": "ball",
        "ipa": "/bɔːl/",
        "role": "compound-part-2",
        "roleTag": "compound",
        "speakAs": "ball",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "compound",
    "anchor": "foot + ball",
    "siblings": [
      "baseball",
      "basketball",
      "volleyball"
    ],
    "uiNote": "football = foot（腳）+ ball（球）= 足球。這是複合字，兩個已知的字拼在一起，拼字就等於兩個字相加！",
    "specialNote": "複合字：foot（短 oo=/ʊ/）+ ball（all=/ɔːl/）"
  },
  "feather": {
    "word": "feather",
    "chunkType": "syllable",
    "ipa": "/ˈfɛð.ər/",
    "chunks": [
      {
        "text": "f",
        "ipa": "/f/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "f",
        "speakMode": "phonetic"
      },
      {
        "text": "eath",
        "ipa": "/ɛð/",
        "role": "syllable-1 rime（ea 在此短音 /ɛ/；th 發有聲 /ð/）",
        "roleTag": "rime",
        "speakAs": "feather",
        "speakMode": "wholeWord"
      },
      {
        "text": "er",
        "ipa": "/ər/",
        "role": "syllable-2（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "feather",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "exception",
    "anchor": "ea（短音 /ɛ/ 例外）",
    "siblings": [
      "bread",
      "dead",
      "head",
      "lead",
      "read"
    ],
    "uiNote": "feath-er 兩個音節。ea 在這裡不發長音 /iː/，而是發短音 /ɛ/，是例外。th 發有聲音 /ð/（舌尖碰牙）。er 發輕聲 /ər/。",
    "specialNote": "⚠️ ea 在此發短音 /ɛ/（例外，一般 ea=/iː/）"
  },
  "lion": {
    "word": "lion",
    "chunkType": "syllable",
    "ipa": "/ˈlaɪ.ən/",
    "chunks": [
      {
        "text": "li",
        "ipa": "/laɪ/",
        "role": "syllable-1（i 發長音 /aɪ/，VCV）",
        "roleTag": "syllable",
        "speakAs": "lie",
        "speakMode": "phonetic"
      },
      {
        "text": "on",
        "ipa": "/ən/",
        "role": "syllable-2（弱化 schwa）",
        "roleTag": "syllable",
        "speakAs": "lion",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "VCV",
    "siblings": [
      "Ryan",
      "pion"
    ],
    "uiNote": "li-on 兩個音節。第一個 li 的 i 發長音 /aɪ/（因為是開放音節 VCV）。第二個音節 on 發輕聲 /ən/。",
    "specialNote": "VCV 規則：前 i 發長音 /aɪ/"
  },
  "lock": {
    "word": "lock",
    "chunkType": "onset-rime",
    "ipa": "/lɑk/",
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
        "text": "ock",
        "ipa": "/ɑk/",
        "role": "rime（ck 是 digraph）",
        "roleTag": "rime",
        "speakAs": "ock",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ock",
    "siblings": [
      "block",
      "clock",
      "dock",
      "knock",
      "mock",
      "rock",
      "sock",
      "stock"
    ],
    "uiNote": "l 發 /l/，ock 的 o 發短音 /ɑ/，ck 是二合字母發 /k/。-ock 字族：rock、sock、clock、block！",
    "specialNote": "ck 是 digraph，整組發 /k/"
  },
  "leaf": {
    "word": "leaf",
    "chunkType": "onset-rime",
    "ipa": "/liːf/",
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
        "text": "eaf",
        "ipa": "/iːf/",
        "role": "rime（vowel team ea=/iː/）",
        "roleTag": "rime",
        "speakAs": "leaf",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ea（/iː/）",
    "siblings": [
      "bean",
      "meal",
      "seal",
      "real",
      "heap",
      "neat",
      "team"
    ],
    "uiNote": "l 發 /l/，eaf 裡的 ea 是母音組合，發長音 /iː/。-eaf 字族：leaf（葉子）、deaf（注意：deaf 的 ea 是例外短音 /ɛ/）。",
    "specialNote": ""
  },
  "log": {
    "word": "log",
    "chunkType": "onset-rime",
    "ipa": "/lɑɡ/",
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
        "text": "og",
        "ipa": "/ɑɡ/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "og",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-og",
    "siblings": [
      "bog",
      "cog",
      "dog",
      "fog",
      "hog",
      "jog",
      "frog"
    ],
    "uiNote": "l 發 /l/，og 的 o 發短音 /ɑ/。-og 字族：dog、fog、jog、frog。",
    "specialNote": ""
  },
  "lip": {
    "word": "lip",
    "chunkType": "onset-rime",
    "ipa": "/lɪp/",
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
        "text": "ip",
        "ipa": "/ɪp/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "ip",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ip",
    "siblings": [
      "dip",
      "hip",
      "rip",
      "sip",
      "tip",
      "zip",
      "chip",
      "drip",
      "grip",
      "skip",
      "trip"
    ],
    "uiNote": "l 發 /l/，ip 的 i 發短音 /ɪ/。-ip 字族超多：dip、tip、zip、chip、drip、skip！",
    "specialNote": ""
  },
  "lamp": {
    "word": "lamp",
    "chunkType": "onset-rime",
    "ipa": "/læmp/",
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
        "text": "amp",
        "ipa": "/æmp/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "amp",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-amp",
    "siblings": [
      "camp",
      "damp",
      "ramp",
      "stamp",
      "clamp",
      "cramp",
      "tramp"
    ],
    "uiNote": "l 發 /l/，amp 的 a 發短音 /æ/。-amp 字族：camp（露營）、damp（潮濕）、stamp（郵票）。",
    "specialNote": ""
  },
  "letter": {
    "word": "letter",
    "chunkType": "syllable",
    "ipa": "/ˈlɛt.ər/",
    "chunks": [
      {
        "text": "l",
        "ipa": "/l/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "l",
        "speakMode": "phonetic"
      },
      {
        "text": "et",
        "ipa": "/ɛt/",
        "role": "syllable-1 rime",
        "roleTag": "rime",
        "speakAs": "et",
        "speakMode": "direct"
      },
      {
        "text": "ter",
        "ipa": "/tər/",
        "role": "syllable-2（tt 從中切，er 弱化）",
        "roleTag": "syllable",
        "speakAs": "letter",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "er（弱化 /ər/）",
    "siblings": [
      "butter",
      "better",
      "bitter",
      "clutter"
    ],
    "uiNote": "let-ter 兩個音節。tt 從中切。第一個 let 的 e 發短音 /ɛ/。第二個 ter 的 er 發輕聲 /ər/。",
    "specialNote": "雙 tt 從中間切"
  },
  "ladder": {
    "word": "ladder",
    "chunkType": "syllable",
    "ipa": "/ˈlæd.ər/",
    "chunks": [
      {
        "text": "l",
        "ipa": "/l/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "l",
        "speakMode": "phonetic"
      },
      {
        "text": "ad",
        "ipa": "/æd/",
        "role": "syllable-1 rime",
        "roleTag": "rime",
        "speakAs": "ad",
        "speakMode": "direct"
      },
      {
        "text": "der",
        "ipa": "/dər/",
        "role": "syllable-2（dd 從中切，er 弱化）",
        "roleTag": "syllable",
        "speakAs": "ladder",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "er（弱化 /ər/）",
    "siblings": [
      "adder",
      "madder",
      "sadder"
    ],
    "uiNote": "lad-der 兩個音節。dd 從中切。第一個 lad 的 a 發短音 /æ/。第二個 der 的 er 發輕聲 /ər/。",
    "specialNote": "雙 dd 從中間切"
  },
  "leg": {
    "word": "leg",
    "chunkType": "onset-rime",
    "ipa": "/lɛɡ/",
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
        "text": "eg",
        "ipa": "/ɛɡ/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "eg",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-eg",
    "siblings": [
      "beg",
      "keg",
      "peg",
      "dreg"
    ],
    "uiNote": "l 發 /l/，eg 的 e 發短音 /ɛ/。-eg 字族：beg（乞求）、keg（小桶）、peg（掛鉤）。",
    "specialNote": ""
  },
  "light bulb": {
    "word": "light bulb",
    "chunkType": "compound",
    "ipa": "/ˈlaɪt bʌlb/",
    "chunks": [
      {
        "text": "light",
        "ipa": "/laɪt/",
        "role": "compound-part-1（igh 是特殊 vowel team）",
        "roleTag": "compound",
        "speakAs": "light",
        "speakMode": "direct"
      },
      {
        "text": "bulb",
        "ipa": "/bʌlb/",
        "role": "compound-part-2",
        "roleTag": "compound",
        "speakAs": "bulb",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "compound",
    "anchor": "light + bulb",
    "siblings": [
      "flashlight",
      "spotlight",
      "sunlight"
    ],
    "uiNote": "light bulb = light（光）+ bulb（球形物）= 燈泡。light 的 igh 是特殊三字母組合，發 /aɪ/，t 在結尾。bulb 的 u 發短音 /ʌ/。",
    "specialNote": "igh 是三字母組合（trigraph），整組發 /aɪ/，gh 靜音"
  },
  "bib": {
    "word": "bib",
    "chunkType": "onset-rime",
    "ipa": "/bɪb/",
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
        "text": "ib",
        "ipa": "/ɪb/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "bib",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ib",
    "siblings": [
      "fib",
      "jib",
      "rib"
    ],
    "uiNote": "b 發 /b/，ib 的 i 發短音 /ɪ/。-ib 字族：rib（肋骨）、fib（謊話）。",
    "specialNote": ""
  },
  "pig": {
    "word": "pig",
    "chunkType": "onset-rime",
    "ipa": "/pɪɡ/",
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
        "text": "ig",
        "ipa": "/ɪɡ/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "ig",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ig",
    "siblings": [
      "big",
      "dig",
      "fig",
      "gig",
      "jig",
      "rig",
      "wig",
      "twig"
    ],
    "uiNote": "p 發 /p/，ig 的 i 發短音 /ɪ/。-ig 字族：big、dig、wig、twig，換開頭就能拼！",
    "specialNote": ""
  },
  "milk": {
    "word": "milk",
    "chunkType": "onset-rime",
    "ipa": "/mɪlk/",
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
        "text": "ilk",
        "ipa": "/ɪlk/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "milk",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ilk",
    "siblings": [
      "silk",
      "bilk"
    ],
    "uiNote": "m 發 /m/，ilk 的 i 發短音 /ɪ/。-ilk 字族：silk（絲綢）。記憶錨點可用 milk 的圖像（牛奶）來輔助。",
    "specialNote": ""
  },
  "six": {
    "word": "six",
    "chunkType": "onset-rime",
    "ipa": "/sɪks/",
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
        "text": "ix",
        "ipa": "/ɪks/",
        "role": "rime（x=/ks/）",
        "roleTag": "rime",
        "speakAs": "six",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ix",
    "siblings": [
      "fix",
      "mix",
      "nix",
      "ax"
    ],
    "uiNote": "s 發 /s/，ix 的 i 發短音 /ɪ/，x 固定發 /ks/。-ix 字族：fix（修理）、mix（混合）。",
    "specialNote": "x 固定發 /ks/"
  },
  "chick": {
    "word": "chick",
    "chunkType": "onset-rime",
    "ipa": "/tʃɪk/",
    "chunks": [
      {
        "text": "ch",
        "ipa": "/tʃ/",
        "role": "onset（digraph）",
        "roleTag": "onset",
        "speakAs": "ch",
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
    "memoryAnchorType": "digraph",
    "anchor": "ch + -ick",
    "siblings": [
      "kick",
      "lick",
      "pick",
      "sick",
      "tick",
      "stick",
      "thick",
      "brick"
    ],
    "uiNote": "ch 是二合字母發 /tʃ/，ick 的 i 發短音 /ɪ/，ck 是二合字母發 /k/。整個字有兩組二合字母！",
    "specialNote": "兩組 digraph：ch（onset）和 ck（rime 內）"
  },
  "lips": {
    "word": "lips",
    "chunkType": "morpheme",
    "ipa": "/lɪps/",
    "chunks": [
      {
        "text": "lip",
        "ipa": "/lɪp/",
        "role": "morpheme-root",
        "roleTag": "root",
        "speakAs": "lip",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/s/",
        "role": "morpheme-suffix（複數 -s）",
        "roleTag": "suffix",
        "speakAs": "s",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（複數後綴）",
    "siblings": [
      "dogs",
      "cats",
      "beds"
    ],
    "uiNote": "lips = lip（嘴唇）+ s（複數），因為嘴唇有兩片，所以加 s。-s 是最常見的複數後綴。",
    "specialNote": "複數後綴 -s"
  },
  "jacks": {
    "word": "jacks",
    "chunkType": "morpheme",
    "ipa": "/dʒæks/",
    "chunks": [
      {
        "text": "jack",
        "ipa": "/dʒæk/",
        "role": "morpheme-root",
        "roleTag": "root",
        "speakAs": "jack",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/s/",
        "role": "morpheme-suffix（複數 -s）",
        "roleTag": "suffix",
        "speakAs": "s",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（複數後綴）",
    "siblings": [
      "rocks",
      "blocks",
      "clocks"
    ],
    "uiNote": "jacks = jack（撿石子遊戲的道具）+ s（複數）。jack 的 a 發短音 /æ/，ck 是二合字母發 /k/。",
    "specialNote": "複數後綴 -s；ck 是 digraph"
  },
  "jar": {
    "word": "jar",
    "chunkType": "onset-rime",
    "ipa": "/dʒɑːr/",
    "chunks": [
      {
        "text": "j",
        "ipa": "/dʒ/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "j",
        "speakMode": "phonetic"
      },
      {
        "text": "ar",
        "ipa": "/ɑːr/",
        "role": "rime（r-controlled）",
        "roleTag": "rime",
        "speakAs": "jar",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ar",
    "siblings": [
      "bar",
      "car",
      "far",
      "star",
      "scar"
    ],
    "uiNote": "j 發 /dʒ/，ar 是 r 控制母音，整組唸 /ɑːr/。和 car、star 是同一個 -ar 字族。",
    "specialNote": "r-controlled：ar 整組不可拆"
  },
  "jug": {
    "word": "jug",
    "chunkType": "onset-rime",
    "ipa": "/dʒʌɡ/",
    "chunks": [
      {
        "text": "j",
        "ipa": "/dʒ/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "j",
        "speakMode": "phonetic"
      },
      {
        "text": "ug",
        "ipa": "/ʌɡ/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "ug",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ug",
    "siblings": [
      "bug",
      "dug",
      "hug",
      "mug",
      "rug",
      "tug",
      "drug",
      "slug",
      "shrug"
    ],
    "uiNote": "j 發 /dʒ/，ug 的 u 發短音 /ʌ/。-ug 字族：bug、hug、rug、mug、slug！",
    "specialNote": ""
  },
  "jump": {
    "word": "jump",
    "chunkType": "onset-rime",
    "ipa": "/dʒʌmp/",
    "chunks": [
      {
        "text": "j",
        "ipa": "/dʒ/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "j",
        "speakMode": "phonetic"
      },
      {
        "text": "ump",
        "ipa": "/ʌmp/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "ump",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ump",
    "siblings": [
      "bump",
      "dump",
      "hump",
      "lump",
      "pump",
      "rump",
      "stump",
      "clump",
      "grump",
      "trump"
    ],
    "uiNote": "j 發 /dʒ/，ump 的 u 發短音 /ʌ/，mp 是字尾輔音叢。-ump 字族超豐富：bump、dump、pump、stump！換開頭就能拼一整族！",
    "specialNote": ""
  },
  "jeep": {
    "word": "jeep",
    "chunkType": "onset-rime",
    "ipa": "/dʒiːp/",
    "chunks": [
      {
        "text": "j",
        "ipa": "/dʒ/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "j",
        "speakMode": "phonetic"
      },
      {
        "text": "eep",
        "ipa": "/iːp/",
        "role": "rime（vowel team ee=/iː/）",
        "roleTag": "rime",
        "speakAs": "eep",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ee",
    "siblings": [
      "beep",
      "deep",
      "keep",
      "peep",
      "seep",
      "weep",
      "sleep",
      "creep",
      "steep"
    ],
    "uiNote": "j 發 /dʒ/，eep 的 ee 是母音組合，發長音 /iː/。-eep 字族：beep（嗶嗶聲）、deep（深）、sleep（睡覺）。",
    "specialNote": ""
  },
  "hanger": {
    "word": "hanger",
    "chunkType": "syllable",
    "ipa": "/ˈhæŋ.ər/",
    "chunks": [
      {
        "text": "h",
        "ipa": "/h/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "h",
        "speakMode": "phonetic"
      },
      {
        "text": "ang",
        "ipa": "/æŋ/",
        "role": "syllable-1 rime（ng 是 digraph）",
        "roleTag": "rime",
        "speakAs": "hang",
        "speakMode": "direct"
      },
      {
        "text": "er",
        "ipa": "/ər/",
        "role": "syllable-2（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "hanger",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "er（弱化 /ər/）",
    "siblings": [
      "singer",
      "finger",
      "hunger",
      "ranger"
    ],
    "uiNote": "hang-er 兩個音節。ang 的 ng 是二合字母，發 /ŋ/（鼻音）。er 發輕聲 /ər/。",
    "specialNote": "ng 是 digraph，發 /ŋ/"
  },
  "horn": {
    "word": "horn",
    "chunkType": "onset-rime",
    "ipa": "/hɔːrn/",
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
        "text": "orn",
        "ipa": "/ɔːrn/",
        "role": "rime（r-controlled，同 corn）",
        "roleTag": "rime",
        "speakAs": "horn",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "or",
    "siblings": [
      "born",
      "corn",
      "torn",
      "worn",
      "scorn"
    ],
    "uiNote": "h 發 /h/，orn 的 or 是 r 控制母音。和 corn、born、torn 是同一個 -orn 字族。",
    "specialNote": "r-controlled：or 整組不可拆"
  },
  "rainbow": {
    "word": "rainbow",
    "chunkType": "compound",
    "ipa": "/ˈreɪn.boʊ/",
    "chunks": [
      {
        "text": "rain",
        "ipa": "/reɪn/",
        "role": "compound-part-1（ai 是 vowel team）",
        "roleTag": "compound",
        "speakAs": "rain",
        "speakMode": "direct"
      },
      {
        "text": "bow",
        "ipa": "/boʊ/",
        "role": "compound-part-2（ow=/oʊ/）",
        "roleTag": "compound",
        "speakAs": "bow",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "compound",
    "anchor": "rain + bow",
    "siblings": [
      "sunbow",
      "raincoat",
      "raindrop"
    ],
    "uiNote": "rainbow = rain（雨）+ bow（弓形）= 彩虹（雨後的弓形）。rain 的 ai 發 /eɪ/，bow 的 ow 發 /oʊ/（不是 cow 的 /aʊ/）。",
    "specialNote": "bow 在此發 /boʊ/（弓形），不是 /baʊ/（鞠躬）"
  },
  "rake": {
    "word": "rake",
    "chunkType": "onset-rime",
    "ipa": "/reɪk/",
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
        "text": "ake",
        "ipa": "/eɪk/",
        "role": "rime（magic-e）",
        "roleTag": "rime",
        "speakAs": "ake",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "magic-e",
    "anchor": "-ake",
    "siblings": [
      "bake",
      "cake",
      "fake",
      "lake",
      "make",
      "sake",
      "take",
      "wake",
      "shake",
      "flake",
      "snake"
    ],
    "uiNote": "r 發 /r/，ake 是 magic-e 字族，e 靜音讓 a 發長音 /eɪ/。-ake 字族超豐富：cake、lake、make、snake！",
    "specialNote": "magic-e：字尾 e 靜音，使 a 發長音 /eɪ/"
  },
  "rooster": {
    "word": "rooster",
    "chunkType": "syllable",
    "ipa": "/ˈruːs.tər/",
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
        "text": "oos",
        "ipa": "/uːs/",
        "role": "syllable-1 rime（長 oo=/uː/）",
        "roleTag": "rime",
        "speakAs": "roost",
        "speakMode": "direct"
      },
      {
        "text": "ter",
        "ipa": "/tər/",
        "role": "syllable-2（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "rooster",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "oo（長音 /uː/）",
    "siblings": [
      "boost",
      "roost",
      "goose",
      "loose"
    ],
    "uiNote": "roos-ter 兩個音節。oo 在這裡是長音 /uː/（像 moon 的聲音）。ter 發輕聲 /tər/。",
    "specialNote": ""
  },
  "rattle": {
    "word": "rattle",
    "chunkType": "syllable",
    "ipa": "/ˈræt.əl/",
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
        "text": "at",
        "ipa": "/æt/",
        "role": "syllable-1 rime",
        "roleTag": "rime",
        "speakAs": "at",
        "speakMode": "direct"
      },
      {
        "text": "tle",
        "ipa": "/əl/",
        "role": "syllable-2（consonant + le）",
        "roleTag": "syllable",
        "speakAs": "rattle",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "consonant + le",
    "siblings": [
      "battle",
      "cattle",
      "little",
      "bottle",
      "kettle"
    ],
    "uiNote": "rat-tle 兩個音節。tt 從中切，第一個 rat 的 a 發短音 /æ/。字尾 tle 是輔音 + le，發 /əl/，這是常見結尾模式。",
    "specialNote": "consonant + le 結尾為獨立末音節"
  },
  "rocks": {
    "word": "rocks",
    "chunkType": "morpheme",
    "ipa": "/rɑks/",
    "chunks": [
      {
        "text": "rock",
        "ipa": "/rɑk/",
        "role": "morpheme-root",
        "roleTag": "root",
        "speakAs": "rock",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/s/",
        "role": "morpheme-suffix（複數 -s）",
        "roleTag": "suffix",
        "speakAs": "s",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（複數後綴）",
    "siblings": [],
    "uiNote": "rocks = rock（岩石）+ s（複數）。rock 的 o 發短音 /ɑ/，ck 是二合字母發 /k/。",
    "specialNote": "複數後綴 -s"
  },
  "roof": {
    "word": "roof",
    "chunkType": "onset-rime",
    "ipa": "/ruːf/",
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
        "text": "oof",
        "ipa": "/uːf/",
        "role": "rime（長 oo=/uː/）",
        "roleTag": "rime",
        "speakAs": "roof",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "oo（長音 /uː/）",
    "siblings": [
      "hoof",
      "poof",
      "moon",
      "food",
      "cool"
    ],
    "uiNote": "r 發 /r/，oof 的 oo 發長音 /uː/。-oof 字族不多（hoof），但 oo 的長音 /uː/ 在 moon、food、cool 都有。",
    "specialNote": ""
  },
  "ruler": {
    "word": "ruler",
    "chunkType": "syllable",
    "ipa": "/ˈruː.lər/",
    "chunks": [
      {
        "text": "ru",
        "ipa": "/ruː/",
        "role": "syllable-1（VCV，u 發長音）",
        "roleTag": "syllable",
        "speakAs": "roo",
        "speakMode": "phonetic"
      },
      {
        "text": "ler",
        "ipa": "/lər/",
        "role": "syllable-2（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "ruler",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "er（弱化 /ər/）",
    "siblings": [
      "cooler",
      "dealer"
    ],
    "uiNote": "ru-ler 兩個音節。第一個 ru 的 u 在開放音節（VCV），發長音 /uː/。第二個 ler 的 er 發輕聲 /ər/。",
    "specialNote": "VCV 規則：前 u 發長音 /uː/"
  },
  "rope": {
    "word": "rope",
    "chunkType": "onset-rime",
    "ipa": "/roʊp/",
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
        "text": "ope",
        "ipa": "/oʊp/",
        "role": "rime（magic-e，o 發長音）",
        "roleTag": "rime",
        "speakAs": "ope",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "magic-e",
    "anchor": "-ope",
    "siblings": [
      "cope",
      "dope",
      "hope",
      "mope",
      "pope",
      "slope",
      "scope"
    ],
    "uiNote": "r 發 /r/，ope 是 magic-e，e 靜音讓 o 發長音 /oʊ/。-ope 字族：hope（希望）、cope（應付）、slope（坡道）。",
    "specialNote": "magic-e：字尾 e 靜音，使 o 發長音 /oʊ/"
  },
  "refrigerator": {
    "word": "refrigerator",
    "chunkType": "morpheme + syllable",
    "ipa": "/rɪˈfrɪdʒ.ər.eɪ.tər/",
    "chunks": [
      {
        "text": "re",
        "ipa": "/rɪ/",
        "role": "morpheme-prefix（re- 表「再次」）",
        "roleTag": "prefix",
        "speakAs": "rih",
        "speakMode": "phonetic"
      },
      {
        "text": "frig",
        "ipa": "/frɪdʒ/",
        "role": "syllable（字根縮寫自 frigid）",
        "roleTag": "syllable",
        "speakAs": "fridge",
        "speakMode": "direct"
      },
      {
        "text": "er",
        "ipa": "/ər/",
        "role": "syllable（r-controlled）",
        "roleTag": "syllable",
        "speakAs": "refrigerator",
        "speakMode": "wholeWord"
      },
      {
        "text": "a",
        "ipa": "/eɪ/",
        "role": "syllable（開放音節，長音）",
        "roleTag": "syllable",
        "speakAs": "refrigerator",
        "speakMode": "wholeWord"
      },
      {
        "text": "tor",
        "ipa": "/tər/",
        "role": "syllable（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "refrigerator",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "prefix",
    "anchor": "re-",
    "siblings": [
      "rewrite",
      "retell",
      "reuse"
    ],
    "uiNote": "re-frig-er-a-tor 五個音節，是最難的長字之一！拍手練習：re-FRIG-er-a-tor。重音在第二個音節 FRIG。日常口語常縮短叫 fridge /frɪdʒ/。",
    "specialNote": "五音節長字；日常口語可用縮短形 fridge"
  },
  "key": {
    "word": "key",
    "chunkType": "onset-rime",
    "ipa": "/kiː/",
    "chunks": [
      {
        "text": "k",
        "ipa": "/k/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "k",
        "speakMode": "phonetic"
      },
      {
        "text": "ey",
        "ipa": "/iː/",
        "role": "rime（vowel team ey=/iː/，例外）",
        "roleTag": "rime",
        "speakAs": "ee",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "exception",
    "anchor": "ey（/iː/ 例外）",
    "siblings": [
      "monkey",
      "donkey",
      "honey",
      "money"
    ],
    "uiNote": "k 發 /k/，ey 在這裡發 /iː/（長音 e）。一般 ey 在多音節字尾發 /i/（如 monkey），但 key 是單音節，ey 發 /iː/。",
    "specialNote": "⚠️ ey 發 /iː/，與多音節字尾的 ey=/i/ 不同"
  },
  "kiss": {
    "word": "kiss",
    "chunkType": "onset-rime",
    "ipa": "/kɪs/",
    "chunks": [
      {
        "text": "k",
        "ipa": "/k/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "k",
        "speakMode": "phonetic"
      },
      {
        "text": "iss",
        "ipa": "/ɪs/",
        "role": "rime（雙 s 只發一個 /s/）",
        "roleTag": "rime",
        "speakAs": "iss",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-iss",
    "siblings": [
      "hiss",
      "miss",
      "bliss"
    ],
    "uiNote": "k 發 /k/，iss 的 i 發短音 /ɪ/，ss 只發一個 /s/。-iss 字族：hiss（嘶嘶聲）、miss（思念 / 小姐）。",
    "specialNote": "雙 ss 只發一個 /s/"
  },
  "kite": {
    "word": "kite",
    "chunkType": "onset-rime",
    "ipa": "/kaɪt/",
    "chunks": [
      {
        "text": "k",
        "ipa": "/k/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "k",
        "speakMode": "phonetic"
      },
      {
        "text": "ite",
        "ipa": "/aɪt/",
        "role": "rime（magic-e，i 發長音）",
        "roleTag": "rime",
        "speakAs": "ite",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "magic-e",
    "anchor": "-ite",
    "siblings": [
      "bite",
      "cite",
      "mite",
      "site",
      "white",
      "write",
      "quite",
      "invite"
    ],
    "uiNote": "k 發 /k/，ite 是 magic-e，e 靜音讓 i 發長音 /aɪ/。-ite 字族：bite（咬）、white（白色）、write（寫）。",
    "specialNote": "magic-e：字尾 e 靜音，使 i 發長音 /aɪ/"
  },
  "king": {
    "word": "king",
    "chunkType": "onset-rime",
    "ipa": "/kɪŋ/",
    "chunks": [
      {
        "text": "k",
        "ipa": "/k/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "k",
        "speakMode": "phonetic"
      },
      {
        "text": "ing",
        "ipa": "/ɪŋ/",
        "role": "rime（ng 是 digraph）",
        "roleTag": "rime",
        "speakAs": "ing",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ing",
    "siblings": [
      "bring",
      "ring",
      "sing",
      "sting",
      "swing",
      "thing",
      "wing",
      "spring",
      "string"
    ],
    "uiNote": "k 發 /k/，ing 的 i 發短音 /ɪ/，ng 是二合字母發 /ŋ/（鼻音，不是 n+g 分開）。-ing 字族超多：ring、sing、spring！",
    "specialNote": "ng 是 digraph，發 /ŋ/，不分開唸"
  },
  "kick": {
    "word": "kick",
    "chunkType": "onset-rime",
    "ipa": "/kɪk/",
    "chunks": [
      {
        "text": "k",
        "ipa": "/k/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "k",
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
      "lick",
      "nick",
      "pick",
      "sick",
      "tick",
      "trick",
      "thick",
      "brick"
    ],
    "uiNote": "k 發 /k/，ick 和 sick、pick、thick 是同一個 -ick 字族。ck 是二合字母發 /k/。",
    "specialNote": "ck 是 digraph"
  },
  "iguana": {
    "word": "iguana",
    "chunkType": "syllable",
    "ipa": "/ɪˈɡwɑː.nə/",
    "chunks": [
      {
        "text": "i",
        "ipa": "/ɪ/",
        "role": "syllable-1（母音開頭，弱化）",
        "roleTag": "syllable",
        "speakAs": "ih",
        "speakMode": "phonetic"
      },
      {
        "text": "gua",
        "ipa": "/ɡwɑː/",
        "role": "syllable-2（gu 組合，u 影響發音）",
        "roleTag": "syllable",
        "speakAs": "gwa",
        "speakMode": "phonetic"
      },
      {
        "text": "na",
        "ipa": "/nə/",
        "role": "syllable-3（弱化 schwa）",
        "roleTag": "syllable",
        "speakAs": "iguana",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "3-syllable",
    "siblings": [
      "banana",
      "piranha"
    ],
    "uiNote": "i-gua-na 三個音節：i-GWAA-na。重音在第二個音節 gua，gu 在這裡讀 /gw/（不是 /g/ + /u/ 分開）。這是西班牙語外來字。",
    "specialNote": "西班牙語外來字；gu 在此發 /ɡw/"
  },
  "insects": {
    "word": "insects",
    "chunkType": "morpheme",
    "ipa": "/ˈɪn.sɛkts/",
    "chunks": [
      {
        "text": "in",
        "ipa": "/ɪn/",
        "role": "morpheme-prefix（in- 表「在內」）",
        "roleTag": "prefix",
        "speakAs": "in",
        "speakMode": "direct"
      },
      {
        "text": "sect",
        "ipa": "/sɛkt/",
        "role": "morpheme-root（sect 表「切」）",
        "roleTag": "root",
        "speakAs": "sect",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/s/",
        "role": "morpheme-suffix（複數 -s）",
        "roleTag": "suffix",
        "speakAs": "s",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "prefix",
    "anchor": "in-",
    "siblings": [
      "inside",
      "internal",
      "inject"
    ],
    "uiNote": "in-sect-s 三個部分。in- 表示「在裡面 / 刻入」，sect 表示「切段」，昆蟲身體有分節，所以叫 insect。-s 是複數。",
    "specialNote": "詞素拆分有助於理解語義"
  },
  "instruments": {
    "word": "instruments",
    "chunkType": "morpheme + syllable",
    "ipa": "/ˈɪn.strə.mənts/",
    "chunks": [
      {
        "text": "in",
        "ipa": "/ɪn/",
        "role": "morpheme-prefix",
        "roleTag": "prefix",
        "speakAs": "in",
        "speakMode": "direct"
      },
      {
        "text": "stru",
        "ipa": "/struː/",
        "role": "syllable（字根 stru- 表「建造」）",
        "roleTag": "syllable",
        "speakAs": "stroo",
        "speakMode": "phonetic"
      },
      {
        "text": "ment",
        "ipa": "/mənt/",
        "role": "morpheme-suffix（-ment 表結果）",
        "roleTag": "suffix",
        "speakAs": "ment",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/s/",
        "role": "morpheme-suffix（複數）",
        "roleTag": "suffix",
        "speakAs": "s",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-ment",
    "siblings": [
      "instrument",
      "movement",
      "payment",
      "treatment"
    ],
    "uiNote": "in-stru-ment-s 四個部分。-ment 是後綴，把動詞變名詞，表示「工具 / 結果」。instruments 是 instrument（樂器 / 儀器）的複數。",
    "specialNote": "-ment 是名詞化後綴"
  },
  "dishes": {
    "word": "dishes",
    "chunkType": "morpheme",
    "ipa": "/ˈdɪʃ.ɪz/",
    "chunks": [
      {
        "text": "dish",
        "ipa": "/dɪʃ/",
        "role": "morpheme-root",
        "roleTag": "root",
        "speakAs": "dish",
        "speakMode": "direct"
      },
      {
        "text": "es",
        "ipa": "/ɪz/",
        "role": "morpheme-suffix（字尾 sh 後複數用 -es 發 /ɪz/）",
        "roleTag": "suffix",
        "speakAs": "iz",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-es（/ɪz/ 複數）",
    "siblings": [
      "brushes",
      "churches",
      "foxes",
      "watches"
    ],
    "uiNote": "dishes = dish（盤子）+ es（複數）。字尾是 sh，所以複數加 es 而非 s，讀 /ɪz/。這個規則：字尾有 s/sh/ch/x 的字複數加 es。",
    "specialNote": "複數後綴 -es（/ɪz/），字尾為 sh 時使用"
  },
  "wig": {
    "word": "wig",
    "chunkType": "onset-rime",
    "ipa": "/wɪɡ/",
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
        "text": "ig",
        "ipa": "/ɪɡ/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "ig",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ig",
    "siblings": [
      "big",
      "dig",
      "fig",
      "jig",
      "pig",
      "twig"
    ],
    "uiNote": "w 發 /w/，ig 的 i 發短音 /ɪ/。和 pig、big、dig 是同一個 -ig 字族。",
    "specialNote": ""
  },
  "goat": {
    "word": "goat",
    "chunkType": "onset-rime",
    "ipa": "/ɡoʊt/",
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
        "text": "oat",
        "ipa": "/oʊt/",
        "role": "rime（vowel team oa=/oʊ/）",
        "roleTag": "rime",
        "speakAs": "oat",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "oa",
    "siblings": [
      "boat",
      "coat",
      "moat",
      "road",
      "toad",
      "float"
    ],
    "uiNote": "g 發 /ɡ/，oat 的 oa 是母音組合，固定發 /oʊ/。和 coat、boat、road 是同一個 -oa 字族。",
    "specialNote": ""
  },
  "gate": {
    "word": "gate",
    "chunkType": "onset-rime",
    "ipa": "/ɡeɪt/",
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
        "text": "ate",
        "ipa": "/eɪt/",
        "role": "rime（magic-e）",
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
      "hate",
      "late",
      "mate",
      "rate",
      "skate"
    ],
    "uiNote": "g 發 /ɡ/，ate 是 magic-e，和 late、date、skate 同一個 -ate 字族。",
    "specialNote": "magic-e：字尾 e 靜音，使 a 發長音 /eɪ/"
  },
  "guitar": {
    "word": "guitar",
    "chunkType": "syllable",
    "ipa": "/ɡɪˈtɑːr/",
    "chunks": [
      {
        "text": "gui",
        "ipa": "/ɡɪ/",
        "role": "syllable-1（gu 前面的 u 靜音）",
        "roleTag": "syllable",
        "speakAs": "gih",
        "speakMode": "phonetic"
      },
      {
        "text": "tar",
        "ipa": "/tɑːr/",
        "role": "syllable-2（r-controlled）",
        "roleTag": "syllable",
        "speakAs": "guitar",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ar",
    "siblings": [],
    "uiNote": "gui-tar 兩個音節，重音在第二個。gui 的 u 是靜音，整個 gui 唸 /ɡɪ/。tar 的 ar 是 r 控制母音唸 /ɑːr/。",
    "specialNote": "⚠️ u 在 gui 中靜音；重音在第二音節"
  },
  "garden": {
    "word": "garden",
    "chunkType": "syllable",
    "ipa": "/ˈɡɑːr.dən/",
    "chunks": [
      {
        "text": "gar",
        "ipa": "/ɡɑːr/",
        "role": "syllable-1（r-controlled）",
        "roleTag": "syllable",
        "speakAs": "gar",
        "speakMode": "direct"
      },
      {
        "text": "den",
        "ipa": "/dən/",
        "role": "syllable-2（弱化 schwa）",
        "roleTag": "syllable",
        "speakAs": "garden",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ar",
    "siblings": [
      "pardon",
      "carbon"
    ],
    "uiNote": "gar-den 兩個音節。第一個 gar 的 ar 是 r 控制母音，唸 /ɑːr/。第二個 den 的 e 弱化成輕聲 /ə/。",
    "specialNote": ""
  },
  "goose": {
    "word": "goose",
    "chunkType": "onset-rime",
    "ipa": "/ɡuːs/",
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
        "text": "oose",
        "ipa": "/uːs/",
        "role": "rime（長 oo=/uː/，s 在此發 /s/）",
        "roleTag": "rime",
        "speakAs": "goose",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "oo（長音 /uː/）",
    "siblings": [
      "moose",
      "loose",
      "noose"
    ],
    "uiNote": "g 發 /ɡ/，oose 的 oo 發長音 /uː/。-oose 字族：moose（麋鹿）、loose（鬆的）、noose（套索）。",
    "specialNote": ""
  },
  "gas": {
    "word": "gas",
    "chunkType": "onset-rime",
    "ipa": "/ɡæs/",
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
        "text": "as",
        "ipa": "/æs/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "gas",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-as",
    "siblings": [
      "has",
      "jazz"
    ],
    "uiNote": "g 發 /ɡ/，as 的 a 發短音 /æ/。-as 字族較小，用圖像（瓦斯 / 汽車加油）來輔助記憶。",
    "specialNote": ""
  },
  "girl": {
    "word": "girl",
    "chunkType": "onset-rime",
    "ipa": "/ɡɜːrl/",
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
        "text": "irl",
        "ipa": "/ɜːrl/",
        "role": "rime（r-controlled，ir 整組不可拆）",
        "roleTag": "rime",
        "speakAs": "girl",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ir（/ɜːr/）",
    "siblings": [
      "bird",
      "dirt",
      "firm",
      "first",
      "shirt",
      "stir"
    ],
    "uiNote": "g 發 /ɡ/，irl 的 ir 是 r 控制母音，整組唸 /ɜːr/（和 er、ur 發音相同）。ir 字族：bird、shirt、stir。",
    "specialNote": "r-controlled：ir 整組不可拆，與 er、ur 同音"
  },
  "game": {
    "word": "game",
    "chunkType": "onset-rime",
    "ipa": "/ɡeɪm/",
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
        "text": "ame",
        "ipa": "/eɪm/",
        "role": "rime（magic-e）",
        "roleTag": "rime",
        "speakAs": "ame",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "magic-e",
    "anchor": "-ame",
    "siblings": [
      "came",
      "fame",
      "name",
      "same",
      "tame",
      "blame",
      "flame",
      "shame"
    ],
    "uiNote": "g 發 /ɡ/，ame 是 magic-e，e 靜音讓 a 發長音 /eɪ/。-ame 字族：name、same、flame、shame！",
    "specialNote": "magic-e：字尾 e 靜音，使 a 發長音 /eɪ/"
  },
  "map": {
    "word": "map",
    "chunkType": "onset-rime",
    "ipa": "/mæp/",
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
      "nap",
      "rap",
      "tap",
      "clap",
      "snap"
    ],
    "uiNote": "m 發 /m/，ap 的 a 發短音 /æ/。和 cap、lap、nap、snap 是同一個 -ap 字族。",
    "specialNote": ""
  },
  "man": {
    "word": "man",
    "chunkType": "onset-rime",
    "ipa": "/mæn/",
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
        "text": "an",
        "ipa": "/æn/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "an",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-an",
    "siblings": [
      "can",
      "fan",
      "pan",
      "ran",
      "van"
    ],
    "uiNote": "m 發 /m/，an 的 a 發短音 /æ/。和 can、fan、pan 是同一個 -an 字族。",
    "specialNote": ""
  },
  "mask": {
    "word": "mask",
    "chunkType": "onset-rime",
    "ipa": "/mæsk/",
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
        "text": "ask",
        "ipa": "/æsk/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "mask",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ask",
    "siblings": [
      "ask",
      "bask",
      "cask",
      "flask",
      "task"
    ],
    "uiNote": "m 發 /m/，ask 的 a 發短音 /æ/。-ask 字族：ask（問）、task（任務）、flask（燒瓶）。",
    "specialNote": ""
  },
  "magnet": {
    "word": "magnet",
    "chunkType": "syllable",
    "ipa": "/ˈmæɡ.nɪt/",
    "chunks": [
      {
        "text": "m",
        "ipa": "/m/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "m",
        "speakMode": "phonetic"
      },
      {
        "text": "ag",
        "ipa": "/æɡ/",
        "role": "syllable-1 rime",
        "roleTag": "rime",
        "speakAs": "ag",
        "speakMode": "direct"
      },
      {
        "text": "net",
        "ipa": "/nɪt/",
        "role": "syllable-2（母音弱化）",
        "roleTag": "syllable",
        "speakAs": "magnet",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "VCCV",
    "siblings": [
      "basket",
      "blanket"
    ],
    "uiNote": "mag-net 兩個音節，gn 從中切。第一個 mag 的 a 發短音 /æ/。第二個 net 的 e 弱化成 /ɪ/（因為不是重音節）。",
    "specialNote": ""
  },
  "mop": {
    "word": "mop",
    "chunkType": "onset-rime",
    "ipa": "/mɑp/",
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
      "pop",
      "top",
      "drop",
      "shop"
    ],
    "uiNote": "m 發 /m/，op 的 o 發短音 /ɑ/。和 hop、pop、shop 是同一個 -op 字族。",
    "specialNote": ""
  },
  "moon": {
    "word": "moon",
    "chunkType": "onset-rime",
    "ipa": "/muːn/",
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
        "text": "oon",
        "ipa": "/uːn/",
        "role": "rime（長 oo=/uː/）",
        "roleTag": "rime",
        "speakAs": "oon",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "oo（長音 /uː/）",
    "siblings": [
      "boon",
      "loon",
      "noon",
      "soon",
      "spoon",
      "cartoon"
    ],
    "uiNote": "m 發 /m/，oon 的 oo 發長音 /uː/。-oon 字族：noon（正午）、spoon（湯匙）、cartoon（卡通）！",
    "specialNote": ""
  },
  "nose": {
    "word": "nose",
    "chunkType": "onset-rime",
    "ipa": "/noʊz/",
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
        "text": "ose",
        "ipa": "/oʊz/",
        "role": "rime（magic-e，同 hose，s 發 /z/）",
        "roleTag": "rime",
        "speakAs": "nose",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "magic-e",
    "anchor": "-ose",
    "siblings": [
      "hose",
      "rose",
      "pose",
      "dose",
      "close"
    ],
    "uiNote": "n 發 /n/，ose 是 magic-e，和 hose、rose 是同一個 -ose 字族，o 發長音 /oʊ/，s 發 /z/。",
    "specialNote": "magic-e；s 在 magic-e 前發 /z/"
  },
  "neck": {
    "word": "neck",
    "chunkType": "onset-rime",
    "ipa": "/nɛk/",
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
        "text": "eck",
        "ipa": "/ɛk/",
        "role": "rime（ck 是 digraph）",
        "roleTag": "rime",
        "speakAs": "eck",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-eck",
    "siblings": [
      "beck",
      "deck",
      "peck",
      "wreck",
      "check",
      "speck"
    ],
    "uiNote": "n 發 /n/，eck 的 e 發短音 /ɛ/，ck 是二合字母發 /k/。-eck 字族：deck（甲板）、wreck（破壞）、check（檢查）。",
    "specialNote": "ck 是 digraph"
  },
  "nest": {
    "word": "nest",
    "chunkType": "onset-rime",
    "ipa": "/nɛst/",
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
        "text": "est",
        "ipa": "/ɛst/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "est",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-est",
    "siblings": [
      "best",
      "rest",
      "test",
      "vest",
      "west",
      "chest",
      "crest"
    ],
    "uiNote": "n 發 /n/，est 的 e 發短音 /ɛ/。-est 字族：best、rest、test、west、chest！",
    "specialNote": ""
  },
  "nail": {
    "word": "nail",
    "chunkType": "onset-rime",
    "ipa": "/neɪl/",
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
        "text": "ail",
        "ipa": "/eɪl/",
        "role": "rime（vowel team ai=/eɪ/）",
        "roleTag": "rime",
        "speakAs": "ail",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ai",
    "siblings": [
      "bail",
      "fail",
      "hail",
      "mail",
      "pail",
      "rail",
      "sail",
      "tail",
      "trail",
      "snail"
    ],
    "uiNote": "n 發 /n/，ail 的 ai 是母音組合，固定發 /eɪ/。-ail 字族：mail（郵件）、tail（尾巴）、snail（蝸牛）！",
    "specialNote": ""
  },
  "nine": {
    "word": "nine",
    "chunkType": "onset-rime",
    "ipa": "/naɪn/",
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
        "text": "ine",
        "ipa": "/aɪn/",
        "role": "rime（magic-e，同 line）",
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
      "line",
      "mine",
      "pine",
      "vine",
      "wine"
    ],
    "uiNote": "n 發 /n/，ine 是 magic-e，和 line、mine、pine 是同一個 -ine 字族。",
    "specialNote": "magic-e：字尾 e 靜音，使 i 發長音 /aɪ/"
  },
  "nut": {
    "word": "nut",
    "chunkType": "onset-rime",
    "ipa": "/nʌt/",
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
        "text": "ut",
        "ipa": "/ʌt/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "nut",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ut",
    "siblings": [
      "but",
      "cut",
      "gut",
      "hut",
      "jut",
      "rut",
      "shut",
      "strut"
    ],
    "uiNote": "n 發 /n/，ut 的 u 發短音 /ʌ/。-ut 字族：but、cut、hut、shut、strut！",
    "specialNote": ""
  },
  "dog": {
    "word": "dog",
    "chunkType": "onset-rime",
    "ipa": "/dɑɡ/",
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
        "text": "og",
        "ipa": "/ɑɡ/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "og",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-og",
    "siblings": [
      "bog",
      "fog",
      "hog",
      "jog",
      "log",
      "frog"
    ],
    "uiNote": "d 發 /d/，og 的 o 發短音 /ɑ/。和 fog、jog、log、frog 是同一個 -og 字族。",
    "specialNote": ""
  },
  "doctor": {
    "word": "doctor",
    "chunkType": "syllable",
    "ipa": "/ˈdɑk.tər/",
    "chunks": [
      {
        "text": "d",
        "ipa": "/d/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "d",
        "speakMode": "phonetic"
      },
      {
        "text": "oc",
        "ipa": "/ɑk/",
        "role": "syllable-1 rime（c 在此 = /k/）",
        "roleTag": "rime",
        "speakAs": "ock",
        "speakMode": "direct"
      },
      {
        "text": "tor",
        "ipa": "/tər/",
        "role": "syllable-2（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "doctor",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "or（弱化 /ər/）",
    "siblings": [
      "actor",
      "factor",
      "sector"
    ],
    "uiNote": "doc-tor 兩個音節。第一個 doc 的 o 發短音 /ɑ/，ct 中的 c 發 /k/。第二個 tor 的 or 弱化發 /ər/。",
    "specialNote": ""
  },
  "desk": {
    "word": "desk",
    "chunkType": "onset-rime",
    "ipa": "/dɛsk/",
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
        "text": "esk",
        "ipa": "/ɛsk/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "desk",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-esk",
    "siblings": [
      "brisk",
      "risk"
    ],
    "uiNote": "d 發 /d/，esk 的 e 發短音 /ɛ/。-esk 字族很小，用圖像（書桌）或語義記憶這個字。",
    "specialNote": ""
  },
  "door": {
    "word": "door",
    "chunkType": "onset-rime",
    "ipa": "/dɔːr/",
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
        "text": "oor",
        "ipa": "/ɔːr/",
        "role": "rime（r-controlled，oo 在 r 前發 /ɔː/）",
        "roleTag": "rime",
        "speakAs": "door",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "oor（/ɔːr/）",
    "siblings": [
      "floor",
      "poor"
    ],
    "uiNote": "d 發 /d/，oor 是 r 控制母音，整組唸 /ɔːr/。-oor 字族：floor（地板）、poor（窮的）。注意 oo 在 r 前發 /ɔː/ 不是 /uː/ 或 /ʊ/。",
    "specialNote": "⚠️ oo 在 r 前發 /ɔː/，不是 /uː/ 或 /ʊ/"
  },
  "doll": {
    "word": "doll",
    "chunkType": "onset-rime",
    "ipa": "/dɑl/",
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
        "text": "oll",
        "ipa": "/ɑl/",
        "role": "rime（o 在 ll 前發 /ɑ/，雙 l 只發一個）",
        "roleTag": "rime",
        "speakAs": "doll",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-oll（/ɑl/）",
    "siblings": [
      "poll",
      "toll"
    ],
    "uiNote": "d 發 /d/，oll 的 o 在這裡發 /ɑ/（短音），ll 只發一個 /l/。注意：roll、toll 的 oll 是 /oʊl/，doll 是例外發 /ɑl/。",
    "specialNote": "⚠️ -oll 發音不一：doll=/ɑl/ vs roll=/oʊl/"
  },
  "duck": {
    "word": "duck",
    "chunkType": "onset-rime",
    "ipa": "/dʌk/",
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
        "text": "uck",
        "ipa": "/ʌk/",
        "role": "rime（ck 是 digraph）",
        "roleTag": "rime",
        "speakAs": "uck",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-uck",
    "siblings": [
      "buck",
      "luck",
      "muck",
      "puck",
      "suck",
      "tuck",
      "cluck",
      "pluck",
      "stuck",
      "truck"
    ],
    "uiNote": "d 發 /d/，uck 的 u 發短音 /ʌ/，ck 是二合字母發 /k/。-uck 字族：luck、truck、stuck！",
    "specialNote": "ck 是 digraph"
  },
  "deer": {
    "word": "deer",
    "chunkType": "onset-rime",
    "ipa": "/dɪr/",
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
        "text": "eer",
        "ipa": "/ɪr/",
        "role": "rime（vowel team ee + r-controlled）",
        "roleTag": "rime",
        "speakAs": "deer",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "eer（/ɪr/）",
    "siblings": [
      "beer",
      "cheer",
      "peer",
      "steer",
      "career"
    ],
    "uiNote": "d 發 /d/，eer 整組是 r 控制母音，ee + r 合在一起唸 /ɪr/，不能拆開。-eer 字族：beer、cheer、steer。",
    "specialNote": "r-controlled：eer 整組不可拆"
  },
  "dinosaur": {
    "word": "dinosaur",
    "chunkType": "syllable",
    "ipa": "/ˈdaɪ.nə.sɔːr/",
    "chunks": [
      {
        "text": "di",
        "ipa": "/daɪ/",
        "role": "syllable-1（VCV，i 發長音）",
        "roleTag": "syllable",
        "speakAs": "die",
        "speakMode": "phonetic"
      },
      {
        "text": "no",
        "ipa": "/nə/",
        "role": "syllable-2（弱化 schwa）",
        "roleTag": "syllable",
        "speakAs": "nuh",
        "speakMode": "phonetic"
      },
      {
        "text": "saur",
        "ipa": "/sɔːr/",
        "role": "syllable-3（au 是 vowel team，+ r-controlled）",
        "roleTag": "syllable",
        "speakAs": "dinosaur",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "au（/ɔː/）",
    "siblings": [
      "sauce",
      "cause",
      "pause",
      "haul",
      "vault"
    ],
    "uiNote": "di-no-saur 三個音節。第一個 di 的 i 發長音 /aɪ/（VCV 規則）。第二個 no 弱化。第三個 saur 的 au 是母音組合發 /ɔː/，加 r 成 /sɔːr/。",
    "specialNote": "au 是 vowel team；saur 來自希臘語「蜥蜴」"
  },
  "jacket": {
    "word": "jacket",
    "chunkType": "syllable",
    "ipa": "/ˈdʒæk.ɪt/",
    "chunks": [
      {
        "text": "j",
        "ipa": "/dʒ/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "j",
        "speakMode": "phonetic"
      },
      {
        "text": "ack",
        "ipa": "/æk/",
        "role": "syllable-1 rime（ck 是 digraph）",
        "roleTag": "rime",
        "speakAs": "ack",
        "speakMode": "direct"
      },
      {
        "text": "et",
        "ipa": "/ɪt/",
        "role": "syllable-2（母音弱化）",
        "roleTag": "syllable",
        "speakAs": "jacket",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ack",
    "siblings": [
      "back",
      "hack",
      "lack",
      "pack",
      "rack",
      "sack",
      "tack",
      "black",
      "crack",
      "stack",
      "track"
    ],
    "uiNote": "jack-et 兩個音節。第一個 jack 的 a 發短音 /æ/，ck 是二合字母。第二個 et 弱化成 /ɪt/。-ack 字族：back、pack、black、crack！",
    "specialNote": "ck 是 digraph"
  },
  "jewelry": {
    "word": "jewelry",
    "chunkType": "syllable",
    "ipa": "/ˈdʒuː.əl.ri/",
    "chunks": [
      {
        "text": "jew",
        "ipa": "/dʒuː/",
        "role": "syllable-1（ew 是 vowel team）",
        "roleTag": "syllable",
        "speakAs": "joo",
        "speakMode": "phonetic"
      },
      {
        "text": "el",
        "ipa": "/əl/",
        "role": "syllable-2（弱化）",
        "roleTag": "syllable",
        "speakAs": "ul",
        "speakMode": "phonetic"
      },
      {
        "text": "ry",
        "ipa": "/ri/",
        "role": "syllable-3",
        "roleTag": "syllable",
        "speakAs": "ree",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ew（/uː/ 或 /juː/）",
    "siblings": [
      "brew",
      "chew",
      "crew",
      "drew",
      "flew",
      "grew",
      "knew",
      "new",
      "stew"
    ],
    "uiNote": "jew-el-ry 三個音節。ew 是母音組合，發 /uː/（或 /juː/）。第二個 el 弱化。結尾 ry 發 /ri/。",
    "specialNote": "ew 是 vowel team，發 /uː/ 或 /juː/"
  },
  "jack-in-the-box": {
    "word": "jack-in-the-box",
    "chunkType": "compound",
    "ipa": "/ˌdʒæk.ɪn.ðə.bɑks/",
    "chunks": [
      {
        "text": "jack",
        "ipa": "/dʒæk/",
        "role": "compound-part-1",
        "roleTag": "compound",
        "speakAs": "jack",
        "speakMode": "direct"
      },
      {
        "text": "in",
        "ipa": "/ɪn/",
        "role": "compound-part-2（介系詞）",
        "roleTag": "compound",
        "speakAs": "in",
        "speakMode": "direct"
      },
      {
        "text": "the",
        "ipa": "/ðə/",
        "role": "compound-part-3（定冠詞）",
        "roleTag": "compound",
        "speakAs": "the",
        "speakMode": "direct"
      },
      {
        "text": "box",
        "ipa": "/bɑks/",
        "role": "compound-part-4",
        "roleTag": "compound",
        "speakAs": "box",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "compound",
    "anchor": "jack + in + the + box",
    "siblings": [],
    "uiNote": "jack-in-the-box = jack（人名）+ in the box（在箱子裡）= 驚嚇箱玩具。這是一個複合片語，每個部分都是已知的字。the 在這裡發輕聲 /ðə/。",
    "specialNote": "連字符複合詞；the 在口語中弱化為 /ðə/"
  },
  "jump rope": {
    "word": "jump rope",
    "chunkType": "compound",
    "ipa": "/ˈdʒʌmp roʊp/",
    "chunks": [
      {
        "text": "jump",
        "ipa": "/dʒʌmp/",
        "role": "compound-part-1",
        "roleTag": "compound",
        "speakAs": "jump",
        "speakMode": "direct"
      },
      {
        "text": "rope",
        "ipa": "/roʊp/",
        "role": "compound-part-2",
        "roleTag": "compound",
        "speakAs": "rope",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "compound",
    "anchor": "jump + rope",
    "siblings": [
      "skip rope"
    ],
    "uiNote": "jump rope = jump（跳）+ rope（繩子）= 跳繩。兩個已知單字組合。jump 的 -ump 字族和 rope 的 magic-e 各自展開說明。",
    "specialNote": ""
  },
  "jet": {
    "word": "jet",
    "chunkType": "onset-rime",
    "ipa": "/dʒɛt/",
    "chunks": [
      {
        "text": "j",
        "ipa": "/dʒ/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "j",
        "speakMode": "phonetic"
      },
      {
        "text": "et",
        "ipa": "/ɛt/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "et",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-et",
    "siblings": [
      "bet",
      "get",
      "let",
      "met",
      "net",
      "pet",
      "set",
      "wet"
    ],
    "uiNote": "j 發 /dʒ/，et 的 e 發短音 /ɛ/。和 net、pet、set、wet 是同一個 -et 字族。",
    "specialNote": ""
  },
  "ox": {
    "word": "ox",
    "chunkType": "onset-rime",
    "ipa": "/ɑks/",
    "chunks": [
      {
        "text": "o",
        "ipa": "/ɑ/",
        "role": "onset（母音開頭）",
        "roleTag": "onset",
        "speakAs": "ah",
        "speakMode": "phonetic"
      },
      {
        "text": "x",
        "ipa": "/ks/",
        "role": "rime-coda（x=/ks/）",
        "roleTag": "coda",
        "speakAs": "ox",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ox",
    "siblings": [
      "box",
      "fox",
      "pox"
    ],
    "uiNote": "o 發短音 /ɑ/，x 發 /ks/。和 box、fox 是同一個 -ox 字族。",
    "specialNote": "x 固定發 /ks/"
  },
  "sock": {
    "word": "sock",
    "chunkType": "onset-rime",
    "ipa": "/sɑk/",
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
        "text": "ock",
        "ipa": "/ɑk/",
        "role": "rime（ck 是 digraph）",
        "roleTag": "rime",
        "speakAs": "ock",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ock",
    "siblings": [
      "block",
      "clock",
      "dock",
      "knock",
      "lock",
      "mock",
      "rock",
      "stock"
    ],
    "uiNote": "s 發 /s/，ock 和 lock、rock、clock 是同一個 -ock 字族。",
    "specialNote": "ck 是 digraph"
  },
  "box": {
    "word": "box",
    "chunkType": "onset-rime",
    "ipa": "/bɑks/",
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
        "text": "ox",
        "ipa": "/ɑks/",
        "role": "rime（x=/ks/）",
        "roleTag": "rime",
        "speakAs": "ox",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ox",
    "siblings": [
      "fox",
      "ox",
      "pox"
    ],
    "uiNote": "b 發 /b/，ox 的 o 發短音 /ɑ/，x 發 /ks/。和 fox、ox 是同一個 -ox 字族。",
    "specialNote": "x 固定發 /ks/"
  },
  "block": {
    "word": "block",
    "chunkType": "onset-rime",
    "ipa": "/blɑk/",
    "chunks": [
      {
        "text": "bl",
        "ipa": "/bl/",
        "role": "onset（輔音叢）",
        "roleTag": "onset",
        "speakAs": "bl",
        "speakMode": "phonetic"
      },
      {
        "text": "ock",
        "ipa": "/ɑk/",
        "role": "rime（ck 是 digraph）",
        "roleTag": "rime",
        "speakAs": "ock",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ock",
    "siblings": [
      "clock",
      "dock",
      "lock",
      "mock",
      "rock",
      "sock",
      "stock"
    ],
    "uiNote": "bl 是輔音叢，b 和 l 連著發音。ock 和 lock、clock 是同一個 -ock 字族。",
    "specialNote": ""
  },
  "clock": {
    "word": "clock",
    "chunkType": "onset-rime",
    "ipa": "/klɑk/",
    "chunks": [
      {
        "text": "cl",
        "ipa": "/kl/",
        "role": "onset（輔音叢）",
        "roleTag": "onset",
        "speakAs": "kl",
        "speakMode": "phonetic"
      },
      {
        "text": "ock",
        "ipa": "/ɑk/",
        "role": "rime（ck 是 digraph）",
        "roleTag": "rime",
        "speakAs": "ock",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ock",
    "siblings": [
      "block",
      "dock",
      "lock",
      "mock",
      "rock",
      "sock"
    ],
    "uiNote": "cl 是輔音叢，c 和 l 連著發音。ock 和 lock、block 是同一個 -ock 字族。",
    "specialNote": ""
  },
  "pan": {
    "word": "pan",
    "chunkType": "onset-rime",
    "ipa": "/pæn/",
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
        "text": "an",
        "ipa": "/æn/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "an",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-an",
    "siblings": [
      "can",
      "fan",
      "man",
      "ran",
      "van"
    ],
    "uiNote": "p 發 /p/，an 和 can、fan、man 是同一個 -an 字族。",
    "specialNote": ""
  },
  "pen": {
    "word": "pen",
    "chunkType": "onset-rime",
    "ipa": "/pɛn/",
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
        "text": "en",
        "ipa": "/ɛn/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "en",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-en",
    "siblings": [
      "den",
      "hen",
      "men",
      "ten",
      "then",
      "when"
    ],
    "uiNote": "p 發 /p/，en 和 ten、hen、when 是同一個 -en 字族。",
    "specialNote": ""
  },
  "watch": {
    "word": "watch",
    "chunkType": "onset-rime",
    "ipa": "/wɑtʃ/",
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
        "text": "atch",
        "ipa": "/ɑtʃ/",
        "role": "rime（tch 是三字母組合，整組發 /tʃ/）",
        "roleTag": "rime",
        "speakAs": "watch",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "digraph",
    "anchor": "tch（/tʃ/）",
    "siblings": [
      "batch",
      "catch",
      "hatch",
      "latch",
      "match",
      "patch",
      "scratch",
      "snatch"
    ],
    "uiNote": "w 發 /w/，atch 的 tch 是三字母組合，整組發 /tʃ/（不是 t+ch 分開）。-atch 字族：catch（抓）、match（火柴/比賽）、hatch（孵化）！",
    "specialNote": "tch 是三字母組合（trigraph），整組發 /tʃ/"
  },
  "worm": {
    "word": "worm",
    "chunkType": "onset-rime",
    "ipa": "/wɜːrm/",
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
        "text": "orm",
        "ipa": "/ɜːrm/",
        "role": "rime（r-controlled，or 在 w 後發 /ɜːr/）",
        "roleTag": "rime",
        "speakAs": "worm",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "or（在 w 後例外發 /ɜːr/）",
    "siblings": [
      "word",
      "work",
      "world",
      "worth",
      "worse"
    ],
    "uiNote": "w 發 /w/，orm 的 or 在 w 後面是例外，不發 /ɔːr/ 而是發 /ɜːr/（像 her 的聲音）。這個規律：w + or = /wɜːr/（word、work、world 都一樣）。",
    "specialNote": "⚠️ w + or：or 發 /ɜːr/ 而非 /ɔːr/"
  },
  "wagon": {
    "word": "wagon",
    "chunkType": "syllable",
    "ipa": "/ˈwæɡ.ən/",
    "chunks": [
      {
        "text": "w",
        "ipa": "/w/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "w",
        "speakMode": "phonetic"
      },
      {
        "text": "ag",
        "ipa": "/æɡ/",
        "role": "syllable-1 rime",
        "roleTag": "rime",
        "speakAs": "ag",
        "speakMode": "direct"
      },
      {
        "text": "on",
        "ipa": "/ən/",
        "role": "syllable-2（弱化 schwa）",
        "roleTag": "syllable",
        "speakAs": "wagon",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "VCCV（或 VCV，gon）",
    "siblings": [
      "dragon",
      "cabin",
      "bacon"
    ],
    "uiNote": "wag-on 兩個音節。第一個 wag 的 a 發短音 /æ/。第二個 on 弱化成 /ən/（schwa）。",
    "specialNote": ""
  },
  "watermelon": {
    "word": "watermelon",
    "chunkType": "compound",
    "ipa": "/ˈwɔː.tər.mɛl.ən/",
    "chunks": [
      {
        "text": "water",
        "ipa": "/ˈwɔː.tər/",
        "role": "compound-part-1",
        "roleTag": "compound",
        "speakAs": "water",
        "speakMode": "direct"
      },
      {
        "text": "melon",
        "ipa": "/ˈmɛl.ən/",
        "role": "compound-part-2",
        "roleTag": "compound",
        "speakAs": "melon",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "compound",
    "anchor": "water + melon",
    "siblings": [
      "waterfall",
      "waterproof",
      "watercolor"
    ],
    "uiNote": "watermelon = water（水）+ melon（甜瓜）= 西瓜（水裡的甜瓜）。這是複合字，拆成兩個已知字記憶。water 的 a 在 w 後發 /ɔː/。",
    "specialNote": "a 在 w 後發 /ɔː/（was, want, water 同規律）"
  },
  "window": {
    "word": "window",
    "chunkType": "syllable",
    "ipa": "/ˈwɪn.doʊ/",
    "chunks": [
      {
        "text": "win",
        "ipa": "/wɪn/",
        "role": "syllable-1",
        "roleTag": "syllable",
        "speakAs": "win",
        "speakMode": "direct"
      },
      {
        "text": "dow",
        "ipa": "/doʊ/",
        "role": "syllable-2（ow=/oʊ/）",
        "roleTag": "syllable",
        "speakAs": "doe",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ow（/oʊ/）",
    "siblings": [
      "elbow",
      "meadow",
      "shadow",
      "widow"
    ],
    "uiNote": "win-dow 兩個音節。第一個 win 的 i 發短音 /ɪ/。第二個 dow 的 ow 發 /oʊ/（不是 cow 的 /aʊ/）。",
    "specialNote": ""
  },
  "wink": {
    "word": "wink",
    "chunkType": "onset-rime",
    "ipa": "/wɪŋk/",
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
        "text": "ink",
        "ipa": "/ɪŋk/",
        "role": "rime（nk：n 在 k 前發 /ŋ/）",
        "roleTag": "rime",
        "speakAs": "ink",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ink",
    "siblings": [
      "drink",
      "ink",
      "link",
      "mink",
      "pink",
      "rink",
      "sink",
      "think"
    ],
    "uiNote": "w 發 /w/，ink 和 sink、pink、drink 是同一個 -ink 字族。nk 的 n 發鼻音 /ŋ/。",
    "specialNote": "n 在 k 前發鼻音 /ŋ/"
  },
  "well": {
    "word": "well",
    "chunkType": "onset-rime",
    "ipa": "/wɛl/",
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
        "text": "ell",
        "ipa": "/ɛl/",
        "role": "rime（雙 l 只發一個 /l/）",
        "roleTag": "rime",
        "speakAs": "ell",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ell",
    "siblings": [
      "bell",
      "cell",
      "fell",
      "sell",
      "tell",
      "yell",
      "shell"
    ],
    "uiNote": "w 發 /w/，ell 和 bell、tell、shell 是同一個 -ell 字族。",
    "specialNote": "雙 ll 只發一個 /l/"
  },
  "octopus": {
    "word": "octopus",
    "chunkType": "syllable",
    "ipa": "/ˈɑk.tə.pəs/",
    "chunks": [
      {
        "text": "oc",
        "ipa": "/ɑk/",
        "role": "syllable-1（母音開頭）",
        "roleTag": "syllable",
        "speakAs": "ok",
        "speakMode": "direct"
      },
      {
        "text": "to",
        "ipa": "/tə/",
        "role": "syllable-2（弱化）",
        "roleTag": "syllable",
        "speakAs": "tuh",
        "speakMode": "phonetic"
      },
      {
        "text": "pus",
        "ipa": "/pəs/",
        "role": "syllable-3（弱化）",
        "roleTag": "syllable",
        "speakAs": "octopus",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "3-syllable",
    "siblings": [],
    "uiNote": "oc-to-pus 三個音節。第一個 oc 的 o 發短音 /ɑ/。to 和 pus 都弱化。octo 在希臘語是「八」，pus 是「腳」，所以是八腳動物。",
    "specialNote": "希臘語外來字；字源記憶：octo（八）+ pus（腳）"
  },
  "ostrich": {
    "word": "ostrich",
    "chunkType": "syllable",
    "ipa": "/ˈɑs.trɪtʃ/",
    "chunks": [
      {
        "text": "os",
        "ipa": "/ɑs/",
        "role": "syllable-1（母音開頭）",
        "roleTag": "syllable",
        "speakAs": "os",
        "speakMode": "direct"
      },
      {
        "text": "trich",
        "ipa": "/trɪtʃ/",
        "role": "syllable-2（tr 是輔音叢，ch 是 digraph）",
        "roleTag": "syllable",
        "speakAs": "ostrich",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "digraph",
    "anchor": "ch + tr",
    "siblings": [],
    "uiNote": "os-trich 兩個音節。第一個 os 的 o 發短音 /ɑ/。第二個 trich，tr 是輔音叢，ch 是二合字母發 /tʃ/。整個 trich 唸 /trɪtʃ/。",
    "specialNote": "tr 是輔音叢；ch 是 digraph，發 /tʃ/"
  },
  "olives": {
    "word": "olives",
    "chunkType": "morpheme",
    "ipa": "/ˈɑl.ɪvz/",
    "chunks": [
      {
        "text": "olive",
        "ipa": "/ˈɑl.ɪv/",
        "role": "morpheme-root（2 音節 magic-e 字）",
        "roleTag": "root",
        "speakAs": "olive",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/z/",
        "role": "morpheme-suffix（複數 -s，有聲為 /z/）",
        "roleTag": "suffix",
        "speakAs": "z",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（/z/ 複數）",
    "siblings": [
      "doves",
      "loves"
    ],
    "uiNote": "olives = olive（橄欖）+ s（複數）。olive 的 ol-ive 兩個音節，e 是 magic-e 讓 i 發長音 /aɪ/... 但實際 olive 的 i 發短音 /ɪ/，是例外。-s 在此發 /z/。",
    "specialNote": "⚠️ olive 的 i 是 /ɪ/ 而非 magic-e 的 /aɪ/；複數 -s 在此發 /z/"
  },
  "top": {
    "word": "top",
    "chunkType": "onset-rime",
    "ipa": "/tɑp/",
    "chunks": [
      {
        "text": "t",
        "ipa": "/t/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "t",
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
      "drop",
      "shop"
    ],
    "uiNote": "t 發 /t/，op 和 hop、pop、shop 是同一個 -op 字族。",
    "specialNote": ""
  },
  "dots": {
    "word": "dots",
    "chunkType": "morpheme",
    "ipa": "/dɑts/",
    "chunks": [
      {
        "text": "dot",
        "ipa": "/dɑt/",
        "role": "morpheme-root",
        "roleTag": "root",
        "speakAs": "dot",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/s/",
        "role": "morpheme-suffix（複數 -s，無聲為 /s/）",
        "roleTag": "suffix",
        "speakAs": "s",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（/s/ 複數）",
    "siblings": [],
    "uiNote": "dots = dot（點）+ s（複數）。dot 的 o 發短音 /ɑ/。-s 在無聲輔音（t）後面發 /s/。",
    "specialNote": "複數後綴 -s（/s/），接在無聲輔音後"
  },
  "pillow": {
    "word": "pillow",
    "chunkType": "syllable",
    "ipa": "/ˈpɪl.oʊ/",
    "chunks": [
      {
        "text": "pil",
        "ipa": "/pɪl/",
        "role": "syllable-1（ll 從中切）",
        "roleTag": "syllable",
        "speakAs": "pil",
        "speakMode": "direct"
      },
      {
        "text": "low",
        "ipa": "/loʊ/",
        "role": "syllable-2（ow=/oʊ/）",
        "roleTag": "syllable",
        "speakAs": "low",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ow（/oʊ/）",
    "siblings": [
      "yellow",
      "follow",
      "hollow",
      "willow"
    ],
    "uiNote": "pil-low 兩個音節。ll 從中切。第一個 pil 的 i 發短音 /ɪ/。第二個 low 的 ow 發 /oʊ/。",
    "specialNote": "雙 ll 從中切；ow 在此發 /oʊ/"
  },
  "peas": {
    "word": "peas",
    "chunkType": "morpheme",
    "ipa": "/piːz/",
    "chunks": [
      {
        "text": "pea",
        "ipa": "/piː/",
        "role": "morpheme-root（ea 是 vowel team）",
        "roleTag": "root",
        "speakAs": "pee",
        "speakMode": "phonetic"
      },
      {
        "text": "s",
        "ipa": "/z/",
        "role": "morpheme-suffix（複數 -s，有聲為 /z/）",
        "roleTag": "suffix",
        "speakAs": "z",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ea（/iː/）",
    "siblings": [
      "sea",
      "tea",
      "flea",
      "seas",
      "teas"
    ],
    "uiNote": "peas = pea（豌豆，單數）+ s（複數）。ea 是母音組合發長音 /iː/。-s 在有聲輔音（母音）後發 /z/。",
    "specialNote": "複數後綴 -s（/z/）；ea 是 vowel team"
  },
  "quack": {
    "word": "quack",
    "chunkType": "onset-rime",
    "ipa": "/kwæk/",
    "chunks": [
      {
        "text": "qu",
        "ipa": "/kw/",
        "role": "onset（digraph，qu 整組發 /kw/）",
        "roleTag": "onset",
        "speakAs": "kw",
        "speakMode": "phonetic"
      },
      {
        "text": "ack",
        "ipa": "/æk/",
        "role": "rime（ck 是 digraph）",
        "roleTag": "rime",
        "speakAs": "ack",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "digraph",
    "anchor": "qu（/kw/）",
    "siblings": [
      "quick",
      "quilt",
      "queen",
      "quiet"
    ],
    "uiNote": "qu 是二合字母，整組固定發 /kw/，英文裡 q 後面幾乎一定接 u，一起發 /kw/。ack 和 back、pack、black 是同一個 -ack 字族。",
    "specialNote": "qu 是 digraph，固定發 /kw/；q 後面幾乎必接 u"
  },
  "queen": {
    "word": "queen",
    "chunkType": "onset-rime",
    "ipa": "/kwiːn/",
    "chunks": [
      {
        "text": "qu",
        "ipa": "/kw/",
        "role": "onset（digraph）",
        "roleTag": "onset",
        "speakAs": "kw",
        "speakMode": "phonetic"
      },
      {
        "text": "een",
        "ipa": "/iːn/",
        "role": "rime（vowel team ee=/iː/）",
        "roleTag": "rime",
        "speakAs": "een",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-een",
    "siblings": [
      "keen",
      "seen",
      "teen",
      "green",
      "screen"
    ],
    "uiNote": "qu 是二合字母發 /kw/，een 的 ee 是母音組合發 /iː/。-een 字族：keen、seen、teen、green。",
    "specialNote": "qu 是 digraph，發 /kw/"
  },
  "quilt": {
    "word": "quilt",
    "chunkType": "onset-rime",
    "ipa": "/kwɪlt/",
    "chunks": [
      {
        "text": "qu",
        "ipa": "/kw/",
        "role": "onset（digraph）",
        "roleTag": "onset",
        "speakAs": "kw",
        "speakMode": "phonetic"
      },
      {
        "text": "ilt",
        "ipa": "/ɪlt/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "quilt",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ilt",
    "siblings": [
      "built",
      "gilt",
      "hilt",
      "jilt",
      "lilt",
      "milt",
      "tilt",
      "wilt",
      "spilt"
    ],
    "uiNote": "qu 是二合字母發 /kw/，ilt 的 i 發短音 /ɪ/。-ilt 字族：tilt（傾斜）、wilt（枯萎）、built（建造，過去式）。",
    "specialNote": "qu 是 digraph，發 /kw/"
  },
  "question mark": {
    "word": "question mark",
    "chunkType": "compound",
    "ipa": "/ˈkwɛs.tʃən mɑːrk/",
    "chunks": [
      {
        "text": "question",
        "ipa": "/ˈkwɛs.tʃən/",
        "role": "compound-part-1（2 音節）",
        "roleTag": "compound",
        "speakAs": "question",
        "speakMode": "direct"
      },
      {
        "text": "mark",
        "ipa": "/mɑːrk/",
        "role": "compound-part-2（r-controlled）",
        "roleTag": "compound",
        "speakAs": "mark",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "compound",
    "anchor": "question + mark",
    "siblings": [
      "exclamation mark",
      "quotation mark"
    ],
    "uiNote": "question mark = question（問題）+ mark（符號）= 問號。question 的 qu 發 /kw/，ti 在這裡發 /tʃ/（ti + on 組合），mark 的 ar 是 r 控制母音。",
    "specialNote": "ti 在 -tion 中發 /tʃ/ 或 /ʃ/（此字為 /tʃ/）"
  },
  "quarter": {
    "word": "quarter",
    "chunkType": "syllable",
    "ipa": "/ˈkwɔːr.tər/",
    "chunks": [
      {
        "text": "qu",
        "ipa": "/kw/",
        "role": "syllable-1 onset（digraph）",
        "roleTag": "onset",
        "speakAs": "kw",
        "speakMode": "phonetic"
      },
      {
        "text": "ar",
        "ipa": "/ɔːr/",
        "role": "syllable-1 rime（r-controlled，qu 後 ar 發 /ɔːr/）",
        "roleTag": "rime",
        "speakAs": "quarter",
        "speakMode": "wholeWord"
      },
      {
        "text": "ter",
        "ipa": "/tər/",
        "role": "syllable-2（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "quarter",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ar（在 qu 後發 /ɔːr/）",
    "siblings": [
      "quart"
    ],
    "uiNote": "quar-ter 兩個音節。quar 的 qu 發 /kw/，ar 在 qu 後面發 /ɔːr/（不是一般的 /ɑːr/），這是例外。ter 發輕聲 /tər/。",
    "specialNote": "⚠️ ar 在 qu 後發 /ɔːr/ 而非 /ɑːr/"
  },
  "vase": {
    "word": "vase",
    "chunkType": "onset-rime",
    "ipa": "/veɪz/",
    "chunks": [
      {
        "text": "v",
        "ipa": "/v/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "v",
        "speakMode": "phonetic"
      },
      {
        "text": "ase",
        "ipa": "/eɪz/",
        "role": "rime（magic-e，s 發 /z/）（美式）",
        "roleTag": "rime",
        "speakAs": "vase",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "magic-e",
    "anchor": "-ase",
    "siblings": [
      "base",
      "case",
      "chase",
      "erase",
      "phase"
    ],
    "uiNote": "v 發 /v/，ase 是 magic-e，e 靜音讓 a 發長音 /eɪ/，s 發 /z/（美式發音 /veɪz/）。-ase 字族：base（基礎）、case（案例）、chase（追逐）。",
    "specialNote": "⚠️ 美式 /veɪz/ vs 英式 /vɑːz/，此規範以美式為主"
  },
  "violin": {
    "word": "violin",
    "chunkType": "syllable",
    "ipa": "/ˌvaɪ.ə.ˈlɪn/",
    "chunks": [
      {
        "text": "vi",
        "ipa": "/vaɪ/",
        "role": "syllable-1（VCV，i 發長音）",
        "roleTag": "syllable",
        "speakAs": "vie",
        "speakMode": "phonetic"
      },
      {
        "text": "o",
        "ipa": "/ə/",
        "role": "syllable-2（弱化 schwa）",
        "roleTag": "syllable",
        "speakAs": "uh",
        "speakMode": "phonetic"
      },
      {
        "text": "lin",
        "ipa": "/lɪn/",
        "role": "syllable-3（重音節）",
        "roleTag": "syllable",
        "speakAs": "violin",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "3-syllable",
    "siblings": [
      "gasoline",
      "trampoline"
    ],
    "uiNote": "vi-o-lin 三個音節，重音在第三個 LIN。第一個 vi 的 i 發長音 /aɪ/（VCV 規則）。中間 o 弱化成 /ə/。最後 lin 的 i 發短音 /ɪ/。",
    "specialNote": "重音在第三音節 LIN（與其他三音節字多在第一音節不同）"
  },
  "van": {
    "word": "van",
    "chunkType": "onset-rime",
    "ipa": "/væn/",
    "chunks": [
      {
        "text": "v",
        "ipa": "/v/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "v",
        "speakMode": "phonetic"
      },
      {
        "text": "an",
        "ipa": "/æn/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "an",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-an",
    "siblings": [
      "can",
      "fan",
      "man",
      "pan",
      "ran"
    ],
    "uiNote": "v 發 /v/，an 和 can、fan、man 是同一個 -an 字族。",
    "specialNote": ""
  },
  "vest": {
    "word": "vest",
    "chunkType": "onset-rime",
    "ipa": "/vɛst/",
    "chunks": [
      {
        "text": "v",
        "ipa": "/v/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "v",
        "speakMode": "phonetic"
      },
      {
        "text": "est",
        "ipa": "/ɛst/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "est",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-est",
    "siblings": [
      "best",
      "nest",
      "rest",
      "test",
      "west",
      "chest"
    ],
    "uiNote": "v 發 /v/，est 和 nest、best、rest 是同一個 -est 字族。",
    "specialNote": ""
  },
  "vegetables": {
    "word": "vegetables",
    "chunkType": "morpheme + syllable",
    "ipa": "/ˈvɛdʒ.ɪ.tə.bəlz/",
    "chunks": [
      {
        "text": "veg",
        "ipa": "/vɛdʒ/",
        "role": "syllable-1（g 在 e 前發軟音 /dʒ/）",
        "roleTag": "syllable",
        "speakAs": "vej",
        "speakMode": "phonetic"
      },
      {
        "text": "e",
        "ipa": "/ɪ/",
        "role": "syllable-2（弱化）",
        "roleTag": "syllable",
        "speakAs": "ih",
        "speakMode": "phonetic"
      },
      {
        "text": "ta",
        "ipa": "/tə/",
        "role": "syllable-3（弱化）",
        "roleTag": "syllable",
        "speakAs": "tuh",
        "speakMode": "phonetic"
      },
      {
        "text": "ble",
        "ipa": "/bəl/",
        "role": "syllable-4（consonant + le）",
        "roleTag": "syllable",
        "speakAs": "vegetables",
        "speakMode": "wholeWord"
      },
      {
        "text": "s",
        "ipa": "/z/",
        "role": "morpheme-suffix（複數）",
        "roleTag": "suffix",
        "speakAs": "z",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（複數後綴）",
    "siblings": [
      "vegetable"
    ],
    "uiNote": "veg-e-ta-bles 四個音節（加 s）。重音在第一個音節 VEG。g 在 e 前發軟音 /dʒ/。後面三個音節都弱化。-bles 是 -ble（consonant+le）加複數 -s。",
    "specialNote": "soft-g：g 在 e 前發 /dʒ/；四音節長字"
  },
  "rose": {
    "word": "rose",
    "chunkType": "onset-rime",
    "ipa": "/roʊz/",
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
        "text": "ose",
        "ipa": "/oʊz/",
        "role": "rime（magic-e，同 hose、nose）",
        "roleTag": "rime",
        "speakAs": "rose",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "magic-e",
    "anchor": "-ose",
    "siblings": [
      "hose",
      "nose",
      "pose",
      "dose",
      "close"
    ],
    "uiNote": "r 發 /r/，ose 是 magic-e，和 hose、nose 是同一個 -ose 字族。",
    "specialNote": "magic-e；s 發 /z/"
  },
  "raccoon": {
    "word": "raccoon",
    "chunkType": "syllable",
    "ipa": "/ræˈkuːn/",
    "chunks": [
      {
        "text": "rac",
        "ipa": "/ræk/",
        "role": "syllable-1（cc 只發一個 /k/）",
        "roleTag": "syllable",
        "speakAs": "rack",
        "speakMode": "direct"
      },
      {
        "text": "coon",
        "ipa": "/kuːn/",
        "role": "syllable-2（長 oo=/uː/，重音）",
        "roleTag": "syllable",
        "speakAs": "coon",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "oo（長音 /uː/）",
    "siblings": [
      "moon",
      "spoon",
      "cartoon"
    ],
    "uiNote": "rac-coon 兩個音節，重音在第二個。cc 只發一個 /k/。coon 的 oo 發長音 /uː/，像 moon 的聲音。",
    "specialNote": "雙 cc 只發一個 /k/；重音在第二音節"
  },
  "rain": {
    "word": "rain",
    "chunkType": "onset-rime",
    "ipa": "/reɪn/",
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
        "text": "ain",
        "ipa": "/eɪn/",
        "role": "rime（vowel team ai=/eɪ/）",
        "roleTag": "rime",
        "speakAs": "ain",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ai",
    "siblings": [
      "brain",
      "chain",
      "drain",
      "gain",
      "main",
      "pain",
      "plain",
      "train"
    ],
    "uiNote": "r 發 /r/，ain 的 ai 是母音組合，固定發 /eɪ/。-ain 字族：pain（痛）、train（火車）、brain（大腦）！",
    "specialNote": ""
  },
  "ring": {
    "word": "ring",
    "chunkType": "onset-rime",
    "ipa": "/rɪŋ/",
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
        "text": "ing",
        "ipa": "/ɪŋ/",
        "role": "rime（ng 是 digraph，同 king）",
        "roleTag": "rime",
        "speakAs": "ing",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ing",
    "siblings": [
      "bring",
      "king",
      "sing",
      "sting",
      "swing",
      "thing",
      "wing"
    ],
    "uiNote": "r 發 /r/，ing 和 king、sing、swing 是同一個 -ing 字族。",
    "specialNote": "ng 是 digraph"
  },
  "radio": {
    "word": "radio",
    "chunkType": "syllable",
    "ipa": "/ˈreɪ.di.oʊ/",
    "chunks": [
      {
        "text": "ra",
        "ipa": "/reɪ/",
        "role": "syllable-1（VCV，a 發長音）",
        "roleTag": "syllable",
        "speakAs": "ray",
        "speakMode": "phonetic"
      },
      {
        "text": "di",
        "ipa": "/di/",
        "role": "syllable-2",
        "roleTag": "syllable",
        "speakAs": "dee",
        "speakMode": "phonetic"
      },
      {
        "text": "o",
        "ipa": "/oʊ/",
        "role": "syllable-3（單母音字尾，長音）",
        "roleTag": "syllable",
        "speakAs": "oh",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "3-syllable",
    "siblings": [
      "rodeo",
      "studio",
      "ratio"
    ],
    "uiNote": "ra-di-o 三個音節。第一個 ra 的 a 發長音 /eɪ/（VCV 規則）。第三個 o 是字尾單母音，發長音 /oʊ/。",
    "specialNote": ""
  },
  "sun": {
    "word": "sun",
    "chunkType": "onset-rime",
    "ipa": "/sʌn/",
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
      "gun",
      "run",
      "spun"
    ],
    "uiNote": "s 發 /s/，un 和 fun、gun、run 是同一個 -un 字族。",
    "specialNote": ""
  },
  "sink": {
    "word": "sink",
    "chunkType": "onset-rime",
    "ipa": "/sɪŋk/",
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
        "text": "ink",
        "ipa": "/ɪŋk/",
        "role": "rime（同 ink）",
        "roleTag": "rime",
        "speakAs": "ink",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ink",
    "siblings": [
      "drink",
      "ink",
      "link",
      "mink",
      "pink",
      "rink",
      "think",
      "wink"
    ],
    "uiNote": "s 發 /s/，ink 和 pink、drink、think 是同一個 -ink 字族。",
    "specialNote": "n 在 k 前發 /ŋ/"
  },
  "sand": {
    "word": "sand",
    "chunkType": "onset-rime",
    "ipa": "/sænd/",
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
        "text": "and",
        "ipa": "/ænd/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "and",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-and",
    "siblings": [
      "band",
      "hand",
      "land",
      "stand",
      "brand"
    ],
    "uiNote": "s 發 /s/，and 和 hand、band、land 是同一個 -and 字族。",
    "specialNote": ""
  },
  "tent": {
    "word": "tent",
    "chunkType": "onset-rime",
    "ipa": "/tɛnt/",
    "chunks": [
      {
        "text": "t",
        "ipa": "/t/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "t",
        "speakMode": "phonetic"
      },
      {
        "text": "ent",
        "ipa": "/ɛnt/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "tent",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ent",
    "siblings": [
      "bent",
      "dent",
      "kent",
      "lent",
      "rent",
      "sent",
      "vent",
      "went",
      "spent"
    ],
    "uiNote": "t 發 /t/，ent 的 e 發短音 /ɛ/。-ent 字族：rent（租金）、sent（送去）、went（去了）、spent（花掉）！",
    "specialNote": ""
  },
  "tomato": {
    "word": "tomato",
    "chunkType": "syllable",
    "ipa": "/təˈmeɪ.toʊ/",
    "chunks": [
      {
        "text": "to",
        "ipa": "/tə/",
        "role": "syllable-1（弱化 schwa）",
        "roleTag": "syllable",
        "speakAs": "tuh",
        "speakMode": "phonetic"
      },
      {
        "text": "ma",
        "ipa": "/meɪ/",
        "role": "syllable-2（重音，VCV，a 發長音）",
        "roleTag": "syllable",
        "speakAs": "may",
        "speakMode": "phonetic"
      },
      {
        "text": "to",
        "ipa": "/toʊ/",
        "role": "syllable-3（字尾長音）",
        "roleTag": "syllable",
        "speakAs": "toe",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "3-syllable",
    "siblings": [
      "potato",
      "avocado"
    ],
    "uiNote": "to-MA-to 三個音節，重音在第二個 MA。第一個 to 弱化。第二個 ma 的 a 因為 VCV 規則發長音 /eɪ/。第三個 to 的 o 發長音 /oʊ/。",
    "specialNote": "重音在第二音節 MA"
  },
  "tape": {
    "word": "tape",
    "chunkType": "onset-rime",
    "ipa": "/teɪp/",
    "chunks": [
      {
        "text": "t",
        "ipa": "/t/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "t",
        "speakMode": "phonetic"
      },
      {
        "text": "ape",
        "ipa": "/eɪp/",
        "role": "rime（magic-e，同 ape）",
        "roleTag": "rime",
        "speakAs": "ape",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "magic-e",
    "anchor": "-ape",
    "siblings": [
      "ape",
      "cape",
      "drape",
      "grape",
      "shape"
    ],
    "uiNote": "t 發 /t/，ape 和 ape、cape、grape 是同一個 -ape 字族。magic-e 使 a 發長音 /eɪ/。",
    "specialNote": "magic-e：字尾 e 靜音，使 a 發長音 /eɪ/"
  },
  "up": {
    "word": "up",
    "chunkType": "onset-rime",
    "ipa": "/ʌp/",
    "chunks": [
      {
        "text": "u",
        "ipa": "/ʌ/",
        "role": "onset（母音開頭）",
        "roleTag": "onset",
        "speakAs": "uh",
        "speakMode": "phonetic"
      },
      {
        "text": "p",
        "ipa": "/p/",
        "role": "rime-coda",
        "roleTag": "coda",
        "speakAs": "up",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-up",
    "siblings": [
      "cup",
      "pup",
      "sup",
      "hiccup"
    ],
    "uiNote": "u 發短音 /ʌ/，p 是字尾輔音。-up 字族：cup（杯子）、pup（小狗）。",
    "specialNote": ""
  },
  "under": {
    "word": "under",
    "chunkType": "morpheme",
    "ipa": "/ˈʌn.dər/",
    "chunks": [
      {
        "text": "un",
        "ipa": "/ʌn/",
        "role": "morpheme-prefix（un- 在此表「在下方」，介系詞用法）",
        "roleTag": "prefix",
        "speakAs": "un",
        "speakMode": "direct"
      },
      {
        "text": "der",
        "ipa": "/dər/",
        "role": "syllable（r-controlled 弱化）",
        "roleTag": "syllable",
        "speakAs": "under",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "prefix",
    "anchor": "un-（注意：此 un- 是介系詞前綴「在下」，非否定前綴）",
    "siblings": [
      "underneath",
      "underline"
    ],
    "uiNote": "un-der 兩個音節。un 發 /ʌn/，der 的 er 弱化發 /ər/。注意：這裡的 un- 是表示位置「在下面」，和 unhappy 的 un-（否定）意思不同。",
    "specialNote": "un- 在此為位置義（在下），非否定義"
  },
  "umpire": {
    "word": "umpire",
    "chunkType": "syllable",
    "ipa": "/ˈʌm.paɪər/",
    "chunks": [
      {
        "text": "um",
        "ipa": "/ʌm/",
        "role": "syllable-1（母音開頭）",
        "roleTag": "syllable",
        "speakAs": "um",
        "speakMode": "direct"
      },
      {
        "text": "pire",
        "ipa": "/paɪər/",
        "role": "syllable-2（magic-e + r，i 發長音後接 r）",
        "roleTag": "syllable",
        "speakAs": "umpire",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ire（/aɪər/，同 fire）",
    "siblings": [
      "fire",
      "hire",
      "tire",
      "wire"
    ],
    "uiNote": "um-pire 兩個音節。第一個 um 的 u 發短音 /ʌ/。第二個 pire 的 ire 是 r 控制母音，i 發長音 /aɪ/ 後接 r，整組唸 /paɪər/。",
    "specialNote": ""
  },
  "yarn": {
    "word": "yarn",
    "chunkType": "onset-rime",
    "ipa": "/jɑːrn/",
    "chunks": [
      {
        "text": "y",
        "ipa": "/j/",
        "role": "onset（y 作輔音）",
        "roleTag": "onset",
        "speakAs": "y",
        "speakMode": "phonetic"
      },
      {
        "text": "arn",
        "ipa": "/ɑːrn/",
        "role": "rime（r-controlled，同 barn）",
        "roleTag": "rime",
        "speakAs": "yarn",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ar",
    "siblings": [
      "barn",
      "darn",
      "farm"
    ],
    "uiNote": "y 在字首作輔音，發 /j/（像注音 ㄧ 的開頭滑音）。arn 和 barn 的 arn 是同一個 r 控制母音，唸 /ɑːrn/。",
    "specialNote": "y 在字首為輔音 /j/"
  },
  "yo-yo": {
    "word": "yo-yo",
    "chunkType": "compound",
    "ipa": "/ˈjoʊ.joʊ/",
    "chunks": [
      {
        "text": "yo",
        "ipa": "/joʊ/",
        "role": "compound-part-1（重複字）",
        "roleTag": "compound",
        "speakAs": "yo",
        "speakMode": "direct"
      },
      {
        "text": "yo",
        "ipa": "/joʊ/",
        "role": "compound-part-2",
        "roleTag": "compound",
        "speakAs": "yo",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "compound",
    "anchor": "yo + yo（reduplication 重疊複合字）",
    "siblings": [
      "mama",
      "dada",
      "tutu"
    ],
    "uiNote": "yo-yo 是重疊複合字，yo 唸兩次。y 作輔音發 /j/，o 發長音 /oʊ/（開放音節，VCV 型態）。",
    "specialNote": "重疊複合字（reduplication）"
  },
  "yolk": {
    "word": "yolk",
    "chunkType": "onset-rime",
    "ipa": "/joʊk/",
    "chunks": [
      {
        "text": "y",
        "ipa": "/j/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "y",
        "speakMode": "phonetic"
      },
      {
        "text": "olk",
        "ipa": "/oʊk/",
        "role": "rime（l 靜音，o 發長音）",
        "roleTag": "rime",
        "speakAs": "yolk",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "silent-letter",
    "anchor": "silent-l",
    "siblings": [
      "folk",
      "calf",
      "half"
    ],
    "uiNote": "y 作輔音發 /j/，olk 的 l 是靜音，o 發長音 /oʊ/，整個 olk 唸 /oʊk/。靜音 l 的字：folk（民間）、yolk（蛋黃）。",
    "specialNote": "⚠️ 靜音字母：l 不發音"
  },
  "yard": {
    "word": "yard",
    "chunkType": "onset-rime",
    "ipa": "/jɑːrd/",
    "chunks": [
      {
        "text": "y",
        "ipa": "/j/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "y",
        "speakMode": "phonetic"
      },
      {
        "text": "ard",
        "ipa": "/ɑːrd/",
        "role": "rime（r-controlled）",
        "roleTag": "rime",
        "speakAs": "yard",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "ar",
    "siblings": [
      "card",
      "hard",
      "lard"
    ],
    "uiNote": "y 作輔音發 /j/，ard 的 ar 是 r 控制母音，唸 /ɑːr/。-ard 字族：card（牌）、hard（硬）。",
    "specialNote": ""
  },
  "yellow": {
    "word": "yellow",
    "chunkType": "syllable",
    "ipa": "/ˈjɛl.oʊ/",
    "chunks": [
      {
        "text": "y",
        "ipa": "/j/",
        "role": "syllable-1 onset",
        "roleTag": "onset",
        "speakAs": "y",
        "speakMode": "phonetic"
      },
      {
        "text": "el",
        "ipa": "/ɛl/",
        "role": "syllable-1 rime（ll 從中切）",
        "roleTag": "rime",
        "speakAs": "el",
        "speakMode": "direct"
      },
      {
        "text": "low",
        "ipa": "/loʊ/",
        "role": "syllable-2（ow=/oʊ/）",
        "roleTag": "syllable",
        "speakAs": "low",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ow（/oʊ/）",
    "siblings": [
      "fellow",
      "hollow",
      "mellow",
      "pillow"
    ],
    "uiNote": "yel-low 兩個音節。ll 從中切。第一個 yel 的 e 發短音 /ɛ/。第二個 low 的 ow 發 /oʊ/（不是 cow 的 /aʊ/）。",
    "specialNote": "雙 ll 從中切；ow 在此發 /oʊ/"
  },
  "umbrella": {
    "word": "umbrella",
    "chunkType": "syllable",
    "ipa": "/ʌmˈbrɛl.ə/",
    "chunks": [
      {
        "text": "um",
        "ipa": "/ʌm/",
        "role": "syllable-1（母音開頭）",
        "roleTag": "syllable",
        "speakAs": "um",
        "speakMode": "direct"
      },
      {
        "text": "brel",
        "ipa": "/brɛl/",
        "role": "syllable-2（br 是輔音叢，重音節）",
        "roleTag": "syllable",
        "speakAs": "brel",
        "speakMode": "direct"
      },
      {
        "text": "la",
        "ipa": "/ə/",
        "role": "syllable-3（弱化 schwa）",
        "roleTag": "syllable",
        "speakAs": "umbrella",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "3-syllable",
    "siblings": [],
    "uiNote": "um-BREL-la 三個音節，重音在第二個 BREL。第一個 um 母音開頭。第二個 brel 的 br 是輔音叢，e 發短音 /ɛ/。第三個 la 弱化成 /ə/。",
    "specialNote": "重音在第二音節 BREL"
  },
  "untie": {
    "word": "untie",
    "chunkType": "morpheme",
    "ipa": "/ʌnˈtaɪ/",
    "chunks": [
      {
        "text": "un",
        "ipa": "/ʌn/",
        "role": "morpheme-prefix（un- 否定，表「解除動作」）",
        "roleTag": "prefix",
        "speakAs": "un",
        "speakMode": "direct"
      },
      {
        "text": "tie",
        "ipa": "/taɪ/",
        "role": "morpheme-root（magic-e 型，ie=/aɪ/）",
        "roleTag": "root",
        "speakAs": "tie",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "prefix",
    "anchor": "un-（否定前綴）",
    "siblings": [
      "undo",
      "unlock",
      "unhappy",
      "unwrap"
    ],
    "uiNote": "un-tie = un-（解除）+ tie（綁）= 解開。un- 是前綴，加在動詞前表示「反轉這個動作」。tie 的 ie 發 /aɪ/（i + e 的組合）。",
    "specialNote": "un- 為否定/反轉前綴；ie 在此發 /aɪ/"
  },
  "cup": {
    "word": "cup",
    "chunkType": "onset-rime",
    "ipa": "/kʌp/",
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
        "text": "up",
        "ipa": "/ʌp/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "up",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-up",
    "siblings": [
      "pup",
      "sup"
    ],
    "uiNote": "c 發 /k/，up 的 u 發短音 /ʌ/。-up 字族：pup（小狗）。",
    "specialNote": ""
  },
  "bus": {
    "word": "bus",
    "chunkType": "onset-rime",
    "ipa": "/bʌs/",
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
        "text": "us",
        "ipa": "/ʌs/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "bus",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-us",
    "siblings": [
      "fuss",
      "plus",
      "thus"
    ],
    "uiNote": "b 發 /b/，us 的 u 發短音 /ʌ/。-us 字族不多，靠圖像（公車）記憶這個字。",
    "specialNote": ""
  },
  "drum": {
    "word": "drum",
    "chunkType": "onset-rime",
    "ipa": "/drʌm/",
    "chunks": [
      {
        "text": "dr",
        "ipa": "/dr/",
        "role": "onset（輔音叢）",
        "roleTag": "onset",
        "speakAs": "dr",
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
      "gum",
      "hum",
      "mum",
      "rum",
      "sum",
      "plum"
    ],
    "uiNote": "dr 是輔音叢，d 和 r 連著發音。um 和 gum、hum、plum 是同一個 -um 字族。",
    "specialNote": ""
  },
  "rug": {
    "word": "rug",
    "chunkType": "onset-rime",
    "ipa": "/rʌɡ/",
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
        "text": "ug",
        "ipa": "/ʌɡ/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "ug",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ug",
    "siblings": [
      "bug",
      "dug",
      "hug",
      "jug",
      "mug",
      "tug",
      "drug"
    ],
    "uiNote": "r 發 /r/，ug 和 jug、bug、hug 是同一個 -ug 字族。",
    "specialNote": ""
  },
  "brush": {
    "word": "brush",
    "chunkType": "onset-rime",
    "ipa": "/brʌʃ/",
    "chunks": [
      {
        "text": "br",
        "ipa": "/br/",
        "role": "onset（輔音叢）",
        "roleTag": "onset",
        "speakAs": "br",
        "speakMode": "phonetic"
      },
      {
        "text": "ush",
        "ipa": "/ʌʃ/",
        "role": "rime（sh 是 digraph）",
        "roleTag": "rime",
        "speakAs": "brush",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ush",
    "siblings": [
      "crush",
      "flush",
      "gush",
      "hush",
      "lush",
      "mush",
      "rush",
      "slush"
    ],
    "uiNote": "br 是輔音叢，b 和 r 連著發音。ush 的 u 發短音 /ʌ/，sh 是二合字母發 /ʃ/。-ush 字族：rush（衝）、crush（壓碎）、flush（沖水）！",
    "specialNote": "sh 在字尾仍為 digraph，發 /ʃ/"
  },
  "thumb": {
    "word": "thumb",
    "chunkType": "onset-rime",
    "ipa": "/θʌm/",
    "chunks": [
      {
        "text": "th",
        "ipa": "/θ/",
        "role": "onset（digraph，無聲 th）",
        "roleTag": "onset",
        "speakAs": "th",
        "speakMode": "phonetic"
      },
      {
        "text": "umb",
        "ipa": "/ʌm/",
        "role": "rime（b 靜音）",
        "roleTag": "rime",
        "speakAs": "thumb",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "silent-letter",
    "anchor": "silent-b（-mb 結尾 b 靜音）",
    "siblings": [
      "bomb",
      "climb",
      "comb",
      "dumb",
      "lamb",
      "limb",
      "tomb"
    ],
    "uiNote": "th 是二合字母，發無聲 /θ/（舌尖輕碰上齒）。umb 的 b 是靜音，整個字唸 /θʌm/。-mb 結尾的 b 都不發音：comb、lamb、bomb。",
    "specialNote": "⚠️ 兩個特殊點：th 是 digraph；b 在 -mb 中靜音"
  },
  "plug": {
    "word": "plug",
    "chunkType": "onset-rime",
    "ipa": "/plʌɡ/",
    "chunks": [
      {
        "text": "pl",
        "ipa": "/pl/",
        "role": "onset（輔音叢）",
        "roleTag": "onset",
        "speakAs": "pl",
        "speakMode": "phonetic"
      },
      {
        "text": "ug",
        "ipa": "/ʌɡ/",
        "role": "rime",
        "roleTag": "rime",
        "speakAs": "ug",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ug",
    "siblings": [
      "bug",
      "dug",
      "hug",
      "jug",
      "rug",
      "slug",
      "shrug"
    ],
    "uiNote": "pl 是輔音叢，p 和 l 連著發音。ug 和 jug、rug、slug 是同一個 -ug 字族。",
    "specialNote": ""
  },
  "vine": {
    "word": "vine",
    "chunkType": "onset-rime",
    "ipa": "/vaɪn/",
    "chunks": [
      {
        "text": "v",
        "ipa": "/v/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "v",
        "speakMode": "phonetic"
      },
      {
        "text": "ine",
        "ipa": "/aɪn/",
        "role": "rime（magic-e，同 line）",
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
      "line",
      "mine",
      "nine",
      "pine",
      "wine"
    ],
    "uiNote": "v 發 /v/，ine 和 line、nine、mine 是同一個 -ine 字族。",
    "specialNote": "magic-e：字尾 e 靜音，使 i 發長音 /aɪ/"
  },
  "ax": {
    "word": "ax",
    "chunkType": "onset-rime",
    "ipa": "/æks/",
    "chunks": [
      {
        "text": "a",
        "ipa": "/æ/",
        "role": "onset（母音開頭）",
        "roleTag": "onset",
        "speakAs": "a",
        "speakMode": "phonetic"
      },
      {
        "text": "x",
        "ipa": "/ks/",
        "role": "rime-coda（x=/ks/）",
        "roleTag": "coda",
        "speakAs": "ax",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ax",
    "siblings": [
      "max",
      "tax",
      "fax",
      "wax",
      "relax"
    ],
    "uiNote": "a 發短音 /æ/，x 發 /ks/。和 wax、max、tax 是同一個 -ax 字族。",
    "specialNote": "x 固定發 /ks/"
  },
  "mix": {
    "word": "mix",
    "chunkType": "onset-rime",
    "ipa": "/mɪks/",
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
        "text": "ix",
        "ipa": "/ɪks/",
        "role": "rime（x=/ks/，同 six）",
        "roleTag": "rime",
        "speakAs": "ix",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ix",
    "siblings": [
      "fix",
      "nix",
      "six"
    ],
    "uiNote": "m 發 /m/，ix 和 six、fix 是同一個 -ix 字族，x 固定發 /ks/。",
    "specialNote": "x 固定發 /ks/"
  },
  "zoo": {
    "word": "zoo",
    "chunkType": "onset-rime",
    "ipa": "/zuː/",
    "chunks": [
      {
        "text": "z",
        "ipa": "/z/",
        "role": "onset",
        "roleTag": "onset",
        "speakAs": "z",
        "speakMode": "phonetic"
      },
      {
        "text": "oo",
        "ipa": "/uː/",
        "role": "rime（長 oo=/uː/）",
        "roleTag": "rime",
        "speakAs": "oo",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "oo（長音 /uː/）",
    "siblings": [
      "boo",
      "goo",
      "moo",
      "too",
      "woo"
    ],
    "uiNote": "z 發 /z/，oo 發長音 /uː/。-oo 字族：boo（嚇人）、moo（牛叫）、too（也）。",
    "specialNote": ""
  },
  "zebra": {
    "word": "zebra",
    "chunkType": "syllable",
    "ipa": "/ˈziː.brə/",
    "chunks": [
      {
        "text": "ze",
        "ipa": "/ziː/",
        "role": "syllable-1（VCV，e 發長音）",
        "roleTag": "syllable",
        "speakAs": "zee",
        "speakMode": "phonetic"
      },
      {
        "text": "bra",
        "ipa": "/brə/",
        "role": "syllable-2（br 是輔音叢，a 弱化）",
        "roleTag": "syllable",
        "speakAs": "zebra",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "syllable-pattern",
    "anchor": "VCV",
    "siblings": [
      "zero",
      "zeal"
    ],
    "uiNote": "ze-bra 兩個音節。第一個 ze 的 e 在開放音節（VCV 規則）發長音 /iː/。第二個 bra 的 br 是輔音叢，a 弱化成 /ə/。",
    "specialNote": "VCV 規則：前 e 發長音 /iː/"
  },
  "zero": {
    "word": "zero",
    "chunkType": "syllable",
    "ipa": "/ˈzɪr.oʊ/",
    "chunks": [
      {
        "text": "zer",
        "ipa": "/zɪr/",
        "role": "syllable-1（r-controlled，e 弱化）",
        "roleTag": "syllable",
        "speakAs": "zero",
        "speakMode": "wholeWord"
      },
      {
        "text": "o",
        "ipa": "/oʊ/",
        "role": "syllable-2（字尾長音）",
        "roleTag": "syllable",
        "speakAs": "oh",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "r-controlled",
    "anchor": "er（/ɪr/）",
    "siblings": [
      "hero"
    ],
    "uiNote": "zer-o 兩個音節。第一個 zer 的 er 是 r 控制母音，發 /ɪr/（或弱化 /ər/）。第二個 o 是字尾長音 /oʊ/。",
    "specialNote": ""
  },
  "mailbox": {
    "word": "mailbox",
    "chunkType": "compound",
    "ipa": "/ˈmeɪl.bɑks/",
    "chunks": [
      {
        "text": "mail",
        "ipa": "/meɪl/",
        "role": "compound-part-1（ai 是 vowel team）",
        "roleTag": "compound",
        "speakAs": "mail",
        "speakMode": "direct"
      },
      {
        "text": "box",
        "ipa": "/bɑks/",
        "role": "compound-part-2",
        "roleTag": "compound",
        "speakAs": "box",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "compound",
    "anchor": "mail + box",
    "siblings": [
      "inbox",
      "postbox"
    ],
    "uiNote": "mailbox = mail（郵件）+ box（箱子）= 信箱。mail 的 ai 發 /eɪ/。這是複合字，拆成兩個已知字記憶。",
    "specialNote": ""
  },
  "wing": {
    "word": "wing",
    "chunkType": "onset-rime",
    "ipa": "/wɪŋ/",
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
        "text": "ing",
        "ipa": "/ɪŋ/",
        "role": "rime（ng 是 digraph，同 king）",
        "roleTag": "rime",
        "speakAs": "ing",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-ing",
    "siblings": [
      "bring",
      "king",
      "ring",
      "sing",
      "sting",
      "swing",
      "thing"
    ],
    "uiNote": "w 發 /w/，ing 和 king、ring、swing 是同一個 -ing 字族。",
    "specialNote": "ng 是 digraph"
  },
  "bibs": {
    "word": "bibs",
    "chunkType": "morpheme",
    "ipa": "/bɪbz/",
    "chunks": [
      {
        "text": "bib",
        "ipa": "/bɪb/",
        "role": "morpheme-root",
        "roleTag": "root",
        "speakAs": "bib",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/z/",
        "role": "morpheme-suffix（複數 -s，有聲為 /z/）",
        "roleTag": "suffix",
        "speakAs": "z",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（/z/ 複數）",
    "siblings": [],
    "uiNote": "bibs = bib（圍兜）+ s（複數）。-s 在有聲輔音（b）後發 /z/。",
    "specialNote": "複數後綴 -s（/z/）"
  },
  "is": {
    "word": "is",
    "chunkType": "onset-rime",
    "ipa": "/ɪz/",
    "chunks": [
      {
        "text": "i",
        "ipa": "/ɪ/",
        "role": "onset（母音開頭）",
        "roleTag": "onset",
        "speakAs": "ih",
        "speakMode": "phonetic"
      },
      {
        "text": "s",
        "ipa": "/z/",
        "role": "rime-coda（s 在有聲音後發 /z/）",
        "roleTag": "coda",
        "speakAs": "is",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "exception",
    "anchor": "is（高頻功能字，需整字記憶）",
    "siblings": [
      "his",
      "was",
      "does"
    ],
    "uiNote": "is 是高頻功能字，i 發短音 /ɪ/，s 在這裡發 /z/（有聲）。功能字（sight words）靠整字視覺記憶，不靠拼音。",
    "specialNote": "高頻功能字（sight word），建議以整字視覺記憶為主"
  },
  "yawn": {
    "word": "yawn",
    "chunkType": "onset-rime",
    "ipa": "/jɔːn/",
    "chunks": [
      {
        "text": "y",
        "ipa": "/j/",
        "role": "onset（y 作輔音）",
        "roleTag": "onset",
        "speakAs": "y",
        "speakMode": "phonetic"
      },
      {
        "text": "awn",
        "ipa": "/ɔːn/",
        "role": "rime（aw 是 vowel team）",
        "roleTag": "rime",
        "speakAs": "yawn",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "aw（/ɔː/）",
    "siblings": [
      "dawn",
      "drawn",
      "fawn",
      "lawn",
      "pawn",
      "spawn"
    ],
    "uiNote": "y 作輔音發 /j/，awn 的 aw 是母音組合，固定發 /ɔː/（圓嘴）。-awn 字族：dawn（黎明）、lawn（草坪）、pawn（棋子 / 典當）。",
    "specialNote": "aw 是 vowel team，發 /ɔː/"
  },
  "looks": {
    "word": "looks",
    "chunkType": "morpheme",
    "ipa": "/lʊks/",
    "chunks": [
      {
        "text": "look",
        "ipa": "/lʊk/",
        "role": "morpheme-root",
        "roleTag": "root",
        "speakAs": "look",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/s/",
        "role": "morpheme-suffix（第三人稱單數動詞 -s，無聲）",
        "roleTag": "suffix",
        "speakAs": "s",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（動詞第三人稱單數）",
    "siblings": [
      "walks",
      "jumps"
    ],
    "uiNote": "looks = look（看）+ s（第三人稱單數）。She looks happy. 這個 -s 是動詞變化，不是複數名詞。-s 在無聲輔音（k）後發 /s/。",
    "specialNote": "-s 為動詞第三人稱單數後綴（非名詞複數）"
  },
  "jumps": {
    "word": "jumps",
    "chunkType": "morpheme",
    "ipa": "/dʒʌmps/",
    "chunks": [
      {
        "text": "jump",
        "ipa": "/dʒʌmp/",
        "role": "morpheme-root",
        "roleTag": "root",
        "speakAs": "jump",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/s/",
        "role": "morpheme-suffix（動詞 -s）",
        "roleTag": "suffix",
        "speakAs": "s",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（動詞後綴）",
    "siblings": [
      "looks",
      "walks",
      "runs"
    ],
    "uiNote": "jumps = jump（跳）+ s（第三人稱單數）。He jumps. -s 在無聲輔音（p）後發 /s/。",
    "specialNote": "-s 為動詞第三人稱單數後綴"
  },
  "see": {
    "word": "see",
    "chunkType": "onset-rime",
    "ipa": "/siː/",
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
        "text": "ee",
        "ipa": "/iː/",
        "role": "rime（vowel team）",
        "roleTag": "rime",
        "speakAs": "ee",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ee",
    "siblings": [
      "bee",
      "fee",
      "free",
      "tree",
      "three",
      "knee"
    ],
    "uiNote": "s 發 /s/，ee 是母音組合，固定發長音 /iː/。-ee 字族：bee（蜜蜂）、tree（樹）、free（自由）。",
    "specialNote": ""
  },
  "walk": {
    "word": "walk",
    "chunkType": "onset-rime",
    "ipa": "/wɔːk/",
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
        "text": "alk",
        "ipa": "/ɔːk/",
        "role": "rime（l 靜音，a 在 lk 前發 /ɔː/）",
        "roleTag": "rime",
        "speakAs": "walk",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "silent-letter",
    "anchor": "silent-l（-alk 結尾）",
    "siblings": [
      "talk",
      "chalk",
      "stalk"
    ],
    "uiNote": "w 發 /w/，alk 的 l 是靜音，a 在這裡發 /ɔː/（圓嘴），整個 alk 唸 /ɔːk/。-alk 字族：talk（說話）、chalk（粉筆）、stalk（莖）都是靜音 l。",
    "specialNote": "⚠️ l 在 -alk 中靜音；a 發 /ɔː/ 而非 /æ/"
  },
  "walks": {
    "word": "walks",
    "chunkType": "morpheme",
    "ipa": "/wɔːks/",
    "chunks": [
      {
        "text": "walk",
        "ipa": "/wɔːk/",
        "role": "morpheme-root",
        "roleTag": "root",
        "speakAs": "walk",
        "speakMode": "direct"
      },
      {
        "text": "s",
        "ipa": "/s/",
        "role": "morpheme-suffix（動詞 -s）",
        "roleTag": "suffix",
        "speakAs": "s",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "suffix",
    "anchor": "-s（動詞後綴）",
    "siblings": [
      "looks",
      "jumps"
    ],
    "uiNote": "walks = walk（走）+ s（第三人稱單數）。She walks to school. -s 在無聲輔音（k）後發 /s/。",
    "specialNote": "-s 為動詞第三人稱單數後綴"
  },
  "down": {
    "word": "down",
    "chunkType": "onset-rime",
    "ipa": "/daʊn/",
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
        "text": "own",
        "ipa": "/aʊn/",
        "role": "rime（vowel team ow=/aʊ/）",
        "roleTag": "rime",
        "speakAs": "own",
        "speakMode": "direct"
      }
    ],
    "memoryAnchorType": "vowel-team",
    "anchor": "ow（/aʊ/）",
    "siblings": [
      "brown",
      "clown",
      "crown",
      "drown",
      "gown",
      "town"
    ],
    "uiNote": "d 發 /d/，own 的 ow 在這裡發 /aʊ/（嘴巴大張到合攏）。-own 字族：brown、town、crown。注意：known 的 own 發 /oʊn/ 是另一種！",
    "specialNote": "⚠️ ow 此字為 /aʊ/；own 有兩種讀法"
  },
  "she": {
    "word": "she",
    "chunkType": "onset-rime",
    "ipa": "/ʃiː/",
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
        "text": "e",
        "ipa": "/iː/",
        "role": "rime（字尾單母音 e 發長音 /iː/）",
        "roleTag": "rime",
        "speakAs": "ee",
        "speakMode": "phonetic"
      }
    ],
    "memoryAnchorType": "digraph",
    "anchor": "sh",
    "siblings": [
      "he",
      "me",
      "we",
      "be"
    ],
    "uiNote": "sh 是二合字母發 /ʃ/，e 在字尾發長音 /iː/（這類短功能字的 e 都唸長音）。類似：he（他）、me（我）、we（我們）。",
    "specialNote": "字尾單 e 在功能字中發長音 /iː/"
  },
  "at": {
    "word": "at",
    "chunkType": "onset-rime",
    "ipa": "/æt/",
    "chunks": [
      {
        "text": "a",
        "ipa": "/æ/",
        "role": "onset（母音開頭）",
        "roleTag": "onset",
        "speakAs": "a",
        "speakMode": "phonetic"
      },
      {
        "text": "t",
        "ipa": "/t/",
        "role": "rime-coda",
        "roleTag": "coda",
        "speakAs": "at",
        "speakMode": "wholeWord"
      }
    ],
    "memoryAnchorType": "word-family",
    "anchor": "-at",
    "siblings": [
      "bat",
      "cat",
      "fat",
      "hat",
      "mat",
      "pat",
      "rat",
      "sat",
      "flat",
      "that"
    ],
    "uiNote": "a 發短音 /æ/，t 是字尾輔音。-at 字族超多：cat、bat、hat、flat、that，是最豐富的字族之一！",
    "specialNote": ""
  }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHUNKS_DATA };
}
