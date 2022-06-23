import React from "react";
import { preferencesArray, scoredCharacters } from "./Quiz";

function Results() {
  // function computeScore()
  console.log("hello results world");
  console.log(preferencesArray);
  const sortedCharacters = scoredCharacters.sort((a, b) => b.score - a.score);

  const renderTop3 = (characterList: any) => {
    console.log("render current characters array: ");
    console.log(characterList);
    let top3: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
      top3[i] = (
        <li key={characterList[i].name} className="top3Characters mt-6 mx-6 flex-row text-[#61dafb]">
          <div>
            <img className = "top3Images flex justify-center" src={characterList[i].image} alt={characterList[i].name}/>
          </div>
          {characterList[i].name}
        </li>
      );
    }
    return top3;
  };

  return (
    <div className="text-white m-auto">
      <p>Hello World!</p>
      {preferencesArray}
      <ul className="mt-20 flex flex-wrap justify-center">{renderTop3(sortedCharacters)}</ul>
    </div>
  );
}

export default Results;
