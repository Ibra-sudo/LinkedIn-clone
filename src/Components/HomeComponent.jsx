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
        <header className="">
          <div className="p-2 d-flex bg-white">
            <a className="ms-3" href="#">
              <img src={FaviconLogo} alt="" width="47" height="47" />
            </a>
            {/* <form className="" role="search"> */}
            {/* <div className=""> */}
            <div className=" searchbar">
              <div className="d-flex align-items-center ">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    color: "#717171",
                    width: "1rem",
                    height: "1rem",
                  }}
                />
              </div>
              <input
                className=""
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ height: "2.2rem" }}
              />
            </div>
            {/* </div> */}
            {/* </form> */}
            <nav className="d-flex bg-white">
              <div className=" " style={{ height: "3rem", width: "100%" }}>
                {/* <div
                  // collapse navbar-collapse
                  className="container d-flex "
                  // style={{ height: "4rem" }}
                  // id="navbarScroll"
                > */}
                {/* <div className="container d- justify-content-end"> */}
                <ul
                  className="align-items-center ul-nav"
                  style={{ height: "2.8rem", width: "100%" }}
                  // style={{ width: "100%" }}
                >
                  <li className="list-group text-center search-icon li-nav">
                    <a
                      className="nav-link "
                      // aria-current="page"
                      href="#"
                    >
                      <div className="" style={{ height: "21px" }}>
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          style={{
                            color: "#717171",
                            width: "1.2rem",
                            height: "1.2rem",
                          }}
                        />
                      </div>
                      <span className="anchorLink">Search</span>
                    </a>
                  </li>
                  <li className="list-group text-center li-nav">
                    <a className="nav-link active" aria-current="page" href="#">
                      <div className="" style={{ height: "21px" }}>
                        <FontAwesomeIcon
                          icon={faHome}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        />
                      </div>
                      <span className="anchorLink">Home</span>
                    </a>
                  </li>
                  <li className="list-group li-nav">
                    <a className="nav-link text-center" href="#">
                      <div style={{ height: "21px" }}>
                        <FontAwesomeIcon
                          icon={faPeopleGroup}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        />
                      </div>
                      <span
                        className="anchorLink"
                        // style={{ width: "68px" }}
                      >
                        My Network
                      </span>
                    </a>
                  </li>
                  <li className="list-group li-nav">
                    <a className="nav-link text-center" href="#">
                      <div style={{ height: "21px" }}>
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        />
                      </div>
                      <span className="anchorLink">Jobs</span>
                    </a>
                  </li>
                  <li className="list-group li-nav">
                    <a className="nav-link text-center" href="#">
                      <div style={{ height: "21px" }}>
                        <FontAwesomeIcon
                          icon={faCommentDots}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        />
                      </div>
                      <span className="anchorLink">Messaging</span>
                    </a>
                  </li>
                  <li className="list-group li-nav">
                    <a className="nav-link text-center" href="#">
                      <div style={{ height: "21px" }}>
                        <FontAwesomeIcon
                          icon={faBell}
                          style={{
                            color: "#717171",
                            width: "1.4rem",
                            height: "1.4rem",
                          }}
                        />
                      </div>
                      <span className="anchorLink">Notification</span>
                    </a>
                  </li>
                  <li className="list-group li-nav">
                    <a className="nav-link text-center" href="#">
                      <div style={{ height: "20px" }}>
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{
                            color: "#717171",
                            width: "1.3rem",
                            height: "1.3rem",
                          }}
                        />
                      </div>
                      <span className="anchorLink px-1">Me</span>
                    </a>
                  </li>
                  <div
                    className="d-flex"
                    id="navbarScroll"
                    style={{ height: "1.6rem" }}
                  >
                    <li className="list-group dropdown li-nav">
                      <a
                        className="nav-link text-center dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div style={{ height: "21px" }}>
                          <FontAwesomeIcon
                            icon={faGrip}
                            style={{
                              color: "#717171",
                              width: "1.4rem",
                              height: "1.4rem",
                            }}
                          />
                        </div>
                        <span className="anchorLink">For Business</span>
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
                          // style={{ width: "100px" }}
                        >
                          Get hired faster. Try Premium free.
                        </span>
                      </a>
                    </li>
                  </div>
                </ul>
                {/* </div> */}
                {/* </div> */}
                {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
              </div>
            </nav>
          </div>
        </header>
        <div></div>
        {/* <div class="container text-center" style={{ marginTop: "-15px" }}>
          <div class="row" style={{ justifyContent: "space-evenly" }}>
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
              class="col-md-6 bg-white"
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
        </div> */}
      </div>
    </>
  );
}

export default HomeComponent;
