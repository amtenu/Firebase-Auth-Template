import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAwp-NvIz_AR1nK-eRKquamZM4znIytHk",//Key in .env file 
  authDomain: "c8-cyo-firebase-3f307.firebaseapp.com",
  projectId: "c8-cyo-firebase-3f307",
  storageBucket: "c8-cyo-firebase-3f307.appspot.com",
  messagingSenderId: "516852154630",
  appId: "1:516852154630:web:e20607d1e0b4350f445e87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //initialize the project
const auth=getAuth(app)
const db=getFirestore(app)
export const FirebaseContext = React.createContext();


//
function FirebaseProvider(props) {
  const children = props.children;
  const theValues = { app,auth ,db};

  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseProvider;
