const BALANCE_CONFIG: { [key: string]: number } = {
    CRIT_CHANCE: 10,       //1 z 10
    CRIT_MULTIPLIER: 1.5,
    CRIT_OFFSET: 3,
    ENCOUNTER_CHANCE: 12, //1 z 12
    LOW_HEALTH_THRESHOLD: 0.2,
    MID_HEALTH_THRESHOLD: 0.5,
    HP_DMG_SCALE: 1.2,
    XP_SCALE: 1.5,
    AI_HEAL_CHANCE_AT_LOW_HP: 3,
    AI_HEAL_CHANCE_AT_MID_HP: 5,
    HEAL_MIN: 10,
    HEAL_MAX: 20,
    XP_MIN: 10,
    XP_MAX: 30,
    QUEST_BONUS: 2, //2x více XP z quest fightů
    XP_LOSS_ON_DEATH: 0.8, //20% ztráta xp na smrti
    QUEST_MULTIPLY: 2,
    SECONDARY_XP_SHARE: 0.2,
    ENCOUNTER_CHECK_COOLDOWN: 300,
    QUEST_ZUB_TARGET: 5,
    NPC2_REQUIRED_MONSTER_INDEX: 1,
    BOSS_GODZILLA_INDEX: 0,
}

const LOCATIONS = {
    NPC1_LOCATION: [39, 13],
    BOSSFIGHT_LOCATION: [10, 33],
    TOWNKEEPER_LOCATION: [19, 18],
    HEALER_LOCATION: [6, 3],
    PLAYER_IN_HOSPITAL: [2, 7],
    PLAYER_NEXT_TO_BED: [3, 1],
    PLAYER_LEAVE_HOSPITAL: [33, 7],
    HOSPITAL_DOOR_COL: 34,
    HOSPITAL_DOOR_ROW: [6, 8],
    NPC2_LOCATION: [44, 31],
}

const GameLibrary = {
    //Základní monstra hráče
    baseMonsters:
        [
            { name: 'Opice', level: 1, xp: 0, maxXp: 100, maxHealth: 80, health: 80, minDmg: 8, maxDmg: 14, icon: assets.image`forestMonkey`, gender: MonsterGender.F },
            { name: 'Had', level: 1, xp: 0, maxXp: 100, maxHealth: 50, health: 50, minDmg: 15, maxDmg: 25, icon: assets.image`forestSnake`, gender: MonsterGender.M },
            { name: 'Krab', level: 1, xp: 0, maxXp: 100, maxHealth: 120, health: 120, minDmg: 4, maxDmg: 8, icon: assets.image`hermitCrab`, gender: MonsterGender.M },
        ],
    //Příšery, které je možné náhodně potkat
    wildPool:
        [
            { name: "Kačka", maxHealth: 80, health: 80, minDmg: 7, maxDmg: 13, icon: assets.image`duck`, gender: MonsterGender.F },
            { name: "Zub", maxHealth: 50, health: 50, minDmg: 18, maxDmg: 25, icon: assets.image`shark`, gender: MonsterGender.M },
            { name: "Zilka", maxHealth: 150, health: 150, minDmg: 5, maxDmg: 10, icon: assets.image`miniGodzilla`, gender: MonsterGender.F },
            { name: "Mlž", maxHealth: 100, health: 100, minDmg: 6, maxDmg: 12, icon: assets.image`clam`, gender: MonsterGender.F },
            { name: "Mag", maxHealth: 40, health: 40, minDmg: 20, maxDmg: 35, icon: assets.image`magiTang`, gender: MonsterGender.F },
            { name: "Upir", maxHealth: 75, health: 75, minDmg: 20, maxDmg: 30, icon: assets.image`bat`, gender: MonsterGender.M },
        ],
    //Bossfighty
    bossfight:
        [
            { name: "Godzilla", maxHealth: 200, health: 200, minDmg: 15, maxDmg: 30, icon: assets.image`miniGodzilla`, gender: MonsterGender.F },
            { name: "Houba", maxHealth: 150, health: 150, minDmg: 20, maxDmg: 35, icon: assets.image`mushroom`, gender: MonsterGender.F },
        ],
    //Background imgs
    background:
        [
            assets.image`cityscape`,
        ],
    //Vytvoření inventory obrázku
    getInventoryBackground: function () {
        const width: number = UI_CONFIG.INVENTORY_WIDTH;
        const height: number = UI_CONFIG.INVENTORY_HEIGHT;
        const offset: number = UI_CONFIG.INVENTORY_PIXEL_OFFSET;

        const img = image.create(width, height);
        img.fillRect(0, 0, width, height, COLORS.BLACK);
        img.fillRect(offset / 2, offset / 2, width - offset, height - offset, COLORS.BROWN);
        img.fillRect(offset, offset, width - (2 * offset), height - (2 * offset), COLORS.BEIGE);
        return img;
    },
}

