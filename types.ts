//Definice vlastních typů pro kolize a mazaní UI
namespace SpriteKind {
    export const UI = SpriteKind.create()          // Pozadí menu, boxy, dialogová okna
    export const UIText = SpriteKind.create()      // Veškeré texty (jména, HP čísla, popisy)
    export const UIBar = SpriteKind.create()       // Health bary a XP bary
    export const UIIcon = SpriteKind.create()      // Malé ikonky monster v menu a bestiáři
    export const BattleSprite = SpriteKind.create() // Velké sprity monster během souboje
    export const Banner = SpriteKind.create() //Battle banner ve funkci
}

enum FightMode {
    Fight,
    Run,
    Heal,
}

enum Turn {
    Player,
    Enemy,
}

enum Direction {
    Up,
    Down,
    Left,
    Right,
    None
}

enum MonsterGender {
    M,
    F,
    N,
}

type PanelType = "inventory" | "bestiary" | "quests";

type BattleState = {
    activeChoice: FightMode,
    currentEnemy: MonsterBase | null,
}

type Mutable = {
    playerDirection: Direction,
    playerTurnStartTime: number,
    lastEncounterCheck: number,
    defeatedMonsters: string[],
}

type MonsterBase = {
    name: string,
    maxHealth: number,
    health: number,
    minDmg: number,
    maxDmg: number,
    icon: Image,
    gender: MonsterGender,
}

type PlayerMonster = MonsterBase & {
    level: number,
    xp: number,
    maxXp: number,
}

type EnemyMonster = MonsterBase;

type Quest = {
    description: string,
    isDone: boolean,
    xpReward: number,
}

const enum COLORS {
    BLACK = 15,
    GREEN = 7,
    RED = 2,
    YELLOW = 5,
    LIGHT_BLUE = 9,
    BEIGE = 13,
    BROWN = 14,
    WHITE = 1,
}

const enum UI_CONFIG {
    PLAYER_POS_X = 40,
    PLAYER_POS_Y = 75,

    ENEMY_POS_X = 120,
    ENEMY_POS_Y = 35,

    CURSOR_OFFSET_Y = 8,
    CURSOR_POS_X = 90,
    CURSOR_POS_Y = 90,
    CURSOR_FIGHT_POS_X = 35,
    CURSOR_FIGHT_POS_Y = 8,
    CURSOR_RUN_POS_X = 35,
    CURSOR_RUN_POS_Y = 22,
    CURSOR_HEAL_POS_X = 37,
    CURSOR_HEAL_POS_Y = 8,

    FIGHT_MENU_POS_X = 125,
    FIGHT_MENU_POS_Y = 105,

    ENEMY_STATUS_BOX_POS_X = 45,
    ENEMY_STATUS_BOX_POS_Y = 15,

    PLAYER_STATUS_BOX_POS_X = 126,
    PLAYER_STATUS_BOX_POS_Y = 78,

    ANIMATION_SPEED = 180,
    WALK_ANIMATION_SPEED = 200,

    RESET_GHOST_INPUT_PAUSE = 100,
    TOOK_DMG_PAUSE = 100,
    ATTACK_PAUSE = 200,
    INTRO_PAUSE = 250,
    ANIMATION_SLIDE_PAUSE = 350,
    BASIC_PAUSE = 500,
    AI_PAUSE = 800,

    LOW_HP_CAMERA_THRESHOLD_PERCENT = 10,

    INVENTORY_WIDTH = 150,
    INVENTORY_HEIGHT = 110,
    INVENTORY_PIXEL_OFFSET = 4,
    INVENTORY_HEALTH_BAR_WIDTH = 24,
    INVENTORY_HEALTH_BAR_HEIGHT = 5,

    Z_BATTLE_SPRITE = 10,
    Z_CURSOR = 20,
    Z_PANEL = 100,
    Z_PANEL_CONTENT = 101,
    Z_PANEL_TEXT = 102,
    Z_BANNER = 200,
    Z_BESTIARY_ICON = 201,
    Z_BESTIARY_TEXT = 202,

    SCREEN_CENTER_X = 80,
    SCREEN_CENTER_Y = 60,

    BANNER_WIDTH = 160,
    BANNER_HEIGHT = 20,
    BANNER_TEXT_Y = 6,
    BANNER_START_X = 240,
    BANNER_SLIDE_SPEED = 600,
    BANNER_PAUSE = 1000,
    BANNER_PAUSE_LONG = 1500,
    BANNER_PAUSE_VERY_LONG = 2000,

    BATTLE_SPRITE_SCALE = 2,
    ATTACK_MOVE_OFFSET = 10,
    TILE_SIZE = 16,
    NPC_SEPARATION_OFFSET = 4,
    PLAYER_MOVE_SPEED = 100,
    BIG_BUTTON_SCALE_PERCENT = 80,

    CRIT_SHAKE_INTENSITY = 8,
    LOW_HP_SHAKE_INTENSITY = 4,

    JITTER_PAUSE = 40,

    INVENTORY_ITEM_SPACING = 50,
    INVENTORY_ITEM_Y = 40,
    INVENTORY_BAR_OFFSET_Y = 18,

    SMALL_FONT_HEIGHT = 5,

    Z_BATTLE_UI = 20,

    PARALLEL_START_DELAY = 10,
    SIGN_READ_DELAY = 50,

    QUESTS_START_Y = 20,
    QUESTS_SPACING = 18,
    QUESTS_TEXT_X = 80,
    QUESTS_BAR_WIDTH = 60,
    QUESTS_BAR_HEIGHT = 3,

    BATTLE_NAME_WIDTH = 50,
    BATTLE_NAME_HEIGHT = 8,
    BATTLE_BAR_WIDTH = 35,
    BATTLE_BAR_HEIGHT = 5,
    Z_BATTLE_TEXT_BAR = 25,

    HEALTH_BAR_PADDING = 1,
    HEALTH_BAR_BORDER_REDUCTION = 2,

    GODZILLA_DEATH_SHAKE_LOOPS = 20,
    GODZILLA_DEATH_SHAKE_MAX_OFFSET = 8,
}