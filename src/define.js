export const VIEW_MODE = {
  SIMULATOR: 1,
  WARDROBE: 2,
  SAVE_LOAD: 3,
  EMMOTICON: 4,
  HELP: 5,
  COMMENT: 6,
};

export const VIEW_NAME_NAME = new Map([
  [VIEW_MODE.SIMULATOR, 'おすすめコーデ'],
  [VIEW_MODE.WARDROBE, 'アイテム確認'],
  [VIEW_MODE.SAVE_LOAD, '非所持アイテムのセーブ/ロード'],
  [VIEW_MODE.EMMOTICON, '顔文字'],
  [VIEW_MODE.HELP, 'ヘルプ'],
  [VIEW_MODE.COMMENT, 'コメント'],
]);

// Style Rank (for both Item and Stage)
export const RANK = {
  SSS: 6,
  SS: 5,
  S: 4,
  A: 3,
  B: 2,
  C: 1,
};

export const RANK_WEIGHT = new Map([
  [RANK.SSS, 3200.0],
  [RANK.SS, 2612.7],
  [RANK.S, 2089.35],
  [RANK.A, 1690.65],
  [RANK.B, 1309.8],
  [RANK.C, 817.5],
]);

export const STYLE = {
  GORGEOUS: 0,
  SIMPLE: 1,
  ELEGANCE: 2,
  LIVELY: 3,
  MATURE: 4,
  CUTE: 5,
  SEXY: 6,
  PURE: 7,
  WARM: 8,
  COOL: 9,
};

export const STYLE_NAME = new Map([
  [STYLE.GORGEOUS, '華麗'],
  [STYLE.SIMPLE, 'シンプル'],
  [STYLE.ELEGANCE, 'エレガント'],
  [STYLE.LIVELY, 'アクティブ'],
  [STYLE.MATURE, '大人'],
  [STYLE.CUTE, 'キュート'],
  [STYLE.SEXY, 'セクシー'],
  [STYLE.PURE, 'ピュア'],
  [STYLE.WARM, 'ウォーム'],
  [STYLE.COOL, 'クール'],
]);

export const ITEM_CATEGORY = {
  HAIR: 1,
  DRESS: 2,
  COAT: 3,
  TOPS: 4,
  BOTTOMS: 5,
  SOCKS: 7,
  ANKLET: 8,
  SHOES: 9,
  MAKEUP: 10,

  HAIR_ORNAMENT: 13,
  VEIL: 14,
  HAIRPIN: 15,
  EAR: 16,
  EARRINGS: 17,
  SCARF: 19,
  NECKLACE: 20,
  RIGHT_HAND_ORNAMENT: 22,
  LEFT_HAND_ORNAMENT: 23,
  GLOVES: 24,
  RIGHT_HAND_HOLDING: 26,
  LEFT_HAND_HOLDING: 27,
  BOTH_HAND_HOLDING: 28,
  WAIST: 29,

  FACE: 31,
  BODY: 32,
  TATOO: 33,
  WING: 34,
  TAIL: 35,
  FOREGROUND: 36,
  BACKGROUND: 37,
  HANGING: 38,
  GROUND: 39,
  SKIN: 40,
  VITA: 41,
};

