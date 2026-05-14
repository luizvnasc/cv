import { jsPDF } from 'jspdf'
import en from '../locales/en.js'
import pt from '../locales/pt.js'

const locales = { en, pt }

function translate(lang, key) {
  const strings = locales[lang]
  const str = key.split('.').reduce((o, k) => o?.[k], strings)
  if (str === undefined || str === null) return key
  return str.replace(/[^\x20-\x7E\x80-\xFF\n]/g, '').replace(/\x7F/g, '').trim()
}

export function useExportPDF() {
  function exportPDF(lang) {
    const strings = locales[lang]
    const experiences = strings.experiences
    const formations = strings.formations
    const technicalSkills = strings.technicalSkills
    const languages = strings.languages

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

    function justifyTxt(text, indent) {
      const lines = doc.splitTextToSize(text, MW - (indent || 0))
      for (let i = 0; i < lines.length; i++) {
        page(4.5)
        const isLast = i === lines.length - 1
        doc.text(lines[i], M + (indent || 0), y, {
          align: isLast ? 'left' : 'justify',
          maxWidth: MW - (indent || 0)
        })
        y += 4.5
      }
    }

    const tl = (k) => translate(lang, k)

    bold(22)
    page(15)
    doc.text('Luiz Nascimento', M, y)
    y += 9
    normal(10)
    doc.text('email@guto.dev | linkedin.com/in/guto', M, y)
    y += 12

    bold(14)
    page(8)
    doc.text(tl('completeAbout'), M, y)
    y += 7
    normal(10)
    const aboutParagraphs = tl('aboutme').split('\n')
    for (const p of aboutParagraphs) {
      const trimmed = p.trim()
      if (trimmed === '') {
        y += 4.5
      } else {
        justifyTxt(trimmed)
      }
    }
    y += 5

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
      doc.text(`${xp.role} | ${xp.period}`, M, y)
      y += 5
      justifyTxt(xp.description)
      y += 2
      page(6)
      bold(9)
      const techLabel = 'Techs: '
      const techLabelW = doc.getTextWidth(techLabel)
      doc.text(techLabel, M, y)
      normal(9)
      doc.text(xp.techs.join(', '), M + techLabelW, y)
      y += 8
    }

    y += 3

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
      doc.text(`${f.degree} | ${f.period}`, M, y)
      y += 5
      justifyTxt(f.description)
      y += 2
      page(6)
      bold(9)
      const techLabel = 'Techs: '
      const techLabelW = doc.getTextWidth(techLabel)
      doc.text(techLabel, M, y)
      normal(9)
      doc.text(f.techs.join(', '), M + techLabelW, y)
      y += 8
    }

    y += 3

    bold(14)
    page(8)
    doc.text(tl('skillTechnical'), M, y)
    y += 7

    normal(10)
    for (const s of technicalSkills) {
      page(5)
      const level = translate(lang, s.labelKey)
      const nameStr = s.name
      const levelStr = level
      const nameW = doc.getTextWidth(nameStr + ' ')
      const levelW = doc.getTextWidth(' ' + levelStr)
      const dotW = doc.getTextWidth('.')
      const avail = MW - nameW - levelW
      const dots = '.'.repeat(Math.max(1, Math.floor(avail / dotW)))
      doc.text(`${nameStr} ${dots} ${levelStr}`, M, y)
      y += 5
    }

    y += 3

    bold(14)
    page(8)
    doc.text(tl('skillLanguage'), M, y)
    y += 7

    normal(10)
    for (const l of languages) {
      page(5)
      const level = translate(lang, l.labelKey)
      const nameW = doc.getTextWidth(l.name + ' ')
      const levelW = doc.getTextWidth(' ' + level)
      const dotW = doc.getTextWidth('.')
      const avail = MW - nameW - levelW
      const dots = '.'.repeat(Math.max(1, Math.floor(avail / dotW)))
      doc.text(`${l.name} ${dots} ${level}`, M, y)
      y += 5
    }

    doc.save(`cv-luiz-nascimento-${lang}.pdf`)
  }

  return { exportPDF }
}
