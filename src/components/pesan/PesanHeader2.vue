<template>
  <div class="">
    <div id="pesan-isi-top" class="top" :style="lightMode ? 'background: rgba(244,247,248,.5);' : 'background: rgba(24,25,28,.5);'">
      <div id="pesan-isi-top-fixed" class="fixed-top">
        <div class="flex" style="align-items:center">
          <arrow-left-icon id="pesan-isi-header-arrow" @click="$emit('pesanIsi', 'close')"/>
          <div class="left">
            <div class="main sm" :class="selectedUser.background">
              <img :src="selectedUser.url" :alt="selectedUser.avatar">
            </div>
          </div>
          <div id="pesan-isi-header-text" class="text">
            <div v-if="gender === 'Perempuan'" class="text--sender">Bu {{namaDosen}}</div>
            <div v-else-if="gender === 'Laki-laki'" class="text--sender">Pak {{namaDosen}}</div>
            <div v-if="newParticipants" class="text--participants">
              <div class="items">
                <div v-for="part in participants" :key="part" class="item" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">{{part.userName}}</div>
              </div>
            </div>
          </div>
          <verify-icon v-if="isVerify" class="icon-verify" :style="lightMode ? 'background: white;' : 'background: black;'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue';
import ArrowLeftIcon from '../icons/ArrowLeftIcon.vue';

const VerifyIcon = defineAsyncComponent(() => import('../../components/icons/VerifyIcon.vue'))

const props = defineProps ({
  namaDosen: String,
  gender: String,
  participants: Array,
  selectedUser: Object,
  isVerify: Boolean,
  lightMode: Boolean
})
const newParticipants = computed(() => props.participants)

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.icon-verify{
  min-width: 17px;
  min-height: 17px;
  color: deepskyblue;
  display: flex;
  border-radius: 1rem;
  max-width: 17px;
  max-height: 17px;
}
.top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  // box-shadow: 2px 2px 10px rgba($dark, .04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.fixed-top {
  padding: 1rem 20% 1rem 41%;
  width: 100%;
}
.flex {
  display: flex;
  gap: 1rem;
  overflow: hidden;
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
      min-width: 3rem;
      min-height: 3rem;
      max-width: 3rem;
      max-height: 3rem;
    }
  }
}
.text {
  display: flex;
  margin: auto 0;
  flex-direction: column;
  &--sender, &--participants {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  &--sender {
    text-transform: capitalize;
  }
  &--participants {
    .items{
      display: flex;
      .item{
        font-size: .75rem;
        white-space: nowrap;
        &::after {
          content: ',\00a0';
        }
        &:last-child::after{
          content: '';
        }
      }
    }
  }
}
</style>
