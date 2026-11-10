# Cvičeníčko - nový web

Moderní, responzivní statický web pro Cvičeníčko. Žádný framework, žádný build.

## Jak upravit obsah

Všechny texty, ceny, rozvrh, fotky a odkazy jsou v jednom souboru: **content.js**.
Otevřete ho v libovolném editoru (Poznámkový blok, TextEdit), upravte text v uvozovkách, uložte, nahrajte na hosting.

Fotky se přidávají do složky `photos/` a jejich názvy se dopíšou do `content.js` (galerie, programy, hero).

## Rezervace (přihlášky)

Každé tlačítko "Přihlásit se" míří na URL nastavenou na začátku content.js:

```js
bookingUrl: "https://www.cvicenicko.cz/timetable",
```

Změnou tohoto jednoho řádku se přepne rezervace na jakýkoliv nový systém.

## Nasazení

- **Netlify:** přetáhněte složku `site/` na app.netlify.com/drops. Hotovo.
- **GitHub Pages:** nahrajte obsah `site/` do repozitáře, zapněte Pages v nastavení.
- Složka obsahuje: `index.html`, `content.js`, `app.js`, `styles.css`, `photos/`.

## Lokální spuštění

```bash
cd site && python3 -m http.server 8080
```

pak otevřete http://localhost:8080
