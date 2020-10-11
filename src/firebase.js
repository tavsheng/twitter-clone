import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD_AQ2_ar9Ayz7XHXb-ZuOtUTqgW7zeOAs",
    authDomain: "twitter-clone-2d6bb.firebaseapp.com",
    databaseURL: "https://twitter-clone-2d6bb.firebaseio.com",
    projectId: "twitter-clone-2d6bb",
    storageBucket: "twitter-clone-2d6bb.appspot.com",
    messagingSenderId: "548260963542",
    appId: "1:548260963542:web:1fe357352f4f9a401f9577"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db