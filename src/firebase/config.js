import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBWXEjSB7spTk7lScCspJqWzkj59UDoxp0",
  authDomain: "olx-clone-46945.firebaseapp.com",
  projectId: "olx-clone-46945",
  storageBucket: "olx-clone-46945.appspot.com",
  messagingSenderId: "65221852970",
  appId: "1:65221852970:web:c0d71343d44b8e665f2853"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);