<template>
  <div>
    <div class="container-sm mt-20">
      <div class="mx-5">
        <!-- <MessageComponent
          v-for="{ id, text, photoURL, userName, userId, nick } in messages1"
          :key="id"
          :name="userName"
          :photo-url="photoURL"
          :sender="userId === user?.uid"
        ></MessageComponent> -->
        <MessageComponent
          v-for="{ id, text, userName, userId, nick } in messages1"
          :key="id"
          :name="userName"
          :nick="nick"
          :sender="userId === user?.uid"
        >
          {{ text }}
        </MessageComponent>
      </div>
    </div>
    <div ref="bottom" class="mt-20"></div>
    <div class="bottom">
      <div class="container-sm">
        <form v-if="isLogin" @submit.prevent="send">
          <input v-model="message" placeholder="Message" required />
          <button type="submit">
            <send-icon-2 />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch, nextTick } from 'vue'
import { useAuth, useChat1 } from '../../firebase/firebase'
import SendIcon2 from '../icons/SendIcon2.vue'
import MessageComponent from './MessageComponent.vue'
export default {
  components: { MessageComponent, SendIcon2 },
  setup() {
    const { user, isLogin } = useAuth()
    const { messages1, sendMessage } = useChat1()
    const bottom = ref(null)
    watch(
      messages1,
      () => {
        nextTick(() => {
          bottom.value?.scrollIntoView({ behavior: 'smooth' })
        })
      },
      { deep: true }
    )
    const message = ref('')
    const send = () => {
      sendMessage(message.value)
      message.value = ''
    }
    return { user, isLogin, messages1, bottom, message, send }
  }
}
</script>
