import React from 'react'
import {useState} from 'react'
export default function Counter() {

const[count,setCount]=useState(1)

    function increasecount()
    {
        console.log(count)
       setCount(count+1)
    }


  return (
    <>
        <h3>Counter: {count}</h3>
        <button className='btn' onClick={increasecount}>Increase ▲ </button>

    </>
  )
}
