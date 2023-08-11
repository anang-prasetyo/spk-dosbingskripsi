<template>
  <div>
    <div v-if="modalMobile" class="pop-up" :style="lightMode ? 'background: rgba(219, 219, 219, 0.5);' : 'background: rgba(0, 0, 0, 0.5);'">
      <div class="welcome-popup" style="width: 75%;">
        <pesan-reservasi @isCloseModal="isCloseModalHandle" @sendApplication="sendApplicationHandle" :light-mode="lightMode"/>
      </div>
    </div>
    <div v-if="thisUser">
      <div>
        <div v-if="gender">
          <pesan-header-2
            :namaDosen="namaDosen"
            :gender="gender"
            :participants="participants"
            :selectedUser="selectedUser"
            :isVerify="isVerify"
            :light-mode="lightMode"
            @pesanIsi="$emit('pesanIsi', 'close')"
          />
        </div>
        <div v-else>
          <pesan-header-skeleton :light-mode="lightMode" @pesanIsi="$emit('pesanIsi', 'close')"/>
        </div>
      </div>
      <div v-if="newDataMessages">
        <div class="isi-pesan m-0" :style="isChatbox ? 'padding-bottom: 9rem !important' : ''" v-if="diklik">
          <div v-if="newDataMessages.length !== 0">
            <pesan-component
              v-for="msg in newDataMessages"
              :key="msg.id"
              :name="msg.userName"
              :nim="msg.userNim"
              :nick="getFirstLetters(msg.userName)"
              :profile="msg.profile"
              :sender="(msg.userId === thisUser?.user.userId)"
              :time="msg.time"
              :date="msg.date"
              :created-at="msg.createdAt.toDate()"
              :is-first-today="msg.isFirstToday"
              :light-mode="lightMode"
            >
              <div style="letter-spacing: .25px;">{{msg.text}}</div>
            </pesan-component>
            <div v-if="thisUser.user.userLevel !== 'Mahasiswa' ? isChatbox = null : ''"></div>
            <div v-if="thisUser.user.userLevel === 'Mahasiswa'">
              <div id="chatBoxMobile" class="chat-mobile">
                <div v-if="isChatbox" class="chat-mobile-box" :class="lightMode ? 'dark-text' : 'white-text'" :style="lightMode ? 'background: rgba(244,247,248,.5);' : 'background: rgba(24,25,28,.5);'">
                  <div class="chat-mobile-box-msg" @click="modalMobile = true">Reservasi bimbingan skripsi</div>
                  <div class="mx-4 dot warning" style="max-width: 1rem;" data-tooltip="Sembunyikan" data-tooltip-location="left" @click="isChatbox = false"><minus-icon /></div>
                </div>
                <div v-if="!isChatbox" class="chat-mobile-box-2">
                  <div class="close-mobile-2" data-tooltip="Tampilkan" @click="openChatbox()"><arrow-down-icon style="transform: rotate(180deg);"/></div>
                </div>
              </div>
              <div id="chatBox">
                <Transition name="slide-fade-up">
                  <div v-if="isChatbox" class="chat-box" :class="lightMode ? 'dark-text' : 'white-text'" :style="lightMode ? 'background: rgba(244,247,248,.5);' : 'background: rgba(24,25,28,.5);'">
                    <div class="chat-box-msg" @click="$emit('isOpenModal', true)">Reservasi bimbingan skripsi</div>
                    <div class="mx-4 dot warning" style="max-width: 1rem;" data-tooltip="Sembunyikan" data-tooltip-location="left" @click="isChatbox = false"><minus-icon /></div>
                  </div>
                </Transition>
                <Transition name="slide-fade-up">
                  <div v-if="!isChatbox" class="chat-box-2">
                    <div class="close-2" data-tooltip="Tampilkan" @click="openChatbox()"><arrow-down-icon style="transform: rotate(180deg);"/></div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="isi-pesan-blank">
              <div class="float-center">
                <div style="display: flex;flex-direction: column;align-items: center;gap: .5rem;">
                  <div class="text-125 text-semi-bold">Belum ada obrolan di sini.</div>
                  <div>Mulai percakapan.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="isi-pesan m-0">
          <div class="isi-pesan-blank">
            <div v-if="thisUser.progres.isChatting" class="float-center">
              Klik grup untuk menampilkan isi pesan
            </div>
            <div v-else-if="thisUser.user.userLevel !== 'Admin'" class="float-center">
              Pilih grup dan klik "Gabung" untuk memulai percakapan
            </div>
            <div v-else class="float-center">
              Pilih grup untuk melihat detail
            </div>
          </div>
        </div>
      </div>
      
      <div ref="bottom" class="">
        <div id="pesan-isi-bottom" class="bottom" :style="diklik && lightMode ? 'background: rgba(244,247,248,.5);' : diklik && !lightMode ? 'background: rgba(24,25,28,.5);' : lightMode ? 'background: var(--light-layout)' : 'background: var(--dark-layout)'">
          <div id="pesan-isi-bottom-fixed" class="fixed-bottom">
            <div v-if="diklik">
              <div v-if="dataMessages" class="flex">
              <!-- <form v-if="dataMessages" class="flex" @submit.prevent="addData"> -->
                <div v-if="thisUser" class="left">
                  <div class="main sm" :class="thisUser.profile.background">
                    <img :src="thisUser.profile.url" :alt="thisUser.profile.url">
                  </div>
                </div>
                <!-- <input v-model="newMessage.text" class="vs-input" placeholder="Tulis sebuah pesan ..." /> -->
                <div class="textarea-my-nh border-bottom-primary" :class="lightMode ? 'textarea-my-nh-light' : 'textarea-my-nh-dark'">
                  <textarea
                    class="textarea-my-nh--input"
                    :class="lightMode ? 'textarea-my-nh-light--input' : 'textarea-my-nh-dark--input'"
                    v-model="newMessage.text"
                    placeholder="Tulis sebuah pesan ..."
                  ></textarea>
                </div>
                <button v-if="newMessage.text !== ''" @click="addData()" data-tooltip="Kirim pesan" data-tooltip-location="left">
                <!-- <button v-if="newMessage.text !== ''" @click="requestPermission(thisUser.user.userName,namaDosen, newMessage.text),addData()" data-tooltip="Kirim pesan" data-tooltip-location="left"> -->
                  <send-icon-3 class="float dark-text" :class="lightMode ? 'dark-text' : 'white-text'" style="cursor: pointer"/>
                </button>
                <div v-else class="disable button-my" style="padding: 0px 6px !important;">
                  <send-icon-3 class="float dark-text" :class="lightMode ? 'dark-text' : 'white-text'" style="cursor: pointer"/>
                </div>
              </div>
            </div>
            <div class="flex flex-skeleton" v-else>
              <div class="skeleton-icon" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'"></div>
              <div class="skeleton-type" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'"></div>
              <div class="skeleton-icon" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, watch, nextTick } from 'vue'
