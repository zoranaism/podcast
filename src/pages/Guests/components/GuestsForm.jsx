import React from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

export default function GuestsForm() {
  return (
    <div className="contact">
      <div className="form w-100 mb-3">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-12 col-md-8">
            <form
              id="contact-form"
              className="contact-form"
              action="https://formspree.io/f/mjvjagld"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="contact-form-text"
                  type="text"
                  id="fullName"
                  name="fullName"
                  size="50"
                  required
                />
                <div id="error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="bandName">
                  Artistic/Band Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="contact-form-text"
                  type="text"
                  id="bandName"
                  name="bandName"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="link">
                  Share one link with us (website is the best)
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="contact-form-text"
                  type="text"
                  id="link"
                  name="link"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Your Email<span style={{ color: "red" }}>*</span>
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
                <label htmlFor="description">
                  Describe yourself in one line
                  <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  className="contact-form-text"
                  name="description"
                  id="description"
                  rows="4"
                  cols="40"
                  required
                ></textarea>
                <span className="instructions">
                  This one-liner will be used as an Episode Cover Description.
                  For example: "One of the few female music producers, a
                  singer-songwriter, a multi-instrumentalist and gender
                  activist" or "Leo or "Just Leo" is a bassist,
                  singer-songwriter and a multi-instrumentalist from The
                  Netherlands
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="history">
                  Write about your music history
                  <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  className="contact-form-text"
                  name="history"
                  id="history"
                  rows="4"
                  cols="40"
                  required
                ></textarea>
                <span className="instructions">
                  50-100 words long, this text will be used as your introduction
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="avoid">
                  Any topics you would like to avoid
                </label>
                <input
                  className="contact-form-text"
                  type="text"
                  id="avoid"
                  name="avoid"
                  required
                />
              </div>

              <div className="container mt-3">
                <div className="row center">
                  <button
                    // onClick={() => gaEventTracker("Send contact form")}
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
      </div>
    </div>
  );
}
