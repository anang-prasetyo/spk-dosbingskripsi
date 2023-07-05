<template>
  <button :class="color">
    {{ msg }}
    <div class="arrow-wrapper">
      <div class="arrow" :class="color"></div>
    </div>
  </button>
</template>

<script setup>
defineProps({
  msg: String,
  color: String,
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

button {
  --primary-color: #645bff;
  --secondary-color: #fff;
  --hover-color: #111;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  // color: var(--secondary-color);
  padding: 1em 1.8em;
  // background: var(--primary-color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: 0.2s background;
  transition: 0.2s background;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 0.6em;
  font-weight: bold;
  cursor: pointer;
}

button .arrow-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

button .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  // background: var(--primary-color);
  height: var(--arrow-stroke);
  position: relative;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

button .arrow::before {
  content: "";
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  padding: 3px;
  -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

button:hover {
  background-color: var(--hover-color);
}

button:hover .arrow {
  background: var(--secondary-color);
}

button:hover .arrow:before {
  right: 0;
}
</style>