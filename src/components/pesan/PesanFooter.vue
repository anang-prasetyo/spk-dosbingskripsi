<template>
  <div class="">
    <div class="bottom">
      <div class="fixed-bottom">
        <div v-if="isLogin">
          <form class="flex" @submit.prevent="send">
            <button>
              <folder-icon class="float" />
            </button>
            <!-- <input placeholder="Message" required /> -->
            <input v-model="message" class="vs-input" placeholder="Tulis sebuah pesan ..." />
            <button type="submit">
              <send-icon-2 class="float" />
            </button>
          </form>
        </div>
        <!-- <div class="flex" v-if="available">
          <button>
            <folder-icon class="float" />
          </button>
          <input class="vs-input" placeholder="Tulis sebuah pesan ..." />
          <button>
            <send-icon-2 class="float" />
          </button>
        </div> -->
        <div class="flex flex-skeleton" v-else>
          <div class="icon-skeleton"></div>
          <div class="type-skeleton"></div>
          <div class="icon-skeleton"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SendIcon2 from '../icons/SendIcon2.vue'
import FolderIcon from '../icons/FolderIcon.vue'
import { ref } from 'vue';
import { useAuth, useChat1 } from '../../firebase/firebase'

const { isLogin } = useAuth()
const { sendMessage } = useChat1()
const message = ref(''),
      send = () => {
        sendMessage(message.value)
        message.value = ''
      }

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.bottom {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: $white;
  box-shadow: -2px -2px 10px rgba($dark, .04);
}
.fixed-bottom {
  padding: 1.4rem 20% 1.4rem 41%;
  width: 100%;
}
.flex {
  display: flex;
  gap: 1rem;
}
.float {
  display: flex;
  margin: auto 0.5rem;

  &:hover {
    color: $primary;
  }
}
button {
  border: none;
  background: transparent;
}
.flex-skeleton {
  justify-content: space-around;
}
.icon-skeleton {
  height: 2.25rem;
  width: 2.25rem;
  border-radius: .5rem;
  background: $light;
}
.type-skeleton {
  height: 2.25rem;
  width: 60%;
  border-radius: .5rem;
  background: $light;
}
</style>
