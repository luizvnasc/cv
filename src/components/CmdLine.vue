<template>
  <div class="cmd-line">
    <span class="prompt">
      <span class="c-user">guest</span><span class="c-at">@</span><span class="c-host">cv</span><span class="c-colon">:</span><span class="c-path">~</span><span class="c-dollar">$</span>
    </span>
    <span class="cmd-text">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({ text: String })
</script>
