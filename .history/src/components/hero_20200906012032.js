import React from "react";
import hero from "../images/hero.jpg";

function Hero() {
  return (
    <div className="hero">
      <h2 className="hero__title">Music gets you there</h2>
      <p className="hero__text">
        Nothing moves you like music. The more intensely you experience your
        songs, the more motivated you feel. Bang &amp; Olufsen's team of
        world-leading audio engineers have worked to ensure headphones deliver
        high-performance audio that helps you go further.
      </p>
      <img src={hero} alt="hero" className="hero__image" />
    </div>
  );
}

export default hero;
