import React from "react";
import OneTestimonial from "./OneTestimonial";

export default function Testimonials({ testimonialsData, HEADER }) {
  return (
    <div
      className="section nj-light-section"
      data-scroll-to-top-style="dark"
      data-cursor-style="dark"
      style={{ paddingTop: "60px!important", height: "fit-content" }}
    >
      <div className="container">
        <div className="nj-section-header">
          <h1 className="nj-section-header-title our-team">Testimonials</h1>
        </div>
        <div className="row">
          {testimonialsData.map((item, index) => (
            <div key={index} className="col-12 col-md-4 mb-5">
              <OneTestimonial
                name={item.name}
                text={item.text}
                role={item.role}
                img={item.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