import firebase from 'firebase/compat/app'
import {getFirstLetters,useAuth} from '../../firebase/firebase'
import { computed } from 'vue';
import { useDatabase } from '../../services/DataService';
import SendIcon3 from '../icons/SendIcon3.vue';
import MinusIcon from '../icons/MinusIcon.vue';
import ArrowDownIcon from '../icons/ArrowDownIcon.vue';
import { useMyFunc } from '../../services/OtherFunctions';

const PesanReservasi = defineAsyncComponent(() => import('../../components/pesan/PesanReservasi.vue'))
const PesanHeader2 = defineAsyncComponent(() => import('./PesanHeader2.vue'))
const PesanHeaderSkeleton = defineAsyncComponent(() => import('./PesanHeaderSkeleton.vue'))
const PesanComponent = defineAsyncComponent(() => import('./PesanComponent.vue'))

const { thisUser } = useAuth()
const { updateChatting, getDocChatting, updateUsers } = useDatabase()
const { delay } = useMyFunc()

const modalMobile = ref(null)
const isChatbox = ref(true)
const openChatbox = async() => {
  isChatbox.value = true
  await delay(200)
  .then(() => {
    bottom.value?.scrollIntoView({ behavior: 'smooth' })
  })
}

const props = defineProps({
  idGC: String,
  namaDosen: String,
  gender: String,
  dataMessages: Array,
  selectedUser: Object,
  participants: Array,
  diklik: Boolean,
  isVerify: Boolean,
  lightMode: Boolean
})

