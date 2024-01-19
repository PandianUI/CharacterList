import React, { useState } from "react";

export default function Userdata({data, key}){
    const[details, SetDetails] = useState(data)
    const newfilter = data.filter(item => item.id === key)
    SetDetails(newfilter)

    return(
        <div>
            <h2>Userdata</h2>
            {details.map((character) => (
                
                <div>
                    <p>Name: {character.name}</p>
                    <img src={character.image} alt={data.name} />
                    <p>Gender: {character.gender}</p>
                    <p>Species: {character.species}</p>
                    <p>Type: {character.type}</p>
                    <p>Location: {character.location.name}</p>
                           
                </div>
            
            ))}
        </div>
    )
}