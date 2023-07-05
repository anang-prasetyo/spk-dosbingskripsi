<template>
  <div v-if="thisUser" class="base">
    <!-- <loading-component v-if="loading" :lightMode="lightMode"/> -->
    <div class="toast">
      <toast-danger v-if="showToastDanger" :msg="toastMsg" />
      <toast-warning v-if="showToastWarning || isToast" :msg="toastMsg" />
    </div>
    <div class="content-my">
      <div class="content-my--head" :class="lightMode ? 'light-mode-glass' : 'dark-mode-glass'">
        <div class="content-my--head-value text-semi-bold text-125">Profil</div>
        <div id="icon-menu" style="display: flex;">
          <menu-icon @toggleMenu="handleToggleMenu" :light-mode="lightMode" @click="$emit('toggleMenu', isMenu)"/>
        </div>
      </div>
      <div ref="top" class="content-my--main">
        <div ref="top2"></div>
        <div class="card-bubble-my" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
          <Transition name="slide">
            <div>
              <div style="overflow: auto;padding: 2rem 0.5rem;">
                <div id="KTM" v-if="el1" class="profile-my">
                  <div class="profile-my--top">
                    <div class="ktm-card-my">
                      <div class="ktm-card-my--head">
                        <div class="ktm-card-my--head-left">
                          <ums-logo/>
                        </div>
                        <div class="ktm-card-my--head-right">
                          <div class="ktm-card-my--head-right-text-1">Universitas Muhammadiyah Surakarta</div>
                          <div class="ktm-card-my--head-right-text-2">Kartu Tanda {{thisUser.user.userLevel}}</div>
                          <div class="ktm-card-my--head-right-text-3">Jl. A. Yani Tromol Pos l Pabelan Kartasura Telp. (0271) 717417, 719483</div>
                          <div class="ktm-card-my--head-right-text-3">Fax. (0271) 715448 Surakarta 57162</div>
                        </div>
                      </div>
                      <div v-if="editProfile" class="ktm-card-my--main" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
                        <!-- bind bg  -->
                        <div class="ktm-card-my--main-photo" :class="editProfile.profile.background">
                          <div class="ktm-card-my--main-photo-icon">
                            <img :src="editProfile.profile.url">
                          </div>
                        </div>
                        <div class="ktm-card-my--main-data" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
                          <div>
                            <div class="ktm-card-my--main-data--label">Nama</div>
                            <div 
                              class="ktm-card-my--main-data--value" 
                            >
                              {{editProfile.user.userName}}
                            </div>
                          </div>
                          <div>
                            <div class="ktm-card-my--main-data--label">Nomor Induk {{thisUser.user.userLevel}} / NI{{getFirstLetters(thisUser.user.userLevel)}}</div>
                            <div 
                              class="ktm-card-my--main-data--value"
                            >
                              {{editProfile.user.userNIM}}
                            </div>
                          </div>
                          <div>
                            <div class="ktm-card-my--main-data--label">Program Studi</div>
                            <div 
                              class="ktm-card-my--main-data--value"
                            >
                              {{editProfile.user.userProdi}}
                            </div>
                          </div>
                          <div class="ktm-card-my--main-data--bot">
                            <div v-if="thisUser" class="ktm-card-my--main-data--bot-left">
                            </div>
                            <div class="ktm-card-my--main-data--bot-right"></div>
                          </div>
                        </div>
                      </div>
                      <div v-else-if="thisUser" class="ktm-card-my--main" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
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
                            <div v-if="thisUser.user.userLevel === 'Dosen'" class="ktm-card-my--main-data--label">Nomor Induk Dosen Nasional / NIDN</div>
                            <div v-else class="ktm-card-my--main-data--label">Nomor Induk {{thisUser.user.userLevel}} / NI{{getFirstLetters(thisUser.user.userLevel)}}</div>
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
                            <div v-if="thisUser" class="ktm-card-my--main-data--bot-left">
                              <div v-if="thisUser.user.userLevel !== 'Dosen'" @click="getUserData(), top2?.scrollIntoView({ behavior: 'smooth' })" class="button-my glow warning-glow mt-4" :class="lightMode ? 'warning' : 'dark-warning'">Edit Profil</div>
                            </div>
                            <div class="ktm-card-my--main-data--bot-right"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="editProfile" class="profile-my--main pt-6" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
                <div class="mt-6 text-semi-bold">Data Diri</div>
                <div>
                  <div class="mt-4 mb-2">Nama</div>
                  <div class="input-my border-bottom-link" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                    <input 
                      type="text" 
                      class="input-my--input"
                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'" 
                      v-model="editProfile.user.userName"
                      maxlength="23"
                    />
                    <div v-if="editProfile.user.userName.length == 23" class="label-my--alert mt-2">Maksimal 23 karakter</div>
                    <div v-if="editProfile.user.userName.length == 0" class="label-my--alert mt-2">Harus diisi</div>
                  </div>
                </div>
                <div>
                  <div class="mt-4 mb-2">Nomor Induk Mahasiswa / NIM</div>
                  <div class="input-my border-bottom-link" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                    <input 
                      type="text" 
                      class="input-my--input"
                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'" 
                      v-model="editProfile.user.userNIM"
                      maxlength="10"
                    />
                    <div v-if="editProfile.user.userNIM.length == 10" class="label-my--warn mt-2">Maksimal 10 karakter</div>
                    <div v-if="editProfile.user.userNIM.length == 0" class="label-my--alert mt-2">Harus diisi</div>
                  </div>
                </div>
                <div>
                  <div class="mt-4 mb-2">Program Studi</div>
                  <div class="input-my border-bottom-link" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                    <input 
                      type="text" 
                      class="input-my--input"
                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'" 
                      v-model="editProfile.user.userProdi"
                    />
                    <div v-if="editProfile.user.userProdi.length == 0" class="label-my--alert mt-2">Harus diisi</div>
                  </div>
                </div>
                <div class="mt-6 text-semi-bold">Akun</div>
                <div>
                  <div class="mt-4 mb-2">Email</div>
                  <div class="input-my" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                    <input 
                      type="text" 
                      class="input-my--input"
                      :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'" 
                      v-model="editProfile.user.userEmail"
                      readonly
                    />
                    <div class="label-my--alert mt-2">Email tidak bisa diganti</div>
                  </div>
                </div>
                <div>
                  <div class="mt-4 mb-2">Password</div>
                  <div class="input-my" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
                    <div v-if="showPassword" style="position: relative;">
                      <input 
                        type="text" 
                        v-model="editProfile.user.userPassword" 
                        readonly 
                        :class="lightMode ? 'light-mode-input-my--input-nh' : 'dark-mode-input-my--input-nh'"
                        class="input-my--input-nh" 
                      />
                      <eye-slash-icon class="icon-mata" @click="showPassword = null"></eye-slash-icon>
                    </div>
                    <div v-else style="position: relative;">
                      <input 
                        type="password" 
                        v-model="editProfile.user.userPassword" 
                        readonly 
                        :class="lightMode ? 'light-mode-input-my--input-nh' : 'dark-mode-input-my--input-nh'"
                        class="input-my--input-nh" 
                      />
                      <eye-icon class="icon-mata" @click="showPassword = true"></eye-icon>
                    </div>
                    <div class="label-my--alert mt-2">Password tidak bisa diganti</div>
                  </div>
                </div>
                <div class="m-5 edit-my" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
                  <div id="signup-mobile-edit-my--profil" class="edit-my--profil">
                    <div class="left">
                      <div class="main xl" :class="editProfile.profile.background ? editProfile.profile.background : 'light-gradient'">
                        <img v-if="editProfile.profile.avatar" :src="editProfile.profile.url">
                        <!-- <img :src="thisUser.profile.url"> -->
                      </div>
                    </div>
                    <div class="right">
                      <div class="my-2 text-semi-bold">Edit Foto Profil</div>
                      <div class="text">Pilih avatar</div>
                      <div class="top-2">
                        <div class="top">
                          <div v-for="(avtr, index) in avatars" :key="index" class="item">
                            <div class="main sm light-gradient" :class="[lightMode && editProfile.profile.avatar == avtr.image ? 'selected-light' : '', !lightMode && editProfile.profile.avatar == avtr.image ? 'selected-dark' : '']">
                              <div v-if="editProfile.profile.avatar == avtr.image" :class="lightMode ? 'dot-select dot-select-light' : 'dot-select dot-select-dark'"><check-icon /></div>
                              <img :src="avtr.url" :alt="avtr.image" @click="editProfile.profile.avatar = avtr.image, editProfile.profile.url = avtr.url">
                              <!-- <img :src="'src/assets/avatar/'+avtr.image" :alt="avtr.image" @click="editProfile.profile.avatar = avtr.image"> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text mt-2">Pilih background</div>
                      <div class="bot-2">
                        <div class="bot">
                          <div v-for="(bgs, index) in backgrounds" :key="index" class="item">
                            <div v-if="editProfile.profile.background == bgs.bgColor" :class="lightMode ? 'dot-select dot-select-light' : 'dot-select dot-select-dark'"><check-icon /></div>
                            <div class="main sm" 
                              :class="[lightMode && editProfile.profile.background == bgs.bgColor ? (bgs.bgColor+' selected-light') : bgs.bgColor, !lightMode && editProfile.profile.background == bgs.bgColor ? (bgs.bgColor+' selected-dark') : bgs.bgColor]" 
                              @click="editProfile.profile.background = bgs.bgColor, editProfile.profile.color = bgs.color"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <div class="button-my mr-4" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="batalUpdateUserData()">Batal</div>
                  <div v-if="editProfile.user.userName !== '' && editProfile.user.userNIM !== '' && editProfile.user.userProdi !== '' && editProfile.user.userPassword !== '' && editProfile.user.userEmail !== ''" class="button-my glow warning-glow" :class="lightMode ? 'warning' : 'dark-warning'" @click="toUpdateUserData(), top?.scrollIntoView({ behavior: 'smooth' })">Simpan Perubahan</div>
                  <div v-else class="button-my glow warning warning-glow disable">Simpan Perubahan</div>
                </div>
              </div>
            </div>
          </Transition>
          <Transition name="slide">
            <div id="skripsi-ku" v-if="el2">
              <div v-if="thisUser" class="mt-5">
                <div v-if="thisUser.user.userLevel === 'Mahasiswa' && afterDosbing">
                  <div class="hover-u-primary mb-4 curzr-hover text-15 text-regular" style="display: inline-flex;">Skripsi-ku</div>
                  <div class="alert-my alert-primary mb-5 text-semi-bold-2" :class="!lightMode ? 'dark-primary-text' : 'primary-text'">Catatan : Kamu hanya bisa mengubah judul dan deskripsi selama kamu belum mendapatkan dosen pembimbing skripsi.</div>
                  <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                    <div v-if="thisUser.skripsi">
                      <div class="table-my">
                        <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td colspan="2">Detail Skripsi</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Judul</td>
                              <td v-if="thisUser.skripsi.judul !== ''">{{ thisUser.skripsi.judul }}</td>
                              <td v-else :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Belum mengisi judul</td>
                            </tr>
                            <tr>
                              <td>Deskripsi</td>
                              <td v-if="thisUser.skripsi.deskripsi !== ''">{{ thisUser.skripsi.deskripsi }}</td>
                              <td v-else :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Belum mengisi deskripsi</td>
                            </tr>
                            <tr>
                              <td>Pembimbing</td>
                              <td v-if="thisUser.skripsi.pembimbing !== ''">{{ dosbing }}</td>
                              <td v-else :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Belum ada pembimbing</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div v-if="thisUser.progres.isDosbing" class="label-my--alert mt-3">Judul dan Deskripsi tidak bisa diubah karena kamu sudah mendapat dosen pembimbing skripsi</div>
                      <div
                        v-if="!isEditSkripsi && !thisUser.progres.isDosbing"
                        class="button-my glow warning-glow mt-4" 
                        :class="lightMode ? 'warning' : 'dark-warning'" 
                        @click="toEditSkripsi(thisUser.skripsi.judul, thisUser.skripsi.deskripsi), isEditSkripsi = true"
                      >Edit Skripsi</div>
                      <div
                        v-else-if="!isEditSkripsi && thisUser.progres.isDosbing"
                        class="button-my glow warning-glow mt-4 disable" 
                        :class="lightMode ? 'warning' : 'dark-warning'" 
                      >Edit Skripsi</div>
                      <div v-if="isEditSkripsi" class="mt-5">
                        <div class="mb-4 full">
                          <div class="mt-5 text-bold">Skripsi</div>
                          <div class="full-w">
                            <div>Judul Skripsi</div>
                            <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex input-my">
                              <input 
                                type="text"
                                placeholder="Masukkan judul skripsi"
                                class="input-my--input"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                v-model="editSkripsi.judul"
                              />
                            </div>
                          </div>
                          <div class="full-w">
                            <div>Deskripsi Skripsi</div>
                            <div class="textarea-my border-bottom-primary" :class="lightMode ? 'light-mode-textarea-my' : 'dark-mode-textarea-my'">
                              <textarea
                                class="textarea-my--input"
                                :class="lightMode ? 'light-mode-textarea-my--input' : 'dark-mode-textarea-my--input'"
                                placeholder="Masukkan deskripsi skripsi"
                                v-model="editSkripsi.deskripsi"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="button-my mr-4" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="batalUpdateSkripsi()">Batal</div>
                        <div class="button-my glow warning-glow mt-4" :class="lightMode ? 'warning' : 'dark-warning'" @click="simpanPerubahanSkripsi(editSkripsi.judul, editSkripsi.deskripsi)">Simpan Perubahan</div>
                      </div>
                    </div>
                    <div v-else>Belum mengisi judul skripsi dan deskripsi</div>
                  </div>
                </div>
                <div v-else-if="thisUser.user.userLevel === 'Mahasiswa'">
                  <div class="hover-u-primary mb-4 curzr-hover text-15 text-regular" style="display: inline-flex;">Skripsi-ku</div>
                  <div class="alert-my alert-primary mb-5 text-semi-bold-2" :class="!lightMode ? 'dark-primary-text' : 'primary-text'">Catatan : Kamu hanya bisa mengubah judul dan deskripsi selama kamu belum mendapatkan dosen pembimbing skripsi.</div>
                  <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                    <div v-if="thisUser.skripsi">
                      <div class="table-my">
                        <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td colspan="2">Detail Skripsi</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Judul</td>
                              <td v-if="thisUser.skripsi.judul !== ''">{{ thisUser.skripsi.judul }}</td>
                              <td v-else :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Belum mengisi judul</td>
                            </tr>
                            <tr>
                              <td>Deskripsi</td>
                              <td v-if="thisUser.skripsi.deskripsi !== ''">{{ thisUser.skripsi.deskripsi }}</td>
                              <td v-else :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Belum mengisi deskripsi</td>
                            </tr>
                            <tr>
                              <td>Pembimbing</td>
                              <td :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">Belum ada pembimbing</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        v-if="!isEditSkripsi && !thisUser.progres.isDosbing"
                        class="button-my glow warning-glow mt-4" 
                        :class="lightMode ? 'warning' : 'dark-warning'" 
                        @click="toEditSkripsi(thisUser.skripsi.judul, thisUser.skripsi.deskripsi), isEditSkripsi = true"
                      >Edit Skripsi</div>
                      <div
                        v-else-if="!isEditSkripsi && thisUser.progres.isDosbing"
                        class="button-my glow warning-glow mt-4 disable" 
                        :class="lightMode ? 'warning' : 'dark-warning'" 
                      >Edit Skripsi</div>
                      <div v-if="isEditSkripsi" class="mt-5">
                        <div class="mb-4 full">
                          <div class="mt-5 text-bold">Skripsi</div>
                          <div class="full-w">
                            <div>Judul Skripsi</div>
                            <div :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'" class="flex input-my">
                              <input 
                                type="text"
                                placeholder="Masukkan judul skripsi"
                                class="input-my--input"
                                :class="lightMode ? 'light-mode-input-my--input' : 'dark-mode-input-my--input'"
                                v-model="editSkripsi.judul"
                              />
                            </div>
                          </div>
                          <div class="full-w">
                            <div>Deskripsi Skripsi</div>
                            <div class="textarea-my border-bottom-primary" :class="lightMode ? 'light-mode-textarea-my' : 'dark-mode-textarea-my'">
                              <textarea
                                class="textarea-my--input"
                                :class="lightMode ? 'light-mode-textarea-my--input' : 'dark-mode-textarea-my--input'"
                                placeholder="Masukkan deskripsi skripsi"
                                v-model="editSkripsi.deskripsi"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="button-my mr-4" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="batalUpdateSkripsi()">Batal</div>
                        <div class="button-my glow warning-glow mt-4" :class="lightMode ? 'warning' : 'dark-warning'" @click="simpanPerubahanSkripsi(editSkripsi.judul, editSkripsi.deskripsi)">Simpan Perubahan</div>
                      </div>
                    </div>
                    <div v-else>Belum mengisi judul skripsi dan deskripsi</div>
                  </div>
                </div>
                <div v-else-if="thisUser.user.userLevel === 'Dosen'">
                  <div class="hover-u-primary mb-4 curzr-hover text-15 text-regular" style="display: inline-flex;">Bimbingan skripsi-ku</div>
                  <div v-if="afterChat" class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                    <div>
                      <div>Total mahasiswa bimbingan skripsi : {{ thisChat[0].applicationsAccept.length }}</div>
                      <div class=" my-3" @click="getApplications(), toDetail()">
                        <div v-if="!isDetail && thisChat[0].applicationsAccept.length !== 0" class="button-my" :class="lightMode ? 'light' : 'black'">Detail</div>
                        <div v-else-if="isDetail && thisChat[0].applicationsAccept.length !== 0" class="button-my" :class="lightMode ? 'light' : 'black'">
                          <refresh-icon class="mr-2" style="max-width: 1rem;" />
                          Segarkan
                        </div>
                      </div>
                      <div v-for="(app, i) in applications" :key="app.id">
                        <div class="applications" :class="lightMode ? 'applications-light' : 'applications-dark'">
                          <div class="applications-left">
                            <div class="main sm" :class="app[0].profile.background">
                              <img :src="app[0].profile.url" :alt="app[0].profile.url">
                            </div>
                          </div>
                          <div class="applications-right">
                            <div :class="lightMode ? app[0].profile.color : 'dark-'+app[0].profile.color">{{ app[0].user.userName+' - '+app[0].user.userNIM }}</div>
                            <div class="mt-2" :class="limit[i] ? 'limit' : ''">{{ app[0].skripsi.judul }}</div>
                          </div>
                        </div>
                        <div>
                          <div class="mt-1 line-h-175" :class="[limit[i] ? 'limit' : '']">{{ app[0].skripsi.deskripsi }}</div>
                          <div class=" mt-3 mb-5">
                            <div v-if="limit[i]" class="button-my mr-2" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="limit[i] = null">Lihat selengkapnya</div>
                            <div v-else class="button-my mr-2" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="limit[i] = true">Lihat lebih sedikit</div>
                            <div class="button-my danger-transparent" @click="deleteApplication(app[0].idUsers, app[0].user.userName, i)">Hapus</div>
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
      <footer-component v-if="el3" class="foo-right-mobile" :lightMode="lightMode"/>
    </Transition>

  </div>
