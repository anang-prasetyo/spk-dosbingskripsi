<template>
  <div v-if="!isChatting">
    <div class="contact" :class="lightMode ? 'light-mode-layout contact-light' : 'dark-mode-layout contact-dark'">
      <div class="left">
        <div class="main sm" :class="user.background">
          <verify-icon v-if="isVerify" class="icon-verify" :style="lightMode ? 'background: white;' : 'background: black;'" />
          <heart-circle-icon v-if="isFav" class="dot-select primary pulse" :style="lightMode ? 'border: 2px solid white;' : 'border: 2px solid black;'" />
          <div v-if="isGCBaru" class="dot-select warning" :style="lightMode ? 'border: 2px solid white;' : 'border: 2px solid black;'"></div>
          <img :src="user.url" :alt="user.url">
        </div>
      </div>
      <div v-if="thisUser" class="pesan">
        <div class="pesan-top" :style="thisUser.user.userLevel === 'Admin' ? 'margin: auto 0' : ''">
          <div v-if="gender === 'Perempuan'" class="pesan-user">Bu {{sender}}</div>
          <div v-else-if="gender === 'Laki-laki'" class="pesan-user">Pak {{sender}}</div>
        </div>
        <div v-if="thisUser.user.userLevel === 'Mahasiswa'" class="pesan-bot">
          <div class="button-my" :class="lightMode ? 'light-transparent' : 'dark-transparent'">Gabung</div>
        </div>
        <div class="batas" :class="lightMode ? 'batas-light' : 'batas-dark'"></div>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-if="thisUser" class="contact" :class="lightMode ? 'light-mode-layout contact-light' : 'dark-mode-layout contact-dark'">
      <div class="left">
        <div class="main sm" :class="user.background">
          <verify-icon v-if="isVerify" class="icon-verify" :style="lightMode ? 'background: white;' : 'background: black;'" />
          <heart-circle-icon v-if="isFav" class="dot-select primary pulse" :style="lightMode ? 'border: 2px solid white;' : 'border: 2px solid black;'" />
          <div v-if="isGCBaru" class="dot-select warning" :style="lightMode ? 'border: 2px solid white;' : 'border: 2px solid black;'"></div>
          <img :src="user.url" :alt="user.url">
        </div>
      </div>
      <div v-if="thisUser" class="pesan">
        <div class="pesan-top">
          <div v-if="gender === 'Perempuan'" class="pesan-user">Bu {{sender}}</div>
          <div v-else-if="gender === 'Laki-laki'" class="pesan-user">Pak {{sender}}</div>
          <div v-if="(new Date().getFullYear()) === createdAt.getFullYear() && (new Date().getMonth()) === createdAt.getMonth() && (new Date().getDate()) === createdAt.getDate()" class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">{{ (String(createdAt.getHours()).padStart(2, '0') + ':' + String(createdAt.getMinutes()).padStart(2, '0')) }}</div>
          <div v-else-if="(new Date().getFullYear()) === createdAt.getFullYear() && (new Date().getMonth()) === createdAt.getMonth() && (new Date().getDate()) - createdAt.getDate() === 1" class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">Kemarin</div>
          <div v-else-if="(new Date().getFullYear()) === createdAt.getFullYear() && (new Date().getMonth()) === createdAt.getMonth() && (new Date().getDate()) - createdAt.getDate() < 7">
            <div v-if="createdAt.getDay() === 1" class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">Senin</div>
            <div v-else-if="createdAt.getDay() === 2" class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">Selasa</div>
            <div v-else-if="createdAt.getDay() === 3" class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">Rabu</div>
            <div v-else-if="createdAt.getDay() === 4" class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">Kamis</div>
            <div v-else-if="createdAt.getDay() === 5" class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">Jum'at</div>
            <div v-else-if="createdAt.getDay() === 6" class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">Sabtu</div>
            <div v-else-if="createdAt.getDay() === 7" class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">Minggu</div>
          </div>
          <div v-else class="pesan-jam" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">{{createdAt.getDate()+'/'+createdAt.getMonth()+'/'+createdAt.getFullYear()}}</div>
        </div>
        <div v-if="thisUser.joinChatAt.toDate().getFullYear() <= createdAt.getFullYear() && thisUser.joinChatAt.toDate().getMonth() <= createdAt.getMonth() && thisUser.joinChatAt.toDate().getDate() <= createdAt.getDate() && thisUser.user.userLevel !== 'Dosen'" class="pesan-bot">
          <div v-if="((thisUser.joinChatAt.toDate().getHours()*3600) + (thisUser.joinChatAt.toDate().getMinutes() * 60) + thisUser.joinChatAt.toDate().getSeconds()) < ((createdAt.getHours()*3600) + (createdAt.getMinutes() * 60) + createdAt.getSeconds()) || thisUser.joinChatAt.toDate().getFullYear() <= new Date().getFullYear() && thisUser.joinChatAt.toDate().getMonth() <= new Date().getMonth() && thisUser.joinChatAt.toDate().getDate() <= new Date().getDate()" class="pesan-status" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">{{latest}}</div>
          <div v-else class="pesan-status" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Baru bergabung</div>
          <div v-if="unreadMsg !== 0 && unreadMsg !== -1" class="dot danger">{{ unreadMsg }}</div>
        </div>
        <div v-else-if="thisUser.user.userLevel === 'Dosen'" class="pesan-bot">
          <div class="pesan-status" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">{{latest}}</div>
          <div v-if="unreadMsg !== 0 && unreadMsg !== -1" class="dot danger">{{ unreadMsg }}</div>
        </div>
        <div class="batas" :class="lightMode ? 'batas-light' : 'batas-dark'"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useAuth } from '../../firebase/firebase';

