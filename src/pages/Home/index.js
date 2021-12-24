import React, {useState} from "react";
import ReactDOM from "react-dom";
import SingleEpisode from "../../components/EpisodePage.component";
import { separateMessageFromStack } from "jest-message-util";
import LastEpisode from "../../components/lastEpisode/lastEpisode";
import episodesData from "../../allEpisodesData";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Home(props) {
  //data array
  const epizode = episodesData();




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
                    Become a part of the Stellar community
                  </h3>
                </div>

                <div className="row discort-icon justify-content-center mb-5">
                  <div
                    className=""
                    data-anim-queue="6"
                    data-anim-type="fade_in_up"
                  >
                    <a
                      className="blue-button btn-1"
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
                      target="blank"
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
                      target="blank"
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
                      target="blank"
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
                      target="blank"
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
          <div>
            <LastEpisode 
            type={epizode[0].typeOfEpisode} 
            path={epizode[0].episodePath}
            imgPath={epizode[0].imgPath}
            altText={epizode[0].altText}
            guest={epizode[0].guest}
            description={epizode[0].description}
            episode={epizode[0].episode}
            date={epizode[0].date}
            />
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
                  target="blank"
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
                  target="blank"
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
                    <Link to="/About">
                      <img src="img/team/team.webp" alt="Stellar Team" />
                    </Link>
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
                        href="about"
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

      <div
        className="section nj-light-section nj-pdt-0"
        id="nj-testimonials"
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
        style={{ paddingTop: "60px!important" }}
      >
        <div className="container">
          <div className="nj-testimonials-wrapper">
            <div className="nj-testimonials" id="nj-testimonials-slick">
              <div className="nj-testimonial">
                <div className="nj-quote">
                  <svg
                    width="45"
                    height="40"
                    viewBox="0 0 45 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.54 37.74V39.74H44.54V37.74H42.54ZM27.07 37.74L25.1212 38.1897L25.479 39.74H27.07V37.74ZM42.37 2.88999H44.37V0.889992H42.37V2.88999ZM42.37 10.37V12.37H44.37V10.37H42.37ZM34.21 23.12H32.21V25.12H34.21V23.12ZM42.54 23.12H44.54V21.12H42.54V23.12ZM19.59 37.74V39.74H21.59V37.74H19.59ZM4.12 37.74L2.17122 38.1897L2.52898 39.74H4.12V37.74ZM19.42 2.88999H21.42V0.889992H19.42V2.88999ZM19.42 10.37V12.37H21.42V10.37H19.42ZM11.26 23.12H9.26V25.12H11.26V23.12ZM19.59 23.12H21.59V21.12H19.59V23.12ZM42.54 35.74H27.07V39.74H42.54V35.74ZM29.0188 37.2903C27.6823 31.4987 27.03 26.4413 27.03 22.1H23.03C23.03 26.8253 23.7377 32.1946 25.1212 38.1897L29.0188 37.2903ZM27.03 22.1C27.03 15.9572 28.4206 11.7236 30.8496 9.0326C33.2435 6.38055 36.9542 4.88999 42.37 4.88999V0.889992C36.2258 0.889992 31.2665 2.60109 27.8804 6.35239C24.5294 10.0648 23.03 15.4361 23.03 22.1H27.03ZM40.37 2.88999V10.37H44.37V2.88999H40.37ZM42.37 8.37C39.2988 8.37 36.6397 9.20923 34.7804 11.2234C32.9491 13.2074 32.21 15.993 32.21 19.21H36.21C36.21 16.5337 36.831 14.8993 37.7196 13.9366C38.5803 13.0041 40.0012 12.37 42.37 12.37V8.37ZM32.21 19.21V23.12H36.21V19.21H32.21ZM34.21 25.12H42.54V21.12H34.21V25.12ZM40.54 23.12V37.74H44.54V23.12H40.54ZM19.59 35.74H4.12V39.74H19.59V35.74ZM6.06878 37.2903C4.73228 31.4987 4.08 26.4413 4.08 22.1H0.0799999C0.0799999 26.8253 0.787725 32.1946 2.17122 38.1897L6.06878 37.2903ZM4.08 22.1C4.08 15.9572 5.47062 11.7236 7.89963 9.0326C10.2935 6.38055 14.0042 4.88999 19.42 4.88999V0.889992C13.2758 0.889992 8.31649 2.60109 4.93037 6.35239C1.57938 10.0648 0.0799999 15.4361 0.0799999 22.1H4.08ZM17.42 2.88999V10.37H21.42V2.88999H17.42ZM19.42 8.37C16.3488 8.37 13.6897 9.20923 11.8304 11.2234C9.99905 13.2074 9.26 15.993 9.26 19.21H13.26C13.26 16.5337 13.881 14.8993 14.7696 13.9366C15.6303 13.0041 17.0512 12.37 19.42 12.37V8.37ZM9.26 19.21V23.12H13.26V19.21H9.26ZM11.26 25.12H19.59V21.12H11.26V25.12ZM17.59 23.12V37.74H21.59V23.12H17.59Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <div className="nj-client-testimonial">
                  <p className="nj-client-testimonial-text">
                    Great, dedicated professional crew of people. It was my
                    utmost pleasure to take part in the podcast.
                  </p>
                </div>
                <div
                  className="nj-client-name-wrapper"
                  style={{ display: "flex", alignItems: "baseline" }}
                >
                  <img
                    src="img/episodes/guests/aleksandra-denda.webp"
                    alt="Aleksandra Denda"
                    width="50px"
                  />
                  <p className="nj-client-name" style={{ paddingLeft: "15px" }}>
                    <b>Aleksandra Denda,</b>&nbsp;guest
                  </p>
                </div>
              </div>
              <div className="nj-testimonial">
                <div className="nj-quote">
                  <svg
                    width="45"
                    height="40"
                    viewBox="0 0 45 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.54 37.74V39.74H44.54V37.74H42.54ZM27.07 37.74L25.1212 38.1897L25.479 39.74H27.07V37.74ZM42.37 2.88999H44.37V0.889992H42.37V2.88999ZM42.37 10.37V12.37H44.37V10.37H42.37ZM34.21 23.12H32.21V25.12H34.21V23.12ZM42.54 23.12H44.54V21.12H42.54V23.12ZM19.59 37.74V39.74H21.59V37.74H19.59ZM4.12 37.74L2.17122 38.1897L2.52898 39.74H4.12V37.74ZM19.42 2.88999H21.42V0.889992H19.42V2.88999ZM19.42 10.37V12.37H21.42V10.37H19.42ZM11.26 23.12H9.26V25.12H11.26V23.12ZM19.59 23.12H21.59V21.12H19.59V23.12ZM42.54 35.74H27.07V39.74H42.54V35.74ZM29.0188 37.2903C27.6823 31.4987 27.03 26.4413 27.03 22.1H23.03C23.03 26.8253 23.7377 32.1946 25.1212 38.1897L29.0188 37.2903ZM27.03 22.1C27.03 15.9572 28.4206 11.7236 30.8496 9.0326C33.2435 6.38055 36.9542 4.88999 42.37 4.88999V0.889992C36.2258 0.889992 31.2665 2.60109 27.8804 6.35239C24.5294 10.0648 23.03 15.4361 23.03 22.1H27.03ZM40.37 2.88999V10.37H44.37V2.88999H40.37ZM42.37 8.37C39.2988 8.37 36.6397 9.20923 34.7804 11.2234C32.9491 13.2074 32.21 15.993 32.21 19.21H36.21C36.21 16.5337 36.831 14.8993 37.7196 13.9366C38.5803 13.0041 40.0012 12.37 42.37 12.37V8.37ZM32.21 19.21V23.12H36.21V19.21H32.21ZM34.21 25.12H42.54V21.12H34.21V25.12ZM40.54 23.12V37.74H44.54V23.12H40.54ZM19.59 35.74H4.12V39.74H19.59V35.74ZM6.06878 37.2903C4.73228 31.4987 4.08 26.4413 4.08 22.1H0.0799999C0.0799999 26.8253 0.787725 32.1946 2.17122 38.1897L6.06878 37.2903ZM4.08 22.1C4.08 15.9572 5.47062 11.7236 7.89963 9.0326C10.2935 6.38055 14.0042 4.88999 19.42 4.88999V0.889992C13.2758 0.889992 8.31649 2.60109 4.93037 6.35239C1.57938 10.0648 0.0799999 15.4361 0.0799999 22.1H4.08ZM17.42 2.88999V10.37H21.42V2.88999H17.42ZM19.42 8.37C16.3488 8.37 13.6897 9.20923 11.8304 11.2234C9.99905 13.2074 9.26 15.993 9.26 19.21H13.26C13.26 16.5337 13.881 14.8993 14.7696 13.9366C15.6303 13.0041 17.0512 12.37 19.42 12.37V8.37ZM9.26 19.21V23.12H13.26V19.21H9.26ZM11.26 25.12H19.59V21.12H11.26V25.12ZM17.59 23.12V37.74H21.59V23.12H17.59Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <div className="nj-client-testimonial">
                  <p className="nj-client-testimonial-text">
                    I don't listen to a lot of podcasts but in the past I've
                    listened to some music podcasts where big bands were guests.
                    What I like about this podcast is that it gives attention to
                    smaller musicians.
                  </p>
                </div>
                <div className="nj-client-name-wrapper">
                  <p className="nj-client-name">
                    <b>Anonimus survey participant</b>&nbsp;
                  </p>
                </div>
              </div>
              <div className="nj-testimonial">
                <div className="nj-quote">
                  <svg
                    width="45"
                    height="40"
                    viewBox="0 0 45 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.54 37.74V39.74H44.54V37.74H42.54ZM27.07 37.74L25.1212 38.1897L25.479 39.74H27.07V37.74ZM42.37 2.88999H44.37V0.889992H42.37V2.88999ZM42.37 10.37V12.37H44.37V10.37H42.37ZM34.21 23.12H32.21V25.12H34.21V23.12ZM42.54 23.12H44.54V21.12H42.54V23.12ZM19.59 37.74V39.74H21.59V37.74H19.59ZM4.12 37.74L2.17122 38.1897L2.52898 39.74H4.12V37.74ZM19.42 2.88999H21.42V0.889992H19.42V2.88999ZM19.42 10.37V12.37H21.42V10.37H19.42ZM11.26 23.12H9.26V25.12H11.26V23.12ZM19.59 23.12H21.59V21.12H19.59V23.12ZM42.54 35.74H27.07V39.74H42.54V35.74ZM29.0188 37.2903C27.6823 31.4987 27.03 26.4413 27.03 22.1H23.03C23.03 26.8253 23.7377 32.1946 25.1212 38.1897L29.0188 37.2903ZM27.03 22.1C27.03 15.9572 28.4206 11.7236 30.8496 9.0326C33.2435 6.38055 36.9542 4.88999 42.37 4.88999V0.889992C36.2258 0.889992 31.2665 2.60109 27.8804 6.35239C24.5294 10.0648 23.03 15.4361 23.03 22.1H27.03ZM40.37 2.88999V10.37H44.37V2.88999H40.37ZM42.37 8.37C39.2988 8.37 36.6397 9.20923 34.7804 11.2234C32.9491 13.2074 32.21 15.993 32.21 19.21H36.21C36.21 16.5337 36.831 14.8993 37.7196 13.9366C38.5803 13.0041 40.0012 12.37 42.37 12.37V8.37ZM32.21 19.21V23.12H36.21V19.21H32.21ZM34.21 25.12H42.54V21.12H34.21V25.12ZM40.54 23.12V37.74H44.54V23.12H40.54ZM19.59 35.74H4.12V39.74H19.59V35.74ZM6.06878 37.2903C4.73228 31.4987 4.08 26.4413 4.08 22.1H0.0799999C0.0799999 26.8253 0.787725 32.1946 2.17122 38.1897L6.06878 37.2903ZM4.08 22.1C4.08 15.9572 5.47062 11.7236 7.89963 9.0326C10.2935 6.38055 14.0042 4.88999 19.42 4.88999V0.889992C13.2758 0.889992 8.31649 2.60109 4.93037 6.35239C1.57938 10.0648 0.0799999 15.4361 0.0799999 22.1H4.08ZM17.42 2.88999V10.37H21.42V2.88999H17.42ZM19.42 8.37C16.3488 8.37 13.6897 9.20923 11.8304 11.2234C9.99905 13.2074 9.26 15.993 9.26 19.21H13.26C13.26 16.5337 13.881 14.8993 14.7696 13.9366C15.6303 13.0041 17.0512 12.37 19.42 12.37V8.37ZM9.26 19.21V23.12H13.26V19.21H9.26ZM11.26 25.12H19.59V21.12H11.26V25.12ZM17.59 23.12V37.74H21.59V23.12H17.59Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <div className="nj-client-testimonial">
                  <p className="nj-client-testimonial-text">
                    Thank you to Stellar Sound Podcast for creating such a
                    wonderful space for independent musicians and giving us the
                    chance to speak up and share what we do. High quality crew
                    and professional expertise.
                  </p>
                </div>
                <div
                  className="nj-client-name-wrapper"
                  style={{ display: "flex", alignItems: "baseline" }}
                >
                  <img
                    src="img/episodes/guests/orlando-dees.webp"
                    alt="Orlando Dees"
                    width="50px"
                  />
                  <p className="nj-client-name" style={{ paddingLeft: "15px" }}>
                    <b>Orlando Dees,</b>&nbsp;guest
                  </p>
                </div>
              </div>
              <div className="nj-testimonial">
                <div className="nj-quote">
                  <svg
                    width="45"
                    height="40"
                    viewBox="0 0 45 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.54 37.74V39.74H44.54V37.74H42.54ZM27.07 37.74L25.1212 38.1897L25.479 39.74H27.07V37.74ZM42.37 2.88999H44.37V0.889992H42.37V2.88999ZM42.37 10.37V12.37H44.37V10.37H42.37ZM34.21 23.12H32.21V25.12H34.21V23.12ZM42.54 23.12H44.54V21.12H42.54V23.12ZM19.59 37.74V39.74H21.59V37.74H19.59ZM4.12 37.74L2.17122 38.1897L2.52898 39.74H4.12V37.74ZM19.42 2.88999H21.42V0.889992H19.42V2.88999ZM19.42 10.37V12.37H21.42V10.37H19.42ZM11.26 23.12H9.26V25.12H11.26V23.12ZM19.59 23.12H21.59V21.12H19.59V23.12ZM42.54 35.74H27.07V39.74H42.54V35.74ZM29.0188 37.2903C27.6823 31.4987 27.03 26.4413 27.03 22.1H23.03C23.03 26.8253 23.7377 32.1946 25.1212 38.1897L29.0188 37.2903ZM27.03 22.1C27.03 15.9572 28.4206 11.7236 30.8496 9.0326C33.2435 6.38055 36.9542 4.88999 42.37 4.88999V0.889992C36.2258 0.889992 31.2665 2.60109 27.8804 6.35239C24.5294 10.0648 23.03 15.4361 23.03 22.1H27.03ZM40.37 2.88999V10.37H44.37V2.88999H40.37ZM42.37 8.37C39.2988 8.37 36.6397 9.20923 34.7804 11.2234C32.9491 13.2074 32.21 15.993 32.21 19.21H36.21C36.21 16.5337 36.831 14.8993 37.7196 13.9366C38.5803 13.0041 40.0012 12.37 42.37 12.37V8.37ZM32.21 19.21V23.12H36.21V19.21H32.21ZM34.21 25.12H42.54V21.12H34.21V25.12ZM40.54 23.12V37.74H44.54V23.12H40.54ZM19.59 35.74H4.12V39.74H19.59V35.74ZM6.06878 37.2903C4.73228 31.4987 4.08 26.4413 4.08 22.1H0.0799999C0.0799999 26.8253 0.787725 32.1946 2.17122 38.1897L6.06878 37.2903ZM4.08 22.1C4.08 15.9572 5.47062 11.7236 7.89963 9.0326C10.2935 6.38055 14.0042 4.88999 19.42 4.88999V0.889992C13.2758 0.889992 8.31649 2.60109 4.93037 6.35239C1.57938 10.0648 0.0799999 15.4361 0.0799999 22.1H4.08ZM17.42 2.88999V10.37H21.42V2.88999H17.42ZM19.42 8.37C16.3488 8.37 13.6897 9.20923 11.8304 11.2234C9.99905 13.2074 9.26 15.993 9.26 19.21H13.26C13.26 16.5337 13.881 14.8993 14.7696 13.9366C15.6303 13.0041 17.0512 12.37 19.42 12.37V8.37ZM9.26 19.21V23.12H13.26V19.21H9.26ZM11.26 25.12H19.59V21.12H11.26V25.12ZM17.59 23.12V37.74H21.59V23.12H17.59Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <div className="nj-client-testimonial">
                  <p className="nj-client-testimonial-text">
                    It was great how the interviewers were actually interested
                    in what guest had to say and asked great follow up
                    questions.
                  </p>
                </div>
                <div className="nj-client-name-wrapper">
                  <p className="nj-client-name">
                    <b>Anonimus survey participant</b>&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="nj-testimonials-slider-arrows">
              <div className="nj-testimonials-slider-next-arrow">
                  <FontAwesomeIcon icon={faArrowRight} fontWeight={200}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}