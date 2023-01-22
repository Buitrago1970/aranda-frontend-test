import React,{useState} from "react";

import defaultlImage from "../assets/Ojingeo-muchim-5.png";
import startIcon from "../assets/icons/ic_star.svg";
import likeIcon from "../assets/icons/ic_favorite.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//icons
import portionIcon from "../assets/icons/ic_portion.svg";
import timeIcon from "../assets/icons/ic_time.svg";
import difficultyIcon from "../assets/icons/ic_soup.svg";


export default function NewRecipes() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 428,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
      const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="new-recipes">
      <div className="recipes-title">
        <h2>Nuevas Recetas</h2>
      </div>
      <div className="container-new-recipes">
      <Slider {...settings}>
      <div 
      className={`new-recipe-item ${isHovered ? 'hovered' : ''}`}   
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div className="recipe-image">
          <img src={defaultlImage} alt="recipe" loading="lazy" />
        </div>
        <div className="recipe-info">
          <div className="container-recipe-title">
            <h3 className="title-name">title</h3>
            <h3 className="title-product"> Title</h3>
          </div>
          <div className="recipe-ratings">
            <div className="score">
              <img
                src={startIcon}
                width={23}
                height={23}
                alt="star icon"
                loading="lazy"
              />
              <p>5.0</p>
            </div>
            <div className="like">
              <img
                src={likeIcon}
                width={23}
                height={23}
                alt="star icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="recipe-info-back">
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={portionIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Tamaño de la porcion</p>
            <p className="recipe-preparation-subtitle">4 raciones</p>
          </div>
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={timeIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Tiempo de preparacion</p>
            <p className="recipe-preparation-subtitle">10 minutos</p>
          </div>
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={difficultyIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Dificultad</p>
            <p className="recipe-preparation-subtitle">Facil</p>
          </div>
        </div>
      </div>
      <div 
      className={`new-recipe-item ${isHovered ? 'hovered' : ''}`}   
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div className="recipe-image">
          <img src={defaultlImage} alt="recipe" loading="lazy" />
        </div>
        <div className="recipe-info">
          <div className="container-recipe-title">
            <h3 className="title-name">title</h3>
            <h3 className="title-product"> Title</h3>
          </div>
          <div className="recipe-ratings">
            <div className="score">
              <img
                src={startIcon}
                width={23}
                height={23}
                alt="star icon"
                loading="lazy"
              />
              <p>5.0</p>
            </div>
            <div className="like">
              <img
                src={likeIcon}
                width={23}
                height={23}
                alt="star icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="recipe-info-back">
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={portionIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Tamaño de la porcion</p>
            <p className="recipe-preparation-subtitle">4 raciones</p>
          </div>
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={timeIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Tiempo de preparacion</p>
            <p className="recipe-preparation-subtitle">10 minutos</p>
          </div>
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={difficultyIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Dificultad</p>
            <p className="recipe-preparation-subtitle">Facil</p>
          </div>
        </div>
      </div>
      <div 
      className={`new-recipe-item ${isHovered ? 'hovered' : ''}`}   
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div className="recipe-image">
          <img src={defaultlImage} alt="recipe" loading="lazy" />
        </div>
        <div className="recipe-info">
          <div className="container-recipe-title">
            <h3 className="title-name">title</h3>
            <h3 className="title-product"> Title</h3>
          </div>
          <div className="recipe-ratings">
            <div className="score">
              <img
                src={startIcon}
                width={23}
                height={23}
                alt="star icon"
                loading="lazy"
              />
              <p>5.0</p>
            </div>
            <div className="like">
              <img
                src={likeIcon}
                width={23}
                height={23}
                alt="star icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="recipe-info-back">
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={portionIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Tamaño de la porcion</p>
            <p className="recipe-preparation-subtitle">4 raciones</p>
          </div>
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={timeIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Tiempo de preparacion</p>
            <p className="recipe-preparation-subtitle">10 minutos</p>
          </div>
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={difficultyIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Dificultad</p>
            <p className="recipe-preparation-subtitle">Facil</p>
          </div>
        </div>
      </div>
      <div 
      className={`new-recipe-item ${isHovered ? 'hovered' : ''}`}   
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div className="recipe-image">
          <img src={defaultlImage} alt="recipe" loading="lazy" />
        </div>
        <div className="recipe-info">
          <div className="container-recipe-title">
            <h3 className="title-name">title</h3>
            <h3 className="title-product"> Title</h3>
          </div>
          <div className="recipe-ratings">
            <div className="score">
              <img
                src={startIcon}
                width={23}
                height={23}
                alt="star icon"
                loading="lazy"
              />
              <p>5.0</p>
            </div>
            <div className="like">
              <img
                src={likeIcon}
                width={23}
                height={23}
                alt="star icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="recipe-info-back">
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={portionIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Tamaño de la porcion</p>
            <p className="recipe-preparation-subtitle">4 raciones</p>
          </div>
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={timeIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Tiempo de preparacion</p>
            <p className="recipe-preparation-subtitle">10 minutos</p>
          </div>
          <div className="item-recipe-preparation">
            <div className="container-img">
              <img src={difficultyIcon} alt="" />
            </div>
            <p className="recipe-preparation-title">Dificultad</p>
            <p className="recipe-preparation-subtitle">Facil</p>
          </div>
        </div>
      </div>
    </Slider>    
      </div>
    </div>
  );
}