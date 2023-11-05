import React, { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Config/firebaseConfig";

import { Link, useNavigate } from "react-router-dom";

import LinkedInLogo from "../assets/LinkedIn_logo.png";
import LinkedInLogoFooter from "../assets/linkedin-logo-black.png";
import { AuthContext } from "../context/AuthContext";

function SignupComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // Google Signup Function
  const handelGoogleSignup = async (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setValue(result.user.email);
        dispatch({ type: "LOGIN", payload: result.user.email });
        if (!provider) {
          navigate("/");
        } else {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // const provider = await new GoogleAuthProvider();
    // dispatch({ type: "LOGIN", payload: provider });
    // if (!provider) {
    //   navigate("/");
    // } else {
    //   navigate("/home");
    // }
    // return signInWithPopup(auth, provider);
  };

  // Signup function
  const handelSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/home");
        // console.log(user);
        console.log("Signup successful!");
      })
      .catch((error) => {
        if (!validateEmail(email)) {
          setEmailError(true);
        }

        if (!validatePassword(password)) {
          setPasswordError(true);
        }
        console.log("Signup faild!");
      });
  };

  return (
    <>
      <div className="content-container">
        {/* -------------- Header Section ---------------  */}
        <header className="d-block">
          <a className="navbar-brand" href="#">
            <img src={LinkedInLogo} alt="Bootstrap" width="110" height="65" />
          </a>
        </header>

        <div>
          <h2 className="text-center my-4">
            Make the most of your professional life
          </h2>
        </div>

        {/* -------------- Main Section ---------------  */}
        <main
          className="row justify-content-center"
          style={{ height: "84.1%" }}
        >
          <div
            className=" card-shadow"
            style={{ width: "23rem", height: "28.4rem" }}
          >
            <div className="card-body p-2">
              {/* <div>
                <h1 className="fw-medium">Sign in</h1>
                <p className="fst-normal fs-6">
                  Stay updated on your professinal world
                </p>
              </div> */}
              <form
                onSubmit={handelSignup}
                className="needs-validation"
                action=""
                noValidate
              >
                <label htmlFor="floatingInput validEmail">Email</label>
                <div className="mb-2">
                  <input
                    type="email"
                    value={email}
                    className="form-control border-black input-signup"
                    id="floatingInput validEmail"
                    // onChange={(e) =>
                    //   setCredentials({ ...credentials, email: e.target.value })
                    // }
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && (
                    <p
                      style={{ color: "red", fontSize: "12px", height: "2px" }}
                    >
                      {/* {emailError} */}
                      Invalid email format
                    </p>
                  )}
                  {/* <div className="invalid-feedback">
                    Please enter your email address.
                  </div> */}
                </div>
                <label htmlFor="floatingPassword validPassword">
                  Password (6+ characters)
                </label>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    className="form-control border-black input-signup"
                    id="floatingPassword validPassword"
                    // onChange={(e) =>
                    //   setCredentials({
                    //     ...credentials,
                    //     password: e.target.value,
                    //   })
                    // }
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  {passwordError && (
                    <p
                      style={{ color: "red", fontSize: "12px", height: "8px" }}
                    >
                      {/* {passwordError} */}
                      Password should be at least 6 characters long
                      {/* Password must meet criteria (e.g., at least 8 characters,
                      1 uppercase, 1 digit, and 1 special character) */}
                    </p>
                  )}
                  {/* <div className="invalid-feedback">
                    Please enter a password.
                  </div> */}
                </div>
                <p className="fw-normal text-center justify-content-center px-3 mb-3 p-signIn-style">
                  By clicking Agree & Join, you agree to the LinkedIn{" "}
                  <a href="#" className="text-decoration-none">
                    User Agreemet,
                  </a>{" "}
                  <a href="#" className="text-decoration-none">
                    Privacy Policy,
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-decoration-none">
                    Cookie Policy.
                  </a>{" "}
                </p>

                <div className="mb-4 d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill fw-normal"
                    style={{ height: "3.1rem" }}
                  >
                    Agree & Join
                  </button>
                </div>
              </form>
              <div className="mb-4 text-center">
                <h6 className="hr-lines">or</h6>
              </div>
              <div className=" d-grid">
                <button
                  onClick={handelGoogleSignup}
                  type="submit"
                  className="btn btn-outline-secondary rounded-pill fw-light"
                  style={{
                    height: "2.5rem",
                  }}
                >
                  {/* <i className="flaticon-phone-call"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="22px"
                    height="22px"
                    className="me-1 mb-1"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  <span className="">Continue with Google</span>
                </button>
              </div>
              <div className="mb-4 d-grid">
                <div className="text-center mt-4">
                  Already on LinkedIn?{"  "}
                  <a href="/" className="text-decoration-none p-2 link">
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* -------------- Footer Section ---------------  */}
        <footer className="justify-content-center bg-white ff">
          <div className="d-flex text-center justify-content-center">
            <div className=" text-center justify-content-center">
              {/* <em className="text-black footer"> */}
              {/* <img src={LinkedInLogoFooter} alt="" width="60" height="15" /> ©
              2023 */}

              {/* </em> */}
              <ul className="gap-2 mt-2 me-4 ul-footer">
                <li className="list-group li-footer">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    <img
                      src={LinkedInLogoFooter}
                      alt=""
                      width="60"
                      height="15"
                    />{" "}
                    © 2023
                  </a>
                </li>
                <li className="list-group li-footer">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    User Agreement
                  </a>
                </li>
                <li className="list-group li-footer">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="list-group li-footer">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Community Guidelines
                  </a>
                </li>
                <li className="list-group li-footer">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li className="list-group li-footer">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Copyright Policy
                  </a>
                </li>
                <li className="list-group li-footer">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Send Feedback
                  </a>
                </li>
                <li className="list-group li-footer">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Language
                  </a>
                  <div className="">
                    <div>
                      {/* <ul>
                    <li>
                      <button>العربية (Arabic)</button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                    <li>
                      <button></button>
                    </li>
                  </ul> */}
                    </div>
                    {/* <button>
                  <span>Language</span>
                  <i></i>
                  </button> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default SignupComponent;
