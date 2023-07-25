import React from "react";
import "./Section.scss"
import downArrow from "../../assets/images/down-arrow.svg"
export const paragraph = "paragraph"
export const list = "list"

const Section = (props) => {
     const [isShown, setIsShown] = React.useState(false);

  function toggle() {
    setIsShown((prev) => !prev);
  }

  function renderParagraph() {
    return <p className="section-description">{props.description}</p>;
  }

  function renderList() {
    const amenities = props.equipments.map((item, index) => (
      <li key={index} className="section-li">
        {item}
      </li>
    ));
    return <ul className="section-description">{amenities}</ul>;
  }

  function renderContent() {
    if (props.type === "paragraph") {
      return renderParagraph();
    } else if (props.type === "list") {
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
             {isShown && <div className="section-description animate">{renderContent}</div>}
       
           
        </article>
    )
    } 

export default Section;