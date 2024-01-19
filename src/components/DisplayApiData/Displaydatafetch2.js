import React, { useEffect, useState } from "react";

function Displaydatafetch2(){
    const[data, SetData] = useState([])


    useEffect(()=> {
        const fetchInfo = async () => {
            const res = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=20'); 
            const d = await res.json();
            console.log(d)
            const val = await d.results
            return SetData(val)
         }
       fetchInfo();
    }, [])
     


    return(
        <div>
              <h1>Datat Fetch2</h1>
            <table>
                {data.map(item => {
                    return (
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

export default Displaydatafetch2