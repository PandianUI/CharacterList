import React, { useState } from "react";

function Events() {

    const [count, Setcount] = useState(0);

        const handleClick = () => {
            Setcount(count + 1)
        }

    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
            <h1>{count}</h1>
        </div>
    )
}

export default Events