</template>

<script setup>
import {defineAsyncComponent, ref, onMounted} from 'vue'
import {useAuth} from '../../firebase/firebase'
import { useMyFunc } from '../../services/OtherFunctions'
// import LoadingComponent from '../../components/LoadingComponent.vue';
import { useDatabase } from '../../services/DataService';
import firebase from 'firebase/compat/app'
import swal from 'sweetalert'
import ToastDanger from '../../components/toasts/ToastDanger.vue';
import ToastWarning from '../../components/toasts/ToastWarning.vue';

const { el1, el2, el3, delay, getFirstLetters } = useMyFunc()

const FooterComponent = defineAsyncComponent(() => import('../../components/FooterComponent.vue'))
const CheckIcon = defineAsyncComponent(() => import('../../components/icons/CheckIcon.vue'))
const RefreshIcon = defineAsyncComponent(() => import('../../components/icons/RefreshIcon.vue'))
const UmsLogo = defineAsyncComponent(() => import('../../components/icons/UmsLogo.vue'))
const MenuIcon = defineAsyncComponent(() => import('../../components/icons/MenuIcon.vue'))
const EyeIcon = defineAsyncComponent(() => import('../../components/icons/EyeIcon.vue'))
const EyeSlashIcon = defineAsyncComponent(() => import('../../components/icons/EyeSlashIcon.vue'))

