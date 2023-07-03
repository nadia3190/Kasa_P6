import React from "react";
import "./Section.css"
import downArrow from "../../assets/images/down-arrow.svg"


const Section = (props) => {
       return (
        <article key={props.id} className="section">
            <div className="section-title-container">
                <h3 className="section-title">{props.title}</h3>
                <img src={downArrow}alt="icône d'ouverture ou fermeture."/>
            </div>
           
        </article>
    )
    } 

export default Section;