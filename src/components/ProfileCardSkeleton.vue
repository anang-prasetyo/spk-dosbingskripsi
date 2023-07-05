<template>
  <div class="profile-card">
    <div class="profile-image">
      <img />
    </div>
    <div class="profile-info">
      <span></span>
      <h3></h3>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-image img {
  width: 100%;
  padding-top: 90%;
  background: #fff;
}
.profile-info span {
  width: 100px;
  height: 24px;
  margin: 0 0 1rem 0;
  display: block;
  background: #fff;
  border-radius: 5px;
}
.profile-info h3 {
  width: 250px;
  height: 32px;
  background: #fff;
  border-radius: 5px;
}
.profile-info p {
  width: 80%;
  height: 24px;
  background: #fff;
  border-radius: 5px;
}
</style>