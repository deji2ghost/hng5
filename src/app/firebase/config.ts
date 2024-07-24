
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// interface fireb{
//     apiKey: string,
//     authDomain: string,
//     projectId: string,
//     storageBucket: string,
//     messagingSenderId: string,
//     appId: string,
// }

const firebaseConfig = {
  apiKey: "AIzaSyAy0Im4FP9CyKqLJx8Sirt7DJmZLeyounM",
  authDomain: "linksharingapp-67e8b.firebaseapp.com",
  projectId: "linksharingapp-67e8b",
  storageBucket: "linksharingapp-67e8b.appspot.com",
  messagingSenderId: "145525860117",
  appId: "1:145525860117:web:f7359d0cbe7a0862e4eb1c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)
const db = getFirestore(app)

export {app, auth, db}