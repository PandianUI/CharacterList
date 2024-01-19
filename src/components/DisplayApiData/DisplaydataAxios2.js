import axios from "axios";
import React, { useEffect, useState } from "react";

function DisplaydataAxios2() {
    const[data, SetData] = useState([]);

    useEffect(() => {
        axios
        .get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        .then((output) => SetData(output.data))

    }, [])


    return (
        <div>
            <h2>DisplayApiDataAxios2</h2>
            <table>
                {data.map(item => {
                    return (
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

export default DisplaydataAxios2