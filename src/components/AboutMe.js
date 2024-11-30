import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import ArtIcon from '@mui/icons-material/Brush';
import KnittingIcon from '@mui/icons-material/Extension';
import MusicIcon from '@mui/icons-material/MusicNote';

const AboutMe = () => {
    const [selectedSection, setSelectedSection] = useState('fictions');

    const renderContent = () => {
        switch (selectedSection) {
            case 'fictions':
                return <FictionsContent />;
            case 'arts':
                return <ArtsContent />;
            case 'knitting-crochet':
                return <KnittingCrochetContent />;
            case 'music':
                return <MusicContent />;
            default:
                return <FictionsContent />;
        }
    };

    const getButtonStyle = (section) => ({
        margin: '0.5rem 0',
        backgroundColor: selectedSection === section ? '#d3d3d3' : 'transparent',
    });

    const buttonTextStyle = {
        textTransform: 'none',
        margin: 0,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
    };

    return (
        <Box style={{ padding: '2rem' }}>
            <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <Avatar
                    alt="avatar"
                    src="/img/aboutme/avatar.jpg"
                    style={{ width: '200px', height: '150px', marginRight: '2rem', borderRadius: '10%' }}
                />
                <Box>
                    <Typography variant="h6" component="h1">
                        Welcome to my FFVIII Sanctuary!
                    </Typography>
                    <Typography variant="body1" align='left' component="p" style={{ marginTop: '1rem' }}>
                        Hi there! I'm samaqi--a shameless Trepie of Final Fantasy VIII!<br />
                        <b>Quistis</b> is my favorite character who inspired me to become an educator (and a life-long nerd). <b>Selphie</b> reminds me to stay positive, and <b>Rinoa</b> shows me it's okay to be scared but you gotta be brave and everything is gonna be A O K ;).<br />
                        I am passionate about applying inspirations from FFVIII world into various forms of art. I'd love to share my humble creations with FF fans and hope you enjoy exploring my site.
                    </Typography>
                </Box>
            </Box>
            <hr />
            <Box style={{ display: 'flex', marginTop: '2rem' }}>
                <Box style={{ width: '200px', marginRight: '2rem' }}>
                    <Typography variant="h6" component="h2">
                        My Works
                    </Typography>
                    <Box style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
                        <Button onClick={() => setSelectedSection('fictions')} style={getButtonStyle('fictions')} sx={buttonTextStyle}>
                            <CreateIcon /> Fictions
                        </Button>
                        <Button onClick={() => setSelectedSection('arts')} style={getButtonStyle('arts')} sx={buttonTextStyle}>
                            <ArtIcon /> Arts
                        </Button>
                        <Button onClick={() => setSelectedSection('knitting-crochet')} style={getButtonStyle('knitting-crochet')} sx={buttonTextStyle}>
                            <KnittingIcon /> Crochet
                        </Button>
                        <Button onClick={() => setSelectedSection('music')} style={getButtonStyle('music')} sx={buttonTextStyle}>
                            <MusicIcon /> Music
                        </Button>
                    </Box>
                </Box>
                <Box style={{ flex: 1 }}>
                    {renderContent()}
                </Box>
            </Box>
        </Box>
    );
};

const FictionsContent = () => (
    <Typography variant="body1" align='left'>
        I publish my works to <a href="https://archiveofourown.org/users/samaqi/works">Archive of Our Own</a> and <a href="https://www.fanfiction.net/u/16125412/">FanFiction.net</a>.
        <br /><br />
        Here's how FFVIII-2 looks like in my opinion:
        <br /><br />
        <strong>1. Succession of Witches</strong>
        <br />
        <strong>Genre:</strong> Adventure, Action, some Romance
        <br />
        <strong>Characters:</strong> FFVIII main cast and many OCs. Main: Acma (OC), Raddie (OC), Quistis, Seifer
        <br />
        Opening with lives of FFVIII main characters post war, quickly transitioned to a new war. At the end reveal the identity of Hyne, giving hints on Ultimecia's identity.
        <br />
        <strong>Status:</strong> 70% completion
        <br /><br />
        <strong>2. Time Compression</strong>
        <br />
        <strong>Genre:</strong> Scifi, Adventure, Action
        <br />
        <strong>Characters:</strong> Mostly OCs, very few FFVIII main cast remained at this point. Main: Luluna (OC), Napen (OC), Ultimecia
        <br />
        White SeeDs vs Ultimecia journey, Ultimecia's defeat, and what happened after.
        <br />
        <strong>Status:</strong> just started
    </Typography>
);

const ArtsContent = () => (
    <Typography variant="body1" align='left'>
        I do pencil drawings and am learning digital art, 3D modeling in Blender. I hope to fill this portion in the future with my creations, such as 3D views of Balamb Garden, Balamb Town, Winhill, and Trabia Garden.
    </Typography>
);

const KnittingCrochetContent = () => (
    <Typography variant="body1" align='left'>
        I have crocheted a few FF cute monsters and am planning to crochet more. Some are missing due to multiple moves. I will share my creations here along with their patterns.
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
            <img src="/img/aboutme/tonberry.jpg" alt="Tonberry" style={{ maxHeight: '300px', width: 'auto' }} />
            <img src="/img/aboutme/cactaur.jpg" alt="Cactaur" style={{ maxHeight: '300px', width: 'auto' }} />
        </div>
    </Typography>
);

const MusicContent = () => (
    <Typography variant="body1" align='left'>
        I like to cover Final Fantasy vocal songs but don't have the courage to share them yet. I will share them here when I'm ready. Ahem ahem, ding ding XD.
    </Typography>
);

export default AboutMe;