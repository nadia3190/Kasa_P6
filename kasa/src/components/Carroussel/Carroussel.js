import React, { useState } from 'react';
import "./Carroussel.scss";
import nextArrow from "../../assets/images/next-arrow.svg";
import previousArrow from "../../assets/images/previous-arrow.svg";





const Carroussel = (props) => {
    const [counter, setCounter] = useState(0);

    const handleNextArrowClick = () => {
        if (counter >= props.images.length - 1) return;
        setCounter(counter + 1);
    }

    const handlePreviousArrowClick = () => {
        if (counter <= 0) return;
        setCounter(counter - 1);
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
