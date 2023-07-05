import { computed, ref } from 'vue';
import {useAuth, getCamellCase} from '../firebase/firebase'
import firebase from 'firebase/compat/app'
import { useDatabase } from '../services/DataService';


export function useSaw(){
  const { thisUser, jmlhKriteria, jmlhAlternatif } = useAuth()
  const { kriteria, alternatif, getAllKriteria, getAllSaw, getDocSaw, updateSaw, kriteriaPart1, updateUsers } = useDatabase()

  const datas4 = ref(null)
  const datas5 = ref(null)
  const datas6 = ref(null)
  const newKriteria = ref([])
  const selectDocs = ref([])
  const someDocs = ref([])
  const someDocs2 = ref([])
  const newAlternatif = ref([])
  const newAlternatif2 = ref([])
  const newAlternatif3 = ref([])
  const saw = ref(null)
  const newSawData = ref([])
  const newSawName = ref([])
  const rankSaw = ref([])
  const rangkingAlternatif = ref([])
  const tahap = ref({
    tahap1: true,
    tahap2: false,
    tahap3: false
  })
  const selesaiHitung = ref(false)
  const lists = ref([])
  const newSubKriteria = ref([])
  const modalSaw = ref(false)
  const isOpenModalSaw = computed(() => modalSaw.value == true)
  const logMsg = ref(null)

  const openModalSaw = () => {
    if (modalSaw.value == false){
      modalSaw.value = true
    }
    else {
      modalSaw.value = false
    }
  }
  // emit
  const handleCustomChanges = (s,t,u,v,w) => {
    // newSubKriteria.value[t].idKriteria = v
    newSawName.value[t] = s
    newSubKriteria.value[t] = w
  }

  function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
  const cekIndexKosong = () => {
    var _newAlternatif3 = []
    var indexIsi = []
    console.log('newAlternatif2.value =>',newAlternatif2.value);
    for ( var i=0; i<newAlternatif2.value.length; i++){
    let pjgAlt2 = newAlternatif2.value[i].length  
    if (pjgAlt2  === 0){
        console.log('kosong pada index ke => ',i)
      }
      else {
        indexIsi.push(i)
        _newAlternatif3.push({
          kriteria: newAlternatif.value[i],
          namaDosen: alternatif.value[i].namaDosen.gelarDepan+' '+alternatif.value[i].namaDosen.namaDepan+' '+alternatif.value[i].namaDosen.namaBelakang+', '+alternatif.value[i].namaDosen.gelarBelakang,
          gender: alternatif.value[i].gender,
          namaDosenSaja: getCamellCase(alternatif.value[i].namaDosen.namaDepan+alternatif.value[i].namaDosen.namaBelakang)
        })
        console.log('berhasil filter pada index ke => ',i)
      }
    }

    //newSawData
    let _newSawData = []
    for (var j=0 ; j < newKriteria.value.length ; j++){
      _newSawData.push({
        bobotSubKriteria: [],
        normalisasi: [],
        perangkingan: []
      })
      for (var k=0 ; k < _newAlternatif3.length ; k++){
        _newAlternatif3[k].kriteria[j].subKriteria[0]['jenisKriteria'] = newKriteria.value[j].jenisKriteria
        // console.log('jenis kriteria')
        _newSawData[j].bobotSubKriteria.push(
          _newAlternatif3[k].kriteria[j].subKriteria[0].bobotSubKriteria
        )
        // console.log('bobot sub kriteria')
      }
      // console.log('new saw data')
    }

    console.log('_newAlternatif3 => ',_newAlternatif3)
    newSawData.value = _newSawData
    newAlternatif3.value = _newAlternatif3
    
  }

  const addNormalisasi = () => {
    for (var i=0 ; i < newKriteria.value.length ; i++){
      for (var j=0 ; j < newAlternatif3.value.length ; j++){
        newSawData.value[i].normalisasi.push(0)

        let _newSawData = []
        if (newAlternatif3.value[j].kriteria[i].subKriteria[0].jenisKriteria === 'Benefit') {
          _newSawData = (newAlternatif3.value[j].kriteria[i].subKriteria[0].bobotSubKriteria/Math.max(...newSawData.value[i].bobotSubKriteria))
        } 
        else if (newAlternatif3.value[j].kriteria[i].subKriteria[0].jenisKriteria === 'Cost') {
          _newSawData = (Math.min(...newSawData.value[i].bobotSubKriteria)/newAlternatif3.value[j].kriteria[i].subKriteria[0].bobotSubKriteria)
        }
        
        newSawData.value[i].normalisasi.splice(j,1,_newSawData)
      }
    }
    console.log('newAlternatif3 => ',newAlternatif3.value)
    console.log('addNormalisasi')
  }
  const addPerangkingan = () => {
    for (var i=0 ; i < newKriteria.value.length ; i++){
      for (var j=0 ; j < newAlternatif3.value.length ; j++){
        newSawData.value[i].perangkingan.push(0)

        let _newSawData = []
        _newSawData = ((newSawData.value[i].normalisasi[j])*(newKriteria.value[i].bobotKriteria))
        // _newSawData = ((newSawData.value[i].normalisasi[j])*(newKriteria.value[i].bobotKriteria)).toFixed(3)
        
        newSawData.value[i].perangkingan.splice(j,1,_newSawData)
      }
    }
    console.log('newAlternatif3 => ',newAlternatif3.value)
    console.log('addPerangkingan')
  }
  const addTotalPerangkingan = () => {
    for (var i=0 ; i < newAlternatif3.value.length ; i++){
      rankSaw.value.push(0)

      for (var j=0 ; j < newKriteria.value.length ; j++){
        var sum = 0
        for (var k=0 ; k < newKriteria.value.length ; k++){
          var _sum = saw.value.results[k].perangkingan[i]
          sum = Number(sum) + Number(_sum)
        }
        rankSaw.value.splice(i,1,sum)
        // rankSaw.value.splice(i,1,sum.toFixed(3))
      }
    }
    console.log('addTotalPerangkingan')
  }

  const apaSudahHitungSaw = ref(null)
  const getSubCollectionDocSaw = async() => {
    var _apaSudahHitungSaw = null
    getAllSaw().doc(thisUser.value.user.userId).collection('rangkingAlternatif').doc('doc1').get().then(async(doc) => {
      if (doc.exists) {
        _apaSudahHitungSaw = 'sudah'
        tahap.value.tahap1 = true
        tahap.value.tahap2 = false
        tahap.value.tahap3 = false
        await getDataTemp()
        .then(() => apaSudahHitungSaw.value = _apaSudahHitungSaw)
        console.log('_apaSudahHitungSaw =>',_apaSudahHitungSaw)
        console.log('sudah pernah menghitung saw')
      } else {
        _apaSudahHitungSaw = 'belum'
        apaSudahHitungSaw.value = _apaSudahHitungSaw
        console.log('belum pernah hitung saw')
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  const toEksekusiTahapan1 = async() => {
    toSelectDocs()
    console.log('toSelectDocs')
    await delay(2000) 
    filterSelectDocs()
    console.log('filterSelectDocs')
    await delay(2000) 
    getSomeDocsB()
    console.log('getSomeDocsB')
    await delay(2000) 
    getSomeDocs2()
    console.log('getSomeDocs2')
    await delay(2000) 
    addListsNewKriteria()
    console.log('addListsNewKriteria')
  }
  const eksekusiTahapan1 = async() => {
    filterSelectDocs()
    logMsg.value = 'Memfilter kriteria'
    console.log('filterSelectDocs')
    await delay(2000) 
    getSomeDocs()
    logMsg.value = 'Menyimpan kriteria yang dipilih'
    console.log('getSomeDocs')
    await delay(2000) 
    getSomeDocs2()
    logMsg.value = 'Memfilter alternatif sesuai dengan kriteria yang dipilih'
    console.log('getSomeDocs2')
    await delay(2000) 
    addListsNewKriteria()
    logMsg.value = 'Menyimpan subkriteria'
    console.log('addListsNewKriteria')
  }
  const eksekusiTahapan2 = async() => {
    getSomeDocs3()
    logMsg.value = 'Memfilter alternatif sesuai dengan subkriteria yang dipilih'
    console.log('getSomeDocs3')
    await delay(2000) 
    cekIndexKosong()
    logMsg.value = 'Data alternatif siap dihitung'
    console.log('cekIndexKosong')
    await delay(3000)
    addNormalisasi()
    logMsg.value = 'Menghitung normalisasi'
    await delay(2000)
    addPerangkingan()
    logMsg.value = 'Menghitung perangkingan'
    await delay(2000)
    updateResults()
    logMsg.value = 'Mengupload hasil perhitungan'
    await delay(2000)
    getData3()
    logMsg.value = 'Menampilkan perhitungan sementara'
    await delay(2000)
    addTotalPerangkingan()
    logMsg.value = 'Menghitung total masing-masing nilai alternatif'
    await delay(2000)
    addTotal()
    logMsg.value = 'Mengupload total perhitungan alternatif'
    await delay(2000)
    addNewSubCollection()
    logMsg.value = 'Mengupload rangking alternatif'
    await delay(2000)
    getData4()
    logMsg.value = 'Menampilkan rangking alternatif'
    await delay(2000)
    addTempDataSaw()
    logMsg.value = 'Mengupload data alternatif dan kriteria pada perhitungan ini'
    updateUsers(thisUser.value.user.userId, {
      'progres.notifLog': 'Perhitungan SAW telah disimpan ke dokumen SAW',
      'sawSavedAt': new Date()
    })
    updateSaw(thisUser.value.user.userId, {'savedAt': new Date()})
  }

  const toSelectDocs = () => {
    let jmlhKriteriaPart1 = kriteriaPart1.value.length
    for (var i=0; i<jmlhKriteriaPart1; i++){
      selectDocs.value.push({
        namaKriteria: kriteriaPart1.value[i].namaKriteria,
        idKriteria: kriteriaPart1.value[i].idKriteria
      })
    }
  }
  const filterSelectDocs = async() => {
    for ( var i=0; i<selectDocs.value.length; i++ ){
      someDocs.value[i] = selectDocs.value[i].namaKriteria
      someDocs2.value[i] = selectDocs.value[i].idKriteria
    }
    tahap.value.beforePerangkingan = false
    tahap.value.Perangkingan = true
    console.log('filterSelectDocs')
  }
  const getSomeDocs = () => {
    datas5.value = getAllKriteria().where('namaKriteria', 'in', someDocs.value).orderBy('namaKriteria', 'asc').onSnapshot(onDataChange5)
  }
  const getSomeDocsB = () => {
    datas5.value = getAllKriteria().where('namaKriteria', 'in', someDocs.value).orderBy('bobotKriteria', 'desc').onSnapshot(onDataChange5)
  }
  const getSomeDocs2 = () => {
    let _newAlternatif = []
    for (var i=0 ; i < alternatif.value.length ; i++){
      _newAlternatif.push(alternatif.value[i].kriteria.filter(
        v => v.idKriteria === someDocs2.value[0] || v.idKriteria === someDocs2.value[1] || v.idKriteria === someDocs2.value[2] || v.idKriteria === someDocs2.value[3] || v.idKriteria === someDocs2.value[4] || v.idKriteria === someDocs2.value[5] || v.idKriteria === someDocs2.value[6] || v.idKriteria === someDocs2.value[7]
      ))
      // console.log('filter alternatif')

      if ( newKriteria.value.length === 1 ){
        _newAlternatif[i][0]['subKriteria'] = (newKriteria.value[0].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria
        ))
      }
      else if ( newKriteria.value.length === 2 ){
        _newAlternatif[i][0]['subKriteria'] = (newKriteria.value[0].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria
        ))
        _newAlternatif[i][1]['subKriteria'] = (newKriteria.value[1].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria
        ))
      }
      else if ( newKriteria.value.length === 3 ){
        _newAlternatif[i][0]['subKriteria'] = (newKriteria.value[0].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria
        ))
        _newAlternatif[i][1]['subKriteria'] = (newKriteria.value[1].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria
        ))
        _newAlternatif[i][2]['subKriteria'] = (newKriteria.value[2].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria
        ))
      }
      else if ( newKriteria.value.length === 4 ){
        _newAlternatif[i][0]['subKriteria'] = (newKriteria.value[0].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria
        ))
        _newAlternatif[i][1]['subKriteria'] = (newKriteria.value[1].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria
        ))
        _newAlternatif[i][2]['subKriteria'] = (newKriteria.value[2].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria
        ))
        _newAlternatif[i][3]['subKriteria'] = (newKriteria.value[3].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria
        ))
      }
      else if ( newKriteria.value.length === 5 ){
        _newAlternatif[i][0]['subKriteria'] = (newKriteria.value[0].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria
        ))
        _newAlternatif[i][1]['subKriteria'] = (newKriteria.value[1].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria
        ))
        _newAlternatif[i][2]['subKriteria'] = (newKriteria.value[2].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria
        ))
        _newAlternatif[i][3]['subKriteria'] = (newKriteria.value[3].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria
        ))
        _newAlternatif[i][4]['subKriteria'] = (newKriteria.value[4].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria
        ))
      }
      else if ( newKriteria.value.length === 6 ){
        _newAlternatif[i][0]['subKriteria'] = (newKriteria.value[0].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria
        ))
        _newAlternatif[i][1]['subKriteria'] = (newKriteria.value[1].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria
        ))
        _newAlternatif[i][2]['subKriteria'] = (newKriteria.value[2].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria
        ))
        _newAlternatif[i][3]['subKriteria'] = (newKriteria.value[3].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria
        ))
        _newAlternatif[i][4]['subKriteria'] = (newKriteria.value[4].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria
        ))
        _newAlternatif[i][5]['subKriteria'] = (newKriteria.value[5].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria
        ))
      }
      else if ( newKriteria.value.length === 7 ){
        _newAlternatif[i][0]['subKriteria'] = (newKriteria.value[0].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria
        ))
        _newAlternatif[i][1]['subKriteria'] = (newKriteria.value[1].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria
        ))
        _newAlternatif[i][2]['subKriteria'] = (newKriteria.value[2].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria
        ))
        _newAlternatif[i][3]['subKriteria'] = (newKriteria.value[3].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria
        ))
        _newAlternatif[i][4]['subKriteria'] = (newKriteria.value[4].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria
        ))
        _newAlternatif[i][5]['subKriteria'] = (newKriteria.value[5].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria
        ))
        _newAlternatif[i][6]['subKriteria'] = (newKriteria.value[6].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria
        ))
      }
      else if ( newKriteria.value.length === 8 ){
        _newAlternatif[i][0]['subKriteria'] = (newKriteria.value[0].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][7].idSubKriteria
        ))
        _newAlternatif[i][1]['subKriteria'] = (newKriteria.value[1].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][7].idSubKriteria
        ))
        _newAlternatif[i][2]['subKriteria'] = (newKriteria.value[2].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][7].idSubKriteria
        ))
        _newAlternatif[i][3]['subKriteria'] = (newKriteria.value[3].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][7].idSubKriteria
        ))
        _newAlternatif[i][4]['subKriteria'] = (newKriteria.value[4].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][7].idSubKriteria
        ))
        _newAlternatif[i][5]['subKriteria'] = (newKriteria.value[5].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][7].idSubKriteria
        ))
        _newAlternatif[i][6]['subKriteria'] = (newKriteria.value[6].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][7].idSubKriteria
        ))
        _newAlternatif[i][7]['subKriteria'] = (newKriteria.value[7].subKriteria.filter(
          v => v.idSubKriteria === _newAlternatif[i][0].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][1].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][2].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][3].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][4].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][5].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][6].idSubKriteria ||  v.idSubKriteria === _newAlternatif[i][7].idSubKriteria
        ))
      }
    }
    
    newAlternatif.value = _newAlternatif
    jmlhAlternatif.value = newAlternatif.value.length
  }
  const addListsNewKriteria = () => {
    for (var i = 0; i < newKriteria.value.length; i++){
      lists.value[i] = (newKriteria.value[i].subKriteria)
    }
  }
  const getSomeDocs3 = async() => {
    let _newAlternatif2 = []
    for (var i=0 ; i < newAlternatif.value.length ; i++){
      _newAlternatif2.push(newAlternatif.value[i].filter(
        v => v.idSubKriteria === newSubKriteria.value[0] || v.idSubKriteria === newSubKriteria.value[1] || v.idSubKriteria === newSubKriteria.value[2] || v.idSubKriteria === newSubKriteria.value[3] || v.idSubKriteria === newSubKriteria.value[4] || v.idSubKriteria === newSubKriteria.value[5] || v.idSubKriteria === newSubKriteria.value[6] || v.idSubKriteria === newSubKriteria.value[7]
      ))
      // console.log('filter alternatif')
    }
    newAlternatif2.value = _newAlternatif2
    // console.log('somedoc3')
  }

  // crud
  const onDataChange4 = (items) => {
        let _rangkingAlternatif = [];
        items.forEach((item) => {
          _rangkingAlternatif.push(item.data());
        });
        rangkingAlternatif.value = _rangkingAlternatif;
      },
      onDataChange5 = (items) => {
        let _newKriteria = [];
        items.forEach((item) => {
          _newKriteria.push(item.data());
        });
        newKriteria.value = _newKriteria;
        jmlhKriteria.value = newKriteria.value.length
      },
      onDataChange6 = (items) => {
        let _newAlternatif3 = [];
        items.forEach((item) => {
          _newAlternatif3.push(item.data());
        });
        newAlternatif3.value = _newAlternatif3
      },
      getData3 = async() => {
        getDocSaw(thisUser.value.user.userId)
        .onSnapshot((doc) => {
          saw.value = doc.data()
        })
        console.log('getData3 - saw')
      },
      getData4 = async() => {
        datas4.value = getDocSaw(thisUser.value.user.userId).collection('rangkingAlternatif').orderBy('total', 'desc').onSnapshot(onDataChange4)
        console.log('getData4 - sub collection saw')
      },
      getData5 = async() => {
        datas5.value = getDocSaw(thisUser.value.user.userId).collection('newKriteria').orderBy('namaKriteria', 'asc').onSnapshot(onDataChange5)
        console.log('getData6 - retrive data newKriteria')  
      },
      getData6 = async() => {
        datas6.value = getDocSaw(thisUser.value.user.userId).collection('newAlternatif').orderBy('namaDosen', 'asc').onSnapshot(onDataChange6)
        console.log('getData6 - retrive data newAlternatif3')
      },
      getDataTemp = async() => {
        await getData5()
        .then(async() => {
          await delay(2000)
          getData6()
          logMsg.value = 'Mencari data alternatif'
        })
        .then(async() => {
          await delay(2000)
          getData5()
          logMsg.value = 'Mencari data kriteria'
        })
        .then(async() => {
          await delay(2000)
          getData3()
          logMsg.value = 'Mencari data perhitungan saw'
        })
        .then(async() => {
          await delay(2000)
          getData4()
          logMsg.value = 'Mencari data rangking alternatif'
        })
      },
      updateResults = () => {
        for (var i=0 ; i < newKriteria.value.length ; i++){
          getDocSaw(thisUser.value.user.userId).update({
            results: firebase.firestore.FieldValue.arrayUnion(newSawData.value[i])
          })
        }
        console.log('updateResults')
      },
      addTotal = () => {
        updateSaw(thisUser.value.user.userId,{total: rankSaw.value})
        console.log('addTotal')
      },
      addNewSubCollection = () => {
        let pjgAlt3 = newAlternatif3.value.length
        let pjgKrt = newKriteria.value.length
        console.log('newAlternatif3.value =>',newAlternatif3.value);
        for (var j=0 ; j < pjgAlt3 ; j++){
          var refSubCollectionrangkingAlternatif = getDocSaw(thisUser.value.user.userId).collection('rangkingAlternatif')
          var refSubCollectionrangkingAlternatifDoc = refSubCollectionrangkingAlternatif.doc('doc'+Number(j+1))
          refSubCollectionrangkingAlternatifDoc.set({
          // batch.set(refSubCollectionrangkingAlternatif.doc('doc'+Number(j+1)), {
            namaDosen: newAlternatif3.value[j].namaDosen,
            namaDosenSaja: newAlternatif3.value[j].namaDosenSaja,
            gender: newAlternatif3.value[j].gender,
            total: Number(rankSaw.value[j])})
          for (var k=0 ; k < pjgKrt ; k++){
            refSubCollectionrangkingAlternatifDoc.update({['c'+Number(k+1)]: Number(newSawData.value[k].perangkingan[j])})
            // batch.update(refSubCollectionrangkingAlternatif.doc('doc'+Number(j+1)), {['c'+Number(k+1)]: Number(newSawData.value[k].perangkingan[j])})
          }
        }
        updateSaw(thisUser.value.user.userId, {
          'sudahCariSaw': true,
          'kriteriaDipilih': selectDocs.value,
          'subKriteriaDipilih': newSawName.value
        })
        updateUsers(thisUser.value.user.userId, {
          'progres.isHitungSaw': true,
          'progres.notifHitungSaw': true
        })
        console.log('addNewSubCollection')
      },
      addTempDataSaw = () => {
        let pjgAlt3 = newAlternatif3.value.length
        let pjgKrt = newKriteria.value.length
        for ( var i=0; i<pjgAlt3 ; i++){
          var refDocNewAlernatif = getDocSaw(thisUser.value.user.userId).collection('newAlternatif').doc('docNewAlternatif'+Number(i+1))
          refDocNewAlernatif.set({
          // batch.set(getDocSaw(thisUser.value.user.userId).collection('newAlternatif').doc('docNewAlternatif'+Number(i+1)), {
            kriteria: newAlternatif3.value[i].kriteria,
            gender: newAlternatif3.value[i].gender,
            namaDosen: newAlternatif3.value[i].namaDosen,
            namaDosenSaja: newAlternatif3.value[i].namaDosenSaja
          })
        }
        for ( var j=0; j<pjgKrt ; j++){
          var refDocNewKriteria = getDocSaw(thisUser.value.user.userId).collection('newKriteria').doc('docnewKriteria'+Number(j+1))
          refDocNewKriteria.set(newKriteria.value[j])
          // batch.set(getDocSaw(thisUser.value.user.userId).collection('newKriteria').doc('docnewKriteria'+Number(j+1)), newKriteria.value[j])
        }
        // batch.commit().then(() => {
        //   console.log('berhasil batch dokumen')
        // })
      },
      deleteTempDataSaw = async() => {
        var _dataSubCollection = null
        var refSubCollection = getDocSaw(thisUser.value.user.userId)
        await refSubCollection.get().then(async(doc) => {
          if (doc.exists) {
            _dataSubCollection = doc.data()
            updateSaw(thisUser.value.user.userId, {
              'results': [], 
              'total': [], 
              'kriteriaDipilih': [], 
              'subKriteriaDipilih': [], 
              'sudahCariSaw': false
            })
            updateUsers(thisUser.value.user.userId, {
              'progres.isHitungSaw': false,
              // 'isSkripsi': false
            })
            console.log('berhasil reset')
          }
        }).then(() => {
          for ( var i=0; i<_dataSubCollection.total.length ; i++){
            refSubCollection.collection('rangkingAlternatif').doc('doc'+Number(i+1)).delete()
            refSubCollection.collection('newAlternatif').doc('docNewAlternatif'+Number(i+1)).delete()
            console.log('berhasil delete sub collection newAlternatif')
          }
        }).then(() => {
          for ( var j=0; j<_dataSubCollection.results.length ; j++){
            refSubCollection.collection('newKriteria').doc('docnewKriteria'+Number(j+1)).delete()
            console.log('berhasil delete sub collection newKriteria')
          }
        }).then(() => {
          apaSudahHitungSaw.value = 'belum'
          newKriteria.value = []
          selectDocs.value = []
          someDocs.value = []
          someDocs2.value = []
          newAlternatif.value = []
          saw.value = null
          newSawData.value = []
          rankSaw.value = []
          rangkingAlternatif.value = []
        })
        .then(() => {
          updateUsers(thisUser.value.user.userId, {'progres.notifLog': 'Dokumen SAW direset'})
        })
      }
  return { apaSudahHitungSaw, newKriteria, newAlternatif3, saw, rangkingAlternatif, tahap, kriteria, selectDocs, newSawName, lists, newSubKriteria, selesaiHitung, newSawData, getSubCollectionDocSaw, deleteTempDataSaw, eksekusiTahapan2, handleCustomChanges, eksekusiTahapan1, toEksekusiTahapan1, modalSaw, openModalSaw, isOpenModalSaw, getData6, logMsg }
}