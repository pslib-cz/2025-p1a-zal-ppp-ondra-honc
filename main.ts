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
    YELLOW=  5,
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
    HOSPITAL_DOOR_ROW: [6,8],
    NPC2_LOCATION: [44,31],
}

const Battle: BattleState = {
    activeChoice: FightMode.Fight,
    currentEnemy: null as EnemyMonster | null,
}

const MutableVars: Mutable = {
    playerDirection: Direction.None,
    playerTurnStartTime: 0,
    lastEncounterCheck: 0,
    defeatedMonsters: [],
}

const GameState = {
    isBusy: false,
    speaking: false,
    gamePlay: false,
    activeBattle: false,
    playerTurn: false,
    inventoryOpen: false,
    bestiaryOpen: false,
    questsOpen: false,
    isProcessingQuest: false,
}

let bigButton: Sprite | null = sprites.create(assets.image`bigButtonPress0`, SpriteKind.Player);

const UIComponents = {
    inventory: null as Sprite | null,
    bestiary: null as Sprite | null,
    quests: null as Sprite | null,
    playerBattleSprite: null as Sprite | null,
    enemyBattleSprite: null as Sprite | null,
    enemyNameSprite: null as Sprite | null,
    playerNameSprite: null as Sprite | null,
    playerHPBar: null as Sprite | null,
    enemyHPBar: null as Sprite | null,
    fightMenuBox: null as Sprite | null,
    playerStatusBox: null as Sprite | null,
    enemyStatusBox: null as Sprite | null,
    battleCursor: null as Sprite | null,
}

const GameActors = {
    player: null as Sprite | null,
    npc1: null as Sprite | null,
    npc2: null as Sprite | null,
    bossfight: null as Sprite | null,
    healer: null as Sprite | null,
    townKeeper: null as Sprite | null,
    lastNpcEncountered: null as Sprite | null,
}

