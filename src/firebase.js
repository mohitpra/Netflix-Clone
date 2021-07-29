import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyACzC7lBn4r-3iHSEVVBKxkH_USff6L2Mo",
    authDomain: "netflix-build-cfe67.firebaseapp.com",
    projectId: "netflix-build-cfe67",
    storageBucket: "netflix-build-cfe67.appspot.com",
    messagingSenderId: "1024418483245",
    appId: "1:1024418483245:web:220687a57e37957ef27ca4",
    measurementId: "G-R6DWWQYV4W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;