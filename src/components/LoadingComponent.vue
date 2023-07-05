<template>
  <div class="loading" :class="lightMode ? 'light-mode-glass' : 'dark-mode-glass'">
  <!-- <div class="loading" :style="lightMode ? 'background: rgba(244,247,248,.2);' : 'background: rgba(0,0,0,.1);'"> -->
    <div class="loading-items">
      <VueSpinner size="24" color="	#5b3bc4" />
      <p>Loading...</p>
      <div>{{ msg }}</div>
    </div>
  </div>
</template>

<script setup>
import { VueSpinner } from 'vue3-spinners';
defineProps({
  msg: String,
  lightMode: Boolean
})
</script>

<style lang="scss" scoped>

.loading {
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-items {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
  }
}
</style>