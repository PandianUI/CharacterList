import React, { useState } from "react";

function Filterdata(){
    const fruits = ["Apple", "Orange", "Banana", "Grapes", "Watermelon", "Pineapple", "Pomegranite"]

    const[filterList, SetFilterList] = useState(fruits)

    const filtervalue = (event) => {
        if(event.target.value === "") {
            SetFilterList(fruits)
        }

        const newfilter = fruits.filter(item => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
        SetFilterList(newfilter)

    }


    return(
        <div>
            <input type="text" onChange={filtervalue}/>
            {filterList.map(item => {
                return (
                    <div>{item}</div>
                )
            })}
        </div>
    )
}


export default Filterdata