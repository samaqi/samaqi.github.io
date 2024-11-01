import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import TripleTriadGame from './components/TripleTriadGame';
import Header from './components/Header';
import World from './components/World';

function App() {
  // debugger
  return (
    <>
      <Header />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/triple_triad" element={<TripleTriadGame />} />
            <Route path="/world" element={<World />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;