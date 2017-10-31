import firebase from "../firebase";

class User {
  constructor() {
    this.auth = firebase.auth();
    this.isLogged = false;
    this.user = "";
    // this.checkUser();
  }

  // async checkUser() {
  //   const userId = await new Promise(resolve => {
  //     this.auth.onAuthStateChanged(user => {
  //       if (user) {
  //         this.isLogged = true;
  //         console.log("has user", user);
  //         resolve(user.uid);
  //       } else {
  //         this.isLogged = false;
  //         console.log("no user");
  //         resolve();
  //       }
  //     });
  //   });
  //   return userId;
  // }

  createUser(email, password) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(good => console.log("good", good))
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  }

  signIn(email, password) {
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
