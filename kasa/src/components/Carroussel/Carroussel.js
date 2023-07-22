import React from 'react';
import "./Carroussel.scss"
import nextArrow from "../../assets/images/next-arrow.svg"
import previousArrow from "../../assets/images/previous-arrow.svg"



const Carroussel = (props) => {
    return (
        <div className="carrousel">
            <img src={props.image} className="carrousel-container" alt="Paysage en plan large" />
            <div className="carrousel-arrow">
                <img src={previousArrow} className="Carroussel-arrow-previous" alt="Flèche gauche" />
                <img src={nextArrow} className="Carroussel-arrow-next" alt="Flèche droite" />
            </div>
        </div>
    );
}




export default Carroussel


