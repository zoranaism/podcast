import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../components/Modal";
import { createPortal } from "react-dom";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";
import { Roles } from "./Roles/roles";

const Volunteer = () => {
  const gaEventTracker = useAnalyticsEventTracker("Volunteer");

  const [galleryImages] = useState([
    "/img/team/i1.webp",
    "/img/team/i2.webp",
    "/img/team/i3.webp",
    "/img/team/i4.webp",
    "/img/team/i5.webp",
    "/img/team/i6.webp",
    "/img/team/i7.webp",
    "/img/team/i8.webp",
    "/img/team/i9.webp",
    "/img/team/i10.webp",
    "/img/team/i11.webp",
    "/img/team/i12.webp",
    "/img/team/i13.webp",
    "/img/team/i14.webp",
    "/img/team/i15.webp",
    "/img/team/i16.webp",
    "/img/team/i17.webp",
    "/img/team/i18.webp",
  ]);
  const [isModalShown, setIsModalShown] = useState(false);
  const [index, setIndex] = useState(0);

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  const imageClickHandler = (index) => {
    setIsModalShown(true);
    setIndex(index);
  };

  const prevHandler = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return galleryImages.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const nextHandler = () => {
    setIndex((prev) => {
      if (prev === galleryImages.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <React.Fragment>
      {isModalShown &&
        createPortal(
          <Modal
            prev={prevHandler}
            next={nextHandler}
            closeModal={closeModalHandler}
            image={galleryImages[index]}
          />,
          document.getElementById("modal-root")
        )}
      <div id="nj-preloader-wrapper">
        <div className="nj-preloader-inner">
          <div className="nj-preloader-percentage">0</div>
        </div>
      </div>
      <div className="section nj-hero" id="nj-volunteer">
        <div className="nj-section-header">
          <h1 className="nj-section-header-title mb-5 mt-5">Become a volunteer</h1>
        </div>

        <div className="container">
          <p>
            Starting with each of us, the music industry can become more
            diverse. You can redefine what is possible for the youth and
            industry we serve by volunteering with Stellar Sound and inspiring
            the future generation by sharing your professional experiences and
            supporting the development of new skills. Start investigating the
            many ways you can contribute to making the music industry more
            inclusive and egalitarian.
          </p>
        </div>

        <div className="section nj-hero" id="nj-volunteer">
          <Roles />
        </div>

        <div className="mt-3 mb-5 container">
          <h3 class="card-title">What we offer:</h3>
          <div className="row">
            <div className="col-12">
              <ul>
                <li>A flexibility working remote</li>
                <li>
                  Working with international teams in a multicultural
                  environment
                </li>
                <li>Working in the entertainment industry</li>
                <li>Space for out-of-the-box and fun content creation</li>
                <li>Support and guidance in learning new skills</li>
                <li>Working with a passionate team with a strong vision</li>
                <li>Work few hours per week</li>
                <li>Usage of modern tools and latest tech</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="section nj-light-section"
          data-scroll-to-top-style="dark"
          data-cursor-style="dark"
        >
          <h1 class="nj-section-header-title mb-5"> what we do?</h1>

          <div className="container">
            <p>
              We are dedicated and actively engaged in supporting and improving
              content in the music industry by empowering musicians', supporting
              racial and gender diversity, exploring, exhibiting, showcasing and
              creating modern art that is combining latest technology and modern
              media.
            </p>
            <p>
              Our purpose is to promote the voice of artistic authenticity all
              over the world. Through grassroots marketing, social media, and
              word of mouth, we run an ongoing campaign to promote artists and
              increase awareness of their work. For the purpose of linking
              artists to a receptive, discerning audience, we put our attention
              on initiatives to expand the general awareness of the arts and
              culture community. These initiatives become projects that expand
              our visibility.
            </p>
          </div>

          <div className="row icons-row">
            <div className="icon-holder">
              <span>
                <img src="img/icons/idea.webp" alt="Education" />
              </span>
              <h3>Independence</h3>
            </div>
            <div className="icon-holder">
              <span>
                <img src="img/icons/live-music.webp" alt="Music Industry" />
              </span>
              <h3>Proactiveness</h3>
            </div>
            <div className="icon-holder">
              <span>
                <img src="img/icons/celebrating.webp" alt="Fun and Joy" />
              </span>
              <h3>Good communication</h3>
            </div>
          </div>
        </div>

        {/* WHO WE ARE SECTION */}
        <div className="container mt-5">
          <div class="nj-section-header ">
            <h1 class="nj-section-header-title mt-5"> who we are</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="nj-section-content">
                We are a group of professionals coming from various backgrounds
                working on the organization and execution of projects. We are
                based all over the world and working via our Discord channel
              </p>
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row fourth">
            <h3 className="mt-5 col-12" style={{ marginBottom: "25px" }}>
              Stellar Sound Podcast Hosts:
            </h3>

            <div
              className="card mb-3 col-lg-3 col-12"
              style={{ marginTop: "0px", border: "none" }}
            >
              <div className="img-box" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
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
                      <FontAwesomeIcon
                        icon={["fab", "facebook"]}
                      ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.youtube.com/user/kukundrela"
                    data-cursor-effect="hover"
                  >
                    <li>
                      <FontAwesomeIcon
                        icon={["fab", "youtube"]}
                      ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/radina_artsy_chameleon/"
                    data-cursor-effect="hover"
                  >
                    <li>
                      <FontAwesomeIcon
                        icon={["fab", "instagram"]}
                      ></FontAwesomeIcon>
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            <div className="card-body col-lg-8 col-12 p-3">
              <h5 className="card-title">RADINA DIMCHEVA</h5>
              <p
                className="card-text card-text-host"
                style={{ fontWeight: "400" }}
              >
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

              <div className="nj-read-more-button-wrapper">
                <a
                  className="nj-button nj-button-white"
                  href="radina"
                  data-cursor-effect="exclusion"
                >
                  Find out more
                </a>
              </div>
            </div>
            <div
              className="card mb-3 col-lg-3 col-12"
              style={{ marginTop: "0px", border: "none" }}
            >
              <div className="img-box" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="img/hosts/Leanri-Paulsen.webp"
                  alt="Leanri"
                />
                <ul>
                  <a
                    target="blank"
                    href="https://www.twitch.tv/vaakriin"
                    data-cursor-effect="hover"
                  >
                    <li>
                      <FontAwesomeIcon
                        icon={["fab", "twitch"]}
                      ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.youtube.com/channel/UCtaUa59vPbUIp_Y38f2Ca4w?app=desktop"
                    data-cursor-effect="hover"
                  >
                    <li>
                      <FontAwesomeIcon
                        icon={["fab", "youtube"]}
                      ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/davidp4141/"
                    data-cursor-effect="hover"
                  >
                    <li>
                      <FontAwesomeIcon
                        icon={["fab", "instagram"]}
                      ></FontAwesomeIcon>
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            <div className="card-body col-lg-8 col-12 p-3">
              <h5 className="card-title">LEANRI PAULSEN</h5>
              <p
                className="card-text card-text-host"
                style={{ fontWeight: "400" }}
              >
                "Hey all, I am Leanri Paulsen. On my social platforms, I
                describe myself as a music teacher, book geek, occasional
                hermit, and an unobstructed unconventional non-traditional
                utilitarian. Music has always been a part of my existence, from
                early piano lessons to sponging up whichever 8-Track tape my
                parents would stuff into the stereo. This addiction fueled a
                passion that drove me to finish a postgraduate degree in music
                and continue on as a music teacher in my native Namibia. Music
                and the creative arts have opened many doors for me and have
                even led me to indulge in other outlets such as writing and
                video editing (see my socials). These days, however, you can
                find me streaming from my home in The Netherlands, chilling with
                the furkids and lapping up interesting YouTube finds. "
              </p>

              <div className="nj-read-more-button-wrapper">
                <a
                  className="nj-button nj-button-white"
                  href="leanri"
                  data-cursor-effect="exclusion"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* JOIN US SECTION */}
        <div
          className="section nj-light-section nj-pdt-60"
          id="nj-single-project-section"
          data-scroll-to-top-style="dark"
          data-cursor-style="dark"
        >
          <div className="container">
            <div className="nj-section-header">
              <h2 className="nj-section-header-title">join us</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="nj-section-content">
                  Apply by sending mail to stellarsoundhr@gmail.com your Resume,
                  position you are applying for, as well as the reason you want
                  to be part of the team
                </p>
              </div>
            </div>

            {/* WHY JOIN US SECTION */}


            {/* WHAT WE DO SECTION */}
            <div className="row justify-content-md-center mt-5">
              <a
                target="blank"
                className="black-button"
                href="mailto:stellarsoundpodcast@gmail.com"
                data-cursor-effect="exclusion"
                onClick={() =>
                  gaEventTracker("become a volunteer volunteer page")
                }
              >
                apply
              </a>
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        {/* <div className="section nj-dark-section" id="team-section">
          <div className="nj-section-header mb-5">
            <h1 className="nj-section-header-title">Gallery</h1>
          </div>
          <div className="container team-images">
            {galleryImages.map((image, index) => {
              return (
                <img
                  onClick={() => imageClickHandler(index)}
                  data-cursor-effect="hover"
                  src={process.env.PUBLIC_URL + image}
                  key={index}
                  alt="gallery"
                />
              );
            })}
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Volunteer;
