<template>
  <div>
    <label>My Custom Input</label>
    <input type="text" placeholder="Custom input!" @input="handleChange" />
  </div>
</template>

<script setup>
const emit = defineEmits(['customChange'])
const handleChange = (event) => {
  emit('customChange', event.target.value.toUpperCase())
}
</script>

<style>

</style>