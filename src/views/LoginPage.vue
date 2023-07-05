<template>
  <div>
    <div v-if="isToast" class="toast">
      <toast-warning :msg="msgToast" />
    </div>
    
    <div v-if="thisUser">
      <div v-if="thisUser.login.isLogin == true">
        <div v-if="completingUser == 1" class="columns fixed-columns">
          <div class="column">
            <div class="kotak">
              <div class="kotak-1">
                <div><strong>Yuk lengkapi data kamu</strong></div>
                <div class="text-sm">1/2</div>
                <div class="input-my flex border-bottom-warning">
                  <div class="label-my">Nama Lengkap</div>
                  <input type="text" v-model="completeForm.user.userName" placeholder="Nama lengkap" class="input-my--input" />
                  <div class="label-my">NIM</div>
                  <input type="text" v-model="completeForm.user.userNIM" placeholder="NIM" class="input-my--input" />
                  <div class="label-my">Prodi</div>
                  <input type="text" v-model="completeForm.user.userProdi" placeholder="Prodi" class="input-my--input" />
                </div>
                <div v-if="completeForm.user.userNIM !== '' && completeForm.user.userName !== '' && completeForm.user.userProdi !== ''" class="button-my flex mt-5 glow warning-glow" @click="completingUser = 2">Lanjut</div>
                <div v-else class="button-my flex mt-5 warning disable">Lanjut</div>
              </div>
            </div>
          </div>
          <div class="column np">
            <div class="kotak kotak-2">
              <div class="lingkaran warning"></div>
              <div class="glass"></div>
            </div>
          </div>
        </div>
        <div v-else-if="completingUser == 2" class="columns fixed-columns">
          <div class="column">
            <div class="kotak">
              <div class="kotak-1">
                <div><strong>Hampir selesai</strong></div>
                <div class="text-sm">2/2</div>
                <div>
                  <div class="edit-my--profil">
                    <div class="left">
                      <div class="main xl" :class="completeForm.profile.background ? completeForm.profile.background : 'light-gradient'">
                        <img v-if="completeForm.profile.avatar" :src="'src/assets/avatar/'+completeForm.profile.avatar">
                      </div>
                    </div>
                    <div class="right">
                      <div class="text">Pilih avatar</div>
                      <div class="top-2">
                        <div class="top">
                          <div v-for="(avtr, index) in avatars" :key="index" class="item">
                            <div class="main sm light-gradient" :class="completeForm.profile.avatar == avtr.image ? 'selected' : ''">
                              <div v-if="completeForm.profile.avatar == avtr.image" class="dot-select"><check-icon /></div>
                              <img :src="'src/assets/avatar/'+avtr.image" :alt="avtr.image" @click="completeForm.profile.avatar = avtr.image">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text mt-2">Pilih background</div>
                      <div class="bot-2">
                        <div class="bot">
                          <div v-for="(bgs, index) in backgrounds" :key="index" class="item">
                            <div v-if="completeForm.profile.background == bgs.bgColor" class="dot-select"><check-icon /></div>
                            <div class="main sm" :class="completeForm.profile.background == bgs.bgColor ? (bgs.bgColor+' selected') : bgs.bgColor" @click="completeForm.profile.background = bgs.bgColor, completeForm.profile.color = bgs.color"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="button-my flex glow success-glow mt-5" @click="sendCompleteForm()">Selesai</div>
                <div class="button-my flex light-transparent" @click="completingUser = 1">Kembali</div>
              </div>
            </div>
          </div>
          <div class="column np">
            <div class="kotak kotak-2">
              <div class="lingkaran success"></div>
              <div class="glass"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
import { useAuth} from '../firebase/firebase'

const ToastWarning = defineAsyncComponent(() => import('../components/toasts/ToastWarning.vue'))
const CheckIcon = defineAsyncComponent(() => import('../components/icons/CheckIcon.vue'))

const { isToast, msgToast, thisUser, completeForm, sendCompleteForm } = useAuth()

const completingUser = ref(1)

const avatars = ref([
  {
    image: 'ToyFaces_Tansparent_BG_1.png',
    name: 'Avatar 1'
  },
  {
    image: 'ToyFaces_Tansparent_BG_2.png',
    name: 'Avatar 2'
  },
  {
    image: 'ToyFaces_Tansparent_BG_3.png',
    name: 'Avatar 3'
  },
  {
    image: 'ToyFaces_Tansparent_BG_4.png',
    name: 'Avatar 4'
  },
  {
    image: 'ToyFaces_Tansparent_BG_5.png',
    name: 'Avatar 5'
  },
  {
    image: 'ToyFaces_Tansparent_BG_6.png',
    name: 'Avatar 6'
  },
  {
    image: 'ToyFaces_Tansparent_BG_7.png',
    name: 'Avatar 7'
  }
])
const backgrounds = ref([
  {bgColor : 'primary-gradient-1', color: 'primary-text'},
  {bgColor : 'link-gradient-1', color: 'link-text'},
  {bgColor : 'info-gradient-1', color: 'info-text'},
  {bgColor : 'warning-gradient-1', color: 'warning-text'},
  {bgColor : 'danger-gradient-1', color: 'danger-text'},
  {bgColor : 'success-gradient-1', color: 'success-text'},
  {bgColor : 'dark-gradient', color: 'dark-text'}
])

</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';

.np { padding: 0 !important; }
.fixed-columns {
  display: flex;
  margin-left: -.25rem;
  min-height: 102vh;
}
.kotak{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  &-1 {
    background: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    width: 100%;
    max-width: 60%;
    margin: auto;
    .atau {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      &-text {
        z-index: 2;
        padding: 0 10px;
      }
      .strip {
        border-top: 1px solid $grey-lighter;
        position: absolute;
        top: 53%;
        width: 100%;
      }
    }
  }
  &-2 {
    background: $white-ter;
    .lingkaran {
      height: 100px;
      width: 100px;
      // background-color: $primary;
      border-radius: 50%;
    }
    .glass {
      height: 50%;
      width: 100%;
      background: rgba(219, 219, 219, 0);
      // border-radius: 16px;
      // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      // border: 1px solid rgba(219, 219, 219, 0.3);
      position: absolute;
      bottom: 1px;
    }
  }
}


</style>