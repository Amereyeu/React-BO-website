import React from 'react'
import hero from "../images/hero.jpg"

function hero() {
  return (
    <div>
      <h2>Music gets you there</h2>
      <p>
        Nothing moves you like music. The more intensely you experience your
        songs, the more motivated you feel. Bang &amp; Olufsen's team of
        world-leading audio engineers have worked to ensure headphones
        deliver high-performance audio that helps you go further.
      </p>
      <img src={hero} alt="hero"/>
    </div>
  );
}

export default hero
    