import React from "react";
import "./Banner.scss"

const Background = (props) => {
    return (
        <div className="Background">
            <img src={props.image} className="Background-image" alt="Paysage en plan large" />
            {props.title && <h1 className="Background-title">{props.title}</h1>}
        </div>
    );
}


export default Background