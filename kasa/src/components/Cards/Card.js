import React from "react";
import {Link} from "react-router-dom"
import "./Card.css"
const Card = (props) => {
    return (
        <Link to={`/fiche-logement/${props.item.id}`} className="cardlink">
            <article id={props.item.id} className="card">
                    <img className="cardimg" src={`${props.item.cover}`} alt={props.item.title}/>
                    <h2 className="cardtitle">{props.item.title}</h2>
            </article>
       </Link>
    )
}

export default Card