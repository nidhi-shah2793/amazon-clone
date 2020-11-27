import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHwjd_B-iJ7PH7NDvOaMwciYS8cXg94VE",
  authDomain: "challenge-7cd3e.firebaseapp.com",
  databaseURL: "https://challenge-7cd3e.firebaseio.com",
  projectId: "challenge-7cd3e",
  storageBucket: "challenge-7cd3e.appspot.com",
  messagingSenderId: "1020261943980",
  appId: "1:1020261943980:web:3f0f61107a63492021ed09",
  measurementId: "G-B6QPWCD8TJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}

