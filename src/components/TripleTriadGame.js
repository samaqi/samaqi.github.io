// TripleTriadGame.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import SingleCard from './SingleCard';
import GameSettings from './GameSettings';
import * as Utils from '../utils';
import * as MatchService from '../MatchService';

// # Send these in Postman
// # moves = [
// # {"player_id": 6, "card_index": 0, "row": 2, "col": 0},  # "Alexander"
// # {"player_id": 1, "card_index": 0, "row": 1, "col": 0},  # "Malboro"
// # {"player_id": 6, "card_index": 1, "row": 0, "col": 0},  # "Iguion"
// # {"player_id": 1, "card_index": 1, "row": 0, "col": 1},  # "Tonberry"
// # {"player_id": 6, "card_index": 2, "row": 0, "col": 2},  #  "Geezard"
// # {"player_id": 1, "card_index": 2, "row": 1, "col": 1},  # "T-Rexaur"
// # {"player_id": 6, "card_index": 3, "row": 1, "col": 2},  # "Glacial Eye"
// # {"player_id": 1, "card_index": 3, "row": 2, "col": 2},  #  "Grat"
// # {"player_id": 6, "card_index": 4, "row": 2, "col": 1},  # "Blobra"
// # ]
function TripleTriadGame() {
    const rules = [
        new Utils.SameRule({ wall: true }),
        new Utils.PlusRule(),
        new Utils.ElementalRule([
            new Utils.ElementPosition({ element: Utils.Element.FIRE, position: new Utils.Position(1, 1) }),
            new Utils.ElementPosition({ element: Utils.Element.ICE, position: new Utils.Position(2, 2) })
        ]),
        new Utils.BasicRule()
    ];

    const [isGameSettingsVisible, setIsGameSettingsVisible] = useState(true);
    const [matchService, setMatchService] = useState(null);
    const [placedCards, setPlacedCards] = useState([]);
    const [leftCards, setLeftCards] = useState([]);
    const [rightCards, setRightCards] = useState([]);
    const [scores, setScores] = useState({ blue: 5, red: 5 });
    const [winText, setWinText] = useState("");
    const [isGameOver, setIsGameOver] = useState(false); // Add state for Quit button visibility
    const navigate = useNavigate(); // Initialize useNavigate


    // Enum for player turns
    const PlayerTurn = {
        LEFT: "left",
        RIGHT: "right"
    };

    // Set initial turn
    const [currentTurn, setCurrentTurn] = useState(PlayerTurn.LEFT);
    const [choiceLeftDeck, setChoiceLeftDeck] = useState(null);
    const [choiceRightDeck, setChoiceRightDeck] = useState(null);

    const [choiceGrid, setChoiceGrid] = useState(null);
    const newTripleTriadGame = (selectedCards) => {
        console.log("Starting new game with selected cards:", selectedCards);
        // reset previous game states
        setCurrentTurn(PlayerTurn.LEFT);  // TODO: randomize first turn
        setChoiceLeftDeck(null);
        setChoiceRightDeck(null);
        setChoiceGrid(null);
        setScores({ blue: 5, red: 5 });
        setWinText("");
        setIsGameOver(false);
        setIsGameSettingsVisible(false);
        const game = new Utils.TripleTriadBoard(rules, [0, 1]);
        const newMatchService = new MatchService.MatchService(game);
        setMatchService(newMatchService);
        // red player = 0, blue player = 1
        // this is bot cards
        newMatchService.updatePlayerDeck(0, ["Alexander", "Iguion", "Geezard", "Glacial Eye", "Blobra"]);

        // blue human player cards
        if (selectedCards) {
            const cardNames = [];
            selectedCards.forEach(card => {
                for (let i = 0; i < card.quantity; i++) {
                    cardNames.push(card.name);
                }
            });
            newMatchService.updatePlayerDeck(1, cardNames);
        } else {
            newMatchService.updatePlayerDeck(1, ["Malboro", "Tonberry", "T-Rexaur", "Grat", "Cactuar"]);
        }

        const leftCards = newMatchService.getPlayerDeck(0);
        console.log("Left deck: " + leftCards);
        const rightCards = newMatchService.getPlayerDeck(1);
        // set cards for left and right decks
        setLeftCards(leftCards);
        setRightCards(rightCards);

        // setCurrentTurn(PlayerTurn.RIGHT);  // TODO: randomize first turn

        const newPlacedCards = [];
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                newPlacedCards.push(new Utils.FrontendCard('hidden_card', 'blue', 0, r, c));
            }
        }
        setPlacedCards(newPlacedCards);
    }

    // handle choice of deck card
    const handleChoiceOneDeck = (card) => {
        console.log("Continue to handle selected card " + card.alt);
    }

    const handleLeftChoiceOneDeck = (card) => {
        console.log("Choice one deck for left: " + card.alt);
        if (currentTurn === PlayerTurn.LEFT && card.played === false) {
            setChoiceLeftDeck(card);
            handleChoiceOneDeck(card);
        } else {
            console.log("Not your turn or invalid card");
        }
    }

    const handleRightChoiceOneDeck = (card) => {
        console.log("Choice one deck for right: " + card.alt);
        if (currentTurn === PlayerTurn.RIGHT && card.played === false) {
            setChoiceRightDeck(card);
            handleChoiceOneDeck(card);
        } else {
            console.log("Not your turn or invalid card");
        }
    }

    const resetAndFlipTurn = () => {
        if (currentTurn === PlayerTurn.LEFT) {
            setCurrentTurn(PlayerTurn.RIGHT);
            setChoiceLeftDeck(null);
        } else if (currentTurn === PlayerTurn.RIGHT) {
            setCurrentTurn(PlayerTurn.LEFT);
            setChoiceRightDeck(null);
        } else {
            console.log("Invalid currentTurn: " + currentTurn);
        }
    }

    const getSelectedCard = () => {
        var selectedCard;
        if (currentTurn === PlayerTurn.LEFT) {
            if (choiceLeftDeck !== null) {
                selectedCard = choiceLeftDeck;
                setLeftCards(leftCards.map((card) => {
                    if (card.id === selectedCard.id) {
                        return { ...card, played: true };
                    } else {
                        return card;
                    }
                }));
            }
        } else if (currentTurn === PlayerTurn.RIGHT) {
            if (choiceRightDeck !== null) {
                selectedCard = choiceRightDeck;
                setRightCards(rightCards.map((card) => {
                    if (card.id === selectedCard.id) {
                        return { ...card, played: true };
                    } else {
                        return card;
                    }
                }));
            }
        } else {
            console.log("Invalid currentTurn: " + currentTurn);
        }
        return selectedCard;
    }

    // handle choice of place card
    const handleChoiceGrid = (card) => {
        if (getSelectedCard() === undefined) {
            console.log("No selected card");
            return;
        }
        if (card.placed === true) {
            console.log("Invalid card placement");
        } else {
            console.log("Place card: ", card.row, card.col);
            setChoiceGrid(card);
        }
    }

    // place card in grid
    useEffect(() => {
        var selectedCard = getSelectedCard();
        if (selectedCard === undefined) {
            console.log("No selected card");
            return;
        }

        console.log("Selected card: " + selectedCard.alt + " is placed in grid by: " + currentTurn + " to " + choiceGrid.alt);

        setPlacedCards(placedCards.map((card) => {
            if (card.id === choiceGrid.id) {
                return { ...selectedCard, placed: true, row: choiceGrid.row, col: choiceGrid.col };
            } else {
                return card;
            }
        }));
    }, [choiceGrid]);

    // process move
    useEffect(() => {
        var selectedCard = getSelectedCard();
        if (selectedCard === undefined) {
            console.log("No selected card");
            return;
        }
        const flipSequences = matchService.placeMove(selectedCard.color === 'red' ? 0 : 1, new Utils.Position(choiceGrid.row, choiceGrid.col), selectedCard.index);
        const newFlippedCards = [];
        for (let flip of flipSequences) {
            for (let target of flip.targets) {
                if (!newFlippedCards.some((card) => card.row === target.position.row && card.col === target.position.col)) {
                    newFlippedCards.push(target);
                }
            }
        }
        console.log("Flip sequences: ", flipSequences);
        // then this should follow by useEffect of flip cards animation
        setTimeout(() => {
            flipCards(newFlippedCards);
        }, 500);
    }, [placedCards]);

    // flip cards animation and end turns
    const flipCards = (flippedCards) => {
        if (flippedCards.length > 0) {
            console.log("Flipping cards: ", flippedCards);
            console.log("Current placedCards: ", placedCards);

            // Update placed cards with flipped cards
            setPlacedCards(placedCards.map((card) => {
                if (flippedCards.some((flippedCard) => flippedCard.position.row === card.row && flippedCard.position.col === card.col)) {
                    return { ...card, color: currentTurn === PlayerTurn.LEFT ? 'red' : 'blue' };
                } else {
                    return card;
                }
            }));
            const newScores = matchService.getScores();
            setScores(newScores);
        }
        resetAndFlipTurn();
    }

    // update game settings visibility and game over
    useEffect(() => {
        if (matchService === null) {
            setIsGameSettingsVisible(true);
        } else {
            console.log("Game Over: ", matchService.isGameOver());
            const gameOver = matchService.isGameOver();
            setIsGameOver(gameOver);
        };

    }, [matchService, currentTurn]);

    // update Win text
    useEffect(() => {
        if (matchService && matchService.isGameOver()) {
            if (scores.red === scores.blue) {
                setWinText("Draw");
            } else if (scores.red > scores.blue) {
                setWinText("Red Wins");
            } else {
                setWinText("Blue Wins");
            }
            setIsGameOver(true); // Show Quit button when game is over
        }
    }, [currentTurn]);

    const handleQuit = () => {
        setIsGameSettingsVisible(true);
        navigate('/triple_triad'); // Route to /triple_triad
    };

    return (
        <div className="App">
            {/* <button className="App-button" onClick={newTripleTriadGame}>New Game</button> */}
            {isGameSettingsVisible && <GameSettings newTripleTriadGame={newTripleTriadGame} />}
            {!isGameSettingsVisible && (
                <div>
                    <div className="left-card-deck">
                        {leftCards.map((card, index) => (
                            <SingleCard
                                key={card.id}
                                card={card}
                                handleChoice={handleLeftChoiceOneDeck}
                                played={card.played}
                            />
                        ))};
                    </div>

                    <div className="right-card-deck">
                        {rightCards.map((card, index) => (
                            <SingleCard
                                key={card.id}
                                card={card}
                                handleChoice={handleRightChoiceOneDeck}
                                played={card.played}
                            />
                        ))};
                    </div>
                    <div className="card-grid">
                        {placedCards.map((card, index) => (
                            <SingleCard key={card.id} card={card} handleChoice={handleChoiceGrid} played={card.played} />
                        ))};
                    </div>
                    <div className="scores">
                        <div className="score-red">Red: {scores.red}</div>
                        <div className="score-blue">Blue: {scores.blue}</div>
                        <div className="win-text">{winText}</div>
                        {isGameOver && <button onClick={handleQuit}>Quit</button>} {/* Add Quit button */}
                        <button onClick={handleQuit}>Quit Debug</button>
                    </div>
                </div>
            )}
        </div>


    );
}

export default TripleTriadGame;