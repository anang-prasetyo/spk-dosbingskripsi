<template>
  <div>
    <Suspense v-if="afterLogin">
      <template #default>
        <home-page />
      </template>
      <template #fallback>
        <div style="position:absolute;top:50%;right:50%">
          <div style="display:flex;flex-direction:column;justify-content:center;align-items:center">
            <VueSpinner size="20" color="	#5b3bc4" />
            <p>Loading...</p>
          </div>
        </div>
      </template>
    </Suspense>
    
    <div v-else>
      <div v-if="isToast" class="toast">
        <toast-warning :msg="msgToast" />
      </div>
  
      <div v-if="step === 'login'" class="columns fixed-columns">
        <div class="column">
          <div class="kotak">
            <div class="kotak-1">
              <div><strong>Selamat Datang di SPK-PDPS</strong></div>
              <div class="text-sm">Silahkan pilih cara untuk Log In</div>
              <div class="input-my flex border-bottom-primary">
                <div class="label-my">Email</div>
                <input type="text" v-model="signInForm.userEmail" placeholder="Email" class="input-my--input" />
                <div class="label-my">Password</div>
                <input type="password" v-model="signInForm.userPassword" placeholder="Password" class="input-my--input" />
              </div>
              <div><u class="text-sm">Lupa password</u></div>            
              <div v-if="signInForm.userPassword !== '' && signInForm.userEmail !== ''" class="button-my flex mt-5 glow primary-glow" @click="signInPassword">Log In</div>
              <div v-else class="button-my flex mt-5 primary disable">Log In</div>
              <div class="text-sm">Belum punya akun? <u class="text-sm" style="cursor: pointer" @click="step = 'signup'">Sign Up</u></div>
              <div class="atau">
                <div class="atau-text text-sm my-3 white">atau</div>
                <div class="strip"></div>
              </div>
              <div class="button-my white-border flex google-icon" @click="signInGoogle">
                <google-icon class="mr-2" /> Log In dengan Google
              </div>
            </div>
          </div>
        </div>
        <div class="column np">
          <div class="kotak kotak-2">
            <div class="lingkaran primary"></div>
            <div class="glass"></div>
          </div>
        </div>
      </div>
      <div v-else-if="step === 'signup'" class="columns fixed-columns">
        <div class="column">
          <div class="kotak">
            <div class="kotak-1">
              <div><strong>Selamat Datang di SPK-PDPS</strong></div>
              <div class="text-sm">Lengkapi data anda untuk proses Sign Up</div>
              <div class="input-my flex border-bottom-info">
                <!-- <div class="label-my">Nama Lengkap</div>
                <input type="text" v-model="signUpForm.userName" placeholder="Nama lengkap" class="input-my--input" /> -->
                <div class="label-my">Email</div>
                <input 
                  type="text" 
                  v-model="signUpForm.userEmail" placeholder="contoh@gmail.com" 
                  class="input-my-email--input border-bottom-2-danger"
                  :style="validateEmail(signUpForm.userEmail) == true ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                />
                <div class="label-my">Password</div>
                <input type="password" v-model="signUpForm.userPassword" placeholder="Password" class="input-my--input" />
                <password-meter :password="signUpForm.userPassword" />
              </div>
              <div v-if="signUpForm.userName !== '' && signUpForm.userPassword !== '' && validateEmail(signUpForm.userEmail) == true" class="button-my flex mt-5 glow info-glow" @click="signUpPassword">Sign Up</div>
              <div v-else class="button-my flex mt-5 info disable">Sign Up</div>
              <div class="text-sm">Sudah punya akun? <u class="text-sm" style="cursor: pointer" @click="step = 'login'">Log in</u></div>
              <div class="atau">
                <div class="atau-text text-sm my-3 white">atau</div>
                <div class="strip"></div>
              </div>
              <div class="button-my white-border flex google-icon" @click="signUpGoogle">
                <google-icon class="mr-2" /> Sign Up dengan Google
              </div>
            </div>
          </div>
        </div>
        <div class="column np">
          <div class="kotak kotak-2">
            <div class="lingkaran info"></div>
            <div class="glass"></div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useAuth} from '../firebase/firebase'
import passwordMeter from "vue-simple-password-meter";
import { VueSpinner } from 'vue3-spinners';

const HomePage = defineAsyncComponent(() => import('../layouts/HomePage.vue'))

const ToastWarning = defineAsyncComponent(() => import('../components/toasts/ToastWarning.vue'))
const GoogleIcon = defineAsyncComponent(() => import('../components/icons/GoogleIcon.vue'))
const { signUpGoogle, signUpPassword, signInGoogle, signInPassword, signUpForm, signInForm, isToast, msgToast, afterLogin } = useAuth()

const step = ref('login')

function validateEmail(elementValue){      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue); 
}

</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';

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