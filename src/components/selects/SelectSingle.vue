<template>
  <div :class="lightMode ? 'light-mode-select-my' : 'dark-mode-select-my'">
    <div 
      :class="[lightMode ? 'light-mode-select-my--input' : 'dark-mode-select-my--input', active ? 'select-my--input-active' : '']"
      >
      <div v-if="terupdate" :class="lightMode ? 'light-mode-select-my--value' : 'dark-mode-select-my--value'">{{terupdate}}</div>
      <div v-else-if="terpilih" :class="lightMode ? 'light-mode-select-my--value' : 'dark-mode-select-my--value'">{{terpilih}}</div>
      <div v-else-if="isSelectListSingle" :class="lightMode ? 'light-mode-placeholder' : 'dark-mode-placeholder'">Pilih data ...</div>
      <div v-else :class="lightMode ? 'light-mode-select-my--value' : 'dark-mode-select-my--value'">{{selectListSingle}}</div>
      <arrow-down-icon 
        :class="lightMode ? 'light-mode-select-my--icon' : 'dark-mode-select-my--icon'"
        :style="active ? {'transform' : 'rotate(180deg)'} : ''" 
        @click="setActive()"
      />
    </div>
    <div 
      v-if="active"
      :class="lightMode ? 'light-mode-select-my--hidden' : 'dark-mode-select-my--hidden'"
    >
      <div 
        v-if="terupdate"
        class="light-mode-select-my--list" 
        :indexList="indexList"
        @click="setActive()"
      >
        <div 
          class="light-mode-select-my--option"
          :listsSingle="{listsSingle}"
          v-for="(list, index) in listsSingle"
          :key="index"
          :class="list.name === terupdate ? warna+'-active' : '' + warna"
          @click="selectedListSingle(list.name,indexList,list.bobotSubKriteria,idKriteria,list.idSubKriteria)" 
        >
          {{list.name}}
        </div>
      </div>
      <div 
        v-else-if="terpilih"
        class="light-mode-select-my--list" 
        :indexList="indexList"
        @click="setActive()"
      >
        <div 
          class="light-mode-select-my--option"
          :listsSingle="{listsSingle}"
          v-for="(list, index) in listsSingle"
          :key="index"
          :class="list.name === terpilih ? warna+'-active' : '' + warna"
          @click="selectedListSingle(list.name,indexList,list.bobotSubKriteria,idKriteria,list.idSubKriteria)" 
        >
          {{list.name}}
        </div>
      </div>
      <div 
        v-else
        class="light-mode-select-my--list" 
        :indexList="indexList"
        @click="setActive()"
      >
        <div 
          class="light-mode-select-my--option"
          :listsSingle="{listsSingle}"
          v-for="(list, index) in listsSingle"
          :key="index"
          :class="selectListSingle === list.name ? warna+'-active' : '' + warna"
          @click="selectedListSingle(list.name,indexList,list.bobotSubKriteria,idKriteria,list.idSubKriteria)" 
        >
          {{list.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref,computed, onMounted } from 'vue';

const ArrowDownIcon = defineAsyncComponent(() => import('../icons/ArrowDownIcon.vue'))

const active = ref(false),
      // activeOption = ref('select-my--option-active'),
      setActive = () => {
        active.value == false ? active.value = true : active.value = false
      },
      selectListSingle = ref(),
      isSelectListSingle = ref(true),
      resetSelectListSingle = () => {
        if (newListsSingle.value.length == 0){
          selectListSingle.value = ''
        } else {
          console.log('masih ada Data')
        }
      },

      emit = defineEmits({
        unvalidatedEvent: null, // if we want an event without validation
        customChange: (s) => {
          if (s && typeof s === 'string') {
            return true
          } else {
            console.warn(`Invalid submit event payload!`)
            return false
          }
        },
      }),
      
      selectedListSingle = (name,indexList,bobotSubKriteria,idKriteria,idSubKriteria) => {
        // selectListSingle.value = id
        emit('customChange', selectListSingle.value = name, indexList, bobotSubKriteria, idKriteria, idSubKriteria)
        isSelectListSingle.value = false
      }

const props = defineProps({
  listsSingle: Array,
  indexList: Number,
  idKriteria: String,
  warna: String,
  terpilih: String,
  terupdate: String,
  lightMode: Boolean
})
const newListsSingle = computed(() => props.listsSingle)

onMounted(()=>{
  if (newListsSingle.value == ''){
    resetSelectListSingle()
  }
})

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

</style>