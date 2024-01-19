import React, { useEffect, useState } from "react";
import Clock from "./Clock";

function useTime() {
    const initialTime = new Date().toLocaleTimeString
    const[time, SetTime] = useState(() => initialTime);

    useEffect(() => {
        const id = setInterval(() => {

            let newtime = new Date().toLocaleTimeString();
            SetTime(newtime)

        }, 1000)

        return () => clearInterval(id)

    }, []);
    return time;
}



function Main() {
    const time = useTime();
    const[color, SetColor] = useState('lightcoral');
    return (
        <div>
            <p> Pick a Color : 
                <select value={color} onChange={e => SetColor(e.target.value)}>
                    <option value="lightcoral">lightcoral</option>
                    <option value="midnightblue">midnightblue</option>
                    <option value="rebeccapurple">rebeccapurple</option>
                </select>
            </p>
            <Clock color={color} time={time}/>
        </div>
    )
}

export default Main