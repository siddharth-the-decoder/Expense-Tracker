import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_OqrlbIyaDyzh-0-xGmdhYp14k23TZ9k",
  authDomain: "expense-tracker-23b8e.firebaseapp.com",
  projectId: "expense-tracker-23b8e",
  storageBucket: "expense-tracker-23b8e.appspot.com",
  messagingSenderId: "548287799391",
  appId: "1:548287799391:web:2bb90d889a50d28aa1fbea",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timeStamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timeStamp };
