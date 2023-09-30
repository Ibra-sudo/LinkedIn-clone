import React from "react";
// import { Link } from "react-router-dom";
import { signInWithGoogle } from "../Api/firebaseAuth";

import LinkedInLogo from "../assets/LinkedIn_logo.png";
import LinkedInLogoFooter from "../assets/linkedin-logo-black.png";

function LoginComponent() {
  return (
    <>
      <div className="App">
        {/* -------------- Header Section ---------------  */}
        <header className="d-block">
          <a className="navbar-brand " href="#">
            <img src={LinkedInLogo} alt="Bootstrap" width="110" height="65" />
          </a>
        </header>

        {/* -------------- Main Section ---------------  */}
        <main
          className="row justify-content-center align-items-center"
          style={{ height: "88%" }}
        >
          <div
            className="card shadow border-0"
            style={{ width: "22rem", height: "35rem" }}
          >
            <div className="card-body my-3">
              <div>
                <h1 className="fw-medium fs-2">Sign in</h1>
                <p className="fst-normal fs-6">
                  Stay updated on your professinal world
                </p>
              </div>
              <form className="needs-validation" action="" noValidate>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control border-black input-login"
                    id="floatingInput validEmail"
                    // name="csrToken"
                    // value=""
                    // placeholder="Email or Phone"
                    required
                  />
                  <label htmlFor="floatingInput validEmail">
                    Email or Phone
                  </label>
                  <div className="invalid-feedback">
                    Please enter an email address or phone number.
                  </div>
                </div>
                <div className="form-floating mb-2">
                  <input
                    type="password"
                    className="form-control border-black input-login"
                    id="floatingPassword validPassword"
                    // name="csrToken"
                    // value=""
                    // placeholder="Password"
                    required
                  />
                  <label htmlFor="floatingPassword validPassword">
                    Password
                  </label>
                  <div className="invalid-feedback">
                    Please enter a password.
                  </div>
                </div>
                <a href="#" className="mb-3 text-decoration-none p-2 link">
                  Forget password?
                </a>
                <div className="mt-4 mb-3 d-grid">
                  <button
                    // onClick={}
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill fw-bold"
                    style={{ height: "3.1rem" }}
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="mb-3 text-center">
                <h6 className="hr-lines">or</h6>
              </div>
              <div className="mb-3 d-grid">
                {/* <Link
                className="btn text-center"
                // style={{ width: "18rem" }}
                to={{ pathname: "/home" }}
              > */}
                <button
                  onClick={signInWithGoogle}
                  type="submit"
                  className="btn btn-outline-secondary rounded-pill fw-light"
                  style={{ height: "2.6rem" }}
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
                  <span>Continue with Google</span>
                </button>
                {/* </Link> */}
              </div>
              <div className="mb-4 d-grid">
                <button
                  type="submit"
                  className="btn btn-outline-secondary rounded-pill fw-light"
                  style={{ height: "2.6rem" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="22px"
                    height="22px"
                    className="me-1 mb-1"
                  >
                    {" "}
                    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z" />
                  </svg>
                  <span>Sign in with Apple</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        <div className="text-center pb-3">
          New to LinkedIn?
          <a href="/signup" className="text-decoration-none p-2 link">
            Join now
          </a>
        </div>
        {/* -------------- Footer Section ---------------  */}
        <footer
          className=" justify-content-center bg-white position-sticky footer"
          // style={{ width: "100%", height: "30px", marginTop: "270px" }}
        >
          <div
            className="container d-flex justify-content-center"
            style={{ width: "100%" }}
          >
            <div className="text-center d-flex">
              <em className="text-black fw-light">
                <img src={LinkedInLogoFooter} alt="" width="60" height="15" /> ©
                2023
              </em>
              <ul className="d-flex gap-3">
                <li className="list-group">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    User Agreement
                  </a>
                </li>
                <li className="list-group">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="list-group ">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Community Guidelines
                  </a>
                </li>
                <li className="list-group ">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li className="list-group ">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Copyright Policy
                  </a>
                </li>
                <li className="list-group ">
                  <a
                    href="#"
                    className="text-decoration-none text-black fw-light"
                  >
                    Send Feedback
                  </a>
                </li>
                <li className="list-group">
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

export default LoginComponent;
