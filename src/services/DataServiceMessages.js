import firebase from '../firebase/compact';
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'

const dbMessages = firebase.collection('chatting')

class DataServiceMessages {
  get(id) {
    return dbMessages.doc(id).get()
  }

  getAll(id) {
    return dbMessages.doc(id);
  }

  create(id,value) {
    return dbMessages.doc(id).add(value);
  }

  set(id, value) {
    return dbMessages.doc(id).set(value);
  }

  update(id, value) {
    return dbMessages.doc(id).update(value);
  }

  delete(id) {
    return dbMessages.doc(id).delete();
  }
}

export default new DataServiceMessages()