import React from 'react';
import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import deepOrange from '@mui/material/colors/deepOrange';

const Header = () => {
    return (
        <header className="App-header">
            <div className="logo">
            </div>
            <motion.div className="title"
                initial={{ y: -250 }}
                animate={{ y: -10 }}
            >
                <Avatar sx={{ bgcolor: deepOrange[500], height: 80, width: 80 }}>
                    <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>samaqi</a>
                </Avatar>
            </motion.div>
        </header>
    )
}

export default Header;