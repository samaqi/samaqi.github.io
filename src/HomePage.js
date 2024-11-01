// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function HomePage() {
    return (
        <div>
            <header className="App-header">
                <motion.div
                    initial={{ opacity: 0, y: -250 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ delay: 0.5 }}
                >
                    Welcome!
                </motion.div>
                <img src='/moggle-drink-ff14.jpeg' className="App-logo-circle" alt="logo" />

                <Link to="/triple_triad" className="App-button">
                    Play Triple Triad
                </Link>
            </header>
        </div>
    );
}

export default HomePage;