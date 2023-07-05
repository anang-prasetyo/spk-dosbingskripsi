<template>
  <div class="tengah">
    <div><strong class="typography-headline-title">Oooops..</strong></div>
    <div class="typography-callout mt-3">Keknya kamu salah alamat deh 😓</div>
    <RouterLink to="/">
      <div class="button-my glow link-glow mt-5">
        <home-icon class="mr-2" />
        <div>Rumah</div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const HomeIcon = defineAsyncComponent(() => import('../components/icons/HomeIcon.vue'))
</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';
@import '../sass/my-texts.scss';

.tengah{
  display: flex;
  flex-direction: column;
  min-height: 98vh;
  min-width: 100%;
  justify-content: center;
  align-items: center;
}
a.router-link {
  &:hover {
    color: white !important;
  }
}
</style>