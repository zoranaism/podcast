import React from "react";

export default function Header() {
  return (
    <>
      <nav
        style={{ height: "90px" }}
        className="navbar nj-navbar fixed-top"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="nj-navbar-flex-wrapper" style={{ height: "20px" }}>
            <div className="nj-navbar-flex-item">
              <div className="navbar-brand">
                <a className="navbar-item nj-navbar-logo-wrapper" href="/">
                  <div className="nj-navbar-logo">
                    <img src="img/logo/onlyLogo.webp" alt="Logo" />
                  </div>
                </a>
              </div>
            </div>

            <div className="nj-navbar-flex-item"></div>

            <div className="nj-navbar-flex-item">
              <div className="navbar-menu" id="nj-navbar_basic">
                <div className="navbar-start">
                  <a
                    className="navbar-item"
                    href="about"
                    data-cursor-effect="hover"
                  >
                    Pedja
                  </a>
                  <a
                    className="navbar-item"
                    href="episodes"
                    data-cursor-effect="hover"
                  >
                    episodes
                  </a>
                  <a
                    className="navbar-item"
                    href="contact"
                    data-cursor-effect="hover"
                  >
                    contact
                  </a>
                  <a
                    className="navbar-item"
                    href="donate"
                    data-cursor-effect="hover"
                  >
                    donate
                  </a>
                </div>
              </div>
              <div className="nj-show-menu-button" id="nj-show-menu-button">
                <div className="nj-lines"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="nj-mobile-menu">
        <div className="nj-mobile-menu-content">
          <div className="nj-mobile-menu-item-wrapper">
            <a className="nj-mobile-menu-item" href="about">
              about
            </a>
            <a className="nj-mobile-menu-item" href="hosts">
              hosts
            </a>
            <a className="nj-mobile-menu-item" href="episodes">
              episodes
            </a>
            <a className="nj-mobile-menu-item" href="contact">
              contact
            </a>
            <a className="nj-mobile-menu-item" href="donate">
              donate
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
