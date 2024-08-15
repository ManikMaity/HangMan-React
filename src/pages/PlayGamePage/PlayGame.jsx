import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MaskedText from '../../Components/MaskedText/MaskedText'
import KeyBoard from '../../Components/KeyBoard/KeyBoard'
import HangMan from '../../Components/HangMan/HangMan';
import ResultScreen from '../../Components/ResultScreen/ResultScreen';
import MaskedTextContainerUtil from '../../Components/MaskedText/MaskedTextContainerUtil';


function PlayGame() {

  const [usedLatters, setUsedLatters] = useState([]);
  let [stepCount, setStepCount] = useState(0);
  let [gameOver, setGameOver] = useState(false);
  let [resultText, setResultText] = useState("");

  const location = useLocation();
  const navigator = useNavigate()
  const wordSubmited = location.state?.wordSubmited;


  function onResultBtnClick (){
      navigator("/start");
      setResultText("");
      setGameOver(false);
  }



  const handleLatterClick = (letter) => {
    setUsedLatters([...usedLatters, letter]);
    const gapChar = MaskedTextContainerUtil(wordSubmited, usedLatters).filter(letter => letter == "_");
    if (gapChar.length == 0){
      setGameOver(true);
      setResultText("You won!")
    }
    if (stepCount >= 7){
      setResultText("You died");
      setGameOver(true);
    };
    if (wordSubmited.toUpperCase().includes(letter)){
      console.log("Correct");
    }
    else{
      setStepCount(++stepCount);
    }
  }

  return (
    <div className='flex flex-col items-center'>
      
      {gameOver && <ResultScreen text={resultText} onResultBtnClick={onResultBtnClick}/>}

      <h1 className='my-3 text-slate-800 font-bold text-2xl'>Play Game</h1>
      <MaskedText text={wordSubmited} usedLetter={usedLatters}/>
      <hr/>
      <div className='flex justify-between items-center'>
        <div className='basis-2/4 px-3'>
          <KeyBoard text={wordSubmited} usedLatters={usedLatters} onLatterClick={handleLatterClick}/>
        </div>
      <div className='basis-2/4 grid place-content-center'>
        <HangMan step={stepCount}/>
      </div>


      </div>
     
      <hr/>
        <Link className='text-white bg-indigo-900 mt-5 inline-block p-3 rounded-md' to={"/start"}>Go to Start Game</Link>
    </div>
  )
}

export default PlayGame
