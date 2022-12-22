import React from "react";
import useAnalyticsEventTracker from "../../../useAnalyticsEventTracker";

export default function Listen() {
  const gaEventTracker = useAnalyticsEventTracker("Homepage");

  return (
    <section>
      <div
        className="section nj-light-section nj-animated-section"
        id="nj-embeded"
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
      >
        <div className="container">
          <div className="nj-section-header">
            <h1 className="nj-section-header-title our-team">
              Listen to our podcast
            </h1>
          </div>
          <div className="team-wrapper">
            <div className="row">
              <div className="col-md-12">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/4b4Nokn6zf9wWcZkDikazp?utm_source=generator"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </div>
              <div className="col-md-12">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?list=PLkuOGnkIt5FwOT2dOFcmVILhw0Do5HGZu"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
            <a
              className="black-button"
              href="https://anchor.fm/stellar-sound-podcast"
              data-cursor-effect="exclusion"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              onClick={() => gaEventTracker("Other platforms")}
            >
              Other platforms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
