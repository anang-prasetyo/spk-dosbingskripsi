<template>
  <div class="columns skeleton">
    <div class="column is-2 left">
      <div class="title mb-3 el"></div>
      <div v-for="i in 8" :key="i" class="menu el"></div>
    </div>
    <div class="column mid">
      <div class="mid-1">
        <div class="judul mb-3 el"></div>
        <div v-for="i in 3" :key="i" class="isi-1 el"></div>
        <div class="isi-2 el"></div>
        <div class="btn el"></div>
      </div>
      <div class="mid-2"></div>
    </div>
    <div class="column is-2 right">
      <div class="right-1">
        <div class="judul el"></div>
        <div v-for="i in 5" :key="i" class="isi el"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';

.skeleton {
  .el {
    border-radius: 5px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
    background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
    background-size: 1200px 100px;
    animation: wave-lines 2s infinite ease-out;
  }
  .left, .mid, .right {
    display: flex;
    flex-direction: column;
    min-height: 102vh;
    height: 100%;
  }
  .left, .right{
    gap: 10px;
    padding-top: 2rem;
    padding-left: 2rem;
  }
  .left{
    .title, .menu{
      width: 100%;
    }
    .title{
      height: 60px;
    }
    .menu{
      height: 40px;
    }
  }
  .mid{
    justify-content: center;
    align-items: center;
    gap: 10px;
    &-1 {
      display: flex;
      width: 80%;
      flex-direction: column;
      gap: 10px;
      .judul, .isi-1{
        width: 100%;
      }
      .judul{
        height: 40px;
      }
      .isi{
        &-1, &-2{
          height: 20px;
        }
        &-2{
          width: 70%;
        }
      }
      .btn {
        height: 30px;
        width: 100px;
      }
    }
  }
  .right{
    &-1 {
      display: flex;
      width: 80%;
      flex-direction: column;
      gap: 10px;
      .judul {
        height: 25px;
        width: 100%;
      }
      .isi {
        height: 15px;
        width: 80%;
      }
    }
  }
}
@keyframes wave-lines {
0% {
background-position: -668px 0;
}
100% {
background-position: 668px 0;
}
}
</style>