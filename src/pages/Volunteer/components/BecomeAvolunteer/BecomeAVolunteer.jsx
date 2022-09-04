import React from "react";
import { Roles } from "./Roles/roles";

export const BecomeAVolunteer = () => {
  return (
    <>
      <div className="container">
        <div className="nj-section-header">
          <h1 className="nj-section-header-title mb-5 mt-5">
            Become a volunteer
          </h1>
        </div>
      </div>

      <div className="section nj-hero" id="nj-volunteer">
        <Roles />
      </div>
    </>
  );
};
