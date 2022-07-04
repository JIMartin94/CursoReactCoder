import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDOb5v84squ0oekdAHtPSgW3Bxf6A5CcEM",
  authDomain: "reactcomputacion.firebaseapp.com",
  projectId: "reactcomputacion",
  storageBucket: "reactcomputacion.appspot.com",
  messagingSenderId: "924587648305",
  appId: "1:924587648305:web:257cadf1fc449a94a77c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//obtener una referencia/puntero a la base de datos
export const db = getFirestore(app)

export const collectionProd = collection(db, "productos")
