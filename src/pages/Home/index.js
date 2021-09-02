import React from "react";
import TestimonialsSlider from '../../components/TestimonialsSlider'

export default function Home(props) {
  

  return (
    <div className="section nj-hero" id="nj-hero">
      <div className="nj-hero-body">
        <div className="container">
          <div className="nj-hero-title-wrapper">
            <div className="row justify-content-center">
              <div className="col-md-7 justify-content-center">
                <div className="mb-5 text-center">
                  <img
                    src="./img/logo/onlyLogo.webp"
                    className="mt-5"
                    style={{ width: "150px" }}
                    alt="logo"
                  />
                  <img
                    src="./img/logo/textStellarSound.webp"
                    style={{
                      maxWidth: "500px",
                      width: "100%",
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                    alt="Logo Text"
                  />
                  <img
                    src="./img/logo/textPodcast.webp"
                    className="mb-5"
                    style={{ width: "200px" }}
                    alt="Logo Text"
                  />

                  <h4
                    className="text-center mb-3 font-italic"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Discover exceptional European musicians
                  </h4>
                </div>

                <div className="row discort-icon justify-content-center">
                  <h3
                    className="text-center"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    become part of the Stellar community
                  </h3>
                </div>

                <div className="row discort-icon justify-content-center mb-5">
                  <div
                    className=""
                    data-anim-queue="6"
                    data-anim-type="fade_in_up"
                  >
                    <a
                      className="blue-button"
                      href="https://765ab965.sibforms.com/serve/MUIEAL031bWkCrplJxCjZYMMIwnAOpuKETfNT7m7V2C7ubL4Repj-w_blUhmF54xnLfvIUx8UrcW3REamB1wFdxfwkjPipmYKI40qLaszy1BUcUdcBkJjYov8EHPSISP5oPd9VXWTb0WGg1pNzDovcK0P5kaTT-D0eTGKrDRaLx2el4znB8Ranou6P17amm7eTbc6JIHuVKluOrp
             "
                      data-cursor-effect="exclusion"
                    >
                      Go Stellar!
                    </a>
                  </div>
                </div>
                <div className="row discort-icon justify-content-center">
                  <div
                    className="col-3 col-sm-2"
                    data-anim-queue="1"
                    data-anim-type="fade_in_up"
                  >
                    <a
                      target="_blank"
                      href="https://open.spotify.com/show/4b4Nokn6zf9wWcZkDikazp"
                      data-cursor-effect="exclusion"
                    >
                      <img
                        className="img-max-width-50"
                        src="img/icons/spotify.webp"
                        alt="Spotify"
                      />
                    </a>
                  </div>
                  <div
                    className="col-3 col-sm-2"
                    data-anim-queue="2"
                    data-anim-type="fade_in_up"
                  >
                    <a
                      target="_blank"
                      href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL3N0ZWxsYXJzb3VuZHBvZGNhc3QvZmVlZC54bWw"
                      data-cursor-effect="exclusion"
                    >
                      <img
                        className="img-max-width-50"
                        src="img/icons/googlepodcast.webp"
                        alt="Google Podcasts"
                      />
                    </a>
                  </div>
                  <div
                    className="col-3 col-sm-2"
                    data-anim-queue="3"
                    data-anim-type="fade_in_up"
                  >
                    <a
                      target="_blank"
                      href="https://podcasts.apple.com/rs/podcast/stellar-sound-podcast/id1556200413"
                      data-cursor-effect="exclusion"
                    >
                      <img
                        className="img-max-width-50"
                        src="img/icons/apple-icon.webp"
                        alt="apple"
                      />
                    </a>
                  </div>
                  <div
                    className="col-3 col-sm-2"
                    data-anim-queue="4"
                    data-anim-type="fade_in_up"
                  >
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UCXnT7Ih32dLtFhGAtYtsR2g"
                      data-cursor-effect="exclusion"
                    >
                      <img
                        className="img-max-width-50"
                        src="img/icons/youtube.webp"
                        alt="YouTube"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nj-hero-social-buttons-wrapper">
          <div className="nj-hero-social-buttons">
            <ul>
              <li>
                <a
                  href="https://open.spotify.com/show/4b4Nokn6zf9wWcZkDikazp"
                  data-cursor-effect="hover"
                >
                  <img
                    className="social-img"
                    src="img/icons/spotify.webp"
                    alt="spotify"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Stellar-Sound-Podcast-119521773289334"
                  data-cursor-effect="hover"
                >
                  <img
                    className="social-img"
                    src="img/icons/fb.webp"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/stellarsoundpodcast/"
                  data-cursor-effect="hover"
                >
                  <img
                    className="social-img"
                    src="img/icons/insta.webp"
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="section nj-light-section nj-animated-section"
        id="nj-news"
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
      >
        <div className="container">
          <div className="nj-section-header">
            <h1 className="nj-section-header-title">new episodes</h1>
          </div>
          <div className="nj-news-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="nj-news-image-wrapper">
                  <a href="episode-5-ania-anahata.html">
                    <img
                      src="img/episodes/episodes-cover/pilot/episode-5-cover.webp"
                      data-cursor-effect="blend"
                      alt="Episode 5: Ania Anahata"
                    />
                  </a>
                  <div className="nj-month-wrapper">
                    <span className="nj-month">Stellar Pilot</span>
                  </div>
                  <div className="nj-date-wrapper">
                    <span className="nj-date">5</span>
                  </div>
                  <div className="nj-author-wrapper">
                    <span className="nj-author">EPISODE</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="nj-news-body-wrapper">
                  <div className="nj-news-body">
                    <h3 className="nj-news-header">Ania Anahata</h3>
                    <h5>08/17/2021</h5>
                    <p className="nj-news-body-text">
                      Talented Ania Anahata is a multi-instrumental and vocal
                      artist. She is a violinist, violist, vocalist, music
                      therapist, EFT coach and a meditation teacher.
                    </p>
                  </div>
                  <div className="nj-read-more-button-wrapper">
                    <a
                      className="nj-button nj-button-black"
                      href="episode-5-ania-anahata.html"
                      data-cursor-effect="exclusion"
                    >
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section nj-dark-section" id="nj-sponsors">
        <div className="container">
          <div className="nj-section-header">
            <h1 className="nj-section-header-title">stellar sponsors</h1>
          </div>
          <div className="row">
            <div className="col-12 col-lg-3 mb-4">
              <div
                className="sponsor-img"
                data-anim-queue="1"
                data-anim-type="fade_in_up"
              >
                <a
                  target="_blank"
                  href="https://www.faegames.com/"
                  data-cursor-effect="hover"
                >
                  <img src="img/sponsors/fae-games.webp" alt="FAE Games" />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-4">
              <div
                className="sponsor-img"
                data-anim-queue="2"
                data-anim-type="fade_in_up"
              >
                <a
                  target="_blank"
                  href="https://ketz.rs/"
                  data-cursor-effect="hover"
                >
                  <img
                    className="px-4"
                    src="img/sponsors/ketz.webp"
                    alt="Ketz Accessories"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="team">
        <div
          className="section nj-light-section nj-animated-section"
          id="nj-news"
          data-scroll-to-top-style="dark"
          data-cursor-style="dark"
        >
          <div className="container">
            <div className="nj-section-header">
              <h1 className="nj-section-header-title">Our team</h1>
            </div>
            <div className="team-wrapper">
              <div className="row">
                <div className="col-lg-6">
                  <div className="team-img-wrapper py-5">
                    <a href="about.html">
                      <img src="img/team/team.webp" alt="Stellar Team"/>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 team">
                  <div className="team-text-wrapper">
                    <p className="nj-news-body-text">
                      We are an international team of talented and passionate
                      young volunteers working for this cause from home. As a
                      group of musicians and music enthusiasts, we are
                      channeling strong passion through our work and having fun
                      in the process.
                    </p>
                  </div>
                  <div className="button-wrapper">
                    <div className="nj-read-more-button-wrapper">
                      <a
                        className="nj-button nj-button-black"
                        href="about.html"
                        data-cursor-effect="exclusion"
                      >
                        Find out about Stellar story
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

    </div>
  );
}
