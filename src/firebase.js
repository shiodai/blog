// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfudYpUbVovvu7jWmBrikQAduXcJi-NJM",
  authDomain: "blog-9a3be.firebaseapp.com",
  projectId: "blog-9a3be",
  storageBucket: "blog-9a3be.appspot.com",
  messagingSenderId: "10758205629",
  appId: "1:10758205629:web:7c089a4af2ab9e40cec7d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};
