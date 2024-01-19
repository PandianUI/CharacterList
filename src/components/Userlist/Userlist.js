import React from "react";

export default function Userlist({data, handleClick, key}){



    return(
        <div>
            <h2>Userlist</h2>
            <ul className='imageList'>
                {data.map((item) => (
                    <li onClick={handleClick} key={item.id}>
                        
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}