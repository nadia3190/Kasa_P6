import React from 'react';
import './About.scss';
import Banner from '../../components/Banner/Banner';
import headerImage from '../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import Collapse from '../../components/Collapse/Collapse';
import Chargement from '../../components/Chargement/Chargement';
import { paragraph } from '../../assets/Constantes/constant';
import { useState, useEffect } from 'react';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //setTimeout permet de définir une fonction qui sera exécutée après un délai donné
      setIsLoading(false); //setIsLoading est une fonction qui permet de modifier la valeur de isLoading
    }, 1000);
  }, []); //[] = tableau de dépendances, si on le laisse vide, le useEffect ne s'executera qu'une seule fois

  return (
    <>
      {isLoading ? (
        <Chargement />
      ) : (
        <>
          <Banner image={headerImage} title={null} />

          <Collapse
            type={paragraph}
            title="Fiabilité"
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />

          <Collapse
            type={paragraph}
            title="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Collapse
            type={paragraph}
            title="Service"
            description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />

          <Collapse
            type={paragraph}
            title="Sécurité"
            description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </>
      )}
    </>
  );
  //si isLoading est vrai, on affiche le composant Chargement, sinon on affiche le reste
};
export default About;
