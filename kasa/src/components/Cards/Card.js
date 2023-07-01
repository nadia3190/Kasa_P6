//ajouter des card 
import React from 'react';
import './Card.css';

const Card = () => {
  // Données fictives des cartes
  const cardsData = [
    { id: 1, title: 'Card 1', cover: './assets/images/grey-star.png' },
    { id: 2, title: 'Card 2', cover: './asset/images/grey-star.png' },
    { id: 3, title: 'Card 3', cover: './asset/images/grey-star.png' },
    { id: 4, title: 'Card 4', cover: './asset/images/grey-star.png' },
    { id: 5, title: 'Card 5', cover: './asset/images/grey-star.png' },
    { id: 6, title: 'Card 6', cover: './asset/images/grey-star.png' },
  ];

  return (
    <div className='card'>
      {cardsData.map(card => (
        <Card key={card.id} id={card.id} title={card.title} cover={card.cover} />
      ))}
    </div>
  );
}

export default Card;
