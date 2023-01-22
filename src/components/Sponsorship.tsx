import React from "react";

import SponsorshipImage from "../assets/Grupo 7610.png";

export default function Sponsorship() {
  return (
    <div className="sponsorship">
      <div className="sponsorship-title">
        <h2>Con el patrocinio de </h2>
      </div>
      <div className="sponsorship-img">
        <img src={SponsorshipImage} alt="sponsorship" loading="lazy" />
      </div>
    </div>
  );
}

