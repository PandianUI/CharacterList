import React from "react";
import Image from "./Image";
import { createRoot } from 'react-dom/client';

function Initialrender() {

    const root = createRoot(document.getElementById('root'))
    root.render(<Image />)

    return(
        <></>
    )
}

export default Initialrender