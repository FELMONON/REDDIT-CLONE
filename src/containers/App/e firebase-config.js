import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyACz6RRTG9SKeg2JvpxpUcSmDpEx6wOlZc",
  authDomain: "e-reddit-clone.firebaseapp.com",
  databaseURL: "https://e-reddit-clone-default-rtdb.firebaseio.com",
  projectId: "e-reddit-clone",
  storageBucket: "e-reddit-clone.appspot.com",
  messagingSenderId: "524008470055",
  appId: "1:524008470055:web:4de938c841e6b770a00002",
  measurementId: "G-TSK13GY775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the database
export const database = getDatabase(app);
