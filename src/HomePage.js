import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Grid2 from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function HomePage() {
    return (
        <Box className="homepage" p={2}>
            <Grid2 container spacing={4} justifyContent="center">
                <Grid2 item>
                    <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
                        <img src='/moggle-drink-ff14.jpeg' className="App-logo-circle" alt="logo" />
                        <Button
                            component={Link}
                            to="/triple_triad"
                            variant="contained"
                            color="primary"
                            className="App-button"
                            style={{ marginTop: '10px' }}
                        >
                            Play Triple Triad
                        </Button>
                    </Box>
                </Grid2>

                <Grid2 item>
                    <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
                        <img src="/img/cactaur_punching.gif" className="App-logo-circle" alt="Cactaur Punching" />
                        <Button
                            component={Link}
                            to="/world"
                            variant="contained"
                            color="primary"
                            className="App-button"
                            style={{ marginTop: '10px' }}
                        >
                            Explore FFVIII-2
                        </Button>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default HomePage;