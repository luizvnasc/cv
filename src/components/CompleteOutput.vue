<template>
  <div class="complete-output">
    <div box-="square" shear-="top" class="section-box">
      <div class="section-box-title">{{ t('completeAbout') }}</div>
      <AboutMe/>
    </div>

    <div box-="square" shear-="top" class="section-box">
      <div class="section-box-title">{{ t('completeXp') }}</div>
      <XpList :list="experiences"/>
    </div>

    <div box-="square" shear-="top" class="section-box">
      <div class="section-box-title">{{ t('completeSkills') }}</div>
      <SkillsOutput :skills="skills"/>
    </div>
  </div>
</template>

<script setup>
import {experiences} from '~/data/experiences.js'
import {skills} from "~/data/skills.js";

const {t, locale} = useI18n()

function barStyle(value) {
  let color = '#e5c07b'
  if (value === 100) color = '#98c379'
  else if (value === 66) color = '#61afef'
  return {'--progress-value': value, '--progress-max': 100, '--progress-value-background': color}
}

function skillLabel(value) {
  if (value === 100) return t('skillAdvanced')
  if (value === 66) return t('skillIntermediate')
  return t('skillBasic')
}
</script>
