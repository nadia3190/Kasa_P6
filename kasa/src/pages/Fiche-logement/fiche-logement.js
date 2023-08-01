import React from 'react';
import Section from '../../components/Section/Section';
import Carroussel from '../../components/Carroussel/Carroussel';
import Chargement from '../../components/Chargement/Chargement';
import Host from '../../components/Host/Host';
import StarRating from '../../components/Stars/Starsrating';
import Tag from '../../components/Tag/Tag';
import './fiche-logement.scss';
import { paragraph, list} from "../../assets/Constantes/constant"; 
import data from "../../Data/logements.json";
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


 const FicheLogement = () => {
  const navigate = useNavigate();// c'est un hook qui permet de naviguer entre les pages
  const { id } = useParams();// c'est un hook qui permet de récupérer les paramètres de l'url
   const [isLoading, setIsLoading] = useState(true); 
 
 useEffect(() => {//  permet d'exécuter une fonction au chargement de la page
    setTimeout(() => {// permet de simuler un chargement de 1s
      setIsLoading(false);
    }, 1000);
  }, []);//le tableau vide permet d'exécuter la fonction une seule fois au chargement de la page

  const selectedLogement = data.find((logement) => logement.id === id);//  on récupère le logement qui correspond à l'id de l'url
   const { description, equipments } = selectedLogement;// on récupère la description et les équipements du logement
  if (!selectedLogement) {// si le logement n'existe pas on redirige vers la page 404
  
    return  navigate("/not-found");

  } else { // sinon on affiche la page du logement sélectionné en passant par le composant chargerment 
    return  isLoading ? <Chargement /> : ( 
  <> 
  <Carroussel images={selectedLogement.pictures} />
      <div className="container-content">
        <div className="container-wrapper">
          <div className="container-wrapper-left">
            <div className="container-heading">
             
              <h1 className="container-title">{selectedLogement.title}</h1>
              <h2>{selectedLogement.location}</h2>
            </div>
          </div>
       
        </div>
        <div className="container-host-rating-tag">
            <Host host={selectedLogement.host} />
            <StarRating rating={selectedLogement.rating} />
            <Tag tags={selectedLogement.tags} />
          </div>


         <div className='collapsible-container'>
          <Section type={paragraph} title="Description" description={description} equipments={null} />
          <Section type={list} title="Equipements" description={null} equipments={equipments} />
          </div> 
        
      </div>
    </>



  
  
   
  );
}
};

export default FicheLogement;

