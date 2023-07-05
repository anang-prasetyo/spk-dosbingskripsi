<template>
  <div class="contact">
    <div class="avatar-nn avatar-nn-md avatar-nn-round" :class="gender === 'Perempuan' ? ' avatar-nn-female' : ' avatar-nn-male'">
      <div class="avatar-nn-text avatar-nn-text-lg">{{nick}}</div>
    </div>
    <div class="pesan">
      <div class="pesan-top">
        <div v-if="gender === 'Perempuan'" class="pesan-user">Bu {{sender}}</div>
        <div v-else-if="gender === 'Laki-laki'" class="pesan-user">Pak {{sender}}</div>
        <div class="pesan-jam">{{jam}}</div>
      </div>
      <div class="pesan-bot">
        <div class="pesan-status">{{latest}}</div>
        <div v-if="(date === String((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()))" class="dot danger"></div>
      </div>
      <div class="batas"></div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  nick: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  latest: {
    type: String,
    required: false
  },
  gender: { type: String},
  jam: { type: String},
  date: { type: String}
})

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.contact {
  display: flex;
  gap: 1rem;
  padding: .5rem .5rem .5rem 1rem;
  background: rgba($white, 1);
  min-height: 79.39px;
  &:hover {
    background: rgba($white, .7);
    cursor: pointer;
  }
}
.batas {
  border-bottom: 1px solid $grey-lighter;
  margin-bottom: -.5rem;
  padding-top: .8rem;
}
.pesan {
  margin: auto 0;
  width: 100%;
  min-height: 63.39px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &-top, &-bot {
    display: flex;
    flex-direction: row;
    gap: .5rem;
    align-items: baseline;
    justify-content: inherit;
  }
  &-jam {
    font-size: .75rem;
  }
  &-user, &-status {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
  &-user {
    font-size: .9rem;
    text-transform: capitalize;
    -webkit-line-clamp: 1;
  }
  &-status {
    font-size: .75rem;
    -webkit-line-clamp: 2;
  }
}
</style>