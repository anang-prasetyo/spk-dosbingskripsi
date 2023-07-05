<template>
  <div class="base">
    <!-- <loading-component v-if="loading" :light-mode="lightMode" /> -->
    <div class="content-my">
      <div class="content-my--head" :class="lightMode ? 'light-mode-glass' : 'dark-mode-glass'">
        <div class="content-my--head-value text-125 text-semi-bold">Panduan</div>
        <div id="icon-menu" style="display: flex;">
          <menu-icon @toggleMenu="handleToggleMenu" :light-mode="lightMode" @click="$emit('toggleMenu', isMenu)"/>
        </div>
      </div>
      <div class="content-my--main">
        <div class="card-bubble-my" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
          
          <Transition name="slide">
            <div v-if="el1">
              <div class="hover-u-primary mb-4 curzr-hover text-15 text-regular" style="display: inline-flex;">Bagaimana cara</div>
              <div>
                <div class="columns tutor p-0">
                  <div v-for="t,i in tutor" :key="i" class="column is-6 p-0">
                    <a href="#tutorial" style="color: currentColor; cursor: default;">
                      <div 
                        class="tutor-items" 
                        :class="lightMode ? 'tutor-items-light' : 'tutor-items-dark'" 
                        :style="
                          activeTutor === i && lightMode ? 'background: var(--light-bg3);' : 
                          activeTutor === i && !lightMode ? 'background: var(--dark-bg3);' : 
                          lightMode ? 'background: var(--light-bg);' : 
                          'background: var(--dark-shades1);'" 
                        @click="selectTutor.nama = t.nama, selectTutor.link = t.link, activeTutor = i"
                      >
                        <div style="text-transform: capitalize;">{{ t.nama }}</div>
                        <div class="tutor-items-bot mt-3">
                          <div class="text-075" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">{{ t.step }} langkah</div>
                          <div class="tutor-items-bot-icons">
                            <div v-for="ic, j in t.icon" :key="j" class="tutor-items-bot-icon">
                              <component :is="ic" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div id="tutorial"></div>
              </div>
              <div v-if="thisUser">
                <div v-if="thisUser.user.userLevel === 'Dosen'">
                  <p class="text-semi-bold mb-4 mt-6">Khusus untuk Dosen</p>
                  <div class="columns tutor p-0">
                    <div v-for="t,i in tutorDosen" :key="i" class="column is-6 p-0">
                      <a href="#tutorial" style="color: currentColor; cursor: default;">
                        <div 
                          class="tutor-items" 
                          :class="lightMode ? 'tutor-items-light' : 'tutor-items-dark'" 
                          :style="
                            activeTutor === i && lightMode ? 'background: var(--light-bg3);' : 
                            activeTutor === i && !lightMode ? 'background: var(--dark-bg3);' : 
                            lightMode ? 'background: var(--light-bg);' : 
                            'background: var(--dark-bg);'" 
                          @click="selectTutor.nama = t.nama, selectTutor.link = t.link, activeTutor = i"
                        >
                          <div style="text-transform: capitalize;">{{ t.nama }}</div>
                          <div class="tutor-items-bot mt-3">
                            <div class="text-075 light-mode-color2">{{ t.step }} langkah</div>
                            <div class="tutor-items-bot-icons">
                              <div v-for="ic, j in t.icon" :key="j" class="tutor-items-bot-icon">
                                <component :is="ic" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tutorial"></div>
            </div>
          </Transition>
          <Transition name="slide">
            <div v-if="el2">
              <div>
                <div class="hover-u-primary mb-4 curzr-hover text-15 text-regular" style="display: inline-flex;">Tutorial</div>
                <div v-if="selectTutor.nama !== ''">
                  <p class="mb-2" style="text-transform: capitalize;">{{ selectTutor.nama }}.</p>
                  <iframe :src="'https://scribehow.com/embed/'+selectTutor.link" height="440" allowfullscreen frameborder="0" style="border-radius: 1rem; width: 100%;"></iframe>
                </div>
                <div v-else>
                  <p class="mt-4 mb-2">Pilih salah satu tutorial untuk melihat detail.</p>
                  <div class="tutor-skeleton" :class="lightMode ? 'light-mode-bg3' : 'dark-mode-shades1'">
                    Detail akan ditampilkan disini.
                  </div>
                </div>
              </div>
            </div>
          </Transition>
          <Transition name="slide">
            <div v-if="el3">
              <div class="hover-u-primary mb-4 curzr-hover text-15 text-regular" style="display: inline-flex;">Mungkin kamu belum tahu jika</div>
              <div class="tahu">
                <div v-for="t, i in tahu" :key="i" class="paragraph">
                  <p>{{ t.title }}</p>
                  <p :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">{{ t.desc }}</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
    <Transition name="slide">
      <footer-component v-if="el4" :lightMode="lightMode" class="foo-right-mobile"/>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue';
