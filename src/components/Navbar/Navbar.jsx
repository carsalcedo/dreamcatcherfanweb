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
                    <li>Home</li>
                    <li>About</li>
                    <li>Producers</li>
                    <li>Discography</li>
                    <li>Members</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact them
            </button>
        </div>
    </div>
  )
}

export default Navbar