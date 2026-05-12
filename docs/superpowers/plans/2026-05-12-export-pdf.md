# Export PDF Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Add `/export [language]` command that generates and downloads a neutral-styled PDF with all CV data.

**Architecture:** Client-side PDF generation using jsPDF. New composable `useExportPDF.js` builds the document by iterating over existing data files and locale strings. No server changes.

**Tech Stack:** Nuxt 3, Vue 3, jsPDF

---

### Task 1: Install jsPDF + update cmds + locales

**Files:**
- Modify: `src/package.json`
- Modify: `src/data/cmds.js`
- Modify: `src/locales/en.js`
- Modify: `src/locales/pt.js`

- [ ] **Step 1: Install jsPDF**

Run: `npm install jspdf` in `src/`

Run: `node -e "const j = require('jspdf'); console.log('ok')"` — should print "ok"

- [ ] **Step 2: Add `/export` to cmds array**

```js
export const cmds = ['/aboutme', '/xp', '/education', '/skills', '/complete', '/language', '/help', '/clear', '/export']
```

- [ ] **Step 3: Add exportDone to en.js locale**

Add before the closing `}`:

```js
  exportDone: 'PDF exported successfully!',
```

- [ ] **Step 4: Add exportDone to pt.js locale**

Add before the closing `}`:

```js
  exportDone: 'PDF exportado com sucesso!',
```

---

### Task 2: Create useExportPDF composable

**Files:**
- Create: `src/composables/useExportPDF.js`

- [ ] **Step 1: Create the PDF composable**

```js
import { jsPDF } from 'jspdf'
import en from '../locales/en.js'
import pt from '../locales/pt.js'
import { experiences } from '../data/experiences.js'
import { formations } from '../data/formations.js'
import { technicalSkills, languages } from '../data/skills.js'

function translate(lang, key) {
  const locales = { en, pt }
  const strings = locales[lang]
  const str = key.split('.').reduce((o, k) => o?.[k], strings)
  if (str === undefined || str === null) return key
  return str.replace(/[^\x20-\xFF]/g, '').replace(/\x7F/g, '').trim()
}

export function useExportPDF() {
  function exportPDF(lang) {
    const doc = new jsPDF()
    const M = 20
    const PW = doc.internal.pageSize.getWidth()
    const PH = doc.internal.pageSize.getHeight()
    const MW = PW - 2 * M
    let y = M

    function page(need) {
      if (y + need > PH - M) {
        doc.addPage()
        y = M
      }
    }

    function bold(size) {
      doc.setFont('Helvetica', 'bold')
      doc.setFontSize(size)
    }

    function normal(size) {
      doc.setFont('Helvetica', 'normal')
      doc.setFontSize(size)
    }

    function txt(text, indent) {
      const lines = doc.splitTextToSize(text, MW - (indent || 0))
      doc.text(lines, M + (indent || 0), y)
      y += lines.length * 4.5
    }

    const tl = (key) => translate(lang, key)

    // Header
    bold(22)
    page(15)
    doc.text('Luiz Nascimento', M, y)
    y += 9
    normal(10)
    doc.text('email@guto.dev | linkedin.com/in/guto', M, y)
    y += 12

    // About
    bold(14)
    page(8)
    doc.text(tl('completeAbout'), M, y)
    y += 7
    normal(10)
    txt(tl('aboutme'))
    y += 5

    // Experience
    bold(14)
    page(8)
    doc.text(tl('completeXp'), M, y)
    y += 7

    for (const xp of experiences) {
      page(20)
      bold(11)
      doc.text(xp.company, M, y)
      y += 5
      normal(10)
      doc.text(`${xp.role[lang]} | ${xp.period[lang]}`, M, y)
      y += 5
      txt(xp.description[lang])
      y += 2
      normal(9)
      doc.text(`Techs: ${xp.techs.join(', ')}`, M, y)
      y += 8
    }

    y += 3

    // Education
    bold(14)
    page(8)
    doc.text(tl('completeFormacao'), M, y)
    y += 7

    for (const f of formations) {
      page(20)
      bold(11)
      doc.text(f.institution, M, y)
      y += 5
      normal(10)
      doc.text(`${f.degree[lang]} | ${f.period[lang]}`, M, y)
      y += 5
      txt(f.description[lang])
      y += 2
      normal(9)
      doc.text(`Techs: ${f.techs.join(', ')}`, M, y)
      y += 8
    }

    y += 3

    // Skills
    bold(14)
    page(8)
    doc.text(tl('skillTechnical'), M, y)
    y += 7

    normal(10)
    for (const s of technicalSkills) {
      page(5)
      const level = translate(lang, s.labelKey)
      const dots = '.'.repeat(Math.max(1, 50 - s.name.length - level.length))
      doc.text(`${s.name} ${dots} ${level}`, M, y)
      y += 5
    }

    y += 3

    // Languages
    bold(14)
    page(8)
    doc.text(tl('skillLanguage'), M, y)
    y += 7

    normal(10)
    for (const l of languages) {
      page(5)
      const level = translate(lang, l.labelKey)
      const dots = '.'.repeat(Math.max(1, 50 - l.name.length - level.length))
      doc.text(`${l.name} ${dots} ${level}`, M, y)
      y += 5
    }

    doc.save(`cv-luiz-nascimento-${lang}.pdf`)
  }

  return { exportPDF }
}
```

---

### Task 3: Wire /export command in app.vue

**Files:**
- Modify: `src/app.vue`

- [ ] **Step 1: Add /export to the help text (locales)**

Already done in Task 1 — but the help body should include `/export`. Update `src/locales/en.js` helpBody:

```js
  helpBody: [
    '/aboutme           \u2014  About me',
    '/xp                \u2014  Work experience list',
    '/xp <index>        \u2014  Work experience details',
    '/education          \u2014  Education list',
    '/education <index>  \u2014  Education details',
    '/skills            \u2014  My skills',
    '/complete          \u2014  Show everything at once',
    '/export [en|pt]    \u2014  Export CV as PDF',
    '/language [en|pt]  \u2014  Switch language',
    '/clear             \u2014  Clear terminal',
    '/help              \u2014  This message',
    '',
    'Tip: use Tab for auto-complete.'
  ].join('\n'),
```

Same update in `pt.js`:

```js
    '/export [en|pt]    \u2014  Exportar CV como PDF',
```

- [ ] **Step 2: Add /export case to processCommand**

```js
    case '/export':
      exportPDF(parts[1])
      break
```

- [ ] **Step 3: Add exportPDF function**

```js
function exportPDF(lang) {
  if (lang !== 'en' && lang !== 'pt') {
    addOutput({ type: 'text', text: t('languageInvalid') })
    return
  }
  const { exportPDF: doExport } = useExportPDF()
  doExport(lang)
  addOutput({ type: 'text', text: t('exportDone') })
}
```

- [ ] **Step 4: Run dev server and test**

Run: `cd src && npm run dev`

Expected: app starts without errors.

Open browser, type `/export en` — should download `cv-luiz-nascimento-en.pdf`.
Type `/export pt` — should download `cv-luiz-nascimento-pt.pdf`.
Type `/export es` — should show error: "Supported languages: en, pt"
