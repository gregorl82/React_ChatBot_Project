import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyA78gOBJukflDj0-s_0fXr7gJ75OSWL8qU",
    authDomain: "dbpractice-vjxdhi.firebaseapp.com",
    databaseURL: "https://dbpractice-vjxdhi.firebaseio.com",
    projectId: "dbpractice-vjxdhi",
    storageBucket: "dbpractice-vjxdhi.appspot.com",
    messagingSenderId: "1013556130918",
    appId: "1:1013556130918:web:9330eb330617d5799c69a7"
  }

firebase.initializeApp(config);


export default firebase;
