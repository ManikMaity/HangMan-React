import getBtnStyling from "./getStyleType";

function Button({text, btnType, styleType, onClickFn}) {

  return (
    <button 
    onClick={onClickFn}
    type = {btnType}
    className={`px-4 py-2 ${getBtnStyling(styleType)} text-white rounded-md  transition-all`}
    >
        {text}
    </button>
  );
}





export default Button
