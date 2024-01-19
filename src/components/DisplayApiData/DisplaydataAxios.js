import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplaydataAxios() {
    const[data, SetData] = useState([]);

    useEffect(() => {
        axios
        .get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        .then((res) => SetData(res.data))
    })

    return (
        <div>
            <h1>Datat Axios</h1>
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

export default DisplaydataAxios