// Container component for text input
import { useState } from 'react'
import TextInputForm from './TextInputForm';

function TextInputFormContainer({onSubmit}) {

    let [value, setValue] = useState("");
    let [visiable, setVisiable] = useState("password");



    function handleFormSubmit (e){
        e.preventDefault();
        console.log(value);
        onSubmit?.(value);
    }

    function handleTextInputChange (e){
        setValue(e.target.value);
    }


  return (
    <TextInputForm handleFormSubmit={handleFormSubmit} handleTextInputChange={handleTextInputChange} visiable={visiable} value={value} setVisiable={setVisiable}/>
  )
}

export default TextInputFormContainer
