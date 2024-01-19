// CharacterDetails.js
import React, {useState, useEffect} from 'react';
 import { useParams } from 'react-router-dom';


function CharacterDetails({data}) {

  const { id } = useParams();
  console.log("data isssssss", data)
  const character = data.find((char) => char.id === parseInt(id));

  if (!character) {
    return <p>Character not found</p>;
  }

  return (
    <div className='characterList charDetails'>
     <h1>Character Details</h1>
      <div className='details'>
        <div className='detailImg'>
          <img src={character.image} alt={character.name} />
        </div>
        <div className='detailContainer'>
          <div className='detailRow'>
            <div>Name </div>
            <div>:</div>
            <div><p>{character.name}</p></div>
          </div>
          <div className='detailRow'>
            <div>Status </div>
            <div>:</div>
            <div><p>{character.status}</p></div>
          </div>
          <div className='detailRow'>
            <div>Species </div>
            <div>:</div>
            <div><p>{character.species}</p></div>
          </div>
          <div className='detailRow'>
            <div>Gender </div>
            <div>:</div>
            <div><p>{character.gender}</p></div>
          </div>
          <div className='detailRow'>
            <div>Location </div>
            <div>:</div>
            <div><p>{character.location.name}</p></div>
          </div>
          <div className='detailRow'>
            <div>URL </div>
            <div>:</div>
            <div><p>{character.location.url}</p></div>
          </div>
          <div className='detailRow'>
            <div>Created </div>
            <div>:</div>
            <div><p>{character.created}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
