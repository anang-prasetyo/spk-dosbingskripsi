<template>
  <div v-if="thisUser">
    <div v-if="modal" class="pop-up" :style="lightMode ? 'background: rgba(244,247,248,.2);' : 'background: rgba(0,0,0,.1);'">
      <div style="width: 75%;">
        <pesan-reservasi @isCloseModal="isCloseModalHandle" @sendApplication="sendApplicationHandle" :light-mode="lightMode"/>
      </div>
    </div>
    <div class="columns m-0" @mousemove="thisUser.user.userLevel !== 'Dosen' ? filterUnreadOnly() : filterGroupChatDosen()">
      <!-- <loading-component v-if="loading" :light-mode="lightMode"/> -->
      <div class="column fixed-column-left is-4 m-0 p-0" :class="lightMode ? 'light-mode-bg fixed-column-left-light' : 'dark-mode-bg fixed-column-left-dark'">
        <div class="">
          <div v-if="pesanIsi === 'close'">
            <div id="pesan-content-my--head" class="content-my--head" :class="lightMode ? 'light-mode-glass' : 'dark-mode-glass'">
              <div class="content-my--head-value text-125 text-semi-bold">Pesan</div>
              <div id="icon-menu" style="display: flex;">
                <menu-icon @toggleMenu="handleToggleMenu" :light-mode="lightMode" @click="$emit('toggleMenu', isMenu)"/>
              </div>
            </div>
            <div class="head-pesan-left" :class="lightMode ? 'head-pesan-left-light' : 'head-pesan-left-dark'">
              <div v-if="thisUser" class="head-pesan-left--title">
                <div class="left">
                  <div class="main sm" :class="thisUser.profile.background">
                    <img :src="thisUser.profile.url" :alt="thisUser.profile.url">
                  </div>
                </div>
                <!-- <div class="avatar-nn avatar-nn-md avatar-nn-round avatar-nn-male">
                  <div class="avatar-nn-text avatar-nn-text-lg">{{getFirstLetters(user.displayName)}}</div>
                </div> -->
                <div class="head-pesan-left--title-text">{{thisUser.user.userName}}</div>
              </div>
            </div>
            <div v-if="sudahLoad && thisUser">
              <div v-if="groupChatDosen && thisUser.user.userLevel === 'Dosen'">
                <div id="pesan-sender-mobile">
                  <div>
                    <div v-if="groupChatDosen.messagesLatest.text">
                      <div v-if="(groupChatDosen.messagesLatest.userId === thisUser?.user.userId)">
                        <pesan-sender-2
                          :light-mode="lightMode"
                          :user="groupChatDosen.alternatif.profile"
                          :gender="groupChatDosen.alternatif.gender"
                          :sender="((groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang))"
                          :latest="('Saya : ' + groupChatDosen.messagesLatest.text)"
                          :jam="(groupChatDosen.messagesLatest.time)"
                          :date="(groupChatDosen.messagesLatest.date)"
                          :created-at="groupChatDosen.messagesLatest.createdAt.toDate()"
                          :unreadMsg="0"
                          :isVerify = groupChatDosen.isVerify
                          :isChatting="thisUser.progres.isChatting"
                          @click="jumpTo2(groupChatDosen.idGroupChat,(groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang),groupChatDosen.alternatif.gender,groupChatDosen.alternatif.profile), pesanIsi = 'open', isVerify = groupChatDosen.isVerify"
                        />
                      </div>
                      <div v-else>
                        <pesan-sender-2
                          :light-mode="lightMode"
                          :user="groupChatDosen.alternatif.profile"
                          :gender="groupChatDosen.alternatif.gender"
                          :sender="((groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang))"
                          :latest="(groupChatDosen.messagesLatest.userName + ' : ' + groupChatDosen.messagesLatest.text)"
                          :jam="(groupChatDosen.messagesLatest.time)"
                          :date="(groupChatDosen.messagesLatest.date)"
                          :created-at="groupChatDosen.messagesLatest.createdAt.toDate()"
                          :unreadMsg="groupChatDosen.messagesUnreadDosen"
                          :isVerify = groupChatDosen.isVerify
                          :isChatting="thisUser.progres.isChatting"
                          @click="jumpTo2(groupChatDosen.idGroupChat,(groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang),groupChatDosen.alternatif.gender,groupChatDosen.alternatif.profile), pesanIsi = 'open', isVerify = groupChatDosen.isVerify, resetUnreadDosen()"
                        />
                      </div>
                    </div>
                    <div v-else>
                      <pesan-sender-2
                        :light-mode="lightMode"
                        :user="groupChatDosen.alternatif.profile"
                        :gender="groupChatDosen.alternatif.gender"
                        :sender="(groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang)"
                        :latest="'Baru dibuat'"
                        :jam="groupChatDosen.messagesLatest.time"
                        :date="groupChatDosen.messagesLatest.date"
                        :created-at="groupChatDosen.messagesLatest.createdAt.toDate()"
                        :unreadMsg="-1"
                        :isGCBaru="true"
                        :isVerify = groupChatDosen.isVerify
                        :isChatting="thisUser.progres.isChatting"
                        @click="jumpTo2(groupChatDosen.idGroupChat,(groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang),groupChatDosen.alternatif.gender,groupChatDosen.alternatif.profile), pesanIsi = 'open', isVerify = groupChatDosen.isVerify"
                      />
                    </div>
                    <div class="applications">
                      <div class="applications-title-mobile">
                        <div>Ajuan bimbingan skripsi</div>
                        <div class="dot danger">{{applications.length}}</div>
                      </div>
                      <div class="applications-notif">
                        <div v-for="(app, a) in applications" :key="a" class="applications-notif-container" :class="lightMode ? 'applications-notif-container-light' : 'applications-notif-container-dark'">
                          <div v-if="isDetail" class="pop-up">
                            <div style="width: 75%;">
                              <div class="dialog-my" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'">
                                <div class="close" :class="lightMode ? 'light-mode-bg' : 'dark-mode-layout'" @click="isDetail = null"><add-icon style="transform: rotate(45deg);" /></div>
                                <div style="max-height: 80vh;overflow: auto;" class="p-5">
                                  <div class="has-text-centered typography-callout mb-4">Detail Ajuan Bimbingan Skripsi</div><br>
                                  <div><b class="typography-semu">Judul Skripsi :</b> "{{ app.skripsiJudul }}"</div><br>
                                  <div><b class="typography-semu">Deskripsi :</b> {{ app.skripsiDeskripsi }}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="actions" :class="lightMode ? 'primary' : 'dark-primary'" :style="isActions === a ? 'scale: 100% 100%;' : 'scale: 0% 100%;'">
                            <div class="actions-1" @click="appTerima(app.userId, app.userName)">Terima</div>
                            <div class="actions-1" @click="isDetail = true">Detail</div>
                            <div class="actions-1" @click="isActions = null">Kembali</div>
                          </div>
                          <div class="applications-notif-container-isi-mobile" :class="lightMode ? 'applications-notif-container-isi-mobile-light' : 'applications-notif-container-isi-mobile-dark'" @click="isActions = a">
                            <div class="date">
                              <div class="text-sm typography-semu">{{ app.date }}</div>
                              <div class="text-sm typography-semu">{{ app.time }}</div>
                            </div>
                            <div>{{ app.userName+' - '+app.userNIM }}</div>
                            <div class="judul">"{{ app.skripsiJudul }}"</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="pesan-sender">
                  <div>
                    <div v-if="groupChatDosen.messagesLatest.text">
                      <div v-if="(groupChatDosen.messagesLatest.userId === thisUser?.user.userId)">
                        <pesan-sender-2
                          :light-mode="lightMode"
                          :user="groupChatDosen.alternatif.profile"
                          :gender="groupChatDosen.alternatif.gender"
                          :sender="((groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang))"
                          :latest="('Saya : ' + groupChatDosen.messagesLatest.text)"
                          :jam="(groupChatDosen.messagesLatest.time)"
                          :date="(groupChatDosen.messagesLatest.date)"
                          :created-at="groupChatDosen.messagesLatest.createdAt.toDate()"
                          :unreadMsg="0"
                          :isVerify = groupChatDosen.isVerify
                    :isChatting="thisUser.progres.isChatting"
                          @click="jumpTo2(groupChatDosen.idGroupChat,(groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang),groupChatDosen.alternatif.gender,groupChatDosen.alternatif.profile), isVerify = groupChatDosen.isVerify"
                        />
                      </div>
                      <div v-else>
                        <pesan-sender-2
                          :light-mode="lightMode"
                          :user="groupChatDosen.alternatif.profile"
                          :gender="groupChatDosen.alternatif.gender"
                          :sender="((groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang))"
                          :latest="(groupChatDosen.messagesLatest.userName + ' : ' + groupChatDosen.messagesLatest.text)"
                          :jam="(groupChatDosen.messagesLatest.time)"
                          :date="(groupChatDosen.messagesLatest.date)"
                          :created-at="groupChatDosen.messagesLatest.createdAt.toDate()"
                          :unreadMsg="groupChatDosen.messagesUnreadDosen"
                          :isVerify = groupChatDosen.isVerify
                    :isChatting="thisUser.progres.isChatting"
                          @click="jumpTo2(groupChatDosen.idGroupChat,(groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang),groupChatDosen.alternatif.gender,groupChatDosen.alternatif.profile), isVerify = groupChatDosen.isVerify, resetUnreadDosen()"
                        />
                      </div>
                    </div>
                    <div v-else>
                      <pesan-sender-2
                        :light-mode="lightMode"
                        :user="groupChatDosen.alternatif.profile"
                        :gender="groupChatDosen.alternatif.gender"
                        :sender="(groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang)"
                        :latest="'Baru dibuat'"
                        :jam="groupChatDosen.messagesLatest.time"
                        :date="groupChatDosen.messagesLatest.date"
                        :created-at="groupChatDosen.messagesLatest.createdAt.toDate()"
                        :unreadMsg="-1"
                        :isGCBaru="true"
                        :isVerify = groupChatDosen.isVerify
                    :isChatting="thisUser.progres.isChatting"
                        @click="jumpTo2(groupChatDosen.idGroupChat,(groupChatDosen.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.alternatif.namaDosen.namaBelakang),groupChatDosen.alternatif.gender,groupChatDosen.alternatif.profile), isVerify = groupChatDosen.isVerify, resetUnreadDosen()"
                      />
                    </div>
                    <div class="applications">
                      <div class="applications-title">
                        <div>Ajuan bimbingan skripsi</div>
                        <div class="dot danger">{{applications.length}}</div>
                      </div>
                      <div class="applications-notif">
                        <div v-for="(app, a) in applications" :key="a" class="applications-notif-container" :class="lightMode ? 'applications-notif-container-light' : 'applications-notif-container-dark'">
                          <div v-if="isDetail" class="pop-up">
                            <div style="width: 50%;">
                              <div class="dialog-my" :class="lightMode ? 'light-mode-bg' : 'dark-mode-bg'"  style="cursor:default;">
                                <div class="close" :class="lightMode ? 'light-mode-bg' : 'dark-mode-layout'" @click="isDetail = null"><add-icon style="transform: rotate(45deg);" /></div>
                                <div style="max-height: 80vh;overflow: auto;" class="p-5">
                                  <div class="has-text-centered typography-callout mb-4">Detail Ajuan Bimbingan Skripsi</div><br>
                                  <div><b class="typography-semu">Judul Skripsi :</b> "{{ app.skripsiJudul }}"</div><br>
                                  <div><b class="typography-semu">Deskripsi :</b> {{ app.skripsiDeskripsi }}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="actions" :class="lightMode ? 'primary' : 'dark-primary'" :style="isActions === a ? 'scale: 100% 100%;' : 'scale: 0% 100%;'">
                            <div class="actions-1" @click="appTerima(app.userId, app.userName)">Terima</div>
                            <div class="actions-1" @click="isDetail = true">Detail</div>
                            <div class="actions-1" @click="isActions = null">Kembali</div>
                          </div>
                          <div class="applications-notif-container-isi" :class="lightMode ? 'applications-notif-container-isi-light' : 'applications-notif-container-isi-dark'" @click="isActions = a">
                            <div class="date">
                              <div class="text-sm typography-semu">{{ app.date }}</div>
                              <div class="text-sm typography-semu">{{ app.time }}</div>
                            </div>
                            <div>{{ app.userName+' - '+app.userNIM }}</div>
                            <div class="judul">"{{ app.skripsiJudul }}"</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <!-- <div v-if="userGC.length !== 0">
                  <div>sudah join {{ userGC[0].idGroupChat }}</div>
                  <div>idGroupChat : {{ groupChat[0].idGroupChat }}</div>
                </div> -->
                <div v-if="!thisUser.progres.isChatting">
                  <div
                    v-for="gc in groupChat1"
                    :key="gc.idGroupChat"
                  >
                    <pesan-sender-2
                      :light-mode="lightMode"
                      :user="gc.alternatif.profile"
                      :gender="gc.alternatif.gender"
                      :sender="(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                      :isGCBaru="true"
                      :isVerify="gc.isVerify"
                      :isChatting="thisUser.progres.isChatting"
                      @click="gabungGC(gc)"
                    />
                  </div>
                </div>
                <div v-else>
                  <div id="pesan-sender-mobile">
                    <div v-if="newFav.includes(true)">
                      <div
                        v-for="(gc,g) in groupChat"
                        :key="gc.idGroupChat"
                      >
                        <div v-if="gc.idGroupChat === thisUser.isFav[0]">
                          <div v-if="gc.messagesLatest.text">
                            <div v-if="(gc.messagesLatest.userId === thisUser?.user.userId)">
                              <pesan-sender-2
                                :light-mode="lightMode"
                                :user="gc.alternatif.profile"
                                :gender="gc.alternatif.gender"
                                :sender="((gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang))"
                                :latest="('Saya : ' + gc.messagesLatest.text)"
                                :jam="(gc.messagesLatest.time)"
                                :date="(gc.messagesLatest.date)"
                                :created-at="gc.messagesLatest.createdAt.toDate()"
                                :unreadMsg="newArrUnread[g]"
                                :isFav="newFav[g]"
                                :isVerify="gc.isVerify"
                                :isChatting="thisUser.progres.isChatting"
                                @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), pesanIsi = 'open', isVerify = gc.isVerify"
                              />
                            </div>
                            <div v-else>
                              <pesan-sender-2
                                :light-mode="lightMode"
                                :user="gc.alternatif.profile"
                                :gender="gc.alternatif.gender"
                                :sender="((gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang))"
                                :latest="(gc.messagesLatest.userName + ' : ' + gc.messagesLatest.text)"
                                :jam="(gc.messagesLatest.time)"
                                :date="(gc.messagesLatest.date)"
                                :created-at="gc.messagesLatest.createdAt.toDate()"
                                :unreadMsg="newArrUnread[g]"
                                :isFav="newFav[g]"
                                :isVerify="gc.isVerify"
                                :isChatting="thisUser.progres.isChatting"
                                @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), pesanIsi = 'open', isVerify = gc.isVerify"
                              />
                            </div>
                          </div>
                          <div v-else>
                            <pesan-sender-2
                              :light-mode="lightMode"
                              :user="gc.alternatif.profile"
                              :gender="gc.alternatif.gender"
                              :sender="(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                              :latest="'Baru dibuat'"
                              :jam="gc.messagesLatest.time"
                              :date="gc.messagesLatest.date"
                              :created-at="gc.messagesLatest.createdAt.toDate()"
                              :unreadMsg="-1"
                              :isGCBaru="true"
                              :isVerify="gc.isVerify"
                              :isChatting="thisUser.progres.isChatting"
                              @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), pesanIsi = 'open', isVerify = gc.isVerify"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div
                        v-for="(gc,g) in groupChat"
                        :key="gc.idGroupChat"
                      >
                        <div v-if="gc.idGroupChat === thisUser.isFav[0]">
                          <div v-if="gc.messagesLatest.text">
                            <div v-if="(gc.messagesLatest.userId === thisUser?.user.userId)">
                              <pesan-sender-2
                                :light-mode="lightMode"
                                :user="gc.alternatif.profile"
                                :gender="gc.alternatif.gender"
                                :sender="((gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang))"
                                :latest="('Saya : ' + gc.messagesLatest.text)"
                                :jam="(gc.messagesLatest.time)"
                                :date="(gc.messagesLatest.date)"
                                :created-at="gc.messagesLatest.createdAt.toDate()"
                                :unreadMsg="newArrUnread[g]"
                                :isVerify="gc.isVerify"
                                :isChatting="thisUser.progres.isChatting"
                                @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), pesanIsi = 'open', isVerify = gc.isVerify"
                              />
                            </div>
                            <div v-else>
                              <pesan-sender-2
                                :light-mode="lightMode"
                                :user="gc.alternatif.profile"
                                :gender="gc.alternatif.gender"
                                :sender="((gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang))"
                                :latest="(gc.messagesLatest.userName + ' : ' + gc.messagesLatest.text)"
                                :jam="(gc.messagesLatest.time)"
                                :date="(gc.messagesLatest.date)"
                                :created-at="gc.messagesLatest.createdAt.toDate()"
                                :unreadMsg="newArrUnread[g]"
                                :isVerify="gc.isVerify"
                                :isChatting="thisUser.progres.isChatting"
                                @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), pesanIsi = 'open', isVerify = gc.isVerify"
                              />
                            </div>
                          </div>
                          <div v-else>
                            <pesan-sender-2
                              :light-mode="lightMode"
                              :user="gc.alternatif.profile"
                              :gender="gc.alternatif.gender"
                              :sender="(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                              :latest="'Baru dibuat'"
                              :jam="gc.messagesLatest.time"
                              :date="gc.messagesLatest.date"
                              :created-at="gc.messagesLatest.createdAt.toDate()"
                              :unreadMsg="-1"
                              :isGCBaru="true"
                              :isVerify="gc.isVerify"
                              :isChatting="thisUser.progres.isChatting"
                              @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), pesanIsi = 'open', isVerify = gc.isVerify"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pesan-sender">
                    <div v-if="newFav.includes(true)">
                      <div
                        v-for="(gc,g) in groupChat"
                        :key="gc.idGroupChat"
                      >
                        <div v-if="gc.idGroupChat === thisUser.isFav[0]">
                        <!-- <a style="color: #000" :href="'#'+getCamellCase(gc.alternatif.namaDosen.namaDepan + gc.alternatif.namaDosen.namaBelakang)"> -->
                          <div v-if="gc.messagesLatest.text">
                            <div v-if="(gc.messagesLatest.userId === thisUser?.user.userId)">
                              <pesan-sender-2
                                :light-mode="lightMode"
                                :user="gc.alternatif.profile"
                                :gender="gc.alternatif.gender"
                                :sender="((gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang))"
                                :latest="('Saya : ' + gc.messagesLatest.text)"
                                :jam="(gc.messagesLatest.time)"
                                :date="(gc.messagesLatest.date)"
                                :created-at="gc.messagesLatest.createdAt.toDate()"
                                :unreadMsg="newArrUnread[g]"
                                :isFav="newFav[g]"
                                :isVerify="gc.isVerify"
                                :isChatting="thisUser.progres.isChatting"
                                @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), isVerify = gc.isVerify"
                              />
                            </div>
                            <div v-else>
                              <pesan-sender-2
                                :light-mode="lightMode"
                                :user="gc.alternatif.profile"
                                :gender="gc.alternatif.gender"
                                :sender="((gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang))"
                                :latest="(gc.messagesLatest.userName + ' : ' + gc.messagesLatest.text)"
                                :jam="(gc.messagesLatest.time)"
                                :date="(gc.messagesLatest.date)"
                                :created-at="gc.messagesLatest.createdAt.toDate()"
                                :unreadMsg="newArrUnread[g]"
                                :isFav="newFav[g]"
                                :isVerify="gc.isVerify"
                                :isChatting="thisUser.progres.isChatting"
                                @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), isVerify = gc.isVerify"
                              />
                            </div>
                          </div>
                          <div v-else>
                            <pesan-sender-2
                              :light-mode="lightMode"
                              :user="gc.alternatif.profile"
                              :gender="gc.alternatif.gender"
                              :sender="(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                              :latest="'Baru dibuat'"
                              :jam="gc.messagesLatest.time"
                              :date="gc.messagesLatest.date"
                              :created-at="gc.messagesLatest.createdAt.toDate()"
                              :unreadMsg="-1"
                              :isGCBaru="true"
                              :isVerify="gc.isVerify"
                              :isChatting="thisUser.progres.isChatting"
                              @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), isVerify = gc.isVerify"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div
                        v-for="(gc,g) in groupChat"
                        :key="gc.idGroupChat"
                      >
                        <div v-if="gc.idGroupChat === thisUser.isFav[0]">
                          <div v-if="gc.messagesLatest.text">
                            <div v-if="(gc.messagesLatest.userId === thisUser?.user.userId)">
                              <pesan-sender-2
                                :light-mode="lightMode"
                                :user="gc.alternatif.profile"
                                :gender="gc.alternatif.gender"
                                :sender="((gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang))"
                                :latest="('Saya : ' + gc.messagesLatest.text)"
                                :jam="(gc.messagesLatest.time)"
                                :date="(gc.messagesLatest.date)"
                                :created-at="gc.messagesLatest.createdAt.toDate()"
                                :unreadMsg="newArrUnread[g]"
                                :isVerify="gc.isVerify"
                                :isChatting="thisUser.progres.isChatting"
                                @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), isVerify = gc.isVerify"
                              />
                            </div>
                            <div v-else>
                              <pesan-sender-2
                                :light-mode="lightMode"
                                :user="gc.alternatif.profile"
                                :gender="gc.alternatif.gender"
                                :sender="((gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang))"
                                :latest="(gc.messagesLatest.userName + ' : ' + gc.messagesLatest.text)"
                                :jam="(gc.messagesLatest.time)"
                                :date="(gc.messagesLatest.date)"
                                :created-at="gc.messagesLatest.createdAt.toDate()"
                                :unreadMsg="newArrUnread[g]"
                                :isVerify="gc.isVerify"
                                :isChatting="thisUser.progres.isChatting"
                                @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), isVerify = gc.isVerify"
                              />
                            </div>
                          </div>
                          <div v-else>
                            <pesan-sender-2
                              :light-mode="lightMode"
                              :user="gc.alternatif.profile"
                              :gender="gc.alternatif.gender"
                              :sender="(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                              :latest="'Baru dibuat'"
                              :jam="gc.messagesLatest.time"
                              :date="gc.messagesLatest.date"
                              :created-at="gc.messagesLatest.createdAt.toDate()"
                              :unreadMsg="-1"
                              :isGCBaru="true"
                              :isVerify="gc.isVerify"
                              :isChatting="thisUser.progres.isChatting"
                              @click="jumpTo(g,gc.idGroupChat,(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang),gc.alternatif.gender,gc.alternatif.profile), isVerify = gc.isVerify"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style="display: flex; padding: 1rem; justify-content: center;">
                      <div class="button-my" :class="lightMode ? 'light-transparent' : 'dark-transparent'" @click="tinggalkanGC(thisUser.isFav[0])">Tinggalkan Grup</div>
                    </div>
                    <!-- <div>join date : {{ thisUser.joinChatAt.toDate().getDate() + ' ' + (thisUser.joinChatAt.toDate().getMonth() + 1) + ' ' + thisUser.joinChatAt.toDate().getFullYear() }}</div>
                    <div>join time : {{ thisUser.joinChatAt.toDate().getSeconds() + ' ' + thisUser.joinChatAt.toDate().getMinutes() + ' ' + thisUser.joinChatAt.toDate().getHours() }}</div>
                    <div>{{ ((thisUser.joinChatAt.toDate().getHours()*3600) + (thisUser.joinChatAt.toDate().getMinutes() * 60) + thisUser.joinChatAt.toDate().getSeconds()) }}</div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="pesan-isi-mobile" v-if="pesanIsi === 'open'">
        <!-- <div class="button-my danger m-4" @click="pesanIsi = 'close'">close</div> -->
        <div class="column fixed-column-right">
          <pesan-isi-2 
            :light-mode="lightMode"
            :diklik="isCliked"
            :idGC="currentOption.idGC" 
            :namaDosen="currentOption.namaDosen" 
            :gender="currentOption.gender"  
            :dataMessages="messages"
            :selectedUser="currentOption.selectedUser"
            :participants="participants"
            :isVerify="isVerify"
            @pesanIsi="handlePesanIsi"
          />
        </div>
      </div>
      <div id="pesan-isi" class="column fixed-column-right m-0 p-0" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
        <pesan-isi-2 
          :light-mode="lightMode"
          :diklik="isCliked"
          :idGC="currentOption.idGC" 
          :namaDosen="currentOption.namaDosen" 
          :gender="currentOption.gender"  
          :dataMessages="messages"
          :selectedUser="currentOption.selectedUser"
          :participants="participants"
          :isVerify="isVerify"
          @isOpenModal="isOpenModalHandle"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { useAuth, getCamellCase } from '../../firebase/firebase'
