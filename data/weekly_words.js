/**
 * 每周學習單字庫 (第 5 週 ~ 第 19 週)
 * 來源：每周學習單字.txt
 * 包含 Phonics 與 Reading Plus 標註
 */
const WEEKLY_WORDS_DATA = {
  "Week_5": [
    {
      "id": "w5_1",
      "word": "ham",
      "type": "Phonics",
      "syllables": [
        "ham"
      ],
      "chinese": [
        {
          "c": "火",
          "p": "ㄏㄨㄛˇ"
        },
        {
          "c": "腿",
          "p": "ㄊㄨㄟˇ"
        }
      ],
      "emoji": "🍖🥓",
      "week": 5
    },
    {
      "id": "w5_2",
      "word": "hat",
      "type": "Phonics",
      "syllables": [
        "hat"
      ],
      "chinese": [
        {
          "c": "帽",
          "p": "ㄇㄠˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🎩🧢",
      "week": 5
    },
    {
      "id": "w5_3",
      "word": "hammer",
      "type": "Phonics",
      "syllables": [
        "ham",
        "mer"
      ],
      "chinese": [
        {
          "c": "鐵",
          "p": "ㄊㄧㄝˇ"
        },
        {
          "c": "錘",
          "p": "ㄔㄨㄟˊ"
        }
      ],
      "emoji": "🔨🛠️",
      "week": 5
    },
    {
      "id": "w5_4",
      "word": "hand",
      "type": "Phonics",
      "syllables": [
        "hand"
      ],
      "chinese": [
        {
          "c": "手",
          "p": "ㄕㄡˇ"
        }
      ],
      "emoji": "✋🖐️",
      "week": 5
    },
    {
      "id": "w5_5",
      "word": "hose",
      "type": "Phonics",
      "syllables": [
        "hose"
      ],
      "chinese": [
        {
          "c": "水",
          "p": "ㄕㄨㄟˇ"
        },
        {
          "c": "管",
          "p": "ㄍㄨㄢˇ"
        }
      ],
      "emoji": "🚰🚿",
      "week": 5
    },
    {
      "id": "w5_6",
      "word": "helicopter",
      "type": "Phonics",
      "syllables": [
        "hel",
        "i",
        "cop",
        "ter"
      ],
      "chinese": [
        {
          "c": "直",
          "p": "ㄓˊ"
        },
        {
          "c": "升",
          "p": "ㄕㄥ"
        },
        {
          "c": "機",
          "p": "ㄐㄧ"
        }
      ],
      "emoji": "🚁🛸",
      "week": 5
    },
    {
      "id": "w5_7",
      "word": "house",
      "type": "Phonics",
      "syllables": [
        "house"
      ],
      "chinese": [
        {
          "c": "房",
          "p": "ㄈㄤˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🏠🏡",
      "week": 5
    },
    {
      "id": "w5_8",
      "word": "horse",
      "type": "Phonics",
      "syllables": [
        "horse"
      ],
      "chinese": [
        {
          "c": "馬",
          "p": "ㄇㄚˇ"
        }
      ],
      "emoji": "🐴🐎",
      "week": 5
    },
    {
      "id": "w5_9",
      "word": "helmet",
      "type": "Phonics",
      "syllables": [
        "hel",
        "met"
      ],
      "chinese": [
        {
          "c": "安",
          "p": "ㄢ"
        },
        {
          "c": "全",
          "p": "ㄑㄩㄢˊ"
        },
        {
          "c": "帽",
          "p": "ㄇㄠˋ"
        }
      ],
      "emoji": "🪖⛑️",
      "week": 5
    },
    {
      "id": "w5_10",
      "word": "ink",
      "type": "Phonics",
      "syllables": [
        "ink"
      ],
      "chinese": [
        {
          "c": "墨",
          "p": "ㄇㄛˋ"
        },
        {
          "c": "水",
          "p": "ㄕㄨㄟˇ"
        }
      ],
      "emoji": "✒️🖋️",
      "week": 5
    },
    {
      "id": "w5_11",
      "word": "igloo",
      "type": "Phonics",
      "syllables": [
        "ig",
        "loo"
      ],
      "chinese": [
        {
          "c": "冰",
          "p": "ㄅㄧㄥ"
        },
        {
          "c": "屋",
          "p": "ㄨ"
        }
      ],
      "emoji": "🧊🏠",
      "week": 5
    },
    {
      "id": "w5_12",
      "word": "car",
      "type": "Reading Plus",
      "syllables": [
        "car"
      ],
      "chinese": [
        {
          "c": "車",
          "p": "ㄔㄜ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🚗🏎️",
      "week": 5
    },
    {
      "id": "w5_13",
      "word": "cap",
      "type": "Reading Plus",
      "syllables": [
        "cap"
      ],
      "chinese": [
        {
          "c": "鴨",
          "p": "ㄧㄚ"
        },
        {
          "c": "舌",
          "p": "ㄕㄜˊ"
        },
        {
          "c": "帽",
          "p": "ㄇㄠˋ"
        }
      ],
      "emoji": "🧢⚾",
      "week": 5
    },
    {
      "id": "w5_14",
      "word": "can",
      "type": "Reading Plus",
      "syllables": [
        "can"
      ],
      "chinese": [
        {
          "c": "罐",
          "p": "ㄍㄨㄢˋ"
        },
        {
          "c": "頭",
          "p": "ㄊㄡˊ"
        }
      ],
      "emoji": "🥫🥤",
      "week": 5
    },
    {
      "id": "w5_15",
      "word": "candle",
      "type": "Reading Plus",
      "syllables": [
        "can",
        "dle"
      ],
      "chinese": [
        {
          "c": "蠟",
          "p": "ㄌㄚˋ"
        },
        {
          "c": "燭",
          "p": "ㄓㄨˊ"
        }
      ],
      "emoji": "🕯️🎂",
      "week": 5
    },
    {
      "id": "w5_16",
      "word": "carrot",
      "type": "Reading Plus",
      "syllables": [
        "car",
        "rot"
      ],
      "chinese": [
        {
          "c": "胡",
          "p": "ㄏㄨˊ"
        },
        {
          "c": "蘿",
          "p": "ㄌㄨㄛˊ"
        },
        {
          "c": "蔔",
          "p": "ㄅㄛ˙"
        }
      ],
      "emoji": "🥕🐰",
      "week": 5
    },
    {
      "id": "w5_17",
      "word": "comb",
      "type": "Reading Plus",
      "syllables": [
        "comb"
      ],
      "chinese": [
        {
          "c": "梳",
          "p": "ㄕㄨ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🪮💈",
      "week": 5
    },
    {
      "id": "w5_18",
      "word": "corn",
      "type": "Reading Plus",
      "syllables": [
        "corn"
      ],
      "chinese": [
        {
          "c": "玉",
          "p": "ㄩˋ"
        },
        {
          "c": "米",
          "p": "ㄇㄧˇ"
        }
      ],
      "emoji": "🌽🍿",
      "week": 5
    },
    {
      "id": "w5_19",
      "word": "collar",
      "type": "Reading Plus",
      "syllables": [
        "col",
        "lar"
      ],
      "chinese": [
        {
          "c": "衣",
          "p": "ㄧ"
        },
        {
          "c": "領",
          "p": "ㄌㄧㄥˇ"
        }
      ],
      "emoji": "👔🐶",
      "week": 5
    },
    {
      "id": "w5_20",
      "word": "coat",
      "type": "Reading Plus",
      "syllables": [
        "coat"
      ],
      "chinese": [
        {
          "c": "外",
          "p": "ㄨㄞˋ"
        },
        {
          "c": "套",
          "p": "ㄊㄠˋ"
        }
      ],
      "emoji": "🧥❄️",
      "week": 5
    },
    {
      "id": "w5_21",
      "word": "cow",
      "type": "Reading Plus",
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
      "week": 5
    },
    {
      "id": "w5_22",
      "word": "elephant",
      "type": "Reading Plus",
      "syllables": [
        "el",
        "e",
        "phant"
      ],
      "chinese": [
        {
          "c": "大",
          "p": "ㄉㄚˋ"
        },
        {
          "c": "象",
          "p": "ㄒㄧㄤˋ"
        }
      ],
      "emoji": "🐘🦒",
      "week": 5
    },
    {
      "id": "w5_23",
      "word": "elbow",
      "type": "Reading Plus",
      "syllables": [
        "el",
        "bow"
      ],
      "chinese": [
        {
          "c": "手",
          "p": "ㄕㄡˇ"
        },
        {
          "c": "肘",
          "p": "ㄓㄡˇ"
        }
      ],
      "emoji": "🦾💪",
      "week": 5
    },
    {
      "id": "w5_24",
      "word": "egg",
      "type": "Reading Plus",
      "syllables": [
        "egg"
      ],
      "chinese": [
        {
          "c": "雞",
          "p": "ㄐㄧ"
        },
        {
          "c": "蛋",
          "p": "ㄉㄢˋ"
        }
      ],
      "emoji": "🥚🍳",
      "week": 5
    },
    {
      "id": "w5_25",
      "word": "elf",
      "type": "Reading Plus",
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
      "week": 5
    },
    {
      "id": "w5_26",
      "word": "elevator",
      "type": "Reading Plus",
      "syllables": [
        "el",
        "e",
        "va",
        "tor"
      ],
      "chinese": [
        {
          "c": "電",
          "p": "ㄉㄧㄢˋ"
        },
        {
          "c": "梯",
          "p": "ㄊㄧ"
        }
      ],
      "emoji": "🛗🏢",
      "week": 5
    },
    {
      "id": "w5_27",
      "word": "fence",
      "type": "Reading Plus",
      "syllables": [
        "fence"
      ],
      "chinese": [
        {
          "c": "籬",
          "p": "ㄌㄧˊ"
        },
        {
          "c": "芭",
          "p": "ㄅㄚ"
        }
      ],
      "emoji": "🪵🏡",
      "week": 5
    },
    {
      "id": "w5_28",
      "word": "belt",
      "type": "Reading Plus",
      "syllables": [
        "belt"
      ],
      "chinese": [
        {
          "c": "皮",
          "p": "ㄆㄧˊ"
        },
        {
          "c": "帶",
          "p": "ㄉㄞˋ"
        }
      ],
      "emoji": "👖➰",
      "week": 5
    },
    {
      "id": "w5_29",
      "word": "dress",
      "type": "Reading Plus",
      "syllables": [
        "dress"
      ],
      "chinese": [
        {
          "c": "洋",
          "p": "ㄧㄤˊ"
        },
        {
          "c": "裝",
          "p": "ㄓㄨㄤ"
        }
      ],
      "emoji": "👗👸",
      "week": 5
    },
    {
      "id": "w5_30",
      "word": "net",
      "type": "Reading Plus",
      "syllables": [
        "net"
      ],
      "chinese": [
        {
          "c": "網",
          "p": "ㄨㄤˇ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🕸️🥅",
      "week": 5
    },
    {
      "id": "w5_31",
      "word": "sled",
      "type": "Reading Plus",
      "syllables": [
        "sled"
      ],
      "chinese": [
        {
          "c": "雪",
          "p": "ㄒㄩㄝˇ"
        },
        {
          "c": "橇",
          "p": "ㄑㄧㄠ"
        }
      ],
      "emoji": "🛷❄️",
      "week": 5
    },
    {
      "id": "w5_32",
      "word": "ten",
      "type": "Reading Plus",
      "syllables": [
        "ten"
      ],
      "chinese": [
        {
          "c": "十",
          "p": "ㄕˊ"
        }
      ],
      "emoji": "🔟🖐️",
      "week": 5
    },
    {
      "id": "w5_33",
      "word": "shell",
      "type": "Reading Plus",
      "syllables": [
        "shell"
      ],
      "chinese": [
        {
          "c": "貝",
          "p": "ㄅㄟˋ"
        },
        {
          "c": "殼",
          "p": "ㄎㄜˊ"
        }
      ],
      "emoji": "🐚🌊",
      "week": 5
    },
    {
      "id": "w5_34",
      "word": "bed",
      "type": "Reading Plus",
      "syllables": [
        "bed"
      ],
      "chinese": [
        {
          "c": "床",
          "p": "ㄔㄨㄤˊ"
        }
      ],
      "emoji": "🛏️💤",
      "week": 5
    },
    {
      "id": "w5_35",
      "word": "web",
      "type": "Reading Plus",
      "syllables": [
        "web"
      ],
      "chinese": [
        {
          "c": "蜘",
          "p": "ㄓ"
        },
        {
          "c": "蛛",
          "p": "ㄓㄨ"
        },
        {
          "c": "網",
          "p": "ㄨㄤˇ"
        }
      ],
      "emoji": "🕸️🕷️",
      "week": 5
    },
    {
      "id": "w5_36",
      "word": "bell",
      "type": "Reading Plus",
      "syllables": [
        "bell"
      ],
      "chinese": [
        {
          "c": "鈴",
          "p": "ㄌㄧㄥˊ"
        },
        {
          "c": "鐺",
          "p": "ㄉㄤ"
        }
      ],
      "emoji": "🔔🔔",
      "week": 5
    }
  ],
  "Week_6": [
    {
      "id": "w6_1",
      "word": "fish",
      "type": "Reading Plus",
      "syllables": [
        "fish"
      ],
      "chinese": [
        {
          "c": "魚",
          "p": "ㄩˊ"
        }
      ],
      "emoji": "🐟🐠",
      "week": 6
    },
    {
      "id": "w6_2",
      "word": "fork",
      "type": "Reading Plus",
      "syllables": [
        "fork"
      ],
      "chinese": [
        {
          "c": "叉",
          "p": "ㄔㄚ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🍴🍝",
      "week": 6
    },
    {
      "id": "w6_3",
      "word": "fire",
      "type": "Reading Plus",
      "syllables": [
        "fire"
      ],
      "chinese": [
        {
          "c": "火",
          "p": "ㄏㄨㄛˇ"
        }
      ],
      "emoji": "🔥🚒",
      "week": 6
    },
    {
      "id": "w6_4",
      "word": "fan",
      "type": "Reading Plus",
      "syllables": [
        "fan"
      ],
      "chinese": [
        {
          "c": "風",
          "p": "ㄈㄥ"
        },
        {
          "c": "扇",
          "p": "ㄕㄢˋ"
        }
      ],
      "emoji": "🌀🌬️",
      "week": 6
    },
    {
      "id": "w6_5",
      "word": "foot",
      "type": "Reading Plus",
      "syllables": [
        "foot"
      ],
      "chinese": [
        {
          "c": "腳",
          "p": "ㄐㄧㄠˇ"
        }
      ],
      "emoji": "🦶👟",
      "week": 6
    },
    {
      "id": "w6_6",
      "word": "feet",
      "type": "Reading Plus",
      "syllables": [
        "feet"
      ],
      "chinese": [
        {
          "c": "雙",
          "p": "ㄕㄨㄤ"
        },
        {
          "c": "腳",
          "p": "ㄐㄧㄠˇ"
        }
      ],
      "emoji": "🦶🦶",
      "week": 6
    },
    {
      "id": "w6_7",
      "word": "four",
      "type": "Reading Plus",
      "syllables": [
        "four"
      ],
      "chinese": [
        {
          "c": "四",
          "p": "ㄙˋ"
        }
      ],
      "emoji": "4️⃣🍀",
      "week": 6
    },
    {
      "id": "w6_8",
      "word": "fox",
      "type": "Reading Plus",
      "syllables": [
        "fox"
      ],
      "chinese": [
        {
          "c": "狐",
          "p": "ㄏㄨˊ"
        },
        {
          "c": "狸",
          "p": "ㄌㄧ˙"
        }
      ],
      "emoji": "🦊🌲",
      "week": 6
    },
    {
      "id": "w6_9",
      "word": "football",
      "type": "Reading Plus",
      "syllables": [
        "foot",
        "ball"
      ],
      "chinese": [
        {
          "c": "足",
          "p": "ㄗㄨˊ"
        },
        {
          "c": "球",
          "p": "ㄑㄧㄡˊ"
        }
      ],
      "emoji": "⚽🏈",
      "week": 6
    },
    {
      "id": "w6_10",
      "word": "feather",
      "type": "Reading Plus",
      "syllables": [
        "feath",
        "er"
      ],
      "chinese": [
        {
          "c": "羽",
          "p": "ㄩˇ"
        },
        {
          "c": "毛",
          "p": "ㄇㄠˊ"
        }
      ],
      "emoji": "🪶🦚",
      "week": 6
    },
    {
      "id": "w6_11",
      "word": "lion",
      "type": "Reading Plus",
      "syllables": [
        "li",
        "on"
      ],
      "chinese": [
        {
          "c": "獅",
          "p": "ㄕ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🦁👑",
      "week": 6
    },
    {
      "id": "w6_12",
      "word": "lock",
      "type": "Reading Plus",
      "syllables": [
        "lock"
      ],
      "chinese": [
        {
          "c": "鎖",
          "p": "ㄙㄨㄛˇ"
        }
      ],
      "emoji": "🔒🔑",
      "week": 6
    },
    {
      "id": "w6_13",
      "word": "leaf",
      "type": "Reading Plus",
      "syllables": [
        "leaf"
      ],
      "chinese": [
        {
          "c": "樹",
          "p": "ㄕㄨˋ"
        },
        {
          "c": "葉",
          "p": "ㄧㄝˋ"
        }
      ],
      "emoji": "🍃🍂",
      "week": 6
    },
    {
      "id": "w6_14",
      "word": "log",
      "type": "Reading Plus",
      "syllables": [
        "log"
      ],
      "chinese": [
        {
          "c": "木",
          "p": "ㄇㄨˋ"
        },
        {
          "c": "頭",
          "p": "ㄊㄡˊ"
        }
      ],
      "emoji": "🪵🌲",
      "week": 6
    },
    {
      "id": "w6_15",
      "word": "lip",
      "type": "Reading Plus",
      "syllables": [
        "lip"
      ],
      "chinese": [
        {
          "c": "嘴",
          "p": "ㄗㄨㄟˇ"
        },
        {
          "c": "唇",
          "p": "ㄔㄨㄣˊ"
        }
      ],
      "emoji": "👄💋",
      "week": 6
    },
    {
      "id": "w6_16",
      "word": "lamp",
      "type": "Reading Plus",
      "syllables": [
        "lamp"
      ],
      "chinese": [
        {
          "c": "檯",
          "p": "ㄊㄞˊ"
        },
        {
          "c": "燈",
          "p": "ㄉㄥ"
        }
      ],
      "emoji": "💡🛋️",
      "week": 6
    },
    {
      "id": "w6_17",
      "word": "letter",
      "type": "Reading Plus",
      "syllables": [
        "let",
        "ter"
      ],
      "chinese": [
        {
          "c": "信",
          "p": "ㄒㄧㄣˋ"
        },
        {
          "c": "件",
          "p": "ㄐㄧㄢˋ"
        }
      ],
      "emoji": "✉️𔤤",
      "week": 6
    },
    {
      "id": "w6_18",
      "word": "ladder",
      "type": "Reading Plus",
      "syllables": [
        "lad",
        "der"
      ],
      "chinese": [
        {
          "c": "梯",
          "p": "ㄊㄧ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🪜🧱",
      "week": 6
    },
    {
      "id": "w6_19",
      "word": "leg",
      "type": "Reading Plus",
      "syllables": [
        "leg"
      ],
      "chinese": [
        {
          "c": "腿",
          "p": "ㄊㄨㄟˇ"
        }
      ],
      "emoji": "🦵🩳",
      "week": 6
    },
    {
      "id": "w6_20",
      "word": "light bulb",
      "type": "Reading Plus",
      "syllables": [
        "light",
        "bulb"
      ],
      "chinese": [
        {
          "c": "電",
          "p": "ㄉㄧㄢˋ"
        },
        {
          "c": "燈",
          "p": "ㄉㄥ"
        },
        {
          "c": "泡",
          "p": "ㄆㄠˋ"
        }
      ],
      "emoji": "💡✨",
      "week": 6
    }
  ],
  "Week_7": [
    {
      "id": "w7_1",
      "word": "bib",
      "type": "Phonics",
      "syllables": [
        "bib"
      ],
      "chinese": [
        {
          "c": "圍",
          "p": "ㄨㄟˊ"
        },
        {
          "c": "兜",
          "p": "ㄉㄡ"
        }
      ],
      "emoji": "👶🍼",
      "week": 7
    },
    {
      "id": "w7_2",
      "word": "pig",
      "type": "Phonics",
      "syllables": [
        "pig"
      ],
      "chinese": [
        {
          "c": "豬",
          "p": "ㄓㄨ"
        }
      ],
      "emoji": "🐷🐽",
      "week": 7
    },
    {
      "id": "w7_3",
      "word": "milk",
      "type": "Phonics",
      "syllables": [
        "milk"
      ],
      "chinese": [
        {
          "c": "牛",
          "p": "ㄋㄧㄡˊ"
        },
        {
          "c": "奶",
          "p": "ㄋㄞˇ"
        }
      ],
      "emoji": "🥛🐮",
      "week": 7
    },
    {
      "id": "w7_4",
      "word": "fish",
      "type": "Phonics",
      "syllables": [
        "fish"
      ],
      "chinese": [
        {
          "c": "魚",
          "p": "ㄩˊ"
        }
      ],
      "emoji": "🐟🐠",
      "week": 7
    },
    {
      "id": "w7_5",
      "word": "six",
      "type": "Phonics",
      "syllables": [
        "six"
      ],
      "chinese": [
        {
          "c": "六",
          "p": "ㄌㄧㄡˋ"
        }
      ],
      "emoji": "6️⃣🤙",
      "week": 7
    },
    {
      "id": "w7_6",
      "word": "chick",
      "type": "Phonics",
      "syllables": [
        "chick"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "雞",
          "p": "ㄐㄧ"
        }
      ],
      "emoji": "🐥🐣",
      "week": 7
    },
    {
      "id": "w7_7",
      "word": "lips",
      "type": "Phonics",
      "syllables": [
        "lips"
      ],
      "chinese": [
        {
          "c": "嘴",
          "p": "ㄗㄨㄟˇ"
        },
        {
          "c": "唇",
          "p": "ㄔㄨㄣˊ"
        }
      ],
      "emoji": "👄💋",
      "week": 7
    },
    {
      "id": "w7_8",
      "word": "jacks",
      "type": "Phonics",
      "syllables": [
        "jacks"
      ],
      "chinese": [
        {
          "c": "撿",
          "p": "ㄐㄧㄢˇ"
        },
        {
          "c": "石",
          "p": "ㄕˊ"
        },
        {
          "c": "遊",
          "p": "ㄧㄡˊ"
        },
        {
          "c": "戲",
          "p": "ㄒㄧˋ"
        }
      ],
      "emoji": "🤹⭐",
      "week": 7
    },
    {
      "id": "w7_9",
      "word": "jar",
      "type": "Phonics",
      "syllables": [
        "jar"
      ],
      "chinese": [
        {
          "c": "罐",
          "p": "ㄍㄨㄢˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "𫪔🍯",
      "week": 7
    },
    {
      "id": "w7_10",
      "word": "jug",
      "type": "Phonics",
      "syllables": [
        "jug"
      ],
      "chinese": [
        {
          "c": "水",
          "p": "ㄕㄨㄟˇ"
        },
        {
          "c": "壺",
          "p": "ㄏㄨˊ"
        }
      ],
      "emoji": "🏺💦",
      "week": 7
    },
    {
      "id": "w7_11",
      "word": "jump",
      "type": "Phonics",
      "syllables": [
        "jump"
      ],
      "chinese": [
        {
          "c": "跳",
          "p": "ㄊㄧㄠˋ"
        }
      ],
      "emoji": "🦘⬆️",
      "week": 7
    },
    {
      "id": "w7_12",
      "word": "jeep",
      "type": "Phonics",
      "syllables": [
        "jeep"
      ],
      "chinese": [
        {
          "c": "吉",
          "p": "ㄐㄧˊ"
        },
        {
          "c": "普",
          "p": "ㄆㄨˇ"
        },
        {
          "c": "車",
          "p": "ㄔㄜ"
        }
      ],
      "emoji": "🚙⛰️",
      "week": 7
    },
    {
      "id": "w7_13",
      "word": "horse",
      "type": "Reading Plus",
      "syllables": [
        "horse"
      ],
      "chinese": [
        {
          "c": "馬",
          "p": "ㄇㄚˇ"
        }
      ],
      "emoji": "🐴🐎",
      "week": 7
    },
    {
      "id": "w7_14",
      "word": "house",
      "type": "Reading Plus",
      "syllables": [
        "house"
      ],
      "chinese": [
        {
          "c": "房",
          "p": "ㄈㄤˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🏠🏡",
      "week": 7
    },
    {
      "id": "w7_15",
      "word": "hanger",
      "type": "Reading Plus",
      "syllables": [
        "hang",
        "er"
      ],
      "chinese": [
        {
          "c": "衣",
          "p": "ㄧ"
        },
        {
          "c": "架",
          "p": "ㄐㄧㄚˋ"
        }
      ],
      "emoji": "🧥🪝",
      "week": 7
    },
    {
      "id": "w7_16",
      "word": "hose",
      "type": "Reading Plus",
      "syllables": [
        "hose"
      ],
      "chinese": [
        {
          "c": "水",
          "p": "ㄕㄨㄟˇ"
        },
        {
          "c": "管",
          "p": "ㄍㄨㄢˇ"
        }
      ],
      "emoji": "🚰🚿",
      "week": 7
    },
    {
      "id": "w7_17",
      "word": "hand",
      "type": "Reading Plus",
      "syllables": [
        "hand"
      ],
      "chinese": [
        {
          "c": "手",
          "p": "ㄕㄡˇ"
        }
      ],
      "emoji": "✋🖐️",
      "week": 7
    },
    {
      "id": "w7_18",
      "word": "horn",
      "type": "Reading Plus",
      "syllables": [
        "horn"
      ],
      "chinese": [
        {
          "c": "喇",
          "p": "ㄌㄚˇ"
        },
        {
          "c": "叭",
          "p": "ㄅㄚ"
        }
      ],
      "emoji": "🎺📯",
      "week": 7
    },
    {
      "id": "w7_19",
      "word": "ham",
      "type": "Reading Plus",
      "syllables": [
        "ham"
      ],
      "chinese": [
        {
          "c": "火",
          "p": "ㄏㄨㄛˇ"
        },
        {
          "c": "腿",
          "p": "ㄊㄨㄟˇ"
        }
      ],
      "emoji": "🍖🥓",
      "week": 7
    },
    {
      "id": "w7_20",
      "word": "helicopter",
      "type": "Reading Plus",
      "syllables": [
        "hel",
        "i",
        "cop",
        "ter"
      ],
      "chinese": [
        {
          "c": "直",
          "p": "ㄓˊ"
        },
        {
          "c": "升",
          "p": "ㄕㄥ"
        },
        {
          "c": "機",
          "p": "ㄐㄧ"
        }
      ],
      "emoji": "🚁🛸",
      "week": 7
    },
    {
      "id": "w7_21",
      "word": "hat",
      "type": "Reading Plus",
      "syllables": [
        "hat"
      ],
      "chinese": [
        {
          "c": "帽",
          "p": "ㄇㄠˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🎩🧢",
      "week": 7
    },
    {
      "id": "w7_22",
      "word": "rainbow",
      "type": "Reading Plus",
      "syllables": [
        "rain",
        "bow"
      ],
      "chinese": [
        {
          "c": "彩",
          "p": "ㄘㄞˇ"
        },
        {
          "c": "虹",
          "p": "ㄏㄨㄥˊ"
        }
      ],
      "emoji": "🌈☀️",
      "week": 7
    },
    {
      "id": "w7_23",
      "word": "rake",
      "type": "Reading Plus",
      "syllables": [
        "rake"
      ],
      "chinese": [
        {
          "c": "耙",
          "p": "ㄆㄚˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🧹🍂",
      "week": 7
    },
    {
      "id": "w7_24",
      "word": "rooster",
      "type": "Reading Plus",
      "syllables": [
        "roost",
        "er"
      ],
      "chinese": [
        {
          "c": "公",
          "p": "ㄍㄨㄥ"
        },
        {
          "c": "雞",
          "p": "ㄐㄧ"
        }
      ],
      "emoji": "🐓🌅",
      "week": 7
    },
    {
      "id": "w7_25",
      "word": "rattle",
      "type": "Reading Plus",
      "syllables": [
        "rat",
        "tle"
      ],
      "chinese": [
        {
          "c": "搖",
          "p": "ㄧㄠˊ"
        },
        {
          "c": "鈴",
          "p": "ㄌㄧㄥˊ"
        }
      ],
      "emoji": "🪇👶",
      "week": 7
    },
    {
      "id": "w7_26",
      "word": "rocks",
      "type": "Reading Plus",
      "syllables": [
        "rocks"
      ],
      "chinese": [
        {
          "c": "石",
          "p": "ㄕˊ"
        },
        {
          "c": "頭",
          "p": "ㄊㄡˊ"
        }
      ],
      "emoji": "🪨⛰️",
      "week": 7
    },
    {
      "id": "w7_27",
      "word": "roof",
      "type": "Reading Plus",
      "syllables": [
        "roof"
      ],
      "chinese": [
        {
          "c": "屋",
          "p": "ㄨ"
        },
        {
          "c": "頂",
          "p": "ㄉㄧㄥˇ"
        }
      ],
      "emoji": "🏠🛖",
      "week": 7
    },
    {
      "id": "w7_28",
      "word": "ruler",
      "type": "Reading Plus",
      "syllables": [
        "ru",
        "ler"
      ],
      "chinese": [
        {
          "c": "尺",
          "p": "ㄔˇ"
        }
      ],
      "emoji": "📏📐",
      "week": 7
    },
    {
      "id": "w7_29",
      "word": "rope",
      "type": "Reading Plus",
      "syllables": [
        "rope"
      ],
      "chinese": [
        {
          "c": "繩",
          "p": "ㄕㄥˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🪢➰",
      "week": 7
    },
    {
      "id": "w7_30",
      "word": "refrigerator",
      "type": "Reading Plus",
      "syllables": [
        "re",
        "frig",
        "er",
        "a",
        "tor"
      ],
      "chinese": [
        {
          "c": "冰",
          "p": "ㄅㄧㄥ"
        },
        {
          "c": "箱",
          "p": "ㄒㄧㄤ"
        }
      ],
      "emoji": "🧊❄️",
      "week": 7
    }
  ],
  "Week_8": [
    {
      "id": "w8_1",
      "word": "key",
      "type": "Phonics",
      "syllables": [
        "key"
      ],
      "chinese": [
        {
          "c": "鑰",
          "p": "ㄧㄠˋ"
        },
        {
          "c": "匙",
          "p": "ㄕ˙"
        }
      ],
      "emoji": "🔑🔒",
      "week": 8
    },
    {
      "id": "w8_2",
      "word": "kiss",
      "type": "Phonics",
      "syllables": [
        "kiss"
      ],
      "chinese": [
        {
          "c": "親",
          "p": "ㄑㄧㄣ"
        },
        {
          "c": "吻",
          "p": "ㄨㄣˇ"
        }
      ],
      "emoji": "💋👩‍👦",
      "week": 8
    },
    {
      "id": "w8_3",
      "word": "kite",
      "type": "Phonics",
      "syllables": [
        "kite"
      ],
      "chinese": [
        {
          "c": "風",
          "p": "ㄈㄥ"
        },
        {
          "c": "箏",
          "p": "ㄓㄥ"
        }
      ],
      "emoji": "🪁🪁",
      "week": 8
    },
    {
      "id": "w8_4",
      "word": "king",
      "type": "Phonics",
      "syllables": [
        "king"
      ],
      "chinese": [
        {
          "c": "國",
          "p": "ㄍㄨㄛˊ"
        },
        {
          "c": "王",
          "p": "ㄨㄤˊ"
        }
      ],
      "emoji": "👑🤴",
      "week": 8
    },
    {
      "id": "w8_5",
      "word": "kick",
      "type": "Phonics",
      "syllables": [
        "kick"
      ],
      "chinese": [
        {
          "c": "踢",
          "p": "ㄊㄧ"
        }
      ],
      "emoji": "🦵⚽",
      "week": 8
    },
    {
      "id": "w8_6",
      "word": "lamp",
      "type": "Phonics",
      "syllables": [
        "lamp"
      ],
      "chinese": [
        {
          "c": "檯",
          "p": "ㄊㄞˊ"
        },
        {
          "c": "燈",
          "p": "ㄉㄥ"
        }
      ],
      "emoji": "💡🛋️",
      "week": 8
    },
    {
      "id": "w8_7",
      "word": "leg",
      "type": "Phonics",
      "syllables": [
        "leg"
      ],
      "chinese": [
        {
          "c": "腿",
          "p": "ㄊㄨㄟˇ"
        }
      ],
      "emoji": "🦵🩳",
      "week": 8
    },
    {
      "id": "w8_8",
      "word": "lock",
      "type": "Phonics",
      "syllables": [
        "lock"
      ],
      "chinese": [
        {
          "c": "鎖",
          "p": "ㄙㄨㄛˇ"
        }
      ],
      "emoji": "🔒🔑",
      "week": 8
    },
    {
      "id": "w8_9",
      "word": "letter",
      "type": "Phonics",
      "syllables": [
        "let",
        "ter"
      ],
      "chinese": [
        {
          "c": "信",
          "p": "ㄒㄧㄣˋ"
        },
        {
          "c": "件",
          "p": "ㄐㄧㄢˋ"
        }
      ],
      "emoji": "✉️𔤤",
      "week": 8
    },
    {
      "id": "w8_10",
      "word": "ladder",
      "type": "Phonics",
      "syllables": [
        "lad",
        "der"
      ],
      "chinese": [
        {
          "c": "梯",
          "p": "ㄊㄧ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🪜🧱",
      "week": 8
    },
    {
      "id": "w8_11",
      "word": "log",
      "type": "Phonics",
      "syllables": [
        "log"
      ],
      "chinese": [
        {
          "c": "木",
          "p": "ㄇㄨˋ"
        },
        {
          "c": "頭",
          "p": "ㄊㄡˊ"
        }
      ],
      "emoji": "🪵🌲",
      "week": 8
    },
    {
      "id": "w8_12",
      "word": "iguana",
      "type": "Reading Plus",
      "syllables": [
        "i",
        "gua",
        "na"
      ],
      "chinese": [
        {
          "c": "鬣",
          "p": "ㄌㄧㄝˋ"
        },
        {
          "c": "蜥",
          "p": "ㄒㄧ"
        }
      ],
      "emoji": "🦎🌿",
      "week": 8
    },
    {
      "id": "w8_13",
      "word": "insects",
      "type": "Reading Plus",
      "syllables": [
        "in",
        "sects"
      ],
      "chinese": [
        {
          "c": "昆",
          "p": "ㄎㄨㄣ"
        },
        {
          "c": "蟲",
          "p": "ㄔㄨㄥˊ"
        }
      ],
      "emoji": "🐛🐞",
      "week": 8
    },
    {
      "id": "w8_14",
      "word": "instruments",
      "type": "Reading Plus",
      "syllables": [
        "in",
        "stru",
        "ments"
      ],
      "chinese": [
        {
          "c": "樂",
          "p": "ㄩㄝˋ"
        },
        {
          "c": "器",
          "p": "ㄑㄧˋ"
        }
      ],
      "emoji": "🎺🎸",
      "week": 8
    },
    {
      "id": "w8_15",
      "word": "chick",
      "type": "Reading Plus",
      "syllables": [
        "chick"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "雞",
          "p": "ㄐㄧ"
        }
      ],
      "emoji": "🐥🐣",
      "week": 8
    },
    {
      "id": "w8_16",
      "word": "milk",
      "type": "Reading Plus",
      "syllables": [
        "milk"
      ],
      "chinese": [
        {
          "c": "牛",
          "p": "ㄋㄧㄡˊ"
        },
        {
          "c": "奶",
          "p": "ㄋㄞˇ"
        }
      ],
      "emoji": "🥛🐮",
      "week": 8
    },
    {
      "id": "w8_17",
      "word": "dishes",
      "type": "Reading Plus",
      "syllables": [
        "dish",
        "es"
      ],
      "chinese": [
        {
          "c": "盤",
          "p": "ㄆㄢˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🍽️🥣",
      "week": 8
    },
    {
      "id": "w8_18",
      "word": "king",
      "type": "Reading Plus",
      "syllables": [
        "king"
      ],
      "chinese": [
        {
          "c": "國",
          "p": "ㄍㄨㄛˊ"
        },
        {
          "c": "王",
          "p": "ㄨㄤˊ"
        }
      ],
      "emoji": "👑🤴",
      "week": 8
    },
    {
      "id": "w8_19",
      "word": "fish",
      "type": "Reading Plus",
      "syllables": [
        "fish"
      ],
      "chinese": [
        {
          "c": "魚",
          "p": "ㄩˊ"
        }
      ],
      "emoji": "🐟🐠",
      "week": 8
    },
    {
      "id": "w8_20",
      "word": "wig",
      "type": "Reading Plus",
      "syllables": [
        "wig"
      ],
      "chinese": [
        {
          "c": "假",
          "p": "ㄐㄧㄚˇ"
        },
        {
          "c": "髮",
          "p": "ㄈㄚˇ"
        }
      ],
      "emoji": "🧑‍🦰👩‍🦳",
      "week": 8
    },
    {
      "id": "w8_21",
      "word": "bib",
      "type": "Reading Plus",
      "syllables": [
        "bib"
      ],
      "chinese": [
        {
          "c": "圍",
          "p": "ㄨㄟˊ"
        },
        {
          "c": "兜",
          "p": "ㄉㄡ"
        }
      ],
      "emoji": "👶🍼",
      "week": 8
    },
    {
      "id": "w8_22",
      "word": "goat",
      "type": "Reading Plus",
      "syllables": [
        "goat"
      ],
      "chinese": [
        {
          "c": "山",
          "p": "ㄕㄢ"
        },
        {
          "c": "羊",
          "p": "ㄧㄤˊ"
        }
      ],
      "emoji": "🐐🌿",
      "week": 8
    },
    {
      "id": "w8_23",
      "word": "gate",
      "type": "Reading Plus",
      "syllables": [
        "gate"
      ],
      "chinese": [
        {
          "c": "大",
          "p": "ㄉㄚˋ"
        },
        {
          "c": "門",
          "p": "ㄇㄣˊ"
        }
      ],
      "emoji": "🚪🏡",
      "week": 8
    },
    {
      "id": "w8_24",
      "word": "guitar",
      "type": "Reading Plus",
      "syllables": [
        "gui",
        "tar"
      ],
      "chinese": [
        {
          "c": "吉",
          "p": "ㄐㄧˊ"
        },
        {
          "c": "他",
          "p": "ㄊㄚ"
        }
      ],
      "emoji": "🎸🎶",
      "week": 8
    },
    {
      "id": "w8_25",
      "word": "garden",
      "type": "Reading Plus",
      "syllables": [
        "gar",
        "den"
      ],
      "chinese": [
        {
          "c": "花",
          "p": "ㄏㄨㄚ"
        },
        {
          "c": "園",
          "p": "ㄩㄢˊ"
        }
      ],
      "emoji": "🪴🌷",
      "week": 8
    },
    {
      "id": "w8_26",
      "word": "goose",
      "type": "Reading Plus",
      "syllables": [
        "goose"
      ],
      "chinese": [
        {
          "c": "鵝",
          "p": "ㄜˊ"
        }
      ],
      "emoji": "🪿🌊",
      "week": 8
    },
    {
      "id": "w8_27",
      "word": "gas",
      "type": "Reading Plus",
      "syllables": [
        "gas"
      ],
      "chinese": [
        {
          "c": "瓦",
          "p": "ㄨㄚˇ"
        },
        {
          "c": "斯",
          "p": "ㄙ"
        }
      ],
      "emoji": "⛽🚗",
      "week": 8
    },
    {
      "id": "w8_28",
      "word": "girl",
      "type": "Reading Plus",
      "syllables": [
        "girl"
      ],
      "chinese": [
        {
          "c": "女",
          "p": "ㄋㄩˇ"
        },
        {
          "c": "孩",
          "p": "ㄏㄞˊ"
        }
      ],
      "emoji": "👧👩",
      "week": 8
    },
    {
      "id": "w8_29",
      "word": "game",
      "type": "Reading Plus",
      "syllables": [
        "game"
      ],
      "chinese": [
        {
          "c": "遊",
          "p": "ㄧㄡˊ"
        },
        {
          "c": "戲",
          "p": "ㄒㄧˋ"
        }
      ],
      "emoji": "🎮🕹️",
      "week": 8
    }
  ],
  "Week_9": [
    {
      "id": "w9_1",
      "word": "map",
      "type": "Phonics",
      "syllables": [
        "map"
      ],
      "chinese": [
        {
          "c": "地",
          "p": "ㄉㄧˋ"
        },
        {
          "c": "圖",
          "p": "ㄊㄨˊ"
        }
      ],
      "emoji": "🗺️📍",
      "week": 9
    },
    {
      "id": "w9_2",
      "word": "man",
      "type": "Phonics",
      "syllables": [
        "man"
      ],
      "chinese": [
        {
          "c": "男",
          "p": "ㄋㄢˊ"
        },
        {
          "c": "人",
          "p": "ㄖㄣˊ"
        }
      ],
      "emoji": "👨🧔",
      "week": 9
    },
    {
      "id": "w9_3",
      "word": "mask",
      "type": "Phonics",
      "syllables": [
        "mask"
      ],
      "chinese": [
        {
          "c": "面",
          "p": "ㄇㄧㄢˋ"
        },
        {
          "c": "具",
          "p": "ㄐㄩˋ"
        }
      ],
      "emoji": "🎭😷",
      "week": 9
    },
    {
      "id": "w9_4",
      "word": "magnet",
      "type": "Phonics",
      "syllables": [
        "mag",
        "net"
      ],
      "chinese": [
        {
          "c": "磁",
          "p": "ㄘˊ"
        },
        {
          "c": "鐵",
          "p": "ㄊㄧㄝˇ"
        }
      ],
      "emoji": "🧲⚡",
      "week": 9
    },
    {
      "id": "w9_5",
      "word": "milk",
      "type": "Phonics",
      "syllables": [
        "milk"
      ],
      "chinese": [
        {
          "c": "牛",
          "p": "ㄋㄧㄡˊ"
        },
        {
          "c": "奶",
          "p": "ㄋㄞˇ"
        }
      ],
      "emoji": "🥛🐮",
      "week": 9
    },
    {
      "id": "w9_6",
      "word": "mop",
      "type": "Phonics",
      "syllables": [
        "mop"
      ],
      "chinese": [
        {
          "c": "拖",
          "p": "ㄊㄨㄛ"
        },
        {
          "c": "把",
          "p": "ㄅㄚˇ"
        }
      ],
      "emoji": "🧹🪣",
      "week": 9
    },
    {
      "id": "w9_7",
      "word": "moon",
      "type": "Phonics",
      "syllables": [
        "moon"
      ],
      "chinese": [
        {
          "c": "月",
          "p": "ㄩㄝˋ"
        },
        {
          "c": "亮",
          "p": "ㄌㄧㄤˋ"
        }
      ],
      "emoji": "🌙🌌",
      "week": 9
    },
    {
      "id": "w9_8",
      "word": "nose",
      "type": "Phonics",
      "syllables": [
        "nose"
      ],
      "chinese": [
        {
          "c": "鼻",
          "p": "ㄅㄧˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "👃👃",
      "week": 9
    },
    {
      "id": "w9_9",
      "word": "neck",
      "type": "Phonics",
      "syllables": [
        "neck"
      ],
      "chinese": [
        {
          "c": "脖",
          "p": "ㄅㄛˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🧣💆‍♂️",
      "week": 9
    },
    {
      "id": "w9_10",
      "word": "nest",
      "type": "Phonics",
      "syllables": [
        "nest"
      ],
      "chinese": [
        {
          "c": "鳥",
          "p": "ㄋㄧㄠˇ"
        },
        {
          "c": "巢",
          "p": "ㄔㄠˊ"
        }
      ],
      "emoji": "🪹🐦",
      "week": 9
    },
    {
      "id": "w9_11",
      "word": "nail",
      "type": "Phonics",
      "syllables": [
        "nail"
      ],
      "chinese": [
        {
          "c": "釘",
          "p": "ㄉㄧㄥ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🔨💅",
      "week": 9
    },
    {
      "id": "w9_12",
      "word": "nine",
      "type": "Phonics",
      "syllables": [
        "nine"
      ],
      "chinese": [
        {
          "c": "九",
          "p": "ㄐㄧㄡˇ"
        }
      ],
      "emoji": "9️⃣🕘",
      "week": 9
    },
    {
      "id": "w9_13",
      "word": "net",
      "type": "Phonics",
      "syllables": [
        "net"
      ],
      "chinese": [
        {
          "c": "網",
          "p": "ㄨㄤˇ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🕸️🥅",
      "week": 9
    },
    {
      "id": "w9_14",
      "word": "nut",
      "type": "Phonics",
      "syllables": [
        "nut"
      ],
      "chinese": [
        {
          "c": "堅",
          "p": "ㄐㄧㄢ"
        },
        {
          "c": "果",
          "p": "ㄍㄨㄛˇ"
        }
      ],
      "emoji": "🥜🐿️",
      "week": 9
    },
    {
      "id": "w9_15",
      "word": "dog",
      "type": "Reading Plus",
      "syllables": [
        "dog"
      ],
      "chinese": [
        {
          "c": "狗",
          "p": "ㄍㄡˇ"
        }
      ],
      "emoji": "🐶🐕",
      "week": 9
    },
    {
      "id": "w9_16",
      "word": "doctor",
      "type": "Reading Plus",
      "syllables": [
        "doc",
        "tor"
      ],
      "chinese": [
        {
          "c": "醫",
          "p": "ㄧ"
        },
        {
          "c": "生",
          "p": "ㄕㄥ"
        }
      ],
      "emoji": "👨‍⚕️🏥",
      "week": 9
    },
    {
      "id": "w9_17",
      "word": "desk",
      "type": "Reading Plus",
      "syllables": [
        "desk"
      ],
      "chinese": [
        {
          "c": "書",
          "p": "ㄕㄨ"
        },
        {
          "c": "桌",
          "p": "ㄓㄨㄛ"
        }
      ],
      "emoji": "🪑📚",
      "week": 9
    },
    {
      "id": "w9_18",
      "word": "door",
      "type": "Reading Plus",
      "syllables": [
        "door"
      ],
      "chinese": [
        {
          "c": "門",
          "p": "ㄇㄣˊ"
        }
      ],
      "emoji": "🚪🚪",
      "week": 9
    },
    {
      "id": "w9_19",
      "word": "doll",
      "type": "Reading Plus",
      "syllables": [
        "doll"
      ],
      "chinese": [
        {
          "c": "洋",
          "p": "ㄧㄤˊ"
        },
        {
          "c": "娃",
          "p": "ㄨㄚˊ"
        },
        {
          "c": "娃",
          "p": "ㄨㄚ˙"
        }
      ],
      "emoji": "🎎🧸",
      "week": 9
    },
    {
      "id": "w9_20",
      "word": "dishes",
      "type": "Reading Plus",
      "syllables": [
        "dish",
        "es"
      ],
      "chinese": [
        {
          "c": "盤",
          "p": "ㄆㄢˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🍽️🥣",
      "week": 9
    },
    {
      "id": "w9_21",
      "word": "duck",
      "type": "Reading Plus",
      "syllables": [
        "duck"
      ],
      "chinese": [
        {
          "c": "鴨",
          "p": "ㄧㄚ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🦆🦆",
      "week": 9
    },
    {
      "id": "w9_22",
      "word": "deer",
      "type": "Reading Plus",
      "syllables": [
        "deer"
      ],
      "chinese": [
        {
          "c": "鹿",
          "p": "ㄌㄨˋ"
        }
      ],
      "emoji": "🦌🌲",
      "week": 9
    },
    {
      "id": "w9_23",
      "word": "dinosaur",
      "type": "Reading Plus",
      "syllables": [
        "di",
        "no",
        "saur"
      ],
      "chinese": [
        {
          "c": "恐",
          "p": "ㄎㄨㄥˇ"
        },
        {
          "c": "龍",
          "p": "ㄌㄨㄥˊ"
        }
      ],
      "emoji": "🦖🦕",
      "week": 9
    },
    {
      "id": "w9_24",
      "word": "jacket",
      "type": "Reading Plus",
      "syllables": [
        "jack",
        "et"
      ],
      "chinese": [
        {
          "c": "外",
          "p": "ㄨㄞˋ"
        },
        {
          "c": "套",
          "p": "ㄊㄠˋ"
        }
      ],
      "emoji": "🧥🥶",
      "week": 9
    },
    {
      "id": "w9_25",
      "word": "jar",
      "type": "Reading Plus",
      "syllables": [
        "jar"
      ],
      "chinese": [
        {
          "c": "罐",
          "p": "ㄍㄨㄢˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "𫪔🍯",
      "week": 9
    },
    {
      "id": "w9_26",
      "word": "jewelry",
      "type": "Reading Plus",
      "syllables": [
        "jew",
        "el",
        "ry"
      ],
      "chinese": [
        {
          "c": "珠",
          "p": "ㄓㄨ"
        },
        {
          "c": "寶",
          "p": "ㄅㄠˇ"
        }
      ],
      "emoji": "💎💍",
      "week": 9
    },
    {
      "id": "w9_27",
      "word": "jack-in-the-box",
      "type": "Reading Plus",
      "syllables": [
        "jack",
        "in",
        "the",
        "box"
      ],
      "chinese": [
        {
          "c": "驚",
          "p": "ㄐㄧㄥ"
        },
        {
          "c": "嚇",
          "p": "ㄒㄧㄚˋ"
        },
        {
          "c": "箱",
          "p": "ㄒㄧㄤ"
        }
      ],
      "emoji": "🤡📦",
      "week": 9
    },
    {
      "id": "w9_28",
      "word": "jump rope",
      "type": "Reading Plus",
      "syllables": [
        "jump",
        "rope"
      ],
      "chinese": [
        {
          "c": "跳",
          "p": "ㄊㄧㄠˋ"
        },
        {
          "c": "繩",
          "p": "ㄕㄥˊ"
        }
      ],
      "emoji": "➰🏃",
      "week": 9
    },
    {
      "id": "w9_29",
      "word": "jug",
      "type": "Reading Plus",
      "syllables": [
        "jug"
      ],
      "chinese": [
        {
          "c": "水",
          "p": "ㄕㄨㄟˇ"
        },
        {
          "c": "壺",
          "p": "ㄏㄨˊ"
        }
      ],
      "emoji": "🏺💦",
      "week": 9
    },
    {
      "id": "w9_30",
      "word": "jet",
      "type": "Reading Plus",
      "syllables": [
        "jet"
      ],
      "chinese": [
        {
          "c": "噴",
          "p": "ㄆㄣ"
        },
        {
          "c": "射",
          "p": "ㄕㄜˋ"
        },
        {
          "c": "機",
          "p": "ㄐㄧ"
        }
      ],
      "emoji": "🛩️✈️",
      "week": 9
    },
    {
      "id": "w9_31",
      "word": "jeep",
      "type": "Reading Plus",
      "syllables": [
        "jeep"
      ],
      "chinese": [
        {
          "c": "吉",
          "p": "ㄐㄧˊ"
        },
        {
          "c": "普",
          "p": "ㄆㄨˇ"
        },
        {
          "c": "車",
          "p": "ㄔㄜ"
        }
      ],
      "emoji": "🚙⛰️",
      "week": 9
    }
  ],
  "Week_10": [
    {
      "id": "w10_1",
      "word": "ox",
      "type": "Phonics",
      "syllables": [
        "ox"
      ],
      "chinese": [
        {
          "c": "公",
          "p": "ㄍㄨㄥ"
        },
        {
          "c": "牛",
          "p": "ㄋㄧㄡˊ"
        }
      ],
      "emoji": "🐂🌾",
      "week": 10
    },
    {
      "id": "w10_2",
      "word": "sock",
      "type": "Phonics",
      "syllables": [
        "sock"
      ],
      "chinese": [
        {
          "c": "襪",
          "p": "ㄨㄚˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🧦👟",
      "week": 10
    },
    {
      "id": "w10_3",
      "word": "box",
      "type": "Phonics",
      "syllables": [
        "box"
      ],
      "chinese": [
        {
          "c": "箱",
          "p": "ㄒㄧㄤ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "📦🎁",
      "week": 10
    },
    {
      "id": "w10_4",
      "word": "lock",
      "type": "Phonics",
      "syllables": [
        "lock"
      ],
      "chinese": [
        {
          "c": "鎖",
          "p": "ㄙㄨㄛˇ"
        }
      ],
      "emoji": "🔒🔑",
      "week": 10
    },
    {
      "id": "w10_5",
      "word": "block",
      "type": "Phonics",
      "syllables": [
        "block"
      ],
      "chinese": [
        {
          "c": "積",
          "p": "ㄐㄧ"
        },
        {
          "c": "木",
          "p": "ㄇㄨˋ"
        }
      ],
      "emoji": "🧱🧩",
      "week": 10
    },
    {
      "id": "w10_6",
      "word": "clock",
      "type": "Phonics",
      "syllables": [
        "clock"
      ],
      "chinese": [
        {
          "c": "時",
          "p": "ㄕˊ"
        },
        {
          "c": "鐘",
          "p": "ㄓㄨㄥ"
        }
      ],
      "emoji": "⏰🕰️",
      "week": 10
    },
    {
      "id": "w10_7",
      "word": "mop",
      "type": "Phonics",
      "syllables": [
        "mop"
      ],
      "chinese": [
        {
          "c": "拖",
          "p": "ㄊㄨㄛ"
        },
        {
          "c": "把",
          "p": "ㄅㄚˇ"
        }
      ],
      "emoji": "🧹🪣",
      "week": 10
    },
    {
      "id": "w10_8",
      "word": "pig",
      "type": "Phonics",
      "syllables": [
        "pig"
      ],
      "chinese": [
        {
          "c": "豬",
          "p": "ㄓㄨ"
        }
      ],
      "emoji": "🐷🐽",
      "week": 10
    },
    {
      "id": "w10_9",
      "word": "pan",
      "type": "Phonics",
      "syllables": [
        "pan"
      ],
      "chinese": [
        {
          "c": "平",
          "p": "ㄆㄧㄥˊ"
        },
        {
          "c": "底",
          "p": "ㄉㄧˇ"
        },
        {
          "c": "鍋",
          "p": "ㄍㄨㄛ"
        }
      ],
      "emoji": "🍳🍳",
      "week": 10
    },
    {
      "id": "w10_10",
      "word": "pen",
      "type": "Phonics",
      "syllables": [
        "pen"
      ],
      "chinese": [
        {
          "c": "原",
          "p": "ㄩㄢˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        },
        {
          "c": "筆",
          "p": "ㄅㄧˇ"
        }
      ],
      "emoji": "🖊️✍️",
      "week": 10
    },
    {
      "id": "w10_11",
      "word": "watch",
      "type": "Reading Plus",
      "syllables": [
        "watch"
      ],
      "chinese": [
        {
          "c": "手",
          "p": "ㄕㄡˇ"
        },
        {
          "c": "錶",
          "p": "ㄅㄧㄠˇ"
        }
      ],
      "emoji": "⌚⏰",
      "week": 10
    },
    {
      "id": "w10_12",
      "word": "worm",
      "type": "Reading Plus",
      "syllables": [
        "worm"
      ],
      "chinese": [
        {
          "c": "毛",
          "p": "ㄇㄠˊ"
        },
        {
          "c": "毛",
          "p": "ㄇㄠˊ"
        },
        {
          "c": "蟲",
          "p": "ㄔㄨㄥˊ"
        }
      ],
      "emoji": "🪱🐛",
      "week": 10
    },
    {
      "id": "w10_13",
      "word": "wagon",
      "type": "Reading Plus",
      "syllables": [
        "wagon"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "推",
          "p": "ㄊㄨㄟ"
        },
        {
          "c": "車",
          "p": "ㄔㄜ"
        }
      ],
      "emoji": "🛒🛞",
      "week": 10
    },
    {
      "id": "w10_14",
      "word": "watermelon",
      "type": "Reading Plus",
      "syllables": [
        "wa",
        "ter",
        "mel",
        "on"
      ],
      "chinese": [
        {
          "c": "西",
          "p": "ㄒㄧ"
        },
        {
          "c": "瓜",
          "p": "ㄍㄨㄚ"
        }
      ],
      "emoji": "🍉🍉",
      "week": 10
    },
    {
      "id": "w10_15",
      "word": "window",
      "type": "Reading Plus",
      "syllables": [
        "win",
        "dow"
      ],
      "chinese": [
        {
          "c": "窗",
          "p": "ㄔㄨㄤ"
        },
        {
          "c": "戶",
          "p": "ㄏㄨˋ"
        }
      ],
      "emoji": "🪟🏡",
      "week": 10
    },
    {
      "id": "w10_16",
      "word": "web",
      "type": "Reading Plus",
      "syllables": [
        "web"
      ],
      "chinese": [
        {
          "c": "蜘",
          "p": "ㄓ"
        },
        {
          "c": "蛛",
          "p": "ㄓㄨ"
        },
        {
          "c": "網",
          "p": "ㄨㄤˇ"
        }
      ],
      "emoji": "🕸️🕷️",
      "week": 10
    },
    {
      "id": "w10_17",
      "word": "wink",
      "type": "Reading Plus",
      "syllables": [
        "wink"
      ],
      "chinese": [
        {
          "c": "眨",
          "p": "ㄓㄚˇ"
        },
        {
          "c": "眼",
          "p": "ㄧㄢˇ"
        }
      ],
      "emoji": "😉😜",
      "week": 10
    },
    {
      "id": "w10_18",
      "word": "well",
      "type": "Reading Plus",
      "syllables": [
        "well"
      ],
      "chinese": [
        {
          "c": "水",
          "p": "ㄕㄨㄟˇ"
        },
        {
          "c": "井",
          "p": "ㄐㄧㄥˇ"
        }
      ],
      "emoji": "🪵💧",
      "week": 10
    },
    {
      "id": "w10_19",
      "word": "octopus",
      "type": "Reading Plus",
      "syllables": [
        "oc",
        "to",
        "pus"
      ],
      "chinese": [
        {
          "c": "章",
          "p": "ㄓㄤ"
        },
        {
          "c": "魚",
          "p": "ㄩˊ"
        }
      ],
      "emoji": "🐙🌊",
      "week": 10
    },
    {
      "id": "w10_20",
      "word": "ostrich",
      "type": "Reading Plus",
      "syllables": [
        "os",
        "trich"
      ],
      "chinese": [
        {
          "c": "鴕",
          "p": "ㄊㄨㄛˊ"
        },
        {
          "c": "鳥",
          "p": "ㄋㄧㄠˇ"
        }
      ],
      "emoji": "🦤🏜️",
      "week": 10
    },
    {
      "id": "w10_21",
      "word": "olives",
      "type": "Reading Plus",
      "syllables": [
        "ol",
        "ives"
      ],
      "chinese": [
        {
          "c": "橄",
          "p": "ㄍㄢˇ"
        },
        {
          "c": "欖",
          "p": "ㄌㄢˇ"
        }
      ],
      "emoji": "🫒🍸",
      "week": 10
    },
    {
      "id": "w10_22",
      "word": "top",
      "type": "Reading Plus",
      "syllables": [
        "top"
      ],
      "chinese": [
        {
          "c": "陀",
          "p": "ㄊㄨㄛˊ"
        },
        {
          "c": "螺",
          "p": "ㄌㄨㄛˊ"
        }
      ],
      "emoji": "🌪️🎯",
      "week": 10
    },
    {
      "id": "w10_23",
      "word": "fox",
      "type": "Reading Plus",
      "syllables": [
        "fox"
      ],
      "chinese": [
        {
          "c": "狐",
          "p": "ㄏㄨˊ"
        },
        {
          "c": "狸",
          "p": "ㄌㄧ˙"
        }
      ],
      "emoji": "🦊🌲",
      "week": 10
    },
    {
      "id": "w10_24",
      "word": "dots",
      "type": "Reading Plus",
      "syllables": [
        "dots"
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
      "emoji": "🔴🔵",
      "week": 10
    }
  ],
  "Week_11": [
    {
      "id": "w11_1",
      "word": "pillow",
      "type": "Phonics",
      "syllables": [
        "pil",
        "low"
      ],
      "chinese": [
        {
          "c": "枕",
          "p": "ㄓㄣˇ"
        },
        {
          "c": "頭",
          "p": "ㄊㄡˊ"
        }
      ],
      "emoji": "🛌😴",
      "week": 11
    },
    {
      "id": "w11_2",
      "word": "peas",
      "type": "Phonics",
      "syllables": [
        "peas"
      ],
      "chinese": [
        {
          "c": "豌",
          "p": "ㄨㄢ"
        },
        {
          "c": "豆",
          "p": "ㄉㄡˋ"
        }
      ],
      "emoji": "🫛🥗",
      "week": 11
    },
    {
      "id": "w11_3",
      "word": "quack",
      "type": "Phonics",
      "syllables": [
        "quack"
      ],
      "chinese": [
        {
          "c": "呱",
          "p": "ㄍㄨㄚ"
        },
        {
          "c": "呱",
          "p": "ㄍㄨㄚ"
        },
        {
          "c": "叫",
          "p": "ㄐㄧㄠˋ"
        }
      ],
      "emoji": "🦆🔊",
      "week": 11
    },
    {
      "id": "w11_4",
      "word": "queen",
      "type": "Phonics",
      "syllables": [
        "queen"
      ],
      "chinese": [
        {
          "c": "女",
          "p": "ㄋㄩˇ"
        },
        {
          "c": "王",
          "p": "ㄨㄤˊ"
        }
      ],
      "emoji": "👑👸",
      "week": 11
    },
    {
      "id": "w11_5",
      "word": "quilt",
      "type": "Reading Plus",
      "syllables": [
        "quilt"
      ],
      "chinese": [
        {
          "c": "被",
          "p": "ㄅㄟˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🛏️🧵",
      "week": 11
    },
    {
      "id": "w11_6",
      "word": "question mark",
      "type": "Reading Plus",
      "syllables": [
        "ques",
        "tion",
        "mark"
      ],
      "chinese": [
        {
          "c": "問",
          "p": "ㄨㄣˋ"
        },
        {
          "c": "號",
          "p": "ㄏㄠˋ"
        }
      ],
      "emoji": "❓❔",
      "week": 11
    },
    {
      "id": "w11_7",
      "word": "quarter",
      "type": "Reading Plus",
      "syllables": [
        "quar",
        "ter"
      ],
      "chinese": [
        {
          "c": "二",
          "p": "ㄦˋ"
        },
        {
          "c": "角",
          "p": "ㄐㄧㄠˇ"
        },
        {
          "c": "五",
          "p": "ㄨˇ"
        },
        {
          "c": "分",
          "p": "ㄈㄣ"
        }
      ],
      "emoji": "🪙💰",
      "week": 11
    },
    {
      "id": "w11_8",
      "word": "vase",
      "type": "Reading Plus",
      "syllables": [
        "vase"
      ],
      "chinese": [
        {
          "c": "花",
          "p": "ㄏㄨㄚ"
        },
        {
          "c": "瓶",
          "p": "ㄆㄧㄥˊ"
        }
      ],
      "emoji": "🏺💐",
      "week": 11
    },
    {
      "id": "w11_9",
      "word": "violin",
      "type": "Reading Plus",
      "syllables": [
        "vi",
        "o",
        "lin"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "提",
          "p": "ㄊㄧˊ"
        },
        {
          "c": "琴",
          "p": "ㄑㄧㄣˊ"
        }
      ],
      "emoji": "🎻🎶",
      "week": 11
    },
    {
      "id": "w11_10",
      "word": "van",
      "type": "Reading Plus",
      "syllables": [
        "van"
      ],
      "chinese": [
        {
          "c": "廂",
          "p": "ㄒㄧㄤ"
        },
        {
          "c": "型",
          "p": "ㄒㄧㄥˊ"
        },
        {
          "c": "車",
          "p": "ㄔㄜ"
        }
      ],
      "emoji": "🚐🚙",
      "week": 11
    },
    {
      "id": "w11_11",
      "word": "vest",
      "type": "Reading Plus",
      "syllables": [
        "vest"
      ],
      "chinese": [
        {
          "c": "背",
          "p": "ㄅㄟˋ"
        },
        {
          "c": "心",
          "p": "ㄒㄧㄣ"
        }
      ],
      "emoji": "🦺🧥",
      "week": 11
    },
    {
      "id": "w11_12",
      "word": "vegetables",
      "type": "Reading Plus",
      "syllables": [
        "veg",
        "e",
        "ta",
        "bles"
      ],
      "chinese": [
        {
          "c": "蔬",
          "p": "ㄕㄨ"
        },
        {
          "c": "菜",
          "p": "ㄘㄞˋ"
        }
      ],
      "emoji": "🥦🥕",
      "week": 11
    }
  ],
  "Week_12": [
    {
      "id": "w12_1",
      "word": "rose",
      "type": "Phonics",
      "syllables": [
        "rose"
      ],
      "chinese": [
        {
          "c": "玫",
          "p": "ㄇㄟˊ"
        },
        {
          "c": "瑰",
          "p": "ㄍㄨㄟ"
        }
      ],
      "emoji": "🌹💐",
      "week": 12
    },
    {
      "id": "w12_2",
      "word": "rooster",
      "type": "Phonics",
      "syllables": [
        "roost",
        "er"
      ],
      "chinese": [
        {
          "c": "公",
          "p": "ㄍㄨㄥ"
        },
        {
          "c": "雞",
          "p": "ㄐㄧ"
        }
      ],
      "emoji": "🐓🌅",
      "week": 12
    },
    {
      "id": "w12_3",
      "word": "raccoon",
      "type": "Phonics",
      "syllables": [
        "rac",
        "coon"
      ],
      "chinese": [
        {
          "c": "浣",
          "p": "ㄏㄨㄢˇ"
        },
        {
          "c": "熊",
          "p": "ㄒㄧㄡㄥˊ"
        }
      ],
      "emoji": "🦝🌲",
      "week": 12
    },
    {
      "id": "w12_4",
      "word": "rain",
      "type": "Phonics",
      "syllables": [
        "rain"
      ],
      "chinese": [
        {
          "c": "下",
          "p": "ㄒㄧㄚˋ"
        },
        {
          "c": "雨",
          "p": "ㄩˇ"
        }
      ],
      "emoji": "🌧️☔",
      "week": 12
    },
    {
      "id": "w12_5",
      "word": "ring",
      "type": "Phonics",
      "syllables": [
        "ring"
      ],
      "chinese": [
        {
          "c": "戒",
          "p": "ㄐㄧㄝˋ"
        },
        {
          "c": "指",
          "p": "ㄓˇ"
        }
      ],
      "emoji": "💍✨",
      "week": 12
    },
    {
      "id": "w12_6",
      "word": "rake",
      "type": "Phonics",
      "syllables": [
        "rake"
      ],
      "chinese": [
        {
          "c": "耙",
          "p": "ㄆㄚˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🧹🍂",
      "week": 12
    },
    {
      "id": "w12_7",
      "word": "roof",
      "type": "Phonics",
      "syllables": [
        "roof"
      ],
      "chinese": [
        {
          "c": "屋",
          "p": "ㄨ"
        },
        {
          "c": "頂",
          "p": "ㄉㄧㄥˇ"
        }
      ],
      "emoji": "🏠🛖",
      "week": 12
    },
    {
      "id": "w12_8",
      "word": "rope",
      "type": "Phonics",
      "syllables": [
        "rope"
      ],
      "chinese": [
        {
          "c": "繩",
          "p": "ㄕㄥˊ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🪢➰",
      "week": 12
    },
    {
      "id": "w12_9",
      "word": "radio",
      "type": "Phonics",
      "syllables": [
        "ra",
        "di",
        "o"
      ],
      "chinese": [
        {
          "c": "收",
          "p": "ㄕㄡ"
        },
        {
          "c": "音",
          "p": "ㄧㄣ"
        },
        {
          "c": "機",
          "p": "ㄐㄧ"
        }
      ],
      "emoji": "📻🎶",
      "week": 12
    },
    {
      "id": "w12_10",
      "word": "sun",
      "type": "Phonics",
      "syllables": [
        "sun"
      ],
      "chinese": [
        {
          "c": "太",
          "p": "ㄊㄞˋ"
        },
        {
          "c": "陽",
          "p": "ㄧㄤˊ"
        }
      ],
      "emoji": "☀️🌞",
      "week": 12
    },
    {
      "id": "w12_11",
      "word": "sock",
      "type": "Phonics",
      "syllables": [
        "sock"
      ],
      "chinese": [
        {
          "c": "襪",
          "p": "ㄨㄚˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🧦👟",
      "week": 12
    },
    {
      "id": "w12_12",
      "word": "sink",
      "type": "Phonics",
      "syllables": [
        "sink"
      ],
      "chinese": [
        {
          "c": "水",
          "p": "ㄕㄨㄟˇ"
        },
        {
          "c": "槽",
          "p": "ㄘㄠˊ"
        }
      ],
      "emoji": "🚰🧼",
      "week": 12
    },
    {
      "id": "w12_13",
      "word": "six",
      "type": "Phonics",
      "syllables": [
        "six"
      ],
      "chinese": [
        {
          "c": "六",
          "p": "ㄌㄧㄡˋ"
        }
      ],
      "emoji": "6️⃣🤙",
      "week": 12
    },
    {
      "id": "w12_14",
      "word": "sand",
      "type": "Phonics",
      "syllables": [
        "sand"
      ],
      "chinese": [
        {
          "c": "沙",
          "p": "ㄕㄚ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🏖️⏳",
      "week": 12
    }
  ],
  "Week_13": [
    {
      "id": "w13_1",
      "word": "top",
      "type": "Phonics",
      "syllables": [
        "top"
      ],
      "chinese": [
        {
          "c": "陀",
          "p": "ㄊㄨㄛˊ"
        },
        {
          "c": "螺",
          "p": "ㄌㄨㄛˊ"
        }
      ],
      "emoji": "🌪️🎯",
      "week": 13
    },
    {
      "id": "w13_2",
      "word": "tent",
      "type": "Phonics",
      "syllables": [
        "tent"
      ],
      "chinese": [
        {
          "c": "帳",
          "p": "ㄓㄤˋ"
        },
        {
          "c": "篷",
          "p": "ㄆㄥˊ"
        }
      ],
      "emoji": "⛺🏕️",
      "week": 13
    },
    {
      "id": "w13_3",
      "word": "ten",
      "type": "Phonics",
      "syllables": [
        "ten"
      ],
      "chinese": [
        {
          "c": "十",
          "p": "ㄕˊ"
        }
      ],
      "emoji": "🔟🖐️",
      "week": 13
    },
    {
      "id": "w13_4",
      "word": "tomato",
      "type": "Phonics",
      "syllables": [
        "to",
        "ma",
        "to"
      ],
      "chinese": [
        {
          "c": "番",
          "p": "ㄈㄢ"
        },
        {
          "c": "茄",
          "p": "ㄑㄧㄝˊ"
        }
      ],
      "emoji": "🍅🥗",
      "week": 13
    },
    {
      "id": "w13_5",
      "word": "tape",
      "type": "Phonics",
      "syllables": [
        "tape"
      ],
      "chinese": [
        {
          "c": "膠",
          "p": "ㄐㄧㄠ"
        },
        {
          "c": "帶",
          "p": "ㄉㄞˋ"
        }
      ],
      "emoji": "📼📦",
      "week": 13
    },
    {
      "id": "w13_6",
      "word": "up",
      "type": "Phonics",
      "syllables": [
        "up"
      ],
      "chinese": [
        {
          "c": "向",
          "p": "ㄒㄧㄤˋ"
        },
        {
          "c": "上",
          "p": "ㄕㄤˋ"
        }
      ],
      "emoji": "⬆️🎈",
      "week": 13
    },
    {
      "id": "w13_7",
      "word": "under",
      "type": "Phonics",
      "syllables": [
        "un",
        "der"
      ],
      "chinese": [
        {
          "c": "在",
          "p": "ㄗㄞˋ"
        },
        {
          "c": "…",
          "p": "…"
        },
        {
          "c": "下",
          "p": "ㄒㄧㄚˋ"
        },
        {
          "c": "面",
          "p": "ㄇㄧㄢˋ"
        }
      ],
      "emoji": "👇📦",
      "week": 13
    },
    {
      "id": "w13_8",
      "word": "umpire",
      "type": "Phonics",
      "syllables": [
        "um",
        "pire"
      ],
      "chinese": [
        {
          "c": "裁",
          "p": "ㄘㄞˊ"
        },
        {
          "c": "判",
          "p": "ㄆㄢˋ"
        }
      ],
      "emoji": "⚾🧑‍⚖️",
      "week": 13
    },
    {
      "id": "w13_9",
      "word": "yarn",
      "type": "Reading Plus",
      "syllables": [
        "yarn"
      ],
      "chinese": [
        {
          "c": "毛",
          "p": "ㄇㄠˊ"
        },
        {
          "c": "線",
          "p": "ㄒㄧㄢˋ"
        }
      ],
      "emoji": "🧶🐈",
      "week": 13
    },
    {
      "id": "w13_10",
      "word": "yo-yo",
      "type": "Reading Plus",
      "syllables": [
        "yo",
        "yo"
      ],
      "chinese": [
        {
          "c": "溜",
          "p": "ㄌㄧㄡ"
        },
        {
          "c": "溜",
          "p": "ㄌㄧㄡ"
        },
        {
          "c": "球",
          "p": "ㄑㄧㄡˊ"
        }
      ],
      "emoji": "🪀🪀",
      "week": 13
    },
    {
      "id": "w13_11",
      "word": "yolk",
      "type": "Reading Plus",
      "syllables": [
        "yolk"
      ],
      "chinese": [
        {
          "c": "蛋",
          "p": "ㄉㄢˋ"
        },
        {
          "c": "黃",
          "p": "ㄏㄨㄤˊ"
        }
      ],
      "emoji": "🍳🥚",
      "week": 13
    },
    {
      "id": "w13_12",
      "word": "yard",
      "type": "Reading Plus",
      "syllables": [
        "yard"
      ],
      "chinese": [
        {
          "c": "院",
          "p": "ㄩㄢˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🏡🌳",
      "week": 13
    },
    {
      "id": "w13_13",
      "word": "yellow",
      "type": "Reading Plus",
      "syllables": [
        "yel",
        "low"
      ],
      "chinese": [
        {
          "c": "黃",
          "p": "ㄏㄨㄤˊ"
        },
        {
          "c": "色",
          "p": "ㄙㄜˋ"
        }
      ],
      "emoji": "💛🟡",
      "week": 13
    },
    {
      "id": "w13_14",
      "word": "umbrella",
      "type": "Reading Plus",
      "syllables": [
        "um",
        "brel",
        "la"
      ],
      "chinese": [
        {
          "c": "雨",
          "p": "ㄩˇ"
        },
        {
          "c": "傘",
          "p": "ㄙㄢˇ"
        }
      ],
      "emoji": "☂️🌂",
      "week": 13
    },
    {
      "id": "w13_15",
      "word": "untie",
      "type": "Reading Plus",
      "syllables": [
        "un",
        "tie"
      ],
      "chinese": [
        {
          "c": "解",
          "p": "ㄐㄧㄝˇ"
        },
        {
          "c": "開",
          "p": "ㄎㄞ"
        }
      ],
      "emoji": "🪢👐",
      "week": 13
    },
    {
      "id": "w13_16",
      "word": "duck",
      "type": "Reading Plus",
      "syllables": [
        "duck"
      ],
      "chinese": [
        {
          "c": "鴨",
          "p": "ㄧㄚ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🦆🦆",
      "week": 13
    },
    {
      "id": "w13_17",
      "word": "cup",
      "type": "Reading Plus",
      "syllables": [
        "cup"
      ],
      "chinese": [
        {
          "c": "杯",
          "p": "ㄅㄟ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "☕🥤",
      "week": 13
    },
    {
      "id": "w13_18",
      "word": "bus",
      "type": "Reading Plus",
      "syllables": [
        "bus"
      ],
      "chinese": [
        {
          "c": "公",
          "p": "ㄍㄨㄥ"
        },
        {
          "c": "車",
          "p": "ㄔㄜ"
        }
      ],
      "emoji": "🚌🚏",
      "week": 13
    },
    {
      "id": "w13_19",
      "word": "drum",
      "type": "Reading Plus",
      "syllables": [
        "drum"
      ],
      "chinese": [
        {
          "c": "鼓",
          "p": "ㄍㄨˇ"
        }
      ],
      "emoji": "🥁🎶",
      "week": 13
    },
    {
      "id": "w13_20",
      "word": "rug",
      "type": "Reading Plus",
      "syllables": [
        "rug"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "地",
          "p": "ㄉㄧˋ"
        },
        {
          "c": "毯",
          "p": "ㄊㄢˇ"
        }
      ],
      "emoji": "🧶🛋️",
      "week": 13
    },
    {
      "id": "w13_21",
      "word": "brush",
      "type": "Reading Plus",
      "syllables": [
        "brush"
      ],
      "chinese": [
        {
          "c": "刷",
          "p": "ㄕㄨㄚ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🖌️🪥",
      "week": 13
    },
    {
      "id": "w13_22",
      "word": "sun",
      "type": "Reading Plus",
      "syllables": [
        "sun"
      ],
      "chinese": [
        {
          "c": "太",
          "p": "ㄊㄞˋ"
        },
        {
          "c": "陽",
          "p": "ㄧㄤˊ"
        }
      ],
      "emoji": "☀️🌞",
      "week": 13
    },
    {
      "id": "w13_23",
      "word": "nut",
      "type": "Reading Plus",
      "syllables": [
        "nut"
      ],
      "chinese": [
        {
          "c": "堅",
          "p": "ㄐㄧㄢ"
        },
        {
          "c": "果",
          "p": "ㄍㄨㄛˇ"
        }
      ],
      "emoji": "🥜🐿️",
      "week": 13
    },
    {
      "id": "w13_24",
      "word": "thumb",
      "type": "Reading Plus",
      "syllables": [
        "thumb"
      ],
      "chinese": [
        {
          "c": "大",
          "p": "ㄉㄚˋ"
        },
        {
          "c": "拇",
          "p": "ㄇㄨˇ"
        },
        {
          "c": "指",
          "p": "ㄓˇ"
        }
      ],
      "emoji": "👍👍",
      "week": 13
    },
    {
      "id": "w13_25",
      "word": "plug",
      "type": "Reading Plus",
      "syllables": [
        "plug"
      ],
      "chinese": [
        {
          "c": "插",
          "p": "ㄔㄚ"
        },
        {
          "c": "頭",
          "p": "ㄊㄡˊ"
        }
      ],
      "emoji": "🔌⚡",
      "week": 13
    }
  ],
  "Week_14": [
    {
      "id": "w14_1",
      "word": "bus",
      "type": "Phonics",
      "syllables": [
        "bus"
      ],
      "chinese": [
        {
          "c": "公",
          "p": "ㄍㄨㄥ"
        },
        {
          "c": "車",
          "p": "ㄔㄜ"
        }
      ],
      "emoji": "🚌🚏",
      "week": 14
    },
    {
      "id": "w14_2",
      "word": "cup",
      "type": "Phonics",
      "syllables": [
        "cup"
      ],
      "chinese": [
        {
          "c": "杯",
          "p": "ㄅㄟ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "☕🥤",
      "week": 14
    },
    {
      "id": "w14_3",
      "word": "drum",
      "type": "Phonics",
      "syllables": [
        "drum"
      ],
      "chinese": [
        {
          "c": "鼓",
          "p": "ㄍㄨˇ"
        }
      ],
      "emoji": "🥁🎶",
      "week": 14
    },
    {
      "id": "w14_4",
      "word": "sun",
      "type": "Phonics",
      "syllables": [
        "sun"
      ],
      "chinese": [
        {
          "c": "太",
          "p": "ㄊㄞˋ"
        },
        {
          "c": "陽",
          "p": "ㄧㄤˊ"
        }
      ],
      "emoji": "☀️🌞",
      "week": 14
    },
    {
      "id": "w14_5",
      "word": "jump",
      "type": "Phonics",
      "syllables": [
        "jump"
      ],
      "chinese": [
        {
          "c": "跳",
          "p": "ㄊㄧㄠˋ"
        }
      ],
      "emoji": "🦘⬆️",
      "week": 14
    },
    {
      "id": "w14_6",
      "word": "nut",
      "type": "Phonics",
      "syllables": [
        "nut"
      ],
      "chinese": [
        {
          "c": "堅",
          "p": "ㄐㄧㄢ"
        },
        {
          "c": "果",
          "p": "ㄍㄨㄛˇ"
        }
      ],
      "emoji": "🥜🐿️",
      "week": 14
    },
    {
      "id": "w14_7",
      "word": "van",
      "type": "Phonics",
      "syllables": [
        "van"
      ],
      "chinese": [
        {
          "c": "廂",
          "p": "ㄒㄧㄤ"
        },
        {
          "c": "型",
          "p": "ㄒㄧㄥˊ"
        },
        {
          "c": "車",
          "p": "ㄔㄜ"
        }
      ],
      "emoji": "🚐🚙",
      "week": 14
    },
    {
      "id": "w14_8",
      "word": "vase",
      "type": "Phonics",
      "syllables": [
        "vase"
      ],
      "chinese": [
        {
          "c": "花",
          "p": "ㄏㄨㄚ"
        },
        {
          "c": "瓶",
          "p": "ㄆㄧㄥˊ"
        }
      ],
      "emoji": "🏺💐",
      "week": 14
    },
    {
      "id": "w14_9",
      "word": "vest",
      "type": "Phonics",
      "syllables": [
        "vest"
      ],
      "chinese": [
        {
          "c": "背",
          "p": "ㄅㄟˋ"
        },
        {
          "c": "心",
          "p": "ㄒㄧㄣ"
        }
      ],
      "emoji": "🦺🧥",
      "week": 14
    },
    {
      "id": "w14_10",
      "word": "vine",
      "type": "Phonics",
      "syllables": [
        "vine"
      ],
      "chinese": [
        {
          "c": "藤",
          "p": "ㄊㄥˊ"
        },
        {
          "c": "蔓",
          "p": "ㄇㄢˋ"
        }
      ],
      "emoji": "🌿🍇",
      "week": 14
    },
    {
      "id": "w14_11",
      "word": "violin",
      "type": "Phonics",
      "syllables": [
        "vi",
        "o",
        "lin"
      ],
      "chinese": [
        {
          "c": "小",
          "p": "ㄒㄧㄠˇ"
        },
        {
          "c": "提",
          "p": "ㄊㄧˊ"
        },
        {
          "c": "琴",
          "p": "ㄑㄧㄣˊ"
        }
      ],
      "emoji": "🎻🎶",
      "week": 14
    },
    {
      "id": "w14_12",
      "word": "ax",
      "type": "Reading Plus",
      "syllables": [
        "ax"
      ],
      "chinese": [
        {
          "c": "斧",
          "p": "ㄈㄨˇ"
        },
        {
          "c": "頭",
          "p": "ㄊㄡˊ"
        }
      ],
      "emoji": "🪓🪵",
      "week": 14
    },
    {
      "id": "w14_13",
      "word": "six",
      "type": "Reading Plus",
      "syllables": [
        "six"
      ],
      "chinese": [
        {
          "c": "六",
          "p": "ㄌㄧㄡˋ"
        }
      ],
      "emoji": "6️⃣🤙",
      "week": 14
    },
    {
      "id": "w14_14",
      "word": "box",
      "type": "Reading Plus",
      "syllables": [
        "box"
      ],
      "chinese": [
        {
          "c": "箱",
          "p": "ㄒㄧㄤ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "📦🎁",
      "week": 14
    },
    {
      "id": "w14_15",
      "word": "fox",
      "type": "Reading Plus",
      "syllables": [
        "fox"
      ],
      "chinese": [
        {
          "c": "狐",
          "p": "ㄏㄨˊ"
        },
        {
          "c": "狸",
          "p": "ㄌㄧ˙"
        }
      ],
      "emoji": "🦊🌲",
      "week": 14
    },
    {
      "id": "w14_16",
      "word": "mix",
      "type": "Reading Plus",
      "syllables": [
        "mix"
      ],
      "chinese": [
        {
          "c": "攪",
          "p": "ㄐㄧㄠˇ"
        },
        {
          "c": "拌",
          "p": "ㄅㄢˋ"
        }
      ],
      "emoji": "🥣🥣",
      "week": 14
    },
    {
      "id": "w14_17",
      "word": "zoo",
      "type": "Reading Plus",
      "syllables": [
        "zoo"
      ],
      "chinese": [
        {
          "c": "動",
          "p": "ㄉㄨㄥˋ"
        },
        {
          "c": "物",
          "p": "ㄨˋ"
        },
        {
          "c": "園",
          "p": "ㄩㄢˊ"
        }
      ],
      "emoji": "🦁🐘",
      "week": 14
    },
    {
      "id": "w14_18",
      "word": "zipper",
      "type": "Reading Plus",
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
      "week": 14
    },
    {
      "id": "w14_19",
      "word": "zebra",
      "type": "Reading Plus",
      "syllables": [
        "ze",
        "bra"
      ],
      "chinese": [
        {
          "c": "斑",
          "p": "ㄅㄢ"
        },
        {
          "c": "馬",
          "p": "ㄇㄚˇ"
        }
      ],
      "emoji": "🦓🌿",
      "week": 14
    },
    {
      "id": "w14_20",
      "word": "zero",
      "type": "Reading Plus",
      "syllables": [
        "ze",
        "ro"
      ],
      "chinese": [
        {
          "c": "零",
          "p": "ㄌㄧㄥˊ"
        }
      ],
      "emoji": "0️⃣⭕",
      "week": 14
    }
  ],
  "Week_15": [
    {
      "id": "w15_1",
      "word": "watch",
      "type": "Phonics",
      "syllables": [
        "watch"
      ],
      "chinese": [
        {
          "c": "手",
          "p": "ㄕㄡˇ"
        },
        {
          "c": "錶",
          "p": "ㄅㄧㄠˇ"
        }
      ],
      "emoji": "⌚⏰",
      "week": 15
    },
    {
      "id": "w15_2",
      "word": "window",
      "type": "Phonics",
      "syllables": [
        "win",
        "dow"
      ],
      "chinese": [
        {
          "c": "窗",
          "p": "ㄔㄨㄤ"
        },
        {
          "c": "戶",
          "p": "ㄏㄨˋ"
        }
      ],
      "emoji": "🪟🏡",
      "week": 15
    },
    {
      "id": "w15_3",
      "word": "web",
      "type": "Phonics",
      "syllables": [
        "web"
      ],
      "chinese": [
        {
          "c": "蜘",
          "p": "ㄓ"
        },
        {
          "c": "蛛",
          "p": "ㄓㄨ"
        },
        {
          "c": "網",
          "p": "ㄨㄤˇ"
        }
      ],
      "emoji": "🕸️🕷️",
      "week": 15
    },
    {
      "id": "w15_4",
      "word": "well",
      "type": "Phonics",
      "syllables": [
        "well"
      ],
      "chinese": [
        {
          "c": "水",
          "p": "ㄕㄨㄟˇ"
        },
        {
          "c": "井",
          "p": "ㄐㄧㄥˇ"
        }
      ],
      "emoji": "🪵💧",
      "week": 15
    },
    {
      "id": "w15_5",
      "word": "wig",
      "type": "Phonics",
      "syllables": [
        "wig"
      ],
      "chinese": [
        {
          "c": "假",
          "p": "ㄐㄧㄚˇ"
        },
        {
          "c": "髮",
          "p": "ㄈㄚˇ"
        }
      ],
      "emoji": "🧑‍🦰👩‍🦳",
      "week": 15
    },
    {
      "id": "w15_6",
      "word": "wink",
      "type": "Phonics",
      "syllables": [
        "wink"
      ],
      "chinese": [
        {
          "c": "眨",
          "p": "ㄓㄚˇ"
        },
        {
          "c": "眼",
          "p": "ㄧㄢˇ"
        }
      ],
      "emoji": "😉😜",
      "week": 15
    },
    {
      "id": "w15_7",
      "word": "wing",
      "type": "Phonics",
      "syllables": [
        "wing"
      ],
      "chinese": [
        {
          "c": "翅",
          "p": "ㄔˋ"
        },
        {
          "c": "膀",
          "p": "ㄅㄤˇ"
        }
      ],
      "emoji": "🪽🦅",
      "week": 15
    },
    {
      "id": "w15_8",
      "word": "ax",
      "type": "Phonics",
      "syllables": [
        "ax"
      ],
      "chinese": [
        {
          "c": "斧",
          "p": "ㄈㄨˇ"
        },
        {
          "c": "頭",
          "p": "ㄊㄡˊ"
        }
      ],
      "emoji": "🪓🪵",
      "week": 15
    },
    {
      "id": "w15_9",
      "word": "box",
      "type": "Phonics",
      "syllables": [
        "box"
      ],
      "chinese": [
        {
          "c": "箱",
          "p": "ㄒㄧㄤ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "📦🎁",
      "week": 15
    },
    {
      "id": "w15_10",
      "word": "fox",
      "type": "Phonics",
      "syllables": [
        "fox"
      ],
      "chinese": [
        {
          "c": "狐",
          "p": "ㄏㄨˊ"
        },
        {
          "c": "狸",
          "p": "ㄌㄧ˙"
        }
      ],
      "emoji": "🦊🌲",
      "week": 15
    },
    {
      "id": "w15_11",
      "word": "six",
      "type": "Phonics",
      "syllables": [
        "six"
      ],
      "chinese": [
        {
          "c": "六",
          "p": "ㄌㄧㄡˋ"
        }
      ],
      "emoji": "6️⃣🤙",
      "week": 15
    },
    {
      "id": "w15_12",
      "word": "mailbox",
      "type": "Phonics",
      "syllables": [
        "mail",
        "box"
      ],
      "chinese": [
        {
          "c": "信",
          "p": "ㄒㄧㄣˋ"
        },
        {
          "c": "箱",
          "p": "ㄒㄧㄤ"
        }
      ],
      "emoji": "📫📮",
      "week": 15
    }
  ],
  "Week_16": [
    {
      "id": "w16_1",
      "word": "Bibs",
      "type": "Reading Plus",
      "syllables": [
        "Bibs"
      ],
      "chinese": [
        {
          "c": "圍",
          "p": "ㄨㄟˊ"
        },
        {
          "c": "兜",
          "p": "ㄉㄡ"
        }
      ],
      "emoji": "👶🍼",
      "week": 16
    },
    {
      "id": "w16_2",
      "word": "here",
      "type": "Reading Plus",
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
      "week": 16
    },
    {
      "id": "w16_3",
      "word": "look",
      "type": "Reading Plus",
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
      "week": 16
    },
    {
      "id": "w16_4",
      "word": "is",
      "type": "Reading Plus",
      "syllables": [
        "is"
      ],
      "chinese": [
        {
          "c": "是",
          "p": "ㄕˋ"
        }
      ],
      "emoji": "👉✨",
      "week": 16
    }
  ],
  "Week_17": [
    {
      "id": "w17_1",
      "word": "yarn",
      "type": "Phonics",
      "syllables": [
        "yarn"
      ],
      "chinese": [
        {
          "c": "毛",
          "p": "ㄇㄠˊ"
        },
        {
          "c": "線",
          "p": "ㄒㄧㄢˋ"
        }
      ],
      "emoji": "🧶🐈",
      "week": 17
    },
    {
      "id": "w17_2",
      "word": "yard",
      "type": "Phonics",
      "syllables": [
        "yard"
      ],
      "chinese": [
        {
          "c": "院",
          "p": "ㄩㄢˋ"
        },
        {
          "c": "子",
          "p": "ㄗ˙"
        }
      ],
      "emoji": "🏡🌳",
      "week": 17
    },
    {
      "id": "w17_3",
      "word": "yo-yo",
      "type": "Phonics",
      "syllables": [
        "yo",
        "yo"
      ],
      "chinese": [
        {
          "c": "溜",
          "p": "ㄌㄧㄡ"
        },
        {
          "c": "溜",
          "p": "ㄌㄧㄡ"
        },
        {
          "c": "球",
          "p": "ㄑㄧㄡˊ"
        }
      ],
      "emoji": "🪀🪀",
      "week": 17
    },
    {
      "id": "w17_4",
      "word": "yawn",
      "type": "Phonics",
      "syllables": [
        "yawn"
      ],
      "chinese": [
        {
          "c": "打",
          "p": "ㄉㄚˇ"
        },
        {
          "c": "哈",
          "p": "ㄏㄚ"
        },
        {
          "c": "欠",
          "p": "ㄑㄧㄢˋ"
        }
      ],
      "emoji": "🥱😪",
      "week": 17
    },
    {
      "id": "w17_5",
      "word": "zebra",
      "type": "Phonics",
      "syllables": [
        "ze",
        "bra"
      ],
      "chinese": [
        {
          "c": "斑",
          "p": "ㄅㄢ"
        },
        {
          "c": "馬",
          "p": "ㄇㄚˇ"
        }
      ],
      "emoji": "🦓🌿",
      "week": 17
    },
    {
      "id": "w17_6",
      "word": "zero",
      "type": "Phonics",
      "syllables": [
        "ze",
        "ro"
      ],
      "chinese": [
        {
          "c": "零",
          "p": "ㄌㄧㄥˊ"
        }
      ],
      "emoji": "0️⃣⭕",
      "week": 17
    },
    {
      "id": "w17_7",
      "word": "zipper",
      "type": "Phonics",
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
      "week": 17
    },
    {
      "id": "w17_8",
      "word": "zoo",
      "type": "Phonics",
      "syllables": [
        "zoo"
      ],
      "chinese": [
        {
          "c": "動",
          "p": "ㄉㄨㄥˋ"
        },
        {
          "c": "物",
          "p": "ㄨˋ"
        },
        {
          "c": "園",
          "p": "ㄩㄢˊ"
        }
      ],
      "emoji": "🦁🐘",
      "week": 17
    }
  ],
  "Week_18": [
    {
      "id": "w18_1",
      "word": "looks",
      "type": "Reading Plus",
      "syllables": [
        "looks"
      ],
      "chinese": [
        {
          "c": "看",
          "p": "ㄎㄢˋ"
        },
        {
          "c": "起",
          "p": "ㄑㄧˇ"
        },
        {
          "c": "來",
          "p": "ㄌㄞˊ"
        }
      ],
      "emoji": "👀✨",
      "week": 18
    },
    {
      "id": "w18_2",
      "word": "jump",
      "type": "Reading Plus",
      "syllables": [
        "jump"
      ],
      "chinese": [
        {
          "c": "跳",
          "p": "ㄊㄧㄠˋ"
        }
      ],
      "emoji": "🦘⬆️",
      "week": 18
    },
    {
      "id": "w18_3",
      "word": "jumps",
      "type": "Reading Plus",
      "syllables": [
        "jumps"
      ],
      "chinese": [
        {
          "c": "跳",
          "p": "ㄊㄧㄠˋ"
        }
      ],
      "emoji": "🦘🏃",
      "week": 18
    },
    {
      "id": "w18_4",
      "word": "see",
      "type": "Reading Plus",
      "syllables": [
        "see"
      ],
      "chinese": [
        {
          "c": "看",
          "p": "ㄎㄢˋ"
        },
        {
          "c": "見",
          "p": "ㄐㄧㄢˋ"
        }
      ],
      "emoji": "👀👓",
      "week": 18
    }
  ],
  "Week_19": [
    {
      "id": "w19_1",
      "word": "walk",
      "type": "Reading Plus",
      "syllables": [
        "walk"
      ],
      "chinese": [
        {
          "c": "散",
          "p": "ㄙㄢˋ"
        },
        {
          "c": "步",
          "p": "ㄅㄨˋ"
        }
      ],
      "emoji": "🚶👟",
      "week": 19
    },
    {
      "id": "w19_2",
      "word": "walks",
      "type": "Reading Plus",
      "syllables": [
        "walks"
      ],
      "chinese": [
        {
          "c": "走",
          "p": "ㄗㄡˇ"
        },
        {
          "c": "路",
          "p": "ㄌㄨˋ"
        }
      ],
      "emoji": "🚶‍♂️🐾",
      "week": 19
    },
    {
      "id": "w19_3",
      "word": "up",
      "type": "Reading Plus",
      "syllables": [
        "up"
      ],
      "chinese": [
        {
          "c": "向",
          "p": "ㄒㄧㄤˋ"
        },
        {
          "c": "上",
          "p": "ㄕㄤˋ"
        }
      ],
      "emoji": "⬆️🎈",
      "week": 19
    },
    {
      "id": "w19_4",
      "word": "down",
      "type": "Reading Plus",
      "syllables": [
        "down"
      ],
      "chinese": [
        {
          "c": "向",
          "p": "ㄒㄧㄤˋ"
        },
        {
          "c": "下",
          "p": "ㄒㄧㄚˋ"
        }
      ],
      "emoji": "⬇️📉",
      "week": 19
    },
    {
      "id": "w19_5",
      "word": "she",
      "type": "Reading Plus",
      "syllables": [
        "she"
      ],
      "chinese": [
        {
          "c": "她",
          "p": "ㄊㄚ"
        }
      ],
      "emoji": "👧👩",
      "week": 19
    },
    {
      "id": "w19_6",
      "word": "at",
      "type": "Reading Plus",
      "syllables": [
        "at"
      ],
      "chinese": [
        {
          "c": "在",
          "p": "ㄗㄞˋ"
        }
      ],
      "emoji": "📍🎯",
      "week": 19
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WEEKLY_WORDS_DATA };
}
