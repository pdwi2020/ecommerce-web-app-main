import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBB3H8J-GvuBPCWOUpXwNBkuiXDGwBPP-s",
    authDomain: "ecommerce-60c87.firebaseapp.com",
    projectId: "ecommerce-60c87",
    storageBucket: "ecommerce-60c87.appspot.com",
    messagingSenderId: "10982645622",
    appId: "1:10982645622:web:6c8c0a001f538625f7e457",
    measurementId: "G-WW7LM00S8Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

