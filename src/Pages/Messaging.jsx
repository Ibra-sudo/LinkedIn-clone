import React from "react";
import { NavbarMessaging } from "../Components/NavbarComponent";

function Messaging() {
  return (
    <>
      <div className="App bg">
        <NavbarMessaging />
        <div>
          {/* -------------- Main Grid Section ---------------  */}
          <div className="container text-center mt-3">
            <div className="row justify-content-center">
              <div
                className="col-md-2 mb-5 bg-white "
                style={{
                  height: "390px",
                  // width: "230px",
                  borderRadius: "10px",
                }}
              >
                1 of 3
              </div>
              <div
                className="col-md-5 mx-3 bg-white"
                style={{
                  height: "120px",
                  // width: "670px",
                  borderRadius: "10px",
                }}
              >
                2 of 3 (Messaging)
              </div>
              <div
                className="col-md-3 d-none d-lg-block bg-white"
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
