<template>
  <div class="select-my">
    <div 
      class="select-my--input"
      :class="active ? addActive : ''"
    >
      <div class="select-my--value">
        <div
          :selectListMulti="selectListMulti"
          v-for="(sList, index) in selectListMulti"
          :key="index"
          class="tag-my"
        >
          <div class="tag-my--value">{{sList}}</div>
          <div>
            <label :for="sList" class="tag-my--icon">
              <input 
                type="checkbox" 
                :id="sList" 
                :value="sList"
                v-model="selectListMulti" 
                class="tag-my--hide-check"
              />
              <add-icon class="tag-my--icon-add"/>
            </label>
          </div>
        </div>
      </div>
      <arrow-down-icon 
        class="select-my--icon"
        :style="active ? {'transform' : 'rotate(180deg)'} : ''" 
        @click="setActive()"
      />
    </div>
    <div 
      v-if="active"
      class="select-my--hidden"
    >
      <div class="select-my--list">
        <div
          class="select-my--option"
          :class="warna"
          :listsMulti="{listsMulti}"
          v-for="(list, index) in listsMulti"
          :key="index"
        >
          <div class="flex pretty p-svg p-curve p-smooth">
            <input 
              type="checkbox" 
              :id="list.name" 
              :value="list.name"
              v-model="selectListMulti" 
            />
            <div class="state p-primary">
              <check-icon class="svg svg-icon"/>
              <label 
                :for="list.name"
                class=""
              >
                {{list.name}}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

const ArrowDownIcon = defineAsyncComponent(() => import('../icons/ArrowDownIcon.vue'))
const AddIcon = defineAsyncComponent(() => import('../icons/AddIcon.vue'))
const CheckIcon = defineAsyncComponent(() => import('../icons/CheckIcon.vue'))


const active = ref(false),
      addActive = ref('select-my--input-active'),
      setActive = () => {
        active.value == false ? active.value = true : active.value = false
      },
      selectListMulti = ref([])
defineProps({
  selectListMulti: Array,
  listsMulti: Object,
  warna: String
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../pretty-checkbox/src/pretty-checkbox.scss';

</style>