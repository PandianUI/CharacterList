import React, { PureComponent } from "react";

function PureComps() {
    
    function Recipe({numbers}) {
        const newval =  2 * numbers;
        return (
            
            <div>I need {newval} glass of water</div>
        )
    }
    
    return (
        <>

        <Recipe numbers={2}/>

        <Recipe numbers={4}/>

        <Recipe numbers={6}/>
        
        </>
    )

}

export default PureComps