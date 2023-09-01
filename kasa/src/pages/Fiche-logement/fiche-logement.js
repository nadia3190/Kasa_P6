import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import Carroussel from '../../components/Carroussel/Carroussel';
import Chargement from '../../components/Chargement/Chargement';
import Host from '../../components/Host/Host';
import StarRating from '../../components/Stars/Starsrating';
import Tag from '../../components/Tag/Tag';
import './fiche-logement.scss';
import { paragraph, list } from '../../assets/Constantes/constant';
import data from '../../Data/logements.json';
import { useNavigate, useParams } from 'react-router-dom';
//useNavigate permet de naviguer entre les pages et useParams permet de récupérer les paramètres de l'url

import { useState, useEffect } from 'react';

const FicheLogement = () => {
  const navigate = useNavigate(); // c'est un hook qui permet de naviguer entre les pages
  const { id } = useParams(); // c'est un hook qui permet de récupérer les paramètres de l'url
  const [isLoading, setIsLoading] = useState(true); //useState permet de créer un état local dans un composant fonctionnel

  useEffect(() => {
    //  permet d'exécuter une fonction au chargement de la page
    setTimeout(() => {
      // permet de simuler un chargement de 1s
      setIsLoading(false); // permet de mettre fin au chargement
    }, 1000); // 1000ms = 1s
  }, []); //le tableau vide permet d'exécuter la fonction une seule fois au chargement de la page

  const selectedLogement = data.find((logement) => logement.id === id); //  on récupère le logement qui correspond à l'id de l'url

  if (!selectedLogement) {
    return navigate('/not-found'); // si le logement n'existe pas on redirige vers la page 404
  } else {
    const ratingValue = parseInt(selectedLogement.rating); // on convertit la note en nombre entier
    const tagsValue = selectedLogement.tags || []; // si le logement n'a pas de tags on lui attribue un tableau vide
    const equipmentsValue =
      selectedLogement.equipments !== null ? selectedLogement.equipments : [];
    const description = selectedLogement.description || ''; // si le logement n'a pas de description on lui attribue une chaîne de caractères vide

    // sinon on affiche la page du logement sélectionné en passant par le composant chargerment
    return isLoading ? (
      <Chargement />
    ) : (
      <>
        <Carroussel images={selectedLogement.pictures} />
        <div className="container-content">
          <div className="container-wrapper">
            <div className="container-heading">
              <h1 className="container-title">{selectedLogement.title}</h1>
              <h2>{selectedLogement.location}</h2>
              <Tag tags={tagsValue} />
            </div>

            <div className="container-host-rating">
              <Host host={selectedLogement.host} />
              <StarRating rating={ratingValue} />
            </div>
          </div>

          <div className="collapsible-container">
            <Collapse
              type={paragraph}
              title="Description"
              description={description}
              equipments={null}
            />
            {equipmentsValue.length > 0 && (
              <Collapse
                type={list}
                title="Equipements"
                description={null}
                equipments={equipmentsValue}
              />
            )}
          </div>
        </div>
      </>
    );
  }
};

export default FicheLogement;
