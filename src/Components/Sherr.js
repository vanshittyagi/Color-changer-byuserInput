import React, { useState } from 'react'
import './Sherr.css'
const Sherr = () => {
    const [backgroundColor, setBackgroundColor] = useState('');
    const bgchange = (color) => {
        setBackgroundColor(color);
    }
  return (
    <div className='sherr' style={{backgroundColor}}>
        <div className="head">
            <h1>Choose The color which you want to set in the Background</h1>
        </div>
        <div className="colors">
            <div onClick={()=> bgchange('red')} className="color one"></div>
            <div onClick={()=> bgchange('green')} className="color two"></div>
            <div onClick={()=> bgchange('orange')} className="color three"></div>
            <div onClick={()=> bgchange('skyblue')} className="color four"></div>
            <div onClick={()=> bgchange('black')} className="color five"></div>
            <div onClick={()=> bgchange('white')} className="color six"></div>
        </div>
    </div>
  )
}

export default Sherr
