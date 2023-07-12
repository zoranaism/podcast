import React, { useState } from "react";
import WhatIsSSP from "./components/WhatIsSSP";
import WhatWeDo from "./components/WhatWeDo";
import Modal from "../../components/Modal/Modal";
import { createPortal } from "react-dom";
import Team from "./components/Team";
import Hosts from "./components/Hosts";
import GuestsTestimonials from "./components/GuestsTestimonials";
// import { WhatWeDoSection } from "../About/components/WhatWeDoSection";

export default function About() {
  const [galleryImages] = useState([
    "/img/team/i1.webp",
    // "/img/team/i2.webp",
    // "/img/team/i3.webp",
    // "/img/team/i4.webp",
    // "/img/team/i5.webp",
    // "/img/team/i6.webp",
    // "/img/team/i7.webp",
    "/img/team/i8.webp",
    // "/img/team/i9.webp",
    // "/img/team/i10.webp",
    "/img/team/i11.webp",
    // "/img/team/i12.webp",
    // "/img/team/i13.webp",
    // "/img/team/i14.webp",
    "/img/team/i15.webp",
    // "/img/team/i16.webp",
    // "/img/team/i17.webp",
    // "/img/team/i18.webp",
  ]);
  const [isModalShown, setIsModalShown] = useState(false);
  const [index, setIndex] = useState(0);

  const closeModalHandler = () => {
    setIsModalShown(false);
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

  const imageClickHandler = (index) => {
    setIsModalShown(true);
    setIndex(index);
  };

  return (
    <div>
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
      <>
        <div id="nj-tropical-image"></div>

        <WhatIsSSP />
        {/* <WhatWeDo /> */}
        {/* <WhatWeDoSection /> */}
        {/* <Hosts /> */}
        <GuestsTestimonials />
        <Team
          imageClickHandler={imageClickHandler}
          galleryImages={galleryImages}
        />
      </>
    </div>
  );
}
