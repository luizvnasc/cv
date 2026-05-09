<template>
  <div class="xp-list">
    <div v-for="(xp, idx) in list" :key="idx" class="xp-item">
      <span class="xp-idx">[{{ idx + 1 }}]</span>
      <span class="xp-company">{{ xp.company }}</span>
      <span class="xp-role">— {{ xp.role[locale] || xp.role.en }}</span>
    </div>
    <div class="xp-hint">{{ t('xpHint') }}</div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
defineProps({ list: Array })
</script>
