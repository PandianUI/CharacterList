import React, { useEffect, useState } from "react";

function Togglediv2(){
    const[active, Setactive] = useState(false)
       
        const changedata = () => {
            Setactive(!active)
        }

        const style = {visibility : active ? "hidden" : "visible"}
    
    return (
        <div className="accord">        
               <button onClick={changedata}>Deekshika</button>
            <div className="showdata" style={style}>
                <p>Deekshika is the daughter of pandi and santhiya couple</p>
            </div>
        </div>
    )
}

export default Togglediv2