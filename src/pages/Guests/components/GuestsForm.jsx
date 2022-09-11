import React from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import useAnalyticsEventTracker from "../../../useAnalyticsEventTracker";

library.add(fab);

export default function GuestsForm() {
  const gaEventTracker = useAnalyticsEventTracker("GuestsForm");

  return (
    <div className="contact">
      <div className="form w-100 mb-3">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-12 col-md-8">
            <form
              id="contact-form"
              className="contact-form"
              action="https://formspree.io/f/meqdevld"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="Full Name">
                  Full Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="contact-form-text"
                  type="text"
                  id="Full Name"
                  name="Full Name"
                  size="50"
                  required
                />
                <div id="error"></div>
              </div>

              <div className="form-group">
                <label htmlFor="Band Name">
                  Artistic/Band Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="contact-form-text"
                  type="text"
                  id="Band Name"
                  name="Band Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="link">
                  Share one link with us (website is the best)
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="contact-form-text"
                  type="text"
                  id="Link"
                  name="Link"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="Email">
                  Your Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="contact-form-text"
                  type="email"
                  id="Email"
                  name="Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="One liner">
                  Describe yourself in one line
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="contact-form-text"
                  type="email"
                  id="One liner"
                  name="One liner"
                  required
                />
                <span className="instructions">
                  This one-liner will be used as an Episode Cover Description.
                  For example: "One of the few female music producers, a
                  singer-songwriter, a multi-instrumentalist and gender
                  activist" or "Leo or "Just Leo" is a bassist,
                  singer-songwriter and a multi-instrumentalist from The
                  Netherlands
                </span>
              </div>

              <div className="form-group">
                <label>
                  Tell us about your music career
                  <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  className="contact-form-text"
                  name="Music career"
                  id="Music career"
                  rows="4"
                  cols="40"
                  required
                ></textarea>
                <span className="instructions">
                  50-100 words long, this text will be used as your introduction
                </span>
              </div>

              <div className="form-group">
                <label>
                  Any topics you would like to avoid
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className="contact-form-text"
                  type="text"
                  id="Avoid question"
                  name="Avoid question"
                  required
                />
              </div>

              {/* song breakdown section */}
              <div className="form-group mt-5">
                <h5>“Song breakdown” rubric</h5>

                <label>
                  In this rubric you are showcasing one of your songs. You
                  should as a tutorial analyze one of your songs and explain
                  production, progressions, timbre, lyrics and any other
                  technical choices you prefer. This video will be available
                  exclusively to our Discord server “Stellar Sound Community”
                  and has educational purposes. This rubric is mandatory to all
                  our guests.
                </label>
                <label>
                  Chose one: <span style={{ color: "red" }}>*</span>
                </label>
                <label style={{ display: "flex" }}>
                  <input
                    type="radio"
                    name="Song breakdown"
                    value="I will record song breakdown on my own and send via mail."
                    required
                  />
                  <div className="ml-3 text-left">
                    Record at home your screen and showcase a DAW project of one
                    of your songs in the duration of 15-20 minutes and send to
                    stellarsoundpodcast@gmail.com
                  </div>
                </label>

                <label style={{ display: "flex" }}>
                  <input
                    type="radio"
                    name="Song breakdown"
                    value="Verbaly ask me questions for this rubric during the interview."
                    required
                  />
                  <div className="ml-3 text-left">
                    We verbally ask questions during the interview. There is no
                    special preparation needed from your side, you will just on
                    spot answer questions.
                  </div>
                </label>
              </div>
              {/* song breakdown section - end */}

              {/* galactic trinity section */}
              <div className="form-group mt-5">
                <h5>Consider “Galactic Trinity” rubric (optional)</h5>

                <label>
                  Prepare the 3 of your collection to showcase any 3 objects
                  that mean something special to you. Your favorite instrument,
                  records, gadgets, anything that inspired your music journey…
                </label>
                <label>
                  Chose one: <span style={{ color: "red" }}>*</span>
                </label>
                <label style={{ display: "flex" }}>
                  <input
                    type="radio"
                    name="Galactic trinity"
                    value="Yes, I want to prepare 3 items for the Galactic Trinity"
                    required
                  />
                  <div className="ml-3 text-left">
                    Yes I will prepare 3 objects of my choice
                  </div>
                </label>

                <label style={{ display: "flex" }}>
                  <input
                    type="radio"
                    name="Galactic trinity"
                    value="No I want to skip Galactic Trinity rubric"
                    required
                  />
                  <div className="ml-3 text-left">
                    I want to skip this rubric
                  </div>
                </label>
              </div>
              {/* galactic trinity section - end */}

              {/* the interview confirm terms */}
              <div className="form-group mt-5 mb-5">
                <h5>The Interview</h5>
                <label>
                  The Interview is recorded via video call. It will be a
                  relaxed, non-formal chat in a spontaneous discussion. The
                  recording will last up to 2 hours and will be recorded in a
                  video format. We suggest to use your best microphone, plan
                  your room background (we love you showing off your music
                  studio), plan the light source to be the opposite of you
                </label>
                <h5 className="mt-5">Riverside</h5>
                <label>
                  For recording we are using an in-browser platform called
                  Riverside. This platform is recording your video & audio via
                  browser and it's a phenomenal tool! You will receive an email
                  invitation with a link before the interview. We are suggesting
                  using any browser except Safari, as we have faced multiple
                  technical issues. Also, this platform requires fast internet.
                  Make sure you find a place with a good protocol. More on:{" "}
                  <a href="https://riverside.fm/">Riverside Website</a>
                </label>
                <h5 className="mt-5">Stellar Sound Foundation</h5>
                <label>
                  Under the roof of the Stellar Sound Foundation, we are a
                  non-profit organization operating by donations and
                  partnerships in order to create diverse projects in the field
                  of Music, Technology and Art. More on:{" "}
                  <a href="www.stellarsoundfoundation.com">
                    Stellar Sound Foundation Website
                  </a>
                </label>

                <h5 className="mt-5">Stellar Volunteers</h5>
                <label>
                  We are an international group of musicians and music
                  enthusiasts working online. We are always open for new
                  volunteers. Help us find new volunteers by promoting on our
                  social media. More on:{" "}
                  <a href="https://www.stellarsoundpodcast.com/become-a-volunteer">
                    Become a volunteer
                  </a>
                </label>
                <h5 className="mt-5">Stellar Sound Podcast</h5>
                <label>
                  Stellar Sound Podcast is a podcast here to empower, encourage
                  and promote creative musicians. We are available on all
                  podcast streaming services like Spotify, Apple Podcasts,
                  Google Podcasts, as well as on Youtube including video. Find
                  out more on our website:{" "}
                  <a href="www.stellarsoundpodcast.com">
                    Stellar Sound Podcast Website
                  </a>
                </label>
                <h5 className="mt-5">Partnerships</h5>
                <label>
                  To all organizations and potential partners contact us on:{" "}
                  <a href="mailto:stellarsoundpartnerships@gmail.com">
                    Partnerships contact
                  </a>
                </label>

                <label style={{ display: "flex" }}>
                  <input
                    type="Read text"
                    name="Read text"
                    value="I read and understood how interview functions."
                    required
                  />
                  <div className="ml-3">
                    I have read and agree with the above information
                    <span style={{ color: "red" }}>*</span>
                  </div>
                </label>
              </div>
              {/* the interview confirm terms - end */}

              <div className="container mt-3">
                <div className="row center">
                  <button
                    onClick={() => gaEventTracker("Send guests form")}
                    type="submit"
                    data-cursor-effect="exclusion"
                    className="text-center"
                  >
                    Send
                  </button>
                </div>
              </div>
              <div
                id="status"
                style={{ display: "initial", padding: "30px" }}
              ></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
