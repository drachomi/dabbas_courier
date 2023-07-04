import React from 'react'
// import { Link } from 'react-router-dom'

// Styling
import './../../assets/bootstrap-5/css/bootstrap.css'
import './../../assets/fontawesome-5/css/all.css'
import './navbar.css'

// Images
import Main from './../../assets/img/Dabbas main Logo-01.png'

function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg fixed-top navbar-light'>
        <div className='container'>
          <a className="navbar-brand logo-image" href="index.html"><img src={Main} alt="alternative" /></a> 
          <a href="https://forms.gle/ZipXV4p1HfoNdYfMA" className='btn btn-outline-reg' id='butn'>
            Become a Courier
          </a>
          <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className='navbar-nav ml-auto'>
              <li className="nav-item">
                <a className="nav-link main py-3 px-4" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link main py-3 px-4" href="#choose">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link main py-3 px-4" href="#getStarted">Get Started</a>
              </li>
              <li className="nav-item">
                <a href="https://forms.gle/ZipXV4p1HfoNdYfMA" className='btn btn-outline-reg'>
                  Become a Courier
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar