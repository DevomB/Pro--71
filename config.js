import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF7uZ4UH5yOQkLhcMYeNOjQz6ddY74kKM",
  authDomain: "project-711-50189.firebaseapp.com",
  projectId: "project-711-50189",
  storageBucket: "project-711-50189.appspot.com",
  messagingSenderId: "455504646627",
  appId: "1:455504646627:web:85eff25f357964d1d610d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

