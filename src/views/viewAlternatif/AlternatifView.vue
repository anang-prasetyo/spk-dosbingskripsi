<template>
  <div class="base">
    <!-- <loading-component v-if="loading" :lightMode="lightMode"/> -->
    <div id="alternatif-content-my" class="content-my">
      <div class="content-my--head" :class="lightMode ? 'light-mode-glass' : 'dark-mode-glass'">
        <div class="content-my--head-value text-semi-bold text-125">Alternatif</div>
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
              <div class="hover-u-primary text-15 mb-4 curzr-hover text-regular" style="display: inline-flex;">Apa itu alternatif?</div>
              <div class="paragraph" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">
                <p>Alternatif adalah sekumpulan data objek yang akan dipilih dan dinilai untuk memperoleh alternatif terbaik. Setiap Alternatif dinilai sesuai dengan kriteria yang telah ditentukan.</p>
                <p>Dalam hal ini yang dimaksud alternatif adalah dosen pembimbing skripsi. Jadi, para dosen pembimbing skripsi akan dinilai berdasarkan kriteria sehingga akan diperoleh dosen pembimbing skripsi terbaik yang akan direkomendasikan kepada mahasiswa.</p>
                <p><span class="text-semi-bold">Di prodi Informatika ada sekitar 21 dosen pembimbing skripsi, namun karena suatu alasan beberapa dari beliau tidak bisa berpartisipasi sehingga diganti dengan data dummy / data palsu.</span> Terdapat tanda titik biru yang berarti data tersebut adalah data asli.</p>
              </div>
            </div>
          </Transition>
          <Transition name="slide">
            <div v-if="el2">
              <div ref="tabelAlternatif" id="tabel"></div>
              <!-- <div ref="tabelAlternatif" id="tabel" style="margin-bottom: 5rem"></div> -->
              <div v-if="isRefAlternatif">
                <div v-if="thisUser">
                  <div class="hover-u-primary text-15 mb-4 curzr-hover text-regular" style="display: inline-flex;">Tabel</div>
                  <div class="alert-my alert-primary mb-5 text-semi-bold-2" :class="!lightMode ? 'dark-primary-text' : 'primary-text'">Klik baris pada tabel untuk menandai. <span ref="tabelAlternatif2"></span></div>
                  <div v-if="alternatif !== ''" class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                    <div class="max" @click="fullTabel = !fullTabel">
                      <div class="bg" :class="!lightMode ? 'bg-dark' : 'bg-light'" data-tooltip="Maximize" data-tooltip-location="left">
                        <maximize-icon style="width: 18px; height: 18px;" />
                      </div>
                    </div>
                    <div v-if="fullTabel" class="ftabel">
                      <div class="ftabel-base">
                        <div class="close" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'" data-tooltip="Minimize" data-tooltip-location="left" @click="fullTabel = !fullTabel">
                          <minimize-icon style="width: 18px; height: 18px;" />
                        </div>
                        <div class="p-3" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'" style="border-radius: 1.25rem;">
                          <div class="ftabel-fit">
                            <div class="table-my">
                              <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                                <thead>
                                  <tr style="position: sticky; top: 0; z-index: 4;" :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                    <td>No</td>
                                    <td>Nama Dosen</td>
                                    <td>NIDN</td>
                                    <td v-for="krt in kriteria" :key="krt.id">{{krt.namaKriteria}}</td>
                                    <td v-if="thisUser.user.userLevel === 'Admin'">Aksi</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                  v-for="(alt, index) in alternatif"
                                  :key="alt.idAlternatif"
                                  @click="pilihTr = alt.idAlternatif"
                                  :class="!lightMode && pilihTr === alt.idAlternatif ? 'dark-primary-text' : lightMode && pilihTr === alt.idAlternatif ? 'primary-text' : ''"
                                  >
                                    <td v-if="limitTabel.current !== 1" style="position:relative;">{{(index+1)+limitTabel.from}}<span v-if="alt.isVerify" class="dot-verify" data-tooltip="Diverifikasi" data-tooltip-location="right"></span></td>
                                    <td v-else style="position:relative;">{{index+1}}<span v-if="alt.isVerify" class="dot-verify" data-tooltip="Diverifikasi" data-tooltip-location="right"></span></td>
                                    <td>{{alt.namaDosen.gelarDepan + ' ' + alt.namaDosen.namaDepan + ' ' + alt.namaDosen.namaBelakang + ', ' + alt.namaDosen.gelarBelakang}}</td>
                                    <td>{{alt.nidn}}</td>
                                    <td v-for="i in hitungJmlKriteria" :key="i" :class="lightMode && alt.subKriteria[Number(i-1)][0].name === 'Belum diketahui' ? 'danger-text' : !lightMode && alt.subKriteria[Number(i-1)][0].name === 'Belum diketahui' ? 'dark-danger-text' : ''">{{alt.subKriteria[Number(i-1)][0].name}}</td>
                                    <td v-if="thisUser.user.userLevel === 'Admin'">
                                      <a href="#edit" style="color: currentColor" data-tooltip="Edit" data-tooltip-location="left">
                                        <edit-icon 
                                          class="edit mr-2"
                                          @click="editData(alt.namaDosen.email), editIsActive = true, addLists2(), fullTabel = !fullTabel" 
                                        />
                                      </a>
                                      <div data-tooltip="Hapus" data-tooltip-location="left">
                                        <trash-icon 
                                          class="trash" 
                                          @click="deleteData(alt.namaDosen.email)"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="table-my">
                      <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                        <thead>
                          <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                            <td>No</td>
                            <td>Nama Dosen</td>
                            <td>NIDN</td>
                            <td v-for="krt in kriteria" :key="krt.id">{{krt.namaKriteria}}</td>
                            <td v-if="thisUser.user.userLevel === 'Admin'">Aksi</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                          v-for="(alt, index) in alternatif.slice(limitTabel.from, limitTabel.to)"
                          :key="alt.idAlternatif"
                          @click="pilihTr = alt.idAlternatif, copyAlternatif = alternatif.slice(index+limitTabel.from)"
                          :class="!lightMode && pilihTr === alt.idAlternatif ? 'dark-primary-text' : lightMode && pilihTr === alt.idAlternatif ? 'primary-text' : ''"
                          >
                            <td v-if="limitTabel.current !== 1" style="position:relative;">{{(index+1)+limitTabel.from}}<span v-if="alt.isVerify" class="dot-verify" data-tooltip="Diverifikasi" data-tooltip-location="right"></span></td>
                            <td v-else style="position:relative;">{{index+1}}<span v-if="alt.isVerify" class="dot-verify" data-tooltip="Diverifikasi" data-tooltip-location="right"></span></td>
                            <td>{{alt.namaDosen.gelarDepan + ' ' + alt.namaDosen.namaDepan + ' ' + alt.namaDosen.namaBelakang + ', ' + alt.namaDosen.gelarBelakang}}</td>
                            <td>{{alt.nidn}}</td>
                            <td v-for="i in hitungJmlKriteria" :key="i" :class="lightMode && alt.subKriteria[Number(i-1)][0].name === 'Belum diketahui' ? 'danger-text' : !lightMode && alt.subKriteria[Number(i-1)][0].name === 'Belum diketahui' ? 'dark-danger-text' : ''">{{alt.subKriteria[Number(i-1)][0].name}}</td>
                            <td v-if="thisUser.user.userLevel === 'Admin'">
                              <a href="#edit" style="color: currentColor" data-tooltip="Edit" data-tooltip-location="left">
                                <edit-icon 
                                  class="edit mr-2"
                                  @click="editData(alt.namaDosen.email), editIsActive = true, addLists2()" 
                                />
                              </a>
                              <div data-tooltip="Hapus" data-tooltip-location="left">
                                <trash-icon 
                                  class="trash" 
                                  @click="deleteData(alt.namaDosen.email)"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-my-foo-nav" :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                      <div class="table-my-foo-nav-items">
                        <div class="flex mr-3">
                          <arrow-left-icon 
                            v-if="limitTabel.current !== 1" 
                            @click="
                              limitTabel.from = limitTabel.from - limitTabel.interval, 
                              limitTabel.to = limitTabel.to- limitTabel.interval, 
                              limitTabel.current = limitTabel.current - 1, 
                              tabelAlternatif2?.scrollIntoView({ behavior: 'smooth' })
                            " 
                          />
                          <arrow-left-icon v-else class="disable" />
                        </div>
                        <div v-if="(alternatif.length)%limitTabel.interval !== 0" class="flex">
                          <div 
                            v-for="i in parseInt((alternatif.length)/limitTabel.interval)+1" 
                            :key="i" 
                            class="table-my-foo-nav-item" 
                            :class="limitTabel.current === i && lightMode ? 'primary' : limitTabel.current === i && !lightMode ? 'dark-primary' : ''" 
                            @click="
                              i !== 1 ? limitTabel.from = (i-1) * limitTabel.interval : limitTabel.from = 0, 
                              i !== 1 ? limitTabel.to = i * limitTabel.interval : limitTabel.to = limitTabel.interval, 
                              limitTabel.current = i
                            "
                          >{{ i }}</div>
                        </div>
                        <div v-else class="flex">
                          <div 
                            v-for="i in parseInt((alternatif.length)/limitTabel.interval)" 
                            :key="i" 
                            class="table-my-foo-nav-item" 
                            :class="limitTabel.current === i && lightMode ? 'primary' : limitTabel.current === i && !lightMode ? 'dark-primary' : ''" 
                            @click="
                              i !== 1 ? limitTabel.from = (i-1) * limitTabel.interval : limitTabel.from = 0, 
                              i !== 1 ? limitTabel.to = i * limitTabel.interval : limitTabel.to = limitTabel.interval, 
                              limitTabel.current = i
                            "
                          >{{ i }}</div>
                        </div>
                        <div class="flex ml-3">
                          <arrow-left-icon 
                            v-if="(alternatif.length)%limitTabel.interval !== 0 && limitTabel.current !== parseInt((alternatif.length)/limitTabel.interval)+1 || (alternatif.length)%limitTabel.interval === 0 && limitTabel.current !== parseInt((alternatif.length)/limitTabel.interval)" 
                            style="transform: rotate(180deg);" 
                            @click="
                              limitTabel.from = limitTabel.from + limitTabel.interval, 
                              limitTabel.to = limitTabel.to + limitTabel.interval, 
                              limitTabel.current = limitTabel.current + 1, 
                              tabelAlternatif2?.scrollIntoView({ behavior: 'smooth' })
                            " 
                          />
                          <arrow-left-icon v-else class="disable" style="transform: rotate(180deg);" />
                        </div>
                      </div>
                    </div>
                    <div class="mt-6">
                      <div class="text-15 mb-3">Informasi data terpilih</div>
                      <div v-if="copyAlternatif" class="table-my">
                        <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td colspan="2">Detail Dosen</td>
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>Nama Dosen</td>
                            <td>{{ copyAlternatif[0].namaDosen.gelarDepan + ' ' + copyAlternatif[0].namaDosen.namaDepan + ' ' + copyAlternatif[0].namaDosen.namaBelakang + ', ' + copyAlternatif[0].namaDosen.gelarBelakang }}</td>
                          </tr>
                          <tr>
                            <td>NIDN</td>
                            <td>{{ copyAlternatif[0].nidn }}</td>
                          </tr>
                          <tr v-for="krt, k in kriteria" :key="krt.idKriteria">
                            <td>{{krt.namaKriteria}}</td>
                            <td :class="lightMode && copyAlternatif[0].subKriteria[k][0].name === 'Belum diketahui' ? 'danger-text' : !lightMode && copyAlternatif[0].subKriteria[k][0].name === 'Belum diketahui' ? 'dark-danger-text' : ''">{{ copyAlternatif[0].subKriteria[k][0].name }}</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                      <div v-else>Belum ada data yang dipilih. Klik salah satu baris pada tabel untuk menampilkan informasi secara terpisah.</div>
                    </div>
                  </div>
                  <div v-else>gaada data pada tabel</div>
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
                    <div class="before--round" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
                      <div class="before--round-cut" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'"></div>
                    </div>
                  </div>
                  <div id="edit" v-if="editIsActive" class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'" style="border-top-left-radius: 0;">
                    <div>
                      <div class="hover-u-primary typography-callout mb-5" style="display: inline-flex;">Edit Data</div>
                      <div v-if="editIsExist" class="block">
                        <div v-if="isRefAlternatifEdit" class="full-w">
                          <div class="block">
                            <div class="mb-4 full">
                              <div class="text-bold">Nama Dosen</div>
                              <div class="full-w">
                                <div class="flex">
                                  <div class="pretty p-default p-curve">
                                    <input type="checkbox" v-model="alternatifEdit.isVerify" />
                                    <div class="state p-primary">
                                      <label>Verifikasi</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="full-w">
                                <div>Nama Depan</div>
                                <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex border-bottom-warning input-my">
                                  <input 
                                    type="text"
                                    placeholder="Masukkan nama depan"
                                    class="input-my--input"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                    v-model="alternatifEdit.namaDosen.namaDepan"
                                  />
                                </div>
                                <div v-if="alternatifEdit.namaDosen.namaDepan == ''" class="label-my--alert">Kolom ini harus diisi</div>
                              </div>
                              <div class="full-w">
                                <div>Nama Belakang (opsional)</div>
                                <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex border-bottom-warning input-my">
                                  <input 
                                    type="text"
                                    placeholder="Masukkan nama belakang"
                                    class="input-my--input"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                    v-model="alternatifEdit.namaDosen.namaBelakang"
                                  />
                                </div>
                              </div>
                              <div class="full-w">
                                <div>Nama Lengkap</div>
                                <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex input-my">
                                  {{alternatifEdit.namaDosen.namaDepan + ' ' +alternatifEdit.namaDosen.namaBelakang}}
                                </div>
                              </div>
                            </div>
                            <div class="mb-4 full">
                              <div class="mt-5 text-bold">Gelar Dosen</div>
                              <div class="full-w">
                                <div>Gelar Depan (opsional)</div>
                                <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex border-bottom-warning input-my">
                                  <input 
                                    type="text"
                                    placeholder="Masukkan gelar depan"
                                    class="input-my--input"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                    v-model="alternatifEdit.namaDosen.gelarDepan"
                                  />
                                </div>
                              </div>
                              <div class="full-w">
                                <div>Gelar Belakang</div>
                                <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex border-bottom-warning input-my">
                                  <input 
                                    type="text"
                                    placeholder="Masukkan gelar belakang"
                                    class="input-my--input"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                    v-model="alternatifEdit.namaDosen.gelarBelakang"
                                  />
                                </div>
                                <div v-if="alternatifEdit.namaDosen.gelarBelakang == ''" class="label-my--alert">Kolom ini harus diisi</div>
                              </div>
                              <div class="full-w">
                                <div>Nama Lengkap + Gelar</div>
                                <div v-if="alternatifEdit.namaDosen.gelarDepan != '' || alternatifEdit.namaDosen.gelarBelakang != ''" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="gelar">
                                  <div>{{alternatifEdit.namaDosen.gelarDepan + ' ' + alternatifEdit.namaDosen.namaDepan + ' ' + alternatifEdit.namaDosen.namaBelakang + ', ' + alternatifEdit.namaDosen.gelarBelakang}}</div>
                                </div>
                              </div>
                            </div>
                            <div class="mb-4 full">
                              <div class="mt-5 text-bold">Universitas</div>
                              <div class="full-w">
                                <div>NIDN</div>
                                <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex border-bottom-warning input-my">
                                  <input 
                                    type="text"
                                    placeholder="Masukkan nidn"
                                    class="input-my--input"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                    v-model="alternatifEdit.nidn"
                                  />
                                </div>
                                <div v-if="alternatifEdit.nidn == ''" class="label-my--alert">Kolom ini harus diisi</div>
                              </div>
                            </div>
                            <div class="mb-4 full">
                              <div class="mt-5 text-bold">Lain-lain</div>
                              <div class="full-w">
                                <div>Jenis Kelamin</div>
                                <select-single
                                  :listsSingle="lists1"
                                  :warna="'option-warning'"
                                  :terpilih="alternatifEdit.gender"
                                  :light-mode="lightMode"
                                  @custom-change="handleCustomChange2"
                                />
                              </div>
                              <div v-if="alternatifEdit.gender == ''" class="label-my--alert">Kolom ini harus diisi</div>
                            </div>
                            
                            <div v-if="alternatifEdit.kriteria != ''" class="mb-4 full">
                              <div class="mt-5 text-bold">Kriteria untuk kebutuhan dosen pembimbing Skripsi</div>
                              <div v-for="(krt, index) in kriteria" :key="krt.id" class="full-w">
                                <div v-if="krt.subKriteria != ''">
                                  <div class="mb-2">{{krt.namaKriteria}}</div>
                                  <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex mb-2" style="flex-direction: column;">                          
                                    <select-single
                                      :lists-single="lists2[index]"
                                      :index-list="index"
                                      :id-kriteria="kriteria[index].idKriteria"
                                      :warna="'option-warning'"
                                      :terpilih="alternatifEdit.subKriteria[index][0].name"
                                      :terupdate="newSubKriteria[index]"
                                      :light-mode="lightMode"
                                      @custom-change="handleCustomChanges2"
                                    />
                                  </div>
                                </div>
                                <div v-else>
                                  <div>{{krt.namaKriteria}}</div>
                                  <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex input-my" style="flex-direction: column;">
                                    <input
                                      type="text"
                                      :placeholder="'Masukkan ' + krt.namaKriteria"
                                      class="input-my--input"
                                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                      v-model="alternatifEdit.kriteria[index].subKriteria.namaSubKriteria"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="full-w">
                                <div>Kuota (lebih spesifik)</div>
                                <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex border-bottom-warning input-my">
                                  <input 
                                    type="number"
                                    min="1"
                                    placeholder="Masukkan lagi kuota bimbingan skripsi"
                                    class="input-my--input"
                                    :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                    v-model="alternatifEdit.skripsi.kuota.total"
                                  />
                                </div>
                                <div v-if="alternatifEdit.skripsi.kuota.total == ''" class="label-my--alert">Kolom ini harus diisi</div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        <div class="mt-5">
                          <div class="button-my glow warning-glow mr-4" :class="lightMode ? 'warning' : 'dark-warning'" @click="updateData()">Update Data</div>
                          <div class="button-my" :class="lightMode ? 'light-transparent' : 'black'" @click="editIsActive = false, editIsExist = false">Batal</div>
                        </div>
                      </div>
                      <div v-else>
                        <div class="alert-my alert-warning mb-3 text-semi-bold-2" :class="lightMode ? 'warning-text' : 'dark-warning-text'">Tidak ada data yang dipilih</div>
                        <p class="line-h-175">Klik tombol <span class="code" :class="lightMode ? 'code-light' : 'code-dark'">edit</span>  pada salah satu Alternatif</p>
                      </div>
                    </div>
                  </div>
                  
                  <div v-else class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'" style="border-top-left-radius: 0;">
                    <div>
                      <div class="hover-u-primary text-125 mb-5" style="display: inline-flex;">Tambah Data</div>
                      <div class="block">
                        <div class="mb-4 full">
                          <div class="text-bold">Akun Dosen</div>
                          <div class="full-w">
                            <div class="flex">
                              <div class="pretty p-default p-curve">
                                <input type="checkbox" v-model="newAlternatif.isVerify" />
                                <div class="state p-primary">
                                  <label>Verifikasi</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="full-w">
                            <div>Email</div>
                            <div>
                              <div :class="lightMode ? 'light-mode-input-my-email' : 'dark-mode-input-my-email'" class="flex input-my-email">
                                <input 
                                  type="text"
                                  placeholder="Masukkan email"
                                  class="border-bottom-2-danger input-my-email--input"
                                  :class="lightMode ? 'light-mode-input-my-email--input' : 'dark-mode-input-my-email--input'"
                                  :style="validateEmail(newAlternatif.namaDosen.email) == true ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                                  v-model="newAlternatif.namaDosen.email"
                                  />
                                </div>
                              <div v-if="newAlternatif.namaDosen.email == ''" class="label-my--alert">Kolom ini harus diisi</div>
                              <div v-else-if="validateEmail(newAlternatif.namaDosen.email) != true" class="label-my--alert">Email tidak valid</div>
                            </div>
                          </div>
                          <div class="mt-5 text-bold">Nama Dosen</div>
                          <div class="full-w">
                            <div>Nama Depan</div>
                            <div class="input-my flex border-bottom-success" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                              <input 
                                type="text"
                                placeholder="Masukkan nama depan"
                                class="border-bottom-2-danger input-my--input"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                :style="newAlternatif.namaDosen.namaDepan !== '' ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                                v-model="newAlternatif.namaDosen.namaDepan"
                              />
                            </div>
                            <div v-if="newAlternatif.namaDosen.namaDepan == ''" class="label-my--alert">Kolom ini harus diisi</div>
                          </div>
                          <div class="full-w">
                            <div>Nama Belakang (opsional)</div>
                            <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex input-my">
                              <input 
                                type="text"
                                placeholder="Masukkan nama belakang"
                                class="input-my--input"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                v-model="newAlternatif.namaDosen.namaBelakang"
                              />
                            </div>
                          </div>
                          <div class="full-w">
                            <div>Nama Lengkap</div>
                            <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex input-my">
                              {{newAlternatif.namaDosen.namaDepan + ' ' +newAlternatif.namaDosen.namaBelakang}}
                            </div>
                          </div>
                        </div>
                        <div class="mb-4 full">
                          <div class="mt-5 text-bold">Gelar Dosen</div>
                          <div class="full-w">
                            <div>Gelar Depan (opsional)</div>
                            <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex input-my">
                              <input 
                                type="text"
                                placeholder="Masukkan gelar depan"
                                class="input-my--input"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                v-model="newAlternatif.namaDosen.gelarDepan"
                              />
                            </div>
                          </div>
                          <div class="full-w">
                            <div>Gelar Belakang</div>
                            <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex border-bottom-success input-my">
                              <input 
                                type="text"
                                placeholder="Masukkan gelar belakang"
                                class="border-bottom-2-danger input-my--input"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                :style="newAlternatif.namaDosen.gelarBelakang !== '' ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                                v-model="newAlternatif.namaDosen.gelarBelakang"
                              />
                            </div>
                            <div v-if="newAlternatif.namaDosen.gelarBelakang == ''" class="label-my--alert">Kolom ini harus diisi</div>
                          </div>
                          <div class="full-w">
                            <div>Nama Lengkap + Gelar</div>
                            <div v-if="newAlternatif.namaDosen.gelarDepan != '' || newAlternatif.namaDosen.gelarBelakang != ''"  :class="lightMode ? 'light-mode-input-my-gelar' : 'dark-mode-input-my-gelar'">
                              <div>{{newAlternatif.namaDosen.gelarDepan + ' ' + newAlternatif.namaDosen.namaDepan + ' ' + newAlternatif.namaDosen.namaBelakang + ', ' + newAlternatif.namaDosen.gelarBelakang}}</div>
                            </div>
                          </div>
                        </div>
                        <div class="mb-4 full">
                          <div class="mt-5 text-bold">Universitas</div>
                          <div class="full-w">
                            <div>NIDN</div>
                            <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex input-my">
                              <input 
                                type="text"
                                placeholder="Masukkan nidn"
                                class="border-bottom-2-danger input-my--input"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                :style="newAlternatif.nidn !== null && newAlternatif.nidn !== '' ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                                v-model="newAlternatif.nidn"
                              />
                            </div>
                            <div v-if="newAlternatif.nidn == null || newAlternatif.nidn == ''" class="label-my--alert">Kolom ini harus diisi</div>
                          </div>
                        </div>
                        <div class="mb-4 full">
                          <div class="mt-5 text-bold">Lain-lain</div>
                          <div class="full-w">
                            <div>Jenis Kelamin</div>
                            <select-single
                              :listsSingle="lists1"
                              :warna="'option-success'"
                              :light-mode="lightMode"
                              @custom-change="handleCustomChange"
                            />
                          </div>
                          <div v-if="newAlternatif.gender == ''" class="label-my--alert">Kolom ini harus diisi</div>
                        </div>
          
                        <div v-if="newAlternatif.kriteria == ''">
                          <div v-if="validateEmail(newAlternatif.namaDosen.email) == true && newAlternatif.namaDosen.namaDepan !== '' && newAlternatif.namaDosen.gelarBelakang !== '' && newAlternatif.nidn !== null && newAlternatif.nidn !== '' && newAlternatif.gender !== ''" class="button-my glow success-glow mr-2" :class="lightMode ? 'success' : 'dark-success'" @click="addNewObj(), addLists()">Selanjutnya</div>
                          <div v-else class="button-my glow success success-glow mr-4 disable">Selanjutnya</div>
                          <div class="button-my" :class="lightMode ? 'light-transparent' : 'black'" @click="kosongkanNewAlternatif()">Kosongkan Form</div>
                        </div>
                        
                        <div v-if="newAlternatif.kriteria != ''" class="mb-4 full">
                          <div class="mt-5 text-bold">Kriteria untuk kebutuhan dosen pembimbing Skripsi</div>
                          <div v-for="(krt, index) in kriteria" :key="krt.id" class="full-w">
                            <div v-if="krt.subKriteria != ''">
                              <div class="mt-3 mb-2">{{krt.namaKriteria}}</div>
                              <div class="input-my flex" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                                <select-single
                                  :lists-single="lists[index]"
                                  :index-list="index"
                                  :id-kriteria="krt.idKriteria"
                                  :warna="'option-success'"
                                  :light-mode="lightMode"
                                  @custom-change="handleCustomChanges"
                                />
                                <div v-if="newAlternatif.kriteria[index].idSubKriteria == null" class="label-my--alert">Kolom ini harus diisi</div>
                              </div>
                            </div>
                            <div v-else>
                              <div class="mt-3 mb-2">{{krt.namaKriteria}}</div>
                              <div class="input-my flex" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                                <input
                                  type="text"
                                  :placeholder="'Masukkan ' + krt.namaKriteria"
                                  class="input-my--input"
                                  :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                  v-model="newAlternatif.kriteria[index].subKriteria.namaSubKriteria"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="full-w">
                            <div>Kuota (lebih spesifik)</div>
                            <div class="input-my flex border-bottom-success" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                              <input 
                                type="number"
                                min="1"
                                placeholder="Masukkan lagi kuota bimbingan skripsi"
                                class="input-my--input border-bottom-2-danger"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                :style="newAlternatif.skripsi.kuota.total !== null && newAlternatif.skripsi.kuota.total !== '' ? 'border-bottom: 2px solid hsl(146deg, 79%, 44%) !important;' : ''"
                                v-model="newAlternatif.skripsi.kuota.total"
                              />
                            </div>
                            <div v-if="newAlternatif.skripsi.kuota.total == null || newAlternatif.skripsi.kuota.total == ''" class="label-my--alert">Kolom ini harus diisi</div>
                          </div>
                          <div class="mt-5">
                            <div v-if="hitungPilihKriteria.includes(0) || newAlternatif.skripsi.kuota.total == null || newAlternatif.skripsi.kuota.total == ''" class="button-my glow success success-glow mr-2 disable">Tambahkan Data</div>
                            <div v-else class="button-my glow success-glow mr-4" :class="lightMode ? 'success' : 'dark-success'" @click="addData()">Tambahkan Data</div>
                            <div class="button-my" :class="lightMode ? 'light-transparent' : 'black'" @click="kosongkanNewAlternatif()">Kosongkan Form</div>
                          </div>
                        </div>
                        
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
      <footer-component v-if="el4" :light-mode="lightMode" class="foo-right-mobile"/>
    </Transition>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, onMounted } from 'vue'; 
