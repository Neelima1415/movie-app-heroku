import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA4T-JS5WuezwrhKTpMHohF5pU7YCOM0ts",
  authDomain: "auth-movie-app.firebaseapp.com",
  projectId: "auth-movie-app",
  storageBucket: "auth-movie-app.appspot.com",
  messagingSenderId: "174283118063",
  appId: "1:174283118063:web:102123e7c5872d70d6521a",
  measurementId: "G-ED6PG3J957"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


