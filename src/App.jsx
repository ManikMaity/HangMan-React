import { Route, Routes } from "react-router-dom";
import PlayGame from "./pages/PlayGamePage/PlayGame";
import StartGame from "./pages/StartGamePage/StartGame";

function App() {
  return (
    // <div>
    //   <h1 className="text-4xl font-bold text-slate-900 mb-3">Welcome to Hangman!</h1>
    //  <TextInputFormContainer onSubmit={(value)=>{console.log(`Value submited is ${value}`)}}/>
    // </div>
    <Routes>
      <Route path="/play" element={<PlayGame/>}/>
      <Route path="/start" element={<StartGame/>} />
    </Routes>
  );
}

export default App;
