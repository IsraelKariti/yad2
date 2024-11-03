import React from "react";

export const SearchToNotMiss = ({title, imgSrc})=>{
    return <div className="searchToNotMiss">
        <img alt="car" src={imgSrc}/>
        <p>{title}</p>
    </div>
}