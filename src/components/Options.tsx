import React from "react";

import Vegetariano from "../assets/icons/ic_vegetarian.svg";
import Principales from "../assets/icons/ic_main.svg";
import Tortas from "../assets/icons/ic_cake.svg";
import Rapida from "../assets/icons/ic_fast-food.svg";
import MenuNinos from "../assets/icons/ic_kids.svg";
import Sopas from "../assets/icons/ic_soup.svg";

export default function Options() {
  return (
    <div className="options">
      <ul className="cointainer-options-link">
        <li>
          <div className="img-container">
            <img src={Vegetariano} alt="Vegetariano" />
          </div>
          <p>Vegetariano</p>
        </li>
        <li>
          <div className="img-container">
            <img src={Principales} alt="Principales" />
          </div>
          <p>Principales</p>
        </li>
        <li>
          <div className="img-container">
            <img src={Tortas} alt="Tortas" />
          </div>
          <p>Tortas</p>
        </li>
        <li>
          <div className="img-container">
            <img src={Rapida} alt="Rapida" />
          </div>
          <p>Rapida</p>
        </li>
        <li>
          <div className="img-container">
            <img src={MenuNinos} alt="Menu Ninos" />
          </div>
          <p>Menu Ninos</p>
        </li>
        <li>
          <div className="img-container">
            <img src={Sopas} alt="Sopas" />
          </div>
          <p>Sopas</p>
        </li>
      </ul>
    </div>
  );
}

