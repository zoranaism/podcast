import React from "react";

export default function BackToTop() {
  return (
    <div className="nj-scroll-to-top-holder" data-cursor-style="dark">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" data-cursor-effect="hover" id="nj-scroll-to-top">
        Scroll to top
      </a>
    </div>
  );
}
