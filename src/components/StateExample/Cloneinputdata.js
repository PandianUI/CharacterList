import React, { useState } from "react";

function Cloneinputdata(){
    const[data, SetData] = useState()

    const newval = (event) => {
        SetData(event.target.value)
    }
    return(
        <div>
            <h2>Hi {data}!</h2>
            <input type="text" onChange={newval} />
        </div>
    )
}


export default Cloneinputdata