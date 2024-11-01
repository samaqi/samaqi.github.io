import React, { useState } from 'react';
import SelectCardMenu from './SelectCardMenu';
import './GameSettings.css';

const GameSettings = ({ newTripleTriadGame }) => {
    const rules = ['Same', 'Same Wall', 'Plus', 'Elemental', 'Open', 'Random', 'Sudden Death'];
    const opponents = ['Easy Bot', 'Medium Bot', 'Hard Bot', 'UserOne', 'UserTwo'];
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
        }
    };

    return (
        <div className="game-settings">
            <div className="settings-container">
                <div className="select-rules">
                    <h3>Select Rules</h3>
                    <div className="rules-checkboxes">
                        {rules.map(rule => (
                            <div key={rule}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={rule}
                                        checked={selectedRules.includes(rule)}
                                        onChange={() => handleRuleChange(rule)}
                                    />
                                    {rule}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="select-opponent">
                    <h3>Select Opponent</h3>
                    <input
                        type="text"
                        placeholder="Search Opponent"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <select value={selectedOpponent} onChange={handleOpponentChange}>
                        {opponents.filter(opponent => opponent.includes(searchTerm)).map(opponent => (
                            <option key={opponent} value={opponent}>
                                {opponent}
                            </option>
                        ))}
                    </select>

                    {selectedOpponent && (
                        <button className='App-button' onClick={handleButtonClick}>{buttonText}</button>
                    )}
                </div>
            </div>
            <div className="select-cards">
                {showSelectCardMenu && <SelectCardMenu newTripleTriadGame={newTripleTriadGame} />}
            </div>

        </div>
    );
};

export default GameSettings;