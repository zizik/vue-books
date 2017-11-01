import firebase from "../firebase";

class User {
  constructor() {
    this.auth = firebase.auth();
    this.isLogged = false;
  }

  createUser({ email, password }) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    this.auth.signOut().then(
      () => {
        console.log("Signed Out");
      },
      error => {
        console.error("Sign Out Error", error);
      },
    );
  }

  getUser() {
    return this.auth.currentUser;
  }
}

export default new User();