import { useDatabase } from '../../services/DataService';
import swal from 'sweetalert'
// import LoadingComponent from '../../components/LoadingComponent.vue';
import firebase from 'firebase/compat/app'

const PesanReservasi = defineAsyncComponent(() => import('../../components/pesan/PesanReservasi.vue'))
const AddIcon = defineAsyncComponent(() => import('../../components/icons/AddIcon.vue'))
const MenuIcon = defineAsyncComponent(() => import('../../components/icons/MenuIcon.vue'))
const PesanIsi2 = defineAsyncComponent(() => import('../../components/pesan/PesanIsi2.vue'))
const PesanSender2 = defineAsyncComponent(() => import('../../components/pesan/PesanSender2.vue'))

const { thisUser } = useAuth()
const { groupChat, groupChat1, participants, messages, currentOption, newArrUnread, isCliked, newFav, filterUnreadOnly, getDataGroupChat, getDataGroupChat1, resetTo, jumpTo, jumpTo2, updateChatting, updateUsers, getDocChatting, applications, getApplications, getDocAlternatif } = useDatabase()

defineProps({
  lightMode: Boolean
})

const pesanIsi = ref('close')
const handlePesanIsi = (a) => {
  pesanIsi.value = a
}
const groupChatDosen = ref(null)
const filterGroupChatDosen = () => {
  var _groupChatDosen = null
  var email = thisUser.value.user.userEmail
  _groupChatDosen = groupChat.value.filter(
    v => v.idGroupChat === email
  )
  groupChatDosen.value = _groupChatDosen[0]
}
const resetUnreadDosen = () => {
  updateChatting(thisUser.value.user.userEmail, {'messagesUnreadDosen' : 0})
}

