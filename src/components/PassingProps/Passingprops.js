import React from "react";


function Passingprops({newsrc, wsize, hsize}) {
    return (
        <img src={newsrc} width={wsize} height={hsize} />
    )
}

export default Passingprops