import swal from 'sweetalert'
import { useDatabase } from '../../services/DataService';
import ToastDanger from '../../components/toasts/ToastDanger.vue';
import ToastSuccess from '../../components/toasts/ToastSuccess.vue';
import ToastWarning from '../../components/toasts/ToastWarning.vue';
import SelectSingle from '../../components/selects/SelectSingle.vue';
import { useMyFunc } from '../../services/OtherFunctions'
import {useAuth} from '../../firebase/firebase'
// import LoadingComponent from '../../components/LoadingComponent.vue';

const { el1, el2, el3, el4, delay } = useMyFunc()

const FooterComponent = defineAsyncComponent(() => import('../../components/FooterComponent.vue'))
const EditIcon = defineAsyncComponent(() => import('../../components/icons/EditIcon.vue'))
const TrashIcon = defineAsyncComponent(() => import('../../components/icons/TrashIcon.vue'))
const MenuIcon = defineAsyncComponent(() => import('../../components/icons/MenuIcon.vue'))
const ArrowLeftIcon = defineAsyncComponent(() => import('../../components/icons/ArrowLeftIcon.vue'))
const MaximizeIcon = defineAsyncComponent(() => import('../../components/icons/MaximizeIcon.vue'))
const MinimizeIcon = defineAsyncComponent(() => import('../../components/icons/MinimizeIcon.vue'))

