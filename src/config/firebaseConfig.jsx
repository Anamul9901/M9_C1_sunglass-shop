import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAxOq64nq2b8EzmdWtP3b4icJesI5689To",
  authDomain: "concept-sunglass-m9.firebaseapp.com",
  projectId: "concept-sunglass-m9",
  storageBucket: "concept-sunglass-m9.appspot.com",
  messagingSenderId: "667227441836",
  appId: "1:667227441836:web:dee7d0966c69c0a53ced09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);