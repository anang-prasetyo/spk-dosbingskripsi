<template>
  <div class="base">
    <!-- <loading-component v-if="loading" :lightMode="lightMode" /> -->
    <div id="kriteria-content-my" class="content-my">
      <div class="content-my--head" :class="lightMode ? 'light-mode-glass' : 'dark-mode-glass'">
        <div class="content-my--head-value text-semi-bold text-125">Kriteria</div>
        <div id="icon-menu" style="display: flex;">
          <menu-icon @toggleMenu="handleToggleMenu" :light-mode="lightMode" @click="$emit('toggleMenu', isMenu)"/>
        </div>
      </div>
      <div class="content-my--main">
        <div class="toast">
          <toast-success v-if="showToast" msg="Data Berhasil ditambahkan 😎" />
          <toast-danger v-if="showToast2" msg="Data Telah dihapus 😭" />
          <toast-warning v-if="showToast3" msg="Data Berhasil diupdate 😁" />
        </div>
        <div class="card-bubble-my" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
          <Transition name="slide">
            <div v-if="el1">
              <div class="hover-u-primary text-15 mb-4 curzr-hover text-regular" style="display: inline-flex;">Apa itu Kriteria?</div>
              <div class="paragraph" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">
                <p>Kriteria adalah suatu nilai berbobot yang digunakan untuk menilai Alternatif. Kriteria tergolong dalam 2 jenis, yaitu <i>Benefit</i> dan <i>Cost</i>. <i>Benefit</i> yaitu, jika nilai kriteria semakin besar maka akan semakin baik. <i>Cost</i> yaitu, jika nilai kriteria semakin kecil maka akan semakin baik. Nilai/bobot yang digunakan untuk setiap kriteria bisa berupa nilai 1 sampai dengan 5 atau bisa juga berupa pecahan (%).</p>
                <p>Pada kasus ini yang menjadi kriteria adalah penilaian pada seorang dosen pembimbing skripsi. Nilai-nilai tersebut adalah pendidikan, jumlah publikasi ilmiah, jabatan struktural, media komunikasi, bahasa pemrograman, kompetensi, kuota dan usia. Kriteria tersebut kemudian dinilai oleh para mahasiswa yang sudah menyelesaikan skripsi dan mahasiswa yang sedang menempuh skripsi lebih dari 1 semester. Penilaian dari mereka dirasa cukup untuk membuat acuan penilaian karena sistem pemilihan dosen pembimbing skripsi di prodi Informatika UMS yang membebaskan mahasiswa untuk memilih sendiri dosen pembimbing skripsinya.</p>
              </div>
              <div ref="tabelKriteria"></div>
            </div>
          </Transition>
          <Transition name="slide">
            <div v-if="el2">
              <div id="tabel"></div>
              <!-- <div id="tabel" ref="tabelKriteria" style="margin-bottom: 5rem"></div> -->
              <div>
                <div v-if="thisUser">
                  <div class="hover-u-primary text-15 mb-4 curzr-hover text-regular" style="display: inline-flex;">Tabel</div>
                  <div v-if="kriteria != ''">
                    <div class="alert-my alert-primary" :class="!lightMode ? 'dark-primary-text' : 'primary-text'">
                      <div class="text-semi-bold-2">Klik baris pada tabel untuk menandai.</div>
                    </div>
                    <div class="my-3 paragraph">
                      <p class="mt-2" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Berikut ini adalah tabel kriteria, klik tombol <span class="code" :class="lightMode ? 'code-light' : 'code-dark'">detail</span> untuk melihat sub kriteria.</p>
                      <p class="my-3">Tabel Kriteria</p>
                    </div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div class="table-my">
                        <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td>No</td>
                              <td>Nama Kriteria</td>
                              <td>Bobot Kriteria</td>
                              <td>Jenis Kriteria</td>
                              <td>Sub Kriteria</td>
                              <td v-if="thisUser.user.userLevel === 'Admin'">Aksi</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                            v-for="(krt, index) in kriteria"
                            :key="krt.idKriteria"
                            @click="pilihTr = krt.idKriteria"
                            :class="!lightMode && pilihTr === krt.idKriteria ? 'dark-primary-text' : lightMode && pilihTr === krt.idKriteria ? 'primary-text' : ''"
                            >
                              <td>{{index+1}}</td>
                              <td>{{krt.namaKriteria}}</td>
                              <td>{{krt.bobotKriteria}}</td>
                              <td>{{krt.jenisKriteria}}</td>
                              <td>
                                <div class="icon-my">
                                  <a href="#more" data-tooltip="Detail" data-tooltip-location="left" style="color: currentColor;">
                                    <more-square-icon 
                                      class="icon-my-more"
                                      @click="getSubKriteria(krt.idKriteria,krt.namaKriteria)" 
                                    />
                                  </a>
                                </div>
                              </td>
                              <td v-if="thisUser.user.userLevel === 'Admin'">
                                <div class="icon-my">
                                  <a href="#tambah-edit-data" style="color: currentColor;" data-tooltip="Edit" data-tooltip-location="left">
                                    <edit-icon 
                                      class="icon-my-edit"
                                      @click="editData(krt.idKriteria), editIsActive = true" 
                                    />
                                  </a>
                                  <div data-tooltip="Hapus" data-tooltip-location="left">
                                    <trash-icon 
                                      class="icon-my-trash" 
                                      @click="deleteData(krt.idKriteria)"
                                    />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div id="more"></div>
                  </div>
                  <div v-else>gaada data pada tabel</div>
                  <div v-if="subKriteria" style="margin-top: 5rem">
                    <div class="my-3 icon-my">
                      <div>Tabel Sub Kriteria <span class="text-bold">{{currentKriteria.namaKriteria}}</span></div>
                      <div class="button-my glow ml-3" :class="lightMode ? 'white' : 'black'" @click="removeSubKriteria()">Sembunyikan</div>
                    </div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div class="table-my">
                        <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td>No</td>
                              <td>Nama Sub Kriteria</td>
                              <td>Bobot Sub Kriteria</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr 
                              v-for="(skrt, index) in subKriteria.subKriteria" 
                              :key="skrt.idSubKriteria"
                              @click="pilihTr2 = skrt.idSubKriteria"
                              :class="!lightMode && pilihTr2 === skrt.idSubKriteria ? 'dark-primary-text' : lightMode && pilihTr2 === skrt.idSubKriteria ? 'primary-text' : ''"
                            >
                              <td>{{index+1}}</td>
                              <td>{{skrt.name}}</td>
                              <td>{{skrt.bobotSubKriteria}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
          <Transition name="slide">
            <div v-if="el3" id="tambah-edit-data">
              <div v-if="thisUser">
                <div v-if="thisUser.user.userLevel === 'Admin'">
                  <div class="before">
                    <div class="before--card-bubble-my" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div 
                        class="button-my primary-transparent mr-1"
                        :class="!editIsActive ? 'primary-light' : ''" 
                        @click="editIsActive = !editIsActive"
                      >
                        Tambah Data
                      </div>
                      <div 
                        class="button-my primary-transparent" 
                        :class="editIsActive ? 'primary-light' : ''" 
                        @click="editIsActive = !editIsActive"
                      >
                        Edit Data
                      </div>
                    </div>
                    <div class="before--round" :class="lightMode ? 'light-mode-bg' : 'dark-mode-layout'">
                      <div class="before--round-cut" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'"></div>
                    </div>
                  </div>
                  <div v-if="editIsActive" class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'" style="border-top-left-radius: 0;">
                    <div>
                      <div class="hover-u-primary typography-callout mb-5" style="display: inline-flex;">Edit Data</div>
                      <div v-if="editIsExist" class="block">
                        <div v-if="kriteriaEdit" class="mb-5 full">
                          <div class="text-bold mt-5">Kriteria</div>
                          <div class="full-w">
                            <div class="mt-2">Nama Kriteria</div>
                            <div class="input-my flex border-bottom-warning" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                              <input 
                                type="text"
                                placeholder="Masukkan nama kriteria"
                                class="input-my--input"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                v-model="kriteriaEdit.namaKriteria"
                              />
                            </div>
                            <div v-if="kriteriaEdit.namaKriteria == ''" class="label-my--alert">Kolom ini harus diisi</div>
                          </div>
                          <div class="full-w">
                            <div class="mt-2">Bobot Kriteria</div>
                            <div class="input-my flex border-bottom-warning" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                              <input 
                                type="number"
                                min="0"  
                                step="0.01"
                                placeholder="Masukkan bobot kriteria"
                                class="input-my--input"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                v-model="kriteriaEdit.bobotKriteria"
                              />
                            </div>
                            <div v-if="kriteriaEdit.bobotKriteria == ''" class="label-my--alert">Kolom ini harus diisi</div>
                          </div>
                          <div class="full-w">
                            <div class="mt-2">Jenis Kriteria</div>
                            <select-single
                              :listsSingle="lists1"
                              :terpilih="kriteriaEdit.jenisKriteria"
                              :warna="'option-warning'"
                              :lightMode="lightMode"
                              @custom-change="handleCustomChange2"
                            />
                          </div>
                          <div v-if="kriteriaEdit.jenisKriteria == ''" class="label-my--alert">Kolom ini harus diisi</div>
                        </div>
                        <div class="mt-6 mb-4">
                          <div class="icon-my">
                            <div class="text-bold mr-6">Sub Kriteria</div>
                            <div class="icon-my-circle" :class="lightMode ? 'icon-my-circle-light' : 'icon-my-circle-dark'" data-tooltip="Kurangi" @click="decreaseEdit()">
                              <minus-icon />
                            </div>
                            <div class="mx-4">{{countEdit}}</div>
                            <div class="icon-my-circle" :class="lightMode ? 'icon-my-circle-light' : 'icon-my-circle-dark'" data-tooltip="Tambah" @click="increaseEdit()">
                              <add-icon />
                            </div>
                          </div>
                        </div>
                        <div v-if="(countEdit > 0)">
                          <div v-for="(i, index) in countEdit" :key="i">
                            <div v-if="kriteriaEdit" class="mb-4 full">
                              <div class="full-w">
                                <div class="mt-2">Nama Sub Kriteria {{(index+1)}}</div>
                                <div class="input-my flex border-bottom-warning" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                                  <input 
                                    type="text"
                                    placeholder="Masukkan nama kriteria"
                                    class="input-my--input"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                    v-model="kriteriaEdit.subKriteria[index].name"
                                  />
                                </div>
                              </div>
                              <div class="full-w">
                                <div class="mt-2">Bobot Sub Kriteria {{(index+1)}}</div>
                                <div class="input-my flex border-bottom-warning" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                                  <input 
                                    type="number"
                                    min="0"  
                                    step="1"
                                    placeholder="Masukkan bobot sub kriteria"
                                    class="input-my--input"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                    v-model="kriteriaEdit.subKriteria[index].bobotSubKriteria"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-5">
                          <div class="button-my glow warning-glow mr-4" :class="lightMode ? 'warning' : 'dark-warning'" @click="updateData()">Update Data</div>
                          <!-- <a href="#tabel" style="color: currentColor">
                          </a> -->
                          <div class="button-my" :class="lightMode ? 'light-transparent' : 'black'" @click="editIsActive = false, editIsExist = false, kriteriaEdit = null">Batal</div>
                        </div>
                      </div>
                      <div v-else>
                        <div class="alert-my alert-warning mb-3 text-semi-bold-2" :class="!lightMode ? 'dark-warning-text' : 'warning-text'">Tidak ada data yang dipilih</div>
                        <p class="line-h-175">Klik tombol <span class="code" :class="lightMode ? 'code-light' : 'code-dark'">edit</span>  pada salah satu Alternatif</p>
                      </div>
                    </div>
                  </div>
                  
                  <div v-else class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'" style="border-top-left-radius: 0;">
                    <div>
                      <div v-if="editIsActive" class="hover-u-primary typography-callout mb-5" style="display: inline-flex;">Edit Data</div>
                      <div v-else class="hover-u-primary typography-callout mb-5" style="display: inline-flex;">Tambah Data</div>
                      <div v-if="kriteria.length < 8" class="block">
                        <div class="mb-4 full">
                          <div class="text-bold mt-5">Kriteria</div>
                          <div class="full-w">
                            <div class="mt-2">Nama Kriteria</div>
                            <div class="input-my flex" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                              <input 
                                type="text"
                                placeholder="Masukkan nama kriteria"
                                class="input-my--input border-bottom-2-danger"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'" 
                                :style="newKriteria.namaKriteria !== '' ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                                v-model="newKriteria.namaKriteria"
                              />
                            </div>
                            <div v-if="newKriteria.namaKriteria == ''" class="label-my--alert">Kolom ini harus diisi</div>
                          </div>
                          <div class="full-w">
                            <div class="mt-2">Bobot Kriteria</div>
                            <div class="input-my flex" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                              <input 
                                type="number"
                                min="0"  
                                step="0.01"
                                placeholder="Masukkan bobot kriteria"
                                class="input-my--input border-bottom-2-danger"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'" 
                                :style="newKriteria.bobotKriteria !== '' ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                                v-model="newKriteria.bobotKriteria"
                              />
                            </div>
                            <div v-if="newKriteria.bobotKriteria == ''" class="label-my--alert">Kolom ini harus diisi</div>
                          </div>
                          <div class="full-w">
                            <div class="mt-2">Jenis Kriteria</div>
                            <select-single
                              :listsSingle="lists1"
                              :warna="'option-success'"
                              :light-mode="lightMode"
                              @custom-change="handleCustomChange"
                            />
                          </div>
                          <div v-if="newKriteria.jenisKriteria == ''" class="label-my--alert">Kolom ini harus diisi</div>
                        </div>
                        <div class="mt-6 mb-4">
                          <div class="icon-my">
                            <div class="text-bold mr-6">Sub Kriteria</div>
                            <div class="icon-my-circle" :class="lightMode ? 'icon-my-circle-light' : 'icon-my-circle-dark'" data-tooltip="Kurangi" @click="decrease()">
                              <minus-icon />
                            </div>
                            <div class="mx-4">{{newKriteria.subKriteria.length}}</div>
                            <div class="icon-my-circle" :class="lightMode ? 'icon-my-circle-light' : 'icon-my-circle-dark'" data-tooltip="Tambah" @click="increase()">
                              <add-icon />
                            </div>
                          </div>
                        </div>
                        <div v-if="count === 0" class="label-my--alert">Tambahkan beberapa Sub Kriteria</div>
                        <div v-if="(count > 0)">
                          <div v-for="(i, index) in count" :key="i">
                            <div class="mb-4 full">
                              <!-- <div class="mt-5"><strong>Sub Kriteria</strong></div> -->
                              <div class="full-w">
                                <div class="mt-2">Nama Sub Kriteria {{(index+1)}}</div>
                                <div class="input-my flex" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                                  <input 
                                    type="text"
                                    placeholder="Masukkan nama kriteria"
                                    class="input-my--input border-bottom-2-danger"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'" 
                                    :style="newKriteria.subKriteria[index].name !== '' ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                                    v-model="newKriteria.subKriteria[index].name"
                                  />
                                </div>
                              </div>
                              <div class="full-w">
                                <div class="mt-2">Bobot Sub Kriteria {{(index+1)}}</div>
                                <div class="input-my flex" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                                  <input 
                                    type="number"
                                    min="0"  
                                    step="1"
                                    placeholder="Masukkan bobot sub kriteria"
                                    class="input-my--input border-bottom-2-danger"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'" 
                                    :style="newKriteria.subKriteria[index].bobotSubKriteria !== '' ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                                    v-model="newKriteria.subKriteria[index].bobotSubKriteria"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
          
                        <div v-if="isUpdateAlternatif" class="mb-4 full">
                          <div class="text-bold mt-6">Alternatif dosen pembimbing Skripsi</div>
                          <div v-for="(alt, index) in alternatif" :key="index" class="">
                            <div class="full-w">
                              <div class="mt-2">{{ alt.namaDosen.gelarDepan + ' ' + alt.namaDosen.namaDepan + ' ' + alt.namaDosen.namaBelakang + ', ' + alt.namaDosen.gelarBelakang }}</div>
                              <div v-if="newKriteria.subKriteria !== ''" class="input-my flex" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                                <select-single
                                  :lists-single="newKriteria.subKriteria"
                                  :index-list="index"
                                  :id-kriteria="newKriteria.idKriteria"
                                  :warna="'option-success'"
                                  :light-mode="lightMode"
                                  @custom-change="handleCustomChange3"
                                />
                                <!-- <div v-if="newAlternatif.kriteria[index].idSubKriteria == ''" class="label-my--alert">Kolom ini harus diisi</div> -->
                              </div>
                            </div>
                          </div>
                        </div>
          
                        <div class="mt-5">
                          <div v-if="newKriteria.namaKriteria !== '' && newKriteria.bobotKriteria !== '' && newKriteria.jenisKriteria !== '' && count > 0">
                            <div v-if="isUpdateAlternatif" class="button-my glow success-glow mr-2" :class="lightMode ? 'success' : 'dark-success'" @click="addData(), isUpdateAlternatif = null">Tambahkan Data</div>
                            <div v-else class="button-my glow success-glow mr-2" :class="lightMode ? 'success' : 'dark-success'" @click="isUpdateAlternatif = true, addUpdateAlternatifKriteria(), newKriteria.idKriteria = uuidv4()">Selanjutnya</div>
                            <div class="button-my ml-3" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="kosongkanNewKriteria()">Kosongkan Form</div>
                          </div>
                          <div v-else>
                            <div class="button-my glow success success-glow mr-2 disable">Selanjutnya</div>
                            <div class="button-my light-transparent" @click="kosongkanNewKriteria()">Kosongkan Form</div>
                          </div>
                        </div>
                      </div>
                      <div v-else>
                        <div class="alert-my alert-danger mb-3 text-semi-bold-2" :class="!lightMode ? 'dark-danger-text' : 'danger-text'">Kriteria sudah maksimal!</div>
                        <p class="line-h-175">Jumlah Kriteria sudah maksimal, yaitu <b>8</b> Kriteria. Hapus Kriteria yang tidak diperlukan jika kamu ingin menambah Kriteria baru.</p>
                      </div>
                    </div>
                  </div>
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
import { ref, defineAsyncComponent, onMounted } from 'vue';
import {useDatabase} from '../../services/DataService';
import swal from 'sweetalert'
import { v4 as uuidv4 } from 'uuid';
import ToastDanger from '../../components/toasts/ToastDanger.vue';
import ToastSuccess from '../../components/toasts/ToastSuccess.vue';
import ToastWarning from '../../components/toasts/ToastWarning.vue';
import SelectSingle from '../../components/selects/SelectSingle.vue';
import { useMyFunc } from '../../services/OtherFunctions'
import {useAuth} from '../../firebase/firebase'
// import LoadingComponent from '../../components/LoadingComponent.vue';

defineProps({
  lightMode: Boolean
})

const { el1, el2, el3, el4, delay } = useMyFunc()

const FooterComponent = defineAsyncComponent(() => import('../../components/FooterComponent.vue'))
const MoreSquareIcon = defineAsyncComponent(() => import('../../components/icons/MoreSquareIcon.vue'))
const EditIcon = defineAsyncComponent(() => import('../../components/icons/EditIcon.vue'))
const TrashIcon = defineAsyncComponent(() => import('../../components/icons/TrashIcon.vue'))
const AddIcon = defineAsyncComponent(() => import('../../components/icons/AddIcon.vue'))
const MinusIcon = defineAsyncComponent(() => import('../../components/icons/MinusIcon.vue'))
const MenuIcon = defineAsyncComponent(() => import('../../components/icons/MenuIcon.vue'))

const {thisUser} = useAuth()
const { kriteria, hitungJmlSubKriteria, getDocKriteria, kriteriaEdit, setKriteria, updateKriteria, deleteKriteria, alternatif, updateAlternatif } = useDatabase()

const pilihTr = ref(null)
const pilihTr2 = ref(null)
// emit
const handleCustomChange = (s) => {
  newKriteria.value.jenisKriteria = s
}
const handleCustomChange2 = (s) => {
  kriteriaEdit.value.jenisKriteria = s
}
const handleCustomChange3 = (s,t,u,v,w) => {
  updateAlternatifKriteria.value[t].idKriteria = v
  updateAlternatifKriteria.value[t].idSubKriteria = w
}
const resetForm = () => {
  newKriteria.value.namaKriteria = '',
  newKriteria.value.bobotKriteria = '',
  newKriteria.value.jenisKriteria = '',
  newSubKriteria.value = []
  count.value = 0
  newKriteria.value.subKriteria = []
}
const kosongkanNewKriteria = () => {
  swal({
    title: "Kosongkan isi form?",
    text: "Seluruh data isian pada form ini akan dikosongkan!",
    buttons: ["Batal", "Kosongkan"],
    dangerMode: true,
  })
  .then((willReset) => {
    if (willReset) {
      resetForm()
    }
  });
}
const kosongkanKriteriaEdit = () => {
  kriteriaEdit.value.namaKriteria = ''
  kriteriaEdit.value.jenisKriteria = ''
  kriteriaEdit.value.bobotKriteria = null
}
// const coba = computed(() => {
//   return updateAlternatifKriteria.value
// } )
const updateAlternatifKriteria = ref([])
// const newAlternatifKriteria = ref(null)

const tabelKriteria = ref(null)
const currentKriteria = ref([]),
      subKriteria = ref(null),
      isUpdateAlternatif = ref(null),
      // toast
      showToast = ref(false),
      showToast2 = ref(false),
      showToast3 = ref(false),
      // active class
      editIsActive = ref(false),
      editIsExist = ref(false),
      lists1 = ref([
        {name: 'Benefit'}, 
        {name: 'Cost'}
      ])

const afterDeleteKriteria = ref([])
const idAlternatifOnly = ref([])
const FilterDeleteKriteria = async(id) => {
  let _afterDeleteKriteria = []
  let _idAlternatifOnly = []
  for (var i=0; i<alternatif.value.length; i++){
    _afterDeleteKriteria.push (alternatif.value[i].kriteria.filter(
      v => v.idKriteria !== id
    ))
    _idAlternatifOnly.push(alternatif.value[i].idAlternatif)
  }
  // console.log('_afterDeleteKriteria =>',_afterDeleteKriteria)
  // console.log('_idAlternatifOnly =>',_idAlternatifOnly)
  afterDeleteKriteria.value = _afterDeleteKriteria
  idAlternatifOnly.value = _idAlternatifOnly
}

const newKriteria = ref({
  idKriteria: '',
  namaKriteria: '',
  bobotKriteria: '',
  jenisKriteria: '',
  subKriteria: []
})
const newSubKriteria = ref([])

// sub kriteria
const removeSubKriteria = () => {
  subKriteria.value = null
}
const tempSubKriteria = ref([])
// counter
const count = ref(0),
countEdit = ref(0),
increase = () => {
  count.value = count.value + 1
  newKriteria.value.subKriteria.push({
    idSubKriteria: uuidv4()
  })
  tempSubKriteria.value.push(0)
},
decrease = () => {
  if (count.value > 0) {
    count.value = count.value - 1
    var index = newSubKriteria.value.length - 1
    newKriteria.value.subKriteria.splice(index,1)
    tempSubKriteria.value.splice((tempSubKriteria.value.length-1),1)
  }
},
increaseEdit = () => {
  countEdit.value = countEdit.value + 1
  kriteriaEdit.value.subKriteria.push({
    idSubKriteria: uuidv4()
  })
},
decreaseEdit = () => {
  swal({
    title: "Hapus sub kriteria "+countEdit.value+" ?",
    text: "Nama Sub Kriteria "+countEdit.value+" dan Bobot Sub Kriteria "+countEdit.value+" akan dihapus!",
    buttons: ["Batal", "Hapus"],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      if (countEdit.value > 0) {
        countEdit.value = countEdit.value - 1
        var index = kriteriaEdit.value.subKriteria.length - 1
        kriteriaEdit.value.subKriteria.splice(index,1)
      }
    }
  });
},
setCountEdit = (jmlh) => {
  countEdit.value = jmlh
}
const addUpdateAlternatifKriteria = () => {
  for (var i=0; i<alternatif.value.length; i++){
    updateAlternatifKriteria.value.push({
      idKriteria: '',
      idSubKriteria: ''
    })
  }
}

