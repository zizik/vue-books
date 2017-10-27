import firebase from "../firebase";

class FirebaseApi {
  constructor() {
    this.db = firebase.database();
    this.booksRef = this.db.ref("books/manga");
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
