import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBz9eTSazpkChEoJ-iNlxcnOj8MY24q318",
//   authDomain: "linkedin-test-aa013.firebaseapp.com",
//   projectId: "linkedin-test-aa013",
//   storageBucket: "linkedin-test-aa013.appspot.com",
//   messagingSenderId: "28594306249",
//   appId: "1:28594306249:web:ca5c5ba262fcc7ead1a118",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCeIYpDDgw1wPJh_3oPiAD0Y-guSY_6Z0g",
  authDomain: "linkedin-clone-c4b98.firebaseapp.com",
  projectId: "linkedin-clone-c4b98",
  storageBucket: "linkedin-clone-c4b98.appspot.com",
  messagingSenderId: "679727875169",
  appId: "1:679727875169:web:7a7b3d6f0ad96387f1d620",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
