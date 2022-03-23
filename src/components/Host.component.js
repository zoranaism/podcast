import React from "react";


export default function HostComponent({
  name,
  imagePath,
  facebook,
  instagram,
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
        className="nj-section-header-episodes"
        style={{
          marginTop: "80px",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h1 className="nj-section-header-title-episodes pt-120px">{name}</h1>

        <ul style={{ display: "flex" }}>
          <a target="_blank" rel='noopener noreferrer' href={facebook} data-cursor-effect="hover">
            <li>
              {/* <i className="fab fa-facebook" /> */}
              <img src="" alt="" />
            </li>
          </a>
          <a target="_blank" rel='noopener noreferrer' href={youtubeLink} data-cursor-effect="hover">
            <li>
              {/* <i className="fab fa-youtube"></i> */}
              <img src="" alt="" />
            </li>
          </a>
          <a target="_blank" rel='noopener noreferrer' href={instagram} data-cursor-effect="hover">
            <li>
              {/* <i className="fab fa-instagram"></i> */}
              <img src="" alt="" />
            </li>
          </a>

          <a target="_blank" rel='noopener noreferrer' href={otherSocial} data-cursor-effect="hover">
            <li>
              {/* <i className="fab fa-twitter"></i> */}
              <img src='/src/assets/img/social-icons/twitter_logo_icon.png' alt="" />
            </li>
          </a>
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
