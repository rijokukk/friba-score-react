import React from 'react';
import './PreviousGames.css';
import PreviousGame from './PreviousGame/PreviousGame';

// Previous games are shown in the front page
const previousGames = (props) => props.previousGames.map(g => {
    return (
        <div key={g.id} className="PreviousGames">
            <PreviousGame
                date={g.date}
                track={g.track}
                score={g.score} />
        </div>
    )
});


export default previousGames;