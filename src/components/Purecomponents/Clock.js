import React, { useEffect, useState } from "react";

function Clock(){
   const[name, SetName] = useState('')
  const[password, SetPassword] = useState('');

const entername = (event) => {
  const inputname = event.target.value
  SetName(inputname)
}
const enterpassword = (event) => {
  const inputpassword = event.target.value
  SetPassword(inputpassword)
}
const displayvalue = (e) => {
  e.preventDefault()
  console.log(name, password)
}

  return (
    <div className='App'>
      <form>
        <input type="text" placeholder="entername" onChange={entername}/>
        <input type="password" placeholder="enter password" onChange={enterpassword} />
        <button onClick={displayvalue} >Submit</button>
      </form>
    </div>
  );
}

export default Clock