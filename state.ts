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