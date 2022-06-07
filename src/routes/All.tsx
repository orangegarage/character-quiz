import React, { useState } from "react";
import { characters } from "../data/characters";

function AllCharacters() {
  console.log({ characters });
  let characterList = characters.map((character) => {
    return (
      <li key={character.name}>
        <img src={character.image} />
        {character.name}
      </li>
    );
  });
  return (
    <div>
      <ul>{characterList}</ul>
    </div>
  );
}

export default AllCharacters;
