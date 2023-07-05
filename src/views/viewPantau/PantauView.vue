<template>
  <div class="base">
    <!-- <loading-component v-if="loading" :light-mode="lightMode" /> -->
    <div class="content-my">
      <div class="content-my--head" :class="lightMode ? 'light-mode-glass' : 'dark-mode-glass'">
        <div class="content-my--head-value text-125 text-semi-bold">Pantau</div>
        <div id="icon-menu" style="display: flex;">
          <menu-icon @toggleMenu="handleToggleMenu" :light-mode="lightMode" @click="$emit('toggleMenu', isMenu)"/>
        </div>
      </div>
      <div class="content-my--main">
        <div class="card-bubble-my" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
          <Transition name="slide">
            <div id="info" v-if="el1">                
              <div class="hover-u-primary mb-4 curzr-hover text-15 text-regular" style="display: inline-flex;">Apa itu pantau?</div>
              <div class="paragraph" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">
                <p>Menu pantau merupakan menu yang digunakan untuk memantau kuota bimbingan skripsi. Setiap dosen pembimbing skripsi masing-masing memiliki batasan kuota bimbingan skripsinya. Di prodi Informatika umumnya hanya bisa membimbing sampai 7 mahasiswa.</p>
                <p>Kerap kali ketika tiba saatnya mengambil mata kuliah skripsi / tugas akhir, kita tidak tahu ketersediaan kuota skripsi dari masing-masing dosbing skripsi. Tak jarang kita harus bertanya secara langsung atau melalui media sosial, tetapi kini kamu bisa memantau secara real time kuota bimbingan skripsi. Sehingga kamu bisa mengatur rencana sebelum menentukan dosen pembimbing skripsi.</p>
              </div>
            </div>
          </Transition>
          <Transition name="slide">
            <div id="pantau-alternatif" v-if="el2">
              <div class="hover-u-primary mb-5 curzr-hover text-15 text-regular" style="display: inline-flex;">Real time kuota bimbingan skripsi</div>
              <div class="alert-my alert-primary mb-5 text-semi-bold-2" :class="!lightMode ? 'dark-primary-text' : 'primary-text'">Catatan : Jumlah yang ditampilkan mungkin saja tidak akurat, sebaiknya tanyakan secara langsung atau lewat pesan untuk memastikan informasi yang valid.</div>
              <div v-if="thisUser" class="columns alternatif">
                <div 
                  class="column is-3 alt" 
                  v-for="alt in alternatif" 
                  :key="alt.idAlternatif"
                >
                  <div class="alt-main" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                    <div>{{alt.namaDosen.namaDepan + ' ' + alt.namaDosen.namaBelakang}}<span v-if="alt.isVerify" class="dot-verify" data-tooltip="Diverifikasi" data-tooltip-location="left"></span></div>
                    <div class="my-3 text-medium text-125">{{alt.skripsi.kuota.terpakai + ' / ' + alt.skripsi.kuota.total}}</div>
                    <div 
                      class="label-my mt-5" 
                      :class="([(alt.skripsi.kuota.total - alt.skripsi.kuota.terpakai) > 3 ? 'success-light' : alt.skripsi.kuota.total == alt.skripsi.kuota.terpakai ? 'danger-light' :  'warning-light'])"
                    >
                      <div v-if="(alt.skripsi.kuota.total - alt.skripsi.kuota.terpakai) > 3" class="text-semi-bold-2">Tersedia</div>
                      <div v-else-if="alt.skripsi.kuota.total == alt.skripsi.kuota.terpakai || alt.skripsi.kuota.total < alt.skripsi.kuota.terpakai" class="text-semi-bold-2">Penuh</div>
                      <div v-else-if="3 < (alt.skripsi.kuota.total - alt.skripsi.kuota.terpakai) < 1" class="text-semi-bold-2">Hampir Penuh</div>
                    </div>
                    <!-- <div class="mt-5">
                      <stack-button 
                        v-if="(alt.skripsi.kuota.total - alt.skripsi.kuota.terpakai) > 3" 
                        class="my-3" 
                        :msg1="'Tersedia'" 
                        :msg2="'Detail'"
                        :background1="'success-light'" 
                        :background2="lightMode ? 'success' : 'dark-success'"
                      />
                      <stack-button 
                        v-else-if="alt.skripsi.kuota.total == alt.skripsi.kuota.terpakai || alt.skripsi.kuota.total < alt.skripsi.kuota.terpakai" 
                        class="my-3" 
                        :msg1="'Penuh'" 
                        :msg2="'Detail'"
                        :background1="'danger-light'" 
                        :background2="lightMode ? 'danger' : 'dark-danger'"
                      />
                      <stack-button 
                        v-else-if="3 < (alt.skripsi.kuota.total - alt.skripsi.kuota.terpakai) < 1" 
                        class="my-3" 
                        :msg1="'Hampir Penuh'" 
                        :msg2="'Detail'"
                        :background1="'warning-light'" 
                        :background2="lightMode ? 'warning' : 'dark-warning'"
                      />
                    </div> -->
                  </div>
                </div>
                <div class="column"></div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
    <Transition name="slide">
      <footer-component v-if="el3" :lightMode="lightMode" class="foo-right-mobile"/>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, defineAsyncComponent, ref } from 'vue';
import {useDatabase} from '../../services/DataService';
import { useMyFunc } from '../../services/OtherFunctions'
// import LoadingComponent from '../../components/LoadingComponent.vue';
import { useAuth } from '../../firebase/firebase';
// import StackButton from '../../components/buttons/StackButton.vue';

const FooterComponent = defineAsyncComponent(() => import('../../components/FooterComponent.vue'))
const MenuIcon = defineAsyncComponent(() => import('../../components/icons/MenuIcon.vue'))

defineProps({
  lightMode: Boolean
})

const { el1, el2, el3, delay } = useMyFunc()

const { alternatif } = useDatabase()
const { thisUser } = useAuth()

const loading = ref(null)

const isMenu = ref(null)
const handleToggleMenu = async(a) => {
  isMenu.value = a
}

onMounted(async() => {
  loading.value = true
  await delay(100)
  el3.value = true
  await delay(100)
  el2.value = true
  await delay(100)
  el1.value = true
  await delay(100)
  loading.value = false
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';

.dot-verify {
  min-width: 8px;
  min-height: 8px;
  background: deepskyblue;
  display: flex;
  position: absolute;
  top: 7%;
  right: 7%;
  border-radius: 1rem;
}
.label-my {
  display: flex;
  width: 100%;
  border-radius: .75rem;
  padding: .5rem 1rem;
  font-weight: 500;
  cursor: default;
  justify-content: center;
  font-size: .8rem;
}
.alternatif {
  flex-flow: wrap;
  justify-content: space-between;
  .alt {
    padding: .5rem;
    &-main {
      display: inline-flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      border-radius: 1rem;
      padding: 1rem;
      position: relative;
      transition: all .5s ease;
      img {
        height: 3rem;
        width: 3rem;
        border-radius: .75rem;
      }
    }
  }
}

</style>
