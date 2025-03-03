import { useState } from 'react'
import './App.css'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import{Modals} from'./Components/Modals'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'



function App() {
 
  return (
    <>
    
     <Router>
      <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/Modals" element={<Modals/>} />
        <Route path="/Login" element={<Login/>}/>

      </Routes>
     </Router>
    
    </>
  )
}

export default App
