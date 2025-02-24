import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-light;">
          <ul className="navbar">
            <li className="nav-item">
             <Link to="/modals">Models</Link>
            </li>
            {/* dropdown 1 */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="caret">Used cars</span>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
              </ul>
            </li>
            {/* dropdown 2 */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="caret">Customer Area</span>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Audi Owners</a></li>
                <li><a className="dropdown-item" href="#">Audi Service</a></li>
                <li><a className="dropdown-item" href="#">myAudi Connect</a></li>
                <li><a className="dropdown-item" href="#">Audi Club Rewards</a></li>
                <li><a className="dropdown-item" href="#">Sustainablity</a></li>
                <li><a className="dropdown-item" href="#">Audi Assist</a></li>
              </ul>
            </li>
            {/* dropdown 4 */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="caret">Quick Links</span>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Audi Club India</a></li>
                <li><a className="dropdown-item" href="#">Audi price reckoner</a></li>
                <li><a className="dropdown-item" href="#">Request a test drive</a></li>
                <li><a className="dropdown-item" href="#">Contact & Service</a></li>
                <li><a className="dropdown-item" href="#">Finance calculator</a></li>
                <li>
                  <a className="dropdown-item" href="#">Service Cost Calculator & Service Plans & Extended Warranty</a>
                </li>
                <li><a className="dropdown-item" href="#">Audi Shop</a>
                </li>
              </ul>
            </li>
              {/* dropdown3 */}
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="caret">Innovations</span>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Features</a></li>
                <li><a className="dropdown-item" href="#">our Updates</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#"> News</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> <a href="">Menu</a>
          </button>

        </div>
      </nav>
    
    </>
  )
}
