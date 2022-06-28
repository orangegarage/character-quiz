import React, { useState } from 'react';
import { scoredCharacters } from './Quiz';
import { SelectedCharacter } from './All';
import { Nav } from '../components/nav';
import { useTranslation } from 'react-i18next';

function Results() {
  const { t } = useTranslation();
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
          <div className="flex justify-center">
            {i + 1}. {t(characterList[i].name + '.shortname')}
          </div>
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
      <Nav />
      <div className="text-white m-auto whitespace-pre-line">
        <ul className="mt-20 flex flex-wrap justify-center">
          {renderTop3(sortedCharacters)}
        </ul>
        <p className="mt-20 text-center font-bold">
          {t('results.instructions')}
        </p>
      </div>
      <div className="characterCard" onClick={toggleVisibility}>
        {SelectedCharacter(index)}
      </div>
    </div>
  );
}

export default Results;
