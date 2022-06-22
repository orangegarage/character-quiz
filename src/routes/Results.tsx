import React from "react";
import { characters } from "../data/characters";
import { preferencesArray } from './Quiz';

let finalArray =  new Array<string>(characters.length);

function Results() {
  console.log("hello results world");
  console.log(preferencesArray);
  return (
    <div>
      <p>Hello World!</p>
      {preferencesArray}
      {finalArray}
    </div>
  );
}

export default Results;