defineProps({
  lightMode: Boolean
})

const { thisUser, editProfile, getUserData, updateUserData, batalUpdateUserData , isToast } = useAuth()
const { dosbing, afterDosbing, thisChat, afterChat, users, updateChatting, updateUsers, updateAlternatif } = useDatabase()

const avatars = ref([
  {
    image: 'ToyFaces_Tansparent_BG_1.png',
    name: 'Avatar 1',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_1.png?alt=media&token=d4338eef-64b8-49b3-a18c-e58d5ca54024'
  },
  {
    image: 'ToyFaces_Tansparent_BG_2.png',
    name: 'Avatar 2',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_2.png?alt=media&token=d53638ef-519d-468b-9b3f-c367540ef819'
  },
  {
    image: 'ToyFaces_Tansparent_BG_3.png',
    name: 'Avatar 3',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_3.png?alt=media&token=c595dd8f-ee73-4f6f-aef5-b5ed07bbb55c'
  },
  {
    image: 'ToyFaces_Tansparent_BG_4.png',
    name: 'Avatar 4',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_4.png?alt=media&token=8413c2d1-6249-430d-8942-271061fbd72b'
  },
  {
    image: 'ToyFaces_Tansparent_BG_5.png',
    name: 'Avatar 5',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_5.png?alt=media&token=049245cb-4a07-461c-922b-e1810f0fa3be'
  },
  {
    image: 'ToyFaces_Tansparent_BG_6.png',
    name: 'Avatar 6',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_6.png?alt=media&token=79294ba1-5189-466b-b51a-1973f9629f43'
  },
  {
    image: 'ToyFaces_Tansparent_BG_7.png',
    name: 'Avatar 7',
    url: 'https://firebasestorage.googleapis.com/v0/b/spk-dosbingskripsi.appspot.com/o/ToyFaces_Tansparent_BG_7.png?alt=media&token=067f5918-770b-4e93-8355-f5b18ccd10e5'
  }
])
const backgrounds = ref([
  {bgColor : 'danger-gradient-1', color: 'danger-text'},
  {bgColor : 'primary-gradient-1', color: 'primary-text'},
  {bgColor : 'link-gradient-1', color: 'link-text'},
  {bgColor : 'info-gradient-1', color: 'info-text'},
  {bgColor : 'success-gradient-1', color: 'success-text'},
  {bgColor : 'warning-gradient-1', color: 'warning-text'},
])

