# Ghostforge Idle: Webseite für GitHub Pages

Startseite mit **Handy-Fenster** (das Spiel läuft darin) und **Vollbild auf dem Handy**.
Installierbar als App (PWA), läuft offline.

## Inhalt

| Datei | Zweck |
|---|---|
| `index.html` | Startseite mit Handy-Simulation (Gerät wählen, drehen, neu laden, Vollbild) |
| `game/spiel.html` | Das Spiel (Live-Version ohne Admin-Code). Heißt absichtlich nicht `index.html`, damit es nicht mit der Startseite verwechselt wird |
| `game/index.html` | Winzige Weiterleitung auf `spiel.html` (für alte Links und installierte Apps) |
| `manifest.webmanifest`, `sw.js`, `icons/` | App-Installation und Offline-Betrieb |
| `impressum.html`, `datenschutz.html` | **Vorlagen**: gelb markierte Stellen mit deinen Daten ausfüllen (siehe unten) |
| `shot-*.jpg` | Bilder für Startseite und Link-Vorschau |
| `.nojekyll` | Sagt GitHub Pages, dass keine Jekyll-Verarbeitung nötig ist |

## Auf GitHub Pages veröffentlichen (nur im Browser, ohne Programme)

1. Auf github.com ein neues **öffentliches** Repository anlegen, z. B. `ghostforge`.
2. **Add file → Upload files** und den **gesamten Inhalt** dieses Ordners hineinziehen
   (die Ordner `game` und `icons` mit hochladen). **Commit changes**.
3. **Settings → Pages**. Bei „Build and deployment“ als Quelle **Deploy from a branch** wählen,
   Branch `main`, Ordner `/ (root)`, speichern.
4. Nach ca. 1 Minute ist die Seite erreichbar unter `https://DEIN-NAME.github.io/ghostforge/`.

## Neue Spielversion einspielen

Die Spieldatei `game/spiel.html` (NICHT die `index.html` im obersten Ordner!) ist die Live-Version des Spiels mit einigen Zeilen im `<head>`
(Manifest, App-Symbol, Service Worker). Neue Versionen lasse ich dir am besten als fertiges Paket bauen.
Von Hand: `game/spiel.html` auf GitHub öffnen, Stift-Symbol, Inhalt ersetzen und die Zeilen zwischen
`<title>` und `<style>` (`manifest`, `apple-touch-icon`, `serviceWorker`) behalten.
Die Seite holt neue Versionen automatisch, sobald du online bist.

## Gut zu wissen

- **Spielstand:** Er liegt im Browser, getrennt je Adresse. Wer von der Artefakt-Version auf diese Seite wechselt,
  exportiert den Stand im Spiel über „Sichern“ und importiert ihn hier wieder.
- **Handy:** Auf kleinen Bildschirmen zeigt die Startseite statt des Handy-Fensters den Knopf „Vollbild spielen“.
  Als installierte App startet das Spiel direkt im Vollbild.
- **iPhone:** Installieren über Teilen → „Zum Home-Bildschirm“ (Safari).

## Recht und Datenschutz (Hinweis, keine Rechtsberatung)

- Das Spiel und die Startseite laden **nichts von fremden Servern** (keine Google Fonts, keine Skripte, keine Tracker, keine Cookies). Spielstand und Einstellungen liegen nur im Browser.
- `impressum.html` und `datenschutz.html` sind Vorlagen. Vor dem Veröffentlichen **deine Angaben eintragen** und den orangen Hinweiskasten löschen.
- Wer Skins oder Codes verkauft oder Einnahmen erzielt, betreibt die Seite geschäftsmäßig: Impressum ist dann Pflicht, dazu kommen Steuer- und Verbraucherrecht. GitHub Pages ist laut GitHub nicht zum Betrieb eines Online-Shops gedacht.
