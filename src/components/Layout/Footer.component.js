import React from "react";
import ReactDOM from "react-dom"
import BackToTop from "../BackToTop";




export default function Footer() {
  
  
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    window.LOCALE = 'en';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
  
    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
  
    window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
  
  
  
  
    window.translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected'
      }
    };
  
    var AUTOHIDE = Boolean(0);
  
 

  return (
  <div>
    <footer
      className="footer nj-footer nj-animated-section"
      id="nj-contact"
      data-scroll-to-top-style="light"
    >
      <div className="" id="nj-single-project-section">
        <div className="container">
          <div>
            <h3
              className="nj-single-project-header"
              style={{ textAlign: "center" }}
            >
              Stay up-to-date with our Stellar Pedja
            </h3>
          </div>
          <div className="sib-form" style={{ textAlign: "center" }}>
            <div id="sib-form-container" className="sib-form-container">
              <div
                id="error-message"
                className="sib-form-message-panel"
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: '"Helvetica", sansSerif',
                  color: "#661d1d",
                  backgroundColor: "#ffeded",
                  borderRadius: "3px",
                  borderColor: "#ff4949",
                  maxWidth: "480px",
                }}
              >
                <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                  <svg
                    viewBox="0 0 512 512"
                    className="sib-icon sib-notification__icon"
                  >
                    <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                  </svg>
                  <span className="sib-form-message-panel__inner-text">
                    Your subscription could not be saved. Please try again.
                  </span>
                </div>
              </div>
              <div></div>
              <div
                id="success-message"
                className="sib-form-message-panel"
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  fontFamily: '"Helvetica", sans-serif',
                  color: "#085229",
                  backgroundColor: "#e7faf0",
                  borderRadius: "3px",
                  borderColor: "#13ce66",
                  maxWidth: "540px",
                }}
              >
                <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                  <svg
                    viewBox="0 0 512 512"
                    className="sib-icon sib-notification__icon"
                  >
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                  </svg>
                  <span className="sib-form-message-panel__inner-text">
                    Your subscription has been successful.
                  </span>
                </div>
              </div>
              <div></div>
              <div
                id="sib-container"
                className="sib-container--large sib-container--vertical"
                style={{
                  backgroundColor: "transparent",
                  textAlign: "center",
                  maxWidth: "540px",
                  borderRadius: "3px",
                }}
              >
                <form
                  className="form-inline"
                  id="sib-form"
                  method="POST"
                  action="https://765ab965.sibforms.com/serve/MUIEAB9TKMLkV6K4r668px-LdqPPHfH6vMwD-myzvKJrrm5dDb15VAw6YXYkUJxhYLt6cRqb1dc5hl-BYSpQwysWVJq_KovlwI760vtdd4YV-7LlRg1G9A9WnK9aKAUr2jtmu3yjoy9rWFuUnShN4NSieQ4SONq21ZRV8lIC9kWYAzKUfLS36O7S950H-YLmdr4MtpUjQdKOZP-I"
                  data-type="subscription"
                >
                  <div style={{ padding: "8px 0", width: "100%" }}>
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div
                          className=""
                          style={{ display: "flex", width: "100%" }}
                        >
                          <div
                            className="entry__field"
                            style={{
                              backgroundColor: "black",
                              borderColor: "black black white",
                              width: "100%",
                            }}
                          >
                            <input
                              className="input"
                              type="text"
                              style={{ color: "white" }}
                              id="EMAIL"
                              name="EMAIL"
                              autoComplete="off"
                              placeholder="EMAIL"
                              data-required="true"
                              required
                            />
                          </div>

                          <button
                            className="border border-white sib-form-block__button sib-form-block__button-with-loader"
                            style={{
                              width: "50%",
                              fontSize: "90%",
                              marginLeft: "1px",
                              textAlign: "left",
                              fontFamily: '"Helvetica", sans-serif',
                              color: "#FFFFFF",
                              backgroundColor: "#black",
                              borderRadius: "3px",
                              border: "2px white",
                              display: "flex",
                              alignContent: "center",
                              justifyContent: "center",
                            }}
                            form="sib-form"
                            type="submit"
                          >
                            <svg
                              className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                              viewBox="0 0 512 512"
                            >
                              <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                            </svg>
                            SUBSCRIBE
                          </button>
                        </div>

                        <label
                          className="entry__error entry__error--primary"
                          style={{
                            fontSize: "16px",
                            textAlign: "left",
                            fontFamily: '"Helvetica", sans-serif',
                            color: "#661d1d",
                            borderRadius: "3px",
                            borderColor: "#ff4949",
                          }}
                        ></label>
                      </div>
                    </div>
                  </div>

                  <input
                    type="text"
                    name="email_address_check"
                    defaultValue=""
                    className="input--hidden"
                  />
                  <input type="hidden" name="locale" defaultValue="en" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-3">
            <div
              className="col-12 footer-podcasts"
              data-anim-queue="1"
              data-anim-type="fade_in_up"
              style={{ opacity: "0" }}
            >
              <a
                target="_blank"
                href="https://open.spotify.com/show/4b4Nokn6zf9wWcZkDikazp"
                data-cursor-effect="exclusion"
              >
                <img src="img/icons/spotifyPodcasts.webp" alt="Spotify" />
              </a>
            </div>
            <div
              className="col-12 footer-podcasts"
              data-anim-queue="2"
              data-anim-type="fade_in_up"
              style={{ opacity: "0" }}
            >
              <a
                target="_blank"
                href="https://pod.link/stellarsoundpodcast"
                data-cursor-effect="exclusion"
              >
                <img src="img/icons/Group-3.webp" alt="podlink" />
              </a>
            </div>
            <div
              className="col-12 footer-podcasts"
              data-anim-queue="3"
              data-anim-type="fade_in_up"
              style={{ opacity: "0" }}
            >
              <a
                target="_blank"
                href="https://podcasts.apple.com/rs/podcast/stellar-sound-podcast/id1556200413"
                data-cursor-effect="exclusion"
              >
                <img src="img/icons/apple1.webp" alt="apple" />
              </a>
            </div>
          </div>

          <div className="col-10 col-md-3">
            <div
              className="col-12 footer-podcasts"
              data-anim-queue="1"
              data-anim-type="fade_in_up"
              style={{ opacity: "0" }}
            >
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCXnT7Ih32dLtFhGAtYtsR2g"
                data-cursor-effect="exclusion"
              >
                <img src="img/icons/YouTube2.webp" alt="YouTube" />
              </a>
            </div>
            {/* <div className="col-12 footer-podcasts" data-anim-queue="2" data-anim-type="fade_in_up" style={{"opacity":"0"}}>
                <a target="_blank" href="https://discord.gg/dfaAshmwP4" data-cursor-effect="exclusion">
                  <img src="img/icons/discort1.webp" alt="Discord" />
                </a>
              </div>  */}
          </div>
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-4">
            <div className="nj-footer-contacts-wrapper">
              <div className="nj-footer-contacts">
                <table>
                  <tbody>
                    <tr
                      data-anim-queue="1"
                      data-anim-type="fade_in_up"
                      style={{ opacity: "0" }}
                    >
                      <td>
                        <i className="fa fa-phone-alt"></i>
                      </td>
                      <td>+31684359770</td>
                    </tr>
                    <tr
                      data-anim-queue="2"
                      data-anim-type="fade_in_up"
                      style={{ opacity: "0" }}
                    >
                      <td>
                        <i className="fa fa-envelope"></i>
                      </td>
                      <td>stellarsoundpodcast@gmail.com</td>
                    </tr>
                    <tr
                      data-anim-queue="3"
                      data-anim-type="fade_in_up"
                      style={{ opacity: "0" }}
                    >
                      <td>
                        <i className="fa fa-location-arrow"></i>
                      </td>
                      <td>Den Bosch, Netherlands</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="nj-navbar-flex-item justify-content-end">
                <div
                  className="navbar-menu justify-content-end align-items-center"
                  id=""
                  style={{ float: "left" }}
                >
                  <div className="socials-navigation justify-content-end align-items-center">
                    <a
                      target="blank"
                      className="socials-link"
                      href="https://www.instagram.com/stellarsoundpodcast/"
                      data-cursor-effect="hover"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      target="blank"
                      className="socials-link"
                      href="https://www.facebook.com/Stellar-Sound-Podcast-119521773289334"
                      data-cursor-effect="hover"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      target="blank"
                      className="socials-link"
                      href="https://www.linkedin.com/company/72044553/"
                      data-cursor-effect="hover"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    {/* <a className="" href="https://discord.gg/9qE3FhVw" data-cursor-effect="hover"><i className="fab fa-discord"></i></a>  */}
                    <a
                      target="_blank"
                      className="socials-link"
                      href="https://twitter.com/SoundStellar"
                      data-cursor-effect="hover"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    {/* <a className="episodes-link blue-button" href="episodes.html" data-cursor-effect="exclusion">Episodes</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nj-footer-socials-wrapper">
          <div className="nj-footer-socials">
            <span className="text-center d-flex justify-content-center align-items-center mt-2">
              <i className="fa fa-copyright mr-1"></i>2021 Stellar Sound Podcast
            </span>
          </div>
        </div>
      </div>
    </footer>

    <BackToTop />
  </div>
  );
}
