import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  const { item } = props;
  
  return (
  <div className="card-container">
 <Link to={`/fiche-logement/${item.id}`} className="cardlink">
      <article id={item.id} className="card">
        <img className="cardimg" src={`${item.cover}`} alt={item.title} />
        <h2 className="cardtitle">{item.title}</h2>
      </article>
    </Link>
    </div>
   
  );
};

export default Card;