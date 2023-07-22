import React from "react";
import "./Home.scss"
import Background from "../../components/Background/Background";
import headerImage from "../../assets/images/muhr-P_XxsdVgtpQ-unsplash.jpg"
import Card from "../../components/Cards/Card"
import {UseGetListings} from "../../Facilities/Facilities.js"
import Chargement from "../../components/Chargement/Chargement"



const Home = () => {
    const {listings, isLoading, error} = UseGetListings()// on recupere les données de UseGetListings dans des variables
    const cards = listings.map(item => {//map permet de parcourir un tableau et de retourner un tableau avec les modifications
        return (//return array of cards 
            <Card  key={item.id} item={item} />) //key permet de donner un id unique à chaque card
    })
    if(error) {
        return <span>Problème de connexion au serveur...</span>
    } else if(listings) {// listings est un tableau, donc si listings est true, alors il y a des données
        return (
            <section>
                <section>
                    <Background image={headerImage} title="Chez vous, partout et ailleurs" />
                </section>
                 <section className="home">
                    {isLoading ? <Chargement /> : cards
                        //en gros, si isLoading est true, affiche le composant Chargement, sinon affiche les cards
                        //if(isaLoading) {
                        //    return <Chargement />
                        //} else {
                        //    return cards
                        //
                   } 
                    

                </section>
               
            </section>
        )
    }
}

export default Home;
