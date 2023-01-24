import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZN15EiHJPGOgktxd4hPiDdbbAY2eWYXQ",
  authDomain: "auth-router-context-86a4e.firebaseapp.com",
  projectId: "auth-router-context-86a4e",
  storageBucket: "auth-router-context-86a4e.appspot.com",
  messagingSenderId: "3049332235",
  appId: "1:3049332235:web:6cc2b78d896d4b3b0eb10e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
