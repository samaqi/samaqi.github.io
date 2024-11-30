import React, { useState } from 'react';
import SelectCardMenu from './SelectCardMenu';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';



import './GameSettings.css';

const GameSettings = ({ newTripleTriadGame }) => {
    const rules = ['Same', 'Same Wall', 'Plus', 'Elemental', 'Random', 'Open', 'Sudden Death'];
    const opponents = ['Easy Bot', 'Medium Bot', 'Hard Bot', 'Seiftis_chav', 'ICtH_Sammy'];
    const [selectedRules, setSelectedRules] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOpponent, setSelectedOpponent] = useState('Easy Bot');
    const [showSelectCardMenu, setShowSelectCardMenu] = useState(false);
    const [buttonText, setButtonText] = useState('Select Cards');

    const handleRuleChange = (rule) => {
        const updatedRules = selectedRules.includes(rule)
            ? selectedRules.filter(r => r !== rule)
            : [...selectedRules, rule];

        setSelectedRules(updatedRules);

        if (updatedRules.includes('Random')) {
            setShowSelectCardMenu(false);
            setButtonText('Create Game');
        } else {
            setButtonText('Select Cards');
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOpponentChange = (event) => {
        setSelectedOpponent(event.target.value);
    };

    const handleButtonClick = () => {
        if (buttonText === 'Select Cards') {
            setShowSelectCardMenu(true);
        } else {
            // Logic to create game
            newTripleTriadGame(null, selectedRules, selectedOpponent);
        }
    };

    const passSelectedCards = (selectedCards) => {
        newTripleTriadGame(selectedCards, selectedRules, selectedOpponent);
    };

    return (
        <div className="game-settings">
            <div className="settings-container">
                <div className="select-rules">
                    <h3>1. Select Rules</h3>
                    <div>
                        <Link to="/triple_triad_rules">See available rules</Link>
                    </div>
                    <div className="rules-checkboxes">
                        {rules.map(rule => (
                            rule === 'Sudden Death' ? (
                                <Tooltip key={rule} title="Not Implemented">
                                    <span>
                                        <FormControlLabel
                                            control={<Checkbox checked={selectedRules.includes(rule)} disabled />}
                                            label={rule}
                                        />
                                    </span>
                                </Tooltip>
                            ) : rule === 'Open' ? (
                                <FormControlLabel
                                    key={rule}
                                    control={<Checkbox checked={true} disabled />}
                                    label={rule}
                                />
                            ) : (
                                <div key={rule}>
                                    <FormControlLabel
                                        key={rule}
                                        control={
                                            <Checkbox
                                                value={rule}
                                                checked={selectedRules.includes(rule)}
                                                onChange={() => handleRuleChange(rule)}
                                            />
                                        }
                                        label={rule}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>

                <div className="select-opponent">
                    <h3>2. Select Opponent</h3>
                    <TextField
                        label="Type to search opponents"
                        variant="outlined"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        fullWidth
                    />
                    <Box mt={2}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="select-opponent-label">Selected Opponent</InputLabel>
                            <Select
                                labelId="select-opponent-label"
                                value={selectedOpponent}
                                onChange={handleOpponentChange}
                                label="Selected Opponent"
                            >
                                {opponents.filter(opponent => opponent.includes(searchTerm)).map(opponent => (
                                    <MenuItem key={opponent} value={opponent}>
                                        {opponent}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    {selectedOpponent && (
                        <div>
                            <h3>3. Select Cards or Start Game</h3>
                            <button className='App-button' onClick={handleButtonClick}>{buttonText}</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="select-cards">
                {showSelectCardMenu && <SelectCardMenu passSelectedCards={passSelectedCards} />}
            </div>

        </div>
    );
};

export default GameSettings;