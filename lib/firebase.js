//svi firebase sdks koje cemo koristiti
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBnCKVOoxaPuMVbL-p-99IiFkWyfqDnj_k",
    authDomain: "nextjsfire-9370c.firebaseapp.com",
    projectId: "nextjsfire-9370c",
    storageBucket: "nextjsfire-9370c.appspot.com",
    messagingSenderId: "37998782584",
    appId: "1:37998782584:web:07e2baff54c7eb1bd1a58d"
};

// ovo koristimo da se inicijalizacija nebi odradila dva puta jer next u development modu inicira ponovno pokretanje ovog fajla
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