//Potřebné animace
const bigButtonAnimation: Image[] = [
    assets.image`bigButtonPress0`,
    assets.image`bigButtonPress1`
]

const animationWalk: Image[] = [
    assets.image`playerModel`,
    assets.image`modelWalkFront2`,
    assets.image`playerModel`,
    assets.image`modelWalkFront4`,
]

const animationWalkBack: Image[] = [
    assets.image`modelWalkBack1`,
    assets.image`modelWalkBack2`,
    assets.image`modelWalkBack1`,
    assets.image`modelWalkBack4`,
]

const animationWalkLeft: Image[] = [
    assets.image`modelWalkSideLeft1`,
    assets.image`modelWalkSideLeft2`,
    assets.image`modelWalkSideLeft1`,
    assets.image`modelWalkSideLeft4`,
]

const animationWalkRight: Image[] = [
    assets.image`modelWalkSideRight1`,
    assets.image`modelWalkSideRight2`,
    assets.image`modelWalkSideRight1`,
    assets.image`modelWalkSideRight4`,
]

//Attack animace
const batAttack: Image[] = [
    assets.image`bat`,
    assets.image`bat1`,
    assets.image`bat2`,
    assets.image`bat`,
]

const duckAttack: Image[] = [
    assets.image`duck`,
    assets.image`duck1`,
    assets.image`duck2`,
    assets.image`duck`,
]

const sharkAttack: Image[] = [
    assets.image`shark`,
    assets.image`sharkAttack3`,
    assets.image`sharkAttack4`,
    assets.image`shark`,
]

const miniGodzillaAttack: Image[] = [
    assets.image`miniGodzilla`,
    assets.image`kaijuMomAttack2`,
    assets.image`kaijuMomAttack4`,
    assets.image`miniGodzilla`,
]

const clamAttack: Image[] = [
    assets.image`clam`,
    assets.image`clam2`,
    assets.image`clam0`,
    assets.image`clam`,
]

const magicFishAttack: Image[] = [
    assets.image`magiTang`,
    assets.image`magiTang1`,
    assets.image`magiTang2`,
    assets.image`magiTang`,
]

const monkeyAttack: Image[] = [
    assets.image`forestMonkey`,
    assets.image`forestMonkey6`,
    assets.image`forestMonkey7`,
    assets.image`forestMonkey10`,
    assets.image`forestMonkey`,
]

const snakeAttack: Image[] = [
    assets.image`forestSnake`,
    assets.image`forestSnake4`,
    assets.image`forestSnake5`,
    assets.image`forestSnake`,
]

const crabAttack: Image[] = [
    assets.image`hermitCrab`,
    assets.image`hermitCrabAttack0`,
    assets.image`hermitCrabAttack3`,
    assets.image`hermitCrabAttack5`,
    assets.image`hermitCrab`,
]

const godzillaAttack: Image[] = [
    assets.image`miniGodzilla`,
    assets.image`kaijuMomAttack2`,
    assets.image`kaijuMomAttack4`,
    assets.image`miniGodzilla`,
]

const attackAnims: { [key: string]: Image[] } = {
    "Opice": monkeyAttack,
    "Had": snakeAttack,
    "Krab": crabAttack,
    "Zub": sharkAttack,
    "Kačka": duckAttack,
    "Upir": batAttack,
    "Zilka": miniGodzillaAttack,
    "Mlž": clamAttack,
    "Mag": magicFishAttack,
    "Godzilla": godzillaAttack,
};