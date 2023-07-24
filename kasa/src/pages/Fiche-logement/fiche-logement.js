import React from 'react';
import Section from '../../components/Section/Section';
import Carroussel from '../../components/Carroussel/Carroussel';
import images from "../../images.json";
import './fiche-logement.scss';

const FicheLogement = () => {
  return (
    <section className="main">
      <div className="container-content">
        <div className="container-wrapper">
          <div className="container-wrapper-left">
            <div className="container-heading">
              <Carroussel images={images} />
            </div>
          </div>
        </div>
        <Section />
        <Section />
      </div>
    </section>
  );
};

export default FicheLogement;