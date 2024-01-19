import React, { useState } from "react";


function Inputshow() {

    const [fname, Setfname] = useState(0)



    const clickval = () => {
        const inval = fname.target.value
        alert(Setfname(inval))
    }
    return(
        <div>
            <input type="text" value="Deekshi" />
            <button className="start_btn" onClick={clickval} >Show Input Value</button>
            <p>{fname}</p>
        </div>
    )
}

export default Inputshow