import React, { useState } from 'react'
import './Capitalise.css'
export const Capitalise = () => {
    const [sentence, setSentence] = useState('');

    const changeToUpper = () =>{
       const newsentence =  sentence.toUpperCase();
       setSentence(newsentence);
    }

  return (
    <>
        <textarea type ="text" className='text-area1' onChange={e=> setSentence(e.target.value)} value={sentence} ></textarea>
        <button type='submit' onClick={changeToUpper} className='btn'>To uppercase</button>
        <button type='submit' className='btn'>To lowercase</button>

    </>
  )
}
