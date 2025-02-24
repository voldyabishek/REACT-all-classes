import React from 'react'
import { Navbar } from './Navbar'
import { IoPersonAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
  
    <>
    
  <Navbar/>
  {/* login icon */}
  <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Welcome to our website</h1>
          <p className="text-center">This is a sample website</p>
          <Link to ="Login"> <button className="btn btn-primary"  id="login" type="button">
    Sign UP<IoPersonAdd/></button></Link>
        </div>
      </div>
    </div>
    </>
  )
}
