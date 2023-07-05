<template>
  <!-- <div>
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle" @click="$emit('toggleMenu', openMenu = !openMenu)">
      <span></span>
    </label>
  </div> -->
  <label for="burger" class="burger">
    <input id="burger" type="checkbox" @click="$emit('toggleMenu', openMenu = !openMenu)">
    <span :style="lightMode ? 'background: black;' : 'background: white;'"></span>
    <span :style="lightMode ? 'background: black;' : 'background: white;'"></span>
    <span :style="lightMode ? 'background: black;' : 'background: white;'"></span>
  </label>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
  lightMode: Boolean
})
const openMenu = ref(false)

</script>

<style scoped>
.burger {
  position: relative;
  width: 25px;
  height: 15px;
  background: transparent;
  cursor: pointer;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  /* background: black; */
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: -1px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 17px;
  left: 5px;
}
</style>
<!-- <style scoped>
  #menu__toggle {
    opacity: 0;
  }

  #menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
  }
  #menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    visibility: visible;
    left: 0;
  }

  .menu__btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 15px;
    right: 2rem;

    width: 26px;
    height: 26px;

    cursor: pointer;
    z-index: 1;
  }

  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;

    width: 100%;
    height: 2px;

    background-color: #616161;

    transition-duration: .25s;
  }
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }
</style> -->
