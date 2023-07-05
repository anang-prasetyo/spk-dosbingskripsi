<template>
    <div class="pl-5 pt-5">
      <div class="head-r">Pada halaman ini</div>
      <div
        class=""
        :class="{ 'active': index == currentIndex }"
        v-for="(jump, index) in jumpTo"
        :key="index"
        @click="setActive(index)"
      >
        <a :href="'#'+jump">{{ jump }}</a>
      </div>
      
    </div>
</template>

<script setup>
import {ref} from 'vue'

const jumpTo = ['KTM', 'skripsi-ku'],

currentIndex = ref(-1),

setActive = (index) => {
  currentIndex.value = index;
}

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
