import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

export default function Info() {
  return (
    <div id="info">
      <p>General inquries</p>
      <div className="row">
        <FontAwesomeIcon
          style={{ marginTop: "8px", marginRight: "15px" }}
          icon={faEnvelope}
        />
        <p>stellarsoundpodcast@gmail.com</p>
      </div>
      <p>For Partnerships</p>
      <div className="row">
        <FontAwesomeIcon
          style={{ marginTop: "8px", marginRight: "15px" }}
          icon={faEnvelope}
        />
        <p>stellarsoundpartnerships@gmail.com</p>
      </div>
      <p>For funds and sponsorships</p>
      <div className="row">
        <FontAwesomeIcon
          style={{ marginTop: "8px", marginRight: "15px" }}
          icon={faEnvelope}
        />
        <p>stellarsoundfunds@gmail.com</p>
      </div>
      <p>Volunteers</p>
      <div className="row">
        <FontAwesomeIcon
          style={{ marginTop: "8px", marginRight: "15px" }}
          icon={faEnvelope}
        />
        <p>stellarsoundhr@gmail.com</p>
      </div>
      <p className="mt-4">Location</p>

      <div className="row">
        <FontAwesomeIcon
          style={{ marginTop: "8px", marginRight: "15px" }}
          icon={faLocationArrow}
        />
        <p style={{ color: "white" }}>Den Bosch, Netherlands</p>
      </div>
      <p className="mt-4">Socials</p>
    </div>
  );
}
