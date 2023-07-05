<template>
  <div class="avatar-nn">
    <div class="avatar-nn-text">{{nick}}</div>
  </div>
  <!-- <img class="avatar" :src="src" /> -->
</template>

<script>
export default {
  props: { 
    // src: { type: String, default: '' },
    nick: { type: String } 
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
/* img {
  height: 2rem;
  width: 2rem;
} */
</style>