const {thisUser} = useAuth()

const { kriteria, hitungJmlKriteria, alternatif, isRefAlternatif, getDocAlternatif, setAlternatif, updateAlternatif, deleteAlternatif, alternatifEdit, isRefAlternatifEdit, deleteChatting, setChatting, updateChatting, getDocChatting } = useDatabase()

defineProps({
  lightMode: Boolean
})
// emit
const handleCustomChanges = (s,t,u,v,w) => {
  newAlternatif.value.kriteria[t].idKriteria = v
  newAlternatif.value.kriteria[t].idSubKriteria = w
  hitungPilihKriteria.value.splice(t,1,s)
}
const handleCustomChanges2 = (s,t,u,v,w) => {
  alternatifEdit.value.kriteria[t].idKriteria = v
  alternatifEdit.value.kriteria[t].idSubKriteria = w
  newSubKriteria.value[t] = s
}
const handleCustomChange = (s) => {
  newAlternatif.value.gender = s
}
const handleCustomChange2 = (s) => {
  alternatifEdit.value.gender = s
}

const copyAlternatif = ref(null)
const limitTabel = ref({
  from: 0,
  to: 4,
  current: 1,
  interval: 4
})
const pilihTr = ref(null)
const newSubKriteria = ref([])
const newAlternatif = ref(
  {
    namaDosen: {
      email: '',
      password: '',
      namaDepan: '',
      namaBelakang: '',
      gelarDepan: '',
      gelarBelakang: ''
    },
    nidn: null,
    gender: '',
    skripsi: {
      kuota: {
        total: null,
        terpakai: 0
      }
    },
    kriteria: [],
    isVerify: false
  }
)
const newGroupChat = ref(
  {
    alternatif: {
      namaDosen: {
        namaDepan: '',
        namaBelakang: ''
      },
      gender: ''
    },
    messages: {
      sender: '',
      text: '',
      time: ''
    }
  }
)
const kosongkanNewAlternatif = () => {
  newAlternatif.value.namaDosen.namaDepan = ''
  newAlternatif.value.namaDosen.namaBelakang = ''
  newAlternatif.value.namaDosen.gelarDepan = ''
  newAlternatif.value.namaDosen.gelarBelakang = ''
  newAlternatif.value.namaDosen.email = ''
  newAlternatif.value.namaDosen.password = ''
  newAlternatif.value.nidn = null
  newAlternatif.value.gender = ''
  newAlternatif.value.skripsi.kuota.total = null
  newAlternatif.value.kriteria = []
  newAlternatif.value.isVerify = false
  hitungPilihKriteria.value = []
}
const kosongkanNewGroupChat = () => {
  newGroupChat.value.alternatif.namaDosen.namaDepan = ''
  newGroupChat.value.alternatif.namaDosen.namaBelakang = ''
  newGroupChat.value.alternatif.gender = ''
}
const kosongkanAlternatifEdit = () => {
  alternatifEdit.value.namaDosen.namaDepan = ''
  alternatifEdit.value.namaDosen.namaBelakang = ''
  alternatifEdit.value.namaDosen.gelarDepan = ''
  alternatifEdit.value.namaDosen.gelarBelakang = ''
  alternatifEdit.value.namaDosen.email = ''
  alternatifEdit.value.nidn = null
  alternatifEdit.value.gender = ''
  alternatifEdit.value.skripsi.kuota.total = null
  alternatifEdit.value.kriteria = []
  newSubKriteria.value = []
}

