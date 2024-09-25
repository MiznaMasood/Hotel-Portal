import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4qArcn_T182bHp_n8Igokvq3Ql9uLZOw",
  authDomain: "hackathon-278a5.firebaseapp.com",
  projectId: "hackathon-278a5",
  storageBucket: "hackathon-278a5.appspot.com",
  messagingSenderId: "885240802250",
  appId: "1:885240802250:web:536b476a6244b643d03d33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };
