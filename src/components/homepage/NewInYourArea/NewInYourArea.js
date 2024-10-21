import React from "react";
import { NewInYourAreaHeader } from "./NewInYourAreaHeader";
import { NewInYourAreaCategories } from "./NewInYourAreaCategories";
import { NewInYourAreaSuggestions } from "./NewInYourAreaSuggestions/NewInYourAreaSuggestions";
import '../../../styles/NewInYourArea.scss';

export const NewInYourArea = ()=>{
    return <div className="new-in-your-area">
        <NewInYourAreaHeader />
        <NewInYourAreaCategories/>
        <NewInYourAreaSuggestions/>
    </div>
}