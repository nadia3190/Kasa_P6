import React, { useState } from 'react';
import "./Carroussel.scss";
import nextArrow from "../../assets/images/next-arrow.svg";
import previousArrow from "../../assets/images/previous-arrow.svg";





const Carroussel = (props) => {
    const maxIndex = props.images.length - 1; 

    const [counter, setCounter] = React.useState(0); 

    function prevImage() {
          setCounter(prevIndex => prevIndex === 0 ? maxIndex : prevIndex - 1)
    }

    function nextImage() {
        setCounter(prevIndex => prevIndex === maxIndex ? 0 : prevIndex + 1)
    }
    const carrouselImages = props.images.map((image, index) => (
        <div key={index} className={counter === index ? "carrousel-slide carrousel-active" : "carrousel-slide"}>
            {index === counter && <img src={image} className="carrousel-image" alt="Carrousel d'images du logement." />}
        </div>
    ));

   return (
        <figure className="carrousel">
            {carrouselImages}
            {props.images.length > 1 && 
                <div>
                    <img src={previousArrow} onClick={prevImage} className="carrousel-arrow previous" alt="Icône de défilement en avant du carrousel."/> 
                    <img src={nextArrow} onClick={nextImage} className="carrousel-arrow next" alt="Icône de défilement en arrière du carrousel."/> 
                    <figcaption className="carrousel-caption">{counter+1}/{maxIndex+1}</figcaption>
                </div>
            }
        </figure>
    )
}

export default Carroussel;
