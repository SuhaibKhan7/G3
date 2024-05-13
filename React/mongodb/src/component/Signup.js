import React, { useState } from 'react'

export default function Signup() {
    const [formdata, setFormData] = useState({
        username: '',
        password: ''
    })
   function handlesubmit()
   {
    
   } 
    function inputdata(e) {
        e.preventDefault();
        setFormData({ ...formdata, [e.target.name]: e.target.value });
        console.log(formdata);
    }

    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" name="username" id="username" onChange={inputdata} />
                <input type="password" name="password"  onChange={inputdata} />
                <button type='submit'>Save</button>
            </form>

        </div>
    )
}
