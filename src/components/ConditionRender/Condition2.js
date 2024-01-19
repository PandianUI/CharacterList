import React from "react";

function Condition2() {

    const Names = ({name, packed}) => {
        if(packed) {
            return (
               <p>{name}</p>
            )
        }
        else {
            return (
                <p>{name} !</p>
            )
        }
  
    }

    return (
        <div>
            <Names name="pandi" packed={true} />
            <Names name="Deekshi" packed={false} />
        </div>
    )
}

export default Condition2   