const GameLibrary = {
    //Základní monstra hráče
    baseMonsters:
        [
            { name: 'Opice', level: 1, xp: 0, maxXp: 100, maxHealth: 800, health: 800, minDmg: 800, maxDmg: 1400, icon: assets.image`forestMonkey`, gender: MonsterGender.F },
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
            { name: "Godzilla", maxHealth: 500, health: 500, minDmg: 40, maxDmg: 80, icon: assets.image`miniGodzilla`, gender: MonsterGender.F },
            { name: "Houba", maxHealth: 250, health: 250, minDmg: 60, maxDmg: 90, icon: assets.image`mushroom`, gender: MonsterGender.F },
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

const Quests: Quest[] = [
    { description: "Oziv padle zviratko", isDone: false, xpReward: 75 },
    { description: "Dosahni urovne 5", isDone: false, xpReward: 200 },
    { description: "Poraz prvni monstrum", isDone: false, xpReward: 50 },
    { description: "Poraz 5 krat zuba", isDone: false, xpReward: 250 },
    { description: "Udelej prvni ukol", isDone: false, xpReward: 150 },
]

const QuestHelpers = {
    firstRevive: false,
    level5: false,
    defeatedFirstMon: false,
    zubCounter: 0,
    firstQuest: false,
}

const PlayerState: { [key: string]: PlayerMonster[] } = {
    //Hráčovo příšery
    monsterArray: GameLibrary.baseMonsters.map(m => ({
        name: m.name,
        level: m.level,
        xp: m.xp,
        maxXp: m.maxXp,
        maxHealth: m.maxHealth,
        health: m.health,
        minDmg: m.minDmg,
        maxDmg: m.maxDmg,
        icon: m.icon,
        gender: m.gender,
    })),

    //Mrtvé hráčovo Příšery
    deadPlayerMonsters: 
        [

        ]
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

function getAttackAnim(monster: MonsterBase): Image[] {
    if (attackAnims[monster.name]) {
        return attackAnims[monster.name];
    }

    return [monster.icon];
}
//Helper functions
function hasPlayer(): boolean {
    return GameActors.player !== null;
}

function hasPartyLeader(): boolean {
    return PlayerState.monsterArray.length > 0 && PlayerState.monsterArray[0] !== null;
}

function safeDestroy(s: Sprite | null): void {
    if (s) s.destroy();
}

function cloneEnemy(m: EnemyMonster): EnemyMonster {
    return {
        name: m.name,
        maxHealth: m.maxHealth,
        health: m.health,
        minDmg: m.minDmg,
        maxDmg: m.maxDmg,
        icon: m.icon,
        gender: m.gender
    };
}

function canStartBattle(): boolean {
    return GameState.gamePlay
        && !GameState.activeBattle
        && !GameState.speaking
        && !GameState.inventoryOpen
        && !GameState.bestiaryOpen
        && hasPlayer()
        && hasPartyLeader();
}

function openPanel(type: PanelType): void {
    if (!hasPlayer()) return;

    if (type === "inventory") GameState.inventoryOpen = true;
    else if (type === "bestiary") GameState.bestiaryOpen = true;
    else if (type === "quests") GameState.questsOpen = true;

    GameState.gamePlay = false;
    controller.moveSprite(GameActors.player, 0, 0);
    GameActors.player.setFlag(SpriteFlag.Ghost, true);

    const panel = sprites.create(GameLibrary.getInventoryBackground(), SpriteKind.UI);
    panel.setFlag(SpriteFlag.RelativeToCamera, true);
    panel.setPosition(UI_CONFIG.SCREEN_CENTER_X, UI_CONFIG.SCREEN_CENTER_Y);
    panel.z = UI_CONFIG.Z_PANEL;

    if (type === "inventory") UIComponents.inventory = panel;
    else if (type === "bestiary") UIComponents.bestiary = panel;
    else if (type === "quests") UIComponents.quests = panel;
}

function closePanel(type: PanelType): void {
    sprites.destroyAllSpritesOfKind(SpriteKind.UIText);
    sprites.destroyAllSpritesOfKind(SpriteKind.UIIcon);
    sprites.destroyAllSpritesOfKind(SpriteKind.UI);
    sprites.destroyAllSpritesOfKind(SpriteKind.UIBar);

    if (type === "inventory") { UIComponents.inventory = null; GameState.inventoryOpen = false; }
    else if (type === "bestiary") { UIComponents.bestiary = null; GameState.bestiaryOpen = false; }
    else if (type === "quests") { UIComponents.quests = null; GameState.questsOpen = false; }

    GameState.gamePlay = true;
    finishTalking();
    controller.moveSprite(GameActors.player, UI_CONFIG.PLAYER_MOVE_SPEED, UI_CONFIG.PLAYER_MOVE_SPEED);
    GameActors.player.setFlag(SpriteFlag.Ghost, false);
}
//End of helper functions

function showIntro(): void {
    GameState.gamePlay = false;

    color.startFade(color.originalPalette, color.White, UI_CONFIG.ATTACK_PAUSE);
    pause(UI_CONFIG.INTRO_PAUSE);
    color.startFade(color.White, color.originalPalette, UI_CONFIG.BASIC_PAUSE * 2);
    scene.setBackgroundImage(null);

    scene.setBackgroundColor(COLORS.BLACK);

    pause(UI_CONFIG.INTRO_PAUSE);
    story.printCharacterText("Svět, jak jsi ho znal, utichl...");
    story.printCharacterText("V hlubokých lesech se probudila prastará stvoření.");
    story.printCharacterText("Tvé dobrodružství začíná právě teď!");

    startGame();
}

function completeGame(): void {
    for (let i = 0; i < 4; i++) {
        scene.setBackgroundColor(COLORS.WHITE); 
        pause(UI_CONFIG.JITTER_PAUSE * 1.25);
        scene.setBackgroundColor(COLORS.BLACK);
        pause(UI_CONFIG.JITTER_PAUSE * 1.25);
    }
    if (UIComponents.enemyBattleSprite) {
        for (let i = 0; i < 10; i++) {
            UIComponents.enemyBattleSprite.y += 4; 
            UIComponents.enemyBattleSprite.setFlag(SpriteFlag.Invisible, true);
            pause(UI_CONFIG.JITTER_PAUSE);
            UIComponents.enemyBattleSprite.setFlag(SpriteFlag.Invisible, false);
            pause(UI_CONFIG.JITTER_PAUSE);
        }
        UIComponents.enemyBattleSprite.destroy();
    }

    color.startFade(color.originalPalette, color.White, UI_CONFIG.ATTACK_PAUSE);
    pause(UI_CONFIG.INTRO_PAUSE);
    color.startFade(color.White, color.originalPalette, UI_CONFIG.BASIC_PAUSE * 2);
    if (UIComponents.enemyHPBar) UIComponents.enemyHPBar.destroy();
    if (UIComponents.enemyNameSprite) UIComponents.enemyNameSprite.destroy();
    if (UIComponents.enemyStatusBox) UIComponents.enemyStatusBox.destroy();

    if (UIComponents.playerHPBar) UIComponents.playerHPBar.destroy();
    if (UIComponents.playerNameSprite) UIComponents.playerNameSprite.destroy();
    if (UIComponents.playerStatusBox) UIComponents.playerStatusBox.destroy();
    if (UIComponents.playerBattleSprite) UIComponents.playerBattleSprite.destroy();
    if (UIComponents.fightMenuBox) UIComponents.fightMenuBox.destroy();
    if (UIComponents.battleCursor) UIComponents.battleCursor.destroy();

    scene.setBackgroundImage(null);
    scene.setBackgroundColor(COLORS.BLACK);
    pause(UI_CONFIG.BASIC_PAUSE * 2);

    story.printCharacterText("Godzilla padá k zemi a země se naposledy otřásá...");
    story.printCharacterText("Houba i Godzilla jsou poraženi. Svět je konečně v bezpečí!");

    showBattleBanner("VÍTĚZSTVÍ!", UI_CONFIG.BASIC_PAUSE * 3);

    saveGame();
    game.gameOver(true);
}

function createTextSprite(text: string, width: number, height: number, x: number, y: number, kind: number, z: number): Sprite {
    let name = image.create(width, height);
    let textX = (width - (text.length * 6)) / 2;

    name.print(text, textX, 0, 15);

    let textSprite = sprites.create(name, kind);
    textSprite.setFlag(SpriteFlag.RelativeToCamera, true);
    textSprite.z = z;

    textSprite.setPosition(x, y);

    return textSprite;
}

function createUISprite(img: Image, x: number, y: number): Sprite {
    let sprite = sprites.create(img, SpriteKind.UI);
    sprite.setPosition(x, y);
    sprite.setFlag(SpriteFlag.RelativeToCamera, true);
    sprite.z = UI_CONFIG.Z_BATTLE_UI;
    return sprite;
}

function saveGame(): void {
    let saveObject = {
        party: PlayerState.monsterArray.map(m => ({
            name: m.name, health: m.health, maxHealth: m.maxHealth,
            xp: m.xp, maxXp: m.maxXp, level: m.level, minDmg: m.minDmg, maxDmg: m.maxDmg
        })),
        graveyard: PlayerState.deadPlayerMonsters.map(m => ({
            name: m.name, health: m.health, maxHealth: m.maxHealth,
            xp: m.xp, maxXp: m.maxXp, level: m.level, minDmg: m.minDmg, maxDmg: m.maxDmg
        })),
        questProgress: Quests.map(q => q.isDone),
        helpers: QuestHelpers,
        defeated: MutableVars.defeatedMonsters,
        playerX: hasPlayer() ? GameActors.player.x : 0,
        playerY: hasPlayer() ? GameActors.player.y : 0
    };

    let jsonString = JSON.stringify(saveObject);

    settings.writeString("save_file", jsonString);
}

function drawInventoryContent(): void {
    const offset = (PlayerState.monsterArray.length - 1) / 2;
    for (let i: number = 0; i < PlayerState.monsterArray.length; i++) {
        let sprite = sprites.create(PlayerState.monsterArray[i].icon, SpriteKind.UIIcon);
        let monster: PlayerMonster = PlayerState.monsterArray[i];
        sprite.setFlag(SpriteFlag.RelativeToCamera, true);
        sprite.z = UI_CONFIG.Z_PANEL_CONTENT;
        sprite.setPosition(80 + (i - offset) * UI_CONFIG.INVENTORY_ITEM_SPACING, UI_CONFIG.INVENTORY_ITEM_Y);

        createHealthBarSprite(
            monster.health,
            monster.maxHealth,
            UI_CONFIG.INVENTORY_HEALTH_BAR_WIDTH, UI_CONFIG.INVENTORY_HEALTH_BAR_HEIGHT,
            sprite.x,
            sprite.y + UI_CONFIG.INVENTORY_BAR_OFFSET_Y,
            SpriteKind.UIBar,
            UI_CONFIG.Z_PANEL_TEXT
        );

        createTextSprite(monster.name, 50, 8, sprite.x, sprite.y - 15, SpriteKind.UIText, UI_CONFIG.Z_PANEL_TEXT);
        writeSmallFont(monster.health + "/" + monster.maxHealth, sprite.x, sprite.y + 25, UI_CONFIG.Z_PANEL_TEXT, SpriteKind.UIText);
        writeSmallFont(monster.xp + "/" + monster.maxXp, sprite.x, sprite.y + 38, UI_CONFIG.Z_PANEL_TEXT, SpriteKind.UIText);
        writeSmallFont(monster.minDmg + "-" + monster.maxDmg, sprite.x, sprite.y + 46, UI_CONFIG.Z_PANEL_TEXT, SpriteKind.UIText);

        let xpBarImg = image.create(30, 3);
        xpBarImg.fill(COLORS.BLACK);

        let safeXP = monster.xp || 0;
        let safeMaxXP = monster.maxXp || 100;

        let xpWidth = Math.constrain((safeXP / safeMaxXP) * 28, 0, 28);

        if (xpWidth > 0) {
            xpBarImg.fillRect(1, 1, xpWidth, 3, COLORS.LIGHT_BLUE);
        }

        let xpBar = sprites.create(xpBarImg, SpriteKind.UIBar);
        xpBar.setPosition(sprite.x, sprite.y + 32);
        xpBar.setFlag(SpriteFlag.RelativeToCamera, true);
        xpBar.z = UI_CONFIG.Z_PANEL_TEXT
    }
}

function drawBestiaryContent(): void {
    const startX = 45;
    const startY = 45;
    const gapX = 35;
    const gapY = 30;

    let sortedMonsters = GameLibrary.wildPool.slice().sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    for (let i = 0; i < sortedMonsters.length; i++) {
        let currentData = sortedMonsters[i];

        let col = i % 3;
        let row = Math.floor(i / 3);
        let posX = startX + (col * gapX);
        let posY = startY + (row * gapY);

        let isDefeated = MutableVars.defeatedMonsters.indexOf(currentData.name) !== -1;

        let finalIcon: Image;
        let displayName: string;

        if (isDefeated) {
            finalIcon = currentData.icon;
            displayName = currentData.name;
        } else {
            finalIcon = createSilhouette(currentData.icon);
            displayName = "???";
        }
        let iconSprite = sprites.create(finalIcon, SpriteKind.UIIcon);
        iconSprite.setPosition(posX, posY);
        iconSprite.setFlag(SpriteFlag.RelativeToCamera, true);
        iconSprite.z = UI_CONFIG.Z_BESTIARY_ICON;

        writeSmallFont(displayName, posX, posY - 15, UI_CONFIG.Z_BESTIARY_TEXT, SpriteKind.UIText);
    }
}

function drawQuestsContent(): void {
    const startY = UI_CONFIG.QUESTS_START_Y;
    const spacing = UI_CONFIG.QUESTS_SPACING;

    for (let i: number = 0; i < Quests.length; i++) {
        const y: number = startY + (i * spacing);
        const currentQuest = Quests[i];

        const descColor = currentQuest.isDone ? COLORS.GREEN : COLORS.BLACK;
        writeSmallFont(currentQuest.description, UI_CONFIG.QUESTS_TEXT_X, y, UI_CONFIG.Z_BANNER, SpriteKind.UIText);

        let progressWidth = 0;
        let progressText = "";

        if (i === 3) {
            progressWidth = (QuestHelpers.zubCounter / BALANCE_CONFIG.QUEST_ZUB_TARGET) * UI_CONFIG.QUESTS_BAR_WIDTH;
            progressText = `${QuestHelpers.zubCounter}/${BALANCE_CONFIG.QUEST_ZUB_TARGET}`;
        } else {
            progressWidth = currentQuest.isDone ? UI_CONFIG.QUESTS_BAR_WIDTH : 0;
            progressText = currentQuest.isDone ? "[X]" : "0/1";
        }

        const qProgress = image.create(UI_CONFIG.QUESTS_BAR_WIDTH, UI_CONFIG.QUESTS_BAR_HEIGHT);
        qProgress.fill(COLORS.BLACK);

        if (progressWidth > 0) {
            let barColor = currentQuest.isDone ? COLORS.GREEN : COLORS.YELLOW;
            qProgress.fillRect(0, 0, progressWidth, 3, barColor);
        }

        let xpBar = sprites.create(qProgress, SpriteKind.UIBar);
        xpBar.setPosition(UI_CONFIG.SCREEN_CENTER_X, y + 10);
        xpBar.setFlag(SpriteFlag.RelativeToCamera, true);
        xpBar.z = UI_CONFIG.Z_PANEL_TEXT;

        writeSmallFont(`+${currentQuest.xpReward} XP`, 131, y + 10, UI_CONFIG.Z_BANNER, SpriteKind.UIText);
        writeSmallFont(progressText, 40, y + 10, UI_CONFIG.Z_BANNER, SpriteKind.UIText);
    }
}

function loadGame(): void {
    let jsonString = settings.readString("save_file");
    if (!jsonString) return;
    let saveObject = JSON.parse(jsonString);

    // --- OBNOVA DAT ---
    let savedParty: any[] = saveObject.party || [];
    let savedGraveyard: any[] = saveObject.graveyard || [];
    let savedQuestProgress: boolean[] = saveObject.questProgress || [];

    PlayerState.monsterArray = [];  
    for (let savedMonster of savedParty) {
        let base = GameLibrary.baseMonsters.find(monster => monster.name === savedMonster.name);
        if (base) {
            PlayerState.monsterArray.push({
                name: savedMonster.name,
                health: savedMonster.health,
                maxHealth: savedMonster.maxHealth,
                xp: savedMonster.xp,
                maxXp: savedMonster.maxXp,
                level: savedMonster.level,
                minDmg: savedMonster.minDmg,
                maxDmg: savedMonster.maxDmg,
                icon: base.icon,
                gender: base.gender
            });
        }
    }

    PlayerState.deadPlayerMonsters = [];
    for (let savedMonster of savedGraveyard) {
        let base = GameLibrary.baseMonsters.find(monster => monster.name === savedMonster.name);
        if (base) {
            PlayerState.deadPlayerMonsters.push({
                name: savedMonster.name,
                health: savedMonster.health,
                maxHealth: savedMonster.maxHealth,
                xp: savedMonster.xp,
                maxXp: savedMonster.maxXp,
                level: savedMonster.level,
                minDmg: savedMonster.minDmg,
                maxDmg: savedMonster.maxDmg,
                icon: base.icon,
                gender: base.gender
            });
        }
    }

    
    for (let i = 0; i < Quests.length; i++) {
        if (savedQuestProgress[i] !== undefined) {
            Quests[i].isDone = savedQuestProgress[i];
        }
    }

    if (saveObject.helpers) {
        QuestHelpers.zubCounter = saveObject.helpers.zubCounter || 0;
        QuestHelpers.level5 = saveObject.helpers.level5 || false;
        QuestHelpers.firstRevive = saveObject.helpers.firstRevive || false;
        QuestHelpers.defeatedFirstMon = saveObject.helpers.defeadFirstMon || false;
        QuestHelpers.firstQuest = saveObject.helpers.firstQuest || false;
    }

    MutableVars.defeatedMonsters = saveObject.defeated || [];

    if (hasPlayer() && saveObject.playerX !== undefined) {
        GameActors.player.setPosition(saveObject.playerX, saveObject.playerY);
    }

    showBattleBanner("Hra načtena!", UI_CONFIG.BASIC_PAUSE * 2);
}

function createHealthBarSprite(current: number, max: number, width: number, height: number, x: number, y: number, kind: number, z: number): Sprite {
    const bar = image.create(width, height);
    bar.fill(COLORS.BLACK);

    const currentWidth = Math.constrain((current / max) * (width - UI_CONFIG.HEALTH_BAR_BORDER_REDUCTION), 0, width - UI_CONFIG.HEALTH_BAR_BORDER_REDUCTION);

    let color = COLORS.GREEN;
    if (current < max * BALANCE_CONFIG.LOW_HEALTH_THRESHOLD) color = COLORS.RED;
    else if (current < max * BALANCE_CONFIG.MID_HEALTH_THRESHOLD) color = COLORS.YELLOW;

    if (currentWidth > 0) bar.fillRect(UI_CONFIG.HEALTH_BAR_PADDING, UI_CONFIG.HEALTH_BAR_PADDING, currentWidth, height - UI_CONFIG.HEALTH_BAR_BORDER_REDUCTION, color);

    const barSprite = sprites.create(bar, kind);
    barSprite.setPosition(x, y);
    barSprite.setFlag(SpriteFlag.RelativeToCamera, true);
    barSprite.z = z;

    return barSprite;
}

function getAdjective(gender: MonsterGender): string {
    if (gender === MonsterGender.M) return "Divoký";
    if (gender === MonsterGender.F) return "Divoká";
    if (gender === MonsterGender.N) return "Divoké";
    return "Divoký"
}

function placePlayerAfterFight(npc: Sprite): void {
    if (!hasPlayer() || !npc) return;
    const diffX = GameActors.player.x - npc.x;
    const diffY = GameActors.player.y - npc.y;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        GameActors.player.x += (diffX > 0) ? UI_CONFIG.TILE_SIZE : -UI_CONFIG.TILE_SIZE;
    } else {
        GameActors.player.y += (diffY > 0) ? UI_CONFIG.TILE_SIZE : -UI_CONFIG.TILE_SIZE;
    }
}

function updateCursorDisplay(): void {
    if (!UIComponents.battleCursor) return;
    
    let boxLeft = UI_CONFIG.CURSOR_POS_X;
    let boxTop = UI_CONFIG.CURSOR_POS_Y;

    let x = 0;
    let y = 0;

    if (Battle.activeChoice === FightMode.Fight) {
        UIComponents.battleCursor.setImage(assets.image`battleCursor`);
        x = boxLeft + UI_CONFIG.CURSOR_FIGHT_POS_X;
        y = boxTop + UI_CONFIG.CURSOR_FIGHT_POS_Y;
    } else if (Battle.activeChoice === FightMode.Run) {
        UIComponents.battleCursor.setImage(assets.image`battleCursor`);
        x = boxLeft + UI_CONFIG.CURSOR_RUN_POS_X;
        y = boxTop + UI_CONFIG.CURSOR_RUN_POS_Y;
    } else if (Battle.activeChoice === FightMode.Heal) {
        UIComponents.battleCursor.setImage(assets.image`battleCursorFlipped`);
        x = boxLeft + UI_CONFIG.CURSOR_HEAL_POS_X;
        y = boxTop + UI_CONFIG.CURSOR_HEAL_POS_Y;
    }

    UIComponents.battleCursor.setPosition(x, y);
    UIComponents.battleCursor.z = UI_CONFIG.Z_CURSOR;
}

function showBattleBanner(text: string, duration: number): void {
    let bannerImg = image.create(UI_CONFIG.BANNER_WIDTH, UI_CONFIG.BANNER_HEIGHT);
    bannerImg.fill(COLORS.BLACK);

    let textX = (UI_CONFIG.BANNER_WIDTH - (text.length * UI_CONFIG.BANNER_TEXT_Y)) / 2;
    bannerImg.print(text, textX, UI_CONFIG.BANNER_TEXT_Y, 1);

    let banner = sprites.create(bannerImg, SpriteKind.Banner);
    banner.setFlag(SpriteFlag.RelativeToCamera, true);
    banner.z = UI_CONFIG.Z_BANNER;
    banner.setPosition(UI_CONFIG.SCREEN_CENTER_X, UI_CONFIG.SCREEN_CENTER_Y);

    banner.x = UI_CONFIG.BANNER_START_X;
    banner.vx = -UI_CONFIG.BANNER_SLIDE_SPEED;
    pause(UI_CONFIG.ANIMATION_SLIDE_PAUSE);
    banner.vx = 0;
    banner.x = UI_CONFIG.SCREEN_CENTER_X;

    pause(duration);
    banner.destroy();
}

function completeQuest(q: Quest) {
    if (q.isDone || GameState.isProcessingQuest) return;
    q.isDone = true;
    
    showBattleBanner("Úkol splněn", UI_CONFIG.BASIC_PAUSE);
    showBattleBanner(`+${q.xpReward} XP`, UI_CONFIG.BASIC_PAUSE);

    for (let monster of PlayerState.monsterArray) {
        monster.xp += q.xpReward;
        checkLevelUp(monster);
    }

    if (Quests[4] && !Quests[4].isDone && q !== Quests[4]) {
        completeQuest(Quests[4]);
    }
    
    GameState.isProcessingQuest = false;
}

function placeAt(sprite: Sprite | null, location: number[]): void {
    if (!sprite) return;
    const [col, row] = location;
    tiles.placeOnTile(sprite, tiles.getTileLocation(col, row));
}

function startGame(): void {
    if (!GameState.gamePlay) {
        color.startFade(color.Black, color.originalPalette, UI_CONFIG.BASIC_PAUSE * 2);
        tiles.setCurrentTilemap(tilemap`mainLocation`);
        GameActors.player = sprites.create(assets.image`playerModel`, SpriteKind.Player);
        controller.moveSprite(GameActors.player);
        scene.cameraFollowSprite(GameActors.player);

        GameActors.npc1 = sprites.create(assets.image`npc1`, SpriteKind.Enemy);
        placeAt(GameActors.npc1, LOCATIONS.NPC1_LOCATION);

        GameActors.npc2 = sprites.create(assets.image`npc3`, SpriteKind.Enemy);
        placeAt(GameActors.npc2, LOCATIONS.NPC2_LOCATION);
        
        GameActors.bossfight = sprites.create(assets.image`npc2`, SpriteKind.Enemy);
        placeAt(GameActors.bossfight, LOCATIONS.BOSSFIGHT_LOCATION);

        GameActors.townKeeper = sprites.create(assets.image`townKeeper`, SpriteKind.Enemy);
        placeAt(GameActors.townKeeper, LOCATIONS.TOWNKEEPER_LOCATION);


        GameState.gamePlay = true;
    }
}

function checkLevelUp(monster: PlayerMonster): void {
    if (!monster) return;
    if (monster.xp >= monster.maxXp) {
        monster.level += 1;
        monster.xp -= monster.maxXp;
        monster.health = monster.maxHealth;
       
        monster.maxXp = Math.floor(monster.maxXp * BALANCE_CONFIG.XP_SCALE);
        monster.maxHealth = Math.floor(monster.maxHealth * BALANCE_CONFIG.HP_DMG_SCALE);
        monster.minDmg = Math.floor(monster.minDmg * BALANCE_CONFIG.HP_DMG_SCALE);
        monster.maxDmg = Math.floor(monster.maxDmg * BALANCE_CONFIG.HP_DMG_SCALE);

        showBattleBanner(monster.name + " postoupil na lvl " + monster.level + "!", UI_CONFIG.BANNER_PAUSE_LONG);
        
        if (monster.level >= 5 && !Quests[1].isDone) {
            completeQuest(Quests[1]);
        }
    }
}

function writeSmallFont(text: string, xPos: number, yPos: number, zInd: number, kind: number): Sprite {
    let sprite = textsprite.create(text, 0, COLORS.BLACK);

    sprite.setMaxFontHeight(UI_CONFIG.SMALL_FONT_HEIGHT);
    sprite.setKind(kind);
    sprite.setFlag(SpriteFlag.RelativeToCamera, true);
    sprite.z = zInd;
    sprite.setPosition(xPos, yPos);

    return sprite;
}

function teleport(location: tiles.Location) {
    if (!hasPlayer()) return;
    let x = location.column;
    let y = location.row;

    if (x === LOCATIONS.HOSPITAL_DOOR_COL && (y >= LOCATIONS.HOSPITAL_DOOR_ROW[0] && y <= LOCATIONS.HOSPITAL_DOOR_ROW[1])) {
        color.startFade(color.originalPalette, color.Black, UI_CONFIG.BASIC_PAUSE);
        safeDestroy(GameActors.healer);
        GameActors.healer = sprites.create(assets.image`healer`, SpriteKind.Enemy);
        tiles.setCurrentTilemap(tilemap`hospital`);
        placeAt(GameActors.player, LOCATIONS.PLAYER_IN_HOSPITAL);
        placeAt(GameActors.healer, LOCATIONS.HEALER_LOCATION);
        color.startFade(color.Black, color.originalPalette, UI_CONFIG.BASIC_PAUSE);
    }
}

function createSilhouette(original: Image): Image {
    let silhouette = original.clone();

    for (let i: number = 1; i <= 15; i++) {
        silhouette.replace(i, COLORS.BLACK);
    }

    return silhouette;
}

function toggleQuests(): void {
    if (UIComponents.quests === null) {
        openPanel("quests");
        drawQuestsContent();
    } else {
        closePanel("quests");
    }
}

function toggleBestiary(): void {
    if (UIComponents.bestiary === null) {
        openPanel("bestiary");
        drawBestiaryContent();
    } else {
        closePanel("bestiary");
    }
}

function toggleMenu(): void {
    if (GameState.speaking || GameState.activeBattle) return;
    if (UIComponents.inventory === null) {
        openPanel("inventory");
        drawInventoryContent();
    } else {
        closePanel("inventory");
    }
}

function updateStatus(isPlayer: boolean): void {
    if (isPlayer && PlayerState.monsterArray.length === 0) return;
    if (!isPlayer && !Battle.currentEnemy) return;

    let box = isPlayer ? UIComponents.playerStatusBox : UIComponents.enemyStatusBox;
    if (!box) return;

    let monster = isPlayer ? PlayerState.monsterArray[0] : Battle.currentEnemy;
    let barX = isPlayer ? box.x : box.x - 7;
    let barY = box.y + 3;

    if (isPlayer && UIComponents.playerNameSprite) UIComponents.playerNameSprite.destroy();
    else if (!isPlayer && UIComponents.enemyNameSprite) UIComponents.enemyNameSprite.destroy();

    if (isPlayer && UIComponents.playerHPBar) UIComponents.playerHPBar.destroy();
    else if (!isPlayer && UIComponents.enemyHPBar) UIComponents.enemyHPBar.destroy();

    const newName = createTextSprite(
        monster.name, UI_CONFIG.BATTLE_NAME_WIDTH, UI_CONFIG.BATTLE_NAME_HEIGHT, barX + (isPlayer ? 1 : 3), barY - UI_CONFIG.BATTLE_NAME_HEIGHT, SpriteKind.UIText, UI_CONFIG.Z_BATTLE_TEXT_BAR
    );

    const newBar = createHealthBarSprite(
        monster.health, monster.maxHealth, UI_CONFIG.BATTLE_BAR_WIDTH, UI_CONFIG.BATTLE_BAR_HEIGHT, barX, barY, SpriteKind.UIBar, UI_CONFIG.Z_BATTLE_TEXT_BAR
    );

    if (isPlayer) {
        UIComponents.playerNameSprite = newName;
        UIComponents.playerHPBar = newBar;
    } else {
        UIComponents.enemyNameSprite = newName;
        UIComponents.enemyHPBar = newBar;
    }
}

function startFight(): void {
    if (GameState.activeBattle) return;
    if (!GameActors.player) return;
    if (PlayerState.monsterArray.length === 0) return;
    GameState.activeBattle = true;

    controller.moveSprite(GameActors.player, 0, 0);
    if (GameActors.lastNpcEncountered === null) showBattleBanner("Divoké zvíře se přiblížilo!", UI_CONFIG.BASIC_PAUSE * 3);
    color.startFade(color.originalPalette, color.Black, UI_CONFIG.BASIC_PAUSE);

    GameActors.player.setFlag(SpriteFlag.Ghost, true);
    scene.cameraFollowSprite(null);
    scene.centerCameraAt(UI_CONFIG.SCREEN_CENTER_X, UI_CONFIG.SCREEN_CENTER_Y);

    
    let randomMonsterNumber = randint(0, GameLibrary.wildPool.length - 1);

    if (GameActors.lastNpcEncountered === GameActors.npc2) {
        randomMonsterNumber = BALANCE_CONFIG.NPC2_MONSTER_INDEX;
    }  
    GameActors.player.setFlag(SpriteFlag.Invisible, true);
    tiles.setCurrentTilemap(null);
    scene.setBackgroundImage(GameLibrary.background[0]);
    Battle.currentEnemy = cloneEnemy(GameLibrary.wildPool[randomMonsterNumber]);

    if (GameActors.lastNpcEncountered === GameActors.npc2) {
        Battle.currentEnemy.maxHealth *= BALANCE_CONFIG.QUEST_MULTIPLY;
        Battle.currentEnemy.minDmg *= BALANCE_CONFIG.QUEST_MULTIPLY;
        Battle.currentEnemy.maxDmg *= BALANCE_CONFIG.QUEST_MULTIPLY;
    }

    if (GameActors.lastNpcEncountered === GameActors.bossfight) {
        Battle.currentEnemy = cloneEnemy(GameLibrary.bossfight[1]);
    }
    
    Battle.currentEnemy.health = Battle.currentEnemy.maxHealth;

    UIComponents.fightMenuBox = createUISprite(assets.image`fightMenu`, UI_CONFIG.FIGHT_MENU_POS_X, UI_CONFIG.FIGHT_MENU_POS_Y);
    UIComponents.enemyStatusBox = createUISprite(assets.image`enemyStatusBox`, UI_CONFIG.ENEMY_STATUS_BOX_POS_X, UI_CONFIG.ENEMY_STATUS_BOX_POS_Y);
    UIComponents.playerStatusBox = createUISprite(assets.image`playerStatusBox`, UI_CONFIG.PLAYER_STATUS_BOX_POS_X, UI_CONFIG.PLAYER_STATUS_BOX_POS_Y);

    UIComponents.playerBattleSprite = sprites.create(PlayerState.monsterArray[0].icon, SpriteKind.BattleSprite);
    UIComponents.enemyBattleSprite = sprites.create(Battle.currentEnemy.icon, SpriteKind.BattleSprite);

    UIComponents.playerBattleSprite.setScale(UI_CONFIG.BATTLE_SPRITE_SCALE);
    UIComponents.enemyBattleSprite.setScale(2);
    
    UIComponents.playerBattleSprite.setPosition(UI_CONFIG.PLAYER_POS_X, UI_CONFIG.PLAYER_POS_Y);
    UIComponents.enemyBattleSprite.setPosition(UI_CONFIG.ENEMY_POS_X, UI_CONFIG.ENEMY_POS_Y);

    UIComponents.playerBattleSprite.setFlag(SpriteFlag.RelativeToCamera, true);
    UIComponents.enemyBattleSprite.setFlag(SpriteFlag.RelativeToCamera, true);

    UIComponents.playerBattleSprite.z = UI_CONFIG.Z_BATTLE_SPRITE;
    UIComponents.enemyBattleSprite.z = UI_CONFIG.Z_BATTLE_SPRITE;

    updateStatus(true);  // Aktualizuje hráče
    updateStatus(false); // Aktualizuje nepřítele

    let adjective = getAdjective(Battle.currentEnemy.gender);
    color.startFade(color.Black, color.originalPalette, UI_CONFIG.ATTACK_PAUSE);
    story.printCharacterText(`${adjective} ${Battle.currentEnemy.name} útočí!`);
    pause(UI_CONFIG.BASIC_PAUSE);

    UIComponents.battleCursor = sprites.create(assets.image`battleCursor`, SpriteKind.UI);
    UIComponents.battleCursor.z = UI_CONFIG.Z_CURSOR;
    UIComponents.battleCursor.setFlag(SpriteFlag.RelativeToCamera, true);
    updateCursorDisplay();

    let coinflip = randint(1, 2);

    if (coinflip === 1) {
        showBattleBanner("Začínáš!", UI_CONFIG.BASIC_PAUSE * 3);
        startBattleTurn(Turn.Player);
    } else {
        showBattleBanner(`${Battle.currentEnemy.name} začíná první!`, UI_CONFIG.BASIC_PAUSE * 3);
        startBattleTurn(Turn.Enemy);
    }
}

function endBattle(): void {
    GameState.activeBattle = false;
    GameState.gamePlay = true;
    GameState.speaking = false;
    GameState.playerTurn = false;
    GameState.isBusy = false;
    Battle.activeChoice = FightMode.Fight;
    Battle.currentEnemy = null;
    GameActors.lastNpcEncountered = null;

    sprites.destroyAllSpritesOfKind(SpriteKind.UI);
    sprites.destroyAllSpritesOfKind(SpriteKind.UIBar);
    sprites.destroyAllSpritesOfKind(SpriteKind.BattleSprite);
    sprites.destroyAllSpritesOfKind(SpriteKind.UIText);

    // clear references
    UIComponents.playerNameSprite = null;
    UIComponents.enemyNameSprite = null;
    UIComponents.playerHPBar = null;
    UIComponents.enemyHPBar = null;
    UIComponents.inventory = null;
    UIComponents.playerBattleSprite = null;
    UIComponents.enemyBattleSprite = null;
    UIComponents.fightMenuBox = null;
    UIComponents.playerStatusBox = null;
    UIComponents.enemyStatusBox = null;
    UIComponents.battleCursor = null;

    color.startFade(color.originalPalette, color.Black, UI_CONFIG.BASIC_PAUSE);
    pause(UI_CONFIG.BASIC_PAUSE);

    tiles.setCurrentTilemap(tilemap`mainLocation`);

    if (hasPlayer()) {
        GameActors.player.setFlag(SpriteFlag.Invisible, false);
        GameActors.player.setFlag(SpriteFlag.Ghost, false);
        controller.moveSprite(GameActors.player, UI_CONFIG.PLAYER_MOVE_SPEED, UI_CONFIG.PLAYER_MOVE_SPEED);
        scene.cameraFollowSprite(GameActors.player);
    } else {
        scene.cameraFollowSprite(null);
    }

    color.startFade(color.Black, color.originalPalette, UI_CONFIG.BASIC_PAUSE);
    MutableVars.lastEncounterCheck = game.runtime() + UI_CONFIG.AI_PAUSE;
}

function spriteTookDmg(s: Sprite): void {
    s.setFlag(SpriteFlag.Invisible, true);
    pause(UI_CONFIG.TOOK_DMG_PAUSE);
    s.setFlag(SpriteFlag.Invisible, false);
}

function executeAttack(attackerName: string, target: MonsterBase, isPlayerAttacking: boolean): void {
    if (!target) return;
    if (!UIComponents.playerBattleSprite || !UIComponents.enemyBattleSprite) return;
    if (isPlayerAttacking && PlayerState.monsterArray.length === 0) return;
    if (!isPlayerAttacking && !Battle.currentEnemy) return;

    showBattleBanner(attackerName + " útočí!", UI_CONFIG.BANNER_PAUSE);

    const attacker: MonsterBase = isPlayerAttacking ? PlayerState.monsterArray[0] : Battle.currentEnemy;

    let damage = randint(attacker.minDmg, attacker.maxDmg);
    const criticalDmg = randint(1, BALANCE_CONFIG.CRIT_CHANCE);
    let criticalStrike: boolean = false;

    const attackAnim = getAttackAnim(attacker);
    const attackerSprite = isPlayerAttacking ? UIComponents.playerBattleSprite : UIComponents.enemyBattleSprite;
    const moveOffset = isPlayerAttacking ? UI_CONFIG.ATTACK_MOVE_OFFSET : -UI_CONFIG.ATTACK_MOVE_OFFSET;

    animation.runImageAnimation(attackerSprite, attackAnim, UI_CONFIG.ANIMATION_SPEED, false);
    attackerSprite.x += moveOffset;
    pause(attackAnim.length * UI_CONFIG.ANIMATION_SPEED);
    attackerSprite.x -= moveOffset;

    if (criticalDmg === 1) {
        criticalStrike = true;
        const critSprite = isPlayerAttacking
            ? UIComponents.enemyBattleSprite
            : UIComponents.playerBattleSprite;
        critSprite.setFlag(SpriteFlag.RelativeToCamera, false);
        scene.cameraShake(UI_CONFIG.CRIT_SHAKE_INTENSITY, UI_CONFIG.BASIC_PAUSE);
        pause(UI_CONFIG.BASIC_PAUSE);
        critSprite.setFlag(SpriteFlag.RelativeToCamera, true);
        damage = Math.round((damage + BALANCE_CONFIG.CRIT_OFFSET) * BALANCE_CONFIG.CRIT_MULTIPLIER);
    }

    target.health -= damage;
    if (target.health < (target.maxHealth * UI_CONFIG.LOW_HP_CAMERA_THRESHOLD_PERCENT) / 100) {
        scene.cameraShake(UI_CONFIG.LOW_HP_SHAKE_INTENSITY, UI_CONFIG.BASIC_PAUSE);
    }

    if (target.health < 0) target.health = 0;

    if (isPlayerAttacking) {
        if (UIComponents.enemyBattleSprite) {
            spriteTookDmg(UIComponents.enemyBattleSprite);
        }
    } else {
        if (UIComponents.playerBattleSprite) {
            spriteTookDmg(UIComponents.playerBattleSprite);

        }
    }

    updateStatus(true);  // Aktualizuje hráče
    updateStatus(false); // Aktualizuje nepřítele

    pause(2 * UI_CONFIG.TOOK_DMG_PAUSE);
    !criticalStrike ? showBattleBanner("Ubráno " + damage + " HP", UI_CONFIG.BANNER_PAUSE) : showBattleBanner("Kritický zásah za " + damage + " HP", UI_CONFIG.BANNER_PAUSE)
    pause(UI_CONFIG.BASIC_PAUSE);
}

function executeHeal(targetName: string, target: MonsterBase): void {
    if (!target) return;

    let baseHeal = randint(BALANCE_CONFIG.HEAL_MIN, BALANCE_CONFIG.HEAL_MAX);
    let percentageHeal = Math.floor(target.maxHealth * 0.10);
    let heal = baseHeal + percentageHeal;

    let oldHealth = target.health;
    target.health += heal;

    if (target.health > target.maxHealth) {
        target.health = target.maxHealth;
    }

    let actualHeal = target.health - oldHealth;

    showBattleBanner(targetName + " se léčí!", UI_CONFIG.BANNER_PAUSE);

    updateStatus(true);  // Aktualizuje hráče
    updateStatus(false); // Aktualizuje nepřítele

    if (actualHeal > 0) {
        showBattleBanner("Obnoveno " + actualHeal + " HP", UI_CONFIG.BANNER_PAUSE);
    } else {
        showBattleBanner("Zdraví je již plné!", UI_CONFIG.BANNER_PAUSE);
    }

    pause(UI_CONFIG.BASIC_PAUSE);
}

function startBattleTurn(turn: Turn): void {
    GameState.activeBattle = true;
    if (turn === Turn.Player) {
        pause(UI_CONFIG.RESET_GHOST_INPUT_PAUSE); //Resetting ghost inputs 
        GameState.isBusy = false;
        MutableVars.playerTurnStartTime = game.runtime();
        GameState.playerTurn = true;
        if (UIComponents.battleCursor) UIComponents.battleCursor.setFlag(SpriteFlag.Invisible, false);
    } else {
        GameState.playerTurn = false;
        if (UIComponents.battleCursor) UIComponents.battleCursor.setFlag(SpriteFlag.Invisible, true);
        handleEnemyAI();
    }
}

function handlePlayerAttack(): void {
    if (UIComponents.battleCursor) UIComponents.battleCursor.setFlag(SpriteFlag.Invisible, true);
    if (PlayerState.monsterArray.length === 0 || !Battle.currentEnemy) return;

    executeAttack("Hráč", Battle.currentEnemy, true);

    if (Battle.currentEnemy.health <= 0) {
        Battle.currentEnemy.gender === MonsterGender.M
            ? showBattleBanner(Battle.currentEnemy.name + " poražen!", UI_CONFIG.BANNER_PAUSE)
            : showBattleBanner(Battle.currentEnemy.name + " poražena!", UI_CONFIG.BANNER_PAUSE);

        if (GameActors.lastNpcEncountered === GameActors.bossfight && Battle.currentEnemy.name === "Houba") {
            showBattleBanner("Nastupuje Godzilla!", UI_CONFIG.BANNER_PAUSE_LONG);

            Battle.currentEnemy = cloneEnemy(GameLibrary.bossfight[BALANCE_CONFIG.BOSS_GODZILLA_INDEX]);
            Battle.currentEnemy.health = Battle.currentEnemy.maxHealth;

            if (UIComponents.enemyBattleSprite) {
                UIComponents.enemyBattleSprite.setImage(Battle.currentEnemy.icon);
            }
            updateStatus(false);

        
            startBattleTurn(Turn.Player);
            return;
        }

        if (Battle.currentEnemy.name === "Godzilla") {
            if (UIComponents.enemyBattleSprite) UIComponents.enemyBattleSprite.setFlag(SpriteFlag.RelativeToCamera, false);
            if (UIComponents.playerBattleSprite) UIComponents.playerBattleSprite.setFlag(SpriteFlag.RelativeToCamera, false);
            if (UIComponents.battleCursor) UIComponents.battleCursor.setFlag(SpriteFlag.RelativeToCamera, false);
            if (UIComponents.fightMenuBox) UIComponents.fightMenuBox.setFlag(SpriteFlag.RelativeToCamera, false);
            if (UIComponents.enemyStatusBox) UIComponents.enemyStatusBox.setFlag(SpriteFlag.RelativeToCamera, false);
            if (UIComponents.playerStatusBox) UIComponents.playerStatusBox.setFlag(SpriteFlag.RelativeToCamera, false);
            if (UIComponents.enemyHPBar) UIComponents.enemyHPBar.setFlag(SpriteFlag.RelativeToCamera, false);
            if (UIComponents.playerHPBar) UIComponents.playerHPBar.setFlag(SpriteFlag.RelativeToCamera, false);
            if (UIComponents.enemyNameSprite) UIComponents.enemyNameSprite.setFlag(SpriteFlag.RelativeToCamera, false);
            if (UIComponents.playerNameSprite) UIComponents.playerNameSprite.setFlag(SpriteFlag.RelativeToCamera, false);
            
            for (let i = 0; i < UI_CONFIG.GODZILLA_DEATH_SHAKE_LOOPS; i++) {
                const offsetX = randint(-UI_CONFIG.GODZILLA_DEATH_SHAKE_MAX_OFFSET, UI_CONFIG.GODZILLA_DEATH_SHAKE_MAX_OFFSET);
                const offsetY = randint(-UI_CONFIG.GODZILLA_DEATH_SHAKE_MAX_OFFSET, UI_CONFIG.GODZILLA_DEATH_SHAKE_MAX_OFFSET);

                scene.centerCameraAt(UI_CONFIG.SCREEN_CENTER_X + offsetX, UI_CONFIG.SCREEN_CENTER_Y + offsetY);

                pause(UI_CONFIG.JITTER_PAUSE * 1.5);
            }

            scene.centerCameraAt(UI_CONFIG.SCREEN_CENTER_X, UI_CONFIG.SCREEN_CENTER_Y);
            completeGame();
            return;
        }
        
        let isQuest: boolean = false;
        if (GameActors.lastNpcEncountered === GameActors.npc1 || GameActors.lastNpcEncountered === GameActors.npc2) {
            isQuest = true;
        }

        if (MutableVars.defeatedMonsters.indexOf(Battle.currentEnemy.name) === -1) {
            MutableVars.defeatedMonsters.push(Battle.currentEnemy.name);
            showBattleBanner("Nové zvíře objeveno: " + Battle.currentEnemy.name, UI_CONFIG.BANNER_PAUSE_VERY_LONG);
        }

        let xpGain = randint(BALANCE_CONFIG.XP_MIN, BALANCE_CONFIG.XP_MAX);
        if (isQuest) xpGain *= BALANCE_CONFIG.QUEST_BONUS;
        let secondaryXp = Math.floor(xpGain * BALANCE_CONFIG.SECONDARY_XP_SHARE);
        
        if (PlayerState.monsterArray.length > 0) {
            for (let monster of PlayerState.monsterArray) {
                if (monster === PlayerState.monsterArray[0]) {
                    monster.xp += xpGain;
                } else {
                    monster.xp += secondaryXp;
                }
            }

            showBattleBanner("Získáno " + xpGain + " XP", UI_CONFIG.BANNER_PAUSE);
            showBattleBanner("Zbytek týmu " + secondaryXp + " XP", UI_CONFIG.BANNER_PAUSE);
        }

        if (GameActors.lastNpcEncountered) {
            placePlayerAfterFight(GameActors.lastNpcEncountered);
            safeDestroy(GameActors.lastNpcEncountered);
            GameActors.lastNpcEncountered = null;
        }

        if (Battle.currentEnemy.name === "Zub") QuestHelpers.zubCounter++;
        
        endBattle();

        if (!Quests[2].isDone) {
            completeQuest(Quests[2]);
        }


        if (QuestHelpers.zubCounter >= 5 && !Quests[3].isDone) {
            completeQuest(Quests[3]);
        } 

        for (let monster of PlayerState.monsterArray) {
            checkLevelUp(monster);
        }
    } else {
        startBattleTurn(Turn.Enemy);
    }
}

function handlePlayerHeal(): void {
    if (UIComponents.battleCursor) UIComponents.battleCursor.setFlag(SpriteFlag.Invisible, true);
    if (PlayerState.monsterArray.length === 0) return;

    executeHeal("Hráč", PlayerState.monsterArray[0]);

    updateStatus(true);  // Aktualizuje hráče
    updateStatus(false); // Aktualizuje nepřítele

    pause(UI_CONFIG.BASIC_PAUSE);

    startBattleTurn(Turn.Enemy);
}

function handlePlayerRun(): void {
    let coinflip = randint(1, 2);
    if (coinflip === 1) {
        showBattleBanner("Utekl jsi!", UI_CONFIG.BANNER_PAUSE);

        if (GameActors.lastNpcEncountered) {
            placePlayerAfterFight(GameActors.lastNpcEncountered);
        }

        endBattle();
        GameActors.lastNpcEncountered = null;
    } else {
        showBattleBanner("Nepovedený útěk", UI_CONFIG.BANNER_PAUSE);
        handleEnemyAI();
    }
}

function handleEnemyAI(): void {
    if (PlayerState.monsterArray.length === 0 || !Battle.currentEnemy) return;
    pause(UI_CONFIG.AI_PAUSE);

    if (Battle.currentEnemy.health < Battle.currentEnemy.maxHealth * BALANCE_CONFIG.LOW_HEALTH_THRESHOLD && randint(1, BALANCE_CONFIG.AI_HEAL_CHANCE_AT_LOW_HP) === 1) {
        executeHeal(Battle.currentEnemy.name, Battle.currentEnemy);
    } else if (Battle.currentEnemy.health < Battle.currentEnemy.maxHealth * BALANCE_CONFIG.MID_HEALTH_THRESHOLD && randint(1, BALANCE_CONFIG.AI_HEAL_CHANCE_AT_MID_HP) === 1) {
        executeHeal(Battle.currentEnemy.name, Battle.currentEnemy);
    } else {
        executeAttack(Battle.currentEnemy.name, PlayerState.monsterArray[0], false);
    }

    if (PlayerState.monsterArray.length === 0) return;

    if (PlayerState.monsterArray[0].health <= 0) {
        PlayerState.monsterArray[0].gender === MonsterGender.M ? showBattleBanner(PlayerState.monsterArray[0].name + " je vyřazen!", UI_CONFIG.BANNER_PAUSE_LONG) : showBattleBanner(PlayerState.monsterArray[0].name + " je vyřazena!", UI_CONFIG.BANNER_PAUSE_LONG)

        PlayerState.monsterArray[0].xp = Math.floor(PlayerState.monsterArray[0].xp * BALANCE_CONFIG.XP_LOSS_ON_DEATH);
        PlayerState.deadPlayerMonsters.push(PlayerState.monsterArray[0]);
        PlayerState.monsterArray.shift();

        if (PlayerState.monsterArray.length > 0) {
            showBattleBanner("Nastupuje " + PlayerState.monsterArray[0].name + "!", UI_CONFIG.BANNER_PAUSE_LONG);
            if (UIComponents.playerBattleSprite) UIComponents.playerBattleSprite.setImage(PlayerState.monsterArray[0].icon);
            updateStatus(true);  // Aktualizuje hráče
            updateStatus(false); // Aktualizuje nepřítele

            startBattleTurn(Turn.Player);

        } else {
            showBattleBanner("Všechna zvířátka padla!", UI_CONFIG.BANNER_PAUSE_VERY_LONG);

            endBattle();

            tiles.setCurrentTilemap(assets.tilemap`hospital`);
            if (GameActors.player) placeAt(GameActors.player, LOCATIONS.PLAYER_NEXT_TO_BED);
            if (!GameActors.healer) GameActors.healer = sprites.create(assets.image`healer`, SpriteKind.Enemy);
            if (GameActors.healer) placeAt(GameActors.healer, LOCATIONS.HEALER_LOCATION);
        }
    } else {
        startBattleTurn(Turn.Player);
    }
}

function finishTalking() {
    if (!hasPlayer()) return;
    if (GameActors.lastNpcEncountered) {
        const diffX = GameActors.player.x - GameActors.lastNpcEncountered.x;
        const diffY = GameActors.player.y - GameActors.lastNpcEncountered.y;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            GameActors.player.x += (diffX > 0) ? UI_CONFIG.NPC_SEPARATION_OFFSET : -UI_CONFIG.NPC_SEPARATION_OFFSET;
        } else {
            GameActors.player.y += (diffY > 0) ? UI_CONFIG.NPC_SEPARATION_OFFSET : -UI_CONFIG.NPC_SEPARATION_OFFSET;
        }
    }

    GameState.speaking = false;
    controller.moveSprite(GameActors.player, UI_CONFIG.PLAYER_MOVE_SPEED, UI_CONFIG.PLAYER_MOVE_SPEED);
}

function handleGenericNPC(npc: Sprite): void {
    if (npc === GameActors.npc1) {
        story.printCharacterText("Chceš úkol?", "Simona");
        story.showPlayerChoices("Ano", "Ne");
        if (story.checkLastAnswer("Ano")) {
            if (PlayerState.monsterArray.length === 0 || !hasPlayer()) return;
            startFight();
        } else {
            story.printCharacterText("Tak se měj!", "Simona");
        }
    }
    
    if (npc === GameActors.npc2) {
        story.printCharacterText("Jsem král mořských hlubin", "Arnold");
        story.printCharacterText("Troufáš si na moje zvíře?", "Arnold");
        story.showPlayerChoices("Ano", "Ne");
        if (story.checkLastAnswer("Ano")) {
            if (PlayerState.monsterArray.length === 0 || !hasPlayer()) return;
            startFight();
        } else {
            story.printCharacterText("Přijď až budeš silnější", "Arnold");
        }
    }

    if (!GameState.activeBattle) finishTalking();
}

function handleHealer(): void {
    story.printCharacterText("Vyléčit/oživit zvířátka?", "Léčitel");
    story.showPlayerChoices("Vyléčit", "Oživit");

    if (story.checkLastAnswer("Vyléčit")) {
        for (let monster of PlayerState.monsterArray) {
            monster.health = monster.maxHealth;
        }
        story.printCharacterText("Vyléčeno!", "Léčitel");
    }

    if (story.checkLastAnswer("Oživit")) {
        if (PlayerState.deadPlayerMonsters.length === 0) {
            story.printCharacterText("Nikdo není mrtvý!", "Léčitel");
        } else {                                          
            for (let monster of PlayerState.deadPlayerMonsters) {
                if (isNaN(monster.xp) || monster.xp < 0) {
                    monster.xp = 0;
                }
                monster.health = 10;
                PlayerState.monsterArray.push(monster);
                story.printCharacterText("Oživeno: " + monster.name, "Léčitel");
            }
            PlayerState.deadPlayerMonsters = [];

            if (!Quests[0].isDone) {
                completeQuest(Quests[0]);
            }
        }
    }

    finishTalking();
}

function handleBestiary(): void {
    story.printCharacterText("Copak si přeješ?", "Správce");
    story.showPlayerChoices("Bestiář", "Úkol");
    
    if (story.checkLastAnswer("Bestiář")) {
        toggleBestiary();
    } else {
        toggleQuests();
    }
}

function handleBossfight(): void {
    story.printCharacterText("Chceš vyzvat moje příšery?", "???");
    story.showPlayerChoices("Ano", "Ne");

    if (story.checkLastAnswer("Ano")) startFight();

    finishTalking();
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player, npc) {
    if (GameState.speaking || GameState.activeBattle || GameState.inventoryOpen || GameState.bestiaryOpen || !hasPlayer() || game.runtime() < MutableVars.lastEncounterCheck) return;

    GameActors.lastNpcEncountered = npc;
    controller.moveSprite(GameActors.player, 0, 0);
    GameState.speaking = true;

    if (npc === GameActors.healer) {
        handleHealer();
    } else if (npc === GameActors.townKeeper) {
        handleBestiary();
    } else if (npc === GameActors.bossfight) {
        handleBossfight();
    } else {
        handleGenericNPC(npc);
    }

    pause(UI_CONFIG.BASIC_PAUSE);
})

scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedEast, function (player, location) {
    if (!hasPlayer()) return;
    scene.setBackgroundImage(null);
    teleport(location);
})

scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (player, location) {
    if (!hasPlayer()) return;
    color.startFade(color.originalPalette, color.Black, UI_CONFIG.BASIC_PAUSE);
    tiles.setCurrentTilemap(tilemap`mainLocation`);
    safeDestroy(GameActors.healer);
    GameActors.healer = null;
    placeAt(GameActors.player, LOCATIONS.PLAYER_LEAVE_HOSPITAL);
    color.startFade(color.Black, color.originalPalette, UI_CONFIG.BASIC_PAUSE);
})

scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass3, function (sprite, location) {
    if (GameState.activeBattle || !GameState.gamePlay || GameState.speaking || !hasPlayer() || game.runtime() < MutableVars.lastEncounterCheck) return;
    if (GameState.activeBattle && game.runtime() > MutableVars.lastEncounterCheck + (UI_CONFIG.BASIC_PAUSE * 2)) return
    
    MutableVars.lastEncounterCheck = game.runtime() + BALANCE_CONFIG.ENCOUNTER_CHECK_COOLDOWN;

    if (randint(1, BALANCE_CONFIG.ENCOUNTER_CHANCE) === 1) {
        if (!canStartBattle()) return;
        sprite.setVelocity(0, 0);

        sprite.setFlag(SpriteFlag.Ghost, true);
        GameActors.lastNpcEncountered = null;

        control.runInParallel(() => {
            pause(UI_CONFIG.PARALLEL_START_DELAY);
            startFight();
        });
    }
});

