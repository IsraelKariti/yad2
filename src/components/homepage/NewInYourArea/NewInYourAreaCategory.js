import React from "react";

export const NewInYourAreaCategory = ({title, index, highlighted='', chosenCategory, setChosenCategory})=>{
    const onCategoryClicked = ()=>{        
        setChosenCategory(index);
    }
    return <div className={`new-in-your-area-category ${index===chosenCategory&&'highlighted'}`} onClick={onCategoryClicked}>{title}</div>
}