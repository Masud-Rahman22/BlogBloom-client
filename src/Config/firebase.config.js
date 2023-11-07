// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9ADoam0EQ0CAJWQLqFUGke9UpnTY9ugc",
    authDomain: "blogbloom-e6aea.firebaseapp.com",
    projectId: "blogbloom-e6aea",
    storageBucket: "blogbloom-e6aea.appspot.com",
    messagingSenderId: "666290933627",
    appId: "1:666290933627:web:fe617ea5d6e585171e77de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;