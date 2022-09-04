import React from "react";
import Socials from "../../../components/Socials/Socials";

export default function Banner(props) {
  return (
    <>
      <div className="nj-hero-body">
        <div className="container">
          <div className="nj-hero-title-wrapper">
            <div className="row justify-content-center">
              <div className="col-md-7 justify-content-center">
                <div className="mb-5 text-center">
                  <img
                    src="./img/logo/onlyLogo.webp"
                    className="mt-5"
                    style={{ width: "150px" }}
                    alt="logo"
                  />
                  <img
                    src="./img/logo/textStellarSound.webp"
                    style={{
                      maxWidth: "500px",
                      width: "100%",
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                    alt="Logo Text"
                  />
                  <img
                    src="./img/logo/textPodcast.webp"
                    className="mb-5"
                    style={{ width: "200px" }}
                    alt="Logo Text"
                  />

                  <h4
                    className="text-center mb-3 font-italic mr-1"
                    style={{ fontFamily: "sans-serif", fontWeight: "400" }}
                  >
                    Empowering creative musicians
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="center-socials">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
