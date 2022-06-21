//Import firebase, auth and firestore like this
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-INJXaK8L51q1ubuUFH4pO7FYClBkNb4",
  authDomain: "clone-reactjs-e5733.firebaseapp.com",
  projectId: "clone-reactjs-e5733",
  storageBucket: "clone-reactjs-e5733.appspot.com",
  messagingSenderId: "1086492857139",
  appId: "1:1086492857139:web:9307209b6ee07bf1cd6446",
  measurementId: "G-Q370GVMT8Y"
};

//S6.1-- INITIALIZE the APP
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Initialize the DATABASE(db)
const db = firebaseApp.firestore();
const auth = firebase.auth();

//EXPORT them to USE
export { db, auth }; //go back to login.js now