<template>
  <div class="columns nm-x">
    <div class="column fixed-column-left is-4">
      <div class="fixed-pesan-left">
        <div class="head-pesan-left">
          <div v-if="isLogin" class="head-pesan-left--title">
            <div class="avatar-nn avatar-nn-md avatar-nn-round avatar-nn-male">
              <div class="avatar-nn-text avatar-nn-text-lg">{{getFirstLetters(user.displayName)}}</div>
            </div>
            <div class="head-pesan-left--title-text">{{user.displayName}}</div>
            <button class="button-my danger" @click="signOut">
              Sign Out
            </button>
          </div>
          <button v-else class="button-my link" @click="signIn">
            Sign in
          </button>
        </div>
        <div
          v-for="gc in groupChat"
          :key="gc.id"
        >
          <div v-if="gc.messagesLatest.text">
            <div v-if="(gc.messagesLatest.userId === user?.uid)">
              <div v-if="(gc.messagesLatest.date === String((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()))">
                <pesan-sender
                  :gender="gc.alternatif.gender"
                  :nick="getFirstLetters(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                  :sender="(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                  :latest="('Saya : ' + gc.messagesLatest.text)"
                  :jam="(gc.messagesLatest.time)"
                  :date="gc.messagesLatest.date"
                  @click="jumpTo(gc.id,gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang,gc.alternatif.gender)"
                />
              </div>
              <div v-else>
                <pesan-sender
                  :gender="gc.alternatif.gender"
                  :nick="getFirstLetters(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                  :sender="(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                  :latest="('Saya : ' + gc.messagesLatest.text)"
                  :jam="(gc.messagesLatest.date)"
                  :date="gc.messagesLatest.date"
                  @click="jumpTo(gc.id,gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang,gc.alternatif.gender)"
                />
              </div>
            </div>
            <div v-else>
              <div v-if="(gc.messagesLatest.date === String((new Date().getMonth()+1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()))">
                <pesan-sender
                  :gender="gc.alternatif.gender"
                  :nick="getFirstLetters(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                  :sender="(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                  :latest="(gc.messagesLatest.userName + ' : ' + gc.messagesLatest.text)"
                  :jam="(gc.messagesLatest.time)"
                  :date="gc.messagesLatest.date"
                  @click="jumpTo(gc.id,gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang,gc.alternatif.gender)"
                />
              </div>
              <div v-else>
                <pesan-sender
                  :gender="gc.alternatif.gender"
                  :nick="getFirstLetters(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                  :sender="(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
                  :latest="(gc.messagesLatest.userName + ' : ' + gc.messagesLatest.text)"
                  :jam="(gc.messagesLatest.date)"
                  :date="gc.messagesLatest.date"
                  @click="jumpTo(gc.id,gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang,gc.alternatif.gender)"
                />
              </div>
            </div>
          </div>
          <div v-else>
            <pesan-sender
              :gender="gc.alternatif.gender"
              :nick="getFirstLetters(gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang)"
              :sender="gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang"
              :latest="'Baru dibuat'"
              :jam="gc.messagesLatest.date"
              :date="gc.messagesLatest.date"
              @click="jumpTo(gc.id,gc.alternatif.namaDosen.namaDepan + ' ' + gc.alternatif.namaDosen.namaBelakang,gc.alternatif.gender)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="column fixed-column-right">
      <pesan-isi 
        :idGC="currentOption.idGC" 
        :namaDosen="currentOption.namaDosen" 
        :nickGC="currentOption.nickGC" 
        :gender="currentOption.gender"  
        :dataMessages="messages"
        :participants="messages"
      />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref} from 'vue'
import { useAuth,  getFirstLetters } from '../../firebase/firebase'
import DataServiceGroupChat from '../../services/DataServiceGroupChat'
import DataServiceMessages from '../../services/DataServiceMessages';

const PesanIsi = defineAsyncComponent(() => import('../../components/pesan/PesanIsi.vue'))
const PesanSender = defineAsyncComponent(() => import('../../components/pesan/PesanSender.vue'))

const { user, isLogin, signOut, signIn } = useAuth()
const datas = ref(null),
      groupChat = ref([]),
      messages = ref()

const onDataChange = (items) => {
        let _groupChat = [];
        items.forEach((item) => {
          let id = item.id;
          let data = item.data();
          _groupChat.push({
            id: id,
            alternatif: data.alternatif,
            messages: data.messages,
            messagesLatest: data.messagesLatest,
            participants: data.participants
          });
        });
        groupChat.value = _groupChat;
      },
      getData = () => {
        datas.value = DataServiceGroupChat.getAll().orderBy("messagesLatest.createdAt", "desc").onSnapshot(onDataChange)
      }
      
      const currentOption = ref([])
      const jumpTo = (idGC,namaDosen,gender) => {
        currentOption.value.idGC = idGC
        currentOption.value.namaDosen = namaDosen
        currentOption.value.nickGC = getFirstLetters(namaDosen)
        currentOption.value.gender = gender
        
        const getDataMessages = () => {
          DataServiceMessages.getAll(currentOption.value.idGC).onSnapshot((doc) => {
            if (doc.exists) {
              messages.value = doc.data()
              // messages2.value = doc.data().orderBy('participants.userName','asc')
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
        }

        getDataMessages()
      }

onMounted( () => {
  getData()
})

</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';

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
      background: $white-blus;
      border-right: 1px solid $grey-lighter;
      overflow-y: auto;
      max-height: 102vh;
    }
    &-right {
      padding-bottom: 0;
      margin-bottom: -1.5rem;
      background: $white-blus;
      overflow-y: scroll;
      max-height: 102vh;
    }
  }
  &-pesan-left {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    min-height: 100vh;
  }
}
.head-pesan-left {
  padding: 1rem 0;
  background: $white;
  border-bottom: 1px solid $grey-lighter;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: flex;
  min-height: 80px;

  &--title {
    display: flex;
    flex-direction: row;
    padding: 0 1rem;
    gap: 1rem;
    
    &-text {
      display: flex;
      margin: auto 0;
      text-transform: capitalize;
    }
  }
}
</style>