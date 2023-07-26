import React from "react";
import "./Section.scss"
import downArrow from "../../assets/images/down-arrow.svg"
import { paragraph, list } from "../../assets/Constantes/constant";


const Section = (props) => {
     const [isShown, setIsShown] = React.useState(false);// c'est un hook qui permet de gérer l'état d'un composant fonctionnel


  function toggle() {// cette fonction permet de changer l'état du composant 
    setIsShown((prev) => !prev);
  }

  function renderParagraph() {// cette fonction permet de rendre un paragraphe
    return <p className="section-description">{props.description}</p>;
  }

   function renderList() {// cette fonction permet de rendre une liste
    return (
      <ul className="section-description">
        {props.equipments.map((item, index) => (
          <li key={index} className="section-li">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  function renderContent() {// cette fonction permet de rendre le contenu de la section
    if (props.type === paragraph) {
      return renderParagraph();
    } else if (props.type === list) {
      return renderList();
    }
    return null;
  }
       return (
        <article key={props.id} className="section">
            <div onClick={toggle} className="section-title-container">
                <h3 className="section-title">{props.title}</h3>
                <img src={downArrow} className={isShown ? "section-icon rotate" : "section-icon"} alt="icône d'ouverture ou fermeture."/>
            </div>
             {isShown && <div className="section-description animate">{renderContent()}</div>}
       
           
        </article>
    )
    } 

export default Section;