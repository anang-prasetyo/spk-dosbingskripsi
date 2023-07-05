<template>
  <div class="avatar-2 has-background-grey-darker has-text-white">{{nick}}</div>
</template>

<script setup>
defineProps ({
  nick: String
})
</script>

<style scoped>
.avatar-2 {
  height: 2rem;
  width: 2rem;
  min-height: 2rem;
  min-width: 2rem;
  border-radius: 25%;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.2rem 0;
  margin: auto 0;
}
</style>