import React from 'react';
import './Collapse.scss';
import downArrow from '../../assets/images/down-arrow.svg';
import { paragraph, list } from '../../assets/Constantes/constant';
import PropTypes from 'prop-types';

const Collapse = (props) => {
  const [isShown, setIsShown] = React.useState(false); // c'est un hook qui permet de gérer l'état d'un composant fonctionnel

  function toggle() {
    // cette fonction permet de changer l'état du composant
    setIsShown((prev) => !prev); // prev est l'état précédent du composant
  }

  function renderParagraph() {
    // cette fonction permet de rendre un paragraphe
    return <p className="section-description">{props.description}</p>;
  }

  function renderList() {
    // cette fonction permet de rendre une liste
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

  function renderContent() {
    // cette fonction permet de rendre le contenu de la section
    if (props.type === paragraph) {
      return renderParagraph();
    } else if (props.type === list) {
      return renderList();
    }
    return null;
  }
  const iconStyle = {
    //c'est un objet qui contient les styles de l'icône d'ouverture ou de fermeture de la section
    height: '12px',
    transition: 'transform 0.3s ease',
    transform: isShown ? 'rotate(180deg)' : 'rotate(0)',
  }; //la propriété transform permet de définir une transformation 2D ou 3D à un élément
  //la propriété transition permet de définir une transition entre deux états d'un élément
  //la propriété ease permet de définir une transition avec un effet de vitesse

  return (
    <article key={props.id} className="section">
      <div onClick={toggle} className="section-title-container">
        <h3 className="section-title">{props.title}</h3>
        <img
          src={downArrow}
          className="section-icon"
          alt="icône d'ouverture ou fermeture."
          style={iconStyle}
        />
      </div>
      {isShown && <div className="section-description">{renderContent()}</div>}
    </article>
  );
};

export default Collapse;

Collapse.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  equipments: PropTypes.array,
};
