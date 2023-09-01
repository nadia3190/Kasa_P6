import { useState } from 'react';
import './Carroussel.scss';
import nextArrow from '../../assets/images/next-arrow.svg';
import previousArrow from '../../assets/images/previous-arrow.svg';

const Carroussel = (props) => {
  //props est un objet qui contient toutes les propriétés passées à notre composant.
  const maxIndex = props.images.length - 1; //maxIndex est la valeur maximale du state counter

  const [counter, setCounter] = useState(0); //counter est le state, setCounter est la fonction qui permet de modifier le state
  //le 0 est la valeur initiale du state counter

  function prevImage() {
    // fonction qui permet de passer à l'image précédente dans le carrousel
    setCounter((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1)); //prevIndex est la valeur précédente du state
  }

  function nextImage() {
    // fonction qui permet de passer à l'image suivante dans le carrousel
    setCounter((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1)); //prevIndex est la valeur précédente du state
  }
  const carrouselImages = props.images.map((image, index) => (
    <div
      key={index}
      className={counter === index ? 'carrousel-active' : 'carrousel-slide'} //si counter est égal à l'index de l'image, on ajoute la classe carrousel-active, sinon on ajoute la classe carrousel-slide
    >
      {index === counter && ( //si l'index de l'image est égal à counter, on affiche l'image correspondante
        <img
          src={image}
          className="carrousel-image"
          alt="Carrousel d'images du logement."
        />
      )}
    </div>
  ));

  return (
    //on retourne le carrousel avec les flèches de navigation et la légende du carrousel si le nombre d'images est supérieur à 1
    <figure className="carrousel">
      {carrouselImages}
      {props.images.length > 1 && ( // si le nombre d'images est supérieur à 1, on affiche les flèches
        <>
          <img
            src={previousArrow}
            onClick={prevImage}
            className="carrousel-arrow previous"
            alt="Icône de défilement en avant du carrousel."
          />
          <img
            src={nextArrow}
            onClick={nextImage}
            className="carrousel-arrow next"
            alt="Icône de défilement en arrière du carrousel."
          />
          <figcaption className="carrousel-caption">
            {counter + 1}/{maxIndex + 1}
          </figcaption>
        </>
      )}
    </figure>
  );
};

export default Carroussel;
