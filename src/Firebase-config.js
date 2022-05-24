import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB-LoH1xyoomlAHnO8GDZMOu_WKyXlqTG4",
    authDomain: "netflix-clone-14b12.firebaseapp.com",
    projectId: "netflix-clone-14b12",
    storageBucket: "netflix-clone-14b12.appspot.com",
    messagingSenderId: "10137930415",
    appId: "1:10137930415:web:beb5c30561a044543a225a",
    measurementId: "G-TNXVMLJ3WK"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
