import React from "react";

export default function VolunteerForJana(props) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="mb-3">Volunteer for Jana’s cause</h3>
          <p className="nj-section-content">
            Jana needs our help. She is fighting these symptoms on a daily
            basis, but she is a fighter and a very optimistic and happy
            individual. Jana is inspired to create more music, hopefully one
            day, to continue playing her violin and be able to run and do sports
            activities like she used to before. She also worked as a violin
            teacher and wants to go back to her classes as soon as possible,
            because she loves teaching and sharing knowledge with her students.
          </p>
          <p className="mb-5">
            We will have multiple events and meetups throught The Netherlands to
            plan and execute a series of music-related events in order to
            collect the planned amount for Jana. This campaign will last till
            01st of January, 2023.
          </p>
          <div className="mb-5 mt-5" style={{ textAlign: "center", margin: "0 auto" }}>
            <a
              className="blue-button mb-5 mt-5"
              href="become-a-volunteer"
              data-cursor-effect="exclusion"
            >
              Become a volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
