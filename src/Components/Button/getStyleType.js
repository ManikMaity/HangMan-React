function getBtnStyling (styleType = "") {
    const primaryBtnStyling = "bg-emerald-700 hover:bg-emerald-900";
    const secondaryBtnStyling = "bg-gray-700 hover:bg-gray-900";
    const warningBtnStyling = "bg-yellow-700 hover:bg-yellow-900"
    if (styleType == "primary"){
        return primaryBtnStyling;
    }
    else if (styleType == "secondary"){
        return secondaryBtnStyling;
    }
    else{
        return warningBtnStyling;
    }
}

export default getBtnStyling;