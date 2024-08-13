import Button from "./Components/Button/Button";
import TextInput from "./Components/TextInput/TextInput";
import TextInputForm from "./Components/TextInputForm/TextInputForm";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900 mb-3">Welcome to Hangman!</h1>
     <TextInputForm onSubmit={(value)=>{console.log(`Value submited is ${value}`)}}/>
    </div>
  );
}

export default App;
