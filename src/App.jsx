import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PlayGame from "./pages/PlayGamePage/PlayGame";
import StartGame from "./pages/StartGamePage/StartGame";
import Button from "./Components/Button/Button";

function App() {

  const navigator = useNavigate();


  return (
    <>
    <div className="w-full text-3xl px-3 h-[40px] grid place-content-center bg-slate-800 text-center text-white font-bold">
      <h1>Hang Man Game</h1>
    </div>

    <Routes>
      <Route path="/play" element={<PlayGame/>}/>
      <Route path="/start" element={<StartGame/>} />
      <Route path="*" element={<Navigate to="/start" />} />
    </Routes>
    </>
    // <div>
    //   <h1 className="text-4xl font-bold text-slate-900 mb-3">Welcome to Hangman!</h1>
    //  <TextInputFormContainer onSubmit={(value)=>{console.log(`Value submited is ${value}`)}}/>
    // </div>
    
  );
}

export default App;
