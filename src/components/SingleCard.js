import React from 'react';
import './SingleCard.css';

function SingleCard({ card, handleChoice, played }) {
    const handleClick = () => {
        handleChoice(card);
    }

    const cardStyle = {
        width: `${card.width}px`,
        height: `${card.height}px`,
        backgroundImage: `url(${card.src})`,
        backgroundPosition: `-${card.x}px -${card.y}px`,
        backgroundSize: `${card.width * 28}px ${card.height * 4}px`,
    };
    const classNames = ['card'];
    if (played) {
        classNames.push('played');
    }
    const className = classNames.join(' ');

    const numberClassNames = ['number'];
    if (card.name === 'hidden_card') {
        numberClassNames.push('hidden');
    } else if (card.color === 'red') {
        numberClassNames.push('red');
    } else if (card.color === 'blue') {
        numberClassNames.push('blue');
    }
    const numberClassName = numberClassNames.join(' ');
    return (
        <div className={className} onClick={handleClick} style={cardStyle}>
            <div className={numberClassName}>--{card.up}--</div>
            <div className={numberClassName}>{card.left}----{card.right}</div>
            <div className={numberClassName}>--{card.down}--</div>
        </div>
    );
}
export default SingleCard;