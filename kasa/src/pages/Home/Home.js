import React from "react";
import "./Home.scss"
import Background from "../../components/Background/Background";
import headerImage from "../../assets/images/muhr-P_XxsdVgtpQ-unsplash.jpg"
import Card from "../../components/Cards/Card"
import {UseGetListings} from "../../Facilities/Facilities.js"
import Chargement from "../../components/Chargement/Chargement"



export default function Home() {
    const {listings, isLoading, error} = UseGetListings()
    const cards = listings.map(item => {
        return (
            <Card  key={item.id} item={item} />)
    })
    if(error) {
        return <span>Problème de connexion au serveur...</span>
    } else if(listings) {
        return (
            <section>
                <section>
                    <Background image={headerImage} title="Chez vous, partout et ailleurs" />
                </section>
                 <section className="home">
                    {isLoading ? <Chargement /> : cards}
                </section>
               
            </section>
        )
    }
}
