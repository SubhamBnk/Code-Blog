// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyCp69ojxe9_6FtTmzYkb6DI84Fp_tk3RcU",
  authDomain: "nth-suprstate-321819.firebaseapp.com",
  projectId: "nth-suprstate-321819",
  storageBucket: "nth-suprstate-321819.appspot.com",
  messagingSenderId: "922064871392",
  appId: "1:922064871392:web:884ffbebb8af99641b9585",
  measurementId: "G-25YX1ZNBJ8"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
