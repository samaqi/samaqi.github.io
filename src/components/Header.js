import React from 'react';
import { Link } from 'react-router-dom';

import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
const Header = () => {
    return (
        <header className="App-header">
            <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                <div className="nav-item">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        <HomeIcon style={{ fontSize: '2rem' }} /> Home
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        <PersonIcon style={{ fontSize: '2rem' }} /> About me
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/triple_triad" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        <SportsEsportsIcon style={{ fontSize: '2rem' }} /> Play Triple Triad
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/writing-corner" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        <CreateIcon /> Writing Corner
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;