import React from "react";

export default function Header() {
  return (
    <>
      <nav
        style={{ height: "90px" }}
        class="navbar nj-navbar fixed-top"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="nj-navbar-flex-wrapper" style={{ height: "20px" }}>
            <div class="nj-navbar-flex-item">
              <div class="navbar-brand">
                <a class="navbar-item nj-navbar-logo-wrapper" href="/">
                  <div class="nj-navbar-logo">
                    <img src="img/logo/onlyLogo.webp" alt="Logo" />
                  </div>
                </a>
              </div>
            </div>

            <div class="nj-navbar-flex-item"></div>

            <div class="nj-navbar-flex-item">
              <div class="navbar-menu" id="nj-navbar_basic">
                <div class="navbar-start">
                  <a
                    class="navbar-item"
                    href="about"
                    data-cursor-effect="hover"
                  >
                    about
                  </a>
                  <a
                    class="navbar-item"
                    href="episodes"
                    data-cursor-effect="hover"
                  >
                    episodes
                  </a>
                  <a
                    class="navbar-item"
                    href="contact"
                    data-cursor-effect="hover"
                  >
                    contact
                  </a>
                  <a
                    class="navbar-item"
                    href="donate"
                    data-cursor-effect="hover"
                  >
                    donate
                  </a>
                </div>
              </div>
              <div class="nj-show-menu-button" id="nj-show-menu-button">
                <div class="nj-lines"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="nj-mobile-menu">
        <div class="nj-mobile-menu-content">
          <div class="nj-mobile-menu-item-wrapper">
            <a class="nj-mobile-menu-item" href="about">
              about
            </a>
            <a class="nj-mobile-menu-item" href="hosts">
              hosts
            </a>
            <a class="nj-mobile-menu-item" href="episodes">
              episodes
            </a>
            <a class="nj-mobile-menu-item" href="contact">
              contact
            </a>
            <a class="nj-mobile-menu-item" href="donate">
              donate
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