export const ITEM_CATEGORY_NAME = new Map([
  [ITEM_CATEGORY.HAIR, 'ヘアスタイル'],
  [ITEM_CATEGORY.DRESS, 'ドレス'],
  [ITEM_CATEGORY.COAT, 'コート'],
  [ITEM_CATEGORY.TOPS, 'トップス'],
  [ITEM_CATEGORY.BOTTOMS, 'ボトムス'],
  [ITEM_CATEGORY.SOCKS, '靴下'],
  [ITEM_CATEGORY.ANKLET, 'アンクレット'],
  [ITEM_CATEGORY.SHOES, 'シューズ'],
  [ITEM_CATEGORY.MAKEUP, 'メイク'],

  [ITEM_CATEGORY.HAIR_ORNAMENT, 'ヘッドアクセ'],
  [ITEM_CATEGORY.VEIL, 'ヴェール'],
  [ITEM_CATEGORY.HAIRPIN, 'カチューシャ'],
  [ITEM_CATEGORY.EAR, 'つけ耳'],
  [ITEM_CATEGORY.EARRINGS, '耳飾り'],
  [ITEM_CATEGORY.SCARF, 'マフラー'],
  [ITEM_CATEGORY.NECKLACE, 'ネックレス'],
  [ITEM_CATEGORY.RIGHT_HAND_ORNAMENT, '右手飾り'],
  [ITEM_CATEGORY.LEFT_HAND_ORNAMENT, '左手飾り'],
  [ITEM_CATEGORY.GLOVES, '手袋'],
  [ITEM_CATEGORY.RIGHT_HAND_HOLDING, '右手持ち'],
  [ITEM_CATEGORY.LEFT_HAND_HOLDING, '左手持ち'],
  [ITEM_CATEGORY.BOTH_HAND_HOLDING, '両手持ち'],
  [ITEM_CATEGORY.WAIST, '腰飾り'],

  [ITEM_CATEGORY.FACE, 'フェイス'],
  [ITEM_CATEGORY.BODY, 'ボディ'],
  [ITEM_CATEGORY.TATOO, 'タトゥー'],
  [ITEM_CATEGORY.WING, '羽根'],
  [ITEM_CATEGORY.TAIL, 'しっぽ'],
  [ITEM_CATEGORY.FOREGROUND, '前景'],
  [ITEM_CATEGORY.BACKGROUND, '後景'],
  [ITEM_CATEGORY.HANGING, '吊り'],
  [ITEM_CATEGORY.GROUND, '床'],
  [ITEM_CATEGORY.SKIN, '肌'],
  [ITEM_CATEGORY.VITA, 'ヴィータ(スキル加算済)'],
]);

/* score scale */
export const ITEM_CATEGORY_SCALE = new Map([
  [ITEM_CATEGORY.HAIR, 0.5],
  [ITEM_CATEGORY.DRESS, 2],
  [ITEM_CATEGORY.COAT, 0.2],
  [ITEM_CATEGORY.TOPS, 1],
  [ITEM_CATEGORY.BOTTOMS, 1],
  [ITEM_CATEGORY.SOCKS, 0.3],
  [ITEM_CATEGORY.ANKLET, 0.3],
  [ITEM_CATEGORY.SHOES, 0.4],
  [ITEM_CATEGORY.MAKEUP, 0.1],

  [ITEM_CATEGORY.HAIR_ORNAMENT, 0.2],
  [ITEM_CATEGORY.VEIL, 0.2],
  [ITEM_CATEGORY.HAIRPIN, 0.2],
  [ITEM_CATEGORY.EAR, 0.2],
  [ITEM_CATEGORY.EARRINGS, 0.2],
  [ITEM_CATEGORY.SCARF, 0.2],
  [ITEM_CATEGORY.NECKLACE, 0.2],
  [ITEM_CATEGORY.RIGHT_HAND_ORNAMENT, 0.2],
  [ITEM_CATEGORY.LEFT_HAND_ORNAMENT, 0.2],
  [ITEM_CATEGORY.GLOVES, 0.2],
  [ITEM_CATEGORY.RIGHT_HAND_HOLDING, 0.2],
  [ITEM_CATEGORY.LEFT_HAND_HOLDING, 0.2],
  [ITEM_CATEGORY.BOTH_HAND_HOLDING, 0.2],
  [ITEM_CATEGORY.WAIST, 0.2],

  [ITEM_CATEGORY.FACE, 0.2],
  [ITEM_CATEGORY.BODY, 0.2],
  [ITEM_CATEGORY.TATOO, 0.2],
  [ITEM_CATEGORY.WING, 0.2],
  [ITEM_CATEGORY.TAIL, 0.2],
  [ITEM_CATEGORY.FOREGROUND, 0.2],
  [ITEM_CATEGORY.BACKGROUND, 0.2],
  [ITEM_CATEGORY.HANGING, 0.2],
  [ITEM_CATEGORY.GROUND, 0.2],
  [ITEM_CATEGORY.SKIN, 0.2],
  [ITEM_CATEGORY.VITA, 0.2],
]);

