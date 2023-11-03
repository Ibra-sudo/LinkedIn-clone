import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeIYpDDgw1wPJh_3oPiAD0Y-guSY_6Z0g",
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "linkedin-clone-c4b98.firebaseapp.com",
  projectId: "linkedin-clone-c4b98",
  storageBucket: "linkedin-clone-c4b98.appspot.com",
  messagingSenderId: "679727875169",
  appId: "1:679727875169:web:7a7b3d6f0ad96387f1d620",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;

// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp ({

// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage }
