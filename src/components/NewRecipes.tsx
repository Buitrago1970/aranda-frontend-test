import {useState, useContext} from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import startIcon from "../assets/icons/ic_star.svg";
import likeIcon from "../assets/icons/ic_favorite.svg";
import Slider from 'react-slick';
import { AppContext } from "../context/AppContext";

import ojingeoMuchin from "../assets/Ojingeo-muchim-5.png";
import ojingeoMuchin2 from "../assets/Ojingeo-muchim-1.png";
import ojingeoMuchim3 from "../assets/Ojingeo-muchim.png";
import cherry from "../assets/cherry.png";

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
          breakpoint: 695,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,

          }
        },
        {
          breakpoint: 428,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,

          }
        }
      ]
      };
      const [isHovered, setIsHovered] = useState(false);
      const {state}  = useContext(AppContext);
      console.log(state.recipes , 'recipes');
      

  return (
    <div className="new-recipes">
      <div className="recipes-title">
        <h2>Nuevas Recetas</h2>
      </div>
      <div className="container-new-recipes">
      <Slider {...settings}>
        {/* Example of how it would look like using the api */}
        {/* { state.recipes && state.recipes.lenght > 0 &&
          state.recipes.map((recipe: any) => (
            <div 
            className={`new-recipe-item ${isHovered ? 'hovered' : ''}`}   
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              <div className="recipe-image">
                <img src={ojingeoMuchin} alt="recipe" loading="lazy" />
              </div>
              <div className="recipe-info">
                <div className="container-recipe-title">
                  <h3 className="title-name">{recipe.title}</h3>
                  <h3 className="title-product"> {recipe.title}</h3>
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
                    <img src={recipe.image} alt="" />
                  </div>
                  <p className="recipe-preparation-title">Tamaño de la porcion</p>
                  <p className="recipe-preparation-subtitle">{recipe.portions}</p>
                </div>
                <div className="item-recipe-preparation">
                  <div className="container-img">
                    <img src={timeIcon} alt="" />
                  </div>
                  <p className="recipe-preparation-title">Tiempo de preparacion</p>
                  <p className="recipe-preparation-subtitle">{recipe.preparationTime}</p>
                </div>
                <div className="item-recipe-preparation">
                  <div className="container-img">
                    <img src={difficultyIcon} alt="" />
                  </div>
                  <p className="recipe-preparation-title">Dificultad</p>
                  <p className="recipe-preparation-subtitle">{recipe.difficulty}</p>
                </div>
              </div>
            </div>)
          )
        } */}
      <div 
      className={`new-recipe-item ${isHovered ? 'hovered' : ''}`}   
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div className="recipe-image">
          <img src={ojingeoMuchin} alt="recipe" loading="lazy" />
        </div>
        <div className="recipe-info">
          <div className="container-recipe-title">
            <h3 className="title-name">Ojingeo</h3>
            <h3 className="title-product"> Muchim</h3>
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
          <img src={ojingeoMuchim3} alt="recipe" loading="lazy" />
        </div>
        <div className="recipe-info">
          <div className="container-recipe-title">
            <h3 className="title-name">Cola</h3>
            <h3 className="title-product">Chickecn</h3>
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
          <img src={ojingeoMuchin2} alt="recipe" loading="lazy" />
        </div>
        <div className="recipe-info">
          <div className="container-recipe-title">
            <h3 className="title-name">Roasted</h3>
            <h3 className="title-product">Carrot</h3>
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
          <img src={cherry} alt="recipe" loading="lazy" />
        </div>
        <div className="recipe-info">
          <div className="container-recipe-title">
            <h3 className="title-name">Sweet</h3>
            <h3 className="title-product">Cherries</h3>
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