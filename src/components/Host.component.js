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
          <a target="_blank" href={facebook} data-cursor-effect="hover">
            <li>
              <i className="fab fa-facebook" />
            </li>
          </a>
          <a target="_blank" href={youtubeLink} data-cursor-effect="hover">
            <li>
              <i className="fab fa-youtube"></i>
            </li>
          </a>
          <a target="_blank" href={instagram} data-cursor-effect="hover">
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </a>

          <a target="_blank" href={otherSocial} data-cursor-effect="hover">
            <li>
              <i className="fab fa-twitter"></i>
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

      <div class="video-container">
        <br />
        <iframe
          width="600"
          height="350"
          src={embedYT}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="row mb-5" style={{ textAlign: "justify" }}>
        <div class="col-12">
          <p class="nj-section-content">{description3}</p>
        </div>

        <div class="col-12">
          <p class="nj-section-content">{description4}</p>
        </div>
        <div class="col-12">
          <p class="nj-section-content">{description5}</p>
        </div>
        <div class="col-12">
          <p class="nj-section-content">{description6}</p>
        </div>
      </div>
    </div>
  );
}
