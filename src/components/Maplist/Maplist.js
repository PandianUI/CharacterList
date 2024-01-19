import React from "react";

function Maplist() {

    const user = [
        {name:'pandi', id:'1', lead:true},
        {name:'santhiya', id:'2', lead:false},
        {name:'Deekshi', id:'3', lead:false}
    ];

    const listing = user.map(item => <li style={{color: item.lead ? 'red': 'blue'}}>{item.name}</li>)

    const people = [
        {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      },
       {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, 
      {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      },
      {
        id: 3,
        name: 'Mohammad Abdus Salamssssss',
        profession: 'chemist',
      }
    ];

    const chemists = people.filter(person => person.profession === 'chemist')

    const listitems = chemists.map(person => <li>{person.name}</li>)

    const physicist = people.filter(person => person.profession === 'physicist')

    const listitems2 = physicist.map(person => <li>{person.name}</li>)      

    return(
        <>
            <h1>Map List</h1>
            <ul style={{textAlign:'left', fontSize:'30px',listStyle:'none' }}>{listing}</ul>

            <ul>
                {listitems}
            </ul>

            <ul>
                {listitems2}
            </ul>
        </>
    )

}
export default Maplist