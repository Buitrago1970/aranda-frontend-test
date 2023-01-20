import React from "react";

import defaultlImage from "../assets/Ojingeo-muchim-5.png"
import startIcon from "../assets/icons/ic_star.svg"
import likeIcon from "../assets/icons/ic_favorite.svg"


export default function NewRecipes() {
  return (
    <div className="new-recipes">
        <div className="recipes-title">
            <h2 >Nuevas Recetas</h2>
         </div>
         <div className="container-new-recipes">
            <div className="new-recipe-item">
                <div className="recipe-image">
                    <img src={defaultlImage} alt="recipe"/>
                </div>
                <div className="recipe-info">
                    <div className="container-recipe-title">
                    <h3 className="title-name">Recipe</h3>
                    <h3 className="title-product"> Title</h3>
                    </div>
                    <div className="recipe-ratings">
                        <div className="score">
                           <img src={startIcon} width={23} height={23} alt='star icon'/>
                            <p>5.0</p>
                        </div>
                        <div className="like">
                        <img src={likeIcon} width={23} height={23} alt='star icon'/>

                        </div>
                    </div>    
                </div>   
            </div>   
            <div className="new-recipe-item">
                <div className="recipe-image">
                    <img src={defaultlImage} alt="recipe"/>
                </div>
                <div className="recipe-info">
                    <div className="container-recipe-title">
                    <h3 className="title-name">Recipe</h3>
                    <h3 className="title-product"> Title</h3>
                    </div>
                    <div className="recipe-ratings">
                        <div className="score">
                           <img src={startIcon} width={23} height={23} alt='star icon'/>
                            <p>5.0</p>
                        </div>
                        <div className="like">
                        <img src={likeIcon} width={23} height={23} alt='star icon'/>

                        </div>
                    </div>    
                </div>   
            </div>   
            <div className="new-recipe-item">
                <div className="recipe-image">
                    <img src={defaultlImage} alt="recipe"/>
                </div>
                <div className="recipe-info">
                    <div className="container-recipe-title">
                    <h3 className="title-name">Recipe</h3>
                    <h3 className="title-product"> Title</h3>
                    </div>
                    <div className="recipe-ratings">
                        <div className="score">
                           <img src={startIcon} width={23} height={23} alt='star icon'/>
                            <p>5.0</p>
                        </div>
                        <div className="like">
                        <img src={likeIcon} width={23} height={23} alt='star icon'/>

                        </div>
                    </div>    
                </div>   
            </div>   
            <div className="new-recipe-item">
                <div className="recipe-image">
                    <img src={defaultlImage} alt="recipe"/>
                </div>
                <div className="recipe-info">
                    <div className="container-recipe-title">
                    <h3 className="title-name">Recipe</h3>
                    <h3 className="title-product"> Title</h3>
                    </div>
                    <div className="recipe-ratings">
                        <div className="score">
                           <img src={startIcon} width={23} height={23} alt='star icon'/>
                            <p>5.0</p>
                        </div>
                        <div className="like">
                        <img src={likeIcon} width={23} height={23} alt='star icon'/>

                        </div>
                    </div>    
                </div>   
            </div>   
        </div>   
    </div>
  );
}
