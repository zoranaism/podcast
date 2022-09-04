import React from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

export default function Newsletter() {
  window.REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
  window.LOCALE = "en";
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE =
    "The information provided is invalid. Please review the field format and try again.";

  window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

  window.GENERIC_INVALID_MESSAGE =
    "The information provided is invalid. Please review the field format and try again.";

  window.translation = {
    common: {
      selectedList: "{quantity} list selected",
      selectedLists: "{quantity} lists selected",
    },
  };

  return (
    <div className="mt-5" id="nj-single-project-section">
      <div className="container">
        <div>
          <h3
            className="nj-single-project-header"
            style={{ textAlign: "center" }}
          >
            Sign up to our Newsletter
          </h3>
        </div>
        <div className="sib-form" style={{ textAlign: "center", padding: 0 }}>
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
                        style={{
                          display: "flex",
                          width: "100%",
                          alignItems: "center",
                          boxShadow: "-2px 2px 25px rgba(255, 255, 255, .03)",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "white",
                            opacity: 0.9,
                            border: "none",
                            width: "100%",
                            margin: "0",
                            height: "56.6px",
                            borderRadius: "0",
                            transition: "250ms ease-out",
                          }}
                        >
                          <input
                            className="input"
                            type="text"
                            style={{
                              color: "black",
                              height: "100%",
                              display: "flex",
                              borderRadius: "5px 0 0 5px",
                              textTransform: "none",
                              paddingLeft: "10px",
                            }}
                            id="EMAIL"
                            name="EMAIL"
                            autoComplete="off"
                            placeholder="example@gmail.com"
                            data-required="true"
                            required
                          />
                        </div>

                        <button
                          data-cursor-effect="hover"
                          className="border border-white sib-form-block__button sib-form-block__button-with-loader"
                          style={{
                            fontSize: ".875rem",
                            padding: "1rem 2rem",
                            color: "white",
                            fontWeight: "800",
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            fontFamily: "Arial"
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
  );
}
