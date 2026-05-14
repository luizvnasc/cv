<template>
  <div class="xp-detail">
    <div class="xp-header">
      <span class="xp-company">{{ xp.company }}</span>
      <span class="xp-period">{{ xp.period }}</span>
    </div>
    <div class="xp-role">{{ xp.role }}</div>
    <div class="xp-desc">{{ xp.description }}</div>
    <div class="xp-techs">
      <span v-for="t in xp.techs" :key="t" class="xp-tech">{{ t }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({ xp: Object })
</script>
