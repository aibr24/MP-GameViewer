import React from "react";

//Components
import games from "../video-games";

//Styling
import { ListWrapper } from "../styles";
import VideoGamesItem from "./VideoGamesItem";

const VideoGamesList = () => {
  const videoGamesList = games.map((game) => (
    <VideoGamesItem name={game.name} genre={game.genre} image={game.imageUrl} />
  ));

  return (
    <div className="container">
      <ListWrapper className="row">{videoGamesList}</ListWrapper>
    </div>
  );
};

export default VideoGamesList;
