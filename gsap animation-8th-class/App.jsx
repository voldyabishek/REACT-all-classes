import { useState } from 'react'

import './App.css'

import{Anima1spring} from './Components/Anima1spring'
import{Anima2gsap} from './Components/Anima2gsap'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Anima1spring/> */}
 <Anima2gsap/>


    </>
  )
}

export default App
