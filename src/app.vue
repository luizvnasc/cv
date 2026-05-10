<template>
  <div class="terminal" @click="focusInput">
    <div class="term-bar">
      <span class="term-title">guest@cv: ~</span>
      <span class="term-dots">
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="dot red"></span>
      </span>
    </div>

    <div class="term-body" ref="bodyRef">
      <div v-for="(line, i) in output" :key="i" class="line">
        <CmdLine v-if="line.type === 'cmd'" :text="line.text" />
        <TextOutput v-else-if="line.type === 'text'" :text="line.text" />
        <SkillsOutput v-else-if="line.type === 'skills'" :technical-skills="line.technicalSkills" :languages="line.languages" />
        <XpList v-else-if="line.type === 'xp-list'" :list="line.list" />
        <XpDetail v-else-if="line.type === 'xp-detail'" :xp="line.xp" />
        <FormationList v-else-if="line.type === 'formacao-list'" :list="line.list" />
        <FormationDetail v-else-if="line.type === 'formacao-detail'" :f="line.f" />
        <AboutMe v-else-if="line.type === 'aboutme'" />
        <CompleteOutput v-else-if="line.type === 'complete'" />
      </div>
    </div>

    <div class="term-input-line">
      <span class="prompt"><span class="c-user">guest</span><span class="c-at">@</span><span class="c-host">cv</span><span class="c-colon">:</span><span class="c-path">~</span><span class="c-dollar">$</span></span>
      <input v-model="currentInput" @keydown.enter="processCommand" class="term-input" ref="inputRef" autofocus />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { experiences } from './data/experiences.js'
import { formations } from './data/formations.js'
import { technicalSkills, languages } from './data/skills.js'
import { cmds } from './data/cmds.js'

const { t, setLocale } = useI18n()

const currentInput = ref('')
const output = ref([])
const bodyRef = ref(null)
const inputRef = ref(null)

function focusInput() {
  nextTick(() => inputRef.value?.focus())
}

function scrollDown() {
  nextTick(() => {
    if (bodyRef.value) bodyRef.value.scrollTop = bodyRef.value.scrollHeight
  })
}

function addOutput(line) {
  output.value.push(line)
}

function processCommand() {
  const raw = currentInput.value.trim()
  if (!raw) return

  addOutput({ type: 'cmd', text: raw })
  currentInput.value = ''

  const parts = raw.split(/\s+/)
  const cmd = parts[0].toLowerCase()

  switch (cmd) {
    case '/aboutme':
      aboutMe()
      break
    case '/xp':
      if (parts[1] !== undefined) xpDetail(parseInt(parts[1]) - 1)
      else xpList()
      break
    case '/education':
      if (parts[1] !== undefined) formacaoDetail(parseInt(parts[1]) - 1)
      else formacaoList()
      break
    case '/skills':
      showSkills()
      break
    case '/complete':
      showComplete()
      break
    case '/help':
      showHelp()
      break
    case '/clear':
      output.value = []
      break
    case '/language':
      changeLanguage(parts[1])
      break
    default:
      addOutput({ type: 'text', text: t('cmdNotFound', { cmd }) })
  }

  scrollDown()
}

function aboutMe() {
  addOutput({ type: 'aboutme' })
}

function showComplete() {
  addOutput({ type: 'complete' })
}

function xpList() {
  addOutput({ type: 'xp-list', list: experiences })
}

function xpDetail(index) {
  if (index < 0 || index >= experiences.length) {
    addOutput({ type: 'text', text: t('xpDetailInvalid', { max: experiences.length }) })
    return
  }
  addOutput({ type: 'xp-detail', xp: experiences[index] })
}

function formacaoList() {
  addOutput({ type: 'formacao-list', list: formations })
}

function formacaoDetail(index) {
  if (index < 0 || index >= formations.length) {
    addOutput({ type: 'text', text: t('formacaoDetailInvalid', { max: formations.length }) })
    return
  }
  addOutput({ type: 'formacao-detail', f: formations[index] })
}

function showSkills() {
  addOutput({ type: 'skills', technicalSkills, languages })
}

function showHelp() {
  addOutput({ type: 'text', text: t('helpBody') })
}

function changeLanguage(lang) {
  if (lang === 'en' || lang === 'pt') {
    setLocale(lang)
    addOutput({ type: 'text', text: t('languageChanged') })
  } else {
    addOutput({ type: 'text', text: t('languageInvalid') })
  }
}

function tabComplete() {
  const raw = currentInput.value.trim()
  if (!raw) return
  for (const c of cmds) {
    if (c.startsWith(raw)) {
      currentInput.value = c + ' '
      break
    }
  }
}

onMounted(() => {
  addOutput({ type: 'text', text: t('welcome') })
  addOutput({ type: 'text', text: t('welcomeHint') })
  addOutput({ type: 'text', text: t('separator') })
  scrollDown()
  focusInput()

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      tabComplete()
    }
  })
})
</script>
