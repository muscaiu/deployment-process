import app from "firebase/app";
import "firebase/auth";
import "firebase/messaging";

const config = {
  apiKey: 'AIzaSyDLm2fW6HErord99U4_RJR8ia949gHmKVM',
  authDomain: 'pump-3e29a.firebaseapp.com',
  databaseURL: 'https://pump-3e29a.firebaseio.com',
  projectId: 'pump-3e29a',
  storageBucket: 'pump-3e29a.appspot.com',
  messagingSenderId: '1001221036910',
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.messaging = app.messaging();
    console.log('ENV: ',process.env);
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Messaging API ***
  requestPermission = async () => {
    
    try {
      // const messaging = this.props.firebase.messaging();
      await this.messaging.requestPermission();
      console.log(this);
      const token = await this.messaging.getToken();
      console.log("token:", token);
      return token;
    } catch (error) {
      console.error(error);
    }
  };
}

export default Firebase;
