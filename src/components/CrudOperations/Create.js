import React from "react";
import { Button, Checkbox } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";


function Create() {
    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [checkbox, SetCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8`, {
            firstName,
            lastName,
            checkbox
        })
    }

    return ( 
        <form className="newform">
            <div>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e) => SetFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => SetLastName(e.target.value)}/>
            </div>
            <div>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => SetCheckbox(!checkbox)} /> 
            </div>
            <Button type='submit' onClick={postData}>Submit</Button>
        </form>
    )
}

export default Create
