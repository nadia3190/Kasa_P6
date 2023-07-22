import React from "react";
import logo from "../../assets/images/kasa-logo-pink.png";
import "./Chargement.scss"

const Chargement =  () => {
        return <div className="loader--wrapper">
                    <img className="loader--image" src={logo} alt="Kasa logo."/>
                    <h2 className="loader--text">Chargement...</h2>
                </div>
}

export default Chargement;