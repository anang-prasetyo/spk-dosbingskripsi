<template>
  <div style="border-radius: 1rem;">
    <div v-if="title1" class="head-my-1">
      <RouterLink :to="'/'+to">
        <div class="text-medium text-2 curzr-hover">{{ title1 }}</div>
        <p class="mt-2" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">klik untuk info selengkapnya</p>
      </RouterLink>
    </div>
    <div v-else-if="title2" class="head-my-2">
      <img id="icon-headline" :src="src" alt="" class="head-my-2-icon">
      <img id="icon-headline" v-if="src2" :src="src2" alt="" class="head-my-2-icon-2">
      <img id="icon-headline" v-if="src3" :src="src3" alt="" class="head-my-2-icon-3">
      <RouterLink :to="'/'+to">
        <div class="text-medium text-2 curzr-hover">{{ title2 }}</div>
        <p class="mt-2" style="opacity: .5;">klik untuk info selengkapnya</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title1: String,
  title2: String,
  src: String,
  src2: String,
  src3: String,
  to: String,
  lightMode: Boolean
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';
@import '../../sass/animation.scss';

.head-my{
  &-1, &-2{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    & a{
      color: currentColor;
      & div{
        transition: all .5s ease;
        line-height: 2.5rem;
        &:hover{
          line-height: 3rem;
        }
      }
    }
  }
  &-1{
    min-height: 24rem;
    max-height: 24rem;
  }
  &-2{
    min-height: 40rem;
    max-height: 40rem;
    position: relative;
    &-icon {
      top: 20%;
      left: 36%;
      max-width: 100px;
      animation: float 19s ease infinite reverse;
      &-2, &-3 {
        max-width: 50px;
        max-height: 50px;
      }
      &-2 {
        top: 13%;
        left: 19%;
        animation: float 19s ease infinite;
      }
      &-3 {
        top: 10%;
        left: 64%;
        animation: float 24s ease infinite;
      }
    }
    &-icon, &-icon-2, &-icon-3 {
      position: absolute;
    }
  }
  &-text{
    &-1, &-2{
      background-repeat: no-repeat;
      background-size: 0% 100%;
      background-position-x: right;
      transition: background-size 300ms;
      &:hover {
        background-size: 100% 100%;
        background-position-x: left;
        // cursor: pointer;
      }
    }
    &-1 {
      // color: $black;
      background-image: linear-gradient(
        transparent 0%,
        transparent 97%,
        $primary 97%,
        $primary 100%
      );
    }
    &-2 {
      // color: $white;
      background-image: linear-gradient(
        transparent 0%,
        transparent 97%,
        $warning 97%,
        $warning 100%
      );
    }
  }
}
</style>