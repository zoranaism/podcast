import React from "react";

export default function ContactUs(props) {
  return (
    <div>
      <div
        class="section nj-light-section nj-pt-120"
        id="nj-single-project-section"
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
      >
        <div class="container">
          <div class="nj-section-header mb-5">
            <h1 class="nj-section-header-title contact-title">contact us</h1>
          </div>
          {/* <h1 class="title-contact">Contact Us</h1>  */}
          <h3 class="title-contact">
            Have any questions or comment? We'd love to hear from you.
          </h3>
          <div class="row">
            <div class="contact col-12 col-lg-6">
              <div class="form w-100 mb-3">
                <form
                  id="contact-form"
                  class="contact-form"
                  action="https://formspree.io/f/mjvjagld"
                  method="POST"
                >
                  <div class="form-group">
                    <label for="firstName">
                      First Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      class="contact-form-text"
                      type="text"
                      id="firstName"
                      name="firstName"
                      size="50"
                      placeholder="First Name..."
                      required
                    />
                    <div id="error"></div>
                  </div>

                  <div class="form-group">
                    <label for="lastName">
                      Last Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      class="contact-form-text"
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name..."
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label for="email">
                      Email<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      class="contact-form-text"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email..."
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label for="message">
                      Message<span style={{ color: "red" }}>*</span>
                    </label>
                    <textarea
                      class="contact-form-text"
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

            <div class="newsletter col-lg-6 col-12">
              <table style={{ marginTop: "15px", marginBottom: "20px" }}>
                <tr data-anim-queue="1" data-anim-type="fade_in_up">
                  <td class="py-2 pr-4">
                    <i class="fa fa-phone-alt"></i>
                  </td>
                  <td class="py-2">+31684359770</td>
                </tr>
                <tr data-anim-queue="2" data-anim-type="fade_in_up">
                  <td class="py-2">
                    <i class="fa fa-envelope"></i>
                  </td>
                  <td class="py-2">stellarsoundpodcast@gmail.com</td>
                </tr>
                <tr data-anim-queue="3" data-anim-type="fade_in_up">
                  <td class="py-2">
                    <i class="fa fa-location-arrow"></i>
                  </td>
                  <td class="py-2">Den Bosch, Netherlands</td>
                </tr>
              </table>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2939.703374469683!2d5.300589056159852!3d51.71499812220804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ee3e307553a7%3A0xefd0fdfd8fe11569!2sHet%20Klokkediep%20119%2C%205231%20WX%20&#39;s-Hertogenbosch%2C%20Netherlands!5e0!3m2!1sen!2srs!4v1626951770718!5m2!1sen!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
