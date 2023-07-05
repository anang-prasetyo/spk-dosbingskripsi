<template>
  <div class="message">
    <span v-if="!sender">{{ name }}</span>
    <div class="flex" :class="sender ? 'flex-row-reverse' : ''">
      <AvatarComponent class="mt-1" :nick="nick" />
      <!-- <AvatarComponent class="mt-1" :src="photoUrl" /> -->
      <div class="text w-3/4" :class="sender ? 'bg-green-800' : 'bg-gray-700'">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue'
export default {
  components: { AvatarComponent },
  props: {
    name: { type: String, default: '' },
    nick: { type: String },
    // photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  }
}
</script>
