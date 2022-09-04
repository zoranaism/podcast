import React from "react";

const lastEpisode = ({type, path, episode, imgPath, altText, guest, description,date}) => {

    return(
        <div className="nj-news-wrapper">
        <div className="row">
          <div className="col-lg-6">
            <div className="nj-news-image-wrapper">
              <a href={path}>
                <img
                  src={imgPath} 
                  data-cursor-effect="blend"
                  alt={altText}
                />
              </a>
              <div className="nj-month-wrapper">
                <span className="nj-month">{type}</span>
              </div>
              <div className="nj-date-wrapper">
                <span className="nj-date">{episode}</span>
              </div>
              <div className="nj-author-wrapper">
                <span className="nj-author">EPISODE</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="nj-news-body-wrapper">
              <div className="nj-news-body">
                <h3 className="nj-news-header">{guest}</h3>
                <h5>{date}</h5>
                <p className="nj-news-body-text">
                  {description}
                </p>
              </div>
              <div className="nj-read-more-button-wrapper">
                <a
                  className="nj-button nj-button-black"
                  href={path}
                  data-cursor-effect="exclusion"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default lastEpisode;