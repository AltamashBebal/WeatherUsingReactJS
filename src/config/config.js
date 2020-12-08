import firebase from 'firebase'


  var firebaseConfig = {
    apiKey: "AIzaSyCi00lRZzdSFgjeSHRGHcmgxfYTcasejgc",
    authDomain: "reactjs-5e8a4.firebaseapp.com",
    projectId: "reactjs-5e8a4",
    storageBucket: "reactjs-5e8a4.appspot.com",
    messagingSenderId: "317070630707",
    appId: "1:317070630707:web:c085cb22da0dbceae42846"
  };
  // Initialize Firebase
  const config=firebase.initializeApp(firebaseConfig);

  export default config;