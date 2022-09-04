import React from "react";

export default function SingleEpisode({
  typeOfEpisode,
  episodePath,
  imgPath,
  altText,
  guest,
  description,
}) {
  return (
    <div
      className="nj-portfolio-item"
      data-filter={typeOfEpisode === "live" ? "all live" : "all pilot"}
      data-cursor-effect="exclusion"
    >
      <a href={episodePath}>
        <div className="nj-portfolio-item-image">
          <img src={imgPath} alt={altText} />
        </div>
        <div className="nj-portfolio-item-text-wrapper">
          <div className="nj-portfolio-item-text">
            <span className="nj-portfolio-item-name">{guest}</span>
            <span className="nj-portfolio-item-description">{description}</span>
          </div>
        </div>
      </a>
    </div>
  );
}
