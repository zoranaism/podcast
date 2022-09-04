import React from "react";
import Banner from "./components/Banner";
import Listen from "./components/Listen";
import Community from "./components/Community";
import Team from "./components/Team";
import Partners from "./components/Partners";

export default function Home(props) {
  return (
    <div>
      <div id="nj-preloader-wrapper">
        <div className="nj-preloader-inner">
          <div className="nj-preloader-percentage">0</div>
        </div>
      </div>

      <div className="section nj-hero" id="nj-hero">
        <Banner />
        <Listen />
        <Community />
        <Team />
        <Partners />
      </div>
    </div>
  );
}
