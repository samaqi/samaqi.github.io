import React from 'react';
import { useParams } from 'react-router-dom';

const MatchDetail = ({ matches }) => {
    const { matchId } = useParams();
    const match = matches.find(m => m.id === parseInt(matchId));

    if (!match) {
        return <div>Match not found</div>;
    }

    return (
        <div>
            <h1>Match Details</h1>
            <p>ID: {match.id}</p>
            <p>Round: {match.tournamentRoundText}</p>
            <p>Start Time: {match.startTime}</p>
            <p>State: {match.state}</p>
            <p>Participants: {match.participants.map(p => p.name).join(', ')}</p>
        </div>
    );
};

export default MatchDetail;