const top = ref(null)
const top2 = ref(null)
const toastMsg = ref(null)
const showToastDanger = ref(null)
const showToastWarning = ref(null)
const limit = ref([])
const isDetail = ref(null)
const toDetail = () => {
  isDetail.value = true
  for (var i=0; i<thisChat.value[0].applicationsAccept.length; i++){
    limit.value.push(true)
  }
  console.log(limit.value);
}
const applications = ref(null)
const getApplications = () => {
  var _applications = []
  for (var i = 0; i<thisChat.value[0].applicationsAccept.length; i++){
    _applications.push(users.value.filter(v => v.idUsers === thisChat.value[0].applicationsAccept[i]))
  }
  applications.value = _applications
}
const loading = ref(null)
const showPassword = ref(null)

const isMenu = ref(null)
const handleToggleMenu = async(a) => {
  isMenu.value = a
}

const isEditSkripsi = ref(null)
const editSkripsi = ref({
  judul: '',
  deskripsi: ''
})
const toEditSkripsi = (a,b) => {
  a !== '' || b !== '' ? [editSkripsi.value.judul = a, editSkripsi.value.deskripsi = b] :
  [editSkripsi.value.judul = '', editSkripsi.value.deskripsi = '']
}
const batalUpdateSkripsi = () => {
  editSkripsi.value.judul = ''
  editSkripsi.value.deskripsi = ''
  isEditSkripsi.value = null
}
const simpanPerubahanSkripsi = (a,b) => {
  a === '' || b === '' ?
  [updateUsers(thisUser.value.user.userId, {
    'progres.isJudulDeskripsi' : false,
    'progres.notifLog': 'Skripsi diperbarui'
  }),
  toastMsg.value = 'Data Skripsi Berhasil diupdate 😁',
  showToastWarning.value = true,
  setTimeout(() => showToastWarning.value = false, 5000)
  ] :
  a !== '' && b !== '' ?
  [updateUsers(thisUser.value.user.userId, {
    'progres.isJudulDeskripsi' : true,
    'progres.notifLog': 'Judul dan Deskripsi skripsi telah diisi'
  }),
  swal({
    title: "Selamat!",
    text: "Kamu berhasil menyelesaikan progres Mengisi Judul dan Deskripsi Skripsi."
  })] :
  ''
  updateUsers(thisUser.value.user.userId, {
    'skripsi.judul' : a,
    'skripsi.deskripsi' : b
  })
  batalUpdateSkripsi()
}
const toUpdateUserData = () => {
  updateUserData()
  toastMsg.value = 'Data Profil Berhasil diupdate 😁'
  showToastWarning.value = true
  setTimeout(() => showToastWarning.value = false, 5000)
}
const deleteApplication = (id, nama, index) => {
  swal({
    title: "Konfirmasi Hapus",
    text: "Hapus " + nama + " dari daftar mahasiswa bimbingan skripsi?",
    buttons: ["Batal", "Hapus"],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      updateChatting(thisUser.value.user.userEmail,{
        'applicationsAccept': firebase.firestore.FieldValue.arrayRemove(id)
      })
      updateUsers(id,{
        'skripsi.pembimbing': '',
        'progres.isDosbing': false,
        'progres.notifLog': 'Kamu dikeluarkan dari daftar bimbingan'
      })
      updateAlternatif(thisUser.value.user.userEmail,{
        'skripsi.kuota.terpakai': firebase.firestore.FieldValue.increment(-1)
      })
      applications.value.splice(index,1)
      toastMsg.value = 'Mahasiswa telah dihapus dari daftar bimbingan 😭'
      showToastDanger.value = true
      setTimeout(() => showToastDanger.value = false, 5000)
    }
  })
}

