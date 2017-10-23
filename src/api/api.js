import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAFwiSAedClmIi5jbkRMf-n765gUz2ye1c",
  authDomain: "v-books-d1b6d.firebaseapp.com",
  databaseURL: "https://v-books-d1b6d.firebaseio.com",
  projectId: "v-books-d1b6d",
  storageBucket: "v-books-d1b6d.appspot.com",
  messagingSenderId: "866011591496",
};
firebase.initializeApp(config);

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
