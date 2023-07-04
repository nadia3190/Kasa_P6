import React from "react";
import "./Home.css"
import Background from "../../components/Background/Background";
import headerImage from "../../assets/images/muhr-P_XxsdVgtpQ-unsplash.jpg"


const Home = () => {
        return (
            <section>
                <section>
                    <Background image={headerImage} title="Chez vous, partout et ailleurs" />
                </section>
            </section>
        )
    }

export default Home;

