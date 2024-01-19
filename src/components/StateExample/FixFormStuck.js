import React, { useState } from "react";

function Formstuck(){
    let[firstName, SetfirstName] = useState()
    let[lastName, SetlastName] = useState()

    function handleFirstName(e){
        SetfirstName(e.target.value);
    }

    function handlelastName(e){
        SetlastName(e.target.value);
    }

    function handleReset() {
        SetfirstName('')
        SetlastName('')
    }


    return(
        <div>
            <form onSubmit={e=> e.preventDefault()}>
                <div>
                    <input type="text" placeholder="First Name" value = {firstName} onChange={handleFirstName} />
                    <input type="text" placeholder="Last Name" value = {lastName} onChange={handlelastName} />
                </div>
                <h2>Hi {firstName}, {lastName}</h2>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}

export default Formstuck