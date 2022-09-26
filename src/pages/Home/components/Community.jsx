import React from "react";
import useAnalyticsEventTracker from "../../../useAnalyticsEventTracker";

export default function Community() {
  const gaEventTracker = useAnalyticsEventTracker("Homepage");

  return (
    <div className="section nj-dark-section" id="nj-community">
      <div className="container">
        <div className="nj-section-header">
          <h1 className="nj-section-header-title">Stellar Sound Community</h1>
        </div>
        <p>
          Our Discord Server gathers all music enthusiasts and music lovers to
          learn, share joy and love for creative music.
        </p>
        <br />
        <p>Join our server if you want to have:</p>
        <div className="row">
          <div className="icon-holder">
            <span>
              <img src="img/icons/idea.webp" alt="Education" />
            </span>
            <h3>Exclusive educative content</h3>
          </div>
          <div className="icon-holder">
            <span>
              <img src="img/icons/live-music.webp" alt="Music Industry" />
            </span>
            <h3>Access to the connections in music industry</h3>
          </div>
          <div className="icon-holder">
            <span>
              <img src="img/icons/celebrating.webp" alt="Fun and Joy" />
            </span>
            <h3>Joy of sharing love for music</h3>
          </div>
        </div>
        <a
          className="blue-button"
          href="https://discord.gg/KNsjm9K8HJ"
          data-cursor-effect="exclusion"
          target="_blank"
          onClick={() => gaEventTracker("Join us discord")}
        >
          Join us now
          <img
            className="img-max-width-50"
            src="img/icons/discord.webp"
            alt="Google Podcasts"
          />
        </a>
      </div>
    </div>
  );
}
