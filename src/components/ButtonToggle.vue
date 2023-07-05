<template>
  <div>
    <div class="tasks">
      <input v-model="checked" id='{{label}}' type='checkbox'/>
      <label for='{{label}}'></label>
    </div>
  </div>
</template>

<script setup>
defineProps ({
  label: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@import '../sass/styles.scss';

.tasks{
  display: block;
  margin: 0px auto;
}
input[type=checkbox] {
  display: none;
}
label{
  background: $primary;
  height: 24px;
  width: 48px;
  display: block;
  cursor: pointer;
  transition: all 0.7s ease;
  position: relative;
  padding: 5px;
  border-radius: 12px !important;
  margin: 10px 0;
}
label:before{
  content:"";
  width: 20px;
  height: 20px;
  background: $white;
  display: block;
  position: absolute;
  border-radius: 100%;
  right: 2px;
  top: 2px;
  transition: 0.5s ease
}
#label-1:checked ~ label[for=label-1]{
  background: $grey-lighter;
}
#label-1:checked ~ label[for=label-1]:before{
  background: $white;
  transition: 0.5s ease;
  transform: translateX(-24px);
}

</style>