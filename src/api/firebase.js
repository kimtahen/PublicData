import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAip8CGV9YK51enXQekH8fkibSvPAY0WY4",
    authDomain: "fir-9fb67.firebaseapp.com",
    projectId: "fir-9fb67",
    storageBucket: "fir-9fb67.appspot.com",
    messagingSenderId: "475385448877",
    appId: "1:475385448877:web:22b4afa11d08d46ac0f924"
}

firebase.initializeApp({
    apiKey: "AIzaSyAip8CGV9YK51enXQekH8fkibSvPAY0WY4",
    authDomain: "fir-9fb67.firebaseapp.com",
    projectId: "fir-9fb67",
})

const db = firebase.firestore();
export default db;