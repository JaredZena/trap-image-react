import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBNduTXcj2q2klSxv03vm1naB7-Q0Odgno",
    authDomain: "delta-smart-3efb4.firebaseapp.com",
    databaseURL: "https://delta-smart-3efb4.firebaseio.com",
    projectId: "delta-smart-3efb4",
    storageBucket: "delta-smart-3efb4.appspot.com",
    messagingSenderId: "65370441468",
    appId: "1:65370441468:web:7e33ce2ff0f7f5eb51b979",
    measurementId: "G-Y3L7XKLZTG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage,
      firebase as default
  }