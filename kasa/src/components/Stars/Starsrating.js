import React from "react";
import pinkVector from "../../assets/images/pink-star-vector.svg"
import greyVector from "../../assets/images/grey-star-vector.svg"
import "./Starsrating.scss"
const StarRating=(props) => {
    const ratingRange = [1, 2, 3, 4, 5]
    const stars = ratingRange.map((item, i) => {
      return props.rating >= item ? 
        <img key={i} src={pinkVector} className="st" alt="icône étoile"/> : 
        <img key={i} src={greyVector} className="st" alt="icône étoile"/>
    })
    return (
      <div className="stars">
        {stars}
      </div>
    );
  };

export default StarRating;