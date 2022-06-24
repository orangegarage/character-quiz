import React, { useState } from 'react';
import { scoredCharacters } from './Quiz';
import { selectedCharacter } from './All';

function Results() {
  // function computeScore()
  console.log('Results Page');
  console.log('sorted array: ');
  const sortedCharacters = scoredCharacters.sort((a, b) => b.score - a.score);

  console.log(sortedCharacters);
  let [index, setIndex] = useState(-1);

  const renderTop3 = (characterList: any) => {
    console.log('render current characters array: ');
    console.log(characterList);
    let top3: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
      top3[i] = (
        <li
          key={characterList[i].name}
          onClick={() => setIndex(i)}
          className="top3Characters mt-6 mx-6 flex-row text-[#61dafb]"
        >
          <div className="flex justify-center">
            <img
              className="top3Images flex justify-center"
              src={characterList[i].image}
              alt={characterList[i].name}
            />
          </div>
          {i + 1}. {characterList[i].name}
        </li>
      );
    }
    return top3;
  };

  function toggleVisibility() {
    //toggle visibility by changing index to -1, as it is negative 1 when nothing is selected
    setIndex(-1);
  }

  return (
    <div>
      <div className="text-white m-auto">
        <ul className="mt-20 flex flex-wrap justify-center">
          {renderTop3(sortedCharacters)}
        </ul>
        <p className="mt-20 text-center">click characters to view details</p>
      </div>
      <div className="characterCard" onClick={toggleVisibility}>
        {selectedCharacter(index)}
      </div>
    </div>
  );
}

export default Results;
