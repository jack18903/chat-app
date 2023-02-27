import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCUG5lwJKWZ4MJfNn2WvFk5fp-XUty9EII",
  authDomain: "chat-bf686.firebaseapp.com",
  projectId: "chat-bf686",
  storageBucket: "chat-bf686.appspot.com",
  messagingSenderId: "1017499656545",
  appId: "1:1017499656545:web:66e30e69f907a6bd52a520"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
