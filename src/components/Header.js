import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header>
            <div className="logo">
            </div>
            <motion.div className="title"
                initial={{ y: -250 }}
                animate={{ y: -10 }}
            >
                <h1>samaqi</h1>
            </motion.div>
        </header>
    )
}

export default Header;