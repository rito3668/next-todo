import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA4_lBW8n8DQSUjLzMlLjTSxbQbEPSaOTo",
  authDomain: "next-todo-1.firebaseapp.com",
  projectId: "next-todo-1",
  storageBucket: "next-todo-1.appspot.com",
  messagingSenderId: "18981728824",
  appId: "1:18981728824:web:c787cb6d1c35aac94d2ccd"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
