import React from "react";

export default function SingleEpisode ({typeOfEpisode, episodePath, imgPath, altText, guest, description}) {
   
        return (
            <div
            class="nj-portfolio-item"
            data-filter={typeOfEpisode === "live" ? "all live" : "all pilot"}
            data-cursor-effect="exclusion"
          >
            <a href={episodePath}>
              <div class="nj-portfolio-item-image">
                <img
                  src={imgPath}
                  alt={altText}
                />
              </div>
              <div class="nj-portfolio-item-text-wrapper">
                <div class="nj-portfolio-item-text">
                  <span class="nj-portfolio-item-name">{guest}</span>
                  <span class="nj-portfolio-item-description">
                    {description}
                  </span>
                </div>
              </div>
            </a>
          </div>
        )
}
