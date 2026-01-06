import React, { useState } from "react";
import "./textSlider.css";

const TextSlider = () => {
  const texts = [
    "Look for store Pickup at Checkout",
    "Free delivery for orders over $50",
    "New arrivals available now"
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? texts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="text-slider">
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <p className="slider-text">{texts[index]}</p>

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default TextSlider;
