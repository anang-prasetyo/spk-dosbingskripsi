<template>
  <div class="m-5">
    <nav>
      <div>
        <h1><strong>Vue</strong> Chat App</h1>
  
        <div v-if="isLogin" class="login">
          <AvatarComponent :nick="user.nick" />
          <!-- <div>{{user.displayName}}</div> -->
          <div>{{user.nick}}</div>
          <div>{{user.displayName}}</div>
          <button class="text-gray-400 hover:text-white" @click="signOut">
            Sign Out
          </button>
        </div>
  
        <button v-else class="bg-green-500 hover:bg-green-600" @click="signIn">
          Sign in - umum
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue'
import { useAuth } from '../../firebase/firebase'
export default {
  components: { AvatarComponent },
  props: {
    nick: { type: String },
  },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>

<style lang="scss">
@import '../../sass/my-styles.scss';
</style>