const newMessage = ref({
  text: '',
})

const newDataMessages = computed(() => props.dataMessages)
const idGC = computed(() => props.idGC)
const bottom = ref(null)

watch(
  newDataMessages,
  () => {
    nextTick(() => {
      bottom.value?.scrollIntoView({ behavior: 'smooth' })
    })
  },
  { deep: true }
)

const addData = async() => {
  var today = (new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()
  console.log(today);
  const isMsgToday = async() => {
    await getDocChatting(idGC.value).get().then(async(doc) => {
      if (doc.exists) {
        var docs = doc.data()
        var _msgToday = docs.messagesLatest.date
        console.log(_msgToday);
        if (_msgToday !== today){
          updateChatting(idGC.value, {'messagesToday' : true})
          dataMessages.isFirstToday = true
        }
        else {
          updateChatting(idGC.value, {'messagesToday' : false})
          dataMessages.isFirstToday = false
        }
      }
    })
  }
  var dataMessages = {
    userId: thisUser.value.user.userId,
    userName: thisUser.value.user.userName,
    userNim: thisUser.value.user.userNIM,
    profile: {
      avatar: thisUser.value.profile.avatar,
      url: thisUser.value.profile.url,
      background: thisUser.value.profile.background,
      color: thisUser.value.profile.color
    },
    text: newMessage.value.text,
    date: ((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()),
    time: (String(new Date().getHours()).padStart(2, '0') + ':' + String(new Date().getMinutes()).padStart(2, '0')),
    createdAt: new Date(),
    isFirstToday: null
  }
  var dataMessagesLatest = {
    messagesLatest: {
      userId: thisUser.value.user.userId,
      userName: thisUser.value.user.userName,
      text: newMessage.value.text,
      date: ((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()),
      time: (String(new Date().getHours()).padStart(2, '0') + ':' + String(new Date().getMinutes()).padStart(2, '0')),
      createdAt: new Date()
    }
  }
  var dataParticipants = {
    userId: thisUser.value.user.userId,
    userName: thisUser.value.user.userName,
    messagesUnreadUser: 0,
    isFav: true,
    isNewMsg: false
  }
  const setMessagesUnread = async() => {
    getDocChatting(idGC.value).get().then(async(doc) => {
      if (doc.exists) {
        await getDocChatting(idGC.value).collection('participants').doc(thisUser.value.user.userId).get().then((doc) => {
          if (doc.exists) {
            getDocChatting(idGC.value).collection('participants').doc(thisUser.value.user.userId).update({
              'userName': dataParticipants.userName,
              'messagesUnreadUser': 0
            })
            if (thisUser.value.user.userLevel !== 'Dosen'){
              updateChatting(idGC.value, {'messagesUnreadDosen': firebase.firestore.FieldValue.increment(1)})
            }
            else {
              updateChatting(idGC.value, {'messagesUnreadDosen': 0})
            }
          }
          else {
            getDocChatting(idGC.value).collection('participants').doc(thisUser.value.user.userId).set(dataParticipants)
            if (thisUser.value.user.userLevel === 'Dosen'){
              updateChatting(idGC.value, {
                'participants': firebase.firestore.FieldValue.increment(1),
                'messagesUnreadDosen': 0
              })
              console.log('dosen ini mah');
            }
            else {
              updateChatting(idGC.value, {
                'participants': firebase.firestore.FieldValue.increment(1),
                'messagesUnreadDosen': firebase.firestore.FieldValue.increment(1)
              })
              console.log('bukan dosen ini mah');
            }
          }
        })
      }
    })
  }
  const setMessages = async() => {
    var _dataChatting = null
    updateChatting(idGC.value, {'messagesTotal': firebase.firestore.FieldValue.increment(1)})
    delay (1000)
    getDocChatting(idGC.value).get().then(async(doc) => {
      if (doc.exists) {
        _dataChatting = doc.data()
        await getDocChatting(idGC.value).collection('messages').doc('docMsg1').get().then((doc) => {
          if (doc.exists) {
            getDocChatting(idGC.value).collection('messages').doc('docMsg'+_dataChatting.messagesTotal).set(dataMessages)
          }
          else {
            // updateChatting(idGC.value, {'messagesTotal': firebase.firestore.FieldValue.increment(1)})
            getDocChatting(idGC.value).collection('messages').doc('docMsg1').set(dataMessages)
          }
        })
      }
    })
    getDocChatting(idGC.value).collection('participants').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.update({
          'messagesUnreadUser': firebase.firestore.FieldValue.increment(1),
          'isNewMsg' : true
        })
      })
    })
    getDocChatting(idGC.value).collection('participants').doc(thisUser.value.user.userId).update({
      'isNewMsg' : false
    })
    newMessage.value.text = ''
  }
  const addFavUser = async() => {
    updateUsers(thisUser.value.user.userId, {'isFav': firebase.firestore.FieldValue.arrayUnion(idGC.value)})
  }
  await isMsgToday()
  .then(() => setMessages())
  .then(() => updateChatting(idGC.value,dataMessagesLatest))
  .then(() => setMessagesUnread())
  .then(() => addFavUser())
}

