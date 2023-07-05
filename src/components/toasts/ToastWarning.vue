<template>
  <div class="toast-my">
    <div class="toast-my--notif notif-color">
      <p>{{msg}}</p>
      <span class="toast-my--progress progres-color"></span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: String
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.notif-color {
  background-color: $warning;
  color: $white;
  box-shadow: 0px 20px 10px -15px rgba($warning, 0.5);
}
.progres-color {
  background-image: linear-gradient(to right, $white, $grey-lighter);
}
</style>