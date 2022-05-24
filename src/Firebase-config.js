import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZwhxxM1ArZqqv_ljxq85q4hLfypN50Hc",
  authDomain: "netflix-76fca.firebaseapp.com",
  projectId: "netflix-76fca",
  storageBucket: "netflix-76fca.appspot.com",
  messagingSenderId: "305317354955",
  appId: "1:305317354955:web:fa26525052ae6c4b00ea4e",
  measurementId: "G-JJ0PHEB3D4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
