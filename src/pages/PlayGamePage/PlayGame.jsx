import React from 'react'
import { Link } from 'react-router-dom'
import MaskedText from '../../Components/MaskedText/MaskedText'

function PlayGame() {
  return (
    <div>
      <h1>Play Game</h1>
      <MaskedText text={"humble"} usedLetter={["m", "e"]}/>
      <hr/>
      <Link to={"/start"}>Go to Start Game</Link>
    </div>
  )
}

export default PlayGame
