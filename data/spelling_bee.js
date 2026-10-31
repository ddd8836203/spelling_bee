/**
 * Spelling Bee Starter A 單字庫 (Part 1 ~ Part 4 共 60 字)
 * 來源：IMG_4022.HEIC
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 1
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 2
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 3
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
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
      "part": 4
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SPELLING_BEE_DATA };
}
