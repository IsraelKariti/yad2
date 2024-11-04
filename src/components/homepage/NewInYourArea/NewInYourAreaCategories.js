import React from "react";
import { NewInYourAreaCategory } from "./NewInYourAreaCategory";

export const NewInYourAreaCategories = ({chosenCategory, setChosenCategory})=>{
    return <div className="new-in-your-area-categories">
        <NewInYourAreaCategory title='נדלן' index="1" chosenCategory={chosenCategory} setChosenCategory={setChosenCategory}/>
        <NewInYourAreaCategory title='רכב' index="2" chosenCategory={chosenCategory} setChosenCategory={setChosenCategory}/>
        <NewInYourAreaCategory title='יד שניה' index="3" chosenCategory={chosenCategory} setChosenCategory={setChosenCategory}/>
    </div>
}