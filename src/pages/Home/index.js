import React, {useState} from "react";
import ReactDOM from "react-dom";
import SingleEpisode from "../../components/EpisodePage.component";
import { separateMessageFromStack } from "jest-message-util";
import LastEpisode from "../../components/lastEpisode/lastEpisode";
import episodesData from "../../allEpisodesData";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBookOpen, faMusic, faPodcast } from "@fortawesome/free-solid-svg-icons";


export default function Home(props) {
  //data array
  const epizode = episodesData();




  return (
    <div>
    <div id="nj-preloader-wrapper">
    <div className="nj-preloader-inner">
      <div className="nj-preloader-percentage">0</div>
    </div>
    </div>
  


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
                    style={{ fontFamily: "sans-serif", fontWeight: "400" }}
                  >
                    Empowering creative musicians
                  </h4>
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

      <section>
        <div
            className="section nj-light-section nj-animated-section"
            id="nj-embeded"
            data-scroll-to-top-style="dark"
            data-cursor-style="dark"
          >
            <div className="container">
              <div className="nj-section-header">
                <h1 className="nj-section-header-title our-team">Listen to our podcast</h1>
              </div>
              <div className="team-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/show/4b4Nokn6zf9wWcZkDikazp?utm_source=generator" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                  </div>
                  <div className="col-md-12">
                    <iframe style={{borderRadius:"5px"}} src="https://www.youtube.com/embed/rHxZhYLL85I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              <a
                      className="black-button"
                      href="https://anchor.fm/stellar-sound-podcast"
                      data-cursor-effect="exclusion"
                      target="_blank"
                    >
                      Other platforms
                    </a>
              </div>
            </div>
        </div>
      </section>

      <div className="section nj-dark-section" id="nj-community">
        <div className="container">
          <div className="nj-section-header">
            <h1 className="nj-section-header-title">Stellar Sound Community</h1>
          </div>
            <p>Our Discord Server gathers all music enthusiasts and music lovers to learn, share joy and love for creative music.</p>
            <br/>
            <p>Join our server if you want to have:</p>
            <div className="row">
              <div className="icon-holder">
                <span>
                  <img src="img/icons/idea.webp" alt="Education" />
                </span>
                <h3>Exclusive educative content</h3>
              </div>
              <div className="icon-holder">
                <span>
                  <img src="img/icons/live-music.webp" alt="Music Industry" />
                </span>
                <h3>Access to the connections in music industry</h3>
              </div>
              <div className="icon-holder">
                <span>
                  <img src="img/icons/celebrating.webp" alt="Fun and Joy" />
                </span>
                <h3>Fun and joy</h3>
              </div>
            </div>
            <a
                      className="blue-button"
                      href="https://discord.gg/rzg9GmYJ"
                      data-cursor-effect="exclusion"
                      target="_blank"
                    >
                      Join us now<img
                        className="img-max-width-50"
                        src="img/icons/discord.webp"
                        alt="Google Podcasts"
                      />
                    </a>
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
              <h1 className="nj-section-header-title our-team">Our team</h1>
            </div>
            <div className="team-wrapper">
              <div className="row">
                <div className="col-lg-6">
                  <div className="team-img-wrapper py-5">
                    <a href="/About">
                      <img src="img/team/team.webp" alt="Stellar Team" />
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

      <div className="section nj-dark-section" id="nj-sponsors">
        <div className="container">
          <div className="nj-section-header">
            <h1 className="nj-section-header-title">stellar partners</h1>
          </div>
          <div className="k-row">
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <div
                className="sponsor-img"
                data-anim-queue="3"
                data-anim-type="fade_in_up"
              >
                <a
                  target="blank"
                  href="https://www.facebook.com/sc.krov/"
                  data-cursor-effect="hover"
                >
                  <img
                    className="px-4"
                    src="img/sponsors/dcKrov.webp"
                    alt="Društveni centar KROV"
                  />
                </a>
              </div>
            </div>
            <div className="mb-4">
              <div
                className="sponsor-img"
                data-anim-queue="4"
                data-anim-type="fade_in_up"
              >
                <a
                  target="blank"
                  href="https://brainfactory.rs/"
                  data-cursor-effect="hover"
                >
                  <img
                    className="px-4"
                    src="img/sponsors/brainFactory.webp"
                    alt="Brain Factory"
                  />
                </a>
              </div>
            </div>
            <div className="mb-4">
              <div
                className="sponsor-img"
                data-anim-queue="5"
                data-anim-type="fade_in_up"
              >
                <a
                  target="blank"
                  href="https://birdcageradio.bandcamp.com/"
                  data-cursor-effect="hover"
                >
                  <img
                    className="px-4"
                    src="img/sponsors/birdcageRadio.webp"
                    alt="Birdcage Radio"
                  />
                </a>
              </div>
            </div>
            <div className="mb-4">
              <div
                className="sponsor-img"
                data-anim-queue="6"
                data-anim-type="fade_in_up"
              >
                <a
                  target="blank"
                  href="https://www.facebook.com/erasmusmusicassociation/"
                  data-cursor-effect="hover"
                >
                  <img
                    className="px-4"
                    src="img/sponsors/erasmus.webp"
                    alt="Erasmus Music Association"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}