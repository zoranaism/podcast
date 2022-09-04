import React from "react";
import { BecomeAVolunteer } from "./components/BecomeAvolunteer/BecomeAVolunteer";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { JoinUs } from "./components/JoinUs";
import { VolunteerTestimonials } from "./components/VolunteerTestimonials";

const Volunteer = () => {
  return (
    <React.Fragment>
      <div id="nj-preloader-wrapper">
        <div className="nj-preloader-inner">
          <div className="nj-preloader-percentage">0</div>
        </div>
      </div>

      <div className="section nj-hero" id="nj-volunteer">
        <BecomeAVolunteer />
        <VolunteerTestimonials />
        <WhatWeOffer />
        <JoinUs />
      </div>
    </React.Fragment>
  );
};

export default Volunteer;
