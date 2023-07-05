<template>
  <div v-if="sudahLoad" class="pt-1" id="alternatif">
    <div class="card-my">
      <div class="card-my-head">
        <div class="card-my-title">
          <div class="card-my--title-1">Alternatif Dosen Pembimbing Skripsi</div>
          <div class="card-my--title-2">Cari tahu siapa saja calon dosen pembimbing skripsi di Prodi Informatika UMS</div>
        </div>
      </div>
      <div class="card-my-main">
        <div v-if="isRefAlternatif">
          <div class="mt-5 mb-3">
            <div v-for="(alt) in 3" :key="alt" class="list-card list-bg">
              <AvatarComponent2 :nick="getFirstLetters(alternatif[alt].namaDosen.namaDepan + alternatif[alt].namaDosen.namaBelakang)" />
              <div class="batas">
                <ListItem :top="alternatif[alt].namaDosen.gelarDepan + ' ' + alternatif[alt].namaDosen.namaDepan + ' ' + alternatif[alt].namaDosen.namaBelakang + ', ' + alternatif[alt].namaDosen.gelarBelakang" :bot="alternatif[alt].subKriteria[1][0].name" />
                <div class="tag-ability-container">
                  <div class="tag is-info">{{alternatif[alt].subKriteria[0][0].name}}</div>
                </div>
                <div class="tag-ability-container">{{ alternatif[alt].subKriteria[4][0].name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-my-foot">
        <div>
          <RouterLink to="/alternatif">
        <div class="button-my glow primary-glow">Tampilkan Lebih</div>
      </RouterLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { useDatabase } from '../../services/DataService';
import { getFirstLetters } from '../../firebase/firebase'
import { useMyFunc } from '../../services/OtherFunctions'

const { delay } = useMyFunc()
const { alternatif, isRefAlternatif } = useDatabase()
const AvatarComponent2 = defineAsyncComponent(() => import('../AvatarComponent2.vue'))
const ListItem = defineAsyncComponent(() => import('../ListItem.vue'))

const sudahLoad = ref(null)

onMounted( async() => {
  if (isRefAlternatif){
    await delay(1000)
    sudahLoad.value = true
  }
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.list-card {
  margin: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  background-color: transparent;
  display: flex;
  gap: 1rem;
}
.batas {
  border-bottom: 1px solid $grey-lighter;
  padding-bottom: 0.5rem;
  margin-bottom: -0.5rem;
  width: 100%;
  display: flex;
  gap: 1rem;
}
.icon-bhs {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}
.list-bg {
  padding: 0.5rem 2rem 0.5rem 2rem;
  margin: 0 -2rem;
}
.tag-ability-container {
  margin: auto;
  display: flex;
}
</style>