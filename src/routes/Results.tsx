import React from "react";
// import { characters } from "../data/characters";
import { preferencesArray, scoredCharacters } from './Quiz';


function Results() {
  // function computeScore()

  console.log("hello results world");
  console.log(preferencesArray);
  console.log("current characters array: ")
  // const sortedCharacters = scoredCharacters.sort((a,b) => b.score - a.score);


  return (
    <div>
      <p>Hello World!</p>
      {preferencesArray}
      <div></div>
    </div>
  );
}

export default Results;
