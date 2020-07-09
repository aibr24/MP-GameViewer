import React from 'react';

const VideoGamesItem = (props) => {

    const game = props.game

    return(
        <h5>{game.name}</h5>
        <p>{game.genre}</p>
        <img src={game.imageUrl}

    );
};

export default VideoGamesItem