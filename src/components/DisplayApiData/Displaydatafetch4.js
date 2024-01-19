import React, { useEffect, useState } from "react";

function Displaydatafetch4(){
    const[data, SetData] = useState([]);

    useEffect(() => {
        const fetchInfo = async () => {
            const maindata = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            const newdata = await maindata.json()
            const subdata = await (newdata.results)
            SetData(subdata)
        }
        fetchInfo()
    })
    return(
        <div>
            <table>
                {data.map(item => {
                    return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.url}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Displaydatafetch4