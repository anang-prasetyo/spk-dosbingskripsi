import firebase from '../firebase/compact';

const dbGroupChat = firebase.collection('chatting');

class DataServiceGroupChat {
  getAll() {
    return dbGroupChat;
  }

  create(value) {
    return dbGroupChat.add(value);
  }

  set(id, value) {
    return dbGroupChat.doc(id).set(value);
  }

  update(id, value) {
    return dbGroupChat.doc(id).update(value);
  }

  delete(id) {
    return dbGroupChat.doc(id).delete();
  }
}

export default new DataServiceGroupChat()