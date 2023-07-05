<template>
  <div class="">
    <div id="pesan-isi-top" class="top" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
      <div id="pesan-isi-top-fixed" class="fixed-top">
        <div class="flex" style="align-items: center;">
          <arrow-left-icon id="pesan-isi-header-arrow" @click="$emit('pesanIsi', 'close')"/>
          <div class="avatar-nn-skeleton" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'"></div>
          <div id="pesan-isi-top-text-skeleton" class="text-skeleton" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowLeftIcon from '../icons/ArrowLeftIcon.vue';
defineProps({
  lightMode: Boolean
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  box-shadow: 2px 2px 10px rgba($dark, .04);
}
.fixed-top {
  padding: 1rem 20% 1rem 41%;
  width: 100%;
}
.flex {
  display: flex;
  gap: 1rem;
}
.text-skeleton {
  height: 2rem;
  width: 15rem;
  border-radius: .5rem;
  margin: auto 0;
}
</style>
