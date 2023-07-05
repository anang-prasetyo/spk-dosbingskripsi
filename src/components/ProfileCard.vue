<template>
  <div class="profile-card">
    <div class="profile-image">
      <img :src="userData.pic" />
    </div>
    <div class="profile-info">
      <span>Ditulis oleh</span>
      <h3>{{userData.name}}</h3>
      <p>{{userData.bio}}</p>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

const loadUserData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Anang Prasetyo',
        pic: 'src/assets/an.png',
        bio: 'Ini adalah hari selasa tanggal 18 Oktober 2022.'
      })
    }, 2000)
  })
}

export default {
  async setup() {
    const userData = ref(await loadUserData())

    return {
      userData
    }
  },
}
</script>

<style lang="scss">
@import '../sass/styles.scss';

.profile-card {
  width: 100%;
  max-width: 700px;
  min-height: 180px;
  background: $light;
  margin: 2rem auto;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 20px;
}
.profile-image {
  width: 10%;
  float: left;
}
.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  padding: 5px;
}
.profile-info {
  width: 85%;
  float: right;
}
.profile-info span {
  text-transform: uppercase;
  color: #777;
  letter-spacing: 3px;
}
.profile-info h3 {
  margin: 10px 0;
  font-size: 1.5rem;
  color: #222;
}
.profile-info p {
  line-height: 140%;
  color: #777;
}
</style>