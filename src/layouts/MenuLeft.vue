<template>
  <div class="side-bar" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
    <div>
      <div class="side-top">
        <div v-if="!isMenuOpen" class="side-top-logo">
          <!-- <img src="../assets/favicon2.ico" alt="" class="mx-1" style="max-width: 3rem;"/> -->
          <logo-icon class="mx-1" style="max-width: 3rem;" :class="lightMode ? 'primary-text' : 'dark-primary-text'" />
          <div class="text-15 text-semi-bold">SPKPDPS.</div>
        </div>
      </div>
      <div v-for="p, index in pages" :key="index">
        <router-link id="sideMenu" :to="'/'+p.to" class="side-menu" :class="lightMode && activePage === p.to ? 'active-page-light' : !lightMode && activePage === p.to ? 'active-page-dark' : ''" :style="lightMode && activePage === p.to ? iniActiveSideMenuLight : !lightMode && activePage === p.to ? iniActiveSideMenuDark : iniSideMenu" @click="$emit('toggleMenu', !isMenuOpen), activePage = p.to, toggleGantiSideMenu()">
          <component class="side-icon" :is="p.icon" />
          <div>{{ p.name }}</div>
        </router-link>
      </div>
    </div>
    <div style="margin: .5rem 1rem 1rem; display: flex; flex-direction: column; gap: 1rem;">
      <div class="button-my danger-transparent curzr-hover" @click="keluar()">Sign Out</div>
      <div style="display: flex; justify-content: space-between; gap: 1rem; height: 37.06px;">
        <div class="button-my curzr-hover" :class="!lightMode ? 'dark-transparent' : 'dark-mode-bg'" style="width:100%;" @click="lightMode = false, $emit('mode', lightMode)">Dark</div>
        <div class="button-my curzr-hover" :class="lightMode ? 'light-transparent' : 'light-mode-bg'" style="width:100%;" @click="lightMode = true, $emit('mode', lightMode)">Light</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useAuth} from '../firebase/firebase'
import { defineAsyncComponent, computed, ref, onMounted, watch } from 'vue'
import swal from 'sweetalert'

const HomeIcon = defineAsyncComponent(() => import('../components/icons/HomeIcon.vue'))
const AirDropIcon = defineAsyncComponent(() => import('../components/icons/AirDropIcon.vue'))
const ChartSuccessIcon = defineAsyncComponent(() => import('../components/icons/ChartSuccessIcon.vue'))
const StatusUpIcon = defineAsyncComponent(() => import('../components/icons/StatusUpIcon.vue'))
const RankingIcon = defineAsyncComponent(() => import('../components/icons/RankingIcon.vue'))
const MessagesIcon = defineAsyncComponent(() => import('../components/icons/MessagesIcon.vue'))
const ProfileIcon = defineAsyncComponent(() => import('../components/icons/ProfileIcon.vue'))
const MessageQuestionIcon = defineAsyncComponent(() => import('../components/icons/MessageQuestionIcon.vue'))
const LogoIcon = defineAsyncComponent(() => import('../components/icons/LogoIcon.vue'))
// const ArrowLeftIcon = defineAsyncComponent(() => import('../components/icons/ArrowLeftIcon.vue'))

const props = defineProps({
  isMenu: Boolean,
  activeMenu: String,
  lightMode: Boolean
})
const isMenuOpen = computed(() => props.isMenu)

const { signOut } = useAuth()

const keluar = () => {
  swal({
    title: "Konfirmasi Signout",
    text: "Yakin ingin keluar?",
    buttons: ["Batal", "Keluar"],
    dangerMode: true,
  })
  .then((willOut) => {
    if (willOut) {
      signOut()
    }
  })
}

const activePage = ref(null)
const pages = [
  {
    name: 'Home',
    to: '',
    icon: HomeIcon
  },
  {
    name: 'Pantau',
    to: 'pantau',
    icon: AirDropIcon
  },
  {
    name: 'Kriteria',
    to: 'kriteria',
    icon: ChartSuccessIcon
  },
  {
    name: 'Alternatif',
    to: 'alternatif',
    icon: StatusUpIcon
  },
  {
    name: 'SAW',
    to: 'saw',
    icon: RankingIcon
  },
  {
    name: 'Pesan',
    to: 'pesan',
    icon: MessagesIcon
  },
  {
    name: 'Profil',
    to: 'profil',
    icon: ProfileIcon
  },
  {
    name: 'Panduan',
    to: 'panduan',
    icon: MessageQuestionIcon
  },
]

