import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Team({ imageClickHandler, galleryImages }) {
  return (
    <div className="section nj-dark-section parallax" 
    id="team-section"
    >
      <div className="nj-section-header mb-5">
        <h1 className="nj-section-header-title">Team</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="nj-section-content mb-5">
              We are a group of passionate professionals and amateurs coming from various backgrounds
              working on the organization and execution of projects. We are
              based all over the world and working via our Discord channel. 
              We organize occasionally meetups with educative content and parties.
            </p>
          </div>
        </div>
      </div>
      <div className="container team-images">
        {galleryImages.map((image, index) => {
          return (
            <img
              onClick={() => imageClickHandler(index)}
              data-cursor-effect="hover"
              src={process.env.PUBLIC_URL + image}
              key={index}
              alt="gallery"
            />
          );
        })}
      </div>
    </div>
  );
}
