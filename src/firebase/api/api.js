import firebase from "../firebase";

class FirebaseApi {
  constructor() {
    this.db = firebase.database();
    this.user = firebase.auth().currentUser;
    this.booksRef = this.db.ref("books/manga");
  }

  setRef(id) {
    this.booksRef = this.db.ref(`books/manga/${id}`);
  }

  getData(id) {
    return this.booksRef.child(id);
  }

  setData(data) {
    return this.booksRef.push(data);
  }

  removeData(id) {
    return this.booksRef.child(id).remove();
  }

  updateData(id, data) {
    return this.booksRef.child(id).update(data);
  }
}

export default new FirebaseApi();
