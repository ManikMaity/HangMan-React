import React from 'react'
import "./StartGameStyle.css"
import TextInputFormContainer from '../../Components/TextInputForm/TextInputFormContainer'
import { useNavigate } from 'react-router-dom'




function StartGame() {


  const navigator = useNavigate();

  function handleSubmit (text){
    navigator("/play", {state : {wordSubmited : text}})
  }



  return (
    <div className='start-game'>
      <h1 className='my-3 text-slate-800 font-bold text-2xl text-center'>Start Game</h1>
      <TextInputFormContainer onSubmit={handleSubmit}/>
    </div>
  )
}

export default StartGame
