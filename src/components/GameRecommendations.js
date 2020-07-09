import React from "react";
import { useParams } from "react-router-dom";
import VideoGamesItem from "./VideoGamesItem";

const GameRecommnedations = ({ games }) => {
  const { slug } = useParams();

  const thisGame = games.find((game) => game.slug === slug);
  const filteredGamesList = games
    .filter((game) => game.genre === thisGame.genre && game.id !== thisGame.id)
    .map((game) => (
      <VideoGamesItem
        name={game.name}
        genre={game.genre}
        image={game.imageUrl}
        slug={game.slug}
      />
    ));

  return <div>{filteredGamesList}</div>;
};

export default GameRecommnedations;

// if slug game.genre === games.genre return array of games
