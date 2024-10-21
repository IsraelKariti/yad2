import React from "react";
import { NewInYourAreaCategory } from "./NewInYourAreaCategory";

export const NewInYourAreaCategories = ()=>{
    return <div className="new-in-your-area-categories">
        <NewInYourAreaCategory title='נדלן' highlighted="highlighted"/>
        <NewInYourAreaCategory title='רכב'/>
        <NewInYourAreaCategory title='יד שניה'/>
    </div>
}