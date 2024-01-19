import React, { useEffect, useState } from "react";

function Displaydatafetch3(){
    const[data, SetData] = useState([])

    useEffect(() => {

        const fetchInfo = async () => {
            const newval = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20%27);')
            const mainval = await(newval.json())
            const subval = await (mainval.results)
            SetData(subval)
        }
        fetchInfo();
    }, [])
    return (
        <div>
            <table>
            {data.map(item => {
                return(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                </tr>
                )
            })}
            </table>
        </div>
    )
}


export default Displaydatafetch3