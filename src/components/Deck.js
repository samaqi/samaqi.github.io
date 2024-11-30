import React from 'react';
import SingleCard from './SingleCard';

const Deck = ({ deckCards, handleChoice }) => {
    return (
        <div className="deck">
            {deckCards.map((card) => (
                <SingleCard
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                    played={card.played}
                />
            ))}
        </div>
    );
};

export default Deck;