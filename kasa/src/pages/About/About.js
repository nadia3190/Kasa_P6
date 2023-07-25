

 import React from 'react';
import './About.scss';
import Background from '../../components/Background/Background';
import headerImage from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import Section from '../../components/Section/Section';
export const paragraph = "paragraph"


 const About = () => {
  return (
        <section className="apropos">
            <Background image={headerImage}title={null}/>
            <Section type={paragraph} title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />

            <Section  type={paragraph} title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

            <Section  type={paragraph} title="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>

            <Section  type={paragraph} title="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
         </section>   

    )
}
 export default About;
