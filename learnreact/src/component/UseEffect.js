import React, { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch';

export default function UseEffect() {

  const [counter, setCounter] = useState(0);
  const [url, setUrl] = useState('http://localhost:3004/products')
  let card=useFetch(url);
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button className='btn btn-danger' onClick={() => setCounter(counter + 1)}>Inc</button>
      <br />
      <button onClick={() => setUrl('http://localhost:3004/products?instock=true')} >Instock</button>
      <button className='bg-danger'>Outofstock</button>
      <div className='bg-primary text-white m-4 p-3'>
        {
         card && card.map((c) => {
            return <li key={c.id}> {c.id}-------{c.pname}-----{c.Price}----<span className={JSON.parse(c.instock) ? "bg-warning " : "bg-danger w-25 "}>{JSON.parse(c.instock) ? 'Instock' : 'outofstock'}</span></li>
          })
        }

      </div>
    </div>
  )
}
// useEffect(() => {

//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       setCard(data)
//     })

// }, [url])


// useEffect(() => {
//   const getdata = async () => {
//     let response = await fetch(url)
//     let result = await response.json();
//     {
//       setCard(result)
//     }
//   }
//   getdata();
// }, [url])