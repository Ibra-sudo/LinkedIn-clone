import React from "react";

function Profile() {
  return (
    <>
      <header>
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <a href="#">
            <div>
              <div>
                <li-icon>svg</li-icon>
              </div>
            </div>
          </a>
          <div className="searchba">
            <div className="searchba">
              <div className="searchbar">
                <input type="text" />
                <div>svg</div>
              </div>
            </div>
          </div>
          <nav>
            <ul className="d-flex">
              <li
                className="list-group"
                style={{ width: "80px", height: "62px" }}
              >
                <a className="nav-link text-center" href="">
                  <div>
                    <div>
                      <li-icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                          style={{ color: "gray" }}
                        >
                          <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </div>
                  <span>Home</span>
                </a>
              </li>
              <li
                className="list-group"
                style={{ width: "80px", height: "62px" }}
              >
                <a className="nav-link text-center" href="">
                  <div>
                    <div>
                      <li-icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                          fill="rgba(0,0,0,0.6)"
                        >
                          <path d="m12 16v6h-9v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3zm5.5-3c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5v4.5h7v-4.5c0-1.4-1.1-2.5-2.5-2.5zm-11-13c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </div>
                  <span>My Network</span>
                </a>
              </li>
              <li
                className="list-group"
                style={{ width: "80px", height: "62px" }}
              >
                <a className="nav-link text-center" href="">
                  <div>
                    <div>
                      <li-icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                          style={{ color: "gray" }}
                        >
                          <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </div>
                  <span>Jobs</span>
                </a>
              </li>
              <li
                className="list-group"
                style={{ width: "80px", height: "62px" }}
              >
                <a className="nav-link text-center" href="">
                  <div>
                    <div>
                      <li-icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                          fill="rgba(0,0,0,0.6)"
                        >
                          <path d="M16 3H8C6.14348 3 4.36301 3.77847 3.05025 5.16416C1.7375 6.54984 1 8.42923 1 10.3889C1 12.3485 1.7375 14.2279 3.05025 15.6136C4.36301 16.9993 6.14348 17.7778 8 17.7778H12V22L20.16 16.3106C21.0512 15.639 21.7751 14.7495 22.2697 13.7183C22.7643 12.687 23.0148 11.5446 23 10.3889C23 8.42923 22.2625 6.54984 20.9497 5.16416C19.637 3.77847 17.8565 3 16 3ZM8 11.7083C7.75277 11.7083 7.5111 11.631 7.30554 11.486C7.09998 11.341 6.93976 11.1349 6.84515 10.8938C6.75054 10.6527 6.72579 10.3874 6.77402 10.1315C6.82225 9.87553 6.9413 9.64043 7.11612 9.4559C7.29093 9.27137 7.51366 9.14571 7.75614 9.0948C7.99861 9.04389 8.24995 9.07002 8.47835 9.16988C8.70676 9.26975 8.90199 9.43886 9.03934 9.65585C9.17669 9.87283 9.25 10.1279 9.25 10.3889C9.25 10.7388 9.1183 11.0744 8.88388 11.3219C8.64946 11.5693 8.33152 11.7083 8 11.7083ZM12 11.7083C11.7528 11.7083 11.5111 11.631 11.3055 11.486C11.1 11.341 10.9398 11.1349 10.8452 10.8938C10.7505 10.6527 10.7258 10.3874 10.774 10.1315C10.8222 9.87553 10.9413 9.64043 11.1161 9.4559C11.2909 9.27137 11.5137 9.14571 11.7561 9.0948C11.9986 9.04389 12.2499 9.07002 12.4784 9.16988C12.7068 9.26975 12.902 9.43886 13.0393 9.65585C13.1767 9.87283 13.25 10.1279 13.25 10.3889C13.25 10.7388 13.1183 11.0744 12.8839 11.3219C12.6495 11.5693 12.3315 11.7083 12 11.7083ZM16 11.7083C15.7528 11.7083 15.5111 11.631 15.3055 11.486C15.1 11.341 14.9398 11.1349 14.8452 10.8938C14.7505 10.6527 14.7258 10.3874 14.774 10.1315C14.8222 9.87553 14.9413 9.64043 15.1161 9.4559C15.2909 9.27137 15.5137 9.14571 15.7561 9.0948C15.9986 9.04389 16.2499 9.07002 16.4784 9.16988C16.7068 9.26975 16.902 9.43886 17.0393 9.65585C17.1767 9.87283 17.25 10.1279 17.25 10.3889C17.25 10.7388 17.1183 11.0744 16.8839 11.3219C16.6495 11.5693 16.3315 11.7083 16 11.7083Z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </div>
                  <span>Messaging</span>
                </a>
              </li>
              <li
                className="list-group"
                style={{ width: "80px", height: "62px" }}
              >
                <a className="nav-link text-center" href="">
                  <div>
                    <div>
                      <li-icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                          fill="rgba(0,0,0,0.6)"
                        >
                          <path d="M13.7 19C13.9 19.3 14 19.6 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 19.6 10.1 19.3 10.3 19H2V18C2 17 2.4 16.1 3.2 15.2L4.2 14H19.9L20.9 15.2C21.7 16.2 22.1 17.1 22.1 18V19H13.7ZM18.2 7.4C17.8 4.3 15.1 2 12 2C8.9 2 6.2 4.3 5.8 7.4L5 13H19L18.2 7.4Z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </div>
                  <span>Notification</span>
                </a>
              </li>
              <li
                className="list-group"
                style={{ width: "80px", height: "62px" }}
              >
                <a className="nav-link text-center" href="">
                  <div>
                    <div>
                      <li-icon>
                        <img
                          className="nav-user"
                          src="/images/user.svg"
                          alt=""
                        />
                      </li-icon>
                    </div>
                  </div>
                  <span>Me</span>
                </a>
              </li>
              <div className="d-flex" style={{ height: "50px" }}>
                <div className="vr"></div>
              </div>
              <li
                className="list-group"
                style={{ width: "113px", height: "62px" }}
              >
                <a className="nav-link text-center" href="">
                  <div>
                    <div>
                      <li-icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                          style={{ color: "gray" }}
                        >
                          <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </div>
                  <span>For Busniess</span>
                </a>
              </li>
              <li
                className="list-group"
                style={{ width: "100px", height: "62px" }}
              >
                <a className="nav-link text-center" href="">
                  <div>
                    <div>
                      <li-icon></li-icon>
                    </div>
                  </div>
                  <span>Get hired faster. Try Premium free.</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Profile;
