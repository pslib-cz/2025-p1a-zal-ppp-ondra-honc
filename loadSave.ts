function saveGame(): void {
    const saveObject: SaveFile = {
        party: PlayerState.monsterArray.map(serializeMonster),
        graveyard: PlayerState.deadPlayerMonsters.map(serializeMonster),
        questProgress: Quests.map(q => q.isDone),
        helpers: QuestHelpers,
        defeated: MutableVars.defeatedMonsters,
        playerX: hasPlayer() ? GameActors.player.x : 0,
        playerY: hasPlayer() ? GameActors.player.y : 0,
    }

    settings.writeString("save_file", JSON.stringify(saveObject));
}

function loadGame(): void {
    const jsonString = settings.readString("save_file");
    if (!jsonString) return;

    const saveObject = JSON.parse(jsonString) as SaveFile;

    PlayerState.monsterArray = loadMonsterList(saveObject.party || []);
    PlayerState.deadPlayerMonsters = loadMonsterList(saveObject.graveyard || []);

    const progress = saveObject.questProgress || [];
    for (let i = 0; i < Quests.length; i++) {
        if (progress[i] !== undefined) Quests[i].isDone = progress[i];
    }

    const helpers = saveObject.helpers;
    if (helpers) {
        QuestHelpers.zubCounter = helpers.zubCounter || 0;
        QuestHelpers.level5 = helpers.level5 || false;
        QuestHelpers.firstRevive = helpers.firstRevive || false;
        QuestHelpers.defeatedFirstMon = helpers.defeatedFirstMon || false;
        QuestHelpers.firstQuest = helpers.firstQuest || false;
    }

    MutableVars.defeatedMonsters = saveObject.defeated || [];

    if (hasPlayer() && saveObject.playerX !== undefined && saveObject.playerY !== undefined) {
        GameActors.player.setPosition(saveObject.playerX, saveObject.playerY);
    }

    showBattleBanner("Hra načtena!", UI_CONFIG.BASIC_PAUSE * 2);
}