import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNF8cgdey9ejMFzsryrw3wfgljoayqF_8",
  authDomain: "portfolio-contact-form-2c539.firebaseapp.com",
  projectId: "portfolio-contact-form-2c539",
  storageBucket: "portfolio-contact-form-2c539.appspot.com",
  messagingSenderId: "270307018570",
  appId: "1:270307018570:web:9a4bcf74129ff1ddb0a3b3",
  measurementId: "G-6W9R86PMJV",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
