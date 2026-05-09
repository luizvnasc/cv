<template>
  <div class="aboutme">
    <img :src="img" alt="profile" class="aboutme-img" />
    <pre class="out-text">{{ t('aboutme') }}</pre>
  </div>
</template>

<script setup>
import img from '~/assets/images/me_pixel_large.png'
const { t } = useI18n()
</script>
