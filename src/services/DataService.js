import { computed, onMounted, ref } from "vue";
import firebase from "../firebase/compact";
import { useAuth} from '../firebase/firebase'


export function useDatabase() {
  const dbKriteria = firebase.collection('kriteria')
  const dbAlternatif = firebase.collection('alternatif')
  const dbChatting = firebase.collection('chatting')
  const dbSaw = firebase.collection('saw2')
  const dbUsers = firebase.collection('users2')
  
  var batch = firebase.batch();
  // kriteria
  const kriteria = ref([])
  const kriteriaTeratas = ref([])
  const kriteriaEdit = ref(null)
  const hitungJmlSubKriteria = ref(null)
  const dataKriteria = ref(null)
  const dataKriteriaTeratas = ref(null)
  const hitungJmlKriteria = ref(null)
  // alternatif
  const alternatif = ref([])
  const alternatifTeratas = ref([])
  const alternatifEdit = ref(null)
  const dataAlternatif = ref(null)
  const dataAlternatifTeratas = ref(null)
  const hitungJmlAlternatif = ref(null)
  const isRefAlternatif = computed(() => {
    if (alternatif.value){
      delay(2000)
      if (kriteria.value){
        delay(2000)
        for (var i=0; i<hitungJmlAlternatif.value; i++){
          for (var j=0; j<hitungJmlKriteria.value; j++){
            // alternatif.value[i]['jenisKriteria'] = kriteria.value[i].jenisKriteria

            if ( hitungJmlKriteria.value === 3 ){
              alternatif.value[i].subKriteria[j] = kriteria.value[j].subKriteria.filter(
                v => v.idSubKriteria === alternatif.value[i].kriteria[0].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[1].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[2].idSubKriteria
              )
            }
            else if ( hitungJmlKriteria.value === 4 ){
              alternatif.value[i].subKriteria[j] = kriteria.value[j].subKriteria.filter(
                v => v.idSubKriteria === alternatif.value[i].kriteria[0].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[1].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[2].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[3].idSubKriteria
              )
            }
            else if ( hitungJmlKriteria.value === 5 ){
              alternatif.value[i].subKriteria[j] = kriteria.value[j].subKriteria.filter(
                v => v.idSubKriteria === alternatif.value[i].kriteria[0].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[1].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[2].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[3].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[4].idSubKriteria
              )
            }
            else if ( hitungJmlKriteria.value === 6 ){
              alternatif.value[i].subKriteria[j] = kriteria.value[j].subKriteria.filter(
                v => v.idSubKriteria === alternatif.value[i].kriteria[0].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[1].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[2].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[3].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[4].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[5].idSubKriteria
              )
            }
            else if ( hitungJmlKriteria.value === 7 ){
              alternatif.value[i].subKriteria[j] = kriteria.value[j].subKriteria.filter(
                v => v.idSubKriteria === alternatif.value[i].kriteria[0].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[1].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[2].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[3].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[4].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[5].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[6].idSubKriteria
              )
            }
            else if ( hitungJmlKriteria.value === 8 ){
              alternatif.value[i].subKriteria[j] = kriteria.value[j].subKriteria.filter(
                v => v.idSubKriteria === alternatif.value[i].kriteria[0].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[1].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[2].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[3].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[4].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[5].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[6].idSubKriteria || v.idSubKriteria === alternatif.value[i].kriteria[7].idSubKriteria
              )
            }
          }
        }
      }
    } else {
      console.log('gagal')
    }
    return alternatif.value
  })
  const isRefAlternatifEdit = computed(() => {
    if (alternatifEdit.value){
      if (kriteria.value){
        for (var j=0; j<hitungJmlKriteria.value; j++){
          // alternatifEdit.value.subKriteria[j] = kriteria.value[j].subKriteria.filter(
          //   v => v.idSubKriteria === alternatifEdit.value.kriteria[0].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[1].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[2].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[3].idSubKriteria
          // )

          if ( hitungJmlKriteria.value === 3 ){
            alternatifEdit.value.subKriteria[j] = kriteria.value[j].subKriteria.filter(
              v => v.idSubKriteria === alternatifEdit.value.kriteria[0].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[1].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[2].idSubKriteria
            )
          }
          else if ( hitungJmlKriteria.value === 4){
            alternatifEdit.value.subKriteria[j] = kriteria.value[j].subKriteria.filter(
              v => v.idSubKriteria === alternatifEdit.value.kriteria[0].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[1].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[2].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[3].idSubKriteria
            )
          }
          else if ( hitungJmlKriteria.value === 5){
            alternatifEdit.value.subKriteria[j] = kriteria.value[j].subKriteria.filter(
              v => v.idSubKriteria === alternatifEdit.value.kriteria[0].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[1].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[2].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[3].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[4].idSubKriteria
            )
          }
          else if ( hitungJmlKriteria.value === 6){
            alternatifEdit.value.subKriteria[j] = kriteria.value[j].subKriteria.filter(
              v => v.idSubKriteria === alternatifEdit.value.kriteria[0].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[1].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[2].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[3].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[4].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[5].idSubKriteria
            )
          }
          else if ( hitungJmlKriteria.value === 7){
            alternatifEdit.value.subKriteria[j] = kriteria.value[j].subKriteria.filter(
              v => v.idSubKriteria === alternatifEdit.value.kriteria[0].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[1].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[2].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[3].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[4].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[5].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[6].idSubKriteria || v.idSubKriteria === alternatifEdit.value.kriteria[7].idSubKriteria
            )
          }
        }
      }
    } 
    // else {
    //   console.log('belum klik edit')
    // }
    return alternatifEdit.value
  })
  // saw
  const saw = ref([])
  const dataSaw = ref(null)
  // user 
  const users = ref([])
  const dataUsers = ref([])
  const dosbing = ref(null)
  const afterDosbing = computed(() => {
    if (thisUser.value){
      if (thisUser.value.skripsi.pembimbing !== ''){
        var _dosbing = null
        _dosbing = alternatif.value.filter(v => v.idAlternatif === thisUser.value.skripsi.pembimbing)
        dosbing.value = _dosbing[0].namaDosen.gelarDepan + ' ' + _dosbing[0].namaDosen.namaDepan + ' ' + _dosbing[0].namaDosen.namaBelakang + ', ' + _dosbing[0].namaDosen.gelarBelakang 
      }
    }
    return dosbing.value
  })
  const applicationsAccept = ref(null)
  const afterApplicationsAccept = computed(() => {
    if (afterChat.value){
      var _applicationsAccept = []
      for (var i = 0; i<thisChat.value[0].applicationsAccept.length; i++){
        _applicationsAccept.push(users.value.filter(v => v.idUsers === thisChat.value[0].applicationsAccept[i]))
      }
      applications.value = _applicationsAccept
    }
    // if (users.value){
    // }
    return applicationsAccept.value
  })
  // chatting 
  const thisChat = ref(null)
  const afterChat = computed(() => {
    if (thisUser.value){
      getDocChatting(thisUser.value.user.userEmail).get().then((doc) => {
        let _thisChat = []
        let id = doc.id
        let data = doc.data()
        // console.log('id =>',id);
        // console.log('data =>',data);
        _thisChat.push({
          id: id,
          applicationsAccept: data.applicationsAccept,
          applicationsTotal: data.applicationsTotal,
          messagesUnreadDosen: data.messagesUnreadDosen
        })
        thisChat.value = _thisChat
      })
    }
    return thisChat.value
  })
  const isNewMsg = ref(null)
  const thisNewMsg = ref({
    idGroupChat: null,
    groupName: null,
    messagesUnreadUser: [],
    messages: null,
    done: false
  })
  const resetNewMsg = () => {
    thisNewMsg.value.idGroupChat= null,
    thisNewMsg.value.groupName= null,
    thisNewMsg.value.messagesUnreadUser= 0,
    thisNewMsg.value.messages= null,
    thisNewMsg.value.done= false
  }
  // const pushNotifMsg = computed(() => {
  //   if (thisUser.value !== null){
  //     if (thisUser.value.isFav.length !== 0){
  //       let isFav = thisUser.value.isFav
  //       for (var i=0; i<isFav.length; i++){
  //         getDocChatting(isFav[i]).collection('participants').doc(thisUser.value.user.userId)
  //         .get().then((doc) => {
  //           let _data = doc.data()
  //           thisNewMsg.value.messagesUnreadUser = _data.messagesUnreadUser
  //         })
  //         getDocChatting(isFav[i]).collection('messages')
  //         .get().then((docs) => {
  //           let __messages = []
  //           docs.forEach((doc) => {
  //             __messages.push(doc.data())
  //           })
  //           thisNewMsg.value.messages = __messages.slice(-thisNewMsg.value.messagesUnreadUser)
  //         })
  //         getDocChatting(isFav[i])
  //         .get().then((doc) => {
  //           let _groupName = doc.data()
  //           thisNewMsg.value.groupName = _groupName.alternatif.namaDosen
  //         })
  //       }
  //       thisNewMsg.value.done = true
  //       setTimeout(() => thisNewMsg.value.done = false, 5000)
  //       // isPushNotifMsg = thisUser.value.isNewMsg
  //     }
  //   }
  //   return thisNewMsg.value
  // })
  // const filterGroupChat = async () => {
  //   let isFav = thisUser.value.isFav
  //   for (var i=0; i<isFav.length; i++){
  //     getDocChatting(isFav[i]).collection('participants').doc(thisUser.value.user.userId)
  //     .get().then((doc) => {
  //       let _data = doc.data()
  //       thisNewMsg.value.messagesUnreadUser = _data.messagesUnreadUser
  //     })
  //     getDocChatting(isFav[i]).collection('messages')
  //     .get().then((docs) => {
  //       let __messages = []
  //       docs.forEach((doc) => {
  //         __messages.push(doc.data())
  //       })
  //       thisNewMsg.value.messages = __messages.slice(-thisNewMsg.value.messagesUnreadUser)
  //     })
  //     getDocChatting(isFav[i])
  //     .get().then((doc) => {
  //       let _groupName = doc.data()
  //       thisNewMsg.value.groupName = _groupName.alternatif.namaDosen
  //     })
  //   }
  //   // console.log('thisNewMsg =>', thisNewMsg.value);
  // }

  const onDataChangeKriteria = async(items) => {
    let _kriteria = [];
    await items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      _kriteria.push({
        idKriteria: id,
        namaKriteria: data.namaKriteria,
        jenisKriteria: data.jenisKriteria,
        bobotKriteria: data.bobotKriteria,
        subKriteria: data.subKriteria,
      })
    })
    kriteria.value = _kriteria;
    hitungJmlKriteria.value = kriteria.value.length
  }
  const onDataChangeKriteriaTeratas = async(items) => {
    let _kriteriaTeratas = [];
    await items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      _kriteriaTeratas.push({
        idKriteria: id,
        namaKriteria: data.namaKriteria,
        jenisKriteria: data.jenisKriteria,
        bobotKriteria: data.bobotKriteria,
        subKriteria: data.subKriteria
      })
    })
    kriteriaTeratas.value = _kriteriaTeratas
    limitKriteria()
  }
  const onDataChangeAlternatif = async(items) => {
    let _alternatif = [];
    await items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      _alternatif.push({
        idAlternatif: id,
        namaDosen: data.namaDosen,
        nidn: data.nidn,
        skripsi: data.skripsi,
        kriteria: data.kriteria,
        subKriteria: [],
        gender: data.gender,
        isVerify: data.isVerify
      });
    });
    alternatif.value = _alternatif;
    hitungJmlAlternatif.value = alternatif.value.length
  }
  const onDataChangeAlternatifTeratas = async(items) => {
    let _alternatifTeratas = [];
    await items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      _alternatifTeratas.push({
        idAlternatif: id,
        namaDosen: data.namaDosen,
        nidn: data.nidn,
        skripsi: data.skripsi,
        kriteria: data.kriteria,
        subKriteria: [],
        gender: data.gender
      })
    })
    alternatifTeratas.value = _alternatifTeratas
    limitAlternatif()
  }
  const onDataChangeSaw = async(items) => {
    let _saw = [];
    await items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      _saw.push({
        idSaw: id,
        namaDosen: data.namaDosen,
        total: data.total
      });
    });
    saw.value = _saw;
  }
  const onDataChangeUsers = async(items) => {
    let _users = [];
    await items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      _users.push({
        idUsers: id,
        profile: data.profile,
        skripsi: data.skripsi,
        user: data.user
      });
    });
    users.value = _users;
  }
  const getDataKriteria = () => {
    dataKriteria.value = dbKriteria.orderBy('namaKriteria', 'asc').onSnapshot(onDataChangeKriteria)
  }
  const getDataKriteriaTeratas = () => {
    dataKriteriaTeratas.value = dbKriteria.orderBy('bobotKriteria', 'desc').onSnapshot(onDataChangeKriteriaTeratas)
  }
  const getDataAlternatif = () => {
    dataAlternatif.value = dbAlternatif.orderBy('namaDosen.namaDepan', 'asc').onSnapshot(onDataChangeAlternatif)
  }
  const getDataAlternatifTeratas = () => {
    dataAlternatifTeratas.value = dbAlternatif.orderBy('namaDosen.namaDepan', 'asc').onSnapshot(onDataChangeAlternatifTeratas)
  }
  const getDataSaw = () => {
    dataSaw.value = dbSaw.orderBy('namaDosen.namaDepan', 'asc').onSnapshot(onDataChangeSaw)
  }
  const getDataUsers = () => {
    dataUsers.value = dbUsers.orderBy('user.userName', 'asc').onSnapshot(onDataChangeUsers)
  }
  const kriteriaPart1 = ref([])
  const kriteriaPart2 = ref([])
  const alternatifPart1 = ref([])
  const alternatifPart2 = ref([])
  const limitKriteria = () => {
    let jmlhKriteria = kriteriaTeratas.value.length
    let _kriteriaPart1 = []
    let _kriteriaPart2 = []
    if (jmlhKriteria > 3){
      for (var i=0; i<3; i++){
        _kriteriaPart1.push(kriteriaTeratas.value[i])
      }
      for (var j=0; j<Number(jmlhKriteria-3); j++){
        _kriteriaPart2.push(kriteriaTeratas.value[Number(3+j)])
      }
    }
    else {
      for (var k=0; k<3; k++){
        _kriteriaPart1.push(kriteriaTeratas.value[k])
      }
    }
    kriteriaPart1.value = _kriteriaPart1
    kriteriaPart2.value = _kriteriaPart2
  }
  const limitAlternatif = () => {
    let jmlhAlternatif = alternatifTeratas.value.length
    let _alternatifPart1 = []
    let _alternatifPart2 = []
    if (jmlhAlternatif > 4){
      for (var i=0; i<4; i++){
        _alternatifPart1.push(alternatifTeratas.value[i])
      }
      for (var j=0; j<Number(jmlhAlternatif-4); j++){
        _alternatifPart2.push(alternatifTeratas.value[Number(4+j)])
      }
    }
    else {
      for (var k=0; k<4; k++){
        _alternatifPart1.push(alternatifTeratas.value[k])
      }
    }
    alternatifPart1.value = _alternatifPart1
    alternatifPart2.value = _alternatifPart2
    // console.log('alternatifPart1 =>',alternatifPart1.value);
    // console.log('alternatifPart2 =>',alternatifPart2.value);
  }

  // kriteria
  function getAllKriteria() {
    return dbKriteria;
  }
  function getDocKriteria(id) {
    return dbKriteria.doc(id);
  }
  function addKriteria(value) {
    return dbKriteria.add(value);
  }
  function setKriteria(id, value) {
    return dbKriteria.doc(id).set(value);
  }
  function updateKriteria(id, value) {
    return dbKriteria.doc(id).update(value);
  }
  function deleteKriteria(id){
    return dbKriteria.doc(id).delete();
  }
  // alternatif
  function getAllAlternatif() {
    return dbAlternatif;
  }
  function getDocAlternatif(id) {
    return dbAlternatif.doc(id);
  }
  function deleteAlternatif(id){
    return dbAlternatif.doc(id).delete();
  }
  function setAlternatif(id, value) {
    return dbAlternatif.doc(id).set(value);
  }
  function updateAlternatif(id, value) {
    return dbAlternatif.doc(id).update(value);
  }
  // chatting
  function getAllChatting() {
    return dbChatting;
  }
  function getDocChatting(id) {
    return dbChatting.doc(id);
  }
  function setChatting(id, value) {
    return dbChatting.doc(id).set(value);
  }
  function updateChatting(id, value) {
    return dbChatting.doc(id).update(value);
  }
  function deleteChatting(id){
    return dbChatting.doc(id).delete();
  }
  // saw
  function addSaw(value) {
    return dbSaw.add(value);
  }
  function getAllSaw() {
    return dbSaw;
  }
  function getDocSaw(id) {
    return dbSaw.doc(id);
  }
  function updateSaw(id, value) {
    return dbSaw.doc(id).update(value);
  }
  function deleteSaw(id){
    return dbSaw.doc(id).delete();
  }
  // users
  function getDocUsers(id) {
    return dbUsers.doc(id);
  }
  function setUsers(id, value) {
    return dbUsers.doc(id).set(value);
  }
  function updateUsers(id, value) {
    return dbUsers.doc(id).update(value);
  }
  
  const dataGroupChat = ref(null)
  const dataParticipants = ref(null)
  const dataApplications = ref(null)
  const groupChat = ref([])
  const groupChat2 = ref([])
  const participants = ref([])
  const applications = ref([])
  const messages = ref([])
  const currentOption = ref([])
  const unreadMsgGroupChat = ref([])
  const newArrUnread = ref([])
  const isCliked = ref(null)
  const newFav = ref([])
  const { thisUser } = useAuth()
  
  function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
  const filterUnreadOnly = () => {
    let _newArrUnread = []
    let _newFav = []
    // console.log('unreadMsgGroupChat =>',unreadMsgGroupChat.value.length, unreadMsgGroupChat.value)
    for ( var h=0; h<unreadMsgGroupChat.value.length; h++){
      if (unreadMsgGroupChat.value[h][0] !== 0){
        _newArrUnread.push(unreadMsgGroupChat.value[h][0])
      }
      else {
        _newArrUnread.push([])
      }
      _newFav.push(false)
    }
    // console.log('_newArrUnread =>',_newArrUnread.length, _newArrUnread)
    delay(1000)
    for ( var i=0; i<_newArrUnread.length; i++){
      if (_newArrUnread[i].length !== 0){
        _newArrUnread.splice(i,1,_newArrUnread[i].filter(
          v => v.userId === thisUser.value.user.userId
        ))
        // console.log('array isi pada index ke', i)
      }
    }
    delay(1000)
    for ( var j=0; j<_newArrUnread.length; j++){
      if (_newArrUnread[j].length !== 0){
        _newFav.splice(j,1,_newArrUnread[j][0].isFav)
        _newArrUnread.splice(j,1,_newArrUnread[j][0].messagesUnreadUser)
        // console.log('unread diisi pada index ke', j)
      }
      else {
        _newArrUnread.splice(j,1,0)
        _newFav.splice(j,1,false)
      }
    }
    // console.log('_newArrUnread(2) =>',_newArrUnread.length, _newArrUnread)
    newArrUnread.value = _newArrUnread
    newFav.value = _newFav
  }
  
  const onDataChangeGroupChat = async(items) => {
    const unread = ref([])
    let _groupChat = [];
    await items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      _groupChat.push({
        idGroupChat: id,
        alternatif: data.alternatif,
        messagesLatest: data.messagesLatest,
        participants: data.participants,
        messagesUnreadDosen: data.messagesUnreadDosen,
        unread: null,
        isVerify: data.isVerify
      })
    })
    // console.log('unread =>',unread.value)
    delay (1000)
    const filterUnread = async() => {
      for ( var i=0; i<_groupChat.length; i++){
        let _unread = []
        // console.log('_unread =>',_unread)
        getDocChatting(_groupChat[i].idGroupChat).collection('participants').get().then((docs) => {
          let __unread = []
          docs.forEach((doc) => {
            __unread.push(doc.data())
            // console.log('doc.data() new =>',doc.data())
          })
          _unread.splice(i,1,__unread)
        })
        unread.value.splice(i,1,_unread)
        // console.log('_unread new =>',_unread)
      }
    }
    await filterUnread()
    .then(() => {
      delay(1000)
    })
    .then(() => {
      unreadMsgGroupChat.value = unread.value
      // console.log('unread new =>',unread.value)
      groupChat.value = _groupChat;  
    })
  }
  const onDataChangeGroupChat2 = async(items) => {
    let _groupChat2 = [];
    await items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      _groupChat2.push({
        id: id,
        alternatif: data.alternatif
      })
    })
    groupChat2.value = _groupChat2;  
  }
  const onDataChangeParticipants = (items) => {
    let _participants = [];
    items.forEach((item) => {
      let data = item.data()
      _participants.push(data)
    })
    participants.value = _participants
  }
  const onDataChangeApplications = (items) => {
    let _applications = [];
    items.forEach((item) => {
      let data = item.data()
      _applications.push(data)
    })
    applications.value = _applications
  }
  const getDataGroupChat = async() => {
    dataGroupChat.value = getAllChatting().orderBy("messagesLatest.createdAt", "desc").onSnapshot(onDataChangeGroupChat)
  }
  const getDataGroupChat2 = async() => {
    dataGroupChat.value = getAllChatting().orderBy("alternatif.namaDosen.namaDepan", "asc").onSnapshot(onDataChangeGroupChat2)
  }
  const resetMyUnread = async(g,id) => {
    getDocChatting(id).get().then(async(doc) => {
      if (doc.exists) {
        await getDocChatting(id).collection('participants').doc(thisUser.value.user.userId).get().then((doc) => {
          if (doc.exists) {
            getDocChatting(id).collection('participants').doc(thisUser.value.user.userId).update({'messagesUnreadUser': 0})
            // console.log('done')
          }
        })
      }
    })
    newArrUnread.value.splice(g,1,0)
  }
  const jumpTo = async(g,idGC,namaDosen,gender,selectedUser) => {
    currentOption.value.idGC = idGC
    currentOption.value.namaDosen = namaDosen
    currentOption.value.gender = gender
    currentOption.value.selectedUser = selectedUser
    isCliked.value = true
  
    await getDataGroupChat()
    .then(() => resetMyUnread(g,idGC))
    getDocChatting(currentOption.value.idGC).collection('messages').orderBy('createdAt', 'asc').onSnapshot((doc) => {
      let _dataMessages = []
      doc.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _dataMessages.push({
          id: id,
          createdAt: data.createdAt,
          date: data.date,
          profile: data.profile,
          text: data.text,
          time: data.time,
          userId: data.userId,
          userName: data.userName,
          userNim: data.userNim,
          isFirstToday: data.isFirstToday
        })
      })
      messages.value = _dataMessages
    })
    getDataParticipant(idGC)
    // if (idGC === thisNewMsg.value.idGroupChat){
    //   resetNewMsg()
    // }
  }
  const jumpTo2 = async(idGC,namaDosen,gender,selectedUser) => {
    currentOption.value.idGC = idGC
    currentOption.value.namaDosen = namaDosen
    currentOption.value.gender = gender
    currentOption.value.selectedUser = selectedUser
    isCliked.value = true
  
    await getDataGroupChat()
    getDocChatting(currentOption.value.idGC).collection('messages').orderBy('createdAt', 'asc').onSnapshot((doc) => {
      let _dataMessages = []
      doc.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _dataMessages.push({
          id: id,
          createdAt: data.createdAt,
          date: data.date,
          profile: data.profile,
          text: data.text,
          time: data.time,
          userId: data.userId,
          userName: data.userName,
          userNim: data.userNim,
          isFirstToday: data.isFirstToday
        })
      })
      messages.value = _dataMessages
    })
    getDataParticipant(idGC)
  }
  const getDataParticipant = (id) => {
    dataParticipants.value = getDocChatting(id).collection('participants').orderBy("userName", "asc").onSnapshot(onDataChangeParticipants)
  }
  const getApplications = (id) => {
    dataApplications.value = getDocChatting(id).collection('applications').orderBy('createdAt', 'desc').onSnapshot(onDataChangeApplications)
  }

  onMounted(() => {
    getDataKriteria()
    getDataAlternatif()
    getDataKriteriaTeratas()
    getDataAlternatifTeratas()
    getDataUsers()
  })

  return { 
    kriteria, kriteriaTeratas, kriteriaPart1, kriteriaPart2, hitungJmlKriteria, hitungJmlSubKriteria, getAllKriteria, addKriteria, setKriteria, updateKriteria, deleteKriteria, kriteriaEdit, 
    alternatif, alternatifTeratas, alternatifPart1, alternatifPart2, hitungJmlAlternatif, isRefAlternatif, getAllAlternatif, getDocAlternatif, deleteAlternatif, setAlternatif, updateAlternatif, alternatifEdit, isRefAlternatifEdit, 
    getAllChatting, getDocChatting, setChatting, updateChatting, deleteChatting, 
    getDocKriteria, batch, getDocSaw, updateSaw, getAllSaw, getDataSaw, addSaw, deleteSaw,
    groupChat, groupChat2, participants, messages, currentOption, unreadMsgGroupChat, newArrUnread, isCliked, newFav, filterUnreadOnly, getDataGroupChat, getDataGroupChat2, resetMyUnread, jumpTo, jumpTo2, getDataParticipant,
    setUsers, updateUsers, applications, getApplications, getDocUsers, afterDosbing, dosbing, afterChat, thisChat, users, afterApplicationsAccept, applicationsAccept, isNewMsg, thisNewMsg, resetNewMsg
  }
}
