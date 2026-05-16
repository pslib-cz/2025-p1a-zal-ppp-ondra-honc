# Katalog funkčních požadavků

1. **Pohyb hráče a průzkum světa**
 - Pohyb hráče: Program umožní hráči pohyb ve čtyřech základních směrech pomocí směrových tlačítek.
 - Kolize: Hráč nesmí procházet skrze neprostupné dlaždice definované v tilemapě.
 - Interakce: Program musí detekovat, když hráč vstoupí na specifický typ dlaždice, včetně naražení do NPC.

2. **Systém náhodného setkání**
 - Generování soubojů: Při pohybu po trávě musí program s pravděpodobností 1/12 (nastavitelnou v konfiguraci) inicializovat souboj s náhodným monstrem.
 - Zamezování vícenásobnému spuštění: Program musí po detekci vstupu na trávu aplikovat krátkou ochranný cooldown, aby nedocházelo k zahlcení procesoru a pádům hry.
 - Zastavení světa: Během iniciace souboje musí být okamžitě pozastaven pohyb hráče a ostatní herní mechaniky.

3. **Turn-based Soubojový systém**
 - Tahová logika: Souboj musí probíhat v tazích, kde se střídá hráč a nepřítel.
 - Nabídka akcí: Hráč musí mít v souboji na výběr minimálně ze tří akcí: Útok, Útěk a Léčení.
 - Výpočet poškození: Program musí vypočítat poškození na základě statistik monstra a odečíst jej z aktuálního počtu životů cíle.
 - Stavy vítězství a prohry:
   - Pokud HP nepřítele klesne na 0, hráč vyhrává, získává zkušenosti a vrací se do mapy.
   - Pokud HP hráče klesne na 0, hra končí.

4. **Správa monster**
 - Vizuální reprezentace: Program musí podporovat vykreslování velkých detailních spritů v soubojovém režimu.
 - Databáze monster: Hra musí obsahovat pole monster s definovanými vlastnostmi: jméno, pohlaví (pro správné skloňování v dialozích), základní HP a síla útoku.
 - Leveling monstra: Po získání dostatečného množství XP musí dojít k navýšení úrovně monstra a jeho statistik.

5. **UI a menu**
 - Hlavní menu: Tlačítko (B) vyvolá menu s inventářem a přehledem monster, pokud se hráč nachází v režimu průzkumu.
 - Informační dialogy: Program musí informovat hráče o průběhu souboje pomocí textových oken.
 - Bestiář: Hra musí obsahovat seznam již potkaných monster s jejich základními informacemi (jméno).
 - Zobrazení stavu: Během souboje musí být viditelné health bary pro oba účastníky.

6. **Stabilita a logika**
 - Správa stavů: Program musí striktně oddělovat stavy hry, aby nedocházelo k překrývání logiky.
 - Lokalizace: Program musí podporovat správné skloňování přídavných jmen na základě rodu monstra (např. „Divoký" vs. „Divoká").


> Open this page at [https://ondra-honc.github.io/pxt-pokemon-hra/](https://ondra-honc.github.io/pxt-pokemon-hra/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/ondra-honc/pxt-pokemon-hra** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/ondra-honc/pxt-pokemon-hra** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
