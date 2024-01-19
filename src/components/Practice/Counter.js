import React, { useEffect, useState } from "react";

function Counter() {
    const[data, SetData] = useState(0)

            const increment = () => {
                SetData(data + 1)
            }
    
            const decrement = () => {
                SetData(data - 1)
            }

    return (
        <div>
            <h2 className="numers">{data}</h2>
            <div className="counterBtns">
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}


export default Counter