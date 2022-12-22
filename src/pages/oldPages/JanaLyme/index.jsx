import React from "react";
import AboutLymeDisease from "./components/AboutLymeDisease";
import AmountRequired from "./components/AmountRequired";
import JanaBanner from "./components/JanaBanner";
import JanasLyme from "./components/JanasLyme";
import WhoIsJana from "./components/WhoIsJana";
import WhyWeAreHelpingJana from "./components/WhyWeAreHelpingJana";
import Progressbar from "./components/ProgressBar/PorgressBar";
import AboutSOTTherapy from "./components/AboutSOTTherapy";
import VolunteerForJana from "./components/VolunteerForJana";
import Payment from "./components/Payment";

export default function JanaLyme(props) {
  return (
    <React.Fragment>
      <div id="nj-preloader-wrapper">
        <div className="nj-preloader-inner">
          <div className="nj-preloader-percentage">0</div>
        </div>
      </div>

      <div className="section nj-hero mt-xxl" id="nj-volunteer">
        <JanaBanner />
        <WhoIsJana />
        <Payment />
        <JanasLyme />
        <AboutLymeDisease />
        <WhyWeAreHelpingJana />
        <Payment />
        <AmountRequired />
        <Progressbar />
        <AboutSOTTherapy />
        <VolunteerForJana />
        <Payment />
      </div>
    </React.Fragment>
  );
}
