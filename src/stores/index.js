import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm6Oe6rBqTMdBmga_41QB9qQzrr3WJtJA",
  authDomain: "ets-vue.firebaseapp.com",
  databaseURL: "https://ets-vue-default-rtdb.firebaseio.com",
  projectId: "ets-vue",
  storageBucket: "ets-vue.appspot.com",
  messagingSenderId: "299657414646",
  appId: "1:299657414646:web:ab259b05082dcb45c769d7",
  measurementId: "G-JFVNV7YNER"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useStore = defineStore({
    id: "main",
    state: () => ({}),
    actions: {},
});