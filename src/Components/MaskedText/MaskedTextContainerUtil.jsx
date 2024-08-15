import React from 'react'

function MaskedTextContainerUtil(word, usedLetters) {
    usedLetters = usedLetters.map(letter => letter.toUpperCase());
    const guessedLatters = new Set(usedLetters);
    const chars =  word.toUpperCase().split("").map(char => {
        if (guessedLatters.has(char)){
            return char;
        }
        else{
            return "_";
        }
    });

    return chars;
}

export default MaskedTextContainerUtil;
