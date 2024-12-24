import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE_u-DUiSTD0DyzE6BxA56ye1lBhJ-WdY",
  authDomain: "personal-website-510d1.firebaseapp.com",
  projectId: "personal-website-510d1",
  storageBucket: "personal-website-510d1.firebasestorage.app",
  messagingSenderId: "1025515351042",
  appId: "1:1025515351042:web:13d2f89897975dedba0b1b",
  measurementId: "G-PGEPJZESF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
