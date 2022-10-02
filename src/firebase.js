// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDs0TKlsd4kxahR1CmZB7wOTBqu6tXOdsA",
  authDomain: "coorditots.firebaseapp.com",
  databaseURL: "https://coorditots-default-rtdb.firebaseio.com",
  projectId: "coorditots",
  storageBucket: "coorditots.appspot.com",
  messagingSenderId: "404551935023",
  appId: "1:404551935023:web:1085c7aebe6e329a5752da",
  measurementId: "G-FD324LFLK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
