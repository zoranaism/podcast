import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactUs(props) {
  return (
  <div>
    <div id="nj-preloader-wrapper">
    <div class="nj-preloader-inner">
      <div class="nj-preloader-percentage">0</div>
    </div>
    </div>
    <div>
      <div
        className="section nj-light-section nj-pt-120"
        id="nj-single-project-section"
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
      >
        <div className="container">
          <div className="nj-section-header mb-5">
            <h1 className="nj-section-header-title contact-title">
              contact us
            </h1>
          </div>
          {/* <h1 className="title-contact">Contact Us</h1>  */}
          <h3 className="title-contact">
            Have any questions or comment? We'd love to hear from you.
          </h3>
          <div className="row">
            <div className="contact col-12 col-lg-6">
              <div className="form w-100 mb-3">
                <form
                  id="contact-form"
                  className="contact-form"
                  action="https://formspree.io/f/mjvjagld"
                  method="POST"
                >
                  <div className="form-group">
                    <label for="firstName">
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
                    <label for="lastName">
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
                    <label for="email">
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
                    <label for="message">
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
                <tr data-anim-queue="1" data-anim-type="fade_in_up">
                  <td className="py-2 pr-4">
                    <i className="fa fa-phone-alt"></i>
                  </td>
                  <td className="py-2">
                    <FontAwesomeIcon icon={faPhoneAlt} /> +31684359770
                  </td>
                </tr>
                <tr data-anim-queue="2" data-anim-type="fade_in_up">
                  <td className="py-2">
                    <i className="fa fa-envelope"></i>
                  </td>
                  <td className="py-2">
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    stellarsoundpodcast@gmail.com
                  </td>
                </tr>
                <tr data-anim-queue="3" data-anim-type="fade_in_up">
                  <td className="py-2">
                    <i className="fa fa-location-arrow"></i>
                  </td>
                  <td className="py-2">
                    <FontAwesomeIcon icon={faLocationArrow} /> Den Bosch,
                    Netherlands
                  </td>
                </tr>
              </table>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2939.703374469683!2d5.300589056159852!3d51.71499812220804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ee3e307553a7%3A0xefd0fdfd8fe11569!2sHet%20Klokkediep%20119%2C%205231%20WX%20&#39;s-Hertogenbosch%2C%20Netherlands!5e0!3m2!1sen!2srs!4v1626951770718!5m2!1sen!2srs" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"></iframe>  */}
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
  );
}
