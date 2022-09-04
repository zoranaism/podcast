import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div>
      <footer
        className="footer nj-footer nj-animated-section"
        id="nj-contact"
        data-scroll-to-top-style="light"
      >
        <div className="container" id="footer-items">
          <div className="nj-footer-socials">
            <span className="text-center d-flex justify-content-center align-items-center">
              {currentYear} Stellar Sound Podcast   
              <FontAwesomeIcon
                icon={faCopyright}
                style={{ fontSize: ".75rem", marginLeft: "4px" }}
              />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
