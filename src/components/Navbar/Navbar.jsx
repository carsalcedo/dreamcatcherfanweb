import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">DreamCatcher</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li><a href='#home' style={{textDecoration: 'none'}}>Home</a></li>
                    <li><a href='#about' style={{textDecoration: 'none'}}>About</a></li>
                    <li><a href='#producer' style={{textDecoration: 'none'}}>Producers</a></li>
                    <li><a href='#discography' style={{textDecoration: 'none'}}>Discography</a></li>
                    <li><a href='#members' style={{textDecoration: 'none'}}>Members</a></li>
                </ul>
            </div>
            <a href="#contact">
            <button className="button n-button">
                Contact them
            </button>
            </a>
        </div>
    </div>
  )
}

export default Navbar