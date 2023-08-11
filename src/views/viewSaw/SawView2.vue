<template>
  <div class="base">
    <loading-component v-if="loading" :msg="logMsg" :lightMode="lightMode" />
    <div id="saw-content-my" class="content-my" :style="tahap.tahap3 === true || apaSudahHitungSaw === 'sudah' ? '' : 'max-width: 100% !important;'">
      <div class="content-my--head" :class="lightMode ? 'light-mode-glass' : 'dark-mode-glass'">
        <div class="content-my--head-value text-semi-bold text-125">Simple Additive Weighting</div>
        <div id="icon-menu" style="display: flex;">
          <menu-icon @toggleMenu="handleToggleMenu" :light-mode="lightMode" @click="$emit('toggleMenu', isMenu)"/>
        </div>
      </div>
      <div id="content-my--main" class="content-my--main">
        <div class="toast">
          <toast-danger v-if="showToastDanger" :msg="toastMsg" />
        </div>
        <div v-if="thisUser" class="card-bubble-my" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'">
          <Transition name="slide">
            <div v-if="el1" >
              <div id="pengertian" class="hover-u-primary text-15 text-regular mb-4" style="display: inline-flex;">Apa itu SAW?</div>
              <div class="paragraph" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">
                <p>SAW kependekan dari Simple Additive Weighting. Yaitu salah satu metode dalam SPK yang dikenal dengan istilah metode penjumlahan terbobot. Konsep dasar pada metode SAW adalah mencari penjumlahan terbobot dari rating kinerja pada setiap alternatif di semua atribut.</p>
                <p>Metode SAW membutuhkan proses normalisasi matriks keputusan (X) ke suatu skala yang dapat diperbandingkan dengan semua rating alternatif yang ada. Hasil akhir dari perhitungan dengan metode ini adalah perangkingan alternatif yang telah dinilai berdasarkan kriteria.</p>
              </div>
            </div>
          </Transition>
          <Transition name="slide">
            <div v-if="el2" id="rumus">
              <div class="hover-u-primary text-15 text-regular mb-4" style="display: inline-flex;">Rumus metode SAW</div>
              <div class="paragraph mb-4" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">
                <p>Terdapat 2 buah rumus yang digunakan untuk melakukan perhitungan dengan metode SAW.</p>
              </div>
              <div class="rumus-2" :class="lightMode ? 'primary-text' : 'dark-primary-text'">
                <div>
                  <div class="columns rumus">
                    <div class="column rumus-1">
                      <div class="isi">
                        <div style="min-width: 30px;">r<sub>ij</sub> = </div>
                        <div style="height: 70px; border: 1px solid hsl(254deg, 54%, 50%); width: 10px; border-right: 1px solid transparent;"></div>
                        <div class="flex-col" style="gap: 1rem">
                          <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="min-width: 60px;text-align: center;">
                              <div style="border-bottom: 1px solid hsl(254deg, 54%, 50%); text-align: center;">x<sub>ij</sub></div>
                              <div>Max x<sub>ij</sub></div>
                            </div>
                            <div>jika j adalah atribut keuntungan (benefit)</div>
                          </div>
                          <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="min-width: 60px;text-align: center;">
                              <div style="border-bottom: 1px solid hsl(254deg, 54%, 50%);">Min x<sub>ij</sub></div>
                              <div style="text-align: center;">x<sub>ij</sub></div>
                            </div>
                            <div>jika j adalah atribut biaya (cost)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div>
                        <div>Keterangan :</div>
                        <div>r<sub>ij</sub> : atribut yang sudah dinormalisasi</div>
                        <div>x<sub>ij</sub> : nilai atribut</div>
                        <div>Max x<sub>ij</sub> : nilai terbesar dari semua atribut</div>
                        <div>Min x<sub>ij</sub> : nilai terkecil dari semua atribut</div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 text-semi-bold">Nilai preferensi untuk setiap alternatif (Vi) diberikan sebagai :</div>
                  <div class="columns rumus">
                    <div class="column">
                      <div class="isi">
                        <div class="fs-md">V <sub>i</sub> = </div>
                        <div class="fs-lg">&sum;</div>
                        <div class="flex-col fs-sm">
                          <div>n</div>
                          <div>j=1</div>
                        </div>
                        <div class="fs-md">w<sub>j</sub> r<sub>ij</sub></div>
                      </div>
                    </div>
                    <div class="column">
                      <div>
                        <div>Keterangan :</div>
                        <div>V<sub>i</sub> : rangking Alternatif</div>
                        <div>w<sub>j</sub> : bobot kriteria</div>
                        <div>r<sub>ij</sub> : atribut yang sudah dinormalisasi</div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 text-semi-bold">Nilai Vi yang lebih besar mengindikasikan bahwa alternatif Ai lebih terpilih.</div>
                </div>
              </div>
              <div ref="btnBot"></div>
            </div>
          </Transition>
          <Transition name="slide">
            <div v-if="el3" id="perhitungan">
              <!-- <div class="hover-u-primary typography-callout mb-5" style="display: inline-flex;">Perhitungan Metode SAW</div> -->
              <div v-if="apaSudahHitungSaw === 'sudah'">
                <div id="tabel" class="tabels">
                  <div>
                    <!-- <div class="alert-my alert-success text-semi-bold" :class="lightMode ? 'success-text' : 'dark-success-text'">Dokumen SAW ditemukan!</div> -->
                    <div class="hover-u-primary text-15 text-regular my-4" style="display: inline-flex;">Tabel kriteria.</div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div class="table-my">
                        <table v-if="newKriteria != ''" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td>No</td>
                              <td>Kriteria</td>
                              <td>Jenis</td>
                              <td>Bobot</td>
                              <td>Sub Kriteria</td>
                              <td>Bobot Sub Kriteria</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(krt,index) in newKriteria" :key="index">
                              <td>{{(index+1)}}</td>
                              <td>{{(krt.namaKriteria)}}</td>
                              <td>{{krt.jenisKriteria}}</td>
                              <td>{{krt.bobotKriteria}}</td>
                              <td colspan="2">
                                <div v-for="(skrt,index) in newKriteria[index].subKriteria" :key="index">
                                  <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                                    <tbody>
                                      <tr>
                                        <td>{{(skrt.name)}}</td>
                                        <td align="right">{{(skrt.bobotSubKriteria)}}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table v-else class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <tbody>
                            <tr>
                              <td>No</td>
                              <td>Kriteria</td>
                              <td>Jenis</td>
                              <td>Bobot</td>
                              <td>Sub Kriteria</td>
                              <td>Bobot Sub Kriteria</td>
                            </tr>
                            <tr>
                              <td colspan="6">Tidak Ada Data</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
      
                  <div>
                    <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Data alternatif dosbing skripsi yang akan dinilai.</div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div class="table-my">
                        <table v-if="newAlternatif3.length != 0" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td rowspan="2">Alternatif</td>
                              <td :colspan=newKriteria.length>Kriteria</td>
                            </tr>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(alt,index) in newAlternatif3" :key="index">
                              <td>{{alt.namaDosen}}</td>
                              <td v-for="j in newKriteria.length" :key="j">{{ alt.kriteria[Number(j-1)].subKriteria[0].name }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
      
                  <div>
                    <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Menentukan benefit dan cost.</div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div class="table-my">
                        <table v-if="newAlternatif3.length != 0" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td rowspan="2">Alternatif</td>
                              <td :colspan=newKriteria.length>Kriteria</td>
                            </tr>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(alt,index) in newAlternatif3" :key="index">
                              <td>{{alt.namaDosen}}</td>
                              <td v-for="j in newKriteria.length" :key="j">{{ alt.kriteria[Number(j-1)].subKriteria[0].jenisKriteria }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
        
                  <div>
                    <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Analisa data kriteria berdasarkan benfit dan cost.</div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div class="table-my">
                        <table v-if="newAlternatif3.length != 0" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                            <td rowspan="2">Alternatif</td>
                              <td :colspan=newKriteria.length>Kriteria</td>
                            </tr>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(alt,index) in newAlternatif3" :key="index">
                              <td>{{alt.namaDosen}}</td>
                              <td v-for="j in newKriteria.length" :key="j">{{ alt.kriteria[Number(j-1)].subKriteria[0].bobotSubKriteria }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
          
                  <div v-if="newAlternatif3.length !== 0 && saw !== null">
                    <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Normalisasi.</div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div>
                        <div class="rumus-2" :class="lightMode ? 'primary-text' : 'dark-primary-text'">
                          <div class="isi">
                            <div style="min-width: 30px;">r<sub>ij</sub> = </div>
                            <div style="height: 70px; border: 1px solid hsl(254deg, 54%, 50%); width: 10px; border-right: 1px solid transparent;"></div>
                            <div class="flex-col" style="gap: 1rem">
                              <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="min-width: 60px;text-align: center;">
                                  <div style="border-bottom: 1px solid hsl(254deg, 54%, 50%); text-align: center;">x<sub>ij</sub></div>
                                  <div>Max x<sub>ij</sub></div>
                                </div>
                                <div>jika j adalah atribut keuntungan (benefit)</div>
                              </div>
                              <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="min-width: 60px;text-align: center;">
                                  <div style="border-bottom: 1px solid hsl(254deg, 54%, 50%);">Min x<sub>ij</sub></div>
                                  <div style="text-align: center;">x<sub>ij</sub></div>
                                </div>
                                <div>jika j adalah atribut biaya (cost)</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div>Keterangan :</div>
                            <div>r<sub>ij</sub> : atribut yang sudah dinormalisasi</div>
                            <div>x<sub>ij</sub> : nilai atribut</div>
                            <div>Max x<sub>ij</sub> : nilai terbesar dari semua atribut</div>
                            <div>Min x<sub>ij</sub> : nilai terkecil dari semua atribut</div>
                          </div>
                        </div>
                      </div>
                      <div class="table-my mt-4">
                        <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td rowspan="2">Alternatif</td>
                              <td :colspan=newKriteria.length>Kriteria</td>
                            </tr>
                            <tr>
                              <td :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'" v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(alt,index) in newAlternatif3" :key="index">
                              <td>{{alt.namaDosen}}</td>
                              <td v-for="j in newKriteria.length" :key="j">
                                <div v-if="alt.kriteria[Number(j-1)].subKriteria[0].jenisKriteria === 'Benefit'">
                                  {{alt.kriteria[Number(j-1)].subKriteria[0].bobotSubKriteria+'/'+Math.max(...saw.results[Number(j-1)].bobotSubKriteria)+' = '+(saw.results[Number(j-1)].normalisasi[index]).toFixed(2)}}
                                </div>
                                <div v-else-if="alt.kriteria[Number(j-1)].subKriteria[0].jenisKriteria === 'Cost'">
                                  {{Math.min(...saw.results[Number(j-1)].bobotSubKriteria)+'/'+alt.kriteria[Number(j-1)].subKriteria[0].bobotSubKriteria+' = '+(saw.results[Number(j-1)].normalisasi[index]).toFixed(2)}}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  
                  <div v-if="saw !== null">
                    <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Perangkingan.</div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div>
                        <div class="rumus-2" :class="lightMode ? 'primary-text' : 'dark-primary-text'">
                          <div class="isi">
                            <div class="fs-md">V <sub>i</sub> = </div>
                            <div class="fs-lg">&sum;</div>
                            <div class="flex-col fs-sm">
                              <div>n</div>
                              <div>j=1</div>
                            </div>
                            <div class="fs-md">w<sub>j</sub> r<sub>ij</sub></div>
                          </div>
                          <div>
                            <div>Keterangan :</div>
                            <div>V<sub>i</sub> : rangking Alternatif</div>
                            <div>w<sub>j</sub> : bobot kriteria</div>
                            <div>r<sub>ij</sub> : atribut yang sudah dinormalisasi</div>
                          </div>
                        </div>
                      </div>
                      <div class="table-my mt-4">
                        <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                            <td rowspan="2">Alternatif</td>
                              <td :colspan=newKriteria.length+1>Kriteria</td>
                            </tr>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                              <td>Total</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(alt,i) in newAlternatif3" :key="alt.id">
                              <td>{{alt.namaDosen}}</td>
          
                              <td v-for="(sr,index) in saw.results" :key="index">
                                <div>
                                  {{(sr.normalisasi[i]).toFixed(3)+' x '+newKriteria[index].bobotKriteria+' = '+(sr.perangkingan[i]).toFixed(3)}}
                                </div>
                              </td>
                              <td>
                                <div v-if="saw.total != null" class="text-semi-bold">{{ (saw.total[i]).toFixed(3) }}</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
        
                  <div v-if="rangkingAlternatif.length !== 0">
                    <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Perangkingan alternatif.</div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div class="table-my">
                        <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                          <thead>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                            <td rowspan="2">No</td>
                              <td rowspan="2">Alternatif</td>
                              <td :colspan=newKriteria.length+1>Kriteria</td>
                            </tr>
                            <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                              <td>Total</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(ra, index) in rangkingAlternatif" :key="index">
                              <td>{{ index+1 }}</td>
                              <td>{{ ra.namaDosen }}</td>
                              <td v-for="i in newKriteria.length" :key="i">
                                <div>{{ (ra['c'+Number(i)]).toFixed(3) }}</div>
                              </td>
                              <td class="text-semi-bold">{{ (ra.total).toFixed(3) }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div v-if="rangkingAlternatif.length !== 0">
                    <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Kesimpulan.</div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div style="display:flex; flex-direction:row; flex-wrap: wrap; gap:.5rem">
                        <div>Kriteria saya :</div>
                        <div class="tag is-primary" v-for="sk in saw.kriteriaDipilih" :key="sk">{{ sk.namaKriteria }}</div>
                      </div>
                      <div style="display:flex; flex-direction:row; flex-wrap: wrap; gap:.5rem">
                        <div>Sub Kriteria saya :</div>
                        <div class="tag is-primary is-light" v-for="ssk in saw.subKriteriaDipilih" :key="ssk">{{ ssk }}</div>
                      </div>
                      <div class="paragraph">
                        <p>Berdasarkan Kriteria dan Sub Kriteria yang terpilih, kamu direkomendasikan untuk memilih
                        <span v-if="rangkingAlternatif[0].gender === 'Perempuan'" class="text-semi-bold" :class="lightMode ? 'primary-text' : 'dark-primary-text'">Bu {{ rangkingAlternatif[0].namaDosen }}</span>
                        <span v-else-if="rangkingAlternatif[0].gender === 'Laki-laki'" class="text-semi-bold" :class="lightMode ? 'primary-text' : 'dark-primary-text'">Pak {{ rangkingAlternatif[0].namaDosen }}</span>
                        sebagai dosen pembimbing skripsi.</p>
                      </div>
                      <div>
                        <div class="button-my glow warning-glow" :class="lightMode ? 'warning' : 'dark-warning'" @click="resetSaw()">Hitung Ulang</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="apaSudahHitungSaw === 'belum'">
                <div class="tabels">
                  <div v-if="tahap.tahap2 || tahap.tahap3">
                    <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Rangkuman.</div>
                    <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                      <div style="display:flex; flex-direction:row; flex-wrap: wrap; gap:.5rem">
                        <div>Kriteria saya :</div>
                        <div class="tag is-primary" v-for="sd in selectDocs" :key="sd">{{ sd.namaKriteria }}</div>
                      </div>
                      <div class="mt-2" style="display:flex; flex-direction:row; flex-wrap: wrap; gap:.5rem">
                        <div>Sub Kriteria saya :</div>
                        <div class="tag is-primary is-light" v-for="nsn in newSawName" :key="nsn">{{ nsn }}</div>
                      </div>
                    </div>
                  </div>
                  <div v-if="tahap.tahap1">
                    <div>
                      <!-- <div class="alert-my alert-danger text-semi-bold" :class="lightMode ? 'danger-text' : 'dark-danger-text'">Dokumen SAW tidak ditemukan atau telah dihapus! Silahkan memulai pencarian baru</div> -->
                      <div class="columns mt-2">
                        <div class="column">
                          <div>Langkah 1 dari 2</div>
                          <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Pilih kriteria.</div>
                          <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                            <div v-for="krt in kriteria" :key="krt.id">
                              <div class="pretty p-switch p-fill">
                                <input 
                                  type="checkbox" 
                                  :id="krt.namaKriteria" 
                                  :value="{namaKriteria: krt.namaKriteria,idKriteria: krt.idKriteria}"
                                  v-model="selectDocs" 
                                  disabled
                                />
                                <div class="state p-primary">
                                  <label :for="krt.namaKriteria">{{ krt.namaKriteria }}</label>
                                </div>
                              </div>
                            </div>
                            <div class="mt-5 paragraph">
                              <p>Kriteria saya : <span v-for="sd in selectDocs" :key="sd" class="tag is-primary mx-1">{{ sd.namaKriteria }}</span></p>
                            </div>
                            <!-- <div>selectDocs : {{ selectDocs }}</div> -->
                          </div>
                        </div>
                      </div>
                      <div>
                        <div v-if="selectDocs.length !== 0" class="button-my glow primary-glow mr-2" :class="lightMode ? 'primary' : 'dark-primary'"  @click="toHitung1()">Selanjutnya</div>
                        <div v-else class="button-my glow primary primary-glow mr-2 disable">Selanjutnya</div>
                      </div>
                    </div>
                  </div>
    
                  <div v-else-if="tahap.tahap2">
                    <div v-if="lists[0]">
                      <div>
                        <div>Langkah 2 dari 2</div>
                        <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Pilih sub kriteria.</div>
                        <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                          <div v-for="(krt, index) in newKriteria" :key="krt.idKriteria" class="full">
                            <div v-if="krt.subKriteria != ''" class="full-w">
                              <div class="mb-2">{{krt.namaKriteria}}</div>
                              <div class="flex mb-2" style="flex-direction: column;" :class="lightMode ? 'light-mode-input-my' : 'dark-mode-input-my'">
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
                        <div class="mt-5">
                          <div v-if="newSubKriteria.length === newKriteria.length" class="button-my glow primary-glow mr-2" :class="lightMode ? 'primary' : 'dark-primary'" @click="toHitung2()">Cari dosbing skripsi-ku</div>
                          <div v-else class="button-my glow primary primary-glow mr-2 disable">Cari dosbing skripsi-ku</div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div v-else-if="tahap.tahap3 === true && selesaiHitung" class="tabels">
                    <div>
                      <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Tabel kriteria.</div>
                      <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                        <div class="table-my">
                          <table v-if="newKriteria != ''" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                            <thead>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                <td>No</td>
                                <td>Kriteria</td>
                                <td>Jenis</td>
                                <td>Bobot</td>
                                <td>Sub Kriteria</td>
                                <td>Bobot Sub Kriteria</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(krt,index) in newKriteria" :key="index">
                                <td>{{(index+1)}}</td>
                                <td>{{(krt.namaKriteria)}}</td>
                                <td>{{krt.jenisKriteria}}</td>
                                <td>{{krt.bobotKriteria}}</td>
                                <td colspan="2">
                                  <div v-for="(skrt,index) in newKriteria[index].subKriteria" :key="index">
                                    <table class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                                      <tbody>
                                        <tr>
                                          <td>{{(skrt.name)}}</td>
                                          <td align="right">{{(skrt.bobotSubKriteria)}}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table v-else class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                            <tbody>
                              <tr>
                                <td>No</td>
                                <td>Kriteria</td>
                                <td>Jenis</td>
                                <td>Bobot</td>
                                <td>Sub Kriteria</td>
                                <td>Bobot Sub Kriteria</td>
                              </tr>
                              <tr>
                                <td colspan="6">Tidak Ada Data</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
        
                    <div>
                      <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Data alternatif dosbing skripsi yang akan dinilai.</div>
                      <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                        <div class="table-my">
                          <table v-if="newAlternatif3.length != 0" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                            <thead>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                <td rowspan="2">Alternatif</td>
                                <td :colspan=newKriteria.length>Kriteria</td>
                              </tr>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(alt,index) in newAlternatif3" :key="index">
                                <td>{{alt.namaDosen}}</td>
                                <td v-for="j in newKriteria.length" :key="j">{{ alt.kriteria[Number(j-1)].subKriteria[0].name }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
        
                    <div>
                      <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Menentukan benefit dan cost.</div>
                      <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                        <div class="table-my">
                          <table v-if="newAlternatif3.length != 0" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                            <thead>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td rowspan="2">Alternatif</td>
                              <td :colspan=newKriteria.length>Kriteria</td>
                              </tr>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(alt,index) in newAlternatif3" :key="index">
                                <td>{{alt.namaDosen}}</td>
                                <td v-for="j in newKriteria.length" :key="j">{{ alt.kriteria[Number(j-1)].subKriteria[0].jenisKriteria }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
          
                    <div>
                      <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Analisa data kriteria berdasarkan benfit dan cost.</div>
                      <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                        <div class="table-my">
                          <table v-if="newAlternatif3.length != 0" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                            <thead>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td rowspan="2">Alternatif</td>
                                <td :colspan=newKriteria.length>Kriteria</td>
                              </tr>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(alt,index) in newAlternatif3" :key="index">
                                <td>{{alt.namaDosen}}</td>
                                <td v-for="j in newKriteria.length" :key="j">{{ alt.kriteria[Number(j-1)].subKriteria[0].bobotSubKriteria }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
          
                    <div>
                      <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Normalisasi.</div>
                      <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                        <div>
                          <div class="rumus-2" :class="lightMode ? 'primary-text' : 'dark-primary-text'">
                            <div class="isi">
                              <div style="min-width: 30px;">r<sub>ij</sub> = </div>
                              <div style="height: 70px; border: 1px solid hsl(254deg, 54%, 50%); width: 10px; border-right: 1px solid transparent;"></div>
                              <div class="flex-col" style="gap: 1rem">
                                <div style="display: flex; align-items: center; gap: 1rem;">
                                  <div style="min-width: 60px;text-align: center;">
                                    <div style="border-bottom: 1px solid hsl(254deg, 54%, 50%); text-align: center;">x<sub>ij</sub></div>
                                    <div>Max x<sub>ij</sub></div>
                                  </div>
                                  <div>jika j adalah atribut keuntungan (benefit)</div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 1rem;">
                                  <div style="min-width: 60px;text-align: center;">
                                    <div style="border-bottom: 1px solid hsl(254deg, 54%, 50%);">Min x<sub>ij</sub></div>
                                    <div style="text-align: center;">x<sub>ij</sub></div>
                                  </div>
                                  <div>jika j adalah atribut biaya (cost)</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>Keterangan :</div>
                              <div>r<sub>ij</sub> : atribut yang sudah dinormalisasi</div>
                              <div>x<sub>ij</sub> : nilai atribut</div>
                              <div>Max x<sub>ij</sub> : nilai terbesar dari semua atribut</div>
                              <div>Min x<sub>ij</sub> : nilai terkecil dari semua atribut</div>
                            </div>
                          </div>
                        </div>
                        <div class="table-my mt-4">
                          <table v-if="newAlternatif3.length != 0" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                            <thead>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td rowspan="2">Alternatif</td>
                                <td :colspan=newKriteria.length>Kriteria</td>
                              </tr>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(alt,index) in newAlternatif3" :key="index">
                                <td>{{alt.namaDosen}}</td>
                                <td v-for="j in newKriteria.length" :key="j">
                                  <div v-if="alt.kriteria[Number(j-1)].subKriteria[0].jenisKriteria === 'Benefit'">
                                    {{alt.kriteria[Number(j-1)].subKriteria[0].bobotSubKriteria+'/'+Math.max(...newSawData[Number(j-1)].bobotSubKriteria)+' = '}}
                                    {{
                                      (alt.kriteria[Number(j-1)].subKriteria[0].bobotSubKriteria/Math.max(...newSawData[Number(j-1)].bobotSubKriteria)).toFixed(2)
                                    }}
                                  </div>
                                  <div v-else-if="alt.kriteria[Number(j-1)].subKriteria[0].jenisKriteria === 'Cost'">
                                    {{Math.min(...newSawData[Number(j-1)].bobotSubKriteria)+'/'+alt.kriteria[Number(j-1)].subKriteria[0].bobotSubKriteria+' = '}}
                                    {{
                                      (Math.min(...newSawData[Number(j-1)].bobotSubKriteria)/alt.kriteria[Number(j-1)].subKriteria[0].bobotSubKriteria).toFixed(2)
                                    }}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Perangkingan.</div>
                      <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                        <div>
                          <div class="rumus-2" :class="lightMode ? 'primary-text' : 'dark-primary-text'">
                            <div class="isi">
                              <div class="fs-md">V <sub>i</sub> = </div>
                              <div class="fs-lg">&sum;</div>
                              <div class="flex-col fs-sm">
                                <div>n</div>
                                <div>j=1</div>
                              </div>
                              <div class="fs-md">w<sub>j</sub> r<sub>ij</sub></div>
                            </div>
                            <div>
                              <div>Keterangan :</div>
                              <div>V<sub>i</sub> : rangking Alternatif</div>
                              <div>w<sub>j</sub> : bobot kriteria</div>
                              <div>r<sub>ij</sub> : atribut yang sudah dinormalisasi</div>
                            </div>
                          </div>
                        </div>
                        <div class="table-my mt-4">
                          <div v-if="newSawData != ''">
                            <table v-if="newSawData[0].normalisasi != ''" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                              <thead>
                                <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                <td rowspan="2">Alternatif</td>
                                  <td :colspan=newKriteria.length+1>Kriteria</td>
                                </tr>
                                <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                  <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                                  <td>Total</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(alt,i) in newAlternatif3" :key="alt.id">
                                  <td>{{alt.namaDosen}}</td>
              
                                  <td v-for="(sr,index) in newSawData" :key="index">
                                    <div>
                                      {{(sr.normalisasi[i]).toFixed(3)+' x '+newKriteria[index].bobotKriteria+' = '}}
                                      {{((sr.normalisasi[i])*(newKriteria[index].bobotKriteria)).toFixed(3)}}
                                    </div>
                                  </td>
                                  <td v-if="saw != null">
                                    <div v-if="saw.total != null" class="text-semi-bold">{{ (saw.total[i]).toFixed(3) }}</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table v-else class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                              <tbody>
                                <tr>
                                  <td>Alternatif</td>
                                  <td>Kriteria</td>
                                  <td>Total</td>
                                </tr>
                                <tr>
                                  <td colspan="3">Tidak Ada Data</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
          
                    <div>
                      <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Perangkingan alternatif.</div>
                      <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                        <div class="table-my">
                          <table v-if="rangkingAlternatif != ''" class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                            <thead>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                              <td rowspan="2">No</td>
                                <td rowspan="2">Alternatif</td>
                                <td :colspan=newKriteria.length+1>Kriteria</td>
                              </tr>
                              <tr :class="lightMode ? 'light-mode-layout' : 'dark-mode-shades2'">
                                <td v-for="(i,index) in newKriteria" :key="i">C{{index+1}}</td>
                                <td>Total</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(ra, index) in rangkingAlternatif" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ ra.namaDosen }}</td>
                                <td v-for="i in newKriteria.length" :key="i">
                                  <div>{{ (ra['c'+Number(i)]).toFixed(3) }}</div>
                                </td>
                                <td class="text-semi-bold">{{ (ra.total).toFixed(3) }}</td>
                              </tr>
                            </tbody>
                          </table>
                          <table v-else class="table is-fullwidth" :class="lightMode ? 'light-mode-bg light-mode-table' : 'dark-mode-shades1 dark-mode-table'">
                            <tbody>
                              <tr>
                                <td>No</td>
                                <td>Alternatif</td>
                                <td>Kriteria</td>
                                <td>Total</td>
                              </tr>
                              <tr>
                                <td colspan="4">Tidak Ada Data</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div ref="btnBot"></div>
                    </div>
                    
                    <div>
                      <div>
                        <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Kesimpulan.</div>
                        <div class="card-bubble-my-content" :class="lightMode ? 'light-mode-bg' : 'dark-mode-shades1'">
                          <div  style="display:flex; flex-direction:row; flex-wrap: wrap; gap:.5rem">
                            <div>Kriteria saya :</div>
                            <div class="tag is-primary" v-for="sd in selectDocs" :key="sd">{{ sd.namaKriteria }}</div>
                          </div>
                          <div style="display:flex; flex-direction:row; flex-wrap: wrap; gap:.5rem">
                            <div>Sub Kriteria saya :</div>
                            <div class="tag is-primary is-light" v-for="nsn in newSawName" :key="nsn">{{ nsn }}</div>
                          </div>
                          <div class="paragraph">
                            <p>Berdasarkan Kriteria dan Sub Kriteria yang terpilih, kamu direkomendasikan untuk memilih <span :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold" v-if="rangkingAlternatif[0].gender === 'Perempuan'">Bu {{ rangkingAlternatif[0].namaDosen }}</span><span :class="lightMode ? 'primary-text' : 'dark-primary-text'" class="text-semi-bold" v-else-if="rangkingAlternatif[0].gender === 'Laki-laki'">Pak {{ rangkingAlternatif[0].namaDosen }}</span> sebagai dosen pembimbing skripsi.</p>
                          </div>
                          <div>
                            <div class="button-my glow warning-glow mt-3" :class="lightMode ? 'warning' : 'dark-warning'" @click="resetSaw()">Hitung Ulang</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="awal">
                <div class="hover-u-primary text-15 text-regular mb-5" style="display: inline-flex;">Perhitungan dengan metode SAW</div>
                <div v-if="thisUser.progres.isHitungSaw">
                  <div class="paragraph" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">
                    <p>Untuk melihat detail perhitungan rekomendasi dosen pembimbing skripsi menggunakan metode SAW, klik tombol <span class="code" :class="lightMode ? 'code-light' : 'code-dark'">Buka Dokumen SAW</span> di bawah ini untuk membuka dokumen SAW. Jika kamu ingin melakukan perhitungan ulang maka klik tombol <span class="code" :class="lightMode ? 'code-light' : 'code-dark'">Hitung Ulang</span> untuk membuat dokumen SAW baru.</p>
                  </div>
                  <div class="mt-5 saw-doc">
                    <document-text-icon :class="lightMode ? 'primary-text' : 'dark-primary-text'" style="min-width: 100px;min-height: 100px;" />
                    <div class="saw-doc-right">
                      <div>Dokumen SAW {{ new Intl.DateTimeFormat(['ban', 'id']).format(thisUser.sawSavedAt.toDate()) + ', ' + (String(thisUser.sawSavedAt.toDate().getHours()).padStart(2, '0') + ':' + String(thisUser.sawSavedAt.toDate().getMinutes()).padStart(2, '0')) }}</div>
                      <div class="saw-doc-right-bot">
                        <div class="button-my glow primary-glow" :class="lightMode ? 'primary' : 'dark-primary'" @click="toHitung(), $emit('rightMenuSaw', 'open')">Buka Dokumen SAW</div>
                        <div class="button-my glow warning-glow" :class="lightMode ? 'warning' : 'dark-warning'" @click="resetSaw()">Hitung Ulang</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="paragraph" :class="lightMode ? 'light-mode-color2' : 'dark-mode-color2'">
                    <p>Untuk melihat lebih lanjut mengenai perhitungan rekomendasi dosen pembimbing skripsi dengan menggunakan metode SAW, silahkan klik tombol <span class="code" :class="lightMode ? 'code-light' : 'code-dark'">Buat Dokumen SAW Baru</span> di bawah ini untuk membuat dokumen SAW baru.</p>
                  </div>
                  <div class="button-my glow primary-glow mt-5" :class="lightMode ? 'primary' : 'dark-primary'" @click="apaSudahHitungSaw = 'belum', awal = false, toSelectDocs()">Buat Dokumen SAW Baru</div>
                </div>
              </div>
              <loading-component v-else :msg="logMsg" :lightMode="lightMode" />
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
import { onMounted, defineAsyncComponent, ref } from 'vue'
import { useSaw } from '../../services/DataServicesSaw';
import SelectSingle from '../../components/selects/SelectSingle.vue';
import { useMyFunc } from '../../services/OtherFunctions'
import LoadingComponent from '../../components/LoadingComponent.vue';
import swal from 'sweetalert'
import { useAuth } from '../../firebase/firebase';

const FooterComponent = defineAsyncComponent(() => import('../../components/FooterComponent.vue'))
const ToastDanger = defineAsyncComponent(() => import('../../components/toasts/ToastDanger.vue'))
const MenuIcon = defineAsyncComponent(() => import('../../components/icons/MenuIcon.vue'))
const DocumentTextIcon = defineAsyncComponent(() => import('../../components/icons/DocumentTextIcon.vue'))

const { apaSudahHitungSaw, newKriteria, newAlternatif3, saw, rangkingAlternatif, tahap, kriteria, selectDocs, newSawName, lists, newSubKriteria, selesaiHitung, newSawData, getSubCollectionDocSaw, deleteTempDataSaw, eksekusiTahapan2, handleCustomChanges, eksekusiTahapan1, logMsg } = useSaw()
const {thisUser} = useAuth()

const { el1, el2, el3, el4, delay } = useMyFunc()

defineProps({
  lightMode: Boolean
})

const btnBot = ref(null)
const loading = ref(false)
const awal = ref(true)
const toastMsg = ref(null)
const showToastDanger = ref(null)

const toSelectDocs = () => {
  let jmlKriteria = kriteria.value.length
  for (let a=0; a<jmlKriteria; a++){
    selectDocs.value.push({
      namaKriteria: kriteria.value[a].namaKriteria,
      idKriteria: kriteria.value[a].idKriteria
    })
  }
}

const toHitung = async() => {
  loading.value = true
  awal.value = false
  await delay(1000)
  await getSubCollectionDocSaw()
  await delay(3000)
  .then(() => {
    loading.value = false
    btnBot.value?.scrollIntoView({ behavior: 'smooth' })
  })
}
const toHitung1 = async() => {
  loading.value = true
  await delay(1000)
  await eksekusiTahapan1()
  await delay(3000)
  .then(() => {
    tahap.value.tahap1 = false
    tahap.value.tahap2 = true
  })
  .then(() => {
    btnBot.value?.scrollIntoView({ behavior: 'smooth' })
    loading.value = false
  })
}
const toHitung2 = async() => {
  loading.value = true
  await delay(1000)
  await eksekusiTahapan2()
  await delay(3000)
  .then(() => {
    tahap.value.tahap2 = false
    tahap.value.tahap3 = true
    selesaiHitung.value = true
  })
  .then(() => {
    btnBot.value?.scrollIntoView({ behavior: 'smooth' })
    loading.value = false
  })
}
const resetSaw = () => {
  swal({
    title: "Hitung ulang SAW?",
    text: "Dokumen SAW kamu saat ini akan dihapus dan akan dibuatkan dokumen yang baru.",
    buttons: ["Batal", "Hitung Ulang"],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      deleteTempDataSaw()
      toastMsg.value = 'Berhasil menghapus dokumen SAW'
      showToastDanger.value = true
      setTimeout(() => showToastDanger.value = false, 5000)
      btnBot.value?.scrollIntoView({ behavior: 'smooth' })
    }
  });
}

const isMenu = ref(null)
const handleToggleMenu = async(a) => {
  isMenu.value = a
}

onMounted(async() => {
  // loading.value = true
  // await delay(100)
  el4.value = true
  await delay(100)
  el3.value = true
  await delay(100)
  el2.value = true
  await delay(100)
  el1.value = true
  // await delay(100)
  // loading.value = false
})
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../sass/my-texts.scss';
@import '../../pretty-checkbox/src/pretty-checkbox.scss';
@import '../../sass/animation.scss';

.saw-doc {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  &-right{
    flex-direction: column;
    &, &-bot{
      display: flex;
      justify-content: space-around;
    }
    &-bot{
      gap: .5rem;
    }
  }
}
.pretty.p-switch .state:before{
  top: 0;
}
.pretty.p-switch .state label:before, .pretty.p-switch .state label:after{
  top: 1px;
  left: 1px;
}
.pretty.p-switch.p-fill input:checked ~ .state label:after{
  left: calc(1em - 1px);
}
.tabels{
  gap: 6rem;
  display: flex;
  flex-direction: column;
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
.rumus {
  &-2 {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    background: rgba($primary,.1);
    border-left: 3px solid $primary;
    padding: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    .isi {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      .flex {
        &-col {
          display: flex;
          flex-direction: column;
        }
      }
      .fs {
        &-sm {
          font-size: .7rem;
        }
        &-md {
          font-size: 1.25rem;
        }
        &-lg {
          font-size: 1.5rem;
        }
      }
    }
  }
}

</style>