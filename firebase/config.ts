import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtKD_tJBaYWebcgqHDx2nY366MILwSmoQ",
  authDomain: "vocslearn-e7b9a.firebaseapp.com",
  projectId: "vocslearn-e7b9a",
  storageBucket: "vocslearn-e7b9a.appspot.com",
  messagingSenderId: "1040496414837",
  appId: "1:1040496414837:web:4fea19d7bc558ecd7d283c",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Initialize Cloud Firestore and get a reference to the service
export { app, auth, db };
