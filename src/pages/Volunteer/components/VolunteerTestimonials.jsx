import Testimonials from "../../../components/Testimonials/Testimonials";
import React from "react";

const testimonialsData = [
  {
    name: "Zsolt Argyelan",
    text: "The concept is great, the duration of the podcast is perfect. Host's preparatory and well as interview was flawless.",
    role: "guest",
    img: "zsolt-image",
  },
  {
    name: "Aleksandra Denda",
    text: "Great, dedicated professional crew of people. It was my utmost pleasure to take part in the podcast.",
    role: "guest",
    img: "aleksandra-denda",
  },
  {
    name: "Milan Miric",
    text: "You guys are awesome and I love what you do. Great team of people, incredibly fun and welcoming host and I hope that you only grow more and more. Keep it up!",
    role: "guest",
    img: "milan-miric",
  },
];

export const VolunteerTestimonials = () => {
  return <Testimonials testimonialsData={testimonialsData} />;
};
