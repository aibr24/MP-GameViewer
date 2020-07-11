import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

//Styling
import { GameWrapper, Copy } from "../styles";

// Components
import GameRecommnedations from "./GameRecommendations";
const VideoGameDetail = ({ games }) => {
  const { slug } = useParams();

  const game = games.find((game) => game.slug === slug);

  const [urlCopy, setUrlCopy] = useState();
  const handleCopy = () => {
    setUrlCopy(window.location.value);
    var dummy = `$("<input>").val(urlCopy).appendTo("body").select()`;
    document.execCommand("copy");
  };
  //   const clipboard = useClipboard();
  // //   return (
  // //     <div>
  // //       <input ref={clipboard.target} value={urlCopy} readOnly />
  // //       <button onClick={clipboard.copy}>Copy Link</button>
  // //     </div>
  // //   );
  // // };

  return (
    <>
      <GameWrapper>
        <img src={game.imageUrl} alt={game.name} />
        <h1>{game.name}</h1>
        <p>Publisher:{game.publisher}</p>
        <p>{game.genre}</p>
        <p>{game.description}</p>
        <Copy onClick={() => handleCopy()}>Share</Copy>
      </GameWrapper>
      <GameRecommnedations games={games} />
    </>
  );
};
export default VideoGameDetail;
