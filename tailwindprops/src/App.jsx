import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
 

  return (
    <>
       <h1 className='bg-green-600  text-black p-4 rounded-xl mb-5' >Tailwind css</h1>
    <Card username="Manisha"/>      
    <Card username="Devanshi"/>      

    </>
  )
}

export default App
