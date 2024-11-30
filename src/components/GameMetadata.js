import React, { useState, useRef, useEffect } from 'react';

const GameMetadata = (props) => {
    const { scores, winText, isGameOver, handleQuit } = props;
    const [isPlaying, setIsPlaying] = useState(true);  // play music by default
    const audioRef = useRef(null);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    return (
        <div className="scores">
            <div className="score-red">Red: {scores.red}</div>
            <div className="score-blue">Blue: {scores.blue}</div>
            <div className="win-text">{winText}</div>
            {isGameOver && <button onClick={handleQuit}>Quit</button>}
            <button onClick={handleQuit}>Quit Debug</button>
            <button onClick={toggleMusic}>{isPlaying ? 'Pause Music' : 'Play Music'}</button>
            <audio ref={audioRef} src="/soundfx/themes/Shuffle_Boogie.mp3" loop />
        </div>
    );
};

export default GameMetadata;