import React from 'react'
import MaskedTextContainerUtil from './MaskedTextContainerUtil';

function MaskedText ({text, usedLetter}){

    const letters = MaskedTextContainerUtil(text, usedLetter);
    
  return (
    <div>
      {letters.map((letter, index) => {
        return <span key={index} className='inline-block mx-2 my-4 text-4xl border-2 border-gray-400 p-2 rounded-md '>{letter}</span>
      })}
    </div>
  )
}


export default MaskedText
