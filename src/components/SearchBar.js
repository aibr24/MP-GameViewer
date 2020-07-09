import React from "react";

//Styling
import { Search } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <Search
      placeholder="search for games"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
