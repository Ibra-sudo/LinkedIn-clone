import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHome,
  faHouseChimney,
  faPeopleGroup,
  faBriefcase,
  faBusinessTime,
  faCommentDots,
  faComments,
  faBell,
  faUser,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";
// import { signout } from "../Api/firebaseAuth";

import FaviconLogo from "../assets/favicon.png";

function HomeComponent() {
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
                <img src="/images/search-icon.svg" alt="" />
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
                      className="nav-link "
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
                      <span className="anchorLink">Search</span>
                    </a>
                  </li>
                  <li className="list-group text-center">
                    <a className="nav-link active" aria-current="page" href="#">
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
                      <span className="anchorLink">Home</span>
                    </a>
                  </li>
                  <li className="list-group">
                    <a className="nav-link text-center" href="#">
                      <div style={{ height: "23px" }}>
                        {/* <FontAwesomeIcon
                          icon={faPeopleGroup}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        /> */}
                        <img src="/images/nav-network-gray.svg" alt="" />
                      </div>
                      <span
                        className="anchorLink"
                        // style={{ width: "68px" }}
                      >
                        My Network
                      </span>
                    </a>
                  </li>
                  <li className="list-group">
                    <a className="nav-link text-center" href="#">
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
                      <span className="anchorLink">Jobs</span>
                    </a>
                  </li>
                  <li className="list-group">
                    <a className="nav-link text-center" href="#">
                      <div style={{ height: "23px" }}>
                        {/* <FontAwesomeIcon
                          icon={faCommentDots}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        /> */}
                        <img src="/images/nav-messaging-gray.svg" alt="" />
                      </div>
                      <span className="anchorLink">Messaging</span>
                    </a>
                  </li>
                  <li className="list-group">
                    <a className="nav-link text-center" href="#">
                      <div style={{ height: "23px" }}>
                        {/* <FontAwesomeIcon
                          icon={faBell}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        /> */}
                        <img src="/images/nav-notifications-gray.svg" alt="" />
                      </div>
                      <span className="anchorLink">Notification</span>
                    </a>
                  </li>
                  <li className="list-group">
                    <a className="nav-link text-center" href="#">
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
                      <span className="anchorLink px-1">Me</span>
                    </a>
                  </li>
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
                        <span className="anchorLink">
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
                          className="anchorLink text-center"
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
                2 of 3 (wider)
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

export default HomeComponent;
