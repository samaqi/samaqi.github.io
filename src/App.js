import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import TripleTriadGame from './components/TripleTriadGame';
import Header from './components/Header';
import DebugTournament from './components/DebugTournament';
import Tournament from './components/Tournament';
import MatchDetail from './components/MatchDetail';
import TripleTriadRules from './components/TripleTriadRules';
import OpenWorld from './components/OpenWorld';
import WritingCorner from './components/WritingCorner';
import AboutMe from './components/AboutMe';


function Layout() {
  const location = useLocation();

  // TODO: get match data from spreadsheet
  // https://github.com/g-loot/react-tournament-brackets/blob/master/src/mock-data/simple-data.ts
  const matches = [
    {
      id: 19753,
      nextMatchId: null,
      tournamentRoundText: '3',
      startTime: '2024-12-30',
      state: 'SCHEDULED',
      participants: [],
    },
    {
      id: 19754,
      nextMatchId: 19753,
      tournamentRoundText: '2',
      startTime: '2024-12-30',
      state: 'SCHEDULED',
      participants: [
        {
          id: '14754a1a-932c-4992-8dec-f7f94a339960',
          resultText: null,
          isWinner: false,
          status: null,
          name: 'Seifer',
          picture: '/img/aboutme/avatar.jpg',
        },
      ],
    },
    {
      id: 19755,
      nextMatchId: 19754,
      tournamentRoundText: '1',
      startTime: '2024-12-30',
      state: 'SCORE_DONE',
      participants: [
        {
          id: '14754a1a-932c-4992-8dec-f7f94a339960',
          resultText: 'Won',
          isWinner: true,
          status: 'PLAYED',
          name: 'Selphie',
          picture: '/img/aboutme/avatar.jpg',
        },
        {
          id: 'd16315d4-7f2d-427b-ae75-63a1ae82c0a8',
          resultText: 'Lost',
          isWinner: false,
          status: 'PLAYED',
          name: 'Squall',
          picture: '/img/aboutme/avatar.jpg',
        },
      ],
    },
    {
      id: 19756,
      nextMatchId: 19754,
      tournamentRoundText: '1',
      startTime: '2024-12-30',
      state: 'RUNNING',
      participants: [
        {
          id: 'd8b9f00a-0ffa-4527-8316-da701894768e',
          resultText: null,
          isWinner: false,
          status: null,
          name: 'Quistis',
          picture: '/img/aboutme/avatar.jpg',
        },
      ],
    },
    {
      id: 19757,
      nextMatchId: 19753,
      tournamentRoundText: '2',
      startTime: '2024-12-30',
      state: 'SCHEDULED',
      participants: [],
    },
    {
      id: 19758,
      nextMatchId: 19757,
      tournamentRoundText: '1',
      startTime: '2024-12-30',
      state: 'SCHEDULED',
      participants: [
        {
          id: '9397971f-4b2f-44eb-a094-722eb286c59b',
          resultText: null,
          isWinner: false,
          status: null,
          name: 'Rinoa',
          picture: '/img/aboutme/avatar.jpg',
        },
      ],
    },
    {
      id: 19759,
      nextMatchId: 19757,
      tournamentRoundText: '1',
      startTime: '2024-12-30',
      state: 'SCHEDULED',
      participants: [
        {
          id: '42fecd89-dc83-4821-80d3-718acb50a30c',
          resultText: null,
          isWinner: false,
          status: null,
          name: 'Zell',
          picture: '/img/aboutme/avatar.jpg',
        },
        {
          id: 'df01fe2c-18db-4190-9f9e-aa63364128fe',
          resultText: null,
          isWinner: false,
          status: null,
          name: 'Irvine',
          picture: '/img/aboutme/avatar.jpg',
        },
      ],
    },
  ];

  return (
    <>
      {location.pathname !== '/triple_triad' && <Header />}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/triple_triad" element={<TripleTriadGame />} />
          <Route path="/debug" element={<DebugTournament />} />
          <Route path="/tournament" element={<Tournament matches={matches} />} />
          <Route path="/match/:matchId" element={<MatchDetail matches={matches} />} />
          <Route path="/triple_triad_rules" element={<TripleTriadRules />} />
          <Route path="/open_world" element={<OpenWorld />} />
          <Route path="/writing-corner/*" element={<WritingCorner />} />
          <Route path="/about" element={<AboutMe />} />


        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;