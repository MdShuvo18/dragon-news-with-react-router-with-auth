// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGkv9tIQyAGbkHadY0XRm75p2NJ5fB_T4",
    authDomain: "react-dragon-news-portal-auth.firebaseapp.com",
    projectId: "react-dragon-news-portal-auth",
    storageBucket: "react-dragon-news-portal-auth.appspot.com",
    messagingSenderId: "913776416250",
    appId: "1:913776416250:web:c5fe260828ceb301ec4043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;