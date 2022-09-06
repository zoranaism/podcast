import React from "react";
import useAnalyticsEventTracker from "../../../useAnalyticsEventTracker";

export const JoinUs = () => {
  const gaEventTracker = useAnalyticsEventTracker("Volunteer");

  return (
    <div
      className="section nj-light-section nj-pdt-60"
      id="nj-single-project-section"
      data-scroll-to-top-style="dark"
      data-cursor-style="dark"
    >
      <div className="container">
        <div className="nj-section-header">
          <h2 className="nj-section-header-title">join us</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="mb-5">
              Starting with each of us, the music industry can become more
              diverse. You can redefine what is possible for the youth and
              industry we serve by volunteering with Stellar Sound and inspiring
              the future generation by sharing your professional experiences and
              supporting the development of new skills. Start investigating the
              many ways you can contribute to making the music industry more
              inclusive and egalitarian.
            </p>
            <p className="nj-section-content">
              Apply by sending email to <b>stellarsoundhr@gmail.com</b> including your:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 justify-content-center col-md-8">
            <ul>
              <li>Resume</li>
              <li>Name the position you are applying for</li>
              <li>
                Motivation letter with the reason you want to be part of the
                team
              </li>
            </ul>
          </div>
        </div>
        {/* WHY JOIN US SECTION */}

        {/* WHAT WE DO SECTION */}
        <div className="row justify-content-md-center mt-5">
          <a
            target="blank"
            className="black-button"
            href="mailto:stellarsoundpodcast@gmail.com"
            data-cursor-effect="exclusion"
            onClick={() => gaEventTracker("become a volunteer volunteer page")}
          >
            apply
          </a>
        </div>
      </div>
    </div>
  );
};
