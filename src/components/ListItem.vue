<template>
  <div class="list">
    <div class="list-top">{{top}}</div>
    <div class="list-bot">{{bot}}</div>
  </div>
</template>

<script setup>
defineProps ({
  top: {
    type: String,
    required: true
  },
  bot: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
}
.list-top {
  font-size: 1rem;
}
.list-bot {
  font-size: 0.75rem;
}
</style>