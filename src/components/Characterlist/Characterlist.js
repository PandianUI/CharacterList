// CharacterList.js
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function CharacterList({data}) {

  return (
    <div className='characterList'>
      <h1>Character List</h1>
      <ul className='imageList'>
        {data.map((character) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default CharacterList;
