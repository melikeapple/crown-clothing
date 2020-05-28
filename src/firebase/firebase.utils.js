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

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;

