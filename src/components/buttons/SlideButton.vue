<template>
  <div>
    <button class="btn btn-hover" :class="button ? 'btn--clicked' : ''" @click="clicked()">
      <span class="btn-text">{{ msg }}</span>
    </button>

    <!-- <span class="color color--blue" :class="span ? 'expanded' : ''" data-value="1"></span>
    <span class="color color--orange" :class="span ? 'expanded' : ''" data-value="1"></span>
    <span class="color color--pink" :class="span ? 'expanded' : ''" data-value="1"></span>
    <span class="color color--white" :class="span ? 'expanded' : ''" data-value="1"></span> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  msg: String
})
const button = ref(null)
const span = ref(null)
const clicked = () => {
  button.value = true
  span.value = true
  setTimeout(() => {
    button.value = null
  }, 3500)
  setTimeout(() => {
    span.value = null
  }, 1700);
}
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.btn {
  border-radius: 3rem;
  letter-spacing: 0.8px;
  font-size: 1rem;
  font-weight: bold;
  border: 0;
  // color: $black;
  white-space: nowrap;
  margin: 20px auto;
  // width: 166px;
  // height: 45px;
  border: none;
  cursor: pointer;
  position: relative;
  border: 1px solid $primary;
  background: rgba($primary,.1);
  padding: 1rem;
  // box-shadow: 0 10px 15px -5px rgba($primary,.6);
}
.btn-text {
  margin: auto .5rem;
}
.btn::before {
  transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  content: "";
  width: 50%;
  height: 100%;
  // background: black;
  position: absolute;
  top: 0;
  right: 0;
}
.btn:hover::before {
  width: 100%;
}
.btn.btn-hover {
  border-radius: 3rem;
}
.btn.btn-hover .btn-text {
  color: $white;
  transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  mix-blend-mode: lighten;
}
.btn.btn-hover::before {
  border-radius: 3rem;
  width: 100%;
  background: $primary;
}
.btn.btn-hover:hover .btn-text {
  margin-right: 3.25rem;
  margin-left: 0;
  color: $primary;
  mix-blend-mode: darken;
}
.btn.btn-hover:hover::before {
  // background: url("../../assets/arrow-right.svg") no-repeat, $primary;
  background: url("https://res.cloudinary.com/damqsjjsn/image/upload/v1641758792/Icon_ionic-ios-arrow-back_rakyvb.svg") no-repeat, $primary;
  background-position: center;
  border-radius: 3rem;
  width: 22.5%;
}

.color {
  display: block;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  transition: 0.8s ease;
  border-radius: 50%;
  background-color: transparent;
}

.expanded {
  width: 200%;
  padding-bottom: 200%;
  height: auto;
}

.color--blue {
  background-color: #2979ff;
  transition-delay: 0.25s;
}

.color--orange {
  background-color: #ff5bff;
  transition-delay: 0.5s;
}

.color--pink {
  background-color: #3fff38;
  transition-delay: 0.75s;
}

.color--white {
  background-color: #fdc100;
  transition-delay: 1s;
}
</style>