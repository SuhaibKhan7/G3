import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const[counter,setCounter]=useState(0)
  useEffect(()=>{
    console.log('mount')
},[counter]) 
    return (
    <div>
<h1>Counter:{counter}</h1>
<button className='btn btn-danger' onClick={()=>setCounter(counter+1)}>Inc</button>

    </div>
  )
}
