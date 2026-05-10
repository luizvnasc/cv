<template>
  <div class="skill-list">
    <div class="skill-section">
      <div class="skill-section-title">{{ t('skillTechnical') }}</div>
      <div v-for="skill in technicalSkills" :key="skill.name" class="skill-row">
        <span class="skill-name">{{ skill.name }}</span>
        <div class="skill-bar-wrapper">
          <div is-="progress" :style="barStyle(skill.value)" class="skill-bar"></div>
        </div>
        <span class="skill-level">{{ t(skill.labelKey) }}</span>
      </div>
    </div>

    <div class="skill-section">
      <div class="skill-section-title">{{ t('skillLanguage') }}</div>
      <div v-for="lang in languages" :key="lang.name" class="skill-row">
        <span class="skill-name">{{ lang.name }}</span>
        <div class="skill-bar-wrapper">
          <div is-="progress" :style="barStyle(lang.value)" class="skill-bar"></div>
        </div>
        <span class="skill-level">{{ t(lang.labelKey) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const {t} = useI18n()

defineProps({technicalSkills: Array, languages: Array})

function barStyle(value) {
  let color = '#e5c07b'
  if (value === 100) color = '#98c379'
  else if (value === 66) color = '#61afef'
  return {
    '--progress-value': value,
    '--progress-max': 100,
    '--progress-value-color': color,
    '--progress-value-background': color
  }
}
</script>
