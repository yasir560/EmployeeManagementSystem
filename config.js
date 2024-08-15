// config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // add
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHPdBCzyyZxV6PNht18lolrQAM55ivlFE",
    authDomain: "employeems-bb71e.firebaseapp.com",
    projectId: "employeems-bb71e",
    storageBucket: "employeems-bb71e.appspot.com",
    messagingSenderId: "197617881240",
    appId: "1:197617881240:web:b0436403f81fc0b890c0ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // add