import React from 'react'
import Card from '../Card/Card'
import './About.css'
import emoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import image from './group.jpg'
import {motion} from 'framer-motion'

const About = () => {
  const transition = {duration : 2, type: 'spring'}
  return (
    <div className="about" id="about">
      <div className="awesome">
        <span>Why</span>
        <span>Dreamcatcher?</span>
        <span>
        Referring to their name as a dream catcher, 
        <br/>
        they intend to eliminate all negative energy 
        <br/>
        and bring good vibes to the world through their songs.
        </span>
        <a href={image} download>
          <button className='button s-button'>Download Track</button>
        </a>
      
        <div className="blur s-blur1" style={{background: 'rgb(238 210 255)', top: '20rem', left: '1rem'}}></div>
      </div>
      <div className="cards">

       <motion.div
         initial={{left: '25rem'}}
         whileInView={{left: '15rem'}}
         transition={transition}>
        <Card 
          emoji = {emoji}
          heading = {'Insomnia'}
          detail = {'Fan club official of Dreamcatcher.'}/>
       </motion.div>

       <motion.div
         initial={{left: '-8rem', top: '15rem'}}
         whileInView={{left: '-3rem'}}
         transition={transition}>
        <Card 
          emoji = {glasses}
          heading = {'Dreamer Company'}
          detail = {'South Korean entertainment company'}/>
       </motion.div>

       <motion.div 
        initial={{left: '22rem', top: '28rem'}}
        whileInView={{top: '23rem'}}
        transition={transition}>
        <Card 
          emoji = {humble}
          heading = {'Debut'}
          detail = {'Korea: January 13 of 2017'}/>
       </motion.div>
       <div className="blur s-blur1" style={{background: 'var(--purple)' , top: '2rem', left: '30rem'} }></div>

      </div>
    </div>
  )
}

export default About