import MenuIcon from '../components/icons/MenuIcon.vue';
// import LoadingComponent from '../components/LoadingComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'
import { useMyFunc } from '../services/OtherFunctions'
import { useAuth } from '../firebase/firebase';

defineProps({
  lightMode: Boolean
})

const { el1, el2, el3, el4, delay } = useMyFunc()
const { thisUser } = useAuth()

const HomeIcon = defineAsyncComponent(() => import('../components/icons/HomeIcon.vue'))
// const StatusUpIcon = defineAsyncComponent(() => import('../components/icons/StatusUpIcon.vue'))
const ChartSuccessIcon = defineAsyncComponent(() => import('../components/icons/ChartSuccessIcon.vue'))
const MessagesIcon = defineAsyncComponent(() => import('../components/icons/MessagesIcon.vue'))
const RankingIcon = defineAsyncComponent(() => import('../components/icons/RankingIcon.vue'))
// const MessageQuestionIcon = defineAsyncComponent(() => import('../components/icons/MessageQuestionIcon.vue'))
const ProfileIcon = defineAsyncComponent(() => import('../components/icons/ProfileIcon.vue'))
// const AirDropIcon = defineAsyncComponent(() => import('../components/icons/AirDropIcon.vue'))

const isMenu = ref(null)
const handleToggleMenu = async(a) => {
  isMenu.value = a
}
const loading = ref(null)
const activeTutor = ref(null)
const selectTutor = ref({
  nama: '',
  link: ''
})
const tutor = ref([
  {
    nama : 'melakukan pencarian ulang rekomendasi dosen pembimbing skripsi',
    link: 'Melakukan_Pencarian_Ulang_Rekomendasi_Dosbing_Skripsi__h5MT_lcsT42TucPAPgkQYQ',
    step: 15,
    icon: [HomeIcon,RankingIcon]
  },
  {
    nama : 'melihat detail perhitungan pencarian rekomendasi dosen pembimbing skripsi',
    link: 'Melihat_detail_perhitungan_pencarian_rekomendasi_dosbing_skripsi__-mmbhh78QfiJae4hlycenA',
    step: 12,
    icon: [HomeIcon,RankingIcon]
  },
  {
    nama : 'menampilkan sub kriteria',
    link: 'Menampilkan_Sub_Kriteria__UnhCm19jRRCNt-706dgOfA',
    step: 4,
    icon: [HomeIcon,ChartSuccessIcon]
  },
  {
    nama : 'mencari rekomendasi dosen pembimbing skripsi',
    link: 'Mencari_Rekomendasi_Dosen_Pembimbing_Skripsi__Gvlni8d_QFGXcWCSra_43g',
    step: 10,
    icon: [HomeIcon,RankingIcon]
  },
  {
    nama : 'mengedit profil',
    link: 'Mengedit_Profil__CTQS6cW7QaqhDVnOOEYnOg',
    step: 14,
    icon: [HomeIcon,ProfileIcon]
  },
  {
    nama : 'mengganti tema ke mode gelap atau ke mode terang',
    link: 'Mengganti_tema_ke_mode_gelap_atau_ke_mode_terang__zgxZiA_uRvepZn3ZVTuyQw',
    step: 4,
    icon: [HomeIcon]
  },
  {
    nama : 'menghitung saw',
    link: 'Menghitung_SAW__ppZNRAp1ToulgAEt9y2E-Q',
    step: 8,
    icon: [HomeIcon,RankingIcon]
  },
  {
    nama : 'mengirim pesan',
    link: 'Mengirim_Pesan__HB-EUbVIT6Ce6JLBOjiLRQ',
    step: 6,
    icon: [HomeIcon,MessagesIcon]
  },
  {
    nama : 'mengirim reservasi bimbingan skripsi',
    link: 'Mengirim_Reservasi_Bimbingan_Skripsi__n0Spj5JyQvKNj1E918eQmA',
    step: 12,
    icon: [HomeIcon,MessagesIcon]
  },
  {
    nama : 'mengisi judul dan deskripsi skripsi',
    link: 'Mengisi_Judul_dan_Deskripsi_Skripsi__6pttdf4cSEKXhxt73RQT4w',
    step: 17,
    icon: [HomeIcon,MessagesIcon]
  },
])
const tutorDosen = ref([
  {
    nama: 'Memvalidasi Ajuan Bimibingan Skripsi',
    link: 'Memvalidasi_Ajuan_Bimibingan_Skripsi__QB2N_7KRT3CUKYrVivulHQ',
    step: 6,
    icon: [MessagesIcon]
  },
  {
    nama: 'Menghapus Mahasiswa Dari Daftar Bimbingan Skripsi',
    link: 'Menghapus_Mahasiswa_Dari_Daftar_Bimbingan_Skripsi__48niQ_J9QnqGbHwzwG9lpg',
    step: 5,
    icon: [ProfileIcon]
  },
])
const tahu = ref([
  {
    title: 'Halaman Pesan "kadang" tidak bisa dibuka',
    desc: 'Hal ini bisa terjadi ketika kamu pertama kali membuka halaman Pesan, kemudian muncul pesan popup dan kamu dengan sangat cepat sekali langsung klik "Baik". Sebaiknya beri jeda beberapa detik sebelum menutup popup agar sistem dapat me-render halaman web dengan sempurna.'
  },
  {
    title: 'Ikon Hati berwarna ungu akan muncul pada suatu Grub Chat',
    desc: 'Ikon Hati berwarna ungu menandakan bahwa kamu pernah berpartisipasi/melakukan percakapan di Grub Chat tersebut. Ikon tersebut diharapkan akan lebih mempermudah kamu dalam mencari dan mengenali Grub Chat favoritmu.'
  },
  {
    title: 'Melakukan reload/refresh halaman, "kadang" muncul halaman Login',
    desc: 'Mungkin saja terjadi karena sistem perlu waktu untuk mengecek apakah user sudah login atau belum. jika muncul halaman Login padahal sebelumnya sudah login maka sistem akan menampilkan halaman terakhir yang dibuka user.'
  },
  {
    title: 'Melakukan reload/refresh halaman, loading lumayan lama',
    desc: 'Akan butuh waktu 6 detik untuk menampilkan konten halaman web setelah melakukan reload/refresh halaman.'
  },
  {
    title: 'Memilih dosen pembimbing skripsi tidak harus sesuai dengan rekomendasi sistem',
    desc: 'Karena di sini tugas dari sistem adalah hanya memberi rekomendasi bukan perintah, jadi keputusan akhhir menentukan dosen pembimbing skripsi kembali lagi kepada kamu.'
  },
  {
    title: 'Menghapus dokumen SAW adalah hal yang wajar',
    desc: 'Bahkan hal ini memang harus dilakukan ketika kamu ingin menghtiung ulang / mencari rekomendasi ulang. Karena setiap user hanya bisa memiliki 1 (satu) dokumen SAW. Jadi, jika kamu ingin menghitung ulang / mencari rekomendasi ulang silahkan klik "Ulangi Pencarian" lalu "Hapus Dokumen SAW" agar kamu dibuatkan dokumen SAW yang baru.'
  },
  {
    title: 'Sign Out tidak akan menghapus datamu',
    desc: 'Proses Sign Out hanya mengeluarkan akun kamu dari sistem dan tidak akan menghapus data-datamu. Ketika kamu Login dengan menggunakan akun yang sama maka semua data termasuk dokumen SAW akan ditampilkan seperti terakhir kali kamu melihatnya.'
  },
  {
    title: 'Tampilan web bisa saja berantakan',
    desc: 'Jika hal ini terjadi, coba lakukan penyesuaian tingkat "Zoom" pada halaman web browser. Atau coba ubah orientasi ke mode Landscape pada perangkat mobile.'
  },
  {
    title: 'Tutorial Scribe tidak bisa di "Klik" pada perangkat mobile',
    desc: 'Coba atur orientasi layar ke mode "Landscape" lalu klik "Get Started". Setelah itu kamu bisa mengembalikan orientasi layar ke mode "Potrait" biar enak bacanya. Hal ini mungkin terjadi karena dimensi layar yang terlalu kecil sehingga ada beberapa fitur yang tidak berjalan sempurna.'
  },
])

onMounted(async() => {
  loading.value = true
  await delay(100)
  el4.value = true
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
@import '../sass/my-styles.scss';
@import '../sass/my-texts.scss';

.tahu{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.tutor{
  flex-wrap: wrap;
  padding: 1rem;
  &-items {
    cursor: pointer;
    margin: 10px;
    padding: 1rem;
    border-radius: 10px;
    height: calc(100% - 20px);
    transition: all .5s ease;
    &-light{
      &:hover{
        background: var(--light-bg3) !important;
      }
    }
    &-dark{
      &:hover{
        background: var(--dark-bg3) !important;
      }
    }
    &-bot{
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-icons{
        display: flex;
        flex-direction: row-reverse;
      }
      &-icon{
        color: $primary;
        padding: 5px;
        border-radius: 3rem;
        max-width: 2rem;
        max-height: 2rem;
        display: flex;
        align-items: center;
        // &:hover{
        //   background: rgba($primary,.1);
        // }
      }
    }
  }
  &-skeleton {
    min-height: 440px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
  }
}
</style>