import React from "react";
import { GameWrapper } from "../styles";

const VideoGamesItem = ({ name, genre, image }) => {
  return (
    <GameWrapper className="col-lg-4 col-md-6 col-sm-6 mr-auto">
      <h5>{name}</h5>
      <p>{genre}</p>

      <img src={image} alt={name} />
    </GameWrapper>
  );
};

export default VideoGamesItem;
