import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// import Filter from 'bad-words'
import { ref, onUnmounted, computed } from 'vue'

// const firebaseConfig = {
firebase.initializeApp ({
  apiKey: 'AIzaSyBPh0DVqo7Gf6r_CK3z0tQLdGEipGkb3Sw',
  authDomain: 'spk-dosbingskripsi.firebaseapp.com',
  databaseURL: 'https://spk-dosbingskripsi-default-rtdb.firebaseio.com',
  projectId: 'spk-dosbingskripsi',
  storageBucket: 'spk-dosbingskripsi.appspot.com',
  messagingSenderId: '826817552519',
  appId: '1:826817552519:web:5d49731d3592c7d65e5822',
  measurementId: 'G-7SQ02HW0CM'
})
// const db = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
export function useAuth() {
  const user = ref(null)
  const thisUser = ref(null)
  const signUpForm = ref({
    // userName: '',
    userEmail: '',
    userPassword: '',
    retypePassword: ''
  })
  const signInForm = ref({
    userEmail: '',
    userPassword: ''
  })
  const completeForm = ref({
    user: {
      userName: '',
      userNIM: '',
      userProdi: 'Informatika'
    },
    profile: {
      avatar: '',
      url: '',
      background: 'primary-gradient-1',
      color: 'primary-text'
    }
  })
  const editProfile = ref(null)
  const showToast = ref(null)
  const msgToast = ref(null)
  const isToast = computed(() => showToast.value !== null)
  const userSkripsi = ref({
    judul: '',
    deskripsi: ''
  })
  const jmlhKriteria = ref(null)
  const jmlhAlternatif = ref(null)
  // var batch = firestore.batch()

  const unsubscribe = auth.onAuthStateChanged(_user => {
    (user.value = _user)
    if (user.value !== null){
      firestore.collection('saw2').doc(user.value.uid).get().then((doc) => {
        if (doc.exists) {
          firestore.collection('users2').doc(user.value.uid).get().then((doc) => {
            if (doc.exists) {
              // console.log('Dokumen ditemukan');
              firestore.collection('users2').doc(user.value.uid)
              .onSnapshot((doc) => {
                thisUser.value = doc.data()
              })
            }
          })
          // console.log('Dokumen saw ditemukan');
        }
        else {
          // console.log('Dokumen saw tidak ditemukan');
          firestore.collection('users2').doc(user.value.uid).get().then((doc) => {
            if (doc.exists) {
              // console.log('Dokumen user ditemukan');
              firestore.collection('users2').doc(user.value.uid)
              .onSnapshot((doc) => {
                thisUser.value = doc.data()
              })
            } 
            else {
              // console.log('Dokumen tidak ada');
              auth.signOut()
              successLogin.value = null
              user.value = null
            }
          }).catch((error) => {
            console.log("Error getting document:", error);
          })
        }
      })
    }
  })
  onUnmounted(unsubscribe)

  const finishLogin = (a,b,c,d,e) => {
    var finishRegister = {
      'user.userNameNew': a,
      'user.userNim': b,
      'user.userProdi': 'INFORMATIKA',
      profile: {
        avatar: c,
        background: d,
        color: e
      },
      'login.afterLogin' : true
    }
    firestore.collection('users2').doc(thisUser.value.user.userId).update(finishRegister)
  }
  
  const isLogin = computed(() => {
    var _beforeLogin = null
    if (user.value !== null){
      if (thisUser.value !== null){
        if (thisUser.value.login.isLogin == true){
          _beforeLogin = true
          beforeLogin.value = _beforeLogin
          // console.log(_beforeLogin)
        }
        else {
          beforeLogin.value = null
        }
      } else {
        beforeLogin.value = null
      }
    } 
    else {
      beforeLogin.value = null
    }
    return beforeLogin.value
  })
  const beforeLogin = ref(null)
  const successLogin = ref(null)
  const afterLogin = computed(() => {
    var _successLogin = ref(null)
    if (user.value !== null){
      if (thisUser.value !== null){
        if (thisUser.value.login.afterLogin == true){
          _successLogin.value = true
          successLogin.value = _successLogin.value
          console.log(_successLogin.value)
        }
        else {
          successLogin.value = null
        }
      } else {
        successLogin.value = null
      }
    } 
    else {
      successLogin.value = null
    }
    return successLogin.value
  })

  const signUpPassword = async (email, password) => {
    var newEmail = email.toLowerCase()
    firestore.collection('alternatif').doc(newEmail).get().then((doc) => {
      if (doc.exists) {
        console.log('email cocok dengan email dosen');
        var dataDosen = doc.data()
        var profileDosen = dataDosen.profile
        var nidnDosen = dataDosen.nidn
        var namaDosen = dataDosen.namaDosen
        // console.log('dataDosen =>',dataDosen);
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var userNewDosen = userCredential.user
          // console.log('userNewDosen =>',userNewDosen);
          // ...
          var newUserDosen = {
            user: {
              userId : userNewDosen.uid,
              userEmail: userNewDosen.email,
              userPassword: signUpForm.value.userPassword,
              userLevel: 'Dosen',
              userProdi: 'Informatika',
              userNIM: String(nidnDosen),
              userName: namaDosen.namaDepan+' '+namaDosen.namaBelakang
            },
            login : {
              isLogin: true,
              afterLogin: true
            },
            profile: {
              url: profileDosen.url,
              avatar: profileDosen.avatar,
              background: profileDosen.background,
              color: profileDosen.color
            },
            progres: {
              isRegistrasi: true,
              isHitungSaw: false,
              isJudulDeskripsi: false,
              isDosbing: false,
              notifHitungSaw: false,
              notifLog: 'Tidak ada pemberitahuan'
            },
            isFav: [],
            createdAt: new Date()
          }
          var newSawDosen = {
            user: {
              userId : userNewDosen.uid,
              userEmail: userNewDosen.email
            },
            sudahCariSaw: false,
            results: [],
            kriteriaDipilih: [],
            subKriteriaDipilih: [],
            total: [],
            createdAt: new Date()
          }
          // console.log('newUserDosen =>',newUserDosen);
          firestore.collection('users2').doc(userNewDosen.uid).set(newUserDosen)
          .then(() => {
            user.value = userNewDosen
            thisUser.value = newUserDosen
          })
          .then(() => {
            firestore.collection('saw2').doc(userNewDosen.uid).set(newSawDosen)
          })
          .then(() => {
            signUpForm.value.userEmail = ''
            signUpForm.value.userPassword = ''
            signUpForm.value.retypePassword = ''
          })
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          msgToast.value = 'Email sudah terdaftar, gunakan email lain atau pilih Log In'
          showToast.value = true
          setTimeout(() => showToast.value = null, 5000)
        })
      }
      else {
        console.log('email tidak cocok dengan email dosen');
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var userNew = userCredential.user
          // console.log('user =>',user);
          // ...
          var newUser = {
            user: {
              userId : userNew.uid,
              userEmail: userNew.email,
              userPassword: signUpForm.value.userPassword,
              userLevel: 'Mahasiswa'
            },
            login : {
              isLogin: true,
              afterLogin: false
            },
            isSkripsi: false,
            skripsi: {
              judul: '',
              deskripsi: '',
              pembimbing: ''
            },
            progres: {
              isRegistrasi: true,
              isHitungSaw: false,
              isJudulDeskripsi: false,
              isDosbing: false,
              notifHitungSaw: false,
              notifLog: 'Tidak ada pemberitahuan'
            },
            isFav: []
          }
          var newSaw = {
            user: {
              userId : userNew.uid,
              userEmail: userNew.email
            },
            sudahCariSaw: false,
            results: [],
            kriteriaDipilih: [],
            subKriteriaDipilih: [],
            total: [],
            createdAt: new Date()
          }
          firestore.collection('users2').doc(userNew.uid).set(newUser)
          .then(() => {
            user.value = userNew
            thisUser.value = newUser
          })
          .then(() => {
            firestore.collection('saw2').doc(userNew.uid).set(newSaw)
          })
          .then(() => {
            signUpForm.value.userEmail = ''
            signUpForm.value.userPassword = ''
            signUpForm.value.retypePassword = ''
          })
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          msgToast.value = 'Email sudah terdaftar, gunakan email lain atau pilih Log In'
          showToast.value = true
          setTimeout(() => showToast.value = null, 5000)
        })
      }
    })

  }

  const signUpGoogle = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(googleProvider)
    .then(() => {
      console.log('user.value =>',user.value);
      var newUser = {
        user: {
          userId : user.value.email,
          userName: user.value.displayName,
          userEmail: user.value.email,
          userLevel: 'Mahasiswa'
        },
        login : {
          isLogin: true
        }
      }
      var newSaw = {
        user: {
          userId : user.value.email,
          userName: user.value.displayName,
          userEmail: user.value.email
        },
        results: [],
        sudahCariSaw: false,
      }
      var updateSaw = {
        'user.userId' : user.value.uid,
        'user.userName': user.value.displayName,
        'user.userEmail': user.value.email
      }
      firestore.collection('users2').doc(user.value.email).get().then((doc) => {
        if (doc.exists) {
          // console.log('Alamat email sudah terdaftar')
          // msgToast.value = 'Email sudah terdaftar, gunakan email lain atau pilih Masuk dengan Google'
          // showToast.value = true
          // setTimeout(() => showToast.value = null, 5000)
          // console.log(user.value)
          // console.log('Berhasil Sign Up')
          firestore.collection('users2').doc(user.value.email)
          .onSnapshot((doc) => {
            thisUser.value = doc.data()
          })
          firestore.collection('saw2').doc(user.value.email).get().then((doc) => {
            if (doc.exists) {
              console.log('user sudah memiliki dokumen saw')
              firestore.collection('saw2').doc(user.value.email).update(updateSaw)
            } else {
              firestore.collection('saw2').doc(user.value.email).set(newSaw)
            }
          }).catch((error) => {
            console.log("Error getting document:", error);
          });
        } 
        else {
          console.log('Alamat email belum terdaftar')
          firestore.collection('users2').doc(user.value.email).set(newUser)
          console.log('berhasil menambah Alamat email')
          firestore.collection('users2').doc(user.value.email)
          .onSnapshot((doc) => {
            thisUser.value = doc.data()
          })
          console.log('thisUser.value =>', thisUser.value)
          // .then(() => {
          // })
          // .then(() => {
          //   firestore.collection('saw2').doc(user.value.email).get().then((doc) => {
          //     if (doc.exists) {
          //       // console.log('user sudah memiliki dokumen saw')
          //       firestore.collection('saw2').doc(user.value.email).update(updateSaw)
          //     } else {
          //       firestore.collection('saw2').doc(user.value.email).set(newSaw)
          //     }
          //   }).catch((error) => {
          //     console.log("Error getting document:", error);
          //   })
          // })
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    })
    
  }

  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(googleProvider)
    var newUser = {
      user: {
        userId : user.value.uid,
        userName: user.value.displayName,
        userEmail: user.value.email
      },
      login : {
        isLogin: true
      }
    }
    var newSaw = {
      user: {
        userId : user.value.uid,
        userName: user.value.displayName,
        userEmail: user.value.email
      },
      results: []
    }
    var updateSaw = {
      'user.userId' : user.value.uid,
      'user.userName': user.value.displayName,
      'user.userEmail': user.value.email
    }
    
    firestore.collection('users').doc(user.value.uid).get().then((doc) => {
      if (doc.exists) {
        successLogin.value = true
      } else {
        firestore.collection('users').doc(user.value.uid).set(newUser)
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
    
    firestore.collection('saw').doc(user.value.uid).get().then((doc) => {
      if (doc.exists) {
        console.log('user sudah memiliki dokumen saw')
        firestore.collection('saw').doc(user.value.uid).update(updateSaw)
      } else {
        firestore.collection('saw').doc(user.value.uid).set(newSaw)
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  const signInGoogle = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(googleProvider)    
    var newSaw = {
      user: {
        userId : user.value.email,
        userName: user.value.displayName,
        userEmail: user.value.email
      },
      sudahCariSaw: false,
      results: []
    }
    var updateSaw = {
      'user.userId' : user.value.email,
      'user.userName': user.value.displayName,
      'user.userEmail': user.value.email
    }
    await firestore.collection('users2').doc(user.value.email).get().then((doc) => {
      if (doc.exists) {
        // console.log('Berhasil login');
        firestore.collection('saw2').doc(user.value.email).get().then((doc) => {
          if (doc.exists) {
            // console.log('user sudah memiliki dokumen saw')
            firestore.collection('saw2').doc(user.value.email).update(updateSaw)
          } else {
            firestore.collection('saw2').doc(user.value.email).set(newSaw)
          }
        }).catch((error) => {
          console.log("Error getting document:", error);
        });
      } else {
        // console.log('Email belum terdaftar');
        msgToast.value = 'Email belum terdaftar, gunakan email lain atau pilih Daftar dengan Google'
        showToast.value = true
        setTimeout(() => showToast.value = null, 5000)
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  const signInPassword = async (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var userLama = userCredential.user;
      // ...
      var newSaw = {
        user: {
          userId : userLama.uid,
          userEmail: userLama.email
        },
        sudahCariSaw: false,
        results: []
      }
      firestore.collection('users2').doc(userLama.uid).get().then((doc) => {
        user.value = userLama
        thisUser.value = doc.data()
      })
      .then(() => {
        firestore.collection('saw2').doc(userLama.uid).get().then((doc) => {
          if (doc.exists){
            console.log('user masih memiliki dokumen saw');
          }
          else {
            firestore.collection('saw2').doc(userLama.uid).set(newSaw)
          }
        })
      })
      .then(() => {
        signInForm.value.userEmail = ''
        signInForm.value.userPassword = ''
      })
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      if (errorCode === 'auth/user-not-found'){
        msgToast.value = 'Email belum terdaftar, gunakan email lain atau pilih Sign Up'
        showToast.value = true
        setTimeout(() => showToast.value = null, 5000)
      }
      else if (errorCode === 'auth/wrong-password'){
        msgToast.value = 'Password salah'
        showToast.value = true
        setTimeout(() => showToast.value = null, 5000)
      }
    });
  }

  const signInPasswordToAdmin = async (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var userLama = userCredential.user;
      // ...
      firestore.collection('users2').doc(userLama.uid).get().then((doc) => {
        user.value = userLama
        thisUser.value = doc.data()
      })
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  const signOut = async() => {
    if (thisUser.value !== null){
      // await firestore.collection('saw2').doc(thisUser.value.user.userId).get().then((doc) => {
      //   var dataSubCollectionSaw = doc.data()
      //   var refSubCollectionSaw = firestore.collection('saw2').doc(thisUser.value.user.userId).collection('rangkingAlternatif')
      //   var refSubCollectionNewAlternatif = firestore.collection('saw2').doc(thisUser.value.user.userId).collection('newAlternatif')
      //   var refSubCollectionNewKriteria = firestore.collection('saw2').doc(thisUser.value.user.userId).collection('newKriteria')
      //   if ( dataSubCollectionSaw.sudahCariSaw === true ){
      //     for ( var i=0; i<dataSubCollectionSaw.total.length; i++){
      //       batch.delete(refSubCollectionSaw.doc('doc'+Number(i+1)))
      //       batch.delete(refSubCollectionNewAlternatif.doc('docNewAlternatif'+Number(i+1)))
      //     }
      //     for ( var j=0; j<dataSubCollectionSaw.results.length; j++){
      //       batch.delete(refSubCollectionNewKriteria.doc('docNewKriteria'+Number(j+1)))
      //     }
      //     console.log('berhasil batch delete')
      //     batch.commit()
      //     .then(
      //       firestore.collection('saw2').doc(thisUser.value.user.userId).delete(),
      //       console.log('berhasil menghapus sub collection dokumen saw')
      //     )
      //     .then(() => auth.signOut())
      //     .then(() => {
      //       user.value = null
      //       thisUser.value = null
      //       successLogin.value = null
      //     })
      //   }
      //   else if ( dataSubCollectionSaw.sudahCariSaw === false ) {
      //     firestore.collection('saw2').doc(thisUser.value.user.userId).delete()
      //     .then(() => auth.signOut())
      //     .then(() => {
      //       user.value = null
      //       thisUser.value = null
      //       successLogin.value = null
      //     })
      //   }
      // })
      auth.signOut()
      user.value = null
      thisUser.value = null
      successLogin.value = null
    } else {
      console.log('gagal hapus dokumen')
    }
    console.log('log out')
  }

  const sendCompleteForm = async () => {
    var updateUser = {
      'user.userId' : thisUser.value.user.userId,
      'user.userEmail': thisUser.value.user.userEmail,
      'user.userName': completeForm.value.user.userName,
      'user.userNIM' : completeForm.value.user.userNIM,
      'user.userProdi': completeForm.value.user.userProdi,
      'profile.avatar': completeForm.value.profile.avatar,
      'profile.url': completeForm.value.profile.url,
      'profile.background': completeForm.value.profile.background,
      'profile.color': completeForm.value.profile.color,
      'login.afterLogin' : true,
      'createdAt': new Date(),
    }
    await firestore.collection('users2').doc(thisUser.value.user.userId).get().then((doc) => {
      if (doc.exists) {
        // console.log('Berhasil login');
        firestore.collection('users2').doc(thisUser.value.user.userId).update(updateUser)
        firestore.collection('saw2').doc(thisUser.value.user.userId).update({'createdAt': new Date()})
        thisUser.value = updateUser
        console.log('data sudah lengkap')
      } else {
        console.log('gagal');
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  const getUserData = async() => {
    firestore.collection('users2').doc(thisUser.value.user.userId).get().then((doc) => {
      if (doc.exists) {
        console.log('Dokumen user siap diedit');
        editProfile.value = doc.data()
      } else {
        console.log('gagal');
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  const updateUserData = async () => {
    var updateUser = {
      'user.userName': editProfile.value.user.userName,
      'user.userNIM': editProfile.value.user.userNIM,
      'user.userProdi': editProfile.value.user.userProdi,
      'profile.avatar': editProfile.value.profile.avatar,
      'profile.url': editProfile.value.profile.url,
      'profile.background': editProfile.value.profile.background,
      'profile.color': editProfile.value.profile.color
    }
    await firestore.collection('users2').doc(thisUser.value.user.userId).get().then((doc) => {
      if (doc.exists) {
        console.log('berhasil update data user')
        firestore.collection('users2').doc(thisUser.value.user.userId).update(updateUser)
        editProfile.value = null
        // showToast.value = true
        // setTimeout(() => showToast.value = null, 5000)
      } else {
        console.log('gagal');
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    })
  }

  const batalUpdateUserData = () => {editProfile.value = null}

  const addUserSkripsi = async (a,b) => {
    var updateUserSkripsi = {
      'isSkripsi': true,
      'skripsi.judul' : a,
      // 'skripsi.judul' : userSkripsi.value.judul,
      'skripsi.deskripsi': b,
      // 'skripsi.deskripsi': userSkripsi.value.deskripsi,
      'progres.isJudulDeskripsi': true,
      'progres.notifLog': 'Judul dan Deskripsi skripsi telah diisi'
    }
    await firestore.collection('users2').doc(thisUser.value.user.userId).get().then((doc) => {
      if (doc.exists) {
        console.log('skripsi ditambahkan ke Dokumen');
        firestore.collection('users2').doc(thisUser.value.user.userId).update(updateUserSkripsi)
      } else {
        console.log('Dokumen tidak ditemukan');
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    })
  }

  return { user, isLogin, signIn, signOut, finishLogin, thisUser, afterLogin, signUpGoogle, signUpPassword, signInGoogle, signInPassword, signUpForm, signInForm, isToast, msgToast, completeForm, sendCompleteForm, editProfile, getUserData, updateUserData, batalUpdateUserData, userSkripsi, addUserSkripsi, jmlhKriteria, jmlhAlternatif, signInPasswordToAdmin }
}

const firestore = firebase.firestore()
// const messagesRef = firestore.collection('chatting').doc('umum')

export function getFirstLetters(str) {
  const firstLetters = str
    .split(' ')
    .map(word => word[0])
    .slice(0,2)
    .join('');

  return firstLetters;
}
export function getCamellCase(str) {
  const camellCase = str
    .split(' ')
    .join('');
    
    return camellCase;
}
export function getTotalKuota(str) {
  const totalKuota = str
    .split(' ')
    .splice(0,1)
    .join('')
    .split('-')
    .slice(1)
    .join('')
  return totalKuota;
}