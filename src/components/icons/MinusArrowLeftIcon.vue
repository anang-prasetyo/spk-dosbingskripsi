<template>
  <div style="display: flex; width: 1rem;">
    <input id="minus-arrow-left__toggle" type="checkbox" />
    <label class="menu__btn" for="minus-arrow-left__toggle">
      <span></span>
    </label>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

#minus-arrow-left__toggle {
  opacity: 0;
}

#minus-arrow-left__toggle:checked ~ .menu__btn > span {
  transform: translateX(4px);
  width: 50%;
}
#minus-arrow-left__toggle:checked ~ .menu__btn > span::before {
  top: 2.5px;
  left: -2px;
  transform: rotate(45deg);
  width: 80%;
}
#minus-arrow-left__toggle:checked ~ .menu__btn > span::after {
  top: -2.5px;
  left: -2px;
  transform: rotate(-45deg);
  width: 80%;
}
#minus-arrow-left__toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
}

.menu__btn {
  display: flex;
  align-items: center;
  // position: fixed;
  // top: 15px;
  // right: 2rem;

  width: 26px;
  height: 26px;

  cursor: pointer;
  z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after 
{
  display: block;
  position: absolute;
  left: 2px;

  width: 80%;
  height: 2px;
  border-radius: 2px;

  background-color: $white;

  transition-duration: .5s;
}
.menu__btn > span::before {
  content: '';
  top: 0px;
}
.menu__btn > span::after {
  content: '';
  top: 0px;
}
</style>