import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3HFGu8n2wyitB01JFYsluHtpdFIc1npA",
  authDomain: "notes-app-f95ac.firebaseapp.com",
  projectId: "notes-app-f95ac",
  storageBucket: "notes-app-f95ac.appspot.com",
  messagingSenderId: "641846504529",
  appId: "1:641846504529:web:71c1354f151285cb4b9c70"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
