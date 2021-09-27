import React from "react";

export default function HostComponent({
  name,
  imagePath,
  facebook,
  instagram,
  otherSocial,
  youtubeLink,
  description1,
  description2,
  description3,
}) {
  return (
    <div>
      <div className="row fourth">
        <div
          className="card mb-3 col-lg-4 col-12"
          style={{ marginTop: "0px", border: "none" }}
        >
          <div className="img-box">
            <img className="card-img-top" src={imagePath} alt="host" />
            <ul>
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
        </div>

        <div className="card-body col-lg-8 col-12 p-3">
          <h5 className="card-title">{name}</h5>
          <p
            className="card-text card-text-host"
            style={{ fontWeight: "400", color: "black" }}
          >
            {description1}
          </p>

          <p
            className="card-text card-text-host"
            style={{ fontWeight: "400", color: "black" }}
          >
            {description2}
          </p>

          <p
            className="card-text card-text-host"
            style={{ fontWeight: "400", color: "black" }}
          >
            {description3}
          </p>
        </div>
      </div>
    </div>
  );
}
