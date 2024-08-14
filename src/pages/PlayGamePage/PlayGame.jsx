import React from 'react'
import { Link } from 'react-router-dom'

function PlayGame() {
  return (
    <div>
      <h1>Play Game</h1>
      <Link to={"/start"}>Go to Start Game</Link>
    </div>
  )
}

export default PlayGame
