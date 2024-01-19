import React, { useEffect, useState } from "react";

function Displaydatafetch5() {
    const[data, SetData] = useState([])

    useEffect(() => {
        const fetchInfo = async () => {
            const fetchdata = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            const displaydata = await fetchdata.json()
            const innerdata = await displaydata.results
            SetData(innerdata)
        }
        fetchInfo();
    }, [])

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

export default Displaydatafetch5