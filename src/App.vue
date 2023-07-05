<script setup>
import { defineAsyncComponent, ref, onMounted } from 'vue';
import { useAuth} from './firebase/firebase'
import passwordMeter from "vue-simple-password-meter";
import SkeletonComponent from './components/SkeletonComponent.vue';
import ToastWarning from './components/toasts/ToastWarning.vue';
import ModernButton from './components/buttons/ModernButton.vue';

const HomePage = defineAsyncComponent(() => import('./layouts/HomePage.vue'))
const EyeIcon = defineAsyncComponent(() => import('./components/icons/EyeIcon.vue'))
const EyeSlashIcon = defineAsyncComponent(() => import('./components/icons/EyeSlashIcon.vue'))
const CheckIcon = defineAsyncComponent(() => import('./components/icons/CheckIcon.vue'))

const { isLogin, afterLogin, signUpPassword, signInPassword, signInForm, signUpForm, isToast, msgToast, thisUser, completeForm, sendCompleteForm } = useAuth()
const step = ref('login')

function validateEmail(elementValue){      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue); 
}

const completingUser = ref(1)
const showPassword = ref(null)
const showPassword2 = ref(null)
const showPassword3 = ref(null)
const loading = ref(false)

const avatars = ref([
  {
    image: 'ToyFaces_Tansparent_BG_1.png',
    name: 'Avatar 1',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_1.png?alt=media&token=d4338eef-64b8-49b3-a18c-e58d5ca54024'
  },
  {
    image: 'ToyFaces_Tansparent_BG_2.png',
    name: 'Avatar 2',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_2.png?alt=media&token=d53638ef-519d-468b-9b3f-c367540ef819'
  },
  {
    image: 'ToyFaces_Tansparent_BG_3.png',
    name: 'Avatar 3',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_3.png?alt=media&token=c595dd8f-ee73-4f6f-aef5-b5ed07bbb55c'
  },
  {
    image: 'ToyFaces_Tansparent_BG_4.png',
    name: 'Avatar 4',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_4.png?alt=media&token=8413c2d1-6249-430d-8942-271061fbd72b'
  },
  {
    image: 'ToyFaces_Tansparent_BG_5.png',
    name: 'Avatar 5',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_5.png?alt=media&token=049245cb-4a07-461c-922b-e1810f0fa3be'
  },
  {
    image: 'ToyFaces_Tansparent_BG_6.png',
    name: 'Avatar 6',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_6.png?alt=media&token=79294ba1-5189-466b-b51a-1973f9629f43'
  },
  {
    image: 'ToyFaces_Tansparent_BG_7.png',
    name: 'Avatar 7',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_7.png?alt=media&token=067f5918-770b-4e93-8355-f5b18ccd10e5'
  }
])
const backgrounds = ref([
  {bgColor : 'danger-gradient-1', color: 'danger-text'},
  {bgColor : 'primary-gradient-1', color: 'primary-text'},
  {bgColor : 'link-gradient-1', color: 'link-text'},
  {bgColor : 'info-gradient-1', color: 'info-text'},
  {bgColor : 'success-gradient-1', color: 'success-text'},
  {bgColor : 'warning-gradient-1', color: 'warning-text'},
])

const lightMode = ref(true)

onMounted(() => {
  loading.value = true
  setTimeout(() => loading.value = false, 6000)
})
</script>

