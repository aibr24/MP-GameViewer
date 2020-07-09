import React from "react";
import { useParams } from "react-router-dom";

//Styling
import { GameWrapper, Copy } from "../styles";

// Components
import GameRecommnedations from "./GameRecommendations";
const VideoGameDetail = ({ games }) => {
  const { slug } = useParams();

  const game = games.find((game) => game.slug === slug);

  return (
    <>
      <GameWrapper>
        <img src={game.imageUrl} alt={game.name} />
        <h1>{game.name}</h1>
        <p>Publisher:{game.publisher}</p>
        <p>{game.genre}</p>
        <p>{game.description}</p>
        <Copy onClick="{handleCopy}">Share</Copy>
      </GameWrapper>
      <GameRecommnedations games={games} />
    </>
  );
};
export default VideoGameDetail;
