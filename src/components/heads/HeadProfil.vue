<template>
  <div class="pt-1 pb-3" id="profil">
    <div class="card-my">
      <div class="card-my-head">
        <div class="card-my-title">
          <div class="card-my-title">
            <div class="card-my--title-1">Profil</div>
            <div class="card-my--title-2">sesuaikan penampilanmu sesuka hatimu</div>
          </div>
        </div>
      </div>
      <div class="card-my-main">
        <div v-if="thisUser">
          <div class="ktm-card-my">
            <div class="ktm-card-my--head">
              <div class="ktm-card-my--head-left">
                <ums-logo/>
              </div>
              <div class="ktm-card-my--head-right">
                <div class="ktm-card-my--head-right-text-1">Universitas Muhammadiyah Surakarta</div>
                <div class="ktm-card-my--head-right-text-2">Kartu Tanda {{ thisUser.user.userLevel }}</div>
                <div class="ktm-card-my--head-right-text-3">Jl. A. Yani Tromol Pos l Pabelan Kartasura Telp. (0271) 717417, 719483</div>
                <div class="ktm-card-my--head-right-text-3">Fax. (0271) 715448 Surakarta 57162</div>
              </div>
            </div>
            <div v-if="thisUser" class="ktm-card-my--main">
              <!-- bind bg  -->
              <div class="ktm-card-my--main-photo" :class="thisUser.profile.background">
                <div class="ktm-card-my--main-photo-icon">
                  <img :src="thisUser.profile.url">
                </div>
              </div>
              <div class="ktm-card-my--main-data">
                <div>
                  <div class="ktm-card-my--main-data--label">Nama</div>
                  <div 
                    class="ktm-card-my--main-data--value" 
                  >
                    {{thisUser.user.userName}}
                  </div>
                </div>
                <div>
                  <div class="ktm-card-my--main-data--label">Nomor Induk Mahasiswa / NIM</div>
                  <div 
                    class="ktm-card-my--main-data--value"
                  >
                    {{thisUser.user.userNIM}}
                  </div>
                </div>
                <div>
                  <div class="ktm-card-my--main-data--label">Program Studi</div>
                  <div 
                    class="ktm-card-my--main-data--value"
                  >
                    {{thisUser.user.userProdi}}
                  </div>
                </div>
                <div class="ktm-card-my--main-data--bot">
                  <div class="ktm-card-my--main-data--bot-left"></div>
                  <div class="ktm-card-my--main-data--bot-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-my-foot">
        <div>
          <RouterLink to="/profil">
            <div class="button-my glow primary-glow">Tampilkan Lebih</div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '../../firebase/firebase'
import UmsLogo from '../icons/UmsLogo.vue';

const { thisUser } = useAuth()

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';


.ktm-card-my {
  display: inline-flex;
  flex-direction: column;
  border-radius: .75rem;
  background: $white;
  transition: all .25s ease;
  box-shadow: 0 5px 20px -10px rgba($dark,.3);
  &:hover {
    box-shadow: 0 0 0 rgba(0,0,0,0);
    transform: translateY(5px);
  }
  
  &--head {
    display: flex;
    justify-content: space-between;
    min-height: 2rem;
    width: 100%;
    padding: .25rem 1.5rem;
    padding-bottom: 0;
    background: rgb(38, 84, 135);
    border-top-left-radius: .75rem;
    border-top-right-radius: .75rem;
    border-bottom: 3px solid $danger;

    &-left, &-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $white;
    }

    &-left svg {
      width: 4rem;
      height: 4rem;
    }
    &-right {
      max-width: 350px;
      &-text-1, &-text-2 {
        font-size: 1rem;
        text-transform: uppercase;
        text-align: center;
      }
      &-text-2 {
        color: $warning;
        font-size: 1.3rem;
        line-height: 1.5rem;
        font-weight: bold;
      }
      &-text-3 {
        font-size: .7rem;
        text-align: center;
      }
    }
  }

  &--main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    min-height: 4rem;
    width: 100%;
    padding: .75rem;
    gap: .75rem;
    background: $white;
    color: $black;
    border-bottom-left-radius: .75rem;
    border-bottom-right-radius: .75rem;

    &-photo {
      display: flex;
      align-self: center;
      &-icon {
        display: flex;
        min-width: 8rem;
        min-height: 8rem;
        max-width: 8rem;
        max-height: 8rem;
        overflow: hidden;
        img {
          display: flex;
          margin: auto;
          margin-bottom: 0;
          height: 90%;
        }
      }
    }
    &-data {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: .25rem;
      &--label {
        width: 100%;
        font-size: .7rem;
        border-bottom: 1px solid $black;
      }
      &--value {
        width: 100%;
        padding: .25rem;
        font-size: 1rem;
        line-height: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        border: 2px solid transparent;
      }
      &--bot {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 2rem;
        width: 100%;
      }
    }
  }
}
</style>