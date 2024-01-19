import React from "react";

function Events() {

    function handleClick(){
        alert("deekshima")
    }

    function Alertmessage({message, children}){
        return (
            <button onClick={() => alert(message)}>
                {children}
            </button>
        )
    }

    return(
        <>
        <button onClick={handleClick} >
            Click Me!
        </button>
        <div>
            <Alertmessage message={'pandian'} children={'click me'}/>
            <Alertmessage message={'Deekshi'} children={'click now'}/>
        </div>
        </>
    )
}

export default Events