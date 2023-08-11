<template>
  <div v-if="thisUser">
    <div v-if="thisUser.user.userLevel === 'Mahasiswa'" class="">
      <div>
        <div id="layout-right-title" class="typography-callout" style="overflow-wrap: anywhere; margin: 1rem;">Pemberitahuan</div>
        <div id="layout-right-title-mobile" class="typography-callout mb-4" style="display: inline-flex;">Pemberitahuan</div>
        <div class="progres" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
          <div class="progres-list">
            <information-icon class="info-text" />
            <div style="overflow-wrap: anywhere;">{{ thisUser.progres.notifLog }}</div>
          </div>
        </div>
      </div>
      <div>
        <div id="layout-right-title" class="typography-callout" style="margin: 1rem;">Progres</div>
        <div id="layout-right-title-mobile" class="typography-callout mt-5 mb-4" style="display: inline-flex;">Progres</div>
        <div class="progres" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
          <div class="progres-list" :style="lightMode ? 'border-bottom: 1px solid rgba(0,0,0,.05);' : 'border-bottom: 1px solid rgba(255,255,255,.1);'">
            <tick-circle class="success-text" />
            <div style="overflow-wrap: anywhere;">Mulai</div>
          </div>
          <div class="progres-list" :style="lightMode ? 'border-bottom: 1px solid rgba(0,0,0,.05);' : 'border-bottom: 1px solid rgba(255,255,255,.1);'">
            <tick-circle :class="thisUser.progres.isRegistrasi === true ? 'success-text': 'typography-semu-light'" />
            <div 
              :class="[
                lightMode && thisUser.progres.isRegistrasi === true ? 'light-mode-color' : 
                !lightMode && thisUser.progres.isRegistrasi === true ? 'dark-mode-color' : 
                lightMode ? 'typography-semu-light' : 
                'typography-semu-dark'
                ]" 
              style="overflow-wrap: anywhere;"
            >Registrasi Akun</div>
          </div>
          <div class="progres-list" :style="lightMode ? 'border-bottom: 1px solid rgba(0,0,0,.05);' : 'border-bottom: 1px solid rgba(255,255,255,.1);'">
            <tick-circle :class="thisUser.progres.isHitungSaw === true ? 'success-text': 'typography-semu-light'" />
            <div 
              :class="[
                lightMode && thisUser.progres.isHitungSaw === true ? 'light-mode-color' : 
                !lightMode && thisUser.progres.isHitungSaw === true ? 'dark-mode-color' : 
                lightMode ? 'typography-semu-light' : 
                'typography-semu-dark'
                ]" 
              style="overflow-wrap: anywhere;"
            >Menghitung SAW</div>
          </div>
          <div class="progres-list" :style="lightMode ? 'border-bottom: 1px solid rgba(0,0,0,.05);' : 'border-bottom: 1px solid rgba(255,255,255,.1);'">
            <tick-circle :class="thisUser.progres.isJudulDeskripsi === true ? 'success-text': 'typography-semu-light'" />
            <div 
              :class="[
                lightMode && thisUser.progres.isJudulDeskripsi === true ? 'light-mode-color' : 
                !lightMode && thisUser.progres.isJudulDeskripsi === true ? 'dark-mode-color' : 
                lightMode ? 'typography-semu-light' : 
                'typography-semu-dark'
                ]" 
              style="overflow-wrap: anywhere;"
            >Mengisi Judul dan Deskripsi Skripsi</div>
          </div>
          <div class="progres-list" :style="lightMode ? 'border-bottom: 1px solid rgba(0,0,0,.05);' : 'border-bottom: 1px solid rgba(255,255,255,.1);'">
            <tick-circle :class="thisUser.progres.isDosbing === true ? 'success-text': 'typography-semu-light'" />
            <div 
              :class="[
                lightMode && thisUser.progres.isDosbing === true ? 'light-mode-color' : 
                !lightMode && thisUser.progres.isDosbing === true ? 'dark-mode-color' : 
                lightMode ? 'typography-semu-light' : 
                'typography-semu-dark'
                ]" 
              style="overflow-wrap: anywhere;"
            >Mendapat Dosen Pembimbing Skripsi</div>
          </div>
          <div class="progres-list">
            <tick-circle :class="thisUser.progres.isRegistrasi === true && thisUser.progres.isHitungSaw === true && thisUser.progres.isJudulDeskripsi === true && thisUser.progres.isDosbing === true ? 'success-text': 'typography-semu-light'" />
            <div 
              :class="[
                lightMode && thisUser.progres.isRegistrasi === true && thisUser.progres.isHitungSaw === true && thisUser.progres.isJudulDeskripsi === true && thisUser.progres.isDosbing === true ? 'light-mode-color' : 
                !lightMode && thisUser.progres.isRegistrasi === true && thisUser.progres.isHitungSaw === true && thisUser.progres.isJudulDeskripsi === true && thisUser.progres.isDosbing === true ? 'dark-mode-color' : 
                lightMode ? 'typography-semu-light' : 
                'typography-semu-dark'
                ]" 
              style="overflow-wrap: anywhere;"
            >Selesai</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="thisUser.user.userLevel === 'Dosen'" class="">
      <div id="layout-right-title" class="typography-callout my-4" style="overflow-wrap: anywhere; margin: 1rem;">Pemberitahuan</div>
      <div id="layout-right-title-mobile" class="hover-u-primary mb-4 curzr-hover text-125 text-semi-bold" style="display: inline-flex;">Pemberitahuan</div>
      <div v-if="afterChat" class="progres" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
        <a>
        <!-- <a href="/pesan" @click.prevent="$router.replace('/pesan')"> -->
          <div class="progres-list" 
          :class="lightMode ? 'light-mode-color' : 'dark-mode-color'" :style="lightMode ? 'border-bottom: 1px solid rgba(0,0,0,.05);' : 'border-bottom: 1px solid rgba(255,255,255,.1);'">
            <div class="dot" :class="thisChat[0].messagesUnreadDosen !== 0 ? 'danger' : 'success'">{{thisChat[0].messagesUnreadDosen}}</div>
            <div>Pesan baru</div>
          </div>
          <div class="progres-list" 
          :class="lightMode ? 'light-mode-color' : 'dark-mode-color'" :style="lightMode ? 'border-bottom: 1px solid rgba(0,0,0,.05);' : 'border-bottom: 1px solid rgba(255,255,255,.1);'">
            <div class="dot" :class="thisChat[0].applicationsTotal !== 0 ? 'danger' : 'success'">{{thisChat[0].applicationsTotal}}</div>
            <div>Ajuan bimbingan skripsi</div>
          </div>
        </a>
        <a>
        <!-- <a href="/profil" @click.prevent="$router.replace('/profil')"> -->
          <div class="progres-list" 
          :class="lightMode ? 'light-mode-color' : 'dark-mode-color'" :style="lightMode ? 'border-bottom: 1px solid rgba(0,0,0,.05);' : 'border-bottom: 1px solid rgba(255,255,255,.1);'">
            <div class="dot" :class="thisChat[0].applicationsAccept.length !== 0 ? 'danger' : 'success'">{{thisChat[0].applicationsAccept.length}}</div>
            <div>Bimbingan skripsi</div>
          </div>
        </a>
      </div>
    </div>
    <div v-else-if="thisUser.user.userLevel === 'Admin'" class="">
      <div id="layout-right-title" class="typography-callout my-4" style="overflow-wrap: anywhere; margin: 1rem;">Pemberitahuan</div>
      <div id="layout-right-title-mobile" class="hover-u-primary mb-4 curzr-hover text-125 text-semi-bold" style="display: inline-flex;">Pemberitahuan</div>
      <div class="progres" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
        <a>
        <!-- <a href="/kriteria" @click.prevent="$router.replace('/kriteria')"> -->
          <div class="progres-list" 
          :class="lightMode ? 'light-mode-color' : 'dark-mode-color'" :style="lightMode ? 'border-bottom: 1px solid rgba(0,0,0,.05);' : 'border-bottom: 1px solid rgba(255,255,255,.1);'">
            <div class="dot danger">{{ kriteria.length }}</div>
            <div>Jumlah kriteria</div>
          </div>
        </a>
        <a>
        <!-- <a href="/alternatif" @click.prevent="$router.replace('/alternatif')"> -->
          <div class="progres-list" 
          :class="lightMode ? 'light-mode-color' : 'dark-mode-color'">
            <div class="dot danger">{{ alternatif.length }}</div>
            <div>Jumlah alternatif</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "../firebase/firebase";
import { useDatabase } from "../services/DataService";
import TickCircle from "../components/icons/TickCircle.vue";
import InformationIcon from "../components/icons/InformationIcon.vue";

const { thisChat, afterChat, kriteria, alternatif } = useDatabase()
const {thisUser} = useAuth()

defineProps({
  lightMode: Boolean
})

</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';
@import '../sass/my-texts.scss';

.progres {
  display: flex;
  flex-direction: column;
  transition: all .5s ease;
  // background: white;
  border-radius: 1rem;
  &-list{
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem;
    cursor: default;
    &:last-child {
      border-bottom: 0px;
    }
    svg {
      min-width: 24px;
      max-width: 24px;
    }
  }
}
.border-left {
  &-success, &-dark {
    display: flex;
    height: 1rem;
    transition: all .5s ease;
  }
  &-success {
    border-left: 2px solid $success;
  }
  &-dark {
    border-left: 2px dotted $dark;
  }
}

</style>