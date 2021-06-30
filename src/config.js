import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9npB9_9G9g_0XYWjzl_KuHCfZ5VBP214",
    authDomain: "chat-room-788c2.firebaseapp.com",
    projectId: "chat-room-788c2",
    storageBucket: "chat-room-788c2.appspot.com",
    messagingSenderId: "871609475000",
    appId: "1:871609475000:web:c4ab04a3a30971753ab94d",
    measurementId: "G-S0JGJ9VNEE"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //assining auth function
  const auth = firebase.auth();
  //assining firestore function
  const db = firebase.firestore();

  export {auth, db}