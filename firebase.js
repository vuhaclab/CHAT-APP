// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3Hnl057CAD5iA-ia47fhsiMaoZh1smi4",

  authDomain: "chatapp-vhlab.firebaseapp.com",

  projectId: "chatapp-vhlab",

  storageBucket: "chatapp-vhlab.appspot.com",

  messagingSenderId: "33781491667",

  appId: "1:33781491667:web:cdd1b1cf369418fcdbb126",

  measurementId: "G-KVKX1TT0QW",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };
