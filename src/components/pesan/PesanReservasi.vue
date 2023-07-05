<template>
  <div class="dialog-my" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
    <div v-if="loading" class="loading" :style="lightMode ? 'background: rgba(244,247,248,.2);' : 'background: rgba(0,0,0,.1);'">
      <VueSpinner size="30" color="	#5b3bc4" />
    </div>
    <div class="p-5">
      <div class="close" :class="lightMode ? 'light-mode-bg' : 'dark-mode-layout'" @click="$emit('isCloseModal', null)"><add-icon style="transform: rotate(45deg);" /></div>
      <div>
        <div v-if="step == 0" class="content">
          <div class="">
            <div class=" has-text-centered text-semi-bold text-15 mb-6">Perhatian</div>
            <div class="paragraph">
              <p>Fitur ini adalah fitur untuk melanjutkan progres skripsi kamu menuju langkah terakhir, <b>kamu tidak harus</b> melakukan ini karena yang terpenting adalah kamu sudah dapat pembimbing skripsi yang sesuai dengan minat kamu. Tetapi jika kamu bersedia, silahkan mengirim pengajuan judul dan deskripsi skripsi agar menu <b>Pantau</b> dapat berfungsi secara maksimal dan akurat. Terima Kasih.</p>
              <p>Oiya, kamu disarankan mendapat persetujuan dari dosen pembimbing skripsi yang kamu inginkan sebelum mengirim pengajuan judul dan deskripsi skripsi.</p>
            </div>
            <div class="mt-5">
              <div class="button-my glow primary-glow flex mb-2 py-3" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 1, getUserData()">Mengerti</div>
            </div>
          </div>
        </div>
        <div v-else-if="step == 1 && editProfile" class="content">
          <div v-if="editProfile.skripsi.pembimbing === ''">
            <div>
              <div class=" has-text-centered text-semi-bold text-125">Detail Skripsi</div>
            </div>
            <div class="mt-3 mb-5" style="max-height: 50vh;overflow: auto;">
              <div>
                <div class="control">
                  <div class="mt-4 mb-2">Judul Skripsi</div>
                  <div v-if="editProfile.isSkripsi === false" class="input-my border-bottom-primary" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                    <input 
                      type="text"
                      class="input-my--input"
                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                      v-model="userSkripsi.judul"
                      placeholder="Masukkan judul skripsi"
                    />
                  </div>
                  <div v-else class="input-my border-bottom-primary" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                    <input 
                      type="text"
                      class="input-my--input"
                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                      v-model="editProfile.skripsi.judul"
                      placeholder="Masukkan judul skripsi"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="control">
                  <div class="mt-4 mb-2">Deskripsi</div>
                  <div v-if="editProfile.isSkripsi === false" class="textarea-my border-bottom-primary" :class="lightMode ? 'light-mode-textarea-my' : 'dark-mode-textarea-my'">
                    <textarea
                      class="textarea-my--input"
                      :class="lightMode ? 'light-mode-textarea-my--input' : 'dark-mode-textarea-my--input'"
                      v-model="userSkripsi.deskripsi"
                      placeholder="Tulis deskripsi judul skripsi anda"
                    ></textarea>
                  </div>
                  <div v-else class="textarea-my border-bottom-primary" :class="lightMode ? 'light-mode-textarea-my' : 'dark-mode-textarea-my'">
                    <textarea
                      class="textarea-my--input"
                      :class="lightMode ? 'light-mode-textarea-my--input' : 'dark-mode-textarea-my--input'"
                      v-model="editProfile.skripsi.deskripsi"
                      placeholder="Tulis deskripsi judul skripsi anda"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div v-if="editProfile.isSkripsi === false">
                <div v-if="userSkripsi.judul !== '' && userSkripsi.deskripsi !== ''" class="button-my glow primary-glow flex py-3" :class="lightMode ? 'primary' : 'dark-primary'" @click="kirimAcc(userSkripsi.judul,userSkripsi.deskripsi)">Kirim</div>
                <div v-else class="button-my primary flex disable">Kirim</div>
              </div>
              <div v-else>
                <div v-if="editProfile.skripsi.judul !== '' && editProfile.skripsi.deskripsi !== ''" class="button-my glow primary-glow flex py-3" :class="lightMode ? 'primary' : 'dark-primary'" @click="kirimAcc(editProfile.skripsi.judul,editProfile.skripsi.deskripsi)">Kirim</div>
                <!-- <div v-if="editProfile.skripsi.judul !== '' && editProfile.skripsi.deskripsi !== ''" class="button-my glow primary-glow flex" :class="lightMode ? 'primary' : 'dark-primary'" @click="step = 2, $emit('sendApplication', editProfile.skripsi.judul, editProfile.skripsi.deskripsi)">Kirim</div> -->
                <div v-else class="button-my primary flex disable">Kirim</div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="oops">
              <div class="text-semi-bold text-15">Oops</div>
              <div class="mt-4">Kamu sudah memiliki dosen pembimbing skripsi.</div>
              <div class="button-my glow primary-glow flex py-3 mt-6" :class="lightMode ? 'primary' : 'dark-primary'" @click="$emit('isCloseModal', null)">Baik</div>
            </div>
          </div>
        </div>
        <div v-else-if="step == 2" class="content">
          <div class="block has-text-centered">
            <div class="title-h2">Selamat!</div>
            <div>Berhasil mengirim judul dan deskripsi skripsi, status kamu akan berubah ketika dosen pembimbing skripsi sudah menyetujui ajuan kamu.</div>
            <div class="mt-5 py-3 button-my glow primary-glow flex" :class="lightMode ? 'primary' : 'dark-primary'" @click="$emit('isCloseModal', null)">Baik</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import { VueSpinner } from 'vue3-spinners';
import { useAuth } from '../../firebase/firebase';
import swal from 'sweetalert';
import { useDatabase } from '../../services/DataService';

const AddIcon = defineAsyncComponent(() => import('../icons/AddIcon.vue'))
const {editProfile,getUserData,thisUser} = useAuth()
const {updateUsers} = useDatabase()

defineProps({
  lightMode: Boolean
})

const loading = ref(false)
const step = ref(0)
const userSkripsi = ref({
  judul: '',
  deskripsi: ''
})
const emit = defineEmits(['isCloseModal', 'sendApplication'])

const kirimAcc = (a,b) => {
  swal({
    title: "Judul dan deskripsi skripsi sudah benar?",
    text: "Data akan dikirim untuk proses validasi oleh dosen ",
    buttons: ["Batal", "Kirim"]
  })
  .then((willAcc) => {
    if (willAcc) {
      updateUsers(thisUser.value.user.userId, {'progres.notifLog': 'Ajuan skripsi telah dikirim, menunggu validasi dosen'})
      step.value = 2
      emit('sendApplication', a, b)
    }
  })
}

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';

.oops{
  display: flex;
  flex-direction: column;
  align-items: center;
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

</style>