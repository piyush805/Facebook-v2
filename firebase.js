import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDzqRmMY5lQMM3neqiwQ0SWFZl7tVxaw2Y",
    authDomain: "fb-v2-3824e.firebaseapp.com",
    projectId: "fb-v2-3824e",
    storageBucket: "fb-v2-3824e.appspot.com",
    messagingSenderId: "130955183640",
    appId: "1:130955183640:web:46d586c2fae52fabbe256d"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export {db, storage };