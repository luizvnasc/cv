<template>
  <div class="xp-detail">
    <div class="xp-header">
      <span class="xp-company">{{ xp.company }}</span>
      <span class="xp-period">{{ xp.period[locale] || xp.period.en }}</span>
    </div>
    <div class="xp-role">{{ xp.role[locale] || xp.role.en }}</div>
    <div class="xp-desc">{{ xp.description[locale] || xp.description.en }}</div>
    <div class="xp-techs">
      <span v-for="t in xp.techs" :key="t" class="xp-tech">{{ t }}</span>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
defineProps({ xp: Object })
</script>
