import React from "react";

import Image from "../assets/bcq.jpg";

export default function HeroImage() {
  return (
    <div className="hero">
      <img src={Image} alt="Hero Image" />
      <div className="hero-text">
        <h1>Recetas</h1>
        <h2>Para todos</h2>
      </div>
    </div>
  );
}
