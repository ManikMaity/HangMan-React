import React from 'react'
import "./StartGameStyle.css"
import TextInputFormContainer from '../../Components/TextInputForm/TextInputFormContainer'
import { useNavigate } from 'react-router-dom'




function StartGame() {


  const navigator = useNavigate();

  function handleSubmit (){
    navigator("/play")
  }



  return (
    <div className='start-game'>
      <h1 style={{color:"red"}}>Start Game</h1>
      <TextInputFormContainer onSubmit={handleSubmit}/>
    </div>
  )
}

export default StartGame
