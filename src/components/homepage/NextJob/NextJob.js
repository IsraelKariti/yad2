import React from "react";

export const NextJob = ({title, description, imgSrc})=>{
    return <div className="nextJob">
        <img alt="" src={imgSrc}/>
        <p className="nextJobTitle">{title}</p>
        <p className="nextJobDescription">{description}</p>
    </div>
}