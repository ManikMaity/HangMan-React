import React from 'react'
import { Link } from 'react-router-dom'

function StartGame() {
  return (
    <div>
      <h1>Start Game</h1>
      <Link to={"/play"}>Go to Play Game</Link>
    </div>
  )
}

export default StartGame
