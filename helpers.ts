//Helper funkce
function getAttackAnim(monster: MonsterBase): Image[] {
    if (attackAnims[monster.name]) {
        return attackAnims[monster.name];
    }

    return [monster.icon];
}

function hasPlayer(): boolean {
    return GameActors.player !== null;
}

function hasPartyLeader(): boolean {
    return PlayerState.monsterArray.length > 0 && PlayerState.monsterArray[0] !== null;
}

function safeDestroy(s: Sprite | null): void {
    if (s) s.destroy();
}

function cloneEnemy(m: EnemyMonster, multiplier: number): EnemyMonster {
    return {
        name: m.name,
        maxHealth: Math.floor(m.maxHealth * multiplier),
        health: Math.floor(m.health * multiplier),
        minDmg: Math.floor(m.minDmg * multiplier),
        maxDmg: Math.floor(m.maxDmg * multiplier),
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

function getPlayerPowerMultiplier(): number {
    let maxPlayerLevel = 1;
    for (let monster of PlayerState.monsterArray) {
        if (!monster) continue;
        
        if (monster.level > maxPlayerLevel) {
            maxPlayerLevel = monster.level;
        }
    }
    return 1 + (maxPlayerLevel - 1) * 0.15;
}

function serializeMonster(m: PlayerMonster): SavedMonster {
    return {
        name: m.name,
        health: m.health,
        maxHealth: m.maxHealth,
        xp: m.xp,
        maxXp: m.maxXp,
        level: m.level,
        minDmg: m.minDmg,
        maxDmg: m.maxDmg,
    }
}

function hydrateMonster(saved: SavedMonster): PlayerMonster | null {
    const base = GameLibrary.baseMonsters.find(monster => monster.name === saved.name);
    if (!base) return null;

    return {
        name: saved.name,
        health: saved.health,
        maxHealth: saved.maxHealth,
        xp: saved.xp,
        maxXp: saved.maxXp,
        level: saved.level,
        minDmg: saved.minDmg,
        maxDmg: saved.maxDmg,
        icon: base.icon,
        gender: base.gender,
    }
}

function loadMonsterList(list: SavedMonster[]): PlayerMonster[] {
    const out: PlayerMonster[] = [];
    for (const sm of list) {
        const hydrated = hydrateMonster(sm)
        if (hydrated) out.push(hydrated);
    }
    return out;
}