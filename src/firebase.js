import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS3-wD737DFQBQs9pKyfpGJy861ojqMVo",
  authDomain: "clone-43bd8.firebaseapp.com",
  projectId: "clone-43bd8",
  storageBucket: "clone-43bd8.appspot.com",
  messagingSenderId: "318424567140",
  appId: "1:318424567140:web:41fcd39130d767344ebe71",
  measurementId: "G-57CTDT7SJ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
