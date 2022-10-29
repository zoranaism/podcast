import React from "react";

export default function Payment(props) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 justify-content-center">
          <h2 className="mb-3">Donate now!</h2>
        </div>

        <div className="col-md-4"></div>
        <div
          className="col-12 col-md-2 justify-content-center mb-3"
          style={{ textAlign: "center" }}
        >
          <a
            href="https://www.ing.nl/particulier/betaalverzoek/index.html?trxid=HBqs0BNqwreqI6Wi8HNFXTIolsY4jv66"
            style={{ display: "block" }}
          >
            <img
              src="img/Jana/ING.png"
              style={{ maxWidth: "155px", width: "100%" }}
              alt="ING"
            />
          </a>
        </div>
        <div
          className="col-12 col-md-2 justify-content-center"
          style={{ textAlign: "center" }}
        >
          <a
            href="https://paypal.me/stellarsoundpodcast?locale.x=en_US"
            style={{ display: "block" }}
          >
            <img
              src="img/Jana/paypal.png"
              style={{ maxWidth: "155px", width: "100%" }}
              alt="ING"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
