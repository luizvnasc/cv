# /export PDF Feature Design

## Summary

Add `/export [language]` command to generate and download a neutral-styled PDF with all CV information from the "complete" section, using client-side jsPDF.

## Architecture

- No server-side changes
- Install `jspdf` npm package
- New file: `composables/useExportPDF.js` — PDF composition + download trigger
- New string in cmds.js: `/export`
- Add handler in app.vue `processCommand()` for `/export`
- Reuses existing data files and `useI18n()` for translations

## Flow

1. User types `/export en` or `/export pt`
2. `processCommand()` splits args, validates language exists in `locales/`
3. If invalid → friendly error via existing `t('languageInvalid')`
4. If valid → set locale, call export handler
5. Handler builds PDF using jsPDF, iterating over all data sections
6. Calls `doc.save('cv-luiz-nascimento-[lang].pdf')` → triggers browser download
7. Outputs confirmation message in terminal

## PDF Layout (A4, neutro)

Single-column, black text on white, Helvetica font, no colors/borders.

```
[Name / Title]
[email | linkedin]

── About ──────────────────────────────
Bio text (full t('aboutme'))

── Experience ─────────────────────────
Company | Role | Period
Description (full)
Techs: Vue 3, Node.js, ...

Company | Role | Period
Description (full)
Techs: ...

── Education ──────────────────────────
Institution | Degree | Period
Description (full)
Techs: Algorithms, ...

── Skills ─────────────────────────────
Vue.js / Nuxt ............... Advanced
React / Next.js ............ Advanced
...

── Languages ──────────────────────────
Português .................. Native
English .................... Advanced
```

## Data Sources

- **About:** `t('aboutme')` from locales
- **Contacts:** `t('email')` + `t('linkedin')` from locales  
- **Experience:** `experiences.js` — use `period[lang]`, `role[lang]`, `description[lang]`, `techs`
- **Education:** `formations.js` — use `period[lang]`, `degree[lang]`, `description[lang]`, `techs`
- **Skills:** `technicalSkills.js` — use `name` + `t(labelKey)`
- **Languages:** `languages` — use `name` + `t(labelKey)`

## Implementation Steps

1. `npm install jspdf` (no types needed, JS project)
2. Create `composables/useExportPDF.js` with:
   - Import jsPDF
   - Accept language param + all data
   - Build document with sections
   - Auto-download via `doc.save()`
3. Update `data/cmds.js` — add `/export`
4. Update `app.vue` — add `/export` case in switch, call export function
5. Update locales (`en.js`, `pt.js`) — add `exportDone` and `exportError` keys if desired

## Error Handling

- Invalid/missing language param → `t('cmdNotFound', { cmd: raw })` (existing)
- Language not in supported list → `t('languageInvalid')` (existing)
- Generic export error → handled by jsPDF (unlikely in client-side)

## Files Modified

| File | Change |
|------|--------|
| `src/package.json` | Add `jspdf` dependency |
| `src/data/cmds.js` | Add `/export` |
| `src/composables/useExportPDF.js` | **New file** — PDF composition |
| `src/app.vue` | Add `/export` case + import/function |

## Verification

- Run `npm run dev`, open browser
- Type `/export en` → should download `cv-luiz-nascimento-en.pdf`
- Type `/export pt` → should download `cv-luiz-nascimento-pt.pdf`
- Type `/export es` → should show error
- Verify PDF contains all sections with full descriptions
