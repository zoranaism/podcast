import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HostComponent({
  name,
  imagePath,
  facebook,
  instagram,
  twitch,
  otherSocial,
  youtubeLink,
  embedYT,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
}) {
  return (
    <div>
      <div
        className="nj-section-header-episodes host-header"
        style={{
          marginTop: "80px",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h1 className="nj-section-header-title-episodes pt-120px">{name}</h1>

        <ul className="host-component__list" style={{ display: "flex" }}>
          <a target="_blank" href={facebook.length !== 0 ? facebook : twitch} data-cursor-effect="hover">
            <li>
              <FontAwesomeIcon icon={["fab", `${facebook.length !== 0 ? "facebook" : "twitch"}`] } ></FontAwesomeIcon>
            </li>
          </a>
          <a target="_blank" href={youtubeLink} data-cursor-effect="hover">
            <li>
              <FontAwesomeIcon icon={["fab", "youtube"] } ></FontAwesomeIcon>
            </li>
          </a>
          <a target="_blank" href={instagram} data-cursor-effect="hover">
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"] } ></FontAwesomeIcon>
            </li>
          </a>

          {otherSocial.length !== 0 && <a target="_blank" href={otherSocial} data-cursor-effect="hover">
          <li>
              <FontAwesomeIcon icon={["fab", "soundcloud"] } ></FontAwesomeIcon>
            </li>
          </a>}
        </ul>
      </div>

      <div className="row fourth">
        <div
          className="card mb-3 col-lg-4 col-12"
          style={{ marginTop: "0px", border: "none" }}
        >
          <div className="img-box">
            <img className="card-img-top" src={imagePath} alt="host" />
          </div>
        </div>

        <div className="card-body col-lg-8 col-12 p-3">
          <p
            className="card-text card-text-host"
            style={{
              fontWeight: "400",
              color: "#212529",
              textAlign: "justify",
            }}
          >
            {description1}
          </p>
          <p
            className="card-text card-text-host"
            style={{
              fontWeight: "400",
              color: "#212529",
              textAlign: "justify",
            }}
          >
            {description2}
          </p>
        </div>
      </div>

      <div className="video-container">
        <br />
        <iframe
          width="100%"
          height="350"
          src={embedYT}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="row mb-5" style={{ textAlign: "justify" }}>
        <div className="col-12">
          <p className="nj-section-content">{description3}</p>
        </div>

        <div className="col-12">
          <p className="nj-section-content">{description4}</p>
        </div>
        <div className="col-12">
          <p className="nj-section-content">{description5}</p>
        </div>
        <div className="col-12">
          <p className="nj-section-content">{description6}</p>
        </div>
      </div>
    </div>
  );
}
