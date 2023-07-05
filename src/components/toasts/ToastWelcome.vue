<template>
  <div class="toast-my">
    <div class="toast-my--notif notif-color" :class="lightMode ? 'notif-color-light' : 'notif-color-dark'">
      <p>{{msg}}</p>
      <span class="toast-my--progress progres-color"></span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: String,
  lightMode: Boolean
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.notif-color {
  transition: all .5s ease;
  &-light{
    background-color: $dark;
    color: $white;
    box-shadow: 0px 20px 10px -15px rgba($dark, 0.5);
  }
  &-dark{
    background-color: $white;
    color: $dark;
    box-shadow: 0px 15px 25px -15px rgb(255 255 255 / 25%);
  }
}
.progres-color {
  background-image: linear-gradient(to right, $primary, $link);
}
</style>