// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCCUxAkSe-KicYkApViqpQ_tlpugtxz3w0",
    authDomain: "clone-faebc.firebaseapp.com",
    projectId: "clone-faebc",
    storageBucket: "clone-faebc.appspot.com",
    messagingSenderId: "836638290311",
    appId: "1:836638290311:web:ae1149a65519e2b538a322",
    measurementId: "G-K0C09F8YJ4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();
  const auth = firebase.auth();

   export {db,auth}