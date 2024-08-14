import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900 mb-3">Welcome to Hangman!</h1>
     <TextInputFormContainer onSubmit={(value)=>{console.log(`Value submited is ${value}`)}}/>
    </div>
  );
}

export default App;
