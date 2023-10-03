import React from 'react';
import pinkVector from '../../assets/images/pink-star-vector.svg';
import greyVector from '../../assets/images/grey-star-vector.svg';
import PropTypes from 'prop-types';
import './Starsrating.scss';
const StarRating = (props) => {
  const ratingRange = [1, 2, 3, 4, 5];
  const ratingAsNumber = parseInt(props.rating); // Convert the rating prop to a number

  const stars = ratingRange.map((item, i) => {
    //map permet de parcourir un tableau et de retourner un nouveau tableau
    //permets de comparer la note du logement avec le nombre d'étoiles du rating
    return ratingAsNumber >= item ? (
      <img key={i} src={pinkVector} className="st" alt="icône étoile" />
    ) : (
      <img key={i} src={greyVector} className="st" alt="icône étoile" />
    );
  });

  return <div className="stars">{stars}</div>;
};

export default StarRating;

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
