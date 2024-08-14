// Presentation Layer
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'

function TextInputForm({handleFormSubmit, handleTextInputChange, visiable, value, setVisiable}) {





  return (
    <form className='flex items-end mx-4 gap-3' onSubmit={handleFormSubmit}>




        <div className='flex-1'>
            <TextInput 
            label={"Enter a word or phrase"}
            type={visiable}
            value={value}
            onChange={handleTextInputChange}
            />
        </div>

        <div>
            <Button text={visiable == "password" ? "🫣" : "🤫"} btnType="button"  onClickFn={() => {setVisiable(visiable == "password" ? "text" : "password")}}  styleType ={"secondary"}/>
        </div>



        <div className='flex'>
            <Button text={"OK"} btnType={"submit"}styleType={"primary"}/>
        </div>


    </form>
  )
}

export default TextInputForm
