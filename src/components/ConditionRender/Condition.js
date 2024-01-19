import React from "react";

function Condition() {

    const Item = ({name, isPacked}) => {
        return (
            <li> {name} {isPacked && "!"}</li>
        )
    }
    return(
        <div>
            <ul>
                <Item name="Pandian" isPacked={true} />
                <Item name="Santhiya" isPacked={false} />
                <Item name="Deekshi" isPacked={true} />
            </ul>
        </div>
    )
}

export default Condition