const HeartCircleIcon = defineAsyncComponent(() => import('../../components/icons/HeartCircleIcon.vue'))
const VerifyIcon = defineAsyncComponent(() => import('../../components/icons/VerifyIcon.vue'))
const { thisUser } = useAuth()

defineProps({
  sender: String,
  latest: String,
  gender: String,
  jam: String,
  date: String,
  createdAt: Date,
  user: Object,
  unreadMsg: Number,
  isFav: Boolean,
  isGCBaru: Boolean,
  isVerify: Boolean,
  lightMode: Boolean,
  isChatting: Boolean
})

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.icon-verify{
  min-width: 17px;
  min-height: 17px;
  color: deepskyblue;
  display: flex;
  position: absolute;
  border-radius: 1rem;
  bottom: 0;
  left: 0;
  max-width: 17px;
  max-height: 17px;
}
.contact {
  display: flex;
  gap: 1rem;
  padding: .5rem 1rem;
  min-height: 79.39px;
  &-light {
    &:hover {
      background: rgba(var(--light-bg), .7);
      cursor: pointer;
    }
  }
  &-dark {
    &:hover {
      background: rgba(var(--dark-bg), .7);
      cursor: pointer;
    }
  }
  .left {
    display: flex;
    align-self: center;
    position: relative;
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
      min-width: 3rem;
      min-height: 3rem;
      max-width: 3rem;
      max-height: 3rem;
    }
  }
}
.batas{ 
  margin-bottom: -.5rem;
  padding-top: .8rem;
  &-light{
    border-bottom: 1px solid var(--light-border);
  }
  &-dark{
    border-bottom: 1px solid var(--dark-border);
  }
}
.pesan {
  margin: auto 0;
  width: 100%;
  min-height: 63.39px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &-top, &-bot {
    display: flex;
    flex-direction: row;
    gap: .5rem;
    align-items: baseline;
    justify-content: inherit;
  }
  &-jam {
    font-size: .75rem;
  }
  &-user, &-status {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
  &-user {
    text-transform: capitalize;
    -webkit-line-clamp: 1;
    font-size: 1rem;
  }
  &-status {
    font-size: .75rem;
    -webkit-line-clamp: 2;
  }
}
.dot-select {
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  justify-content: center;
  padding: 1px;
}
.pulse{
  animation: pulse 2s ease-in-out 1s infinite normal none;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
  
}
</style>