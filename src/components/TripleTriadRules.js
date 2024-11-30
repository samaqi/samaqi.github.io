import React from 'react';
import { List, ListItem, Link, Typography, Box } from '@mui/material';

const TripleTriadRules = () => {
    const rules = [
        { name: 'Same', img: ['/img/same_rule.jpeg'] },
        { name: 'Same Wall', img: ['/img/same_wall_rule.jpeg'] },
        { name: 'Plus', img: ['/img/plus_rule.jpeg'] },
        { name: 'Combo', img: ['/img/combo_rule.jpeg'] },
        { name: 'Elemental', img: ['/img/elemental_rule.jpeg', '/img/elemental_rule_2.jpeg'] }
    ];

    return (
        <Box sx={{ padding: 2, textAlign: 'left' }}>
            <div id="top"></div>
            <Typography variant="h3">Triple Triad Rules</Typography>
            <List>
                {rules.map(rule => (
                    <ListItem key={rule.name}>
                        <Link href={`#${rule.name.replace(' ', '_')}`} underline="hover">
                            {rule.name}
                        </Link>
                    </ListItem>
                ))}
            </List>
            {rules.map(rule => (
                <div key={rule.name} id={rule.name.replace(' ', '_')}>
                    <Typography variant="h4">
                        {rule.name}
                        <Link href="#top" sx={{ marginLeft: 1 }}>
                            <Typography variant="body2">(Back to top)</Typography>
                        </Link>
                    </Typography>
                    {rule.img.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`${rule.name} rule`} />
                    ))}
                </div>
            ))}
        </Box>
    );
};

export default TripleTriadRules;