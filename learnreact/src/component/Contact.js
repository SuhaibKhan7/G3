import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Contact() {
    const nav = useNavigate()
    return (
        <div>Contact
            <button className='bg-danger' onClick={() => nav(-1)}>Back</button>
        </div>
    )
}
