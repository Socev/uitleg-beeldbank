# Bijdragen aan de uitleg-beeldbank

Fijn dat je wilt meedoen. Deze afspraken houden de beeldbank betrouwbaar en bruikbaar voor iedere praktijk.

## Inhoud

1. **Altijd een bron.** Elk onderwerp rust op [Thuisarts](https://www.thuisarts.nl) en/of de
   [NHG-Standaard](https://richtlijnen.nhg.org). Zet de links in `bronnen.md`. Wijkt je tekst af van de bron, leg dan
   in de pull request uit waarom.
2. **B1-taal.** Korte zinnen, gewone woorden, je-vorm. Leg een vakterm uit als je hem gebruikt.
3. **Geen doseringen en geen merknamen.** Noem de soort medicijn (“luchtwegverwijder”, “bloedverdunner”), niet het
   merk of de hoeveelheid. Dat bespreekt de arts met de patiënt.
4. **Geen patiëntgegevens.** Geen namen, foto's, casussen of andere gegevens die naar een persoon te herleiden zijn.
5. **Geen praktijkgegevens die verouderen.** Geen telefoonnummers, openingstijden of namen van medewerkers.
   Landelijke nummers (112, 113) mogen.
6. **Eigen werk.** Tekeningen en teksten maak je zelf, of je hebt het recht ze onder CC BY-SA 4.0 te delen.
   Geen plaatjes van internet overnemen.

## Vorm

- Een nieuw onderwerp krijgt een eigen map met kleine letters zonder spaties (bijvoorbeeld `diabetes-type-2/`)
  en daarin `beelden/`, `tekst.md`, `bronnen.md` en bij voorkeur een `pagina.html` (kijk naar een bestaand onderwerp).
- **Tekeningen**: SVG, zelfstandig te openen (met `xmlns`, `viewBox`, `width` en `height`), met een `<title>` die in
  één zin beschrijft wat je ziet. Geen externe bestanden, lettertypen of scripts in de SVG.
  Stap-voor-stap-uitleg: één bestand per stap, genummerd (`longen-1-gezond.svg`, `longen-2-astma.svg`).
  Beweging mag, maar houd rekening met `prefers-reduced-motion` (zie een bestaand plaatje).
- **Kleuren**: sluit aan bij de bestaande plaatjes, zodat de beeldbank één geheel blijft.
- **Bestandsnamen**: kleine letters, koppeltekens, geen spaties.

## Zo lever je iets aan

1. Maak een fork van deze repo en een eigen branch.
2. Voeg je onderwerp of wijziging toe en zet je naam (of die van je praktijk) erbij in `bronnen.md` onder “Gemaakt door”.
3. Open een **pull request** met een korte uitleg: wat, waarom en welke bron.
4. De beheerders (Huisartsenpraktijk Tolgaarde / Socev) kijken het na. Pas na hun goedkeuring wordt het samengevoegd.
   Rechtstreeks op `main` schrijven kan niet.

Door bij te dragen ga je ermee akkoord dat je bijdrage onder dezelfde licenties valt als de rest van de repo:
CC BY-SA 4.0 voor teksten en tekeningen, MIT voor code.