const currentAlternatif = ref([]),
      // toast
      showToast = ref(false),
      showToast2 = ref(false),
      showToast3 = ref(false),
      // active class
      editIsActive = ref(false),
      editIsExist = ref(false),
      lists1 = ref([
        {name: 'Laki-laki'}, 
        {name: 'Perempuan'}
      ]),
      lists = ref([]),
      lists2 = ref([])
const hitungPilihKriteria = ref([]) 
const tabelAlternatif = ref(null)
const tabelAlternatif2 = ref(null)

const fullTabel = ref(false)

// crud
const addData = () => {
      var profileAlternatif = {
        avatar: newAlternatif.value.gender === 'Laki-laki' ? 'ToyFaces_Tansparent_BG_dosen_1.png' : 'ToyFaces_Tansparent_BG_dosen_2.png',
        url: newAlternatif.value.gender === 'Laki-laki' ? 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_dosen_1.png?alt=media&token=419dbc6a-105c-4c4b-b173-40f54dc9c6c4' : 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_dosen_2.png?alt=media&token=115e28ee-701f-4c10-90d2-cf115c50e03c',
        background: newAlternatif.value.gender === 'Laki-laki' ? 'link-gradient-1' : 'danger-gradient-1',
        color: newAlternatif.value.gender === 'Laki-laki' ? 'link-text' : 'danger-text'
      }
      var dataAlternatif = {
        namaDosen: {
          namaDepan: newAlternatif.value.namaDosen.namaDepan,
          namaBelakang: newAlternatif.value.namaDosen.namaBelakang,
          gelarDepan: newAlternatif.value.namaDosen.gelarDepan,
          gelarBelakang: newAlternatif.value.namaDosen.gelarBelakang,
          email: (newAlternatif.value.namaDosen.email).toLowerCase()
        },
        nidn: newAlternatif.value.nidn,
        gender: newAlternatif.value.gender,
        skripsi: {
          kuota: 
          {
            total: newAlternatif.value.skripsi.kuota.total,
            terpakai: newAlternatif.value.skripsi.kuota.terpakai
          }
        },
        kriteria: newAlternatif.value.kriteria,
        profile : profileAlternatif,
        isVerify: newAlternatif.value.isVerify
      }
      var dataGroupChat = {
        alternatif: {
          namaDosen: {
            namaDepan: newAlternatif.value.namaDosen.namaDepan,
            namaBelakang: newAlternatif.value.namaDosen.namaBelakang,
            gelarDepan: '',
            gelarBelakang: '',
          },
          gender: newAlternatif.value.gender,
          profile : profileAlternatif
        },
        participants: 0,
        messagesUnreadDosen: 0,
        messagesLatest: {
          createdAt: new Date(),
          date: ((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear())
        },
        applicationsAccept: [],
        applicationsTotal: 0,
        messagesToday: false,
        isVerify: newAlternatif.value.isVerify
      }
      const addAlternatif = async() => {
        await setAlternatif((newAlternatif.value.namaDosen.email).toLowerCase(),dataAlternatif)
        kosongkanNewAlternatif()
        // console.log('dataAlternatif.namaDosen.email =>', dataAlternatif.namaDosen.email);
      }
      const setGroupChat = async() => {
        await setChatting((newAlternatif.value.namaDosen.email).toLowerCase(),dataGroupChat)
        kosongkanNewGroupChat()
      }
      swal({
        title: "Yakin data sudah benar?",
        text: "Data akan ditambahkan ke database!",
        buttons: ["Batal", "Tambahkan"]
      })
      .then((willAdd) => {
        if (willAdd) {
          addAlternatif()
          setGroupChat()
          tabelAlternatif.value?.scrollIntoView({ behavior: 'smooth' })
          
          showToast.value = true
          setTimeout(() => showToast.value = false, 5000)
        } else {
          swal("Okee periksa kembali data anda! 😅");
        }
      });
    },
    deleteData = (id) => {
      const deleteTempDataChat = async() => {
        var _dataSubCollection = null
        var refSubCollection = getDocChatting(id)
        await refSubCollection.get().then(async(doc) => {
          if (doc.exists) {
            _dataSubCollection = doc.data()
          }
          for ( var i=0; i<_dataSubCollection.messagesTotal ; i++){
            refSubCollection.collection('messages').doc('docMsg'+Number(i+1)).delete()
            console.log('berhasil delete sub collection messages')
          }
        })
        .then(() => {
          refSubCollection.collection('participants').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete()
            })
            console.log('berhasil delete sub collection participants')
          })
        })
      }
      swal({
        title: "Yakin menghapus data?",
        text: "Data yang telah dihapus tidak bisa dikembalikan!",
        buttons: ["Batal", "Hapus"],
        dangerMode: true,
      })
      .then(async(willDelete) => {
        if (willDelete) {
          await deleteTempDataChat()
          deleteAlternatif(id)
          deleteChatting(id)
          editIsActive.value = false
          editIsExist.value = false
      
          showToast2.value = true
          setTimeout(() => showToast2.value = false, 5000)
        } else {
          swal("Tindakan dibatalkan, data anda masih aman! 😉");
        }
      })
    },
    editData = async(id) => {
      await getDocAlternatif(id).get().then((doc) => { 
        alternatifEdit.value = doc.data();
        alternatifEdit.value['subKriteria'] = []
      })
      .then(() => {
        let pjgKriteria = alternatifEdit.value.kriteria.length
        for (var i=0; i<pjgKriteria; i++){
          alternatifEdit.value.subKriteria.push(kriteria.value[i].subKriteria.filter(
            v => v.idSubKriteria === alternatifEdit.value.kriteria[i].idSubKriteria
          ))
        }
      })
      editIsExist.value = true
      currentAlternatif.value.id = id
    },
    updateData = () => {
      var id = currentAlternatif.value.id
      var alternatifEditData = {
        'namaDosen.namaDepan': alternatifEdit.value.namaDosen.namaDepan,
        'namaDosen.namaBelakang': alternatifEdit.value.namaDosen.namaBelakang,
        'namaDosen.gelarDepan': alternatifEdit.value.namaDosen.gelarDepan,
        'namaDosen.gelarBelakang': alternatifEdit.value.namaDosen.gelarBelakang,
        'nidn': alternatifEdit.value.nidn,
        'gender': alternatifEdit.value.gender,
        'kriteria': alternatifEdit.value.kriteria,
        'skripsi.kuota.total': alternatifEdit.value.skripsi.kuota.total,
        'profile.avatar': alternatifEdit.value.gender === 'Laki-laki' ? 'ToyFaces_Tansparent_BG_dosen_1.png' : 'ToyFaces_Tansparent_BG_dosen_2.png',
        'profile.background': alternatifEdit.value.gender === 'Laki-laki' ? 'link-gradient-1' : 'danger-gradient-1',
        'isVerify': alternatifEdit.value.isVerify
      }
      var alternatifEditGroupChat = {
        'alternatif.namaDosen.namaDepan': alternatifEdit.value.namaDosen.namaDepan,
        'alternatif.namaDosen.namaBelakang': alternatifEdit.value.namaDosen.namaBelakang,
        'alternatif.gender': alternatifEdit.value.gender,
        'alternatif.profile.avatar': alternatifEdit.value.gender === 'Laki-laki' ? 'ToyFaces_Tansparent_BG_dosen_1.png' : 'ToyFaces_Tansparent_BG_dosen_2.png',
        'alternatif.profile.background': alternatifEdit.value.gender === 'Laki-laki' ? 'link-gradient-1' : 'danger-gradient-1',
        'isVerify': alternatifEdit.value.isVerify
      }
      const updateDataAlternatif = async() => {
        await updateAlternatif(id,alternatifEditData)
        kosongkanAlternatifEdit()
      }
      const updateDataGroupChat = async() => {
        await updateChatting(id,alternatifEditGroupChat)
      }
      swal({
        title: "Yakin mengupdate data?",
        text: "Data lama akan diganti dengan data baru",
        buttons: ["Batal", "Update"]
      })
      .then((willUpdate) => {
        if (willUpdate) {
          updateDataAlternatif()
          updateDataGroupChat()
          
          tabelAlternatif.value?.scrollIntoView({ behavior: 'smooth' })
          editIsExist.value = false
      
          showToast3.value = true
          setTimeout(() => showToast3.value = false, 5000)
        } else {
          swal("Tindakan dibatalkan, data anda masih aman! 😉");
        }
      });
    }

