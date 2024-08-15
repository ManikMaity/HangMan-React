import React from 'react'
import MaskedTextContainerUtil from './MaskedTextContainerUtil';

function MaskedText ({text, usedLetter}){

    const letters = MaskedTextContainerUtil(text, usedLetter);
  return (
    <div>
      {letters.map((letter, index) => {
        return <span key={index} className='inline-block mx-1'>{letter}</span>
      })}
    </div>
  )
}


export default MaskedText
