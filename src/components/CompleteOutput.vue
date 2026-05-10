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
      <SkillsOutput :technical-skills="technicalSkills" :languages="languages"/>
    </div>
  </div>
</template>

<script setup>
import {experiences} from '~/data/experiences.js'
import {technicalSkills, languages} from "~/data/skills.js";

const {t} = useI18n()

</script>
