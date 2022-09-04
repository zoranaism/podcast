import React from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Socials from "../../components/Socials/Socials";
import ContactForm from "./components/ContactForm";
import Newsletter from "./components/Newsletter";
import Info from "./components/Info";

library.add(fab);

export default function ContactUs(props) {
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
                contact us
              </h1>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className="text-center mb-4">
                  <p>
                    Have any questions or comment? We'd love to hear from you.
                  </p>
                </div>
                <ContactForm />
              </div>
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-5">
                <Info />
                <Socials />
              </div>
            </div>
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
}
