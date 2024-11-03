import React from "react";

export const PopularService = ({title, description, imgSrc})=>{
    return <div className="popularService">
        <img className="popularServiceIcon" alt="nadlan" src={imgSrc}/>
        <div className="popularServiceText">
            <p className="popularServiceTextTitle">{title}</p>
            <p className="popularServiceTextDescription">{description}</p>
        </div>
    </div>
}