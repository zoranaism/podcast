import React from "react";
import { WhatWeDoSection } from "./WhatWeDoSection";

export default function WhatWeDo() {
  return (
    <div
      className="section nj-dark-section nj-animated-section nj_animated"
      id="nj-what-we-do"
      data-scroll-to-top-style="dark"
    >
      <div className="container">
        <div className="nj-section-header">
          <h1 className="nj-section-header-title">what we do</h1>
        </div>
      </div>
      <div className="mb-5" style={{ color: "white" }}>
        <WhatWeDoSection />
      </div>

      <div className="nj-half-light-section-wrapper">
        <div
          className="nj-half-light-section-wrapper-before"
          data-cursor-style="dark"
        ></div>
        <div className="nj-half-light-section-content">
          <div className="container">
            <div className="row" data-cursor-style="dark">
              <div className="col-12 col-lg-4">
                <div
                  className="nj-simple-card-wrapper nj_animated fade_in_up"
                  data-anim-queue="1"
                  data-anim-type="fade_in_up"
                  style={{ opacity: "0" }}
                >
                  <div className="nj-simple-card">
                    <div className="nj-simple-card-icon-wrapper">
                      <div className="nj-simple-card-icon">
                        {/* <img src="img/serious.png" alt="Serious">  */}
                      </div>
                    </div>
                    <div className="nj-simple-card-text-wrapper">
                      <h4 className="vision-header">Promote</h4>
                      <p className="nj-simple-card-text">
                        There are many unknown and outstanding music artists. By
                        putting the spotlight on their craft in our Podcast, we
                        are promoting their work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div
                  className="nj-simple-card-wrapper nj_animated fade_in_up"
                  data-anim-queue="2"
                  data-anim-type="fade_in_up"
                  style={{ opacity: "0" }}
                >
                  <div className="nj-simple-card">
                    <div className="nj-simple-card-icon-wrapper">
                      <div className="nj-simple-card-icon">
                        {/* <img src="img/silly.png" alt="Silly"> */}
                      </div>
                    </div>
                    <div className="nj-simple-card-text-wrapper">
                      <h4 className="vision-header">Connect</h4>
                      <p className="nj-simple-card-text">
                        If you are a music enthusiast, join our Stellar Music
                        Community Discord server.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div
                  className="nj-simple-card-wrapper nj_animated fade_in_up"
                  data-anim-queue="3"
                  data-anim-type="fade_in_up"
                  style={{ opacity: "0" }}
                >
                  <div className="nj-simple-card">
                    <div className="nj-simple-card-icon-wrapper">
                      <div className="nj-simple-card-icon">
                        {/* <img src="img/shinny.png" alt="Shinny">  */}
                      </div>
                    </div>
                    <div className="nj-simple-card-text-wrapper">
                      <h4 className="vision-header">Support</h4>
                      <p className="nj-simple-card-text">
                        In these times it's not easy to keep up as a full time
                        musician. In that sense, we are organizing a support for
                        the most vulnerable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
