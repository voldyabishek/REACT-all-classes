import React from 'react'

const Header = () => {
  return (
    
    <>
    {/* navbar */}

    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light" id='navbar'>
      <div className="container">
        {/* logo image */}
        <a className="navbar-brand" href="#">
          <img src="logo-1.png" alt="Boat Logo" className="logo" />
        </a>
        {/* logo-text */}
        <div id='logo-text'>     
        <h3>Bengal <span id='waters'>Waters</span></h3>
        </div>
        {/* toggle-button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
         

        
  
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#tours">Tours</a></li>
            <li className="nav-item"><a className="nav-link" href="#resort">Resort</a></li>
            <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="#booking">Booking</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <a href="#booking" className="btn btn-primary book-now">Book Now</a>
        </div>
      </div>
    </nav>
   
    
    </>
  )
}

export default Header