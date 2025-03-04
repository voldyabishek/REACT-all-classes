import React from 'react'

const Header = () => {
  return (
    <>
       {/* <!-- Navbar --> */}
       <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light shadow-custom">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">FisherMan's Guide</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/weather">Weather</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/map">Map</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/profile">Profile</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search Spots" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    
    </>
  )
}

export default Header