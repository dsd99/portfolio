import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBnEMUAurS4IW1FpmgSuB_Zn9k_0uAEoi8",
  authDomain: "portfolio-3ca5a.firebaseapp.com",
  projectId: "portfolio-3ca5a",
  storageBucket: "portfolio-3ca5a.appspot.com",
  messagingSenderId: "506664196097",
  appId: "1:506664196097:web:af15b6e6c56c26c4b88800",
  measurementId: "G-REG6WLVNX2"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app

// https://firebase.google.com/docs/firestore/quickstart?hl=en&authuser=0