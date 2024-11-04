import React, {useState} from "react";
import { NewInYourAreaHeader } from "./NewInYourAreaHeader";
import { NewInYourAreaCategories } from "./NewInYourAreaCategories";
import { NewInYourAreaSuggestions } from "./NewInYourAreaSuggestions/NewInYourAreaSuggestions";
import '../../../styles/NewInYourArea.scss';

export const NewInYourArea = ()=>{
    const [chosenCategory, setChosenCategory] = useState(1);
    console.log('category: '+chosenCategory);
    
    return <div className="new-in-your-area">
        <NewInYourAreaHeader />
        <NewInYourAreaCategories  chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} />
        <NewInYourAreaSuggestions chosenCategory={chosenCategory}/>
    </div>
}