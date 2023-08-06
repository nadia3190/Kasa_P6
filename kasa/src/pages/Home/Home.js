import React, { useState, useEffect } from "react";
import "./Home.scss";
import Background from "../../components/Background/Background";
import headerImage from "../../assets/images/muhr-P_XxsdVgtpQ-unsplash.jpg";
import Card from "../../components/Cards/Card";
import data from "../../Data/logements.json"; 
import Chargement from "../../components/Chargement/Chargement";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const cards = data.map((item) => (
    <Card key={item.id} item={item} />
  ));

  return (
    <>
      <div>
        <Background image={headerImage} title="Chez vous, partout et ailleurs" />
      </div>
      <div className="home">
        {isLoading ? <Chargement  /> : <div className="cards"> {cards}</div>}
      </div>
    </>
  );
};

export default Home;