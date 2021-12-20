import React from "react";
import SingleEpisode from "../../components/EpisodesPage.component";
import episodesData from "../../allEpisodesData";


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