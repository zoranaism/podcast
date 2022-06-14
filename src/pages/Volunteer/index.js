import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Volunteer = () => {
  return (
    <React.Fragment>
        <div id="nj-preloader-wrapper">
            <div className="nj-preloader-inner">
                <div className="nj-preloader-percentage">0</div>
            </div>
    </div>
    <div className="section nj-hero" id="nj-volunteer">
      <div className="nj-section-header">
        <h1 className="nj-section-header-title">Become a volunteer</h1>
      </div>
      {/* WHY JOIN US SECTION */}
      <div className="section nj-hero">
      <div className="container">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h2>Why would you join?</h2>
      <div className="row icons-row">
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
              <div className="icon-holder">
                <span>
                  <img src="img/icons/celebrating.webp" alt="Fun and Joy" />
                </span>
                <h3>Fun and joy</h3>
              </div>
      </div>
      
      </div>
      </div>
      {/* WHAT WE DO SECTION */}
      <div className="section nj-light-section" 
      data-scroll-to-top-style="dark"
      data-cursor-style="dark">
        <h2>What we do?</h2>
        <div className="container">
        <div className="row icons-row">
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
        </div>
      </div>
      {/* TEAM SECTION */}
      <div className="section nj-dark-section">
      <div className="nj-section-header">
        <h1 className="nj-section-header-title">The team</h1>
      </div>
      </div>
      {/* WHO WE ARE SECTION */}
      <div className="container nj-mt-120">
          <div className="nj-section-header">
            <h1 className="nj-section-header-title-team nj-mt-60 who-we-are">
              who we are
            </h1>
          </div>
        </div>
      <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="nj-section-content">
                The magic we find in other people's originality is the spark
                that is driving our team.
              </p>
              <p className="nj-section-content">
                We are based in Den Bosch, Utrecht, Niš, San Juan, Amsterdam,
                Paris, Toronto, Hague and Belgrade; working from home, connected
                by a universal mind.
              </p>
            </div>
          </div>
        </div>
      <div className="container">
          <div className="row fourth">
            <h3 className="mt-5 col-12" style={{ marginBottom: "25px" }}>
              Stellar Hosts:
            </h3>

            <div
              className="card mb-3 col-lg-4 col-12"
              style={{ marginTop: "0px", border: "none" }}
            >
              <div className="img-box" style={{ width: "18rem" }}>
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
                    <FontAwesomeIcon icon={["fab", "facebook"]} ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.youtube.com/user/kukundrela"
                    data-cursor-effect="hover"
                  >
                    <li>
                    <FontAwesomeIcon icon={["fab", "youtube"] } ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/radina_artsy_chameleon/"
                    data-cursor-effect="hover"
                  >
                    <li>
                    <FontAwesomeIcon icon={["fab", "instagram"]} ></FontAwesomeIcon>
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

{/*             <div
              className="card mb-3 col-lg-4 col-12"
              style={{ marginTop: "0px", border: "none" }}
            >
              <div className="img-box" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
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
                    <FontAwesomeIcon icon={["fab", "twitter"]} ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.youtube.com/channel/UCbeTpbH9rnJVrU4vahU-ZTA "
                    data-cursor-effect="hover"
                  >
                    <li>
                    <FontAwesomeIcon icon={["fab", "youtube"]} ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/jus10williams/"
                    data-cursor-effect="hover"
                  >
                    <li>
                    <FontAwesomeIcon icon={["fab", "instagram"]} ></FontAwesomeIcon>
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            <div className="card-body col-lg-8 col-12 p-3 mb-section">
              <h5 className="card-title">JUSTEN WILLIAMS</h5>
              <p
                className="card-text card-text-host"
                style={{ fontWeight: "400" }}
              >
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

              <div className="nj-read-more-button-wrapper">
                <a
                  className="nj-button nj-button-white"
                  href="justen"
                  data-cursor-effect="exclusion"
                >
                  Find out more
                </a>
              </div>
            </div> */}
            <div
              className="card mb-3 col-lg-4 col-12"
              style={{ marginTop: "0px", border: "none" }}
            >
              <div className="img-box" style={{ width: "18rem" }}>
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
                    <FontAwesomeIcon icon={["fab", "twitch"]} ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.youtube.com/channel/UCtaUa59vPbUIp_Y38f2Ca4w?app=desktop"
                    data-cursor-effect="hover"
                  >
                    <li>
                    <FontAwesomeIcon icon={["fab", "youtube"] } ></FontAwesomeIcon>
                    </li>
                  </a>
                  <a
                    target="blank"
                    href="https://www.instagram.com/davidp4141/"
                    data-cursor-effect="hover"
                  >
                    <li>
                    <FontAwesomeIcon icon={["fab", "instagram"]} ></FontAwesomeIcon>
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
                "Hey all, I am Leanri Paulsen. On my social platforms, I describe myself as a music teacher, book geek, occasional hermit, 
                and an unobstructed unconventional non-traditional utilitarian.  Music has always been a part of my existence, from early 
                piano lessons to sponging up whichever 8-Track tape my parents would stuff into the stereo.  This addiction fueled a passion
                 that drove me to finish a postgraduate degree in music and continue on as a music teacher in my native Namibia.  
                 Music and the creative arts have opened many doors for me and have even led me to indulge in other outlets such as writing 
                 and video editing (see my socials).  These days, however, you can find me streaming from my home in The Netherlands, 
                 chilling with the furkids and lapping up interesting YouTube finds. "
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
                  We are always open for new volunteers. All passionate,
                  like-minded people should take the opportunity of joining the
                  Stellar Team and contribute to the better music world.
                </p>
              </div>
            </div>
            <div className="row justify-content-md-center mt-5">
              <a
                target="blank"
                className="black-button"
                href="mailto:stellarsoundpodcast@gmail.com"
                data-cursor-effect="exclusion"
              >
                become a volunteer
              </a>
            </div>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Volunteer