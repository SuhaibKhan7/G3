import React, { useEffect, useState } from 'react'

export default function UseEffect() {

  const [counter, setCounter] = useState(0);
  const [card, setCard] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/products')
      .then(res => res.json())
      .then(data => {
        setCard(data)
      })

  }, [])

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button className='btn btn-danger' onClick={() => setCounter(counter + 1)}>Inc</button>

    <div className='bg-primary text-white'>
  {
    card.map((c)=>{
      return <li key={c.id}> {c.id}-------{c.pname}-----{c.Price}----{c.instock}</li>
    })
  }

    </div>  
    </div>
  )
}
