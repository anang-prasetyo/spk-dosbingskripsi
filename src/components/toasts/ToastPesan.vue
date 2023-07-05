<template>
  <div class="toast-my">
    <div class="toast-my--notif notif-color">
      <div>
        <div class="left">
          <div class="main sm" :class="bg">
            <img :src="img" />
          </div>
          <div class="right">
            <p>{{group}}</p>
            <p class="msg">{{sender}} : {{msg}}</p>
          </div>
        </div>
      </div>
      <span class="toast-my--progress progres-color"></span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: String,
  group: String,
  sender: String,
  img: String,
  bg: String
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.notif-color {
  background-color: $dark;
  color: $white;
  box-shadow: 0px 20px 10px -15px rgba($dark, 0.5);
}
.progres-color {
  background-image: linear-gradient(to right, $primary, $link);
}
.left {
  display: flex;
  align-items: center;
  gap: .5rem;
  .main {
    overflow: hidden;
    border-radius: 50%;
    img {
      max-width: 70%;
      display: flex;
      margin: auto;
      margin-bottom: 0;
      height: 90%;
    }
  }
  .sm {
    display: flex;
    min-width: 36px;
    min-height: 36px;
    max-width: 36px;
    max-height: 36px;
  }
}
.right{
  & .msg {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-size: .85rem;
  }
}
</style>