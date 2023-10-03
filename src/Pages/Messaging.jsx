import React from "react";

import FaviconLogo from "../assets/favicon.png";

function Messaging() {
  return (
    <>
      <div className="App bg">
        {/* -------------- Header Section ---------------  */}
        <header className="">
          <div className="p-2 d-flex bg-white">
            <a className="home-logo" href="#">
              <img src={FaviconLogo} alt="" width="47" height="47" />
            </a>
            <div className=" searchbar">
              <div className="d-flex align-items-center">
                {/* <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    color: "#717171",
                    width: "1rem",
                    height: "1rem",
                  }}
                /> */}
                {/* <img src="/images/search-icon.svg" alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                </svg>
              </div>
              <input
                className=""
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ height: "2.2rem" }}
              />
            </div>
            {/* -------------- Navbar Section ---------------  */}
            <nav className="d-flex bg-white">
              <div className=" " style={{ height: "3rem", width: "100%" }}>
                <ul
                  className="align-items-center ul-nav"
                  style={{ height: "2.8rem", width: "100%" }}
                  // style={{ width: "100%" }}
                >
                  <li className="list-group text-center search-icon">
                    <a
                      className="nav-link"
                      // aria-current="page"
                      href="#"
                    >
                      <div className="" style={{ height: "23px" }}>
                        {/* <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          style={{
                            color: "#717171",
                            width: "1.2rem",
                            height: "1.2rem",
                          }}
                        /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          class="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                          style={{ color: "gray" }}
                        >
                          <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                        </svg>
                      </div>
                      <span className="anchorLink nav-span">Search</span>
                    </a>
                  </li>
                  <li className="list-group text-center">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/home"
                    >
                      <div className="" style={{ height: "23px" }}>
                        {/* <FontAwesomeIcon
                          icon={faHome}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        /> */}
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          class="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                          style={{ color: "gray" }}
                        >
                          <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                        </svg>
                      </div>
                      <span className="anchorLink nav-span">Home</span>
                    </a>
                  </li>
                  <li className="list-group">
                    <a className="nav-link text-center" href="/network">
                      <div style={{ height: "24px" }}>
                        {/* <FontAwesomeIcon
                          icon={faPeopleGroup}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                          fill="rgba(0,0,0,0.6)"
                        >
                          <path d="m12 16v6h-9v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3zm5.5-3c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5v4.5h7v-4.5c0-1.4-1.1-2.5-2.5-2.5zm-11-13c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"></path>
                        </svg>
                      </div>
                      <span
                        className="anchorLink nav-span"
                        // style={{ width: "68px" }}
                      >
                        My Network
                      </span>
                    </a>
                  </li>
                  <li className="list-group">
                    <a className="nav-link text-center" href="/jobs">
                      <div style={{ height: "23px" }}>
                        {/* <FontAwesomeIcon
                          icon={faBriefcase}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          class="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                          style={{ color: "gray" }}
                        >
                          <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                        </svg>
                      </div>
                      <span className="anchorLink nav-span">Jobs</span>
                    </a>
                  </li>
                  <li className="list-group">
                    <a className="nav-link text-center" href="/messaging">
                      <div style={{ height: "23px" }}>
                        {/* <FontAwesomeIcon
                          icon={faCommentDots}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                          fill="rgba(0,0,0,0.6)"
                        >
                          <path d="M16 3H8C6.14348 3 4.36301 3.77847 3.05025 5.16416C1.7375 6.54984 1 8.42923 1 10.3889C1 12.3485 1.7375 14.2279 3.05025 15.6136C4.36301 16.9993 6.14348 17.7778 8 17.7778H12V22L20.16 16.3106C21.0512 15.639 21.7751 14.7495 22.2697 13.7183C22.7643 12.687 23.0148 11.5446 23 10.3889C23 8.42923 22.2625 6.54984 20.9497 5.16416C19.637 3.77847 17.8565 3 16 3ZM8 11.7083C7.75277 11.7083 7.5111 11.631 7.30554 11.486C7.09998 11.341 6.93976 11.1349 6.84515 10.8938C6.75054 10.6527 6.72579 10.3874 6.77402 10.1315C6.82225 9.87553 6.9413 9.64043 7.11612 9.4559C7.29093 9.27137 7.51366 9.14571 7.75614 9.0948C7.99861 9.04389 8.24995 9.07002 8.47835 9.16988C8.70676 9.26975 8.90199 9.43886 9.03934 9.65585C9.17669 9.87283 9.25 10.1279 9.25 10.3889C9.25 10.7388 9.1183 11.0744 8.88388 11.3219C8.64946 11.5693 8.33152 11.7083 8 11.7083ZM12 11.7083C11.7528 11.7083 11.5111 11.631 11.3055 11.486C11.1 11.341 10.9398 11.1349 10.8452 10.8938C10.7505 10.6527 10.7258 10.3874 10.774 10.1315C10.8222 9.87553 10.9413 9.64043 11.1161 9.4559C11.2909 9.27137 11.5137 9.14571 11.7561 9.0948C11.9986 9.04389 12.2499 9.07002 12.4784 9.16988C12.7068 9.26975 12.902 9.43886 13.0393 9.65585C13.1767 9.87283 13.25 10.1279 13.25 10.3889C13.25 10.7388 13.1183 11.0744 12.8839 11.3219C12.6495 11.5693 12.3315 11.7083 12 11.7083ZM16 11.7083C15.7528 11.7083 15.5111 11.631 15.3055 11.486C15.1 11.341 14.9398 11.1349 14.8452 10.8938C14.7505 10.6527 14.7258 10.3874 14.774 10.1315C14.8222 9.87553 14.9413 9.64043 15.1161 9.4559C15.2909 9.27137 15.5137 9.14571 15.7561 9.0948C15.9986 9.04389 16.2499 9.07002 16.4784 9.16988C16.7068 9.26975 16.902 9.43886 17.0393 9.65585C17.1767 9.87283 17.25 10.1279 17.25 10.3889C17.25 10.7388 17.1183 11.0744 16.8839 11.3219C16.6495 11.5693 16.3315 11.7083 16 11.7083Z"></path>
                        </svg>
                      </div>
                      <span className="anchorLink nav-span">Messaging</span>
                    </a>
                  </li>
                  <li className="list-group">
                    <a className="nav-link text-center" href="/notifications">
                      <div style={{ height: "23px" }}>
                        {/* <FontAwesomeIcon
                          icon={faBell}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                          fill="rgba(0,0,0,0.6)"
                        >
                          <path d="M13.7 19C13.9 19.3 14 19.6 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 19.6 10.1 19.3 10.3 19H2V18C2 17 2.4 16.1 3.2 15.2L4.2 14H19.9L20.9 15.2C21.7 16.2 22.1 17.1 22.1 18V19H13.7ZM18.2 7.4C17.8 4.3 15.1 2 12 2C8.9 2 6.2 4.3 5.8 7.4L5 13H19L18.2 7.4Z"></path>
                        </svg>
                      </div>
                      <span className="anchorLink nav-span">Notification</span>
                    </a>
                  </li>
                  <li className="list-group dropdown-menu-end">
                    <a
                      className="nav-link text-center"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <div style={{ height: "25px" }}>
                        {/* <FontAwesomeIcon
                          icon={faUser}
                          style={{
                            color: "#717171",
                            width: "1.3rem",
                            height: "1.3rem",
                          }}
                        /> */}
                        <img
                          className="nav-user"
                          src="/images/user.svg"
                          alt=""
                        />
                      </div>
                      <span className="anchorLink nav-span">
                        Me
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          data-supported-dps="16x16"
                        >
                          <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                        </svg>
                      </span>
                    </a>
                    <ul className="dropdown-menu">
                      <div className="dropdown-section">
                        <div>
                          <img
                            className="nav-user-dropdown mx-2"
                            src="/images/user.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5>Abdulrahman Ibrahim</h5>
                          <p>
                            Software Engineering | Full-Stack Web-developer &
                            App-developer |
                          </p>
                        </div>
                      </div>
                      <button
                        className="btn btn-outline-secondary rounded-pill fw-light mx-2 align-items-center justify-content-center d-flex"
                        style={{ width: "94%", height: "25px" }}
                      >
                        View Profile
                      </button>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <h6 className="fw-bold ms-3 mt-3">Account</h6>
                      <li>
                        <a
                          className="text-decoration-none fw-light ms-2"
                          href="#"
                        >
                          Settings & Privacy
                        </a>
                      </li>
                      <li className="my-1">
                        <a
                          className="text-decoration-none fw-light ms-2"
                          href="#"
                        >
                          Help
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          className="text-decoration-none fw-light ms-2"
                          href="#"
                        >
                          Language
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <h6 className="fw-bold ms-3 mt-3">Manage</h6>
                      <li className="mb-1">
                        <a
                          className="text-decoration-none fw-light ms-2"
                          href="#"
                        >
                          Posts & Activity
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          className="text-decoration-none fw-light ms-2"
                          href="#"
                        >
                          Job Postig Account
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="my-1">
                        <a
                          className="text-decoration-none fw-light ms-2"
                          href="#"
                        >
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </li>
                  <div className="d-flex" style={{ height: "50px" }}>
                    <div className="vr"></div>
                  </div>
                  <div
                    className="d-flex nav-work-icon"
                    id="navbarScroll"
                    // style={{ height: "2.3rem" }}
                  >
                    <li className="list-group dropdown">
                      <a
                        className="nav-link text-center dropdow-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div style={{ height: "23px" }}>
                          {/* <FontAwesomeIcon
                            icon={faGrip}
                            style={{
                              color: "#717171",
                              width: "1.4rem",
                              height: "1.4rem",
                            }}
                          /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="currentColor"
                            class="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                            style={{ color: "gray" }}
                          >
                            <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                          </svg>
                        </div>
                        <span className="anchorLink nav-span">
                          For Business
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            data-supported-dps="16x16"
                          >
                            <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                          </svg>
                        </span>
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="list-group li-nav">
                      <a className="nav-link" href="#">
                        <span
                          className="anchorLink nav-span text-center"
                          style={{ width: "100px" }}
                        >
                          Get hired faster. Try Premium free.
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <div>
          {/* -------------- Main Grid Section ---------------  */}
          <div class="container text-center mt-3">
            <div class="row justify-content-center">
              <div
                class="col-md-2 mb-5 bg-white "
                style={{
                  height: "390px",
                  // width: "230px",
                  borderRadius: "10px",
                }}
              >
                1 of 3
              </div>
              <div
                class="col-md-5 mx-3 bg-white"
                style={{
                  height: "120px",
                  // width: "670px",
                  borderRadius: "10px",
                }}
              >
                2 of 3 (Messaging)
              </div>
              <div
                class="col-md-3 d-none d-lg-block bg-white"
                style={{
                  height: "400px",
                  borderRadius: "10px",
                }}
              >
                3 of 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messaging;
