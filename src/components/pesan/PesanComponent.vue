<template>
  <div v-if="thisUser">
    <div v-if="thisUser.joinChatAt.toDate().getFullYear() <= createdAt.getFullYear() && thisUser.joinChatAt.toDate().getMonth() <= createdAt.getMonth() && thisUser.joinChatAt.toDate().getDate() <= createdAt.getDate() && thisUser.user.userLevel !== 'Dosen'">
      <div v-if="((thisUser.joinChatAt.toDate().getHours()*3600) + (thisUser.joinChatAt.toDate().getMinutes() * 60) + thisUser.joinChatAt.toDate().getSeconds()) < ((createdAt.getHours()*3600) + (createdAt.getMinutes() * 60) + createdAt.getSeconds()) || thisUser.joinChatAt.toDate().getFullYear() <= new Date().getFullYear() && thisUser.joinChatAt.toDate().getMonth() <= new Date().getMonth() && thisUser.joinChatAt.toDate().getDate() <= new Date().getDate()">
        <div v-if="isFirstToday === true && date === (new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()" class="today-2">
          <div class="today-2-strip" :class="lightMode ? 'today-2-strip-light-mode' : 'today-2-strip-dark-mode'"></div>
          <div class="today-2-msg" :class="lightMode ? 'today-2-msg-light-mode' : 'today-2-msg-dark-mode'">Hari ini</div>
        </div>
        <div v-else-if="isFirstToday === true && (new Date().getFullYear()) === createdAt.getFullYear() && (new Date().getMonth()) === createdAt.getMonth()" class="today mt-4 mb-2">
          <div v-if="(new Date().getDate()) - createdAt.getDate() === 1" class="today-msg" :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'">Kemarin</div>
          <div v-else-if="(new Date().getDate()) - createdAt.getDate() < 7" class="today-msg" :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'">
            <div v-if="createdAt.getDay() === 1" style="font-size: .85rem;">Senin</div>
            <div v-else-if="createdAt.getDay() === 2" style="font-size: .85rem;">Selasa</div>
            <div v-else-if="createdAt.getDay() === 3" style="font-size: .85rem;">Rabu</div>
            <div v-else-if="createdAt.getDay() === 4" style="font-size: .85rem;">Kamis</div>
            <div v-else-if="createdAt.getDay() === 5" style="font-size: .85rem;">Jum'at</div>
            <div v-else-if="createdAt.getDay() === 6" style="font-size: .85rem;">Sabtu</div>
            <div v-else-if="createdAt.getDay() === 7" style="font-size: .85rem;">Minggu</div>
          </div>
          <div 
            v-else-if="createdAt.getDay() === 1" class="today-msg"
            :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
          >Senin, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
          <div 
            v-else-if="createdAt.getDay() === 2" class="today-msg"
            :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
          >Selasa, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
          <div 
            v-else-if="createdAt.getDay() === 3" class="today-msg"
            :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
          >Rabu, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
          <div 
            v-else-if="createdAt.getDay() === 4" class="today-msg"
            :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
          >Kamis, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
          <div 
            v-else-if="createdAt.getDay() === 5" class="today-msg"
            :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
          >Jum'at, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
          <div 
            v-else-if="createdAt.getDay() === 6" class="today-msg"
            :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
          >Sabtu, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
          <div 
            v-else-if="createdAt.getDay() === 7" class="today-msg"
            :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
          >Minggu, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
        </div>
        <div v-else-if="isFirstToday === true && (new Date().getFullYear()) === createdAt.getFullYear()" class="today mt-4 mb-2">
          <div class="today-msg" :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'">{{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
        </div>
        <div v-else-if="isFirstToday === true" class="today mt-4 mb-2">
          <div class="today-msg" :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'">{{ createdAt.getDate()+'/'+createdAt.getMonth()+'/'+createdAt.getFullYear() }}</div>
        </div>
        <div class="pesan-isi">
          <div class="pesan-isi-bubble" :class="sender ? 'pesan-isi-bubble-me' : ''">
            <div class="bubble" :class="[sender ? 'bubble--me' : 'bubble--you', lightMode ? 'light-mode-layout' : 'dark-mode-shades2', sender && lightMode ? 'light-mode-primary' : sender && !lightMode ? 'dark-mode-primary' : '']">
              <div v-if="!sender" class="left">
                <div class="main sm" :class="profile.background">
                  <img :src="profile.url" :alt="profile.avatar">
                </div>
              </div>
              <div>
                <span v-if="!sender" class="text-semi-bold-2" :class="lightMode ? profile.color : 'dark-'+profile.color">{{ name }}</span>
                <slot />
              </div>
            </div>
            <div class="jam">{{time}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="thisUser.user.userLevel === 'Dosen'">
      <div v-if="isFirstToday === true && date === (new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()" class="today-2">
        <div class="today-2-strip" :class="lightMode ? 'today-2-strip-light-mode' : 'today-2-strip-dark-mode'"></div>
        <div class="today-2-msg" :class="lightMode ? 'today-2-msg-light-mode' : 'today-2-msg-dark-mode'">Hari ini</div>
      </div>
      <div v-else-if="isFirstToday === true && (new Date().getFullYear()) === createdAt.getFullYear() && (new Date().getMonth()) === createdAt.getMonth()" class="today mt-4 mb-2">
        <div v-if="(new Date().getDate()) - createdAt.getDate() === 1" class="today-msg" :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'">Kemarin</div>
        <div v-else-if="(new Date().getDate()) - createdAt.getDate() < 7" class="today-msg" :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'">
          <div v-if="createdAt.getDay() === 1" style="font-size: .85rem;">Senin</div>
          <div v-else-if="createdAt.getDay() === 2" style="font-size: .85rem;">Selasa</div>
          <div v-else-if="createdAt.getDay() === 3" style="font-size: .85rem;">Rabu</div>
          <div v-else-if="createdAt.getDay() === 4" style="font-size: .85rem;">Kamis</div>
          <div v-else-if="createdAt.getDay() === 5" style="font-size: .85rem;">Jum'at</div>
          <div v-else-if="createdAt.getDay() === 6" style="font-size: .85rem;">Sabtu</div>
          <div v-else-if="createdAt.getDay() === 7" style="font-size: .85rem;">Minggu</div>
        </div>
        <div 
          v-else-if="createdAt.getDay() === 1" class="today-msg"
          :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
        >Senin, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
        <div 
          v-else-if="createdAt.getDay() === 2" class="today-msg"
          :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
        >Selasa, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
        <div 
          v-else-if="createdAt.getDay() === 3" class="today-msg"
          :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
        >Rabu, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
        <div 
          v-else-if="createdAt.getDay() === 4" class="today-msg"
          :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
        >Kamis, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
        <div 
          v-else-if="createdAt.getDay() === 5" class="today-msg"
          :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
        >Jum'at, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
        <div 
          v-else-if="createdAt.getDay() === 6" class="today-msg"
          :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
        >Sabtu, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
        <div 
          v-else-if="createdAt.getDay() === 7" class="today-msg"
          :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'"
        >Minggu, {{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
      </div>
      <div v-else-if="isFirstToday === true && (new Date().getFullYear()) === createdAt.getFullYear()" class="today mt-4 mb-2">
        <div class="today-msg" :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'">{{ createdAt.getDate() + ' ' + new Intl.DateTimeFormat(['ban', 'id'], options).format(createdAt) + ' ' + createdAt.getFullYear() }}</div>
      </div>
      <div v-else-if="isFirstToday === true" class="today mt-4 mb-2">
        <div class="today-msg" :class="lightMode ? 'today-msg-light-mode' : 'today-msg-dark-mode'">{{ createdAt.getDate()+'/'+createdAt.getMonth()+'/'+createdAt.getFullYear() }}</div>
      </div>
      <div class="pesan-isi">
        <div class="pesan-isi-bubble" :class="sender ? 'pesan-isi-bubble-me' : ''">
          <div class="bubble" :class="[sender ? 'bubble--me' : 'bubble--you', lightMode ? 'light-mode-layout' : 'dark-mode-shades2', sender && lightMode ? 'light-mode-primary' : sender && !lightMode ? 'dark-mode-primary' : '']">
            <div v-if="!sender" class="left">
              <div class="main sm" :class="profile.background">
                <img :src="profile.url" :alt="profile.avatar">
              </div>
            </div>
            <div>
              <span v-if="!sender" class="text-semi-bold-2" :class="lightMode ? profile.color : 'dark-'+profile.color">{{ name }}</span>
              <slot />
            </div>
          </div>
          <div class="jam">{{time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "../../firebase/firebase"

const { thisUser } = useAuth()

defineProps ({
  name: { type: String, default: '' },
  nick: { type: String },
  time: { type: String },
  date: String,
  isFirstToday: Boolean,
  createdAt: Date,
  profile: { type: Object },
  sender: { type: Boolean, default: false },
  nim: {type: String},
  lightMode: Boolean
})

const options = { month: "long" }
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';

.today {
  &, &-2{
    display: flex;
    justify-content: center;
  }
  &-msg, &-2-msg{
    width: auto;
    padding: 2px 10px;
    border-radius: 5px;
    font-size: .85rem;
    // color: currentColor;
    letter-spacing: .5px;
    transition: all .5s ease;
    &-light-mode{
      background: var(--light-bg3);
      color: var(--dark-bg2);
    }
    &-dark-mode{
      background: var(--dark-bg2);
      color: var(--dark-color2);
    }
  }
  &-2{
    flex-direction: column;
    position: relative;
    min-height: 2rem;
    &-msg{
      display: inline-flex;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-strip{
      width: 100%;
      height: 1px;
      position: absolute;
      transition: all .5s ease;
      &-light-mode{
        background: var(--light-bg3);
      }
      &-dark-mode{
        background: var(--dark-border);
      }
    }
  }
}

.pesan-isi {
  margin: 0 0 0.25rem 0 !important;
  span {
    display: block;
    font-size: .85rem;
    letter-spacing: normal;
  }
  &-bubble {
    display: flex;
    gap: .5rem;
    margin-bottom: .5rem;
    &-me {
      flex-direction: row-reverse;
    }
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
.bubble {
  border-radius: 1rem;
  padding: .25rem;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
  max-width: 75%;
  display: flex;
  &--me {
    padding-right: .75rem;
    padding-left: .75rem;
    flex-direction: row-reverse;
    // background: $primary;
    // color: $white;
    // box-shadow: 0px 20px 10px -15px rgba($primary, 0.5);
    border-top-right-radius: 0;
  }
  &--you {
    padding-right: .75rem;
    padding-left: .5rem;
    // box-shadow: 0px 20px 10px -15px rgba($grey-darker, 0.1);
    border-top-left-radius: 0;
  }
}
.jam {
  font-size: .75rem;
  display: flex;
  justify-content: flex-end;
  margin: auto 0;
  letter-spacing: .5px;
}

</style>