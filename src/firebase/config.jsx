
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

 export const firebaseConfig = {



  apiKey: import.meta.env.VITE_APP,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: "e-commerce-3400f",
  storageBucket: "e-commerce-3400f.appspot.com",
  messagingSenderId: "1082611441482",
  appId: "1:1082611441482:web:5cdc80d73caaea2fbe6bb3",
  measurementId: "G-QY723PZFLE"


};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

