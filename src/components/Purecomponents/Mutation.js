import React from 'react'

function Mutation() {

    function Cup({guest}) {
        return <div>I need a {guest} cup of tea.</div>
    }

    let cups = [];

    for(let i=1;i<=12;i++){
        cups.push(<Cup key={i} guest={i} />)
    }

  return (
    <div>{cups}</div>
  )
}

export default Mutation