import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

function ResultScreen({text = "You died", onResultBtnClick}) {



  return (
    <div className="overlay absolute top-0 left-0 w-screen h-screen grid place-content-center z-10 bg-[#000000b8]">
    <div className='h-64 w-96 bg-[#000000c5] p-6 rounded-md flex flex-col gap-3 justify-evenly text-white' >
        <h1 className='text-3xl font-bold text-center'>{text}</h1>
        <Button styleType={"primary"} text={"Go to Start"} onClickFn={onResultBtnClick}/>
    </div>
    </div>
  )
}

export default ResultScreen