//add new object to an array
const addNewObj = () => {
  for (var i = 0; i < kriteria.value.length; i++){
    newAlternatif.value.kriteria.push(
      {
        idKriteria: null,
        idSubKriteria: null,
        // namaKriteria: kriteria.value[i].namaKriteria,
        // jenisKriteria: kriteria.value[i].jenisKriteria,
        // subKriteria: 
        // {
        //   idSubKriteria: null,
        //   name: '',
        //   bobotSubKriteria: null
        // }
      }
    )
  }
}
const addLists = () => {
  for (var i = 0; i < kriteria.value.length; i++){
    lists.value.push(kriteria.value[i].subKriteria)
    hitungPilihKriteria.value.push(0)
  }
}
const addLists2 = () => {
  for (var i = 0; i < kriteria.value.length; i++){
    lists2.value.push(kriteria.value[i].subKriteria)
  }
}
function validateEmail(elementValue){      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue); 
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
@import '../../pretty-checkbox/src/pretty-checkbox.scss';

.pretty.p-default .state:before{
  top: 0;
}
.pretty.p-default .state label:before, .pretty.p-default .state label:after{
  top: 1px;
  left: 1px;
}
.pretty.p-default.p-fill input:checked ~ .state label:after{
  left: calc(1em - 1px);
}

