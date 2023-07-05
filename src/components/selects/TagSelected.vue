<template>
  <div class="tag-my--input">
    <div>
      <div 
        class="tag-my" 
        v-for="(fruit, index) in fruits" 
        :key="index"
      >
        <div class="tag-my--value">{{fruit.name}}</div>
        <div 
          class="tag-my--icon" 
          @mouseenter="toMinus(fruit.name)"
          @mouseleave="toAdd()" 
        >
          <minus-icon v-if="iconMinus === fruit.name" class="tag-my--icon-minus" />
          <add-icon v-else class="tag-my--icon-add"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddIcon from '../icons/AddIcon.vue';
import MinusIcon from '../icons/MinusIcon.vue';

const iconMinus = ref(),
      toMinus = (id) => {
        iconMinus.value = id
      },
      toAdd = () => {
        iconMinus.value = ''
      },
      fruits = ref([
        { name:'mangga' }, 
        { name: 'pisang' }, 
        { name: 'apel' }, 
        { name: 'nanas' }, 
        { name: 'melon' }, 
        { name: 'jambu' }
      ])
</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';

</style>