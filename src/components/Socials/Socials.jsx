import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

export default function Socials(props) {
  return (
    <div className="newsletter col-12">
      {/* <div data-anim-queue="1" data-anim-type="fade_in_up">
                  <div className="py-2">
                    <FontAwesomeIcon icon={faPhoneAlt} /> +31684359770
                  </div>
                </div>
                <div data-anim-queue="2" data-anim-type="fade_in_up">
                  <div className="py-2">
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    stellarsoundpodcast@gmail.com
                  </div>
                </div>
                <div data-anim-queue="3" data-anim-type="fade_in_up">
                  <div className="py-2">
                    <FontAwesomeIcon icon={faLocationArrow} /> Den Bosch,
                    Netherlands
                  </div>
                </div> */}
      <div className="row">
        <div data-anim-queue="3" data-anim-type="fade_in_up">
          <div className="py-2">
            <a
              data-cursor-effect="exclusion"
              href="https://www.facebook.com/Stellar-Sound-Podcast-119521773289334"
            >
              {" "}
              <FontAwesomeIcon
                icon={["fab", "facebook-square"]}
                className="ContactFontAwsome"
              />{" "}
            </a>
          </div>
        </div>
        <div data-anim-queue="3" data-anim-type="fade_in_up">
          <div className="py-2">
            <a
              data-cursor-effect="exclusion"
              href="https://www.instagram.com/stellarsoundpodcast/"
            >
              {" "}
              <FontAwesomeIcon
                icon={["fab", "instagram-square"]}
                className="ContactFontAwsome"
              />{" "}
            </a>
          </div>
        </div>
        <div data-anim-queue="3" data-anim-type="fade_in_up">
          <div className="py-2">
            <a
              data-cursor-effect="exclusion"
              href="https://www.linkedin.com/company/72044553/"
            >
              {" "}
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="ContactFontAwsome"
              />{" "}
            </a>
          </div>
        </div>
        <div data-anim-queue="3" data-anim-type="fade_in_up">
          <div className="py-2">
            <a
              data-cursor-effect="exclusion"
              href="https://twitter.com/SoundStellar"
            >
              {" "}
              <FontAwesomeIcon
                icon={["fab", "twitter-square"]}
                className="ContactFontAwsome"
              />{" "}
            </a>
          </div>
        </div>
        <div data-anim-queue="3" data-anim-type="fade_in_up">
          <div className="py-2">
            <a
              data-cursor-effect="exclusion"
              href="https://twitter.com/SoundStellar"
            >
              {" "}
              <FontAwesomeIcon
                icon={["fab", "pinterest-square"]}
                className="ContactFontAwsome"
              />{" "}
            </a>
          </div>
        </div>
        <div data-anim-queue="3" data-anim-type="fade_in_up">
          <div className="py-2">
            <a
              data-cursor-effect="exclusion"
              href="https://www.tiktok.com/@stellarsoundpodcast?is_from_webapp=1&sender_device=pc"
            >
              {" "}
              <img
                className="ContactFontAwsome tiktok-icon"
                src="img/icons/tiktok.webp"
                alt="Tiktok icon"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
