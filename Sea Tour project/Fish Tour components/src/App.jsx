import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Booking from './Components/Booking'

function App() {
  

  return (
    <>
    

     <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Booking" element= {<Booking/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App