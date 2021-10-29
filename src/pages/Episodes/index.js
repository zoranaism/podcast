import React from "react";
import SingleEpisode from "../../components/EpisodesPage.component";

const episodes = [
  {
    typeOfEpisode: "pilot",
    episodePath: "episode-9",
    imgPath: "img/episodes/episodes-cover/pilot/episode-5-cover.webp",
    altText: "Stellar Sound Podcast Pilot: Episode 5",
    guest: "Ania Anahata",
    description: "Ethno multi-dimensional Leo music artist",
  },
  {
    typeOfEpisode: "pilot",
    episodePath: "episode-8",
    imgPath:
      "img/episodes/episodes-cover/live/live-streaming-episode4-cover-orlando-dees.webp",
    altText: "Stellar Sound Podcast Pilot: Episode 5",
    guest: "Orlando Dees",
    description: `Orlando is a singer-songwriter originally from Galicia,
    Spain. The identity of his music project begins with a
    flamenco guitar and airy and soft voices, occasionally
    accompanied by synthesizers.`,
  },
  {
    typeOfEpisode: "pilot",
    episodePath: "episode-7",
    imgPath: "img/episodes/episodes-cover/pilot/episode-4-cover.webp",
    altText: "Stellar Sound Podcast Pilot: Episode 4",
    guest: "Zsolt Argyelan",
    description: `Traveling jazz trumpet player and music producer in the
    middle of his debut EP creation.`,
  },
  {
    typeOfEpisode: "live",
    episodePath: "episode-6",
    imgPath:
      "img/episodes/episodes-cover/live/live-streaming-episode3-cover-milan-miric.webp",
    altText: "Stellar Sound Podcast Live: Episode 3",
    guest: "Milan Mirić",
    description: `Alternative rock band from Nis, Serbia.`,
  },
  {
    typeOfEpisode: "live",
    episodePath: "episode-5",
    imgPath:
      "img/episodes/episodes-cover/live/live-streaming-episode2-cover-anne-van-damme.webp",
    altText: "Stellar Sound Podcast Live: Episode 2",
    guest: "Anne van Damme",
    description: `A pure, passionate professional musician, songwriter,
    entrepreneur, and music educator.`,
  },
  {
    typeOfEpisode: "live",
    episodePath: "episode-4",
    imgPath:
      "img/episodes/episodes-cover/live/live-streaming-episode-cover-gamma.webp",
    altText: "Stellar Sound Podcast Live: Episode 1",
    guest: "GAMMA",
    description: `Creative process, autism and mental health of a musician,
    style and uniqueness of the autor's work, irish bouzouki and
    many more!`,
  },
  {
    typeOfEpisode: "pilot",
    episodePath: "episode-3",
    imgPath:
      "img/episodes/episodes-cover/pilot/Episode-3-cover-aleksandra-denda.webp",
    altText: "Stellar Sound Podcast Pilot: Episode 3",
    guest: "Aleksandra Denda",
    description: `Living in New York and moving back to Serbia amidst the
    pandemic, being an international musician, co-founding
    traditional serbian vocal group ROSA, musical influences,
    creative process and ‘’Dreamer’’ EP, experience as a music
    educator, impact of pandemic on the mental health, new
    release for international jazz day...`,
  },
  {
    typeOfEpisode: "pilot",
    episodePath: "episode-2",
    imgPath:
      "img/episodes/episodes-cover/pilot/episode-cover-without-logo.webp",
    altText: "Stellar Sound Podcast Pilot: Episode 2",
    guest: "HunBjørn",
    description: `Music education and what skills serve once done, autotune,
    mental state during the pandemic, journal 3 pages a day,
    gender in the music business, social media, strategies to
    improve creativity, Harry Potter...`,
  },
  {
    typeOfEpisode: "pilot",
    episodePath: "episode-1",
    imgPath: "img/episodes/episodes-cover/pilot/episode-1-cover.webp",
    altText: "Stellar Sound Podcast Pilot: Episode 1",
    guest: `Leo from "Just Leo"`,
    description: `Creative process, autism and mental health of a musician,
    style and uniqueness of the autor's work, irish bouzouki and
    many more!`,
  },
];

export default function Episodes() {
  return (
    <main>
      <div
        className="section nj-light-section nj-portfolio-section nj-pdt-0 nj-pdb-0"
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
      >
        <div className="container ">
          <div className="nj-section-header-episodes">
            <h1 className="nj-section-header-title-episodes pt-120px">
              all episodes
            </h1>
          </div>
          <div className="nj-portfolio-filters" id="nj-portfolio-filters">
            <ul className="nj-inline-list">
              <li>
                <a
                  className="nj-portfolio-filter is-active"
                  href="all"
                  data-cursor-effect="hover"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className="nj-portfolio-filter"
                  href="pilot"
                  data-cursor-effect="hover"
                >
                  Pilot Episodes
                </a>
              </li>
              <li>
                <a
                  className="nj-portfolio-filter"
                  href="live"
                  data-cursor-effect="hover"
                >
                  Stellar Live
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nj-portfolio-wide" id="nj-portfolio-grid">
          <div className="nj-grid-sizer"></div>

          {/* SingleEpisode component */}

          {episodes.map((episode) => {
            const {
              typeOfEpisode,
              episodePath,
              imgPath,
              altText,
              guest,
              description,
            } = episode;
            return (
              <SingleEpisode
                typeOfEpisode={typeOfEpisode}
                episodePath={episodePath}
                imgPath={imgPath}
                altText={altText}
                guest={guest}
                description={description}
              />
            );
          })}

          {/* SingleEpisode component */}
        </div>
      </div>

      <div className="nj-clearfix"></div>
      <div
        className="section nj-light-section nj-pdt-0 nj-pdb-0 "
        data-scroll-to-top-style="dark"
        data-cursor-style="dark"
      >
        <div className="row text-center">
          <div className="nj-button-wrapper nj-pdt-60 nj-pdb-60">
            <a
              className="nj-button nj-button-black"
              href="index.html"
              data-cursor-effect="hover"
            >
              GO HOME
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
