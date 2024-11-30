// TripleTriadGame.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { MATCH_RESULT_FORM_URL } from './constants';

import SingleCard from './SingleCard';
import Deck from './Deck';
import GameSettings from './GameSettings';
import GameMetadata from './GameMetadata';

import { RandomStrategy, getRandomDeck } from './TripleTriadRandomDeckGenerator';

import * as TripleTriadLogics from './TripleTriadLogics';
import * as MatchService from './MatchService';
import * as BotPlayers from './BotPlayers';
import * as CardLists from './CardLists';

// # Send these in Postman
// # moves = [
// # {"playerId": 6, "cardIndex": 0, "row": 2, "col": 0},  # "Alexander"
// # {"playerId": 1, "cardIndex": 0, "row": 1, "col": 0},  # "Malboro"
// # {"playerId": 6, "cardIndex": 1, "row": 0, "col": 0},  # "Iguion"
// # {"playerId": 1, "cardIndex": 1, "row": 0, "col": 1},  # "Tonberry"
// # {"playerId": 6, "cardIndex": 2, "row": 0, "col": 2},  #  "Geezard"
// # {"playerId": 1, "cardIndex": 2, "row": 1, "col": 1},  # "T-Rexaur"
// # {"playerId": 6, "cardIndex": 3, "row": 1, "col": 2},  # "Glacial Eye"
// # {"playerId": 1, "cardIndex": 3, "row": 2, "col": 2},  #  "Grat"
// # {"playerId": 6, "cardIndex": 4, "row": 2, "col": 1},  # "Blobra"
// # ]
function TripleTriadGame() {
    const placeCardAudio = new Audio('/soundfx/shorts/menu-back.ogg');
    const selectCardAudio = new Audio('/soundfx/shorts/menu-move.ogg');

    // TODO: build rules based on selected rules from GameSettings
    const rules = [
        new TripleTriadLogics.SameRule({ wall: true }),
        new TripleTriadLogics.PlusRule(),
        // TODO: randomize element positions
        new TripleTriadLogics.ElementalRule([
            new TripleTriadLogics.ElementPosition({ element: CardLists.Element.FIRE, position: new TripleTriadLogics.Position(1, 1) }),
            new TripleTriadLogics.ElementPosition({ element: CardLists.Element.ICE, position: new TripleTriadLogics.Position(2, 2) })
        ]),
        new TripleTriadLogics.BasicRule()
    ];

    const [initialCards, setInitialCards] = useState(null);
    const [selectedRules, setSelectedRules] = useState([]);
    const [selectedOpponent, setSelectedOpponent] = useState('Easy Bot');
    const [botPlayer, setBotPlayer] = useState(null);

    const [isGameSettingsVisible, setIsGameSettingsVisible] = useState(true);
    const [matchService, setMatchService] = useState(null);
    const [placedCards, setPlacedCards] = useState([]);
    const [leftCards, setLeftCards] = useState([]);
    const [rightCards, setRightCards] = useState([]);
    const [scores, setScores] = useState({ blue: 5, red: 5 });
    const [winText, setWinText] = useState("");
    const [isGameOver, setIsGameOver] = useState(false); // Add state for Quit button visibility
    const navigate = useNavigate();


    // Set initial turn
    const [currentTurn, setCurrentTurn] = useState(TripleTriadLogics.PlayerTurn.LEFT);
    const [choiceLeftDeck, setChoiceLeftDeck] = useState(null);
    const [choiceRightDeck, setChoiceRightDeck] = useState(null);

    const [choiceGrid, setChoiceGrid] = useState(null);
    const newTripleTriadGame = (initialCards, selectedRules, selectedOpponent) => {
        console.log("Starting new game with selected cards, rules, opponent:", initialCards, selectedRules, selectedOpponent);
        setInitialCards(initialCards);
        setSelectedRules(selectedRules);
        setSelectedOpponent(selectedOpponent);

        // reset previous game states
        setCurrentTurn(TripleTriadLogics.PlayerTurn.LEFT);  // TODO: randomize first turn
        setChoiceLeftDeck(null);
        setChoiceRightDeck(null);
        setChoiceGrid(null);
        setScores({ blue: 5, red: 5 });
        setWinText("");
        setIsGameOver(false);
        setIsGameSettingsVisible(false);
        const redPlayerId = selectedOpponent;
        const bluePlayerId = "ICtH_blah";
        const game = new TripleTriadLogics.TripleTriadBoard([redPlayerId, bluePlayerId], null, rules);
        const newMatchService = new MatchService.MatchService(game);
        setMatchService(newMatchService);

        if (BotPlayers.BotFactory.isBot(selectedOpponent)) {
            setBotPlayer(BotPlayers.BotFactory.createBot(newMatchService, selectedOpponent));
        }


        // TODO: load boardState from spreadsheet once we have the database schema
        // BEGIN of testing loading boardState
        // const boardState = new TripleTriadLogics.BoardState(
        //     [0, 1],
        //     ["Alexander", "Iguion", "Geezard", "Glacial Eye", "Blobra"],
        //     ["Malboro", "Tonberry", "T-Rexaur", "Grat", "Cactuar"],
        //     [
        //         new TripleTriadLogics.Move(0, 2, 0, 0),  // "Alexander"
        //         new TripleTriadLogics.Move(1, 1, 0, 0),  // "Malboro"
        //     ]
        // )

        // newMatchService.updateBoardState(boardState);
        // setCurrentTurn(newMatchService.getCurrentTurn());

        // END of testing loading boardState


        // BEGIN of fresh match
        // red player = 0, blue player = 1
        // this is bot cards
        switch (selectedOpponent) {
            case BotPlayers.BOT_LEVEL.EASY:
                newMatchService.updatePlayerDeck(redPlayerId, getRandomDeck(RandomStrategy.EASY_LEVEL));
                break;
            case BotPlayers.BOT_LEVEL.MEDIUM:
                newMatchService.updatePlayerDeck(redPlayerId, getRandomDeck(RandomStrategy.MEDIUM_LEVEL));
                break;
            case BotPlayers.BOT_LEVEL.HARD:
                newMatchService.updatePlayerDeck(redPlayerId, getRandomDeck(RandomStrategy.HARD_LEVEL));
                break;
            default:
                newMatchService.updatePlayerDeck(redPlayerId, getRandomDeck(RandomStrategy.DEFAULT));
        }

        // blue human player cards
        if (initialCards) {
            const cardNames = [];
            initialCards.forEach(card => {
                for (let i = 0; i < card.quantity; i++) {
                    cardNames.push(card.name);
                }
            });
            newMatchService.updatePlayerDeck(bluePlayerId, cardNames);
        } else {
            newMatchService.updatePlayerDeck(bluePlayerId, getRandomDeck(RandomStrategy.MEDIUM_LEVEL));
        }
        // END of fresh match

        const placedCards = newMatchService.getPlacedCards();
        console.log("Placed cards: ", placedCards);
        setPlacedCards(placedCards);
        const leftCards = newMatchService.getPlayerDeck(redPlayerId);
        // console.log("Left deck: " + leftCards);
        const rightCards = newMatchService.getPlayerDeck(bluePlayerId);
        // console.log("Right deck: " + rightCards);
        setLeftCards(leftCards);
        setRightCards(rightCards);
    }

    // handle choice of deck card
    const handleChoiceOneDeck = (card) => {
        console.log("Continue to handle selected card " + card.alt);
        selectCardAudio.play();
    }

    const updateSelectedCard = (selectedCard, cards) => {
        const updatedCards = cards.map(card => {
            if (card.index === selectedCard.index) {
                return { ...card, isSelected: true };
            } else {
                return { ...card, isSelected: false };
            }
        });
        return updatedCards;

    }

    const handleLeftChoiceOneDeck = (card) => {
        console.log("Choice one deck for left: " + card.alt);
        if (currentTurn === TripleTriadLogics.PlayerTurn.LEFT && card.played === false) {
            const updatedCards = updateSelectedCard(card, leftCards);
            setLeftCards(updatedCards);
            setChoiceLeftDeck(card);
            handleChoiceOneDeck(card);
        } else {
            console.log("Not your turn or invalid card");
        }
    }

    const handleRightChoiceOneDeck = (card) => {
        console.log("Choice one deck for right: " + card.alt);
        if (currentTurn === TripleTriadLogics.PlayerTurn.RIGHT && card.played === false) {
            const updatedCards = updateSelectedCard(card, rightCards);
            setRightCards(updatedCards);
            setChoiceRightDeck(card);
            handleChoiceOneDeck(card);
        } else {
            console.log("Not your turn or invalid card");
        }
    }

    const resetAndFlipTurn = () => {
        if (currentTurn === TripleTriadLogics.PlayerTurn.LEFT) {
            setCurrentTurn(TripleTriadLogics.PlayerTurn.RIGHT);
            setChoiceLeftDeck(null);
        } else if (currentTurn === TripleTriadLogics.PlayerTurn.RIGHT) {
            setCurrentTurn(TripleTriadLogics.PlayerTurn.LEFT);
            setChoiceRightDeck(null);
        } else {
            console.log("Invalid currentTurn: " + currentTurn);
        }
    }

    const markPlayedCard = (selectedCard, turn) => {
        if (turn === TripleTriadLogics.PlayerTurn.LEFT) {
            setLeftCards(leftCards.map((card) => {
                if (card.id === selectedCard.id) {
                    return { ...card, played: true };
                } else {
                    return card;
                }
            }));
        } else if (turn === TripleTriadLogics.PlayerTurn.RIGHT) {
            setRightCards(rightCards.map((card) => {
                if (card.id === selectedCard.id) {
                    return { ...card, played: true };
                } else {
                    return card;
                }
            }));
        } else {
            console.log("Invalid turn in markPlayedCard: " + turn);
        }
    }

    const getAndMarkSelectedCard = () => {
        var selectedCard;
        if (currentTurn === TripleTriadLogics.PlayerTurn.LEFT) {
            if (choiceLeftDeck !== null) {
                selectedCard = choiceLeftDeck;
                markPlayedCard(selectedCard, currentTurn);
            }
        } else if (currentTurn === TripleTriadLogics.PlayerTurn.RIGHT) {
            if (choiceRightDeck !== null) {
                selectedCard = choiceRightDeck;
                markPlayedCard(selectedCard, currentTurn);
            }
        } else {
            console.log("Invalid currentTurn: " + currentTurn);
        }
        return selectedCard;
    }

    // handle choice of place card
    const handleChoiceGrid = (card) => {
        if (getAndMarkSelectedCard() === undefined) {
            console.log("No selected card");
            return;
        }
        if (card.placed === true) {
            console.log("Invalid card placement");
        } else {
            console.log("Place card: ", card.row, card.col);
            setChoiceGrid(card);
            placeCardAudio.play();
        }
    }

    const updatePlacedCards = (playedCard, gridCard) => {
        setPlacedCards(placedCards.map((card) => {
            if (card.row === gridCard.row && card.col === gridCard.col) {
                return { ...playedCard, placed: true, row: gridCard.row, col: gridCard.col, positionElement: gridCard.positionElement };
            } else {
                return card;
            }
        }));
    }

    // process move 1: place card in grid
    useEffect(() => {
        var selectedCard = getAndMarkSelectedCard();
        if (selectedCard === undefined) {
            console.log("No selected card");
            return;
        }

        console.log("Selected card: " + selectedCard.alt + " is placed in grid by: " + currentTurn + " to " + choiceGrid.alt);
        updatePlacedCards(selectedCard, choiceGrid);

    }, [choiceGrid]);

    // process move 2: flip cards
    useEffect(() => {
        var selectedCard = getAndMarkSelectedCard();
        if (selectedCard === undefined) {
            console.log("No selected card");
            return;
        }
        const flipSequences = matchService.placeMove(selectedCard.playerId, new TripleTriadLogics.Position(choiceGrid.row, choiceGrid.col), selectedCard.index);

        setTimeout(() => {
            flipCards(flipSequences);
        }, 500);
    }, [placedCards]);

    // process bot move, just set choiceLeftDeck and choiceGrid and let process move 1 and 2 handle the rest
    useEffect(() => {
        // assume bot is always red and on the left
        if (botPlayer && currentTurn === TripleTriadLogics.PlayerTurn.LEFT) {
            const delayBotMove = setTimeout(() => {
                const botMove = botPlayer.getNextMove();
                console.log("Bot move: ", botMove);

                // setChoiceLeftDeck and setChoiceGrid
                const selectedCard = leftCards.find(card => card.index === botMove.cardIndex);
                setChoiceLeftDeck(selectedCard);
                setChoiceGrid(placedCards.find(card => card.row === botMove.row && card.col === botMove.col));
                placeCardAudio.play();
            }, 2500);
            return () => clearTimeout(delayBotMove);
        }
    }, [botPlayer, currentTurn]);


    // flip cards animation and end turns
    const flipCards = (flipSequences) => {
        const flippedCards = [];
        const targetToFlipDirection = new Map();
        for (let flip of flipSequences) {
            for (let target of flip.targets) {
                if (!flippedCards.some((card) => card.row === target.position.row && card.col === target.position.col)) {
                    flippedCards.push(target);
                    targetToFlipDirection.set(`${target.position.row}_${target.position.col}`, flip.getFlipDirection(target));
                }
            }
        }
        if (flippedCards.length > 0) {
            // Update placed cards with flipped cards
            setPlacedCards(placedCards.map((card) => {
                if (flippedCards.some((flippedCard) => flippedCard.position.row === card.row && flippedCard.position.col === card.col)) {
                    return {
                        ...card, isSelected: false, color: currentTurn === TripleTriadLogics.PlayerTurn.LEFT ? 'red' : 'blue',
                        flipDirection: targetToFlipDirection.get(`${card.row}_${card.col}`)
                    };
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
            const isDraw = scores.red === scores.blue;
            const isSuddenDeath = matchService.isRuleChosen("Sudden Death");

            if (isDraw && isSuddenDeath) {
                newTripleTriadGame(initialCards, selectedRules, selectedOpponent);  // TODO: initialCards for both red and blue
            } else {
                setWinText(isDraw ? "Draw" : scores.red > scores.blue ? "Red Wins" : "Blue Wins");
                setIsGameOver(true); // Show Quit button when game is over
                saveMatchResult();
            }
        }
    }, [currentTurn]);

    const handleQuit = () => {
        setIsGameSettingsVisible(true);
        navigate('/triple_triad'); // Route to /triple_triad
    };

    const saveMatchResult = () => {

        const formData = new URLSearchParams();
        formData.append('entry.1131737441', 'match_01'); // match_id
        formData.append('entry.803144275', scores.red); // red_score
        formData.append('entry.507495213', scores.blue);  // blue_score

        fetch(MATCH_RESULT_FORM_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
        })
            .then(response => {
                console.log('Response:', response);
                if (response.ok) {
                    console.log('Data saved successfully');
                } else {
                    console.error('Error saving data');
                }
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };

    const gameStyle = {
        backgroundImage: `url(/img/triple-triad-background.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh', // Adjust as needed
    };

    const gameMetadataProps = {
        scores,
        winText,
        isGameOver,
        handleQuit
    };

    const onFlipComplete = (flippedCard) => {
        setPlacedCards(placedCards.map(card => {
            if (card.id === flippedCard.id) {
                return { ...card, flipDirection: null };
            }
            return card;
        }));
    };

    return (
        <div className="App triple-triad-board" style={!isGameSettingsVisible ? gameStyle : {}}>
            {isGameSettingsVisible && <GameSettings newTripleTriadGame={newTripleTriadGame} />}
            {!isGameSettingsVisible && (
                <div>
                    <div className="left-card-deck">
                        <Deck deckCards={leftCards} handleChoice={handleLeftChoiceOneDeck} />
                    </div>

                    <div className="right-card-deck">
                        <Deck deckCards={rightCards} handleChoice={handleRightChoiceOneDeck} />
                    </div>
                    <div className="card-grid">
                        {placedCards.map((card, index) => (
                            <SingleCard key={card.id} card={card} handleChoice={handleChoiceGrid} played={card.played}
                                flipDirection={card.flipDirection} onFlipComplete={onFlipComplete}

                            />
                        ))};
                    </div>
                    <GameMetadata {...gameMetadataProps} />

                </div>
            )}
        </div>


    );
}

export default TripleTriadGame;