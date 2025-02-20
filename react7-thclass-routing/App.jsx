import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import { Home } from "./components/Home";
import {Form } from "./components/Form";
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>}   />
        <Route path="/form" element= {<Form/>}   />
      </Routes>
    </Router>
    </>
  )
}

export default App
