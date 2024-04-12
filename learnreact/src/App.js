import React from 'react'
import Header from './component/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Topsection from './component/Topsection'
import CardData from './component/CardData'

export default function App() {
  return (
    <div className='Appcomponent'>
      <Header />
      <Topsection/>
      <CardData/>
    </div>
  )
}
