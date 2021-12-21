import React from "react";
import SingleEpisode from "../../components/EpisodesPage.component";

import episodesData from "../../allEpisodesData";

import { Link} from "react-router-dom";

const episodes = [
  {
    typeOfEpisode: "pilot",
    episodePath: "episode-9",
    imgPath: "https://d33wubrfki0l68.cloudfront.net/9bb2260ebb387d082cce11464e30adefc3345639/bd957/img/newcoverimg/9.jpg",
    altText: "Stellar Sound Podcast Pilot: Episode 5",
    guest: "Ania Anahata",
    description: "Ethno multi-dimensional Leo music artist",
  },
  {
    typeOfEpisode: "pilot",
    episodePath: "episode-8",
    imgPath:
      "https://d33wubrfki0l68.cloudfront.net/650154161c5687270ef9ed0467d799f2d5d303d2/3e1a8/img/newcoverimg/8.jpg",
    altText: "Stellar Sound Podcast Pilot: Episode 5",
    guest: "Orlando Dees",
    description: `Orlando is a singer-songwriter originally from Galicia,
    Spain. The identity of his music project begins with a
    flamenco guitar and airy and soft voices, occasionally
    accompanied by synthesizers.`,
  },
  {
    typeOfEpisode: "live",
    episodePath: "episode-7",
    imgPath:
    "https://d33wubrfki0l68.cloudfront.net/1fe94c1cf438cb55a650295ebe243cc5b6d4ca72/f0688/img/newcoverimg/7.jpg",
    altText: "Stellar Sound Podcast Live: Episode 2",
    guest: "Anne van Damme",
    description: `A pure, passionate professional musician, songwriter,
    entrepreneur, and music educator.`,
  },
  {
    typeOfEpisode: "pilot",
    episodePath: "episode-6",
    imgPath: "https://d33wubrfki0l68.cloudfront.net/f4acbe7dd99bc4d3a806187b1837261481df7e89/58141/img/newcoverimg/6.jpg",
    altText: "Stellar Sound Podcast Pilot: Episode 4",
    guest: "Zsolt Argyelan",
    description: `Traveling jazz trumpet player and music producer in the
    middle of his debut EP creation.`,
  },
  {
    typeOfEpisode: "live",
    episodePath: "episode-5",
    imgPath:
      "https://d33wubrfki0l68.cloudfront.net/35eca5afe78538560dc82ee9d1cdad38b36206b4/80736/img/newcoverimg/5.jpg",
    altText: "Stellar Sound Podcast Live: Episode 3",
    guest: "Milan Mirić",
    description: `Alternative rock band from Nis, Serbia.`,
  },
  {
    typeOfEpisode: "live",
    episodePath: "episode-4",
    imgPath:
      "https://d33wubrfki0l68.cloudfront.net/b20c28fd5d6217710a92e5417106e71444d0bb92/27d79/img/newcoverimg/4.jpg",
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
      "https://d33wubrfki0l68.cloudfront.net/eebfe64e9ef4fc8d495578aa09b2a7ce0f66a493/951f4/img/newcoverimg/3.jpg",
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
      "https://d33wubrfki0l68.cloudfront.net/be54bad07c87635e123f9f48c2429c492e035d9f/6202a/img/newcoverimg/2.jpg",
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
    imgPath: "https://d33wubrfki0l68.cloudfront.net/39b63f5e866eb049091ec303d305c2c95fe17d6a/c8c6a/img/newcoverimg/1.jpg",
    altText: "Stellar Sound Podcast Pilot: Episode 1",
    guest: `Leo from "Just Leo"`,
    description: `Creative process, autism and mental health of a musician,
    style and uniqueness of the autor's work, irish bouzouki and
    many more!`,
  },
];

export default function Episodes() {

//Episode data
const episodes = episodesData();


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
            <Link
              className="nj-button nj-button-black"
              to="/"
              data-cursor-effect="hover"
            >
              GO HOME
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}