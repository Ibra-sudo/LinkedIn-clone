import {
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../Config/firebaseConfig";

// const signin = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((result) => {
//       if (email === result.email && password === result.password) {
//         console.log("signin successful");
//       } else {
//         console.log("signin failed");
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const signup = (email, password) => {
//   try {
//     let response = createUserWithEmailAndPassword(auth, email, password);
//     return response;
//   } catch (err) {
//     return err;
//   }
// };
const signInWithApple = async (e) => {
  const provider = await new OAuthProvider("apple.com");
  return signInWithPopup(auth, provider);
};

const signInWithGoogle = async (e) => {
  const provider = await new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

const signout = () => {
  signOut(auth);
};

export { signout, signInWithGoogle, signInWithApple };
