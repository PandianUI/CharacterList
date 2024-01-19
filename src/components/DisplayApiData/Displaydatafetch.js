import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Displaydatafetch() {
    const[data, SetData] = useState([]);

    useEffect(() => {
    const fetchInfo = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/users');
        const d = await res.json();
        return SetData(d);
    }
fetchInfo();
    }, [])

    return(
        <div>
            <h1>Datat Fetch</h1>
                    
                    {data.map(item => {
                        return (
                            <div>
                                <p>{item.id}</p>
                                <p>{item.name}</p>
                                <p><img src={item.avatar} /></p>
                            </div>
                        )
                    })}
            
        </div>
    )
}


export default Displaydatafetch