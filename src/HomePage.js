import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './HomePage.css';

const backgroundImages = [
    '/img/homepage_images/all.jpg',
    '/img/homepage_images/all-1.webp',

    '/img/homepage_images/rinoa.jpg',
    '/img/homepage_images/rinoa-1.jpg',
    '/img/homepage_images/rinoa-2.jpg',

    '/img/homepage_images/squall-irvine-selphie.jpg',

    '/img/homepage_images/squall-rinoa.jpg',
    '/img/homepage_images/squall-rinoa-1.jpg',
    '/img/homepage_images/squall-rinoa-2.webp',
    '/img/homepage_images/squall-rinoa-seifer.jpg',

    '/img/sprint_images/Balamb_Garden.jpg',
    '/img/sprint_images/Fishermans_Horizon.jpg',
    '/img/sprint_images/Dont_Be_Afraid.jpg',
    '/img/sprint_images/Ride_On.jpg',
    '/img/sprint_images/Where_I_Belong.jpg',
    '/img/sprint_images/Eyes_On_Me.jpg',
    '/img/sprint_images/The_Successor.jpg',
    '/img/sprint_images/Maybe_Im_a_Lion.jpg',
    '/img/sprint_images/The_Extreme.jpg',
    '/img/sprint_images/The_Castle.jpg',
    '/img/sprint_images/Compression_of_Time.jpg',
];

const getRandomImage = () => backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

const HomePage = () => {
    const [backgroundImage, setBackgroundImage] = useState(getRandomImage());

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage(getRandomImage());
        }, 15000); // Change background every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    }}
                />
                <Typography
                    variant="h4"
                    align="center"
                    component="div"
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    }}
                >
                    Welcome to my FFVIII Fanpage!
                </Typography>
            </motion.div>
            <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                <div className="snowflakes" aria-hidden="true">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="snowflake"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${5 + Math.random() * 10}s`,
                            }}
                        >
                            {index % 2 === 0 ? '❅' : '❆'}
                        </div>
                    ))}
                </div>
            </motion.div>
        </Box>
    );
};

export default HomePage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Grid2 from '@mui/material/Grid2';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// function HomePage() {
//     return (
//         // <Box className="homepage" p={2}>
//         //     <Grid2 container spacing={4} justifyContent="center">
//         {/* <Grid2 item>
//                     <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
//                         <img src='/moggle-drink-ff14.jpeg' className="App-logo-circle" alt="logo" />
//                         <Button
//                             component={Link}
//                             to="/triple_triad"
//                             variant="contained"
//                             color="primary"
//                             className="App-button"
//                             style={{ marginTop: '10px' }}
//                         >
//                             Play Triple Triad
//                         </Button>
//                     </Box>
//                 </Grid2> */}

//                 {/* <Grid2 item>
//                     <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
//                         <img src="/img/cactaur_punching.gif" className="App-logo-circle" alt="Cactaur Punching" />
//                         <Button
//                             component={Link}
//                             to="/tournament"
//                             variant="contained"
//                             color="primary"
//                             className="App-button"
//                             style={{ marginTop: '10px' }}
//                         >
//                             Enter Tournament
//                         </Button>
//                     </Box>
//                 </Grid2> */}

//     {/* <Grid2 item>
//                     <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
//                         <img src="/img/chocobo-racing.gif" className="App-logo-circle" alt="Chocobo Racing" style={{ background: 'white' }} />
//                         <Button
//                             component={Link}
//                             to="/debug"
//                             variant="contained"
//                             color="primary"
//                             className="App-button"
//                             style={{ marginTop: '10px' }}
//                         >
//                             Debug Area
//                         </Button>
//                     </Box>
//                 </Grid2> */}
//         //     </Grid2>
//         // </Box>
//     );
// }

// export default HomePage;