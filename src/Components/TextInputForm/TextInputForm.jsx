
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import { useState } from 'react';

function TextInputForm({onSubmit}) {


    let [value, setValue] = useState("");


    function handleFormSubmit (e){
        e.preventDefault();
        console.log(value);
        onSubmit?.(value);
    }

    function handleTextInputChange (e){
        setValue(e.target.value);
    }


  return (
    <form className='flex mx-4 gap-3' onSubmit={handleFormSubmit}>




        <div className='flex-1'>
            <TextInput 
            label={"Enter a word or phrase"}
            type={"password"}
            value={value}
            onChange={handleTextInputChange}
            />
        </div>



        <div className='flex'>
            <Button text={"OK"} btnType={"submit"} styleType={"primary"}/>
        </div>


    </form>
  )
}

export default TextInputForm
