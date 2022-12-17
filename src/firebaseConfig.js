import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// SDK's:
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBu5wD6m5rEgs--kk_sV-nvKRn_DH7cFdw",
  authDomain: "blog-code-along-5971c.firebaseapp.com",
  projectId: "blog-code-along-5971c",
  storageBucket: "blog-code-along-5971c.appspot.com",
  messagingSenderId: "456731756649",
  appId: "1:456731756649:web:4c9d68181e016110613af8",
  measurementId: "G-1ZFH516B36"
};

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
// export const firebase = require("firebase");
// require("firebase/firestore");