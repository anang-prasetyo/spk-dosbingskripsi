<template>
  <div class="avatar-nn avatar-nn-md avatar-nn-round" :class="$attrs.avatarColor">
    <div class="avatar-nn-text avatar-nn-text-lg">{{nickGC}}</div>
  </div>
</template>

<script setup>
defineProps ({
  nickGC: {
    type: String,
    required: false
  },
  avatarColor: {
    type: String,
    required: false
  }
})
</script>

<style>

</style>