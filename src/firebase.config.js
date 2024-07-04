// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPSJGpqTAWOIcAYrLEUTaXlUZ_W-vP5_c",
  authDomain: "dragon-news-734a7.firebaseapp.com",
  projectId: "dragon-news-734a7",
  storageBucket: "dragon-news-734a7.appspot.com",
  messagingSenderId: "174770224621",
  appId: "1:174770224621:web:5c158a8790c204bc9ebbe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;