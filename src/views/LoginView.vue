<template>
  <div class="">
  <!-- <div class="m-6 p-6"> -->
    <!-- <div class="columns white">
      <div class="column">
        <div v-if="isLogin" class="">
          <div class="">
            <div class="">{{getFirstLetters(user.displayName)}}</div>
          </div>
          <div class="">{{user.displayName}}</div>
          <button class="button-my danger" @click="signOut">
            Sign Out
          </button>
        </div>
        <button v-else class="button-my link" @click="signIn">
          Sign in
        </button>
      </div>
      <div v-if="isLogin" class="column">
        <div>
          <input type="text" v-model="user.displayName" placeholder="nama lengkap" />
          <input type="text" v-model="user.email" placeholder="email" />
          <input type="text" v-model="newUserData.nim" placeholder="nim" />
        </div>
        
        <div>
          <div class="edit-my--profil">
            <div class="left">
              <div class="main xl" :class="selectedBackground ? selectedBackground : 'light-gradient'">
                <img v-if="selectedAvatar" :src="'src/assets/avatar/'+selectedAvatar">
              </div>
            </div>
            <div class="right">
              <div class="my-2"><strong>Edit Foto Profil</strong></div>
              <div class="text">Pilih avatar</div>
              <div class="top-2">
                <div class="top">
                  <div v-for="(avtr, index) in avatars" :key="index" class="item">
                    <div class="main sm light-gradient" :class="selectedAvatar == avtr.image ? 'selected' : ''">
                      <div v-if="selectedAvatar == avtr.image" class="dot-select"><check-icon /></div>
                      <img :src="'src/assets/avatar/'+avtr.image" :alt="avtr.image" @click="selectAvatar(avtr.image)">
                    </div>
                  </div>
                </div>
              </div>
              <div class="text mt-2">Pilih background</div>
              <div class="bot">
                <div v-for="(bgs, index) in backgrounds" :key="index" class="item">
                  <div v-if="selectedBackground == bgs.bgColor" class="dot-select"><check-icon /></div>
                  <div class="main sm" :class="selectedBackground == bgs.bgColor ? (bgs.bgColor+' selected') : bgs.bgColor" @click="selectBackground(bgs.bgColor)"></div>
                </div>
              </div>
              <div class="mt-2 mb-5">
                <div class="button-my light-transparent mr-2" @click="getData">Batal</div>
                <div class="button-my glow link-glow" @click="addData">Simpan</div>
              </div>
            </div>
          </div>
        </div>

        <div class="button-my glow link-glow" @click="sendUserData()">Lanjut</div>
      </div>
    </div> -->

    <div v-if="afterLogin" class="m-6">
      <div>Yeayyy</div>
      <div class="button-my danger" @click="signOut">Sign Out</div>
    </div>
    <div v-else-if="isLogin">
      <div v-if="thisUser">{{afterLogin}}</div>
      <div class="card-my">
        <div class="card-my-head">
          <div class="card-my-title">
            <div class="card-my-title">
              <div v-if="currentStep == 2">
                <div class="content">
                  <div class="">
                    <span>2/3</span>
                    <form >
                      <div class="field">
                        <div>
                          <Vue3Lottie :animationData="meditationAnimation" :height="200" :width="200" />
                        </div>
                        <div class="has-text-centered">Lengkapi data diri kamu</div>
                        <div class="input-my flex">
                          <div class="label-my">Nama Lengkap</div>
                          <input type="text" v-model="newUserData.displayNameNew" placeholder="nama lengkap" class="input-my--input" />
                          <div class="label-my">NIM</div>
                          <input type="text" v-model="newUserData.nim" placeholder="nim" class="input-my--input" />
                        </div>
                      </div>
                      <div class="mt-5">
                        <div class="button-my glow primary-glow flex mb-2" @click="nextStep()">Selanjutnya</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div v-else-if="thisUser.login.isLogin == true">
                <div class="content">
                  <div class="">
                    <span>3/3</span>
                    <form >
                      <div class="field">
                        <div class="has-text-centered">Hampir Siap</div>
                        <div>
                          <div class="edit-my--profil">
                            <div class="left">
                              <div class="main xl" :class="selectedBackground ? selectedBackground : 'light-gradient'">
                                <img v-if="selectedAvatar" :src="'src/assets/avatar/'+selectedAvatar">
                              </div>
                            </div>
                            <div class="right">
                              <div class="text">Pilih avatar</div>
                              <div class="top-2">
                                <div class="top">
                                  <div v-for="(avtr, index) in avatars" :key="index" class="item">
                                    <div class="main sm light-gradient" :class="selectedAvatar == avtr.image ? 'selected' : ''">
                                      <div v-if="selectedAvatar == avtr.image" class="dot-select"><check-icon /></div>
                                      <img :src="'src/assets/avatar/'+avtr.image" :alt="avtr.image" @click="selectAvatar(avtr.image)">
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="text mt-2">Pilih background</div>
                              <div class="bot-2">
                                <div class="bot">
                                  <div v-for="(bgs, index) in backgrounds" :key="index" class="item">
                                    <div v-if="selectedBackground == bgs.bgColor" class="dot-select"><check-icon /></div>
                                    <div class="main sm" :class="selectedBackground == bgs.bgColor ? (bgs.bgColor+' selected') : bgs.bgColor" @click="selectBackground(bgs.bgColor,bgs.color)"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-5">
                        <div class="button-my glow primary-glow flex mb-2" @click="finishLogin(newUserData.displayNameNew,newUserData.nim,selectedAvatar,selectedBackground,selectedColor)">Masuk</div>
                        <div class="button-my light flex mb-2" @click="backStep()">Sebelumnya</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <!-- <div v-else>
                <div>Yeayyy</div>
                <div class="button-my danger" @click="signOut">Sign Out</div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="card-my">
        <div class="card-my-head">
          <div class="card-my-title">
            <div class="card-my-title">
              <div>
                <div class="content">
                  <div class="">
                    <span>1/3</span>
                    <form >
                      <div class="field">
                        <div>
                          <Vue3Lottie :animationData="hiAnimation" :height="200" :width="200" />
                        </div>
                        <div class="has-text-centered">Halo selamat datang, untuk melanjutkan kamu harus login dengan akun <strong>Google</strong> kamu ya. Jadi pastikan kamu punya akun <strong>Google</strong></div>
                      </div>
                      <div class="mt-5">
                        <div class="button-my glow primary-glow flex mb-2" @click="signIn">Login dengan akun Google</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import { useAuth} from '../firebase/firebase'
