import React from "react";

//Components
import games from "../video-games";

//Styling
import { ListWrapper } from "../styles";

const VideoGamesList = () => {
  const videoGamesList = games.map((game) => (
    <div>
      <h5>{game.name}</h5>
      <p>{game.genre}</p>
      <img src={game.imageUrl} alt={game.name} />
    </div>
  ));

  return <ListWrapper>{videoGamesList}</ListWrapper>;
};

export default VideoGamesList;
