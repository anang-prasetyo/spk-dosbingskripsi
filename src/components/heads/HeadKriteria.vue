<template>
  <div class="pt-1" id="kriteria">
    <div class="card-my">
      <div class="card-my-head">
        <div class="card-my-title">
          <div class="card-my-title">
          <div class="card-my--title-1">Kriteria Dosen Pembimbing Skripsi</div>
          <div class="card-my--title-2">Tentukan kriteria apa saja yang perlu kamu pertimbangkan untuk menentukan calon dosen pembimbing skripsi</div>
        </div>
        </div>
      </div>
      <div class="card-my-main">
        <div>
          <div class="list mt-5 mb-3">
            <div v-for="(krt) in kriteriaPart1" :key="krt.idKriteria" class="list-card">
              <!-- <div class="avatar-square">
                <TeacherIcon />
              </div> -->

              <div class="batas">
                <ListItem :top="krt.namaKriteria" :bot="(krt.subKriteria[0].name+', '+krt.subKriteria[1].name)" />
                <div class="icon-bhs">
                  <div class="tasks">
                    <div class="pretty p-switch p-fill">
                      <input 
                        type="checkbox" 
                        :id="krt.idKriteria" 
                        :value="krt.namaKriteria"
                        v-model="checkedKriteria"
                      />
                      <div class="state p-info">
                        <label :for="krt.idKriteria"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-my-foot">
        <div class="card-my-foot-top">
          <div>Kriteria : </div>
          <div class="card-my-foot-isi">
            <div v-for="(kriteria, index) in checkedKriteria" :key="index">
              <div class="tag is-info ml-2">{{kriteria}}</div>
            </div>
          </div>
        </div>
        <RouterLink to="/kriteria">
          <div class="button-my glow primary-glow">Tampilkan Lebih</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineAsyncComponent, ref} from 'vue'
import { useDatabase } from '../../services/DataService'

const ListItem = defineAsyncComponent(() => import('../ListItem.vue'))

const { kriteriaPart1 } = useDatabase()

const checkedKriteria = ref([])

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
@import '../../pretty-checkbox/src/pretty-checkbox.scss';

.list-card {
  margin: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  background-color: transparent;
  display: flex;
  gap: 1rem;
}
.batas {
  border-bottom: 1px solid $grey-lighter;
  padding-bottom: 0.5rem;
  margin-bottom: -0.5rem;
  width: 100%;
  display: flex;
  gap: 1rem;
}
.icon-bhs {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}

.tasks{
  display: block;
  margin: auto;
}

</style>