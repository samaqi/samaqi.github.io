import React, { useEffect, useRef } from 'react';
import './SingleCard.css';
import { motion } from 'framer-motion';
import { Direction } from './TripleTriadLogics';
import { Element } from './CardLists';



function SingleCard({ card, handleChoice, played, flipDirection, onFlipComplete }) {
    // console.log('SingleCard element', card.alt, card.element);
    const rotationAxis = flipDirection ? (flipDirection === Direction.UP || flipDirection === Direction.DOWN ? 'rotateX' : 'rotateY') : undefined;
    const handleClick = () => {
        handleChoice(card);
    }

    const scaleX = 2;
    const scaleY = 2.4;
    const borderColor = card.color === 'red' ? 'purple' : card.color === 'blue' ? 'darkblue' : card.color;

    const cardStyle = {
        width: `${card.width * scaleX}px`,
        height: `${card.height * scaleY}px`,
        backgroundImage: card.name === 'hidden_card' ? `url(/img/all_cards.png)` : `url(/img/all_cards_${card.color}.png)`,
        backgroundPosition: `-${card.x * scaleX}px -${card.y * scaleY}px`,
        backgroundSize: `${card.width * 28 * scaleX}px ${card.height * 4 * scaleY}px`,
        // border: card.isSelected ? `3px dotted ${borderColor}` : 'none',
        position: 'relative'
    };

    const borderStyle = {
        width: `${card.width * scaleX - 1}px`,
        height: `${card.height * scaleY - 1}px`,
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


    const audioRef = useRef(new Audio('/soundfx/shorts/triple-triad-convert.ogg'));
    useEffect(() => {
        if (flipDirection) {
            audioRef.current.play();
        }
    }, [flipDirection]);

    const showPositionElement = card.name === 'hidden_card' && card.positionElement !== Element.NONE;
    const showPlusOne = card.name !== 'hidden_card' && card.positionElement !== Element.NONE && card.positionElement === card.element;
    const showMinusOne = card.name !== 'hidden_card' && card.positionElement !== Element.NONE && card.positionElement !== card.element;
    return (
        <motion.div
            onClick={handleClick}
            style={cardStyle}
            className={className}
            initial={{ [rotationAxis]: 0 }}
            animate={{ [rotationAxis]: flipDirection ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => {
                if (flipDirection) {
                    setTimeout(() => {
                        onFlipComplete(card);
                    }, 300);
                }
            }}
        >
            <div className="card-container">
                <div className={`${numberClassName} number-up`}>  {card.up}  </div>
                <div className={`${numberClassName} number-left`}>{card.left}</div>
                <div className={`${numberClassName} number-right`}>{card.right}</div>
                <div className={`${numberClassName} number-down`}>  {card.down}  </div>
                {card.element && card.element !== Element.NONE && card.name !== 'hidden_card' && (
                    <img
                        src={`/img/element_${card.element}.png`}
                        alt={`${card.element} element`}
                        className="element-overlay"
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '-20px',
                            width: '20px',
                            height: '20px',
                            border: 'none'
                        }}
                    />
                )}
                {card.isSelected && (
                    <motion.div
                        style={borderStyle}
                        className="animated-border"
                        initial={{ border: `2px dotted ${borderColor}` }}
                        animate={{ border: [`2px solid ${borderColor}`, `2px dotted ${borderColor}`, `2px solid ${borderColor}`] }}
                        transition={{ duration: 0.8, repeat: 6, ease: 'linear' }}
                    />
                )}
                {showPositionElement && (
                    <motion.img
                        src={`/img/element_${card.positionElement}.png`}
                        alt={`${card.positionElement} element`}
                        className="position-element-overlay"
                        style={{
                            position: 'absolute',
                            top: '53%',
                            left: '42%',
                            width: '50px',
                            height: '50px',
                            border: 'none' // Ensure no border is applied
                        }}
                        animate={{
                            x: [0, -1, 1, -1, 1, 0]
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}
                    />
                )}

                {showPlusOne && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '25%',
                            left: '25%',
                            color: 'white',
                            fontSize: '80px',
                            fontStyle: 'italic',
                            textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black'
                        }}
                    >
                        +1
                    </div>
                )}

                {showMinusOne && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '25%',
                            left: '25%',
                            color: 'white',
                            fontSize: '80px',
                            fontStyle: 'italic',
                            textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black'
                        }}
                    >
                        -1
                    </div>
                )}
            </div>
        </motion.div>
    );
}
export default SingleCard;