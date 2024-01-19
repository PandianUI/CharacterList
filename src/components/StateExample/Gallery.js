import React from "react";
import { useState } from "react";
import { sculptureList } from "./Data";

function Gallery() {
    const[index, SetIndex] = useState(0)
    const[showmore, Setshowmore] = useState(false)

    function handleClick() {
        SetIndex(index + 1)
        Setshowmore(false)
    }

    function prevClick() {
        SetIndex(index - 1)
    }

    function showDetails() {
        Setshowmore(!showmore)
    }

    let sculpture = sculptureList[index];
    return (
        <div>
            <button onClick={handleClick}> Next </button>
            <h2> <i>{sculpture.name}</i> by {sculpture.artist} </h2>
            <h3> ({index + 1} of {sculptureList.length}) </h3>
            <div>
            <button onClick={showDetails}>{showmore ? "Hide Details" : "Show Details" }</button>
            <br></br>
            </div>
            <img src={sculpture.url}  alt={sculpture.alt} />

            {showmore &&   <p>{sculpture.description}</p> }
            <button onClick={prevClick}> Prev </button>
        </div>
    )
}


export default Gallery