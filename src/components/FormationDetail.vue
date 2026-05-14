<template>
  <div class="xp-detail">
    <div class="xp-header">
      <span class="xp-company">{{ f.institution }}</span>
      <span class="xp-period">{{ f.period }}</span>
    </div>
    <div class="xp-role">{{ f.degree }}</div>
    <div class="xp-desc">{{ f.description }}</div>
    <div class="xp-techs">
      <span v-for="t in f.techs" :key="t" class="xp-tech">{{ t }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({ f: Object })
</script>
