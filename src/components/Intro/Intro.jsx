import React, { useContext } from 'react'
import './Intro.css'
import groutp from '../../img/group.png'
import loguito from '../../img/loguito.png'
import loguito2 from '../../img/loguito2.png'
import crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'

const Intro = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darckMode = theme.state.darckMode;

  return (
    <div className="intro" id='home'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darckMode ? 'white' : ''}}>Dream of me!</span>
                <span>DreamCatcher</span>
                <span>Formerly known as MINX (Hangul: 밍스), is a South Korean girl group formed by
                     Happy Face Entertainment. It is made up of seven members: JiU, SuA, Siyeon, Handong, Yoohyeon, Dami, and Gahyeon. They officially debuted on January 13, 2017 with the single album Nightmare.</span>
            </div>

            <button className="button i-button">Meet them</button>
            <div className="i-icons">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/hf_dreamcatcher/?hl=es" target='_blanck'><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a> 
            </div>
        </div>
        <div className="i-right">
            <img src={groutp} alt="dreamcatcher" />
            <motion.img
                initial={{left: '-30%'}}
                whileInView={{left: '-5%'}}
                transition={transition}
                src={loguito2} alt="dreamcatcher" />

            <motion.div 
                initial={{top: '-4%', left: '80%'}} 
                whileInView={{left: '68%'}}  
                transition={transition}
                className='floatin-div'> 
                    <FloatingDiv image={loguito} text1='K-Pop' text2='Group'/>
            </motion.div>
            <motion.div
                initial={{top: '21rem', left: '18rem'}} 
                whileInView={{left: '0rem'}}  
                transition={transition}
                className='floatin-div'>
                    <FloatingDiv image={crown} text1='Dreamcartcher' text2='Company'/>
            </motion.div>
            {/*blur divs*/}
            <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
            <div className='blur' style={{background: '#8a2a2b', top: '17rem', width: '21rem', height: '11rem', left: '-5rem'}}></div>
        </div>
    </div>
  )
}

export default Intro