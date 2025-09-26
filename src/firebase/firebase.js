// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsp2g6AR5ZD-kXGtycC0fyQJWQHdesjOo",
  authDomain: "proyecto-ecommerce-react-bcd29.firebaseapp.com",
  projectId: "proyecto-ecommerce-react-bcd29",
  storageBucket: "proyecto-ecommerce-react-bcd29.firebasestorage.app",
  messagingSenderId: "1017317871539",
  appId: "1:1017317871539:web:af8e750797f049f47505c6",
  measurementId: "G-WQP0BJE65B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();