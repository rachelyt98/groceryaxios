import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyApokJErjTqgIzcsUrEK4vFKhDCnZJhPGA",
    authDomain: "grocery-project-5f035.firebaseapp.com",
    databaseURL: "https://grocery-project-5f035.firebaseio.com",
    projectId: "grocery-project-5f035",
    storageBucket: "grocery-project-5f035.appspot.com",
    messagingSenderId: "101711356667",
    appId: "1:101711356667:web:10380dff03ddf59054c65e",
    measurementId: "G-86TXVBJ52Z"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;