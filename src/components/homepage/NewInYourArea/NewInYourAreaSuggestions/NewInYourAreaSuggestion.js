import React from 'react'; 

export const NewInYourAreaSuggestion = ({imgSrc, price, address, rooms})=>{
    console.log(price);
    
    return <div className='new-in-your-area-suggestion'>
        <img alt="the property" src={imgSrc}/>
        <p className='new-in-your-area-suggestion-price'>{price}</p>
        <p className='new-in-your-area-suggestion-address'>{address}</p>
        <p className='new-in-your-area-suggestion-rooms'>{rooms} חדרים</p>
    </div>
}