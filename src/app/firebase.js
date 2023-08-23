// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHQMMJOloMDX5lggJ3Gp3_QZ3Xvmmb0X4",
    authDomain: "next-auth-ac322.firebaseapp.com",
    projectId: "next-auth-ac322",
    storageBucket: "next-auth-ac322.appspot.com",
    messagingSenderId: "763395754311",
    appId: "1:763395754311:web:9f4c61d6e2e2f74123e462"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)