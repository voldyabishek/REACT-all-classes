import React from 'react'
import { Link } from "react-router-dom";
export const Modals = () => {
  return (
    <>
   
     <div className='car2'>
     <h1>New launch</h1>
      <img src='car-2.png'></img>
      <h2>Model</h2>
      <p>Model name</p>
      <h2>Price</h2>
      <p>Price</p>

     </div>
    <Link to="/">go to nav</Link>
    </>
    
  )
}

