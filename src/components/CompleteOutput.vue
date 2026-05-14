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
      <div class="section-box-title">{{ t('completeFormacao') }}</div>
      <FormationList :list="formations"/>
    </div>

    <div box-="square" shear-="top" class="section-box">
      <div class="section-box-title">{{ t('completeSkills') }}</div>
      <SkillsOutput :technical-skills="technicalSkills" :languages="languages"/>
    </div>
  </div>
</template>

<script setup>
const {t, localeData} = useI18n()

const experiences = localeData.value.experiences
const formations = localeData.value.formations
const technicalSkills = localeData.value.technicalSkills
const languages = localeData.value.languages
</script>
