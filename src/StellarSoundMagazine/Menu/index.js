import React from "react";
import SingleEpisode from "../../components/OldComponents/AllEpisodesPage.component";

import magazineData from "../magazineData";

import { Link } from "react-router-dom";

export default function Episodes() {
  //Episode data
  const items = magazineData();

  return (
    <main>
      <div id="nj-preloader-wrapper">
        <div className="nj-preloader-inner">
          <div className="nj-preloader-percentage">0</div>
        </div>
      </div>

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
                  Season 1
                </a>
              </li>
              <li>
                <a
                  className="nj-portfolio-filter"
                  href="live"
                  data-cursor-effect="hover"
                >
                  Season 2
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nj-portfolio-wide" id="nj-portfolio-grid">
          <div className="nj-grid-sizer"></div>

          {items.map((item, index) => {
            const {
              typeOfEpisode,
              episodePath,
              imgPath,
              altText,
              guest,
              description,
            } = item;

            return (
              <SingleEpisode
                typeOfEpisode={typeOfEpisode}
                episodePath={episodePath}
                imgPath={imgPath}
                altText={altText}
                guest={guest}
                description={description}
                key={new Date().getTime() + index}
              />
            );
          })}

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
              href="/"
              className="nj-button nj-button-black"
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
