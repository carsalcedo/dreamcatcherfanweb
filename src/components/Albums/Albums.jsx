import React from 'react'
import './Albums.css'

const Albums = () => {
  return (
    <div className="albums">
        <div className="achievement">
            <div className="circle">2+</div>
            <span>Albums</span>
            <span>Korea</span>
        </div>
        <div className="achievement">
            <div className="circle">1+</div>
            <span>Albums</span>
            <span>Nipon</span>
        </div>
        <div className="achievement">
            <div className="circle">6+</div>
            <span>Singles &</span>
            <span>Especials</span>
        </div>
    </div>
  )
}

export default Albums