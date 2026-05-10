<template>
  <div class="xp-detail">
    <div class="xp-header">
      <span class="xp-company">{{ f.institution }}</span>
      <span class="xp-period">{{ f.period[locale] || f.period.en }}</span>
    </div>
    <div class="xp-role">{{ f.degree[locale] || f.degree.en }}</div>
    <div class="xp-desc">{{ f.description[locale] || f.description.en }}</div>
    <div class="xp-techs">
      <span v-for="t in f.techs" :key="t" class="xp-tech">{{ t }}</span>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
defineProps({ f: Object })
</script>
