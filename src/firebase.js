import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth"
import "firebase/functions"

firebase.initializeApp({
    apiKey: "AIzaSyAdq-0wNjA5zwqhB2jtMNYdDtm2gJdPxXY",
    authDomain: "to-do-app-e2e99.firebaseapp.com",
    projectId: "to-do-app-e2e99",
    storageBucket: "to-do-app-e2e99.appspot.com",
    messagingSenderId: "1023667079559",
    appId: "1:1023667079559:web:1b63d0bab04d32a2cf6b22"
  })

  export const auth=firebase.auth()
  export const firestore=firebase.firestore()
  export const functions=firebase.functions()

  if(window.location.hostname.includes("localhost")){
    auth.useEmulator("http://localhost:9099")
    firestore.useEmulator("localhost",8080)
    functions.useEmulator("localhost",5001)
  
  }
  
  export default firebase; 

// import firebase from "firebase/app";

// import "firebase/firestore";
// import "firebase/auth";
// import "firebase/functions";

// firebase.initializeApp({});

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const functions = firebase.functions();

// if (window.location.hostname.includes("localhost")) {
//   auth.useEmulator("http://localhost:9099");
//   firestore.useEmulator("localhost", 8080);
//   functions.useEmulator("localhost", 5001);
// }

// export default firebase;