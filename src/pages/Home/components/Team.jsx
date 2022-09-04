import React from "react";
import useAnalyticsEventTracker from "../../../useAnalyticsEventTracker";

export default function Team() {
  const gaEventTracker = useAnalyticsEventTracker("Homepage");

  return (
    <section id="team">
      <div
        className="section nj-light-section nj-animated-section"
        id="nj-news"
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
      >
        <div className="container">
          <div className="nj-section-header">
            <h1 className="nj-section-header-title our-team">Our team</h1>
          </div>
          <div className="team-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="team-img-wrapper py-5">
                  <a href="/About">
                    <img src="img/team/team.webp" alt="Stellar Team" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 team">
                <div className="team-text-wrapper">
                  <p className="nj-news-body-text">
                    We are an international team of talented and passionate
                    young volunteers working for this cause from home. As a
                    group of musicians and music enthusiasts, we are channeling
                    strong passion through our work and having fun in the
                    process.
                  </p>
                </div>
                <div className="row mt-3">
                  <a
                    className="black-button"
                    href="/become-a-volunteer"
                    data-cursor-effect="exclusion"
                    onClick={() => gaEventTracker("home > become a volunteer")}
                  >
                    become a volunteer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
