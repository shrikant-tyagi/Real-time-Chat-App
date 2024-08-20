import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-a9568.firebaseapp.com",
  projectId: "reactchatapp-a9568",
  storageBucket: "reactchatapp-a9568.appspot.com",
  messagingSenderId: "132101400669",
  appId: "1:132101400669:web:343b27ba73c4e894c805b4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();