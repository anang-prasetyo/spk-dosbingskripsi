<template>
  <img src="{{source}}" alt="" class="avatar">
</template>

<script setup>
defineProps ({
  source: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.avatar {
  height: 2rem;
  width: 2rem;
  border-radius: 25%;
}
</style>
