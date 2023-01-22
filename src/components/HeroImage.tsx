import Image from "../assets/bcq.jpg";

export default function HeroImage() {
  return (
    <div className="hero">
      <img src={Image} alt="Hero Image" loading="lazy" />
      <div className="hero-text">
        <h1>Recetas</h1>
        <h2>para todos</h2>
      </div>
    </div>
  );
}

