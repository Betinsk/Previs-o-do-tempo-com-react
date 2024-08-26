import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  async function searchCity() {
   
    const city = inputRef.current.value
    const key = '9328979d69f092b2fe0e7194e510f671'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    const data = await axios.get(url)
    console.log(data)

  }

  return (
    <>
      <div>
        <h1>Dev club previsão do tempo</h1>
        <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
        <button onClick={searchCity}>Buscar</button>
      </div>
     
    </>
  )
}

export default App
