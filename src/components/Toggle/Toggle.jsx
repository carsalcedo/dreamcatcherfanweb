import React, { useContext } from 'react'
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'

const Toggle = () => {

    const theme = useContext(themeContext);
    const darckMode = theme.state.darckMode;

    const handleSwitch = () =>{
        theme.dispatch({type: 'toggle'})
    }

  return (
   <div className="toggle" onClick={handleSwitch}>
        <Moon/>
        <Sun/>
        <div className="t-button"
        style={darckMode? {left: '2px'} : {right: '2px'}}
        >
        </div>
   </div>
  )
}

export default Toggle