onMounted(async() => {
  loading.value = true
  await delay(100)
  el3.value = true
  await delay(100)
  el2.value = true
  await delay(100)
  el1.value = true
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
.applications {
  display: flex;
  gap: 1rem;
  padding: .5rem 1rem;
  min-height: 79.39px;
  transition: all .5s ease;
  &-light {
    background: var(--light-bg);
    border-top: 1px solid var(--light-border);
  }
  &-dark {
    background: var(--dark--layout);
    border-top: 1px solid var(--dark-border);
  }
  &-left {
    display: flex;
    align-self: center;
    position: relative;
    .main {
      overflow: hidden;
      border-radius: 50%;
      img {
        display: flex;
        margin: auto;
        margin-bottom: 0;
        height: 90%;
      }
    }
    .sm {
      display: flex;
      min-width: 3rem;
      min-height: 3rem;
      max-width: 3rem;
      max-height: 3rem;
    }
  }
}
.limit {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.profile-my {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  &--top {
    display: flex;
    margin: 0 auto;
    z-index: 1;
  }
  &--main {
    padding: 2rem;
    margin-top: -6rem;
    border-radius: .75rem;
    z-index: 0;
  }
}
.ktm-card-my {
  display: inline-flex;
  flex-direction: column;
  min-height: 15rem;
  min-width: 29rem;
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
.focus {
  background: rgba($success,.1);
  border: 2px solid rgba($success,.5);
}

.icon-mata{
  position: absolute;
  top: 30%;
  right: 5%;
  width: 1rem;
  height: auto;
  cursor: pointer;
}
</style>