import styled from "styled-components";

export const GameWrapper = styled.div`
  img {
    width: 75px;
    min-height: 100px;
  }

  h5 {
    text-align: center;
    font-weight: bold;
    color: purple;
  }

  p {
    text-align: center;
    font-weight: italic;
    color: black;
  }
`;
export const ListWrapper = styled.div`
  align-itemns: center;
  justify-content: center;
  display: flex;
`;

export const Search = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Copy = styled.button`
  font-size: 1em;
   display: inline-block;
   padding: 0.8em 2em;
   margin: 0 0.8em 0.8em 0;
   border-radius: 3em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 900;
   text-align: right;
   transition: all 0.2s;
  background-color: lightblue;
  color: white;
`;

// display: flex;
