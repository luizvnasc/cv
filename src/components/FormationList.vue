<template>
  <div class="xp-list">
    <div v-for="(f, idx) in list" :key="idx" class="xp-item">
      <span class="xp-idx">[{{ idx + 1 }}]</span>
      <span class="xp-company">{{ f.institution }}</span>
      <span class="xp-role">— {{ f.degree }}</span>
    </div>
    <div class="xp-hint">{{ t('formacaoHint') }}</div>
  </div>
</template>

<script setup>
const { t } = useI18n()
defineProps({ list: Array })
</script>
