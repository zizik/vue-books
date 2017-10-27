import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAFwiSAedClmIi5jbkRMf-n765gUz2ye1c",
  authDomain: "v-books-d1b6d.firebaseapp.com",
  databaseURL: "https://v-books-d1b6d.firebaseio.com",
  projectId: "v-books-d1b6d",
  storageBucket: "v-books-d1b6d.appspot.com",
  messagingSenderId: "866011591496",
};
const fb = firebase.initializeApp(config);
export default fb;
