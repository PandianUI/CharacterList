import React, { useEffect, useState } from "react";

function Togglediv1(){
    const[active, Setactive] = useState(true)
       
        const changedata = () => {
            Setactive(!active)
        }
    
    return (
        <div className="accord">        
               <button onClick={changedata}>Deekshika</button>
            {active && <div className="showdata">
                <p>Deekshika is the daughter of pandi and santhiya couple</p>
            </div>}
        </div>
    )
}

export default Togglediv1