import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBPh0DVqo7Gf6r_CK3z0tQLdGEipGkb3Sw',
  authDomain: 'spk-dosbingskripsi.firebaseapp.com',
  databaseURL: 'https://spk-dosbingskripsi-default-rtdb.firebaseio.com',
  projectId: 'spk-dosbingskripsi',
  storageBucket: 'spk-dosbingskripsi.appspot.com',
  messagingSenderId: '826817552519',
  appId: '1:826817552519:web:5d49731d3592c7d65e5822',
  measurementId: 'G-7SQ02HW0CM'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
  db
}