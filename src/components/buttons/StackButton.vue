<template>
  <div>
    <button>
      <div :class="background1">
        <span>
          <p>{{ msg1 }}</p>
        </span>
      </div>
      <div :class="background2">
        <span>
          <p>{{ msg2 }}</p>
        </span>
      </div>
    </button>
  </div>
</template>

<script setup>
defineProps({
  msg1: String,
  msg2: String,
  background1: String,
  background2: String,
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

button {
  outline: 0;
  border: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 140px;
  height: 50px;
  border-radius: 1rem;
  // box-shadow: 0 0.625em 1em 0 rgba(30, 143, 255, 0.35);
  overflow: hidden;
  background: transparent;
  cursor: pointer;
  &,
  & div {
    transition: 0.6s cubic-bezier(.16,1,.3,1);
  }
  & div {
    transform: translateY(0px);
    width: 100%;
    display: flex;
    justify-content: center;
    & span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      padding: 0.75em 1.125em;
    }
    // &:nth-child(1) {
    //   background-color: #1e90ff;
    // }
    
    // &:nth-child(2) {
    //   background-color: #21dc62;
    // }
  }
  &:hover {
    // box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
    & div {
      transform: translateY(-50px);
    }
  }
  
  & p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    letter-spacing: .5px;
  }
  
  &:active {
    transform: scale(0.95);
  }
}


</style>