// import { useAuth,  getFirstLetters } from '../firebase/firebase'
// import DataServiceUser from '../services/DataServiceUser'
import hiAnimation from '../assets/animations/welcome.json'
import meditationAnimation from '../assets/animations/profile-document.json'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

const CheckIcon = defineAsyncComponent(() => import('../components/icons/CheckIcon.vue'))
const { isLogin, signOut, signIn, afterLogin, finishLogin, thisUser } = useAuth()


const newUserData = ref({
  displayNameNew: '',
  nim: ''
})
// var a = newUserData.value.displayNameNew,
//     b = newUserData.value.nim,
//     c = selectedAvatar.value,
//     d = selectedBackground.value
// const sendUserData = () => {
//   var dataUser = {
//     displayNameNew : newUserData.value.displayNameNew,
//     nim: newUserData.value.nim,
//     prodi: 'INFORMATIKA',
//     profile : {
//       avatar: selectedAvatar.value,
//       background: selectedBackground.value
//     }
//   }
//   DataServiceUser.update(user.value.uid,dataUser)
//   if ( currentStep.value < 4 ) {
//     currentStep.value = currentStep.value + 1
//   }
// }

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
const selectedAvatar = ref()
const selectAvatar = (id) => {
  selectedAvatar.value = id
}
const backgrounds = ref([
  {bgColor : 'primary-gradient-1', color: 'primary-text'},
  {bgColor : 'link-gradient-1', color: 'link-text'},
  {bgColor : 'info-gradient-1', color: 'info-text'},
  {bgColor : 'warning-gradient-1', color: 'warning-text'},
  {bgColor : 'danger-gradient-1', color: 'danger-text'},
  {bgColor : 'success-gradient-1', color: 'success-text'},
  {bgColor : 'dark-gradient', color: 'dark-text'}
])
const selectedBackground = ref('primary-gradient-1')
const selectedColor = ref('primary')
const selectBackground = (a,b) => {
  selectedBackground.value = a
  selectedColor.value = b
}

const currentStep = ref(2)
const nextStep = () => {
  currentStep.value = currentStep.value + 1
}
const backStep = () => {
  currentStep.value = currentStep.value - 1
}

</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';

.control span {
  margin: .5rem 0 .25rem 0;
  display: block;
  font-size: .9rem;
}
.fixed-button--1{
  width: 100%;
}
</style>