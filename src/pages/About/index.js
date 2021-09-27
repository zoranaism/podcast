import React from "react";

export default function About() {
  return (
    <>
      <div id="nj-tropical-image"></div>
      <div class="section parallax" id="#nj-tropical-image">
        <div class="container nj-mt-120" style={{ marginTop: "60px" }}>
          <div class="video-container">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/5vP6h_tH8Qw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div class="nj-section-header">
            <h1 class="nj-section-header-title">about</h1>
          </div>

          <div class="row mb-5">
            <div class="col-12">
              <h3 class="mb-3">What is Stellar Sound Podcast?</h3>
              <p class="nj-section-content">
                The Stellar Sound Podcast brings you inspiration by interviewing
                the most creative, innovative, unique, eccentric, and
                ground-breaking musicians from Europe.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h3 class="mb-3">Vision</h3>
              <p class="nj-section-content">
                Our vision is a world that appreciates quality music, supports
                good musicians, and industry that encourages exploration,
                creativity, and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="section nj-dark-section nj-animated-section nj_animated"
        id="nj-what-we-do"
        data-scroll-to-top-style="dark"
      >
        <div class="container">
          <div class="nj-section-header">
            <h1 class="nj-section-header-title">what we do</h1>
          </div>
        </div>
        <div class="nj-half-light-section-wrapper">
          <div
            class="nj-half-light-section-wrapper-before"
            data-cursor-style="dark"
          ></div>
          <div class="nj-half-light-section-content">
            <div class="container">
              <div class="row" data-cursor-style="dark">
                <div class="col-12 col-lg-4">
                  <div
                    class="nj-simple-card-wrapper nj_animated fade_in_up"
                    data-anim-queue="1"
                    data-anim-type="fade_in_up"
                    style={{ opacity: "0" }}
                  >
                    <div class="nj-simple-card">
                      <div class="nj-simple-card-icon-wrapper">
                        <div class="nj-simple-card-icon">
                          {/* <img src="img/serious.png" alt="Serious">  */}
                        </div>
                      </div>
                      <div class="nj-simple-card-text-wrapper">
                        <h4 class="vision-header">Promote</h4>
                        <p class="nj-simple-card-text">
                          There are many unknown and outstanding music artists.
                          By putting the spotlight on their craft in our
                          Podcast, we are promoting their work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-4">
                  <div
                    class="nj-simple-card-wrapper nj_animated fade_in_up"
                    data-anim-queue="2"
                    data-anim-type="fade_in_up"
                    style={{ opacity: "0" }}
                  >
                    <div class="nj-simple-card">
                      <div class="nj-simple-card-icon-wrapper">
                        <div class="nj-simple-card-icon">
                          {/* <img src="img/silly.png" alt="Silly"> */}
                        </div>
                      </div>
                      <div class="nj-simple-card-text-wrapper">
                        <h4 class="vision-header">Connect</h4>
                        <p class="nj-simple-card-text">
                          If you are a music enthusiast, join our Stellar Music
                          Community Discord server.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-4">
                  <div
                    class="nj-simple-card-wrapper nj_animated fade_in_up"
                    data-anim-queue="3"
                    data-anim-type="fade_in_up"
                    style={{ opacity: "0" }}
                  >
                    <div class="nj-simple-card">
                      <div class="nj-simple-card-icon-wrapper">
                        <div class="nj-simple-card-icon">
                          {/* <img src="img/shinny.png" alt="Shinny">  */}
                        </div>
                      </div>
                      <div class="nj-simple-card-text-wrapper">
                        <h4 class="vision-header">Support</h4>
                        <p class="nj-simple-card-text">
                          In these times it's not easy to keep up as a full time
                          musician. In that sense, we are organizing a support
                          for the most vulnerable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="section nj-light-section nj-pdt-0"
        id="nj-testimonials"
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
        style={{ paddingTop: "60px!important", height: "fit-content" }}
      >
        <div class="container">
          <div class="nj-testimonials-wrapper">
            <div class="nj-testimonials" id="nj-testimonials-slick">
              <div class="nj-testimonial">
                <div class="nj-quote">
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
                <div class="nj-client-testimonial">
                  <p class="nj-client-testimonial-text">
                    The concept is great, the duration of the podcast is
                    perfect, also the preparation work of the hosts, as well how
                    they lead the interviews.
                  </p>
                </div>
                <div
                  class="nj-client-name-wrapper"
                  style={{ display: "flex", alignItems: "baseline" }}
                >
                  <img
                    src="img/episodes/guests/zsolt-image.webp"
                    alt="Zsolt Argyelan"
                    width="50px"
                  />
                  <p class="nj-client-name" style={{ paddingLeft: "15px" }}>
                    <b>Zsolt Argyelan,</b>&nbsp;guest
                  </p>
                </div>
              </div>
              <div class="nj-testimonial">
                <div class="nj-quote">
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
                <div class="nj-client-testimonial">
                  <p class="nj-client-testimonial-text">
                    I liked the voice of the interviewer very much. I also liked
                    when they were talking about real serious topics in a so
                    easy and relaxed manner.
                  </p>
                </div>
                <div class="nj-client-name-wrapper">
                  <p class="nj-client-name">
                    <b>Anonimus survey participant</b>&nbsp;
                  </p>
                </div>
              </div>
              <div class="nj-testimonial">
                <div class="nj-quote">
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
                <div class="nj-client-testimonial">
                  <p class="nj-client-testimonial-text">
                    You guys are awesome and I love what you do. Great team of
                    people, incredibly fun and welcoming host and I hope that
                    you will only grow more and more. Keep it up!
                  </p>
                </div>
                <div
                  class="nj-client-name-wrapper"
                  style={{ display: "flex", alignItems: "baseline" }}
                >
                  <img
                    src="img/episodes/guests/milan-miric.webp"
                    alt="Milan Miric"
                    width="50px"
                  />
                  <p class="nj-client-name" style={{ paddingLeft: "15px" }}>
                    <b>Milan Miric,</b>&nbsp;guest
                  </p>
                </div>
              </div>
            </div>
            <div class="nj-testimonials-slider-arrows">
              <div class="nj-testimonials-slider-next-arrow">
                <span
                  class="lnr lnr-arrow-right"
                  data-cursor-effect="hover"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="section nj-hero"
        id="nj-our-crew"
        data-scroll-to-top-style="dark"
      >
        <div class="container nj-mt-120">
          <div class="nj-section-header">
            <h1 class="nj-section-header-title-team nj-mt-60">who we are</h1>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <p class="nj-section-content">
                The magic we find in other people's originality is the spark
                that is driving our team.
              </p>
              <p class="nj-section-content">
                We are based in Den Bosch, Utrecht, Niš, San Juan, Amsterdam,
                Paris, Toronto, Hague and Belgrade; working from home, connected
                by a universal mind.
              </p>
            </div>
          </div>
        </div>

        {/* <div class="container">
          <div class="row fourth">
            <h3 class="mt-5 col-12" style={{marginBottom: '25px'}}>
              Stellar Hosts:
            </h3>

            <div class="card mb-3 col-lg-4 col-12" style={{marginTop: '0px'}}>
              <div class="img-box" style={{width: '18rem'}}>
                <img
                  class="card-img-top"
                  src="img/hosts/Radina-Dimcheva.webp"
                  alt="Radina"
                />
                <ul>
                  <a
                    target="blank"
                    href="https://www.facebook.com/RadinaTheTheaterEquation"
                    data-cursor-effect="hover"
                  >
                    <li>
                      <i class="fab fa-facebook"></i>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.youtube.com/user/kukundrela"
                    data-cursor-effect="hover"
                  >
                    <li>
                      <i class="fab fa-youtube"></i>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/radina_artsy_chameleon/"
                    data-cursor-effect="hover"
                  >
                    <li>
                      <i class="fab fa-instagram"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            <div class="card-body col-lg-8 col-12 p-3">
              <h5 class="card-title">RADINA DIMCHEVA</h5>
              <p class="card-text card-text-host" style={{fontWeight: '400'}}>
                "I call myself an artsy chameleon; everything creative would
                spark my interest. What brings me joy and meaning is being able
                to connect with people in a deep way over a certain topic; if
                that is related to art and music - even more so! I feel like
                singing allows me to express that in the best way. Currently, I
                am part of two bands, and the idea to join the Stellar Sound
                Podcast felt only natural. In my daily job, I am used to
                interviewing people, so I’m looking forward to all the insights
                we will gather. By education, I am a psychologist, and by heart
                - a creative, vocalist, and overall artistic and empathetic
                person."
              </p>
            </div>

            <div class="card mb-3 col-lg-4 col-12" style={{marginTop: '0px'}}>
              <div class="img-box" style={{width: '18rem'}}>
                <img
                  class="card-img-top"
                  src="img/hosts/Justen-Williams.webp"
                  alt="Justen"
                />
                <ul>
                  <a
                    target="blank"
                    href="https://twitter.com/jus10williams "
                    data-cursor-effect="hover"
                  >
                    <li>
                      <i class="fab fa-twitter"></i>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.youtube.com/channel/UCbeTpbH9rnJVrU4vahU-ZTA "
                    data-cursor-effect="hover"
                  >
                    <li>
                      <i class="fab fa-youtube"></i>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/jus10williams/"
                    data-cursor-effect="hover"
                  >
                    <li>
                      <i class="fab fa-instagram"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            <div class="card-body col-lg-8 col-12 p-3 mb-section">
              <h5 class="card-title">JUSTEN WILLIAMS</h5>
              <p class="card-text card-text-host" style={{fontWeight: '400'}}>
                "Hi there! My name is Justen Williams. I am a comedian, actor
                and podcaster from Toronto, Ontario Canada. I used to operate a
                solo podcast called “The gift of gab” where I would interview a
                wide range of local talent. As an actor, I have not done
                anything too big; but my claim to fame is a commercial on
                YouTube which has 1.2 Million views. I recently teamed-up with
                two other gentlemen to form Pro Sports Podcasters, where we
                interview athletes and where we shed light on sports which do
                not get enough TV time. Finally, as a comic (which is my true
                passion), I have performed in various cities across North
                America, and Germany. I look forward to e-meeting all of you!"
              </p>
            </div>
          </div>
        </div> */}

        <div
          class="section nj-light-section nj-pdt-60"
          id="nj-single-project-section"
          data-scroll-to-top-style="dark"
          data-cursor-style="dark"
        >
          <div class="container">
            <div class="nj-section-header">
              <h2 class="nj-section-header-title">join us</h2>
            </div>
            <div class="row">
              <div class="col-12">
                <p class="nj-section-content">
                  We are always open for new volunteers. All passionate,
                  like-minded pips should take the opportunity of joining the
                  Stellar Team and contribute to the better music world.
                </p>
              </div>
            </div>
            <div class="row justify-content-md-center mt-5">
              <a
                target="blank"
                class="black-button"
                href="mailto:stellarsoundpodcast@gmail.com"
                data-cursor-effect="exclusion"
              >
                become a volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
