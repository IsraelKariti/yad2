import React from 'react'; 

export const NewInYourAreaSuggestion = ({imgSrc, price, description, detail})=>{
    
    return <div className='new-in-your-area-suggestion'>
        <img alt="the property" src={imgSrc}/>
        <p className='new-in-your-area-suggestion-price'>{price}</p>
        <p className='new-in-your-area-suggestion-description'>{description}</p>
        <p className='new-in-your-area-suggestion-detail'>{detail} חדרים</p>
    </div>
}