import React from 'react';
import Section from '../../components/Section/Section';
import Carroussel from '../../components/Carroussel/Carroussel';
import Chargement from '../../components/Chargement/Chargement';
import './fiche-logement.scss';
import { paragraph, list} from "../../assets/Constantes/constant"; 
import data from "../../Data/logements.json";
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


 const FicheLogement = () => {
  const navigate = useNavigate();// c'est un hook qui permet de naviguer entre les pages
  const { id } = useParams();// c'est un hook qui permet de récupérer les paramètres de l'url
   const [isLoading, setIsLoading] = useState(true); 
 
 useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const selectedLogement = data.find((logement) => logement.id === id);
   const { description, equipments } = selectedLogement;// on// on récupère le logement qui correspond à l'id de l'url
  if (!selectedLogement) {// si le logement n'existe pas on redirige vers la page 404
  
    return  navigate("/not-found");

  } else {  
    return  isLoading ? <Chargement /> : ( 
  <section className="main">
      <div className="container-content">
        <div className="container-wrapper">
          <div className="container-wrapper-left">
            <div className="container-heading">
              <Carroussel images={selectedLogement.pictures} />
              <h1 className="container-title">{selectedLogement.title}</h1>
            </div>
          </div>
        </div>
        <Section type={paragraph} title="Description" description={description} equipments={null} />
        <Section type={list} title="Equipements" description={null} equipments={equipments} />
      </div>
    </section>



  
  
   
  );
}
};

export default FicheLogement;

