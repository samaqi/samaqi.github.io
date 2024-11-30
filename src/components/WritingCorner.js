import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

import SprintIcon from '@mui/icons-material/Timer';
import StatsIcon from '@mui/icons-material/BarChart';
import CreateIcon from '@mui/icons-material/Create';

import Sprint from './Sprint';
import Stats from './Stats';
import Prompts from './Prompts';


const WritingCorner = () => {
    const location = useLocation();

    const ff8MusicFiles = [
        'Balamb_Garden.mp3',
        'Fishermans_Horizon.mp3',
        'Dont_Be_Afraid.mp3',
        'Ride_On.mp3',
        'Where_I_Belong.mp3',
        'Eyes_On_Me.mp3',
        'The_Successor.mp3',
        'Maybe_Im_a_Lion.mp3',
        'The_Extreme.mp3',
        'The_Castle.mp3',
        'Compression_of_Time.mp3',
    ];

    const ficPlaylistMusicFiles = [
        'Please.mp3',
        'Zuo_Shou_Zhi_Yue.mp3',
        'My_Star.mp3',
    ];
    return (
        <div style={{ display: 'flex' }}>
            <nav style={{ width: '220px', borderRight: '1px solid #ddd' }}>
                <List>
                    <ListItem
                        button
                        component={Link}
                        to="/writing-corner/prompts"
                        style={{ backgroundColor: location.pathname === '/writing-corner/prompts' ? '#f0f0f0' : 'transparent' }}
                    >
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Writing Prompts" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to="/writing-corner/sprint-ff8"
                        style={{ backgroundColor: location.pathname === '/writing-corner/sprint-ff8' ? '#f0f0f0' : 'transparent' }}
                    >
                        <ListItemIcon>
                            <SprintIcon />
                        </ListItemIcon>
                        <ListItemText primary="Writing Sprint" />
                    </ListItem>
                    {/* <ListItem
                        button
                        component={Link}
                        to="/writing-corner/sprint-fic-playlist"
                        style={{ backgroundColor: location.pathname === '/writing-corner/sprint' ? '#f0f0f0' : 'transparent' }}
                    >
                        <ListItemIcon>
                            <SprintIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sprint Fic Playlist" />
                    </ListItem> */}
                    <ListItem
                        button
                        component={Link}
                        to="/writing-corner/stats"
                        style={{ backgroundColor: location.pathname === '/writing-corner/stats' ? '#f0f0f0' : 'transparent' }}
                    >
                        <ListItemIcon>
                            <StatsIcon />
                        </ListItemIcon>
                        <ListItemText primary="FF8 Ship Stats" />
                    </ListItem>
                </List>
                <Divider />
            </nav>
            {location.pathname === '/writing-corner' && (
                <Typography variant="body1" align="center" component="p" style={{ marginTop: '1rem', padding: '5px' }}>
                    <span role="img" aria-label="hand pointing left">👈</span> Select a random Writing Prompt, then use Writing Sprint for a timer and listen to FF8 background music. See Ship Stats for inspiration.
                </Typography>
            )}
            <div style={{ flex: 1, padding: '20px' }}>
                <Routes>
                    <Route path="sprint-ff8" element={<Sprint musicFiles={ff8MusicFiles} />} />
                    <Route path="prompts" element={<Prompts />} />
                    {/* <Route path="sprint-fic-playlist" element={<Sprint musicFiles={ficPlaylistMusicFiles} hasLyrics={true} />} /> */}
                    <Route path="stats" element={<Stats />} />
                </Routes>
            </div>

        </div>
    );
};

export default WritingCorner;