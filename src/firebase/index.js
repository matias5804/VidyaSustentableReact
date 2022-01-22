import firebase from 'firebase/app'
Import '@firebase/firestore'


// Your web app's Firebase configuration
const app = firebase.initializeApp( {
    apiKey: "AIzaSyAUKtoxnOfsZa3ag0khPuvl88ONynbikcQ",
    authDomain: "vidya-sustentable.firebaseapp.com",
    projectId: "vidya-sustentable",
    storageBucket: "vidya-sustentable.appspot.com",
    messagingSenderId: "782490251262",
    appId: "1:782490251262:web:0ed2f16396eee8a02b9aaf"
  });

  export const getFirebase =() =>{return app }
  export const getFirestore =() =>{return firebase.firestore(app)} 