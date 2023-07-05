<template>
  <div class="pl-5 pt-5">
    <div class="head-r">Pada halaman ini</div>
    <div>
      <a href="#pengertian" :class="currentIndex = 0 ? 'active' : ''" @click="currentIndex = 0">pengertian</a>
      <a href="#rumus" :class="currentIndex = 1 ? 'active' : ''" @click="currentIndex = 1">rumus</a>
      <a href="#perhitungan" :class="currentIndex = 1 ? 'active' : ''" @click="currentIndex = 1">perhitungan</a>
      <div v-if="isSaw === 'open'">
        <a href="#tabel-kriteria" :class="currentIndex = 2 ? 'active' : ''" @click="currentIndex = 2">tabel kriteria</a>
        <a href="#alternatif" :class="currentIndex = 2 ? 'active' : ''" @click="currentIndex = 2">alternatif</a>
        <a href="#benefit-cost" :class="currentIndex = 2 ? 'active' : ''" @click="currentIndex = 2">benefit-cost</a>
        <a href="#analisis-kriteria" :class="currentIndex = 2 ? 'active' : ''" @click="currentIndex = 2">analisis kriteria</a>
        <a href="#normalisasi" :class="currentIndex = 2 ? 'active' : ''" @click="currentIndex = 2">normalisasi</a>
        <a href="#perangkingan" :class="currentIndex = 2 ? 'active' : ''" @click="currentIndex = 2">perangkingan</a>
        <a href="#perangkingan-alternatif" :class="currentIndex = 2 ? 'active' : ''" @click="currentIndex = 2">perangkingan alternatif</a>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import {ref } from 'vue'
// import { useSaw } from '../../services/DataServicesSaw'

// const { apaSudahHitungSaw } = useSaw()

const currentIndex = ref(-1)
defineProps({
  isSaw: String
})

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
