import React from "react";
import { Route, Switch } from "react-router";

//Components
import VideoGamesList from "./components/VideoGamesList";
import VideoGameDetail from "./components/VideoGameDetail";

//Data
import games from "./video-games";

// video games
// a list of video games
// a details page
// recommended games while in the details page
console.log(window.location.href);
function App() {
  return (
    <div>
      <Switch>
        <Route path="/:slug">
          <VideoGameDetail games={games} />
        </Route>
        <Route exact path="/">
          <VideoGamesList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