const isDetail = ref(null)
const isActions = ref(null)
const sudahLoad = ref(null)
const loading = ref(null)
const modal = ref(null)
const isCloseModalHandle = (a) => {
  modal.value = a
}
const isOpenModalHandle = (a) => {
  modal.value = a
}
const isVerify = ref(null)
const sendApplicationHandle = (a,b) => {
  updateUsers(thisUser.value.user.userId, {
    'skripsi.judul': a,
    'skripsi.deskripsi': b,
    'isSkripsi': true,
    'progres.isJudulDeskripsi': true
  })
  getDocChatting(currentOption.value.idGC).get().then(async(doc) => {
    var _chattingData = doc.data()
    var setNewApplication = {
      skripsiJudul: a,
      skripsiDeskripsi: b,
      userName: thisUser.value.user.userName,
      userNIM: thisUser.value.user.userNIM,
      userId: thisUser.value.user.userId,
      date: ((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()),
      time: (String(new Date().getHours()).padStart(2, '0') + ':' + String(new Date().getMinutes()).padStart(2, '0')),
      createdAt: new Date()
    }
    getDocChatting(currentOption.value.idGC).collection('applications').doc(thisUser.value.user.userId).get().then((doc) => {
      if (doc.exists){
        getDocChatting(currentOption.value.idGC).collection('applications').doc(thisUser.value.user.userId).set(setNewApplication)
        console.log('user pernah melakukan request, berhasil rewrite request');
      }
      else {
        if (_chattingData.applicationsAccept.length !== 0){
          var isAcc = _chattingData.applicationsAccept.includes(thisUser.value.user.userId)
          if (isAcc){
            console.log('kamu sudah diterima di bimbingan skripsi ini');
          }
          else {
            getDocChatting(currentOption.value.idGC).collection('applications').doc(thisUser.value.user.userId).set(setNewApplication)
            updateChatting(currentOption.value.idGC, {'applicationsTotal': Number(_chattingData.applicationsTotal+1)})
          }
        }
        else {
          getDocChatting(currentOption.value.idGC).collection('applications').doc(thisUser.value.user.userId).set(setNewApplication)
          updateChatting(currentOption.value.idGC, {'applicationsTotal': Number(_chattingData.applicationsTotal+1)})
        }
      }
    })
  })
}
const appTerima = (id,nama) => {
  swal({
    title: "Terima ajuan bimbingan skripsi?",
    text: "Anda akan menjadi dosen pembimbing skripsi bagi "+nama,
    buttons: ["Batal", "Terima"]
  })
  .then((willAcc) => {
    if (willAcc) {
      getDocChatting(thisUser.value.user.userEmail).update({
        'applicationsAccept': firebase.firestore.FieldValue.arrayUnion(id),
        'applicationsTotal': firebase.firestore.FieldValue.increment(-1)
      })
      .then(() => {
        console.log('berhasil menerima permintaan ajuan');
        updateUsers(id, {
          'skripsi.pembimbing': thisUser.value.user.userEmail,
          'progres.isDosbing': true
        })
      })
      .then(() => {
        console.log('user telah menjadi anggota bimbingan skripsi');
        getDocChatting(thisUser.value.user.userEmail).collection('applications').doc(id).delete()
      })
      .then(() => {
        console.log('berhasil menghapus aplikasi');
        getDocAlternatif(thisUser.value.user.userEmail).update({
          'skripsi.kuota.terpakai': firebase.firestore.FieldValue.increment(1)
        })
        isActions.value = null
        console.log('berhasil menambah kuota terpakai');
      })
      .then(() => {
        updateUsers(id, {'progres.notifLog': 'Ajuan skripsi telah divalidasi dosen'})
      })
    }
  })
}

const isMenu = ref(null)
const handleToggleMenu = async(a) => {
  isMenu.value = a
}

// const userGC = ref([])
const gabungGC = (gc) => {
  let _gender = gc.alternatif.gender
  let _nick = null
  _gender === "Laki-laki" ? _nick = "Pak" :  _nick = "Bu"
  var userEditData = {
    'progres.isChatting': true,
    'joinChatAt': new Date(),
    'leaveChatAt': null,
    'isFav': firebase.firestore.FieldValue.arrayUnion(gc.idGroupChat)
  }
  const updateDataUser = () => {
    updateUsers(thisUser.value.user.userId, userEditData)
  }
  swal({
    title: "Konfirmasi",
    text: "Nama Grup : " + _nick + " " + gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang + "\n" +
    "Peserta : " + gc.participants + "\n" + 
    "\n Gabung dengan grup percakapan ini?",
    buttons: ["Batal", "Gabung"],
  })
  .then((willJoin) => {
    if (willJoin) {
      // userGC.value.push(gc)
      updateDataUser()
      swal({
        text:"Selamat, kamu berhasil bergabung ke grub percakapan " + _nick + " " + gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang
      })
    }
  })
}
const tinggalkanGC = (id) => {
  var userEditData = {
    'progres.isChatting': false,
    'leaveChatAt': new Date(),
    'isFav': firebase.firestore.FieldValue.arrayRemove(id)
  }
  var chattingEditData = {
    'participants': firebase.firestore.FieldValue.increment(-1)
  }
  const updateDataUser = () => {
    updateUsers(thisUser.value.user.userId, userEditData)
  }
  const updateDataChatting = () => {
    updateChatting(id, chattingEditData)
    getDocChatting(id).collection('participants').doc(thisUser.value.user.userId).delete()
  }
  swal({
    title: "Konfirmasi",
    text: "Apakah kamu yakin ingin pergi meninggalkan grup ini? Kamu tidak lagi dapat melihat dan mengirim pesan di grup ini lagi.",
    buttons: ["Batal", "Pergi"]
  })
  .then((willLeave) => {
    if(willLeave){
      updateDataUser()
      updateDataChatting()
      // _isReset.value = true
      // _isCliked.value = null
      // setTimeout(() => {_isReset.value = false}, 250)
      resetTo()
    }
  })
}

onMounted( async() => {
  loading.value = true
  await getDataGroupChat()
  await getDataGroupChat1()
  swal({
    title: "Penting!",
    text: "Kamu bisa memulai percakapan setelah bergabung dengan grup chat. Setelah bergabung, kamu tidak bisa lagi bergabung dengan grup chat lainnya. Keluar dari grup chat jika kamu ingin berganti grup chat.",
    button: "Mengerti",
    closeOnClickOutside: false,
  })
  .then(() => {
    if (thisUser.value.user.userLevel === 'Dosen'){
      filterGroupChatDosen()
      jumpTo2(groupChatDosen.value.idGroupChat,(groupChatDosen.value.alternatif.namaDosen.namaDepan + ' ' + groupChatDosen.value.alternatif.namaDosen.namaBelakang),groupChatDosen.value.alternatif.gender,groupChatDosen.value.alternatif.profile)
      isVerify.value = groupChatDosen.value.isVerify
      getApplications(thisUser.value.user.userEmail)
      sudahLoad.value = true
      loading.value = false
      console.log('ini dosen');
    }
    else {
      filterUnreadOnly()
      sudahLoad.value = true
      loading.value = false
      console.log('ini bukan dosen');
    }
  })
})

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';
@import '../../sass/mobile.scss';

.applications {
  &-title, &-title-mobile {
    display: flex;
    justify-content: space-between;
  }
  &-title {
    padding: 1rem;
    &-mobile {
      padding: 1rem 2rem;
    }
  }
  &-notif{
    &-container {
      transition: all .5s ease;
      position: relative;
      cursor: pointer;
      &-light{
        border-top: 1.5px solid var(--light-border);
      }
      &-dark{
        border-top: 1.5px solid var(--dark-border);
      }
      &-isi, &-isi-mobile {
        position: relative;
        z-index: 2;
        min-height: 114.78px;
        &-light{
          &:hover {
            background: var(--light-bg2);
          }
        }
        &-dark{
          &:hover {
            background: var(--dark-bg2);
          }
        }
      }
      &-isi {
        padding: 1rem;
        &-mobile {
          padding: 1rem 2rem;
        }
      }
      &-isi .date, &-isi-mobile .date {
        display: flex;
        justify-content: space-between;
      }
      &-isi .judul, &-isi-mobile .judul {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
    &-container .actions {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 3;
      // background: $primary;
      color: $white;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;
      transform-origin: right;
      transition: all .5s ease;
      &-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
      &-1:hover {
        background: rgba($dark,.2);
      }
    }
  }
}
.pop-up{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  cursor: default;
}
.nm-x {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.fixed{
  &-column{
    &-left{
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
      z-index: 1;
      overflow-y: auto;
      max-height: 100vh;
      &-light{
        border-right: 1px solid var(--light-border);
      }
      &-dark{
        border-right: 1px solid var(--dark-border);
      }
    }
    &-right {
      padding: 0;
      overflow-y: auto;
      max-height: 100vh;
    }
  }
  &-pesan-left {
    min-height: 100vh;
  }
}
.head-pesan-left {
  padding: 1rem 0;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: flex;
  min-height: 80px;
  z-index: 4;
  // border-top-left-radius: 2rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  &-light{
    border-bottom: 1px solid var(--light-border);
    background: rgba(244,247,248,.5);
    color: var(--light-color);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  &-dark{
    border-bottom: 1px solid var(--dark-border);
    background: rgba(24,25,28,.5);
    color: var(--dark-color);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  &--title {
    display: flex;
    flex-direction: row;
    padding: 0 1rem;
    gap: 1rem;
    
  .left {
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
    &-text {
      display: flex;
      margin: auto 0;
      text-transform: capitalize;
    }
  }
}
</style>