<template>
  <Suspense>
    <template #default>
      <div v-if="afterLogin">
        <home-page />
      </div>
      <div v-else-if="isLogin">
        <div v-if="isToast" class="toast">
          <toast-warning :msg="msgToast" />
        </div>
        <div v-if="thisUser">
          <div v-if="thisUser.login.isLogin == true">
            <div id="login" v-if="completingUser == 1" class="columns fixed-columns">
              <div id="login-left" class="column white">
                <div class="kotak">
                  <div class="kotak-1">
                    <div class="text-125 text-semi-bold">Yuk lengkapi data kamu</div>
                    <div class="mb-4">1/2</div>
                    <div class="input-my light-mode-input-my flex border-bottom-info">
                      <div class="mt-4 mb-2">Nama Lengkap</div>
                      <input type="text" v-model="completeForm.user.userName" placeholder="Nama lengkap" class="input-my--input light-mode-input-my--input" />
                      <div class="mt-4 mb-2">NIM</div>
                      <input type="text" v-model="completeForm.user.userNIM" placeholder="NIM" class="input-my--input light-mode-input-my--input" />
                      <div class="mt-4 mb-2">Prodi</div>
                      <input type="text" v-model="completeForm.user.userProdi" readonly class="input-my--input light-mode-input-my--input" />
                    </div>
                    <div v-if="completeForm.user.userNIM !== '' && completeForm.user.userName !== '' && completeForm.user.userProdi !== ''" class="button-my flex mt-6 py-4 text-1 glow info info-glow" @click="completingUser = 2">Lanjut</div>
                    <div v-else class="button-my flex mt-6 py-4 text-1 info disable">Lanjut</div>
                  </div>
                </div>
              </div>
              <div id="login-right" class="column np">
                <div class="kotak kotak-2">
                  <div class="lingkaran info"></div>
                  <div class="glass"></div>
                </div>
              </div>
            </div>
            <div id="signup" v-else-if="completingUser == 2" class="columns fixed-columns">
              <div id="signup-left" class="column white">
                <div id="signup-kotak" class="kotak">
                  <div id="signup-kotak-1" class="kotak-1">
                    <div class="text-125 text-semi-bold">Hampir selesai</div>
                    <div class="">2/2</div>
                    <div style="width:100%;">
                      <div id="signup-edit-my--profil" class="edit-my--profil">
                        <div class="left">
                          <div class="main xl" :class="completeForm.profile.background ? completeForm.profile.background : 'light-gradient'">
                            <img v-if="completeForm.profile.url" :src="completeForm.profile.url">
                          </div>
                        </div>
                        <div class="right">
                          <div class="">Pilih avatar</div>
                          <div class="top-2">
                            <div class="top">
                              <div v-for="(avtr, index) in avatars" :key="index" class="item">
                                <div class="main sm light-gradient" :class="completeForm.profile.url === avtr.url ? 'selected-light' : ''">
                                  <div v-if="completeForm.profile.url == avtr.url" class="dot-select dot-select-light"><check-icon /></div>
                                  <img :src="avtr.url" :alt="avtr.image" @click="completeForm.profile.avatar = avtr.image, completeForm.profile.url = avtr.url">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class=" mt-2">Pilih background</div>
                          <div class="bot-2">
                            <div class="bot">
                              <div v-for="(bgs, index) in backgrounds" :key="index" class="item">
                                <div v-if="completeForm.profile.background == bgs.bgColor" class="dot-select dot-select-light"><check-icon /></div>
                                <div class="main sm" :class="completeForm.profile.background == bgs.bgColor ? (bgs.bgColor+' selected-light') : bgs.bgColor" @click="completeForm.profile.background = bgs.bgColor, completeForm.profile.color = bgs.color"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="completeForm.profile.avatar !== '' && completeForm.profile.url !== '' && completeForm.profile.background !== ''" class="button-my flex glow success success-glow mt-2 py-4" @click="sendCompleteForm()">Selesai</div>
                    <div v-else class="button-my flex success mt-2 py-4 disable">Selesai</div>
                    <div class="button-my flex light-transparent py-4" @click="completingUser = 1">Kembali</div>
                  </div>
                </div>
              </div>
              <div id="signup-right" class="column np">
                <div class="kotak kotak-2">
                  <div class="lingkaran success"></div>
                  <div class="glass"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="signup-mobile" class="light-mode-bg">
          <div v-if="completingUser == 2" style="height:100vh;display:flex;">
            <div id="signup-mobile-kotak-1" class="kotak-1">
              <div class="text-125 text-semi-bold">Hampir selesai</div>
              <div class="text-sm">2/2</div>
              <div style="width:100%;">
                <div id="signup-mobile-edit-my--profil" class="edit-my--profil">
                  <div class="left">
                    <div class="main xl" :class="completeForm.profile.background ? completeForm.profile.background : 'light-gradient'">
                      <img v-if="completeForm.profile.url" :src="completeForm.profile.url">
                    </div>
                  </div>
                  <div class="right">
                    <div class="text">Pilih avatar</div>
                    <div class="top-2">
                      <div class="top">
                        <div v-for="(avtr, index) in avatars" :key="index" class="item">
                          <div class="main sm light-gradient" :class="completeForm.profile.url === avtr.url ? 'selected' : ''">
                            <div v-if="completeForm.profile.url == avtr.url" class="dot-select dot-select-light"><check-icon /></div>
                            <img :src="avtr.url" :alt="avtr.image" @click="completeForm.profile.avatar = avtr.image, completeForm.profile.url = avtr.url">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text mt-2">Pilih background</div>
                    <div class="bot-2">
                      <div class="bot">
                        <div v-for="(bgs, index) in backgrounds" :key="index" class="item">
                          <div v-if="completeForm.profile.background == bgs.bgColor" class="dot-select dot-select-light"><check-icon /></div>
                          <div class="main sm" :class="completeForm.profile.background == bgs.bgColor ? (bgs.bgColor+' selected') : bgs.bgColor" @click="completeForm.profile.background = bgs.bgColor, completeForm.profile.color = bgs.color"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="button-my flex glow success success-glow mt-5 py-3" @click="sendCompleteForm()">Selesai</div>
              <div class="button-my flex light-transparent" @click="completingUser = 1">Kembali</div>
            </div>
          </div>
        </div>
      </div>
      <skeleton-component v-else-if="loading" />
      <div v-else>
        <div v-if="isToast" class="toast">
          <toast-warning :msg="msgToast" />
        </div>
        <div id="login" v-if="step === 'login'" class="columns fixed-columns">
          <div id="login-left" class="column white p-0">
            <div class="kotak">
              <div class="kotak-1" :class="lightMode ? 'light-mode-bg' : 'dark-mode-layout'">
                <div class="text-175 text-semi-bold">Login</div>
                <p class="mb-5">Untuk mencari rekomendasi dosen pembimbing skripsi.</p>
                <div class="input-my flex border-bottom-primary" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                  <div class="mt-4 mb-2">Email</div>
                  <input 
                    type="text" 
                    v-model="signInForm.userEmail" placeholder="contoh@gmail.com"
                    :class="lightMode ? 'light-mode-input-my--input-nh' : 'dark-mode-input-my--input-nh'"
                    class="input-my--input-nh"
                    @keypress.enter="signInForm.userEmail !== '' && signInForm.userPassword !== '' && validateEmail(signInForm.userEmail) === true ? signInPassword(signInForm.userEmail,signInForm.userPassword) : ''"
                  />
                  <div class="mt-5 mb-2">Password</div>
                  <div v-if="showPassword3" style="position: relative;">
                    <input 
                      type="text" 
                      v-model="signInForm.userPassword" 
                      placeholder="Password"
                      :class="lightMode ? 'light-mode-input-my--input-nh' : 'dark-mode-input-my--input-nh'"
                      class="input-my--input-nh" 
                      @keypress.enter="signInForm.userEmail !== '' && signInForm.userPassword !== '' && validateEmail(signInForm.userEmail) === true ? signInPassword(signInForm.userEmail,signInForm.userPassword) : ''" 
                    />
                    <eye-slash-icon class="icon-mata" @click="showPassword3 = null"></eye-slash-icon>
                  </div>
                  <div v-else style="position: relative;">
                    <input 
                      type="password" 
                      v-model="signInForm.userPassword" 
                      placeholder="Password"
                      :class="lightMode ? 'light-mode-input-my--input-nh' : 'dark-mode-input-my--input-nh'"
                      class="input-my--input-nh" 
                      @keypress.enter="signInForm.userEmail !== '' && signInForm.userPassword !== '' && validateEmail(signInForm.userEmail) === true ? signInPassword(signInForm.userEmail,signInForm.userPassword) : ''" 
                    />
                    <eye-icon class="icon-mata" @click="showPassword3 = true"></eye-icon>
                  </div>
                </div>
                <modern-button 
                  v-if="signInForm.userEmail !== '' && signInForm.userPassword !== '' && validateEmail(signInForm.userEmail) === true" 
                  :msg="'Log In'" 
                  :color="'glow primary'" 
                  class="mt-6 flex" 
                  style="justify-content: center;" 
                  @click="signInPassword(signInForm.userEmail,signInForm.userPassword)" 
                />
                <modern-button 
                  v-else 
                  :msg="'Log In'"
                  :color="'primary'" 
                  class="mt-6 flex disable" 
                  style="justify-content: center; pointer-events: none;" 
                />
                <div class="text-075 mt-4 typography-semu-light">Belum punya akun? <u class="text-075 primary-text" style="cursor: pointer" @click="step = 'signup'">Sign Up</u></div>
              </div>
            </div>
          </div>
          <div id="login-right" class="column p-0">
            <div class="kotak kotak-2">
              <div class="lingkaran primary"></div>
              <div class="glass"></div>
            </div>
          </div>
        </div>
        <div id="login" v-else-if="step === 'signup'" class="columns fixed-columns">
          <div id="login-left" class="column white p-0">
            <div class="kotak">
              <div class="kotak-1" :class="lightMode ? 'light-mode-bg' : 'dark-mode-layout'">
                <div class="text-175 text-semi-bold">Signup</div>
                <p class="mb-5">Untuk membuat akun baru.</p>
                <div class="input-my flex" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                  <div class="mt-4 mb-2">Email</div>
                  <input 
                    type="text" 
                    v-model="signUpForm.userEmail" placeholder="contoh@gmail.com" 
                    class="input-my-email--input light-mode-input-my-email--input"
                    :class="
                    [validateEmail(signUpForm.userEmail) === true && signUpForm.userEmail !== '' ? 'border-bottom-2-success' : 
                    validateEmail(signUpForm.userEmail) !== true && signUpForm.userEmail !== '' ? 'border-bottom-2-danger' :
                    '']"
                    @keypress.enter="signUpForm.userEmail !== '' && signUpForm.userPassword !== '' && signUpForm.retypePassword !== '' && signUpForm.userPassword === signUpForm.retypePassword && validateEmail(signUpForm.userEmail) === true ? signUpPassword(signUpForm.userEmail,signUpForm.userPassword) : ''"
                  />
                  <div class="mt-4 mb-2">Password</div>
                  <div v-if="showPassword" style="position: relative;">
                    <input 
                      type="text" 
                      v-model="signUpForm.userPassword" 
                      placeholder="Password" 
                      class="input-my--input-nh light-mode-input-my--input-nh"
                      @keypress.enter="signUpForm.userEmail !== '' && signUpForm.userPassword !== '' && signUpForm.retypePassword !== '' && signUpForm.userPassword === signUpForm.retypePassword && validateEmail(signUpForm.userEmail) === true ? signUpPassword(signUpForm.userEmail,signUpForm.userPassword) : ''" 
                    />
                    <eye-slash-icon class="icon-mata" @click="showPassword = null"></eye-slash-icon>
                  </div>
                  <div v-else style="position: relative;">
                    <input 
                      type="password" 
                      v-model="signUpForm.userPassword" 
                      placeholder="Password" 
                      class="input-my--input-nh light-mode-input-my--input-nh"
                      @keypress.enter="signUpForm.userEmail !== '' && signUpForm.userPassword !== '' && signUpForm.retypePassword !== '' && signUpForm.userPassword === signUpForm.retypePassword && validateEmail(signUpForm.userEmail) === true ? signUpPassword(signUpForm.userEmail,signUpForm.userPassword) : ''" 
                    />
                    <eye-icon class="icon-mata" @click="showPassword = true"></eye-icon>
                  </div>
                  <password-meter :password="signUpForm.userPassword" />
                  <div class="mt-4 mb-2">Ulangi Password</div>
                  <div v-if="showPassword2" style="position: relative;">
                    <input 
                      type="text" 
                      v-model="signUpForm.retypePassword" 
                      placeholder="Ulangi Password" 
                      class="input-my--input-nh light-mode-input-my--input-nh"
                      @keypress.enter="signUpForm.userEmail !== '' && signUpForm.userPassword !== '' && signUpForm.retypePassword !== '' && signUpForm.userPassword === signUpForm.retypePassword && validateEmail(signUpForm.userEmail) === true ? signUpPassword(signUpForm.userEmail,signUpForm.userPassword) : ''" 
                    />
                    <eye-slash-icon class="icon-mata" @click="showPassword2 = null"></eye-slash-icon>
                  </div>
                  <div v-else style="position: relative;">
                    <input 
                      type="password" 
                      v-model="signUpForm.retypePassword" 
                      placeholder="Ulangi Password" 
                      class="input-my--input-nh light-mode-input-my--input-nh"
                      @keypress.enter="signUpForm.userEmail !== '' && signUpForm.userPassword !== '' && signUpForm.retypePassword !== '' && signUpForm.userPassword === signUpForm.retypePassword && validateEmail(signUpForm.userEmail) === true ? signUpPassword(signUpForm.userEmail,signUpForm.userPassword) : ''" 
                    />
                    <eye-icon class="icon-mata" @click="showPassword2 = true"></eye-icon>
                  </div>
                  <password-meter :password="signUpForm.retypePassword" />
                </div>
                <modern-button 
                  v-if="signUpForm.userPassword !== '' && signUpForm.userPassword === signUpForm.retypePassword && validateEmail(signUpForm.userEmail) === true" 
                  :msg="'Signup'" 
                  :color="'glow warning'" 
                  class="mt-5 flex" 
                  style="justify-content: center;" 
                  @click="signUpPassword(signUpForm.userEmail,signUpForm.userPassword)" 
                />
                <modern-button 
                  v-else 
                  :msg="'Signup'" 
                  :color="'warning'" 
                  class="mt-5 flex disable" 
                  style="justify-content: center; pointer-events: none;" 
                />
                <div class="text-075 mt-4 typography-semu-light">Sudah punya akun? <u class="text-075 warning-text" style="cursor: pointer" @click="step = 'login'">Login</u></div>
              </div>
            </div>
          </div>
          <div id="login-right" class="column np">
            <div class="kotak kotak-2">
              <div class="lingkaran warning"></div>
              <div class="glass"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #fallback>
      <skeleton-component />
    </template>
  </Suspense>
</template>

<style lang="scss">
@import './sass/my-styles.scss';
@import './sass/my-texts.scss';
@import './sass/mobile.scss';
@import './sass/animation.scss';


.google-icon:hover {
  color: $link;
}
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
    display: flex;
    flex-direction: column;
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
      border-radius: 50%;
      transition: all 1s ease;
      animation: float 19s ease infinite reverse;
    }
    .glass {
      height: 50%;
      width: 100%;
      background: rgba(219, 219, 219, 0);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      position: absolute;
      bottom: 1px;
    }
  }
}
.icon-mata{
  position: absolute;
  top: 30%;
  right: 5%;
  width: 1rem;
  height: auto;
  cursor: pointer;
}
</style>
