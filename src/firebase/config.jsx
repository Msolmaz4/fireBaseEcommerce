
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

 export const firebaseConfig = {



  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN, 
  projectId: "dert-a43fa",
  storageBucket: "dert-a43fa.appspot.com",
  messagingSenderId: "1083126074893",
  appId: "1:1083126074893:web:8e23009de4375dea8a0f44"


  // apiKey: "AIzaSyAT6q9WpjQrDUtDHvljfonynkBKvMzI0",
  // authDomain: "eshop-ea8e7.firebaseapp.com",
  // projectId: "eshop-ea8e7",
  // storageBucket: "eshop-ea8e7.appspot.com",
  // messagingSenderId: "146569443233",
  // appId: "1:146569443233:web:46db000fc2c897f3b73de0",
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