const isCloseModalHandle = (a) => {
  modalMobile.value = a
}
const sendApplicationHandle = (a,b) => {
  updateUsers(thisUser.value.user.userId, {
    'skripsi.judul': a,
    'skripsi.deskripsi': b,
    'isSkripsi': true,
  })
  getDocChatting(idGC.value).get().then(async(doc) => {
    var _chattingData = doc.data()
    var setNewApplication = {
      skripsiJudul: a,
      skripsiDeskripsi: b,
      userName: thisUser.value.user.userName,
      userNIM: thisUser.value.user.userNIM,
      userId: thisUser.value.user.userId,
      date: ((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()),
      time: (String(new Date().getHours()).padStart(2, '0') + ':' + String(new Date().getMinutes()).padStart(2, '0')),
      createdAt: new Date()
    }
    getDocChatting(idGC.value).collection('applications').doc(thisUser.value.user.userId).get().then((doc) => {
      if (doc.exists){
        getDocChatting(idGC.value).collection('applications').doc(thisUser.value.user.userId).set(setNewApplication)
        console.log('user pernah melakukan request, berhasil rewrite request');
      }
      else {
        if (_chattingData.applicationsAccept.length !== 0){
          var isAcc = _chattingData.applicationsAccept.includes(thisUser.value.user.userId)
          if (isAcc){
            console.log('kamu sudah diterima di bimbingan skripsi ini');
          }
          else {
            getDocChatting(idGC.value).collection('applications').doc(thisUser.value.user.userId).set(setNewApplication)
            updateChatting(idGC.value, {'applicationsTotal': Number(_chattingData.applicationsTotal+1)})
          }
        }
        else {
          getDocChatting(idGC.value).collection('applications').doc(thisUser.value.user.userId).set(setNewApplication)
          updateChatting(idGC.value, {'applicationsTotal': Number(_chattingData.applicationsTotal+1)})
        }
      }
    })
  })
}

// const requestPermission = (a,b,c) => {
//   if (!('Notification' in window)){
//     throw new Error('Browser does not support notification')
//   }
//   Notification.requestPermission().then((permission) => {
//     console.log(permission);
//     const notification = new Notification(a+' - Grub Chat '+b, {
//       body: c
//     })
//   })
// }

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';
@import '../../sass/animation.scss';

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
.chat{
  &-box {
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 1s ease;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    &:hover {
      border: 2px solid $warning;
    }
    &-msg {
      width: 100%;
      padding: 1rem;
    }
  }
  &-box, &-box-2 {
    display: flex;
    width: 40%;
    position: fixed;
    bottom: 5.5rem;
    border-radius: 1rem;
    align-items: center;
  }
}
.close {
  right: -5px;
  top: -5px;
  &:hover{
    transform: translate(-2px,2px);
    box-shadow: 0 5px 20px -10px rgba($dark,0);
  }
}
.close-2 {
  top: -2rem;
  right: 50%;
  &:hover{
    transform: translateY(2px);
    box-shadow: 0 5px 20px -10px rgba($dark,0);
  }
}
.close, .close-2{
  position: absolute;
  // background: white;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 25%;
  width: 30px;
  height: 30px;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 20px -10px rgba($dark,.3);
  transition: all .25s ease;
}
.chat-mobile{
  position: fixed;
  bottom: 5.5rem;
  left: 0;
  width: 99%;
  display: flex;
  justify-content: center;
  &-box {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 5px 20px rgb(0 0 0 / 8%);
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 1s ease;
    &:hover {
      border: 2px solid $warning;
    }
    &-msg {
      width: 100%;
      padding: 1rem;
    }
  }
  &-box, &-box-2 {
    display: flex;
    width: 95%;
    border-radius: 1rem;
    align-items: center;
  }
}
.close-mobile {
  right: 10px;
  top: -5px;
  &:hover{
    transform: translate(-2px,2px);
    box-shadow: 0 5px 20px -10px rgba($dark,0);
  }
}
.close-mobile-2 {
  top: -2rem;
  right: 50%;
  &:hover{
    transform: translateY(2px);
    box-shadow: 0 5px 20px -10px rgba($dark,0);
  }
}
.close-mobile, .close-mobile-2{
  position: absolute;
  // background: white;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 25%;
  width: 30px;
  height: 30px;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 20px -10px rgba($dark,.3);
  transition: all .25s ease;
}


.textarea-my-nh {
  display: flex;
  flex-direction: column;
  &-light {
    &, textarea {
      &::placeholder {
        color: $grey-light;
      }
    }
    &--input {
      background: var(--light-bg);
      &-active {
        border-bottom: 2px solid $primary;
      }
    }
  }
  &-dark {
    &, textarea {
      &::placeholder {
        color: $grey-light;
      }
    }
    &--input {
      background: var(--dark-bg2);
      color: var(--dark-color);
      &-active {
        border-bottom: 2px solid $primary;
      }
    }
  }
  &, textarea {
    border: 2px solid transparent;
    outline: none;
    resize: none;
    width: 100%;
    max-height: 10rem;
  }
  
  &--input {
    display: flex;
    width: 100%;
    padding: .5rem 1rem;
    border-radius: .75rem;
    border: 2px solid transparent;
    z-index: 1;
  }
}
.isi-pesan {
  padding: 5.5rem 1rem 5rem 1rem;
  margin: 0 -.725rem;
  min-height: 98vh;
  &-blank {
    margin: auto;
    display: flex;
    min-height: 60vh;
    .float-center {
      display: flex;
      margin: auto;
    }
  }
}
.bottom {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  // box-shadow: -2px -2px 10px rgba($dark, .04);
}
.fixed-bottom {
  padding: .5rem 19% .5rem 41%;
  width: 100%;
}
.flex {
  display: flex;
  gap: 1rem;
  &-skeleton {
    justify-content: space-around;
    align-items: center;
  }
  
  .left {
    display: flex;
    align-self: center;
    .main {
      overflow: hidden;
      border-radius: 50%;
      img {
        display: flex;
        margin: auto;
        margin-bottom: 0;
        height: 90%;
      }
    }
    .sm {
      display: flex;
      min-width: 2rem;
      min-height: 2rem;
      max-width: 2rem;
      max-height: 2rem;
    }
  }
}
.float {
  display: flex;
  margin: auto;

  &:hover {
    color: $primary;
  }
}
button {
  border: none;
  background: transparent;
}
.skeleton {
  &-icon {
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 50%;
  }
  &-type {
    height: 4.25rem;
    width: 60%;
    border-radius: .5rem;
  }
}
</style>