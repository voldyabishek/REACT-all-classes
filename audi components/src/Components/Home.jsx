import React from 'react'
import { Header } from './Header'
import {Link} from 'react-router-dom'
export const Home = () => {
  return (
    <>
    <Header/>
    
    
    
    {/* <div className='login'>
       <button> <IoPersonAdd /> Sign Up</button>
       </div> */}
      {/* car 1 detail */}
        <section id="section1">
        <div className='car1'>  
         <img src="audi-1.avif"></img>
       </div>
       <div className='car1text'>
        <h1 >Power that packs<br></br>a punch and a smile.<br></br>#This is Audi </h1>
       
        <p>Experience the new  audi RS Q8 performance<br></br>with 640hp</p>
        <button className='knowmore'>Know More</button>
       </div>
      
       </section>

      <section id='section3'>
        <div className='our-models'>
        <h2>Our New Modals</h2>
        <p><a href=''>All models</a></p>
        </div>
      </section>
   

   {/* coursel section */}
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="img-3.webp" className="d-block w-100" alt="Slide 1"/>
                <div className="carousel-caption">
                    <h5>Modern Web Design</h5>
                    <p>Create stunning websites with ease.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="img-3.webp" className="d-block w-100" alt="Slide 2"/>
                <div className="carousel-caption">
                    <h5>Responsive & Fast</h5>
                    <p>Optimized for all devices.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="img-3.webp" className="d-block w-100" alt="Slide 3"/>
                <div className="carousel-caption">
                    <h5>Engaging UI/UX</h5>
                    <p>Enhance user experience with clean design.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>
    </div>
    </>
  )
}
