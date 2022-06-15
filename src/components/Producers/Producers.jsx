import React from 'react'
import './Producers.css'
import logo1 from '../../img/logo1.png'
import logo2 from '../../img/logo2.jpg'
import logo3 from '../../img/logo3.png'
import logo4 from '../../img/logo4.jpg'
import logo5 from '../../img/loguito2.png'

const Producers = () => {
  return (
    <div className="producers" id='producer'>
      <div className="awesome">
        <span>Our Company</span>
        <span>Dreamcatcher Company</span>
        <span>
        Is a South Korean entertainment company Kim Young-deuk
        <br/>
        established in 2008 by Ahn Myung-won and
        <br/>
         of producer E-TRIBE.
        </span>
        <a href='https://drama.fandom.com/es/wiki/Categor%C3%ADa:Dreamcatcher_Company' target='_blank'>
          <button className='button s-button'>Read More</button>
        </a>
        <div className="blur s-blur1" style={{background: 'rgb(238 210 255)', top: '20rem', left: '1rem'}}></div>
      </div>
      <div className="w-right">
        <div className="w-maincircle">
            <div className="w-seccircle">
                <img src={logo1} alt="dreamcatcher" />
            </div>
            <div className="w-seccircle">
                <img src={logo2} alt="dreamcatcher" />
            </div>
            <div className="w-seccircle">
                <img src={logo3} alt="dreamcatcher" />
            </div>
            <div className="w-seccircle">
                <img src={logo4} alt="dreamcatcher" />
            </div>
            <div className="w-seccircle">
                <img src={logo5} alt="dreamcatcher" />
            </div>
        </div>
        <div className="w-backCircle purCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Producers