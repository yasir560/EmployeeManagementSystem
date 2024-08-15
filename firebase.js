import { initializeApp } from 'firebase/app'; // add
import { getAuth } from 'firebase/auth'; // add
import { getFirestore } from 'firebase/firestore'; 

// Your Firebase configuration object
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
// Get the Firebase authentication and Firestore database instances
const auth = getAuth(app); // add
const database = getFirestore(app); // add

// Export the Firebase authentication and Firestore database instances
export { auth, database }; //add