// crud
const getSubKriteria = (id,namaKriteria) => {
      currentKriteria.value.id = id
      currentKriteria.value.namaKriteria = namaKriteria
      // getDocKriteria(currentKriteria.value.id).onSnapshot((doc) => {
      getDocKriteria(id).onSnapshot((doc) => {
        if (doc.exists) {
          subKriteria.value = doc.data()
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          subKriteria.value = null
        }
      })
    },
    addData = () => {
      var dataKriteria = {
        namaKriteria: newKriteria.value.namaKriteria,
        bobotKriteria: newKriteria.value.bobotKriteria,
        jenisKriteria: newKriteria.value.jenisKriteria,
        subKriteria: newKriteria.value.subKriteria
      }
      const addDataKriteria = () => {
        setKriteria(newKriteria.value.idKriteria,dataKriteria)
        resetForm()
      }
      swal({
        title: "Yakin data sudah benar?",
        text: "Data akan ditambahkan ke database!",
        buttons: ["Batal", "Tambahkan"]
      })
      .then((willAdd) => {
        if (willAdd) {
          addDataKriteria()

        } else {
          swal("Okee periksa kembali data anda! 😅");
        }
      })
      .then(() => {
        updateAllDocsAlternatif()
        tabelKriteria.value?.scrollIntoView({ behavior: 'smooth' })
        showToast.value = true
        setTimeout(() => showToast.value = false, 5000)
      })
    },
    deleteData = (id) => {
      swal({
        title: "Yakin menghapus data?",
        text: "Data yang telah dihapus tidak bisa dikembalikan!",
        buttons: ["Batal", "Hapus"],
        dangerMode: true,
      })
      .then(async(willDelete) => {
        if (willDelete) {
          await FilterDeleteKriteria(id)
          .then(() => {
            for (var i=0; i<alternatif.value.length; i++){
              updateAlternatif(idAlternatifOnly.value[i], {'kriteria': afterDeleteKriteria.value[i]})
            }
            // getAllAlternatif().get().then((querySnapshot) => {
            //   let idDocs = []
            //   querySnapshot.forEach((doc) => {
            //     idDocs.push(doc.id)
            //     // doc.ref.update({'kriteria': afterDeleteKriteria.value[doc]})
            //   })
            //   console.log('idDocs =>',idDocs)
            // })
          })
          .then(() => {
            deleteKriteria(id)
          })

          showToast2.value = true
          setTimeout(() => showToast2.value = false, 5000)
        } else {
          swal("Tindakan dibatalkan, data anda masih aman! 😉");
        }
      });
    },
    editData = async(id) => {
      currentKriteria.value.id = id
      await getDocKriteria(id).get().then((doc) => { 
        kriteriaEdit.value = doc.data();
        hitungJmlSubKriteria.value = kriteriaEdit.value.subKriteria.length
      })
      setCountEdit(hitungJmlSubKriteria.value)
      editIsExist.value = true
    },
    updateData = () => {
      var id = currentKriteria.value.id
      var kriteriaEditData = {
        'namaKriteria': kriteriaEdit.value.namaKriteria,
        'jenisKriteria': kriteriaEdit.value.jenisKriteria,
        'bobotKriteria': kriteriaEdit.value.bobotKriteria,
        'subKriteria': kriteriaEdit.value.subKriteria
      }
      const updateDataKriteria = () => {
        updateKriteria(id,kriteriaEditData)
        kosongkanKriteriaEdit()
      }
      swal({
        title: "Yakin mengupdate data?",
        text: "Data lama akan diganti dengan data baru",
        buttons: ["Batal", "Update"]
      })
      .then((willUpdate) => {
        if (willUpdate) {
          updateDataKriteria()
          editIsExist.value = false
      
          tabelKriteria.value?.scrollIntoView({ behavior: 'smooth' })
          showToast3.value = true
          setTimeout(() => showToast3.value = false, 5000)
        } else {
          swal("Tindakan dibatalkan, data anda masih aman! 😉");
        }
      });
    },
    updateAllDocsAlternatif = () => {
      var _newAlternatifKriteria = []
      
      for ( var i=0; i<updateAlternatifKriteria.value.length ; i++){
        _newAlternatifKriteria[i] = (alternatif.value[i].kriteria)
        _newAlternatifKriteria[i].push(updateAlternatifKriteria.value[i])
        
        updateAlternatif(alternatif.value[i].idAlternatif, {'kriteria': _newAlternatifKriteria[i]})
        // batch.update(getDocAlternatif(alternatif.value[i].idAlternatif), {'kriteria': _newAlternatifKriteria[i]})
      }
      
      // newAlternatifKriteria.value = _newAlternatifKriteria
      
      // batch.commit().then(() => {
      //   console.log('berhasil batch dokumen')
      // })
    }

const loading = ref(null)

const isMenu = ref(null)
const handleToggleMenu = async(a) => {
  isMenu.value = a
}

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
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';
@import '../../sass/animation.scss';


.full, .full-w{
  display: flex;
  flex-direction: column;
}
.full{
  gap: 1rem;
  &-w {
    gap: .5rem;
  }
}
.active {
  background: $primary-light;
}
.before {
  display: flex;
  &--card-bubble-my {
    display: inline-flex;
    width: auto;
    padding: 5px;
    border-radius: 1.25rem 1.25rem 0 0;
  }
  &--round {
    display: flex;
    &-cut {
      min-width: 2rem;
      border-bottom-left-radius: 1rem;
    }
  }
}
.icon-my{
  display: flex;
  gap: .5rem;
  align-items: center;
  &-more:hover {
    color: $link;
  }
  &-edit:hover {
    color: $warning;
  }
  &-trash:hover {
    color: $danger;
  }
  &-circle {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.25s ease;
    &-light{
      background: var(--light-bg);
      &:hover {
        background: var(--light-layout);
      }
    }
    &-dark{
      background: var(--dark-bg);
      &:hover {
        background: var(--dark-layout);
      }
    }
  }
}
</style>