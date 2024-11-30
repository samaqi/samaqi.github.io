import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
// import './SelectCardMenu.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';



const SelectCardMenu = ({ passSelectedCards }) => {
    const [stockCards, setStockCards] = useState([
        { name: 'Geezard', quantity: 10 },
        { name: 'Funguar', quantity: 10 },
        { name: 'Bite Bug', quantity: 10 },
        { name: 'Red Bat', quantity: 10 },
        { name: 'Blobra', quantity: 10 },
        { name: 'Gayla', quantity: 10 },
        { name: 'Gesper', quantity: 10 },
        { name: 'Fastitocalon-F', quantity: 10 },
        { name: 'Blood Soul', quantity: 10 },
        { name: 'Caterchipillar', quantity: 10 },
        { name: 'Cockatrice', quantity: 10 },
        { name: 'Grat', quantity: 10 },
        { name: 'Buel', quantity: 10 },
        { name: 'Mesmerize', quantity: 10 },
        { name: 'Glacial Eye', quantity: 10 },
        { name: 'Belhelmel', quantity: 10 },
        { name: 'Thrustaevis', quantity: 10 },
        { name: 'Anacondaur', quantity: 10 },
        { name: 'Creeps', quantity: 10 },
        { name: 'Grendel', quantity: 10 },
        { name: 'Jelleye', quantity: 10 },
        { name: 'Grand Mantis', quantity: 10 },
        { name: 'Forbidden', quantity: 10 },
        { name: 'Armadodo', quantity: 10 },
        { name: 'Tri-Face', quantity: 10 },
        { name: 'Fastitocalon', quantity: 10 },
        { name: 'Snow Lion', quantity: 10 },
        { name: 'Ochu', quantity: 10 },
        { name: 'SAM08G', quantity: 10 },
        { name: 'Death Claw', quantity: 10 },
        { name: 'Cactuar', quantity: 10 },
        { name: 'Tonberry', quantity: 10 },
        { name: 'Abyss Worm', quantity: 10 },
        { name: 'Turtapod', quantity: 10 },
        { name: 'Vysage', quantity: 10 },
        { name: 'T-Rexaur', quantity: 10 },
        { name: 'Bomb', quantity: 10 },
        { name: 'Blitz', quantity: 10 },
        { name: 'Wendigo', quantity: 10 },
        { name: 'Torama', quantity: 10 },
        { name: 'Imp', quantity: 10 },
        { name: 'Blue Dragon', quantity: 10 },
        { name: 'Adamantoise', quantity: 10 },
        { name: 'Hexadragon', quantity: 10 },
        { name: 'Iron Giant', quantity: 10 },
        { name: 'Behemoth', quantity: 10 },
        { name: 'Chimera', quantity: 10 },
        { name: 'PuPu', quantity: 10 },
        { name: 'Elastoid', quantity: 10 },
        { name: 'GIM47N', quantity: 10 },
        { name: 'Malboro', quantity: 10 },
        { name: 'Ruby Dragon', quantity: 10 },
        { name: 'Elnoyle', quantity: 10 },
        { name: 'Tonberry King', quantity: 10 },
        { name: 'Wedge, Biggs', quantity: 10 },
        { name: 'Fujin Raijin', quantity: 10 },
        { name: 'Elvoret', quantity: 10 },
        { name: 'X-ATM092', quantity: 10 },
        { name: 'Granaldo', quantity: 10 },
        { name: 'Gerogero', quantity: 10 },
        { name: 'Iguion', quantity: 10 },
        { name: 'Abadon', quantity: 10 },
        { name: 'Trauma', quantity: 10 },
        { name: 'Oilboyle', quantity: 10 },
        { name: 'Shumi', quantity: 10 },
        { name: 'Krysta', quantity: 10 },
        { name: 'Propagator', quantity: 10 },
        { name: 'Jumbo Cactuar', quantity: 10 },
        { name: 'Tri-Point', quantity: 10 },
        { name: 'Gargantua', quantity: 10 },
        { name: 'Mobile Type 8', quantity: 10 },
        { name: 'Sphinxara', quantity: 10 },
        { name: 'Tiamat', quantity: 10 },
        { name: 'BGH251F2', quantity: 10 },
        { name: 'Red Giant', quantity: 10 },
        { name: 'Catoblepas', quantity: 10 },
        { name: 'Ultima Weapon', quantity: 10 },
        { name: 'Chubby Chocobo', quantity: 1 },
        { name: 'Angelo', quantity: 1 },
        { name: 'Gilgamesh', quantity: 1 },
        { name: 'MiniMog', quantity: 1 },
        { name: 'Chicobo', quantity: 1 },
        { name: 'Quezacotl', quantity: 1 },
        { name: 'Shiva', quantity: 1 },
        { name: 'Ifrit', quantity: 1 },
        { name: 'Siren', quantity: 1 },
        { name: 'Sacred', quantity: 1 },
        { name: 'Minotaur', quantity: 1 },
        { name: 'Carbuncle', quantity: 1 },
        { name: 'Diablos', quantity: 1 },
        { name: 'Leviathan', quantity: 1 },
        { name: 'Odin', quantity: 1 },
        { name: 'Pandemona', quantity: 1 },
        { name: 'Cerberus', quantity: 1 },
        { name: 'Alexander', quantity: 1 },
        { name: 'Phoenix', quantity: 1 },
        { name: 'Bahamut', quantity: 1 },
        { name: 'Doomtrain', quantity: 1 },
        { name: 'Eden', quantity: 1 },
        { name: 'Ward', quantity: 1 },
        { name: 'Kiros', quantity: 1 },
        { name: 'Laguna', quantity: 1 },
        { name: 'Selphie', quantity: 1 },
        { name: 'Quistis', quantity: 1 },
        { name: 'Irvine', quantity: 1 },
        { name: 'Zell', quantity: 1 },
        { name: 'Rinoa', quantity: 1 },
        { name: 'Edea', quantity: 1 },
        { name: 'Seifer', quantity: 1 },
        { name: 'Squall', quantity: 1 }
    ]);

    const [selectedCards, setSelectedCards] = useState([]);
    const [highlightedCard, setHighlightedCard] = useState(null);
    const [isVisible, setIsVisible] = useState(true); // State to control visibility

    const handleMouseEnter = useCallback((card) => {
        setHighlightedCard(card);
    }, []);

    const handleCardClick = useCallback((card, event) => {
        event.stopPropagation(); // Prevent event bubbling

        // Prevent selection if the card's quantity is 0
        if (card.quantity === 0) {
            return;
        }

        // Calculate the total quantity of selectedCards
        const totalSelectedQuantity = selectedCards.reduce((total, c) => total + c.quantity, 0);

        // Prevent selection if the total quantity of selectedCards is 5
        if (totalSelectedQuantity >= 5) {
            return;
        }

        // Update selectedCards
        setSelectedCards(prevSelectedCards => {
            const cardIndex = prevSelectedCards.findIndex(c => c.name === card.name);
            if (cardIndex !== -1) {
                const updatedCards = [...prevSelectedCards];
                updatedCards[cardIndex].quantity += 1;
                return updatedCards;
            } else {
                return [...prevSelectedCards, { ...card, quantity: 1 }];
            }
        });

        // Update stockCards
        setStockCards(prevStockCards => {
            const cardIndex = prevStockCards.findIndex(c => c.name === card.name);
            if (cardIndex !== -1) {
                const updatedStockCards = [...prevStockCards];
                updatedStockCards[cardIndex].quantity -= 1;
                return updatedStockCards;
            }
            return prevStockCards;
        });
    }, [selectedCards]);

    const handleSelectedCardClick = useCallback((card, event) => {
        event.stopPropagation(); // Prevent event bubbling

        // Update selectedCards
        setSelectedCards(prevSelectedCards => {
            const cardIndex = prevSelectedCards.findIndex(c => c.name === card.name);
            if (cardIndex !== -1) {
                const updatedCards = [...prevSelectedCards];
                if (updatedCards[cardIndex].quantity > 1) {
                    updatedCards[cardIndex].quantity -= 1;
                } else {
                    updatedCards.splice(cardIndex, 1);
                }
                return updatedCards;
            }
            return prevSelectedCards;
        });

        // Update stockCards
        setStockCards(prevStockCards => {
            const cardIndex = prevStockCards.findIndex(c => c.name === card.name);
            if (cardIndex !== -1) {
                const updatedStockCards = [...prevStockCards];
                updatedStockCards[cardIndex].quantity += 1;
                return updatedStockCards;
            }
            return prevStockCards;
        });
    }, []);

    const totalSelectedQuantity = selectedCards.reduce((total, c) => total + c.quantity, 0);

    const handleCreateGameClick = () => {
        passSelectedCards(selectedCards);
        setIsVisible(false); // Hide the SelectCardMenu
    };

    if (!isVisible) {
        return null; // Do not render the component if it's not visible
    }
    const half = Math.ceil(stockCards.length / 2);
    const firstHalf = stockCards.slice(0, half);
    const secondHalf = stockCards.slice(half);
    return (
        <Box className="select-card-menu" p={2}>
            <Box className="cards-container" display="flex" justifyContent="space-between">
                <Box className="stock-cards" flex={3} mr={2}>
                    <Typography variant="h5" style={{ marginBottom: '10px' }}>Stock Cards</Typography>
                    <Box style={{ overflowY: 'auto', maxHeight: '75vh' }}>
                        <Box display="flex">
                            <Box flex={1} mr={2}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Card</TableCell>
                                            <TableCell>Quantity</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {firstHalf.map((card, index) => (
                                            <motion.tr
                                                initial={{ x: '-20vw' }}
                                                animate={{ x: -10 }}
                                                key={index}
                                                onMouseEnter={() => handleMouseEnter(card)}
                                                onClick={(event) => handleCardClick(card, event)}
                                                style={{ cursor: card.quantity === 0 ? 'not-allowed' : 'pointer', opacity: card.quantity === 0 ? 0.5 : 1 }}
                                            >
                                                <TableCell>{card.name}</TableCell>
                                                <TableCell>{card.quantity}</TableCell>
                                            </motion.tr>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                            <Box flex={1} ml={2}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Card</TableCell>
                                            <TableCell>Quantity</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {secondHalf.map((card, index) => (
                                            <motion.tr
                                                initial={{ x: '-20vw' }}
                                                animate={{ x: -10 }}
                                                key={index}
                                                onMouseEnter={() => handleMouseEnter(card)}
                                                onClick={(event) => handleCardClick(card, event)}
                                                style={{ cursor: card.quantity === 0 ? 'not-allowed' : 'pointer', opacity: card.quantity === 0 ? 0.5 : 1 }}
                                            >
                                                <TableCell>{card.name}</TableCell>
                                                <TableCell>{card.quantity}</TableCell>
                                            </motion.tr>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="card-preview" flex={2} ml={2} style={{ position: 'sticky', top: 0 }}>
                    <Typography variant="h5">Card Preview</Typography>
                    {highlightedCard ? (
                        <Box>
                            <Typography>{highlightedCard.name}</Typography>
                        </Box>
                    ) : (
                        <Typography>Click a card to select/deselect</Typography>
                    )}
                </Box>

                <Box className="selected-cards" flex={2} ml={2} style={{ position: 'sticky', top: 0 }}>
                    <Typography variant="h5">Selected Cards</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Card</TableCell>
                                <TableCell>Quantity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {selectedCards.map((card, index) => (
                                <motion.tr
                                    initial={{ x: '-20vw' }}
                                    animate={{ x: -10 }}
                                    key={index}
                                    onMouseEnter={() => handleMouseEnter(card)}
                                    onClick={(event) => handleSelectedCardClick(card, event)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <TableCell>{card.name}</TableCell>
                                    <TableCell>{card.quantity}</TableCell>
                                </motion.tr>
                            ))}
                        </TableBody>
                    </Table>
                    <Button
                        className="App-button"
                        onClick={handleCreateGameClick}
                        disabled={totalSelectedQuantity !== 5}
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px', padding: '10px', cursor: totalSelectedQuantity !== 5 ? 'not-allowed' : 'pointer' }}
                    >
                        Create Game
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
export default SelectCardMenu;
