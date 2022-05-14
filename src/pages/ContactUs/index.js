import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
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
          {/* <h1 className="title-contact">Contact Us</h1>  */}
          <div className="row">
          <h3 className="title-contact">
                Have any questions or comment? We'd love to hear from you.
              </h3>
            <div className="contact col-12 col-lg-6">
              <div className="form w-100 mb-3">
                <form
                  id="contact-form"
                  className="contact-form"
                  action="https://formspree.io/f/mjvjagld"
                  method="POST"
                >
                  <div className="form-group">
                    <label htmlFor="firstName">
                      First Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="contact-form-text"
                      type="text"
                      id="firstName"
                      name="firstName"
                      size="50"
                      placeholder="First Name..."
                      required
                    />
                    <div id="error"></div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">
                      Last Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="contact-form-text"
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="contact-form-text"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message<span style={{ color: "red" }}>*</span>
                    </label>
                    <textarea
                      className="contact-form-text"
                      name="message"
                      id="message"
                      rows="4"
                      cols="40"
                      placeholder="Message..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit">Send</button>
                  <div
                    id="status"
                    style={{ display: "initial", padding: "30px" }}
                  ></div>
                </form>
              </div>
            </div>

            <div className="newsletter col-lg-6 col-12">
              <table style={{ marginTop: "15px", marginBottom: "20px" }}>
                {/* <tr data-anim-queue="1" data-anim-type="fade_in_up">
                  <td className="py-2">
                    <FontAwesomeIcon icon={faPhoneAlt} /> +31684359770
                  </td>
                </tr>
                <tr data-anim-queue="2" data-anim-type="fade_in_up">
                  <td className="py-2">
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    stellarsoundpodcast@gmail.com
                  </td>
                </tr>
                <tr data-anim-queue="3" data-anim-type="fade_in_up">
                  <td className="py-2">
                    <FontAwesomeIcon icon={faLocationArrow} /> Den Bosch,
                    Netherlands
                  </td>
                </tr> */}
                <tbody>
                  <tr data-anim-queue="3" data-anim-type="fade_in_up">
                    <td className="py-2">
                    <a href="https://www.facebook.com/Stellar-Sound-Podcast-119521773289334"> <FontAwesomeIcon icon={["fab", "facebook-square"]} className="ContactFontAwsome"/> </a> Stellar Sound Podcast , Facebook
                    </td>
                  </tr>
                  <tr data-anim-queue="3" data-anim-type="fade_in_up">
                    <td className="py-2">
                    <a href="https://www.instagram.com/stellarsoundpodcast/"> <FontAwesomeIcon icon={["fab", "instagram-square"]} className="ContactFontAwsome"/> </a> stellarsoundpodcast, Instagram
                    </td>
                  </tr>
                  <tr data-anim-queue="3" data-anim-type="fade_in_up">
                    <td className="py-2">
                    <a href="https://www.linkedin.com/company/72044553/"> <FontAwesomeIcon icon={["fab", "linkedin"]} className="ContactFontAwsome"/> </a> Stellar Sound Podcast, Linkedin
                    </td>
                  </tr>
                  <tr data-anim-queue="3" data-anim-type="fade_in_up">
                    <td className="py-2">
                      <a href="https://twitter.com/SoundStellar"> <FontAwesomeIcon icon={['fab', "twitter-square"]} className="ContactFontAwsome" /> </a>Stellar Sound Podcast, Twitter
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
    
    
  );
}
