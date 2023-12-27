import React, { useState } from 'react'
import './Counter.css'

export const Counter = () => {

    const [number,setNumber] = useState(0);

    const incrementCounter = () =>{
        setNumber(number+1);
    }

    const decrementCounter = () =>{
        setNumber(number-1);
    }

  return (
    <div>
        <button className='button-inc' onClick={decrementCounter}>-</button>
        <input type='text' className='text-area' value={number} disabled></input>
        <button className='button-inc' onClick={incrementCounter} >+</button>

    </div>
  )
}
