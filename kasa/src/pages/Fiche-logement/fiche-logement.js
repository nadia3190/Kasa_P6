import React from "react"
import Section from "../../components/Section/Section"
import "./fiche-logement.scss"
import "../../components/Carroussel/Carroussel"
import Carroussel from "../../components/Carroussel/Carroussel"
import CarrousselImage from "../../assets/images/muhr-P_XxsdVgtpQ-unsplash.jpg"


export const paragraph = "paragraph"
export const list = "list"

const FicheLogement = () => {
    return (
        <section className="main">
            <div className="container-content">
                <div className="container-wrapper">
                    <div className="container-wrapper-left">
                        <div className="container-heading">
                          <Carroussel image={CarrousselImage} title="" />
                        </div>
                    </div>
                   
                </div>
                <div className="collapsible-container">
                    <Section />
                    <Section />
                </div>
            </div>
        </section>
    );
};

export default FicheLogement;
