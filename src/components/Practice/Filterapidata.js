import React, { useEffect, useState } from "react";

function Filterapidata(){
    const[data, SetData] = useState([])

    useEffect(() => {
        const fetchInfo = async () => {
            const newdata = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
            const getdata = await newdata.json()
            SetData(getdata)
        }
        fetchInfo()
    }, [])

    return(
        <div>
            <table>
                {data.map(item => {
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default Filterapidata