scene.onOverlapTile(SpriteKind.Player, assets.tile`sign`, function (player, location) {
    if (GameState.speaking || GameState.activeBattle ||!hasPlayer()) return;

    GameState.speaking = true;
    player.setVelocity(0, 0);
    controller.moveSprite(GameActors.player, 0, 0);

    let diffX = player.x - location.x;
    let diffY = player.y - location.y;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) player.x += UI_CONFIG.NPC_SEPARATION_OFFSET; else player.x -= UI_CONFIG.NPC_SEPARATION_OFFSET;
    } else {
        if (diffY > 0) player.y += UI_CONFIG.NPC_SEPARATION_OFFSET; else player.y -= UI_CONFIG.NPC_SEPARATION_OFFSET;
    }

    control.runInParallel(function () {
        pause(UI_CONFIG.SIGN_READ_DELAY);
        story.printCharacterText("Musíš porazit toho ducha", "Cedule");
        story.printCharacterText("Hru uložíš stisknutím Menu tlačítka", "Cedule");
        finishTalking();
        controller.moveSprite(GameActors.player, UI_CONFIG.PLAYER_MOVE_SPEED, UI_CONFIG.PLAYER_MOVE_SPEED);
    });
})


if (bigButton) {
    story.setSoundEnabled(false);
    scene.setBackgroundImage(assets.image`intro`);
    bigButton.sx = UI_CONFIG.BIG_BUTTON_SCALE_PERCENT / 100;
    bigButton.sy = UI_CONFIG.BIG_BUTTON_SCALE_PERCENT / 100;
    bigButton.setPosition(UI_CONFIG.SCREEN_CENTER_X, UI_CONFIG.SCREEN_CENTER_Y);
    animation.runImageAnimation(bigButton, bigButtonAnimation, UI_CONFIG.BASIC_PAUSE, true);
}

