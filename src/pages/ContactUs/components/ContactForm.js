import React from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import useAnalyticsEventTracker from "../../../useAnalyticsEventTracker";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

export default function ContactForm(props) {
  const gaEventTracker = useAnalyticsEventTracker("Contact");
  return (
    <div className="contact">
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
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="contact-form-text"
              type="email"
              id="email"
              name="email"
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
              required
            ></textarea>
          </div>

          <div className="container mt-3">
           
            <div className="row center">
              <button
                onClick={() => gaEventTracker("Send contact form")}
                type="submit"
                data-cursor-effect="exclusion"
                className="text-center "
              >
                Send
              </button>
            </div>
          </div>
          <div
            id="status"
            style={{ display: "initial", padding: "30px" }}
          ></div>
        </form>
      </div>
    </div>
  );
}
