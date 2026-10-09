# Uitleg-beeldbank

Zelfgetekende uitlegplaatjes en eenvoudige teksten (taalniveau B1) voor tijdens het consult in de huisartsenpraktijk.
Laat een patiënt zien wat er in de longen, het hart, de hersenen of de urinewegen gebeurt, stap voor stap, op een tablet of een groot scherm.

Iedereen mag de plaatjes en teksten gebruiken, aanpassen en aanvullen, ook in de eigen praktijk of op de eigen website.
Wel graag met naamsvermelding en onder dezelfde licentie (zie [Licentie](#licentie)).

De onderwerpen komen van [uitleg.tolgaarde.nl](https://uitleg.tolgaarde.nl), de uitlegpagina's van Huisartsenpraktijk Tolgaarde in Leusden.

## Onderwerpen

| Onderwerp | Plaatje | Wat zit erin |
|---|---|---|
| [SSRI](ssri/) | <img src="ssri/beelden/werking-3-ssri.svg" width="220" alt="Synaps met SSRI"> | hoe een SSRI werkt (4 stappen), wanneer het werkt, hoe lang en afbouwen, let op |
| [Astma](astma/) | <img src="astma/beelden/longen-3-aanval.svg" width="220" alt="Luchtweg bij een astma-aanval"> | luchtweg in 5 stappen, twee soorten medicijnen, prikkels (9 pictogrammen), zelf doen en bellen |
| [COPD](copd/) | <img src="copd/beelden/longen-2-copd.svg" width="220" alt="Luchtbuisje met longblaasjes bij COPD"> | gezond en COPD, stoppen met roken (longfunctie per leeftijd), zelf doen, longaanval |
| [Hartfalen](hartfalen/) | <img src="hartfalen/beelden/pomp-2-hartfalen.svg" width="220" alt="Lichaam met hartfalen"> | hart als pomp, dagelijks wegen, medicijnen, zelf doen en bellen |
| [Boezemfibrilleren](boezemfibrilleren/) | <img src="boezemfibrilleren/beelden/ritme-2-boezemfibrilleren.svg" width="220" alt="Hart met boezemfibrilleren"> | ritme in 4 stappen (met hartfilmpje), behandeling, zelf doen en bellen |
| [Prostaat](prostaat/) | <img src="prostaat/beelden/prostaat-2-grotere-prostaat.svg" width="220" alt="Grotere prostaat die op de plasbuis drukt"> | prostaat in 4 stappen (gewoon, groter, kanker, blaas en bekkenbodem), het verschil, zelf doen en medicijnen, PSA-test, bellen |
| [Blaasontsteking](blaasontsteking/) | <img src="blaasontsteking/beelden/infectie-3-nierbekken-ontsteking.svg" width="220" alt="Urinewegen met nierbekken-ontsteking"> | infectie in 4 stappen (blaas, nier, prostaat), plas testen, welk antibioticum waar werkt (zonder doseringen), zelf doen, bellen |

## Zo is een onderwerp opgebouwd

```
astma/
├── beelden/        losse tekeningen (SVG); bij een stap-voor-stap-uitleg één bestand per stap
├── pictogrammen/   kleine pictogrammen (alleen als het onderwerp ze heeft)
├── tekst.md        de tekst in B1, met de plaatjes op hun plek
├── bronnen.md      Thuisarts-pagina's en de NHG-Standaard waar de tekst op rust
└── pagina.html     voorbeeldpagina, werkt los (dubbelklikken) en zonder internet
```

`gedeeld/` bevat de stijl (`stijl.css`) en het kleine script voor de stapknoppen (`uitleg.js`) van de voorbeeldpagina's.

## Gebruiken

- **Een plaatje**: download de SVG uit `beelden/`. Het opent in elke browser en schaalt zonder kwaliteitsverlies.
  Je kunt het in een eigen pagina zetten (`<img src="…svg">`), in een presentatie of in een folder.
  Sommige plaatjes bewegen een beetje (een kloppend hart, stromend bloed); wie dat uit heeft staan
  (“beweging beperken”), ziet een stilstaand plaatje.
- **De tekst**: neem `tekst.md` over en pas hem aan je praktijk aan. Houd de bronnen in `bronnen.md` erbij.
- **Een hele pagina**: open `pagina.html` om te zien hoe het samen werkt, met knoppen om door de stappen te lopen.
- **Aanpassen**: de tekeningen zijn gewone SVG (tekst in een editor, of in Inkscape of Figma). Kleuren en teksten
  staan leesbaar in het bestand.

## Bijdragen

Een nieuw onderwerp, een betere tekening of een correctie is welkom. Lees eerst [CONTRIBUTING.md](CONTRIBUTING.md):
elk onderwerp heeft een bron (Thuisarts of NHG), is in B1 geschreven en bevat geen doseringen, merknamen of
patiëntgegevens. Bijdragen gaan via een pull request.

## Licentie

- **Teksten en tekeningen**: [Creative Commons Naamsvermelding-GelijkDelen 4.0 Internationaal (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/deed.nl), zie [LICENSE](LICENSE).
  Naamsvermelding: **Huisartsenpraktijk Tolgaarde / Socev** (en bij aanvullingen ook de makers daarvan).
  Pas je iets aan en deel je het, dan onder dezelfde licentie.
- **Code** (`gedeeld/stijl.css`, `gedeeld/uitleg.js` en eventuele scripts): MIT, zie [LICENSE-MIT](LICENSE-MIT).

## Let op

Deze uitleg is algemeen en vervangt geen gesprek met een arts. De inhoud is zorgvuldig getoetst aan Thuisarts,
maar standaarden veranderen: controleer de bron voordat je een onderwerp gebruikt. Er staan geen doseringen in en
geen gegevens van patiënten of praktijken.
