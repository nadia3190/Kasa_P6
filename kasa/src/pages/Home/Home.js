import React, { useState, useEffect } from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import headerImage from '../../assets/images/muhr-P_XxsdVgtpQ-unsplash.jpg';
import Card from '../../components/Cards/Card';
import data from '../../Data/logements.json';
import Chargement from '../../components/Chargement/Chargement';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //useEffect permet de faire des appels asynchrones dans un composant fonctionnel
    // Simulate API call delay
    setTimeout(() => {
      //setTimeout permet de définir une fonction qui sera exécutée après un délai donné
      setIsLoading(false); //setIsLoading est une fonction qui permet de modifier la valeur de isLoading
    }, 1000); //1000ms = 1s
  }, []); //[] = tableau de dépendances, si on le laisse vide, le useEffect ne s'executera qu'une seule fois

  const cards = data.map((item) => <Card key={item.id} item={item} />); //map permet de parcourir un tableau et de retourner un tableau de même taille
  //key est une prop spéciale qui permet à React d'identifier chaque élément de manière unique
  //item est une prop qui contient les données de chaque logement
  //item est ajouté en tant que prop dans le composant Card et est accessible via props.item
  //item.id est l'identifiant unique de chaque logement
  return (
    //on retourne le composant Home qui contient le composant Banner et le composant Card qui contient les données de chaque logement
    <>
      <div>
        <Banner image={headerImage} title="Chez vous, partout et ailleurs" />
      </div>
      <div className="home">
        {isLoading ? <Chargement /> : <div className="cards"> {cards}</div>}
      </div>
    </>
  );
};

// les <> </> sont des fragments, ils permettent de retourner plusieurs éléments sans avoir à les encapsuler dans un div

export default Home; //export default permet d'exporter le composant Home pour pouvoir l'utiliser ailleurs
