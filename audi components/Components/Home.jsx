import React from 'react'
import { Header } from './Header'

export const Home = () => {
  return (
    <>
     
    <Header/>
    
    
    {/* <div className='login'>
       <button> <IoPersonAdd /> Sign Up</button>
       </div> */}
      {/* car 1 deatil */}
        <section id="section1">
        <div className='car1'>   
         <img src="audi-1.avif"></img>
       </div>
       <div className='car1text'>
        <h1 >Power that packs<br></br>a punch and a smile.<br></br>#This is Audi </h1>
       
        <p>Expirirnce the new  audi RS Q8 performance<br></br>with 640hp</p>
        <button className='knowmore'>Know More</button>
       </div>
      
       </section>
      
    </>
  )
}
