<template>
  <div class="" id="perkenalan">
    <div id="head-welcome" class="welcome" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
      <div>
        <!-- <div class="obj-1"></div>
          <div class="obj-2"></div>
          <div class="obj-3"></div>
          <div class="logo-head-bg" :style="lightMode ? 'mix-blend-mode: darken;' : 'mix-blend-mode: lighter;'"></div> -->
          <!-- <img src="../../assets/favicon2.ico" alt="" class=""> -->
          <logo-icon class="logo" :class="lightMode ? 'primary-text' : 'dark-primary-text'" />
          <!-- <div class="text-semi-bold text-3 welcome-left-2">SPKPDPS</div> -->
          <div class="text-semi-bold text-3" :class="lightMode ? 'primary-text' : 'dark-primary-text'">SPKPDPS.</div>
          <!-- <div class="text-gradient text-semi-bold text-3">SPKPDPS.</div> -->
        <p class="text-book text-15 line-h-2 mt-5" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">SPKPDPS adalah (Sistem Pendukung Keputusan Pemilihan Dosen Pembimbing Skripsi) dengan menggunakan metode SAW (Simple Additive Weighting) di prodi Informatika UMS.</p>
        <div class="button-my glow primary-glow button-my-headline curzr-hover mt-6 text-semi-bold" :class="lightMode ? 'primary' : 'dark-primary'" @click="openModal()">Cari dosbing skripsi-ku</div>
        <!-- <div class="button-my glow primary-gradient-2 button-my-headline curzr-hover mt-6 text-semi-bold" @click="openModal()">Cari dosbing skripsi-ku</div> -->
        <!-- <div class="button-my glow primary-gradient-2 button-my-headline curzr-hover mt-6 text-semi-bold" @click="openModal()">Cari dosbing skripsi-ku</div> -->
      </div>
      <div>
        <p class="text-book text-15 line-h-2" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Kamu berencana mengambil mata kuliah Tugas Akhir (TA) atau Skripsi tapi bingung nentuin siapa dosen pembimbing skripsi yang sesuai buatmu?</p>
      </div>
      <div>
        <p class="text-book text-15 line-h-2" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">SPKPDPS siap membantu agar kamu memiliki pertimbangan sebelum memilih dosen pembimbing skripsi. Kamu akan diberikan beberapa rekomendasi dosen pembimbing skripsi yang sesuai dengan minatmu.</p>
      </div>
      <div>
        <p class="text-book text-15 line-h-2" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Kamu bebas memilih <span class="text-semi-bold text-15 line-h-2" :class="lightMode ? 'light-mode-color' : 'dark-mode-color'">hingga 8 kriteria</span> untuk mencari rekomendasi dosen pembimbing skripsi dari <span class="text-semi-bold text-15 line-h-2" :class="lightMode ? 'light-mode-color' : 'dark-mode-color'">total 21 alternatif.</span></p>
        <div class="mt-5">
          <div>
            <span :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Ayo cari tahu siapa dosen pembimbing yang sesuai denganmu dengan cara klik tombol di bawah ini </span>
            <span>👇</span>
          </div>
          <div class="button-my glow primary-glow button-my-headline curzr-hover mt-6 text-semi-bold" :class="lightMode ? 'primary' : 'dark-primary'" @click="openModal()">Cari dosbing skripsi-ku</div>
          <!-- <div class="button-my glow primary-gradient-2 button-my-headline curzr-hover mt-6 text-semi-bold" @click="openModal()">Cari dosbing skripsi-ku</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LogoIcon from '../icons/LogoIcon.vue';

defineProps({
  lightMode: Boolean
})

const modal = ref(false)
const openModal = () => {
  modal.value = true
  emit('isOpenModal', modal.value)
}
const emit = defineEmits({
  unvalidatedEvent: null, // if we want an event without validation
  isOpenModal: () => {
    return true
  },
})

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';
@import '../../sass/animation.scss';

.logo{
  height: 3rem;
}
.obj{
  &-1, &-2, &-3{
    position: absolute;
    // background: #e7dfff;
    background: rgba($primary,.2);
    min-height: 1.5rem;
    border-radius: 1rem;
  }
  &-1{
    min-width: 5rem;
  }
  &-2{
    min-width: 10rem;
    right: 10rem;
    top: 15rem;
  }
  &-3{
    min-width: 1.5rem;
    left: 14rem;
  }
}
.logo-head{
  max-height: 6rem;
  top: 4rem;
  left: 22.15rem;
  &, &-bg{
    position: absolute;
  }
  &-bg{
    background: rgba($primary,.2);
    border-radius: 2rem;
    min-width: 9rem;
    min-height: 9rem;
    top: 5rem;
    left: 20rem;
  }
}
.welcome{
  min-height: 80vh;
  display: flex;
  padding: 0;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 20rem;

  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  &-left{
    padding: 6rem;

    display: flex; 
    height: 100%;
    flex-direction: column;
    justify-content: end;
  }
  &-right {
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.float {
  &-crown, &-box1, &-box2, &-box3 {
    position: absolute;
  }
  &-crown {
    max-width: 150px;
    top: 9%;
    left: 45%;
    animation: float 19s ease infinite reverse;
    z-index: 2;
  }
  &-box1 {
    max-width: 50px;
    top: 7%;
    left: 33%;
    animation: float 24s ease infinite reverse;
  }
  &-box2 {
    max-width: 70px;
    top: 15%;
    left: 65%;
    animation: float 21s ease infinite;
  }
  &-box3 {
    max-width: 60px;
    top: 13%;
    left: 38%;
    animation: float 19s ease infinite;
  }
}
.action {
  margin: 1.5rem 0;
}
.text-gradient {
  background: rgb(255,255,255);
  background: linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(211,64,144,1) 25%, rgba(125,51,255,1) 50%, rgba(58,79,255,1) 75%, rgba(255,255,255,1) 100%);
  width: fit-content;
  margin: 0 auto;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.primary-gradient-2{
  color: #FFFFFF;
  // background-color: #DF5BEB;
  // background-image: linear-gradient(45deg, $primary 0%, rgba(223,91,235,0.008) 100%);
  // background-position: 0% 0%;
  // background-repeat: repeat;
  // background-size: cover;
  background: rgb(211,64,144);
  background: linear-gradient(-45deg, rgba(211,64,144,1) 0%, rgba(125,51,255,1) 50%, rgba(58,79,255,1) 100%);
  box-shadow: 0 5px 10px 0px rgba($primary,.5);
  &:hover{
    box-shadow: 0 10px 15px -5px rgba($primary,1);
  }
}
.button-my-headline{
  padding: 1rem 2rem;
}
</style>