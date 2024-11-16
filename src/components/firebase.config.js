// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCynqXBsO7d2_rPhn6IYnvXvkHT20JkbMs",
  authDomain: "dragon-news-react-api.firebaseapp.com",
  projectId: "dragon-news-react-api",
  storageBucket: "dragon-news-react-api.firebasestorage.app",
  messagingSenderId: "898801133089",
  appId: "1:898801133089:web:e0eb52d84900b1f39f2560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);