import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCrwG5HoA9_8iJ7pSvGytmKNCRtbkgrEa4",
    authDomain: "crwn-db-45b1f.firebaseapp.com",
    databaseURL: "https://crwn-db-45b1f.firebaseio.com",
    projectId: "crwn-db-45b1f",
    storageBucket: "crwn-db-45b1f.appspot.com",
    messagingSenderId: "362896262346",
    appId: "1:362896262346:web:0683c5c73cdc10fe082033",
    measurementId: "G-0SRBJHMQNS"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {displayName, email} =userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch (e) {
            console.log('error creating user',e.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

