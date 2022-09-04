import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hosts() {
  return (
    <div className="section nj-dark-section" id="team-section">
      <div className="nj-section-header mb-5">
        <h1 className="nj-section-header-title">Stellar Sound Podcast Hosts</h1>
      </div>

      <div className="container mb-5">
        <div className="row fourth">
          <div
            className="card mb-3 col-lg-3 col-12"
            style={{ marginTop: "0px", border: "none" }}
          >
            <div className="img-box" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="img/hosts/Radina-Dimcheva.webp"
                alt="Radina"
              />
              <ul>
                <a
                  target="blank"
                  href="https://www.facebook.com/RadinaTheTheaterEquation"
                  data-cursor-effect="hover"
                >
                  <li>
                    <FontAwesomeIcon
                      icon={["fab", "facebook"]}
                    ></FontAwesomeIcon>
                  </li>
                </a>
                <a
                  target="blank"
                  href="https://www.youtube.com/user/kukundrela"
                  data-cursor-effect="hover"
                >
                  <li>
                    <FontAwesomeIcon
                      icon={["fab", "youtube"]}
                    ></FontAwesomeIcon>
                  </li>
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/radina_artsy_chameleon/"
                  data-cursor-effect="hover"
                >
                  <li>
                    <FontAwesomeIcon
                      icon={["fab", "instagram"]}
                    ></FontAwesomeIcon>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <div className="card-body col-lg-8 col-12 p-3">
            <h5 className="card-title">RADINA DIMCHEVA</h5>
            <p
              className="card-text card-text-host"
              style={{ fontWeight: "400" }}
            >
              "I call myself an artsy chameleon; everything creative would spark
              my interest. What brings me joy and meaning is being able to
              connect with people in a deep way over a certain topic; if that is
              related to art and music - even more so! I feel like singing
              allows me to express that in the best way. Currently, I am part of
              two bands, and the idea to join the Stellar Sound Podcast felt
              only natural. In my daily job, I am used to interviewing people,
              so I’m looking forward to all the insights we will gather. By
              education, I am a psychologist, and by heart - a creative,
              vocalist, and overall artistic and empathetic person."
            </p>

            <div className="nj-read-more-button-wrapper">
              <a
                className="nj-button nj-button-white"
                href="radina"
                data-cursor-effect="exclusion"
              >
                Find out more
              </a>
            </div>
          </div>
          <div
            className="card mb-3 col-lg-3 col-12"
            style={{ marginTop: "0px", border: "none" }}
          >
            <div className="img-box" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src="img/hosts/Leanri-Paulsen.webp"
                alt="Leanri"
              />
              <ul>
                <a
                  target="blank"
                  href="https://www.twitch.tv/vaakriin"
                  data-cursor-effect="hover"
                >
                  <li>
                    <FontAwesomeIcon icon={["fab", "twitch"]}></FontAwesomeIcon>
                  </li>
                </a>
                <a
                  target="blank"
                  href="https://www.youtube.com/channel/UCtaUa59vPbUIp_Y38f2Ca4w?app=desktop"
                  data-cursor-effect="hover"
                >
                  <li>
                    <FontAwesomeIcon
                      icon={["fab", "youtube"]}
                    ></FontAwesomeIcon>
                  </li>
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/davidp4141/"
                  data-cursor-effect="hover"
                >
                  <li>
                    <FontAwesomeIcon
                      icon={["fab", "instagram"]}
                    ></FontAwesomeIcon>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <div className="card-body col-lg-8 col-12 p-3">
            <h5 className="card-title">LEANRI PAULSEN</h5>
            <p
              className="card-text card-text-host"
              style={{ fontWeight: "400" }}
            >
              "Hey all, I am Leanri Paulsen. On my social platforms, I describe
              myself as a music teacher, book geek, occasional hermit, and an
              unobstructed unconventional non-traditional utilitarian. Music has
              always been a part of my existence, from early piano lessons to
              sponging up whichever 8-Track tape my parents would stuff into the
              stereo. This addiction fueled a passion that drove me to finish a
              postgraduate degree in music and continue on as a music teacher in
              my native Namibia. Music and the creative arts have opened many
              doors for me and have even led me to indulge in other outlets such
              as writing and video editing (see my socials). These days,
              however, you can find me streaming from my home in The
              Netherlands, chilling with the furkids and lapping up interesting
              YouTube finds. "
            </p>

            <div className="nj-read-more-button-wrapper">
              <a
                className="nj-button nj-button-white"
                href="leanri"
                data-cursor-effect="exclusion"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
