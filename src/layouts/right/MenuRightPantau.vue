<template>
  <div class="pl-5 pt-5">
    <div class="head-r">Pada halaman ini</div>
    <div>
      <a href="#info" :class="currentIndex = 0 ? 'active' : ''" @click="currentIndex = 0">info</a>
      <a href="#pantau-alternatif" :class="currentIndex = 1 ? 'active' : ''" @click="currentIndex = 1">pantau</a>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const currentIndex = ref(-1)

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.active a {
  color: $black;
  font-weight: bold;
}
.head-r {
  font-size: 1rem;
  text-transform: capitalize;
  margin-bottom: 1rem;
}
a {
  display: block;
  font-size: .9rem;
  text-transform: capitalize;
  color: $grey;
  transition: all .25s ease;
  
  &:hover {
    font-size: 1.25rem;
    color: $dark;
  }
}
</style>
