<template>
  <div class="pl-5 pt-5">
    <div class="head-r">Pada halaman ini</div>
    <div>
      <a href="#perkenalan" :class="currentIndex = 0 ? 'active' : ''" @click="currentIndex = 0">perkenalan</a>
      <a href="#pantau" :class="currentIndex = 1 ? 'active' : ''" @click="currentIndex = 1">pantau</a>
      <a href="#kriteria" :class="currentIndex = 2 ? 'active' : ''" @click="currentIndex = 2">kriteria</a>
      <a href="#alternatif" :class="currentIndex = 3 ? 'active' : ''" @click="currentIndex = 3">alternatif</a>
      <a href="#saw" :class="currentIndex = 4 ? 'active' : ''" @click="currentIndex = 4">saw</a>
      <a href="#pesan" :class="currentIndex = 5 ? 'active' : ''" @click="currentIndex = 5">pesan</a>
      <a href="#profil" :class="currentIndex = 6 ? 'active' : ''" @click="currentIndex = 6">profil</a>
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
