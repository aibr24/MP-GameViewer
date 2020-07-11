import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

//Styling
import { GameWrapper, Copy } from "../styles";

// Components
import GameRecommnedations from "./GameRecommendations";
const VideoGameDetail = ({ games }) => {
  const { slug } = useParams();

  const game = games.find((game) => game.slug === slug);

  const [urlCopy, setUrlCopy] = useState(window.location.href);
  const handleCopy = () => {
    setUrlCopy(window.location.href);
  };
  useEffect(() => {
    handleCopy();
  }, [slug]);
  return (
    <>
      <GameWrapper>
        <img src={game.imageUrl} alt={game.name} />
        <h1>{game.name}</h1>
        <p>Publisher:{game.publisher}</p>
        <p>{game.genre}</p>
        <p>{game.description}</p>
        <CopyToClipboard text={urlCopy}>
          <Copy onClick={handleCopy}>Share</Copy>
        </CopyToClipboard>
      </GameWrapper>
      <GameRecommnedations games={games} />
    </>
  );
};
export default VideoGameDetail;
{
  /* <CopyToClipboard>
  {({ handleCopy }) => (
    <Button variant="contained" color="primary" onClick={() => copy(urlCopy)}>
      Copy
    </Button>
  )}
</CopyToClipboard>; */
}
