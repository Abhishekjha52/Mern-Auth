// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-fcde8.firebaseapp.com",
  projectId: "mern-auth-fcde8",
  storageBucket: "mern-auth-fcde8.appspot.com",
  messagingSenderId: "419163245482",
  appId: "1:419163245482:web:db9a0a5dc423fdf9e6f9d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);