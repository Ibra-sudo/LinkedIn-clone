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
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container" style={{ height: "3rem" }}>
            <div className="" style={{ width: "3rem" }}>
              <a className="navbar-brand" href="#">
                <img src={FaviconLogo} alt="" width="47" height="47" />
              </a>
            </div>

            <form className="" role="search">
              <div className="">
                <div className="d-flex searchbar">
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
              </div>
            </form>
            <div
              className="container collapse navbar-collapse justify-content-end"
              style={{ height: "4rem" }}
              id="navbarScroll"
            >
              <div className="container collapse navbar-collapse justify-content-end">
                <ul
                  className="navbar-nav my-2 my-lg-0 navbar-nav-scroll align-items-center"
                  style={{ height: "4rem" }}
                >
                  <li className="nav-item text-center px-3">
                    <a
                      className="nav-link  active"
                      aria-current="page"
                      href="#"
                    >
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
                  <li className="nav-item">
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
                      <span className="anchorLink" style={{ width: "68px" }}>
                        My Network
                      </span>
                    </a>
                  </li>
                  <li className="nav-item px-3">
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
                  <li className="nav-item">
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
                  <li className="nav-item">
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
                  <li className="nav-item px-3">
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
                    className="container collapse navbar-collapse"
                    id="navbarScroll"
                    style={{ height: "4rem" }}
                  >
                    <li className="nav-item dropdown pt-3">
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
                    <li className="nav-item pt-1">
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
            </div>
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
        <div class="container text-center" style={{ marginTop: "-15px" }}>
          <div class="row" style={{ justifyContent: "space-evenly" }}>
            <div
              class="col-md-2 bg-white "
              style={{
                height: "200px",
                width: "230px",
                borderRadius: "10px",
              }}
            >
              1 of 3
            </div>
            <div
              class="col-md-6 bg-white p-3"
              style={{
                height: "300px",
                width: "670px",
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
    </>
    // <div>
    //   <Link className="text-white text-decoration-none" to={{ pathname: "/" }}>
    //     <button
    //       // onClick={signout}
    //       type="submit"
    //       className="btn btn-primary btn-lg rounded-pill fw-bold"
    //       style={{ height: "3.5rem" }}
    //     >
    //       Log out
    //     </button>
    //   </Link>
    // </div>
  );
}

export default HomeComponent;