/*
 * if user wear more than 3 accessories, accessory item score is decrease.
 * but its a bit heavy, because of re-calc every item focus change.
 * so I choose 40% fix rate.
 * this is same as maximum (16 or more accessories equip) dumping.
 */
export const ITEM_CATEGORY_DUMPING = 0.4;

/* if item category is bigger than this, its a accessory */
export const ACCESSORY_MINIMUM_ITEM_CATEGORY = ITEM_CATEGORY.HAIR_ORNAMENT;

export const BLACKLIST_ITEM_CATEGORY = new Map([
  ['hair', ITEM_CATEGORY.HAIR],
  ['dress', ITEM_CATEGORY.DRESS],
  ['coat', ITEM_CATEGORY.COAT],
  ['tops', ITEM_CATEGORY.TOPS],
  ['bottoms', ITEM_CATEGORY.BOTTOMS],
  ['hosiery', ITEM_CATEGORY.SOCKS],
  ['anklet', ITEM_CATEGORY.ANKLET],
  ['shoes', ITEM_CATEGORY.SHOES],
  ['makeup', ITEM_CATEGORY.MAKEUP],

  ['hair-ornaments', ITEM_CATEGORY.HAIR_ORNAMENT],
  ['veil', ITEM_CATEGORY.VEIL],
  ['hairpin', ITEM_CATEGORY.HAIRPIN],
  ['ear', ITEM_CATEGORY.EAR],
  ['earrings', ITEM_CATEGORY.EARRINGS],
  ['scarf', ITEM_CATEGORY.SCARF],
  ['necklace', ITEM_CATEGORY.NECKLACE],
  ['right-hand-ornaments', ITEM_CATEGORY.RIGHT_HAND_ORNAMENT],
  ['left-hand-ornaments', ITEM_CATEGORY.LEFT_HAND_ORNAMENT],
  ['glove', ITEM_CATEGORY.GLOVES],
  ['right-hand-holding', ITEM_CATEGORY.RIGHT_HAND_HOLDING],
  ['left-hand-holding', ITEM_CATEGORY.LEFT_HAND_HOLDING],
  ['both-hand-holding', ITEM_CATEGORY.BOTH_HAND_HOLDING],
  ['waist', ITEM_CATEGORY.WAIST],
  ['face', ITEM_CATEGORY.FACE],
  ['brooch', ITEM_CATEGORY.BODY],
  ['tatoo', ITEM_CATEGORY.TATOO],
  ['wing', ITEM_CATEGORY.WING],
  ['tail', ITEM_CATEGORY.TAIL],
  ['foreground', ITEM_CATEGORY.FOREGROUND],
  ['background', ITEM_CATEGORY.BACKGROUND],
  ['head-ornaments', ITEM_CATEGORY.HANGING],
  ['ground', ITEM_CATEGORY.GROUND],
  ['skin', ITEM_CATEGORY.SKIN],
  ['vita', ITEM_CATEGORY.VITA],
]);

export const STAGE_SECTION = new Map([
  ['colosseum', 'コロッセオ'],
  ['guild', 'ギルド'],
  ['event', 'イベント'],
  ['scenario', 'シナリオ'],
]);

// JSON column
export const ITEM_JSON_COLUMN = {
  ID: 0,
  CATEGORY: 1,
  NAME: 3,
  STYLE: 4,
  TAG: 5,
  SKILL: 6,
};

export const STAGE_JSON_COLUMN = {
  ID: 0,
  NAME: 1,
  STYLE: 3,
  TAG: 4,
  BLACK_LIST: 6,
  WHITE_LIST: 7,
};


// Vita skill style
export const VITA_SKILL_STYLE = {
  a: STYLE.GORGEOUS,
  b: STYLE.SIMPLE,
  c: STYLE.ELEGANCE,
  d: STYLE.LIVELY,
  e: STYLE.MATURE,
  f: STYLE.CUTE,
  g: STYLE.SEXY,
  h: STYLE.PURE,
  i: STYLE.WARM,
  j: STYLE.COOL,
};

export const ITEM_SHOW_COUNT = {
  DEFAULT: 50,
  INCREASE: 50,
};

export const INIT_SECTION_ID = 'colosseum';
export const INIT_STAGE_ID = 'C1-1';
