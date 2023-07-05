<template>
  <div class="p-0 base">
    <div v-if="modal" class="pop-up" :style="lightMode ? 'background: rgba(244,247,248,.2);' : 'background: rgba(0,0,0,.1);'">
      <div class="welcome-popup" style="width: 75%;">
        <head-cari-2 @isCloseModal="isCloseModalHandle" :light-mode="lightMode"/>
      </div>
    </div>
    <main v-if="thisUser" class="welcome-main">
      <div id="pesan-content-my--head" class="content-my--head" :class="lightMode ? 'light-mode-glass' : 'dark-mode-glass'">
        <div class="content-my--head-value text-125 text-semi-bold">Rumah</div>
        <div id="icon-menu" style="display: flex;">
          <menu-icon @toggleMenu="handleToggleMenu" :light-mode="lightMode" @click="$emit('toggleMenu', isMenu)"/>
        </div>
      </div>
      <Transition name="slide-down">
        <div v-if="showToast && thisUser" class="toast">
          <toast-welcome :msg="'Halo '+thisUser.user.userName+', Selamat Datang! 👋'" :light-mode="lightMode" />
        </div>
      </Transition>

      <Transition name="slide">
        <head-welcome v-if="el1" style="margin-bottom: 0.5rem;" :lightMode="lightMode" @isOpenModal="isOpenModalHandle"/>
      </Transition>
      <Transition name="slide">
        <div v-if="el2" class="welcome-text1 text-25 text-semi-bold line-h-25 has-text-centered" style="margin-top: 6rem; margin-bottom: 3rem;">Semua fitur disesuaikan dengan kebutuhanmu.</div>
      </Transition>
      <div id="head-component" class="columns" style="margin-bottom: -0.5rem;">
        <div class="column is-6">
          <Transition name="slide">
            <head-component 
              v-if="el3" 
              :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'" 
              :light-mode="lightMode" 
              :title1="title[0]" 
              :to="'pantau'" 
            />
          </Transition>
        </div>
        <div class="column is-6">
          <Transition name="slide">
            <head-component 
              v-if="el4" 
              :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'" 
              :light-mode="lightMode" 
              :title1="title[1]" 
              :to="'kriteria'" 
            />
          </Transition>
        </div>
      </div>
      <div id="head-component" class="columns">
        <div class="column is-6">
          <div class="columns" style="display: flex;flex-direction: column;align-items: flex-start;">
            <div class="column is-12" style="width: 100%;">
              <Transition name="slide">
                <head-component 
                  v-if="el5" 
                  :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'" 
                  :light-mode="lightMode" 
                  :title1="title[2]" 
                  :to="'alternatif'"  
                />
              </Transition>
            </div>
            <div class="column is-12" style="width: 100%;">
              <Transition name="slide">
                <head-component 
                  v-if="el7" 
                  :class="lightMode ? 'dark' : 'light'" 
                  :light-mode="lightMode" 
                  :src="url.a+'pesan-icon.png'+url.b" 
                  :src2="url.a+'h-icon.png'+url.b" 
                  :src3="url.a+'i-icon.png'+url.b" 
                  :title2="title[3]" 
                  :to="'pesan'"
                />
              </Transition>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="columns" style="display: flex;flex-direction: column;align-items: flex-start;">
            <div class="column is-12" style="width: 100%;">
              <Transition name="slide">
                <head-component 
                  v-if="el6" 
                  :class="lightMode ? 'light-mode-primary' : 'dark-mode-primary'"
                  :light-mode="lightMode" 
                  :src="url.a+'weight-icon.png'+url.b" 
                  :src2="url.a+'plus-icon.png'+url.b" 
                  :src3="url.a+'plus-icon2.png'+url.b" 
                  :title2="title[4]" 
                  :to="'saw'"
                />
              </Transition>
            </div>
            <div class="column is-12" style="width: 100%;">
              <Transition name="slide">
                <head-component 
                  v-if="el8" 
                  :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'" 
                  :light-mode="lightMode" 
                  :title1="title[5]" 
                  :to="'profil'" 
                />
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <div id="head-component" class="columns" style="margin-bottom: -0.5rem;">
        <div class="column">
          <Transition name="slide">
            <head-component 
              v-if="el9" 
              :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'" 
              :light-mode="lightMode" 
              :title1="title[6]" 
              :to="'panduan'" 
            />
          </Transition>
        </div>
      </div>
    </main>
    <Transition name="slide">
      <footer-component v-if="el10" :lightMode="lightMode" class="foo-right-mobile-rumah"/>
    </Transition>
  </div>
</template>

<script setup>
import {ref, onMounted, defineAsyncComponent} from 'vue'
import {useAuth} from '../../firebase/firebase'
import ToastWelcome from '../../components/toasts/ToastWelcome.vue';
import { useMyFunc } from '../../services/OtherFunctions'

const { el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, delay } = useMyFunc()

const { thisUser } = useAuth()

const MenuIcon = defineAsyncComponent(() => import('../../components/icons/MenuIcon.vue'))
const HeadWelcome = defineAsyncComponent(() => import('../../components/heads/HeadWelcome.vue'))
const HeadCari2 = defineAsyncComponent(() => import('../../components/heads/HeadCari2.vue'))
const HeadComponent = defineAsyncComponent(() => import('../../components/heads/HeadComponent.vue'))
const FooterComponent = defineAsyncComponent(() => import('../../components/FooterComponent.vue'))

defineProps({
  lightMode: Boolean
})

const url = ref({
  a: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/',
  b: '?alt=media&token=6c3c35bd-2f18-4052-a19e-78a5c8226bb0'
})
const title = [
  'Pantau kuota bimbingan skripsi.',
  '8 Kriteria yang bisa dikustomisasi.',
  '21 Alternatif dosen pembimbing skripsi.',
  'Kirim pesan kepada dosen pembimbing skripsi dan teman-teman informatika.',
  'Menggunakan metode SAW atau dikenal sebagai penjumlahan terbobot.',
  'Sesuaikan penampilanmu sesuka hatimu.',
  'Mengalami masalah? Coba cek Panduan.'
]
const modal = ref(false)
const isOpenModalHandle= (a) => {
  modal.value = a
}
const isCloseModalHandle= (a) => {
  modal.value = a
}
const showToast = ref(false),
triggerToast = async() => {
  showToast.value = true
  setTimeout(() => showToast.value = false, 5000)
}

const isMenu = ref(null)
const handleToggleMenu = async(a) => {
  isMenu.value = a
}

onMounted(async() => {
  el10.value = true
  await delay(100)
  el9.value = true
  await delay(100)
  el8.value = true
  await delay(100)
  el7.value = true
  await delay(100)
  el6.value = true
  await delay(100)
  el5.value = true
  await delay(100)
  el4.value = true
  await delay(100)
  el3.value = true
  await delay(100)
  el2.value = true
  await delay(100)
  el1.value = true
  await delay(100)
  triggerToast()
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';
@import '../../sass/animation.scss';



.welcome-main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.pop-up{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.dialog-my{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  position: relative;
  border-radius: 1rem;
  padding: 1rem;
  gap: 1rem;
  .close{
    position: absolute;
    right: -5px;
    top: -5px;
    background: white;
    border-radius: 25%;
    width: 30px;
    height: 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    box-shadow: 0 5px 20px -10px rgba($dark,.3);
    transition: all .25s ease;
    &:hover{
      transform: translate(-5px,5px);
      box-shadow: 0 5px 20px -10px rgba($dark,0);
    }
  }
  .judul{
    text-align: center;
  }
}

</style>