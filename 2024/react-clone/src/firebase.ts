import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDYKSZFpbzZla2Abf-rNiohnpTPgD1RNDg",
    authDomain: "react-clone-4a849.firebaseapp.com",
    projectId: "react-clone-4a849",
    storageBucket: "react-clone-4a849.appspot.com",
    messagingSenderId: "197848350466",
    appId: "1:197848350466:web:f6b9a946274d440d564c1b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