game.onUpdate(function () {
    if (!GameState.gamePlay || GameState.inventoryOpen || !hasPlayer()) return;

    let dir = Direction.None;
    if (GameActors.player.vx < 0) dir = Direction.Left;
    else if (GameActors.player.vx > 0) dir = Direction.Right;
    else if (GameActors.player.vy > 0) dir = Direction.Down;
    else if (GameActors.player.vy < 0) dir = Direction.Up;
    else dir = Direction.None;

    if (MutableVars.playerDirection !== dir) {
        MutableVars.playerDirection = dir;
        if (dir === Direction.None) {
            animation.stopAnimation(animation.AnimationTypes.All, GameActors.player);
        } else {
            let anims: { [key: number]: Image[] } = {
                [Direction.Left]: animationWalkLeft,
                [Direction.Right]: animationWalkRight,
                [Direction.Up]: animationWalkBack,
                [Direction.Down]: animationWalk
            };
            animation.runImageAnimation(GameActors.player, anims[dir], UI_CONFIG.WALK_ANIMATION_SPEED, true);
        }
    }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameState.isBusy) return;

    if (!GameState.gamePlay) {
        if (GameState.inventoryOpen || GameState.bestiaryOpen || GameState.questsOpen) return;
        
        if (bigButton) {
            animation.stopAnimation(animation.AnimationTypes.All, bigButton);
            bigButton.setImage(assets.image`bigButtonPress1`);
            pause(UI_CONFIG.INTRO_PAUSE);
            bigButton.destroy();
            bigButton = null;
        }

        if (settings.exists("save_file")) {
            story.printCharacterText("Chceš pokračovat?");
            story.showPlayerChoices("Ano", "Ne");

            if (story.checkLastAnswer("Ano")) {
                startGame();
                loadGame();
                GameState.gamePlay = true;
            } else {
                showIntro();
            }
        } else {
            showIntro();
        }
    } else if (GameState.activeBattle && GameState.playerTurn) {
        if (game.runtime() - MutableVars.playerTurnStartTime < UI_CONFIG.RESET_GHOST_INPUT_PAUSE * 3) return;
        GameState.playerTurn = false;
        GameState.isBusy = true;

        switch (Battle.activeChoice) {
            case FightMode.Fight:
                handlePlayerAttack();
                break;

            case FightMode.Heal:
                handlePlayerHeal();
                break;

            case FightMode.Run:
                handlePlayerRun();
                break;
        }
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameState.bestiaryOpen) {
        toggleBestiary();
        return;
    }

    if (GameState.questsOpen) {
        toggleQuests();
        return;
    }

    if (GameState.speaking) return;

    if (GameState.inventoryOpen) {
        toggleMenu();
    } else if (GameState.gamePlay) {
        toggleMenu();
    }
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameState.activeBattle) {
        if (Battle.activeChoice === FightMode.Run) {
            Battle.activeChoice = FightMode.Fight;
            updateCursorDisplay();
        }
    }
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameState.activeBattle) {
        if (Battle.activeChoice === FightMode.Fight) {
            Battle.activeChoice = FightMode.Run;
            updateCursorDisplay();
        }
    }
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameState.activeBattle) {
        if (Battle.activeChoice === FightMode.Fight) {
            Battle.activeChoice = FightMode.Heal;
            updateCursorDisplay();
        }
    }
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameState.activeBattle) {
        if (Battle.activeChoice === FightMode.Heal) {
            Battle.activeChoice = FightMode.Fight;
            updateCursorDisplay();
        }
    }
})

controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!GameState.gamePlay || GameState.activeBattle || GameState.speaking) return;
    saveGame();
    showBattleBanner("Hra uložena!", UI_CONFIG.BASIC_PAUSE * 2);
})