.close{
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
.ftabel{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 100%;
  z-index: 31;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &-base{
    display: flex;
    flex-direction: column;
    position: relative;
  }
  &-fit{
    display: flex;
    flex-direction: column;
    max-height: 90vh;
    max-width: 95vw;
    overflow: auto;
  }
}
.max{
  display: flex;
  flex-direction: row-reverse;
  & .bg{
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease;
    &:hover{
      cursor: pointer;
    }
    &-light{
      color: var(--light-color2);
      &:hover{
        color: var(--light-color1);
        background: var(--light-bg2);
      }
    }
    &-dark{
      color: var(--dark-color2);
      &:hover{
        color: var(--dark-color1);
        background: var(--dark-bg2);
      }
    }
  }
}
.table-my-foo-nav{
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  margin-top: -1rem;
  &-items {
    display: flex;
    align-items: center;
  }
  &-item {
    min-width: 36px;
    min-height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    cursor: pointer;
  }
}
.dot-verify {
  min-width: 8px;
  min-height: 8px;
  background: deepskyblue;
  display: flex;
  position: absolute;
  top: 10px;
  right: 25%;
  border-radius: 1rem;
}
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


.input-my-gelar {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  div {
    padding: .5rem;
  }
}
.edit:hover {
  color: $warning;
}
.trash:hover {
  color: $danger;
}
.icon-mata{
  position: absolute;
  top: 30%;
  right: 5%;
  width: 1rem;
  height: auto;
  cursor: pointer;
  z-index: 3;
}
</style>