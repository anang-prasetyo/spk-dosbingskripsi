<template>
  <div v-if="sudahLoad" class="pt-1" id="pesan">
    <div class="card-my1">
      <div class="card-my1-head">
        <div class="card-my1-title">
          <div class="card-my1-title">
            <div class="card-my1--title-1">Pantau</div>
            <div class="card-my1--title-2">Awasi ketersediaan kuota bimbingan untuk masing-masing dosen pembimbing skripsi</div>
          </div>
        </div>
      </div>
      <div v-if="isRefAlternatif" class="card-my-main">
        <div class="columns alternatif">
          <div 
            class="column is-4 alt" 
            v-for="(alt) in 3" 
            :key="alt"
          >
            <div class="alt-main">
              <div>{{alternatif[alt].namaDosen.namaDepan + ' ' + alternatif[alt].namaDosen.namaBelakang}}</div>
              <div class="my-3">{{alternatif[alt].skripsi.kuota.terpakai + ' / ' + alternatif[alt].skripsi.kuota.total}}</div>
              <div 
                class="label-my mt-5" 
                :class="([(alternatif[alt].skripsi.kuota.total - alternatif[alt].skripsi.kuota.terpakai) > 3 ? 'success' : alternatif[alt].skripsi.kuota.total == alternatif[alt].skripsi.kuota.terpakai ? 'danger' :  'warning'])"
              >
                <div v-if="(alternatif[alt].skripsi.kuota.total - alternatif[alt].skripsi.kuota.terpakai) > 3" class="text-sm">Tersedia</div>
                <div v-else-if="alternatif[alt].skripsi.kuota.total == alternatif[alt].skripsi.kuota.terpakai" class="text-sm">Penuh</div>
                <div v-else-if="3 < (alternatif[alt].skripsi.kuota.total - alternatif[alt].skripsi.kuota.terpakai) < 1" class="text-sm">Hampir Penuh</div>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
      <div class="card-my-foot">
        <div>
          <RouterLink to="/pantau">
            <div class="button-my glow primary-glow">Tampilkan Lebih</div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {useDatabase} from '../../services/DataService';
import { useMyFunc } from '../../services/OtherFunctions'

const { alternatif, isRefAlternatif } = useDatabase()
const { delay } = useMyFunc()

const sudahLoad = ref(null)

onMounted( async() => {
  if (isRefAlternatif){
    await delay(500)
    sudahLoad.value = true
  }
})

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.card-my1 {
  display: flex;
  height: auto;
  width: 80%;
  // background: hsl(240deg, 24%, 96%);
  background: $white;
  color: $dark;
  border-radius: 1.5rem;
  flex-direction: column;
  box-shadow: 0 5px 20px rgb(36 33 69 / 15%);
  transition: all 0.25s ease;
  position: relative;
  margin: 2rem auto;
  &-head {
    // background: hsl(0deg, 0%, 100%);
    color: hsl(211deg, 28%, 25%);
    border-radius: 1.5rem;
    padding: 2rem;
    background-color:#ff99c0;
background-image:
radial-gradient(at 68% 29%, hsla(270,67%,77%,1) 0px, transparent 50%),
radial-gradient(at 22% 20%, hsla(331,73%,72%,1) 0px, transparent 50%),
radial-gradient(at 62% 52%, hsla(237,82%,70%,1) 0px, transparent 50%),
radial-gradient(at 51% 37%, hsla(215,75%,71%,1) 0px, transparent 50%),
radial-gradient(at 41% 86%, hsla(271,83%,73%,1) 0px, transparent 50%),
radial-gradient(at 20% 23%, hsla(65,66%,60%,1) 0px, transparent 50%),
radial-gradient(at 54% 11%, hsla(334,90%,64%,1) 0px, transparent 50%);
  }
  &--title {
    &-1, &-2{
      color: $white;
    }
    &-1 {
      font-size: 1.25rem;
      text-transform: uppercase;
    }
    &-2 {
      text-transform: capitalize;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 2rem;
      margin: 0.5rem 0;
    }
  }
}
.label-my {
  display: flex;
  width: 100%;
  border-radius: .75rem;
  padding: .5rem 1rem;
  font-weight: 500;
  cursor: default;
  justify-content: center;
}
.alternatif {
  flex-flow: wrap;
  justify-content: space-between;
  .alt {
    padding: 1rem;
    &-main {
      display: inline-flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: $white-ter;
      border-radius: 1rem;
      padding: 1rem;
      img {
        height: 3rem;
        width: 3rem;
        border-radius: .75rem;
      }
    }
  }
}
</style>