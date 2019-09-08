import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArHtHTcDD7PgZTwkSw5g0VXpmHHh0cZVg",
    authDomain: "crwn-db-cab7f.firebaseapp.com",
    databaseURL: "https://crwn-db-cab7f.firebaseio.com",
    projectId: "crwn-db-cab7f",
    storageBucket: "",
    messagingSenderId: "247208676946",
    appId: "1:247208676946:web:ae45d9b6b408cd0027598b"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;