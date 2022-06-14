import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href="https://drama.fandom.com/es/wiki/Dreamcatcher" target='_blanck'>
            <button className='c-button'>SEE MORE</button>
        </a>
    </div>
  )
}

export default Card