import React, { useState } from "react";

//Components
import games from "../video-games";
import SearchBar from "./SearchBar";

//Styling
import { ListWrapper } from "../styles";
import VideoGamesItem from "./VideoGamesItem";

const VideoGamesList = () => {
  const [query, setQuery] = useState("");

  const videoGamesList = games
    .filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
    .map((game) => (
      <VideoGamesItem
        name={game.name}
        genre={game.genre}
        image={game.imageUrl}
        slug={game.slug}
        query={query}
      />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{videoGamesList}</ListWrapper>
    </div>
  );
};

export default VideoGamesList;
