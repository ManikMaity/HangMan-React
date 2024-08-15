import React from 'react'
import MaskedTextContainerUtil from '../MaskedText/MaskedTextContainerUtil';


const alphabets = new Array(26).fill("").map((char, index) => String.fromCharCode(65 + index));

function KeyBoard({text, usedLatters, onLatterClick}) {

    const originalLetters = new Set(text.toUpperCase().split(""));

    const selectedLetters = new Set(usedLatters.map(letter => letter.toUpperCase()));

    function btnStyle (letter){
        if (selectedLetters.has(letter)){
            return `${originalLetters.has(letter) ? "bg-green-800 hover:bg-green-900" : "bg-red-800 hover:bg-red-900"} `
        }
        else{

          return  `bg-slate-800 hover:bg-slate-900`
        }
    
    }

    function handleClick(e){
        const char = e.target.value;
        console.log(char)
        
        onLatterClick?.(char);
    }



    const buttons = alphabets.map((alpa, index) => {
        return (
            <button
            disabled = {selectedLetters.has(alpa)}
            value={alpa}
            onClick = {handleClick}
             className={`m-1 px-6 py-2  text-white rounded-md ${btnStyle(alpa)}`} key={`button-${index}`}>
                {alpa}
            </button>
        )
    })

  return (
    <div>
      {buttons}
    </div>
  )
}

export default KeyBoard
