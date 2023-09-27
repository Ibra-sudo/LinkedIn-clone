import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Config/firebaseConfig";

const signin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      if (email === result.email && password === result.password) {
        console.log("signin successful");
      } else {
        console.log("signin failed");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const signup = (email, password) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    // if (response) {
    //   console.log("signup successful");
    //   return response;
    // } else {
    //   console.log("signup faild!");
    // }
    return response;
  } catch (err) {
    return err;
  }
};

const signInWithGoogle = async (e) => {
  const provider = await new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

const signout = () => {
  signOut(auth);
  // .then(() => {
  //   console.log("signout successful");
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
};

export { signin, signup, signout, signInWithGoogle };
