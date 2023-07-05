<template>
  <div class="">
    <div class="top">
      <div class="fixed-top">
        <div class="flex">
          <avatar-nick-name
            :nickGC="nickGC"
            :class="gender === 'Perempuan' ? ' avatar-nn-female' : ' avatar-nn-male'" 
          />
          <div class="text">
            <div v-if="gender === 'Perempuan'" class="text--sender">Bu {{namaDosen}}</div>
            <div v-else-if="gender === 'Laki-laki'" class="text--sender">Pak {{namaDosen}}</div>
            <div v-if="newParticipants.participants" class="text--participants">
              <div class="items">
                <div v-for="part in newParticipants.participants" :key="part.id" class="item">{{part.userName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, computed } from 'vue';
const AvatarNickName = defineAsyncComponent(() => import('../avatars/AvatarNickName.vue'))

const props = defineProps ({
  nickGC: {
    type: String,
    required: false
  },
  namaDosen: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  participants: Object
})
const newParticipants = computed(() => props.participants)
// const participantsOnly = ref([])
// const sortArr = () => {
//   newParticipants.value.participants.sort(function(a, b) {
//     if(a.userName < b.userName) { return -1; }
//     if(a.userName > b.userName) { return 1; }
//     return 0;
//   });
//   participantsOnly.value = newParticipants.value.participants
// }
// onMounted(() => {sortArr()})


</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

.top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background: $white;
  box-shadow: 2px 2px 10px rgba($dark, .04);
}
.fixed-top {
  padding: 1rem 20% 1rem 41%;
  width: 100%;
}
.flex {
  display: flex;
  gap: 1rem;
  overflow: hidden;
}
.text {
  display: flex;
  margin: auto 0;
  flex-direction: column;
  &--sender, &--participants {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  &--sender {
    text-transform: capitalize;
  }
  &--participants {
    .items{
      display: flex;
      .item{
        font-size: .75rem;
        white-space: nowrap;
        &::after {
          content: ',\00a0';
        }
        &:last-child::after{
          content: '';
        }
      }
    }
  }
}
</style>
