<template>
  <div :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
    <div v-if="isToast" class="toast">
      <toast-pesan 
        v-if="thisNewMsg.done"
        :img="thisNewMsg.messages[thisNewMsg.messages.length-1].profile.url"
        :bg="thisNewMsg.messages[thisNewMsg.messages.length-1].profile.background"
        :group="'Grub ' + thisNewMsg.groupName.namaDepan + ' ' + thisNewMsg.groupName.namaBelakang" 
        :sender="thisNewMsg.messages[thisNewMsg.messages.length-1].userName" 
        :msg="thisNewMsg.messages[thisNewMsg.messages.length-1].text" 
        @click="getNewMsg()"
      />
    </div>
    <!-- <div style="position: absolute;top: 50%;left: 50%;z-index: 12;background: white;padding: 1rem;transform: translate(-50%, -50%);">
      <div>isNewMsg : {{ isNewMsg }}</div>
      <div>thisNewMsg.idGroupChat : {{ thisNewMsg.idGroupChat }}</div>
      <div>thisNewMsg.messages : {{ thisNewMsg.messages }}</div>
      <div>thisNewMsg.messagesUnreadUser : {{ thisNewMsg.messagesUnreadUser }}</div>
    </div> -->
    <div id="layout-left-mobile" :class="isMenu ? 'menu-left-mobile-open' : 'menu-left-mobile-close'">
      <MenuLeft :lightMode="lightMode" :isMenu="isMenu" @mode="handleMode" @toggleMenu="handleToggleMenu"/>
    </div>
    <div id="layout" class="columns m-0" style="height: 100vh;">
      <div id="layout-left" class="column menu-left p-0 pr-3" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
        <MenuLeft :lightMode="lightMode" @mode="handleMode" />
      </div>
      <div id="layout-mid" class="column p-0 m-0" style="max-height: 100vh; overflow: auto;">
        <div class="m-0 p-0">
          <router-view v-slot="{ Component }">
            <Transition name="page-slide" mode="out-in">
              <component :is="Component" :lightMode="lightMode" @toggleMenu="handleToggleMenu" />
            </Transition>
          </router-view>
        </div>
      </div>
      <div id="layout-right" class="column p-0" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'" style="position: sticky; z-index: 6;">
        <div class="side-bar px-4">
          <RouterView name="rvRight" v-slot="{Component}">
            <Transition name="page-slide" mode="out-in">
              <component :is="Component" :lightMode="lightMode"/>
            </Transition>
          </RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { defineAsyncComponent, ref, computed, watch, onMounted } from 'vue';
import { useMyFunc } from '../services/OtherFunctions';
import { useAuth } from '../firebase/firebase';
import { useDatabase } from '../services/DataService';
import swal from 'sweetalert';

const { delay } = useMyFunc()
const {thisUser} = useAuth()
const { getDocChatting, isNewMsg, thisNewMsg, updateUsers } = useDatabase()
const ToastPesan = defineAsyncComponent(() => import('../components/toasts/ToastPesan.vue'))
const MenuLeft = defineAsyncComponent(() => import('../layouts/MenuLeft.vue'))

const isMenu = ref(null)
const handleToggleMenu = async(a) => {
  await delay(300)
  isMenu.value = a
  console.log('isMenu.value =>',isMenu.value);
}
const lightMode = ref(true)
const handleMode = (a) => {
  lightMode.value = a
}
const isToast = ref(null)

const dosbing = computed(() => {
  var isDosbing = null
  if (thisUser.value !== null){
    if (thisUser.value.user.userLevel === 'Mahasiswa'){
      isDosbing = thisUser.value.progres.isDosbing
    }
  }
  return isDosbing
})
watch(
  () => dosbing.value === true, 
  ( newDosbing ) => {
    console.log('newDosbing =>', newDosbing);
    if(newDosbing === true) {
      swal({
        title: "Selamat!",
        text: "Kamu berhasil menyelesaikan progres Mendapat Dosen Pembimbing Skripsi."
      })
    }
  }
)
const hitungSaw = computed(() => {
  var isHitungSaw = null
  if (thisUser.value !== null){
    if (thisUser.value.user.userLevel === 'Mahasiswa'){
      isHitungSaw = thisUser.value.progres.notifHitungSaw
    }
  }
  return isHitungSaw
})
watch(
  () => hitungSaw.value === true, 
  ( newHitungSaw ) => {
    console.log('newHitungSaw =>', newHitungSaw);
    if(newHitungSaw === true) {
      swal({
        title: "Selamat!",
        text: "Kamu berhasil menyelesaikan progres Menghitung SAW.",
        closeOnClickOutside: false,
      })
      .then(() => {
        updateUsers(thisUser.value.user.userId, {'progres.notifHitungSaw' : false})
      })
    }
  }
)

