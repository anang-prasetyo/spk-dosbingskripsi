import firebase from "../firebase/compact";

const dbUser = firebase.collection("users2");

class DataServiceUser {
  getAll() {
    return dbUser;
  }

  getDoc(id) {
    return dbUser.doc(id);
  }

  create(value) {
    return dbUser.add(value);
  }

  set(id, value) {
    return dbUser.doc(id).set(value);
  }

  update(id, value) {
    return dbUser.doc(id).update(value);
  }

  delete(id) {
    return dbUser.doc(id).delete();
  }
}

export default new DataServiceUser()