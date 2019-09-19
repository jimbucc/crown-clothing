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
    if (!userAuth) return;

    // Firestore library can return references and snapshots
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // const collectionRef = firestore.collection('users');
    // const collectionSnapshot = await collectionRef.get();
    // console.log({collection: collectionSnapshot.docs.map(doc => doc.data())});

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;