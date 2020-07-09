import React from "react";
import { Link } from "react-router-dom";

//Styling
import { GameWrapper } from "../styles";

const VideoGamesItem = ({ name, genre, image, slug }) => {
  return (
    <GameWrapper className="col-lg-4 col-md-6 col-sm-6 mr-auto">
      <h5>{name}</h5>
      <p>{genre}</p>
      <Link to={`/${slug}`}>
        <img src={image} alt={name} />
      </Link>
    </GameWrapper>
  );
};

export default VideoGamesItem;