// const isNewMsg = ref(null)
// const thisNewMsg = ref({
//   groupName: null,
//   messagesUnreadUser: null,
//   messages: null,
//   done: false
// })
const filterGroupChat = async (dataUser) => {
  let isFav = dataUser.isFav
  thisNewMsg.value.idGroupChat = isFav
  if (isFav.length !== 0){
    for (let i=0; i<isFav.length; i++){
      getDocChatting(isFav[i]).collection('participants').doc(thisUser.value.user.userId)
      .onSnapshot((doc) => {
        let _data = doc.data()
        thisNewMsg.value.messagesUnreadUser[i] = (_data.messagesUnreadUser)
        // if (_data.messagesUnreadUser > 0){
        // }
        isNewMsg.value = _data.isNewMsg
        if (_data.isNewMsg === true){
          isToast.value = true
          setTimeout(() => isToast.value = false, 5000)
        }
      })
    }
    for (let j=0; j<isFav.length; j++){
      getDocChatting(isFav[j]).collection('messages')
      .orderBy('createdAt').onSnapshot((docs) => {
        let __messages = []
        docs.forEach((doc) => {
          __messages.push(doc.data())
        })
        if (thisNewMsg.value.messagesUnreadUser[j] > 0){
          thisNewMsg.value.messages = __messages.slice(-1)
          // thisNewMsg.value.messages = __messages.slice(-thisNewMsg.value.messagesUnreadUser)
        }
        // else {
        //   thisNewMsg.value.messages = 'Tidak ada pesan baru.'
        // }
      })
      getDocChatting(isFav[j])
      .onSnapshot((doc) => {
        let _groupName = doc.data()
        thisNewMsg.value.groupName = _groupName.alternatif.namaDosen
      })
      getDocChatting(isFav[j]).collection('participants').doc(thisUser.value.user.userId)
      .update({'isNewMsg' : false})
    }
  }
  thisNewMsg.value.done = true
}

const pushNotifMsg = computed(() => {
  var isPushNotifMsg = null
  if (thisUser.value !== null){
    if (thisUser.value.isFav.length !== 0){
      if (isNewMsg.value === true){
        isPushNotifMsg = isNewMsg.value
      }
    }
  }
  return isPushNotifMsg
})
watch(
  () => pushNotifMsg.value, 
  () => {
    if (thisUser.value !== null){
      if(isNewMsg.value === true) {
        let isFav = thisUser.value.isFav
        for (var i=0; i<isFav.length; i++){
          getDocChatting(isFav[i]).collection('participants').doc(thisUser.value.user.userId)
          .update({'isNewMsg' : false})
        }
        // thisNewMsg.value.messagesLatest = thisNewMsg.value.messages.slice(-1)
        console.log('reset');
      }
    }
  }
)


onMounted(() => {
  filterGroupChat(thisUser.value)
  
})
</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';
@import '../sass/mobile.scss';
@import '../sass/animation.scss';

.menu-left{
  position: sticky;
  z-index: 6;
  padding-right: .75rem;
  &-mobile{
    &-open, &-close{
      left: 0; 
      position: fixed; 
      z-index: 5; 
      width: 100%; 
      transition: all .5s ease;
    }
    &-open{
      visibility: visible !important;
      top: 0 !important; 
    }
    &-close {
      visibility: hidden; 
      top: -100%; 
    }
  }
}
.menu__box {
  display: block;
  position: fixed;
  top: 0;

  width: 300px;
  height: 100%;

  margin: 0;
  padding: 80px 0;

  list-style: none;

  background-color: #ECEFF1;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);

  transition-duration: .25s;
}
.pop-up{
  position: fixed;
  z-index: 5;
  background: rgba(219, 219, 219, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
