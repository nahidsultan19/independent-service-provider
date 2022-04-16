// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIf9p78_lDIwTG4Jmnk7T7YTAAFPbtVzI",
    authDomain: "independent-service-prov-f9fbf.firebaseapp.com",
    projectId: "independent-service-prov-f9fbf",
    storageBucket: "independent-service-prov-f9fbf.appspot.com",
    messagingSenderId: "403428833655",
    appId: "1:403428833655:web:b3e75109d5ef8381e9c972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;