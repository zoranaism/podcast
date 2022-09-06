import React from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import GuestsForm from './components/GuestsForm'

library.add(fab);

export default function Guests() {
  return (
    <div>
      <div id="nj-preloader-wrapper">
        <div className="nj-preloader-inner">
          <div className="nj-preloader-percentage">0</div>
        </div>
      </div>
      <div>
        <div
          className="section nj-light-section nj-pt-120 contact"
          id="nj-single-project-section"
          data-scroll-to-top-style="light"
          data-cursor-style="light"
        >
          <div className="container">
            <div className="nj-section-header mb-5">
              <h1 className="nj-section-header-title contact-title mt-5">
                guests
              </h1>
            </div>

            <GuestsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
