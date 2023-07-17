import React from "react";
import logo from "../../assets/images/loader-icon.svg";
import "./Chargement.scss"


export default function Chargement() {
        return <div className="loader--wrapper">
                    <img className="loader--image" src={logo} alt="Kasa logo."/>
                    <h2 className="loader--text">Chargement...</h2>
                </div>
}