import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB363INDHv_rir1gO7LRoicza8mTGXXNu0",
  authDomain: "todo-crud-ebe5f.firebaseapp.com",
  projectId: "todo-crud-ebe5f",
  storageBucket: "todo-crud-ebe5f.appspot.com",
  messagingSenderId: "888563585899",
  appId: "1:888563585899:web:69876ccb4c148ec0f6f22e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)

    .catch((error) => {
      console.log(error);
    });
};

export { db };