<template>
  <div>
    <div>
      <div>
        <div v-if="gender">
          <pesan-header
            :nickGC="nickGC"
            :namaDosen="namaDosen"
            :gender="gender"
            :participants="participants"
          />
        </div>
        <div v-else>
          <pesan-header-skeleton />
        </div>
      </div>
      <div class="isi-pesan" v-if="dataMessages">
        <div v-if="dataMessages.messages">
          <pesan-component
            v-for="msg in newDataMessages.messages"
            :key="msg.id"
            :name="msg.userName"
            :nick="getFirstLetters(msg.userName)"
            :sender="(msg.userId === user?.uid)"
            :time="msg.time"
          >
            {{msg.text}}
          </pesan-component>
        </div>
        <div v-else>
          <div class="isi-pesan-blank">
            <div class="float-center">
              Oops... Belum ada percakapan disini
            </div>
          </div>
        </div>
      </div>
      <div v-else class="isi-pesan">
      <div class="isi-pesan-blank">
        <div class="float-center">
          Pilih kontak untuk memulai percakapan
        </div>
      </div>
    </div>
      
      <div ref="bottom" class="">
        <div class="bottom">
          <div class="fixed-bottom">
            <div v-if="dataMessages">
              <form class="flex" @submit.prevent="addData">
                <div class="avatar-nn avatar-nn-sm avatar-nn-male avatar-nn-round">
                  <div class="avatar-nn-text avatar-nn-text-md">{{getFirstLetters(user.displayName)}}</div>
                </div>
                <input v-model="newMessage.text" class="vs-input" placeholder="Tulis sebuah pesan ..." />
                <button type="submit">
                  <send-icon-2 class="float" />
                </button>
              </form>
            </div>
            <div class="flex flex-skeleton" v-else>
              <div class="skeleton-icon"></div>
              <div class="skeleton-type"></div>
              <div class="skeleton-icon"></div>
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
import DataServiceMessages from '../../services/DataServiceMessages';

const PesanHeader = defineAsyncComponent(() => import('./PesanHeader.vue'))
const PesanHeaderSkeleton = defineAsyncComponent(() => import('./PesanHeaderSkeleton.vue'))
const PesanComponent = defineAsyncComponent(() => import('./PesanComponent.vue'))
const SendIcon2 = defineAsyncComponent(() => import('../icons/SendIcon2.vue'))

const { user } = useAuth()

const props = defineProps({
  idGC: {type : String},
  namaDosen: {type : String},
  nickGC: {type : String},
  gender: {type : String},
  dataMessages: {type: Object},
  participants: {type: Object}
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

const addData = () => {
      var dataMessages = {
        userId: user.value.uid,
        userName: user.value.displayName,
        text: newMessage.value.text,
        date: ((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()),
        time: (String(new Date().getHours()).padStart(2, '0') + ':' + String(new Date().getMinutes()).padStart(2, '0')),
        createdAt: new Date()
      }
      var dataMessagesLatest = {
        messagesLatest: {
          userId: user.value.uid,
          userName: user.value.displayName,
          text: newMessage.value.text,
          date: ((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()),
          time: (String(new Date().getHours()).padStart(2, '0') + ':' + String(new Date().getMinutes()).padStart(2, '0')),
          createdAt: new Date()
        }
      }
      var dataParticipants = {
        userId: user.value.uid,
        userName: user.value.displayName
      }
      const setMessagesUnread = () => {
        DataServiceMessages.getAll(idGC.value).update({
          participants: firebase.firestore.FieldValue.arrayUnion(dataParticipants),
          messagesUnread: firebase.firestore.FieldValue.increment(1)
        })
      }
      const setMessages = () => {
        DataServiceMessages.getAll(idGC.value).update({
          messages: firebase.firestore.FieldValue.arrayUnion(dataMessages)
        })
        newMessage.value.text = ''
      }
      setMessages()
      DataServiceMessages.update(idGC.value,dataMessagesLatest)
      setMessagesUnread()
    }

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
.isi-pesan {
  padding: 5.5rem 1rem 4.5rem 1rem;
  margin: 0 -.725rem;
  &-blank {
    margin: auto;
    display: flex;
    min-height: 65vh;
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
  background: $white;
  box-shadow: -2px -2px 10px rgba($dark, .04);
}
.fixed-bottom {
  padding: 1rem 19% 1rem 41%;
  width: 100%;
}
.flex {
  display: flex;
  gap: 1rem;
  &-skeleton {
  justify-content: space-around;
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
    border-radius: .5rem;
    background: $light;
  }
  &-type {
    height: 2.25rem;
    width: 60%;
    border-radius: .5rem;
    background: $light;
  }
}
</style>