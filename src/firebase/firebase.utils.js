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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch( error ) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;