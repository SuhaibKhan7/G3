import React, { useState } from 'react'

export default function Singup() {
    const [formdata, setFormdata] = useState({
        username: '',


    })

    async function getinfo() {
        const response = await fetch("http://localhost:5000/data")
        console.log(response);
        const data = await response.text();
        console.log(data);
    }
    async function senddata(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/data", {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        console.log(response);
        const data = await response.json();
        console.log(data);

    }


    function handleinput(e) {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }



    async function handlelogin(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        console.log(response);
        const data = await response.json();
        console.log(data);

    }







    return (
        <div>
            <form action="" onSubmit={senddata}>
                <input type="text" name='username' onChange={handleinput} />


                <button type='submit'>Singup</button>
            </form>


            <form action="" onSubmit={handlelogin}>
                <input type="text" name='username' onChange={handleinput} />
                <button type='submit'>Login</button>
            </form>


            <button onClick={getinfo}>getinfo</button>
        </div>
    )
}
