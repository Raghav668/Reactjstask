
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCcCun5CnlgWgKAitwul9EJYuebqoUypI0",
    authDomain: "authentication-1f038.firebaseapp.com",
    projectId: "authentication-1f038",
    storageBucket: "authentication-1f038.appspot.com",
    messagingSenderId: "859066731832",
    appId: "1:859066731832:web:befcbed41d1a0a784e45cd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore()
  const auth = firebase.auth()

  export {db}
  export default auth