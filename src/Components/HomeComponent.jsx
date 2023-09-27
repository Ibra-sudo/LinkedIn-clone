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
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container">
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

              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
            <div
              className="collapse navbar-collapse justify-content-end"
              style={{ height: "3rem" }}
              id="navbarScroll"
            >
              <ul
                className="navbar-nav my-2 my-lg-0 navbar-nav-scroll"
                // style={{"--bs-scroll-height: 100px"}}
                // style={{ height: "3rem" }}
              >
                <li
                  className="nav-item"
                  // style={{ width: "70px", height: "10px" }}
                >
                  {/* <i class="fa-solid fa-house" style="color: #474747;"></i> */}

                  <a
                    className="nav-link text-center active"
                    aria-current="page"
                    href="#"
                    // style={{ height: "3rem" }}
                  >
                    <div>
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
                <li
                  className="nav-item"
                  // style={{ width: "120px", height: "80px" }}
                >
                  <a className="nav-link text-center" href="#">
                    <div>
                      <FontAwesomeIcon
                        icon={faPeopleGroup}
                        style={{
                          color: "#717171",
                          width: "1.4rem",
                          height: "1.4rem",
                        }}
                      />
                    </div>
                    <span className="anchorLink">My Network</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" aria-disabled="true">
                    <div>
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
                  <a className="nav-link text-center" aria-disabled="true">
                    <div>
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
                  <a className="nav-link text-center" aria-disabled="true">
                    <div>
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
                <li className="nav-item">
                  <a className="nav-link text-center" aria-disabled="true">
                    <div>
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{
                          color: "#717171",
                          width: "1.4rem",
                          height: "1.4rem",
                        }}
                      />
                    </div>
                    <span className="anchorLink">Me</span>
                  </a>
                </li>
                <div className="collapse navbar-collapse" id="navbarScroll">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link text-center dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div>
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
                  <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">
                      <span className="anchorLink">
                        Get hired faster. Try Premium free.
                      </span>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
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
