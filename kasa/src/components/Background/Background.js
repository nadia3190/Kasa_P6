import React from "react";
import "./Background.scss"

const Background = (props) => {
    return (
        <section className="Background">
            <img src={props.image} className="Background-image" alt="Paysage en plan large" />
            {props.title && <h1 className="Background-title">{props.title}</h1>}
        </section>
    );
}


export default Background