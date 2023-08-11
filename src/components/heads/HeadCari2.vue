<template>
  <div class="pt-1" id="cari">
    <div class="" :class="lightMode ? 'light-mode-bg light-mode-dialog-my' : 'dark-mode-bg dark-mode-dialog-my'">
      <!-- <div v-if="loading" class="loading">
        <VueSpinner size="30" color="	#5b3bc4" />
      </div> -->
      <div v-if="thisUser" class="py-5">
        <div class="close" :class="lightMode ? 'light-mode-bg' : 'dark-mode-layout'" @click="closeModal()"><add-icon style="transform: rotate(45deg);" /></div>
        <div>
          <div v-if="loading" style="margin: 6rem 0;">
            <loading-component :light-mode="lightMode" :msg="logMsg" />
          </div>

          <div v-else-if="step === 0 && thisUser.user.userLevel !== 'Mahasiswa'" class="content">
            <div class="px-5">
              <div class="text-semi-bold text-15 has-text-centered mb-5">Perhatian</div>
              <div class="paragraph has-text-centered" style="max-height: 50vh;overflow: auto;">
                <p>Fitur ini dikhususkan untuk Mahasiswa, tetapi anda tetap bisa mencobanya.</p>
              </div>
              <div class="mt-5">
                <div class="py-3 button-my glow primary-glow flex mb-2" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 2, to1(), to2()">Mengerti</div>
              </div>
            </div>
          </div>

          <div v-else-if="step == 0 && thisUser.user.userLevel === 'Mahasiswa'" class="content">
            <div class="px-5">
              <div class="text-semi-bold text-15 has-text-centered mb-5">Perhatian</div>
              <div class="paragraph" style="max-height: 50vh;overflow: auto;">
                <p>Akan ada <b>3</b> langkah dalam mencari rekomendasi dosen pembimbing skripsi yang sesuai minat kamu, yaitu : </p>
                <p><b>Pertama</b>, kamu harus mengisi judul dan deskripsi skripsi. <b>Kedua</b>, kamu harus memilih kriteria apa saja yang kamu perlukan. <b>Ketiga</b>, kamu akan diberikan rekomendasi dosen pembimbing skripsi, kamu bisa langsung menghubungi dosbing terkait setelah proses pencarian selesai.</p>
                <p>Apapun hasil yang kamu terima hanya sebatas rekomendasi, bukan suatu keharusan. Keputusan akhir menentukan dosen pembimbing skripsi kembali lagi kepada kamu.</p>
                <p><i>*kamu bisa melakukan pencarian lebih lanjut di menu SAW dengan pilihan kriteria yang lebih banyak dan bisa dikustomisasi!</i></p>
              </div>
              <div class="mt-5">
                <div class="py-3 button-my glow primary-glow flex mb-2" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 1, to1()">Mengerti</div>
              </div>
            </div>
          </div>

          <div v-else-if="step == 1 && apaSudahHitungSaw === 'belum'">
            <div v-if="editProfile">
              <div class="px-5">
                <span>1/3</span>
                <div class="text-semi-bold text-125">Detail Skripsi</div>
              </div>
              <div class="mt-3 mb-2 px-5 pb-4" style="max-height: 50vh;overflow: auto;">
                <div>
                  <div class="mb-2">Judul Skripsi</div>
                  <div v-if="editProfile.isSkripsi === true" class="input-my" :class="[lightMode ? 'light-mode-input-my' : 'dark-mode-input-my', thisUser.progres.isDosbing ? '' : 'border-bottom-primary']">
                    <input 
                      v-if="!thisUser.progres.isDosbing"
                      type="text"
                      class="input-my--input"
                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                      v-model="editProfile.skripsi.judul"
                      placeholder="Masukkan judul skripsi"
                    />
                    <input 
                      v-else
                      type="text"
                      class="input-my--input"
                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                      v-model="editProfile.skripsi.judul"
                      readonly
                    />
                  </div>
                  <div v-else class="input-my border-bottom-primary" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                    <input 
                      type="text"
                      class="input-my--input"
                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                      v-model="userSkripsi.judul"
                      placeholder="Masukkan judul skripsi"
                    />
                  </div>
                  <div v-if="thisUser.progres.isDosbing" class="label-my--alert">Judul Skripsi tidak bisa diubah karena kamu sudah mendapat dosen pembimbing skripsi</div>
                </div>
                <div>
                  <div class="mt-4 mb-2">Deskripsi</div>
                  <div v-if="editProfile.isSkripsi === true" class="textarea-my" :class="[lightMode ? 'light-mode-textarea-my' : 'dark-mode-textarea-my', thisUser.progres.isDosbing ? '' : 'border-bottom-primary']">
                    <textarea
                      v-if="!thisUser.progres.isDosbing"
                      class="textarea-my--input"
                      :class="lightMode ? 'light-mode-textarea-my--input' : 'dark-mode-textarea-my--input'"
                      v-model="editProfile.skripsi.deskripsi"
                      placeholder="Tulis deskripsi judul skripsi anda"
                    ></textarea>
                    <textarea
                      v-else
                      class="textarea-my--input"
                      :class="lightMode ? 'light-mode-textarea-my--input' : 'dark-mode-textarea-my--input'"
                      v-model="editProfile.skripsi.deskripsi"
                      readonly
                    ></textarea>
                  </div>
                  <div v-else class="textarea-my border-bottom-primary" :class="lightMode ? 'light-mode-textarea-my' : 'dark-mode-textarea-my'">
                    <textarea
                      class="textarea-my--input"
                      :class="lightMode ? 'light-mode-textarea-my--input' : 'dark-mode-textarea-my--input'"
                      v-model="userSkripsi.deskripsi"
                      placeholder="Tulis deskripsi judul skripsi anda"
                    ></textarea>
                  </div>
                  <div v-if="thisUser.progres.isDosbing" class="label-my--alert">Deskripsi Skripsi tidak bisa diubah karena kamu sudah mendapat dosen pembimbing skripsi</div>
                </div>
              </div>
              <div class="px-5">
                <div v-if="userSkripsi.judul !== '' && userSkripsi.deskripsi !== '' || editProfile.skripsi.judul && editProfile.skripsi.deskripsi" class="py-3 button-my glow primary-glow flex mb-2" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 2, to2()">Lanjut</div>
                <div v-else class="py-3 button-my primary flex disable">Lanjut</div>
              </div>
            </div>
          </div>

          <div v-else-if="step == 1 && apaSudahHitungSaw === 'sudah'">
            <div class="content">
              <div class="">
                <div class="px-5">
                  <div class="block has-text-centered">
                    <div class="text-15 text-semi-bold mb-5">Oops</div>
                    <p class="">Kamu sudah punya dokumen SAW, perlu diketahui bahwa setiap pengguna hanya bisa memiliki satu dokumen SAW. Hapus dokumen SAW dengan cara klik tombol <b>Ulangi Pencarian</b> untuk memulai pencarian baru.</p>
                    <p class=""><b>Lihat Hasil</b> jika kamu ingin melihat hasil pencarianmu sebelumnya. Atau jika ingin mengulangi proses pencarian dosen pembimbing skripsi, kamu bisa klik tombol <b>Ulangi Pencarian</b>.</p>
                  </div>
                </div>
                <div class="mt-6 px-5">
                  <div class="py-3 button-my glow primary-glow flex mb-2" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 3">Lihat Hasil</div>
                  <div class="button-my flex" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="ulangiSaw()">Ulangi Pencarian</div>
                </div>
              </div>
            </div>
          </div>
  
          <div v-else-if="step == 2 && apaSudahHitungSaw === 'belum'">
            <div class="px-5">
              <span v-if="thisUser.user.userLevel !== 'Mahasiswa'">1/2</span>
              <span v-else>2/3</span>
              <div style="display: flex;gap: .5rem;">
                <div class="text-semi-bold text-125">Kriteria Dosen</div>
                <!-- <div class="text-085">*3 kriteria teratas</div> -->
              </div>
            </div>
            <div class="mt-3 mb-2 px-5 pb-4" style="max-height: 50vh;overflow: auto;">
              <!-- <div v-for="(krt, index) in kriteriaPart1" :key="krt.idKriteria" class="full-w"> -->
              <div v-for="(krt, index) in kriteria" :key="krt.idKriteria" class="full-w">
                <div v-if="krt.subKriteria != ''">
                  <div class="my-2">{{krt.namaKriteria}}</div>
                  <div class="input-my flex" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                    <select-single
                      :lists-single="lists[index]"
                      :index-list="index"
                      :id-kriteria="krt.idKriteria"
                      :warna="'option-primary'"
                      :light-mode="lightMode"
                      @custom-change="handleCustomChanges"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="px-5">
              <div v-if="newSawName.length === 8 && editProfile.isSkripsi === true" class="py-3 button-my glow primary-glow flex mb-2" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 3, to3(), addUserSkripsi(editProfile.skripsi.judul, editProfile.skripsi.deskripsi)">Cari</div>
              <!-- <div v-if="newSawName.length === 3 && editProfile.isSkripsi === true" class="py-3 button-my glow primary-glow flex mb-2" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 3, to3(), addUserSkripsi(editProfile.skripsi.judul, editProfile.skripsi.deskripsi)">Cari</div> -->
              <div v-else-if="newSawName.length === 8" class="py-3 button-my glow primary-glow flex mb-2" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 3, to3(), addUserSkripsi(userSkripsi.judul, userSkripsi.deskripsi)">Cari</div>
              <!-- <div v-else-if="newSawName.length === 3" class="py-3 button-my glow primary-glow flex mb-2" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 3, to3(), addUserSkripsi(userSkripsi.judul, userSkripsi.deskripsi)">Cari</div> -->
              <div v-else class="py-3 button-my primary disable flex mb-2">Cari</div>
              <div v-if="thisUser.user.userLevel === 'Mahasiswa'" class="button-my flex" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="step = 1">Kembali</div>
            </div>
          </div>
  
          <div v-else-if="step == 3 && apaSudahHitungSaw === 'sudah'">
            <div class="mt-3 mb-5 px-5" style="max-height: 50vh;overflow: auto;">
              <div class="has-text-centered" style="display: flex; flex-direction: column; gap: 2rem;">
                <!-- <div class="my-3"><strong>Rangking Alternatif</strong></div> -->
                <div class="table-my" style="max-height: 25vh;">
                  <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-bg dark-mode-table'">
                    <thead>
                      <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'" style="position: sticky; top: 0;">
                        <td>No</td>
                        <td>Alternatif Dosbing Skripsi</td>
                        <td>Total Nilai</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(ra, index) in rangkingAlternatif" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>{{ ra.namaDosen }}</td>
                        <td>{{ (ra.total).toFixed(3) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="">
                  Kamu direkomendasikan memilih 
                  <span v-if="rangkingAlternatif[0].gender === 'Perempuan'" :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold">Bu {{ rangkingAlternatif[0].namaDosen }}</span>
                  <span v-else-if="rangkingAlternatif[0].gender === 'Laki-laki'" :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold">Pak {{ rangkingAlternatif[0].namaDosen }}</span> 
                  sebagai dosen pembimbing skripsi.
                </div>
                <div class="">Segera <b>Tanya Dosen</b>  apakah <span :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold" v-if="rangkingAlternatif[0].gender === 'Perempuan'">Bu {{ rangkingAlternatif[0].namaDosen }}</span><span :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold" v-else-if="rangkingAlternatif[0].gender === 'Laki-laki'">Pak {{ rangkingAlternatif[0].namaDosen }}</span> mau menjadi dosen pembimbing kamu. Klik tombol <b>Ulangi Pencarian</b> jika kamu ingin mengulangi proses pencarian dosen pembimbing skripsi. Klik tombol <b>Detail Perhitungan</b>  untuk melihat proses perhitungan secara detail.</div>
              </div>
            </div>
            <div class="px-5">
              <router-link to="/pesan" class="fixed-button--1">
                <div class="py-3 button-my glow primary-glow flex mb-2" :class="lightMode ? 'primary' : 'dark-primary'">Tanya Dosen</div>
              </router-link>
              <div class="button-my flex mb-2" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="ulangiSaw()">Ulangi Pencarian</div>
              <router-link to="/saw" class="fixed-button--1">
                <div class="button-my flex" :class="lightMode ? 'light-transparent' : 'dark-transparent'">Detail Perhitungan</div>
              </router-link>
            </div>
          </div>
  
          <div v-else-if="step == 3 && apaSudahHitungSaw === 'belum'">
            <div class="px-5">
              <span v-if="thisUser.user.userLevel !== 'Mahasiswa'">2/2</span>
              <span v-else>3/3</span>
              <div class="text-semi-bold text-125">Hasil</div>
            </div>
            <div class="mt-3 mb-2 px-5 pb-4" style="max-height: 50vh;overflow: auto;">
              <div v-if="rangkingAlternatif.length !== 0" class="block has-text-centered">
                <div class="text-semi-bold text-125 mb-4">Selamat!</div>
                <div class="paragraph">
                  <p>
                    Kamu direkomendasikan memilih 
                    <span v-if="rangkingAlternatif[0].gender === 'Perempuan'" :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold">Bu {{ rangkingAlternatif[0].namaDosen }}</span>
                    <span v-else-if="rangkingAlternatif[0].gender === 'Laki-laki'" :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold">Pak {{ rangkingAlternatif[0].namaDosen }}</span> 
                    sebagai dosen pembimbing skripsi.
                  </p>
                  <p>
                    Segera <b>Tanya Dosen</b>  apakah 
                    <span v-if="rangkingAlternatif[0].gender === 'Perempuan'" :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold">Bu {{ rangkingAlternatif[0].namaDosen }}</span>
                    <span v-else-if="rangkingAlternatif[0].gender === 'Laki-laki'" :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold">Pak {{ rangkingAlternatif[0].namaDosen }}</span> 
                    mau menjadi dosen pembimbing kamu. Klik tombol <b>Detail Perhitungan</b>  untuk melihat proses perhitungan secara detail. Klik tombol <b>Ulangi Pencarian</b> jika kamu ingin mengulangi proses pencarian dosen pembimbing skripsi.
                  </p>
                </div>
                <div class="mt-3">Rekomendasi lainnya :</div>
                <div style="max-height: 10vh;overflow: auto;">
                  <div v-for="(ra, index) in rangkingAlternatif" :key="index">{{(index+1)+'. '+ra.namaDosen}}</div>
                </div>
              </div>
            </div>
            <div class="px-5">
              <router-link to="/pesan" class="fixed-button--1">
                <div class="button-my glow primary-glow flex py-3" :class="lightMode ? 'primary' : 'dark-primary'">Tanya Dosen</div>
              </router-link>
              <router-link to="/saw" class="fixed-button--1">
                <div class="button-my flex my-1" :class="lightMode ? 'light-transparent' : 'dark-transparent'">Detail Perhitungan</div>
              </router-link>
              <div class="button-my flex" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="ulangiSaw()">Ulangi Pencarian</div>
            </div>
          </div>

          <div v-else style="margin: 6rem 0;">
            <loading-component :light-mode="lightMode" :msg="logMsg" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {defineAsyncComponent, ref} from 'vue';
import {useAuth} from '../../firebase/firebase'
import {useDatabase} from '../../services/DataService';
import { useSaw } from '../../services/DataServicesSaw';
import { useMyFunc } from '../../services/OtherFunctions';
import LoadingComponent from '../LoadingComponent.vue';
import swal from 'sweetalert'

defineProps({
  lightMode: Boolean
})

const { apaSudahHitungSaw, rangkingAlternatif, lists, getSubCollectionDocSaw, handleCustomChanges, deleteTempDataSaw, toEksekusiTahapan1, eksekusiTahapan2, newSawName, logMsg, kriteria } = useSaw()
const SelectSingle = defineAsyncComponent(() => import('../selects/SelectSingle.vue'))
const { userSkripsi, addUserSkripsi, editProfile, getUserData, thisUser } = useAuth()
const {  kriteriaPart1 } = useDatabase()
const {delay} = useMyFunc()
const AddIcon = defineAsyncComponent(() => import('../icons/AddIcon.vue'))

const step = ref(0)

// const lists1 = ref([
//       {name: 'C++'}, 
//       {name: 'C'}, 
//       {name: 'CSS'}, 
//       {name: 'Dart'}, 
//       {name: 'HTML'}, 
//       {name: 'Java'}, 
//       {name: 'JavaScript'}, 
//       {name: 'Kotlin'}, 
//       {name: 'Perl'}, 
//       {name: 'PHP'}, 
//       {name: 'Python'}, 
//       {name: 'Ruby'}, 
//       {name: 'SQL'}, 
//       {name: 'Swift'} 
//     ]),
//     selectList1 = ref([]),
//     lists2 = ref([
//       {name: 'Angular'}, 
//       {name: 'Bootstrap'}, 
//       {name: 'Bulma'}, 
//       {name: 'CodeIgniter'}, 
//       {name: 'jQuery'},
//       {name: 'Laravel'}, 
//       {name: 'Next'}, 
//       {name: 'React'}, 
//       {name: 'Ruby'}, 
//       {name: 'Svelte'}, 
//       {name: 'Vue'}
//     ]),
//     selectList2 = ref([]),
//     lists3 = ref([
//       {name: 'Company Profile'}, 
//       {name: 'Game Edukasi'}, 
//       {name: 'Machine Learning'},
//       {name: 'Sistem Cerdas'}, 
//       {name: 'Sistem Interaktif'}, 
//       {name: 'Sistem Informasi Edukasi'}, 
//       {name: 'Sistem Informasi Enterprise'}, 
//       {name: 'Sistem Pakar'}, 
//       {name: 'Toko Online'}, 
//       {name: 'Lainnya'}
//     ]),
//     selectList3 = ref([]),
//     // lists4 = ref([
//     //   {name: 'S2'}, 
//     //   {name: 'S3'}
//     // ]),
//     // lists5 = ref([
//     //   {name: 'Ketua Program Studi'}, 
//     //   {name: 'Sekretaris'}, 
//     //   {name: 'Kepala Laboratorium'}, 
//     //   {name: 'Dosen Program Studi'}
//     // ]),
//     // lists6 = ref([
//     //   {name: '26-30 tahun'}, 
//     //   {name: '31-35 tahun'}, 
//     //   {name: '36-40 tahun'}, 
//     //   {name: '41-45 tahun'}, 
//     //   {name: '46-50 tahun'}, 
//     //   {name: '50 tahun keatas'}
//     // ]),
//     // lists7 = ref([
//     //   {name: '1-5 mahasiswa'}, 
//     //   {name: '6-10 mahasiswa'}, 
//     //   {name: '11-15 mahasiswa'}, 
//     //   {name: '16-20 mahasiswa'}, 
//     //   {name: '20 mahasiswa lebih'}
//     // ]),
//     // lists8 = ref([
//     //   {name: 'Secara Langsung'}, 
//     //   {name: 'WhatsApp'}, 
//     //   {name: 'Telegram'}, 
//     //   {name: 'SMS'}, 
//     //   {name: 'Scoology'}
//     // ]),
//     // lists9 = ref([
//     //   {name: 'Jaringan Komputer'}, 
//     //   {name: 'Rekayasa Perangkat Lunak'}, 
//     //   {name: 'Sistem Informasi'}
//     // ]),
//     lists10 = ref([
//       {name: 'Firebase'}, 
//       {name: 'IMB Db2'}, 
//       {name: 'MariaDB'}, 
//       {name: 'Microsoft Access'}, 
//       {name: 'Microsoft SQL Server'}, 
//       {name: 'MongoDB'}, 
//       {name: 'MySQL'}, 
//       {name: 'Oracle Database'}, 
//       {name: 'PostgreSQL'}, 
//       {name: 'Tidak Pakai --'}
//     ]),
//     selectList10 = ref([])


// emit

const loading = ref(false)
const modal = ref(true)
const closeModal = () => {
  modal.value = false
  emit('isCloseModal', modal.value)
}
const emit = defineEmits({
  unvalidatedEvent: null, // if we want an event without validation
  isCloseModal: () => {
    return true
  },
})

const to1 = async() => {
  loading.value = true
  await getUserData()
  await delay(500)
  await getSubCollectionDocSaw()
  .then(() => loading.value = false)
}
const to2 = async() => {
  loading.value = true
  await toEksekusiTahapan1()
  .then(() => loading.value = false)
}
const to3 = async() => {
  step.value = 3
  console.log(step.value)
  loading.value = true
  await eksekusiTahapan2()
  .then(() => loading.value = false)
}
// const to0 = async() => {
//   loading.value = true
//   await deleteTempDataSaw()
//   .then(() => loading.value = false)
// }
const ulangiSaw = () => {
  swal({
    title: "Hitung ulang SAW?",
    text: "Dokumen SAW kamu saat ini akan dihapus dan akan dibuatkan dokumen yang baru.",
    buttons: ["Batal", "Hitung Ulang"],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      thisUser.value.user.userLevel === 'Mahasiswa' ?
      [step.value = 1,
      deleteTempDataSaw(),
      getUserData()] :
      [step.value = 2,
      deleteTempDataSaw(),
      getUserData()]
    }
  });
}
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';

.control span {
  margin: .5rem 0 .25rem 0;
  display: block;
  font-size: .9rem;
}
.fixed-button--1{
  width: 100%;
}

.loading{
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  border-radius: 1rem;
  justify-content: center;
  display: flex;
  align-items: center;
}
.light-mode, .dark-mode{
  &-dialog-my{
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    border-radius: 1rem;
    gap: 1rem;
    & .close{
      position: absolute;
      right: -5px;
      top: -5px;
      border-radius: 25%;
      width: 30px;
      height: 30px;
      justify-content: center;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all .25s ease;
      z-index: 5;
      &:hover{
        transform: translate(-2px,2px);
      }
    }
    & .judul{
      text-align: center;
    }
  }
}
.light-mode{
  &-dialog-my{
    & .close{
      background: white;
      box-shadow: 0 5px 20px -10px rgba($dark,.3);
      &:hover{
        box-shadow: 0 5px 20px -10px rgba($dark,0);
      }
    }
  }
}
</style>