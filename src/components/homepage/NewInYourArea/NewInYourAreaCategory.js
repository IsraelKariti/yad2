import React from "react";

export const NewInYourAreaCategory = ({title, highlighted=''})=>{
    return <div className={`new-in-your-area-category ${highlighted}`}>{title}</div>
}