const lightMode = ref(true)
// const isLightMode = computed(() => {
//   var _lightMode = null
//   if (lightMode.value === true){
//     _lightMode = true
//   }
//   else {
//     _lightMode = false
//   }
//   return _lightMode
// })
// watch(
//   () => isLightMode.value, 
//   () => {
//     if(isLightMode.value === true) {
//       sideMenuLight()
//     }
//     else{
//       sideMenuDark()
//     }
//   }
// )
// function sideMenuLight() {
//   let myEl = document.getElementsByClassName("router-link-active router-link-exact-active side-menu")
//   for (let a=0; a<myEl.length; a++){
//     myEl[a].style.setProperty("background-color", "var(--light-primary)", "important");
//   }
// }
// function sideMenuDark() {
//   let myEl = document.getElementsByClassName("router-link-active router-link-exact-active side-menu")
//   for (let a=0; a<myEl.length; a++){
//     myEl[a].style.setProperty("background-color", "var(--dark-primary)", "important");
//   }
// }

// onMounted(() => {
//   sideMenuLight()
// })

// Select all elements with class test 


// Apply CSS property to it

const isGantiSideMenu = ref(false)
const toggleGantiSideMenu = () => {
  isGantiSideMenu.value = true
  setTimeout(() => {
    isGantiSideMenu.value = false
  }, 250)
}
watch(
  () => {
    if (isGantiSideMenu.value){
      addActiveSideMenu()
    }
  }
)
const iniSideMenu = ref({
  background: 'inherit',
  color: 'inherit'
})
const iniActiveSideMenuLight = ref({
  background: 'var(--light-primary)',
  color: 'white',
  borderRadius: '0 1rem 1rem 0',
  pointerEvents: 'none'
})
const iniActiveSideMenuDark = ref({
  background: 'var(--dark-primary)',
  color: 'white',
  borderRadius: '0 1rem 1rem 0',
  pointerEvents: 'none'
})
const gantiSideMenu = () => {
  var cobaGanti = document.getElementsByClassName("router-link-active");
  for (var i = 0; i < cobaGanti.length; i++) {
    if (lightMode.value){
      cobaGanti[i].style.color = iniActiveSideMenuLight.value.color;
      cobaGanti[i].style.backgroundColor = iniActiveSideMenuLight.value.background;
      cobaGanti[i].style.borderRadius = iniActiveSideMenuLight.value.borderRadius;
      cobaGanti[i].style.pointerEvents = iniActiveSideMenuLight.value.pointerEvents;
    }
    else{
      cobaGanti[i].style.color = iniActiveSideMenuDark.value.color;
      cobaGanti[i].style.backgroundColor = iniActiveSideMenuDark.value.background;
      cobaGanti[i].style.borderRadius = iniActiveSideMenuDark.value.borderRadius;
      cobaGanti[i].style.pointerEvents = iniActiveSideMenuDark.value.pointerEvents;
    }
  }
}
const resetGantiSideMenu = () => {
  var resetGantiSideMenu = document.getElementsByClassName("side-menu");
  for (var i = 0; i < resetGantiSideMenu.length; i++) {
    resetGantiSideMenu[i].style.color = "inherit";
    resetGantiSideMenu[i].style.backgroundColor = "inherit";
    resetGantiSideMenu[i].style.pointerEvents = "all";
  }
}
const addActiveSideMenu = () => {
  resetGantiSideMenu()
  gantiSideMenu()
}
onMounted(() => {
  addActiveSideMenu()
})
</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';
@import '../sass/my-texts.scss';

.side{
  &-bar {
    height: 100vh;
    overflow: auto;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 6;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  &-top {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-logo{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &-menu {
    display: flex;
    gap: 0.5rem;
    color: currentColor;
    height: 2.5rem;
    align-items: center;
    &:hover {
      color: currentColor;
      background: rgba($primary,.1) !important;
      border-radius: 0 1rem 1rem 0;
      // transition: all .5s linear;
    }
  }
  &-toggle {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// a.router-link-exact-active {
//   background: $primary !important;
//   color: $white !important;
// }

// a.router-link{
  // &-active {
    // border-radius: 0 1rem 1rem 0;
    // background: var(--light-primary) !important;
    // color: white !important;
    // &:hover{
    //   background-color: inherit !important;
    // }
  // }
// }
// .active-page {
//   &-light, &-dark{
//     border-radius: 0 1rem 1rem 0;
//     color: $white !important;
//     transition: all .5 ease;
//   }
//   &-light{
//     $lightMode: true;
//     background: var(--light-primary) !important;
//   }
//   &-dark{
//     $lightMode: false;
//     background: var(--dark-primary) !important;
//   }
// }
</style>
