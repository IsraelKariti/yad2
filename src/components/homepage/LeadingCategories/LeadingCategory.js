import React from 'react';

export const LeadingCategory = ({imgSrc, title})=>{
    return <div className='leading-category'>
            <div className='leading-category-image-container'>
                <img className='leading-category-image' src={imgSrc} alt="the category"/>
            </div>
            <p className='leading-category-title'>{title}</p>
        </div>
}