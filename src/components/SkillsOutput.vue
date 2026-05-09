<template>
  <div class="skill-list">
    <div v-for="skill in skills" :key="skill.name" class="skill-row">
      <span class="skill-name">{{ skill.name }}</span>
      <div is-="progress" :style="barStyle(skill.value)" class="skill-bar">
        {{ skillLabel(skill.value) }}
      </div>
    </div>
  </div>
</template>

<script setup>
const {t} = useI18n()

defineProps({skills: Array})

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

function skillLabel(value) {
  if (value === 100) return t('skillAdvanced')
  if (value === 66) return t('skillIntermediate')
  return t('skillBasic')
}
</script>
