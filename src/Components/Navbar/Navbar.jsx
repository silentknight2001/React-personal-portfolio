import React from 'react'
import './Navbar.css'
import Toggle from "../Toggle/Toggle"
import { Link } from 'react-scroll/modules'

const Navbar = () => {
  return (
      <div className="n-wrapper">
          <div className="n-left">
              <div className="n-name">
                  Nayan 
              </div>
              <Toggle/>
          </div>
          <div className="n-right">
              <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                  <Link spy={true} to="Nevbar" smooth={true} activeClass="activeClass">
                  <li>Home</li>
                  </Link>
                  <Link spy={true} to="Services" smooth={true}> 
                  <li>Services</li>
                  </Link>
                  <Link spy={true} to='Experience' smooth={true}> 
                  <li>Experience</li>
                  </Link>
                  <Link spy={true} to="Protfolio" smooth={true}> 
                  <li>Protfolio</li>
                  </Link>
                  <Link spy={true} to="Testimonials" smooth={true}> 
                  <li>Testimonials</li>
                  </Link>
                </ul>
              </div>
          <button className="button n-button">
              Contact me
          </button>
          </div>
      </div>
    
  )
}

export default Navbar