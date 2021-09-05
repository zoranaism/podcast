import React from "react";

export default function EpisodeComponent({
  episodeName,
  host,
  guest,
  guestLink,
  spotifyLink,
  youtubeLink,
  applePodcastsLink,
  sponsor,
  spotifyPlayerLink,
  description1,
  description2,
  description3,
  description4,
  guestsImagePath,
  prevEpisodePath,
  prevEpisodeImgPath,
  prevEpisode,
  nextEpisodePath,
  nextEpisodeImgPath,
  nextEpisode,
}) {
  return (
    <div>
      <div
        className="section nj-light-section nj-pdt-60"
        id="nj-single-project-section"
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
      >
        <div className="container sponsor-container">
          <div className="d-flex justify-content-between">
            <div className="nj-single-project-title-wrapper sponsor-title">
              <h1 className="nj-single-project-header">{episodeName}</h1>
              <h3 className="nj-single-project-header">
                Host:
                {host === "radina" ? (
                  <a
                    data-cursor-effect="exclusion"
                    className="link-style"
                    href="https://www.youtube.com/user/kukundrela"
                    target="blank"
                  >
                    {host}{" "}
                  </a>
                ) : (
                  <div>update justins link here</div>
                )}
                | Guest:
                <a
                  data-cursor-effect="exclusion"
                  className="link-style"
                  href={guestLink}
                  target="blank"
                >
                  {guest}
                </a>
              </h3>

              <div className="socials-icons mt-4">
                <span>Find this episode on: </span>

                <div className="d-inline align-middle mb-4">
                  <a href={spotifyLink} target="blank">
                    <i className="fab fa-spotify fa-2x"></i>
                  </a>
                  <a href={youtubeLink} target="blank">
                    <i className="fab fa-youtube fa-2x"></i>
                  </a>
                  <a href={applePodcastsLink} target="blank">
                    <i className="fas fa-podcast fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="nj-single-project-title-wrapper sponsor-sponsor">
              <h3
                className="nj-single-project-header"
                style={{ marginTop: "0px !important" }}
              >
                Sponsor of this episode:
              </h3>
              {sponsor === "fae-games" && (
                <a className="ep-sponsor" href="https://www.faegames.com/">
                  <img
                    src="img/sponsors/fae-games.webp"
                    alt="sponsor"
                    data-cursor-effect="exclusion"
                  />
                </a>
              )}
            </div>
          </div>

          <div className="row">
            {/* LEFT SIDE CONTENT */}
            <div className="col-md-6">
              <div className="nj-single-project-wrapper">
                {/* SPOTIFY EMBBED */}
                <div>
                  <iframe
                    src={spotifyPlayerLink}
                    width="100%"
                    height="232"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                {/* SPOTIFY EMBBED - END */}

                {/* EPISODE DESCRIPTION */}
                <div className="nj-single-project-description-wrapper mt-4">
                  <p>{description1}</p>
                  <p>{description2}</p>
                </div>

                <div className="nj-single-project-description-wrapper">
                  <p>{description3}</p>
                  <p>{description4}</p>
                </div>
                {/* EPISODE DESCRIPTION - END */}
              </div>
            </div>
            {/* LEFT SIDE CONTENT - END */}

            {/* RIGHT SIDE CONTENT */}
            <div className="col-md-6">
              <div className="nj-single-project-image-wrapper">
                <a className="ntf-image-popup" href={guestsImagePath}>
                  <img
                    src={guestsImagePath}
                    alt="Leo"
                    data-cursor-effect="exclusion"
                  />
                </a>
              </div>
            </div>
            {/* RIGHT SIDE CONTENT */}
          </div>

          <div className="nj-blog-afterline"></div>

          <div className="row">
            {/* PREVIOUS EPISODE */}
            <div className="col-md-6">
              {prevEpisode && <div>Previous episodd</div>}
            </div>
            {/* PREVIOUS EPISODE - END */}

            {/* NEXT EPISODE */}
            <div className="col-md-6">
              {nextEpisode !== " " && 
                <div className="nj-read-also-right">
                  <div className="row">
                    <div className="col-md-6">
                      <a href={nextEpisodePath} data-cursor-effect="exclusion">
                        <div className="nj-read-also-right-image-wrapper">
                          <img
                            className="mb-4 nj-read-also-right-image"
                            src={nextEpisodeImgPath}
                            alt="Previous episode"
                            data-cursor-style="blend"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="col-md-6 text-right">
                      <div className="nj-read-also-right-text-wrapper mr-3">
                        <a href={nextEpisodePath} data-cursor-effect="hover">
                          <div className="nj-read-also-holder">
                            <h4 className="nj-read-also-header">
                              Next episode
                            </h4>
                          </div>
                          <h5 className="nj-read-also-right-text-header mb-4">
                            {nextEpisode}
                          </h5>
                          <div className="nj-read-also-right-arrow">
                            <svg
                              width="46"
                              height="32"
                              viewBox="0 0 46 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M44.8437 15.3516L30.4531 0.960936C30.2187 0.726561 29.9375 0.609374 29.6094 0.609374C29.2656 0.609374 28.9766 0.726561 28.7422 0.960936C28.5078 1.19531 28.3906 1.47656 28.3906 1.80469C28.3906 2.13281 28.5078 2.41406 28.7422 2.64844L41.0937 15L2 15C1.67187 15 1.39062 15.1172 1.15625 15.3516C0.921874 15.5859 0.804686 15.8672 0.804687 16.1953C0.804687 16.5234 0.921874 16.8047 1.15625 17.0391C1.39062 17.2734 1.67187 17.3906 2 17.3906L41.0937 17.3906L28.7422 29.7422C28.5078 29.9766 28.3906 30.2656 28.3906 30.6094C28.3906 30.9375 28.5078 31.2187 28.7422 31.4531C28.8672 31.5625 29.0078 31.6484 29.1641 31.7109C29.3047 31.7734 29.4531 31.8047 29.6094 31.8047C29.75 31.8047 29.8984 31.7734 30.0547 31.7109C30.1953 31.6484 30.3281 31.5625 30.4531 31.4531L44.8437 17.0391C45.0781 16.8047 45.1953 16.5234 45.1953 16.1953C45.1953 15.8672 45.0781 15.5859 44.8437 15.3516Z"
                                fill="black"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
            {/* NEXT EPISODE - END */}
          </div>
        </div>
      </div>
    </div>
  );
}
