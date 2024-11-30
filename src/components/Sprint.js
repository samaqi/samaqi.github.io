import React, { useState, useEffect, useRef } from 'react';
import { Button, IconButton, Tooltip, TextField, MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const Sprint = ({ musicFiles, hasLyrics = false }) => {
    const [time, setTime] = useState(25 * 60); // default 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [initialTime, setInitialTime] = useState(25 * 60); // store initial time
    const [isMuted, setIsMuted] = useState(false);
    const [wasPaused, setWasPaused] = useState(false); // new state to track if the timer was paused

    const [selectedMusic, setSelectedMusic] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('');
    const [lyrics, setLyrics] = useState('');

    const intervalRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        if (musicFiles.length > 0) {
            const firstSongName = musicFiles[0].split('/').pop().split('.')[0];
            setSelectedMusic(`/soundfx/sprint_music/${firstSongName}.mp3`);
            setBackgroundImage(`/img/sprint_images/${firstSongName}.jpg`);
            audioRef.current = new Audio(`/soundfx/sprint_music/${firstSongName}.mp3`);
            audioRef.current.loop = true;
        }
    }, [musicFiles]);

    useEffect(() => {
        if (isActive && !isMuted) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isActive, isMuted]);

    useEffect(() => {
        audioRef.current.src = selectedMusic;
        if (isActive && !isMuted) {
            audioRef.current.play();
        }
    }, [selectedMusic]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleStart = () => {
        if (!isActive) {
            setIsActive(true);
            setWasPaused(false); // reset wasPaused when starting or resuming
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(intervalRef.current);
                        setIsActive(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
    };

    const handlePause = () => {
        if (isActive) {
            clearInterval(intervalRef.current);
            setIsActive(false);
            setWasPaused(true); // set wasPaused to true when pausing
        }
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setIsActive(false);
        setWasPaused(false); // reset wasPaused when resetting
        setTime(initialTime);
    };

    const handleTimeChange = (event) => {
        const newTime = Math.max(60, Math.min(3600, event.target.value * 60));
        setInitialTime(newTime);
        setTime(newTime);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleMusicChange = (event) => {
        const selectedFile = event.target.value;
        setSelectedMusic(`/soundfx/sprint_music/${selectedFile}`);
        setBackgroundImage(`/img/sprint_images/${selectedFile.replace('.mp3', '.jpg')}`);
    };

    useEffect(() => {
        if (hasLyrics && selectedMusic) {
            const lyricsFile = selectedMusic.replace('/soundfx/sprint_music/', '/text/sprint_lyrics/').replace('.mp3', '.txt');
            fetch(lyricsFile)
                .then(response => response.text())
                .then(text => setLyrics(text))
                .catch(error => {
                    console.error('Error fetching lyrics:', error);
                    setLyrics('Lyrics not found');
                });
        }
    }, [selectedMusic, hasLyrics]);

    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px', border: '2px solid #ccc' }}>
                <div style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px', display: 'inline-block', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <div>
                        <FormControl variant="outlined" style={{ marginBottom: '20px', minWidth: '200px' }}>
                            <TextField
                                label="Set Timer (minutes)"
                                type="number"
                                value={initialTime / 60}
                                onChange={handleTimeChange}
                                inputProps={{ min: 1, max: 60 }}
                                fullWidth
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="outlined" style={{ marginBottom: '20px', minWidth: '200px' }}>
                            <InputLabel>Select Music</InputLabel>
                            <Select value={selectedMusic.split('/').pop()} onChange={handleMusicChange} label="Select Music">
                                {musicFiles.map((file) => (
                                    <MenuItem key={file} value={file}>
                                        {file.replace('.mp3', '').replace(/_/g, ' ')}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ccc' }} />
                    <div>
                        <Typography variant="h2" gutterBottom>{formatTime(time)}</Typography>
                        <Tooltip title={wasPaused ? 'Resume' : 'Start'}>
                            <span>
                                <IconButton onClick={handleStart} disabled={isActive}>
                                    <PlayArrowIcon fontSize="large" />
                                </IconButton>
                            </span>
                        </Tooltip>
                        <Tooltip title="Pause">
                            <span>
                                <IconButton onClick={handlePause} disabled={!isActive}>
                                    <PauseIcon fontSize="large" />
                                </IconButton>
                            </span>
                        </Tooltip>
                        <Tooltip title="Reset">
                            <span>
                                <IconButton onClick={handleReset}>
                                    <ReplayIcon fontSize="large" />
                                </IconButton>
                            </span>
                        </Tooltip>
                        <Tooltip title={isMuted ? 'Unmute' : 'Mute'}>
                            <span>
                                <IconButton onClick={toggleMute}>
                                    {isMuted ? <VolumeOffIcon fontSize="large" /> : <VolumeUpIcon fontSize="large" />}
                                </IconButton>
                            </span>
                        </Tooltip>
                    </div>
                </div>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> */}
            {hasLyrics && (
                <div style={{ maxHeight: '380px', maxWidth: '600px', border: '2px solid #ccc', borderRadius: '10px', overflowY: 'auto', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <Typography variant="body1" component="pre" style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
                        Lyrics: {lyrics}
                    </Typography>
                </div>
            )}
            {/* </div> */}
        </div>
    );
};

export default Sprint;