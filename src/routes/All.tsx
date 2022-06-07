import React, { useState } from "react";
import { characters } from "../data/characters";

function AllCharacters() {
  function characterClick(characterName: string) {
    console.log("clicked: " + characterName);
    //go into characters and align the name , print index related
  }

  let characterList = characters.map((character) => {
    return (
      // when calling function with parenthesis it actually calls the function
      // to avoid anonymous function...?
      <li key={character.name} onClick={() => characterClick(character.name)}>
        <img src={character.image} />
        {character.name}
      </li>
    );
  });

  return (
    <div>
      <div className="characters">
        <ul className="characterList">{characterList}</ul>
      </div>
      <div className="characterInfo">
        <p>
          {characters[0].name}: {characters[0].traits}
        </p>
      </div>
    </div>
  );
}

export default AllCharacters;
