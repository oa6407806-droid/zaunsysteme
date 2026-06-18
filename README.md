# A&E Zaun & Torsysteme Premium FIX

Der vorherige Fehler war: Tailwind war nicht eingerichtet.
Diese Version enthält Tailwind komplett.

## Start

```bash
npm install
npm run dev
```

Dann öffnen:

```bash
http://localhost:3000
```

Wenn du alte node_modules oder .next hast:

```bash
rm -rf node_modules .next package-lock.json
npm install
npm run dev
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules,.next,package-lock.json
npm install
npm run dev
```
