import { Glasses } from './Glasses'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>TRY GLASSES APP ONLINE</h1>
        <Glasses/>
      </div>
    </>
  )
}

export default App
