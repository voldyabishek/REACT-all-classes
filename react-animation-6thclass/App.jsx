import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Animation1 } from './Components/Animation1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Animation1/>
    </>
  )
}

export default App
