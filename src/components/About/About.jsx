import React from 'react'
import Card from '../Card/Card'
import './About.css'
import emoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import image from './group.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="awesome">
        <span>Why</span>
        <span>Dreamcatcher?</span>
        <span>
        Referring to their name as a dream catcher, 
        they intend to eliminate all negative energy and bring good vibes to the world through their songs.
        </span>
        <a href={image} download>
          <button className='button s-button'>Download Track</button>
        </a>
      
        <div className="blur s-blur1" style={{background: 'rgb(238 210 255)', top: '20rem', left: '1rem'}}></div>
      </div>
      <div className="cards">

       <div style={{left: '-17rem'}}>
        <Card 
          emoji = {emoji}
          heading = {'Insomnia'}
          detail = {'Fan club official of Dreamcatcher.'}/>
       </div>

       <div style={{left: '-40rem', top: '15rem'}}>
        <Card 
          emoji = {glasses}
          heading = {'Dreamer Company'}
          detail = {'South Korean entertainment company'}/>
       </div>

       <div style={{left: '-22rem', top: '23rem'}}>
        <Card 
          emoji = {humble}
          heading = {'Debut'}
          detail = {'Corea: 13 de Enero del 2017'}/>
       </div>
       <div className="blur s-blur1" style={{background: 'var(--purple)' , top: '2rem', left: '-5rem'} }></div>

      </div>
    </div>
  )
}

export default About