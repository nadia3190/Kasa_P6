import React, { useState } from 'react';
import "./Carroussel.scss";
import nextArrow from "../../assets/images/next-arrow.svg";
import previousArrow from "../../assets/images/previous-arrow.svg";





const Carroussel = (props) => {
    const [counter, setCounter] = useState(0);//on initialise le compteur à 0

    const handleNextArrowClick = () => {
        if (counter >= props.images.length - 1) return;//si le compteur est supérieur ou égal à la longueur du tableau d'images, on ne fait rien
        setCounter(counter + 1);//sinon, on incrémente le compteur
    }

    const handlePreviousArrowClick = () => {//si le compteur est inférieur ou égal à 0, on ne fait rien
        if (counter <= 0) return;
        setCounter(counter - 1);//sinon, on décrémente le compteur
    }

    return (
        <div className="carrousel">
            <div className="carrousel-container" style={{ transform: `translateX(-${100 * counter}%)` }}>
                {props.images.map((image, index) => (
                    <img key={index} src={image} alt="Paysage en plan large" />
                ))}
            </div>
            <div className="carrousel-arrow">
                <img src={previousArrow} onClick={handlePreviousArrowClick} className="Carroussel-arrow-previous" alt="Flèche gauche" />
                <img src={nextArrow} onClick={handleNextArrowClick} className="Carroussel-arrow-next" alt="Flèche droite" />
            </div>
        </div>
    );
}

export default Carroussel;
