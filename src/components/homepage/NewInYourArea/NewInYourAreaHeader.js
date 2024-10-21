import React from "react";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export const NewInYourAreaHeader = ()=>{
    return <div className="new-in-your-area-header">
        <p className="new-in-your-area-header-title">חדש סביבך</p>
        <PlaceOutlinedIcon  sx={{ color: 'rgb(255,113,0);' }} />
        <p className="new-in-your-area-location-unavailable">מיקום לא זמין</p>
    </div> 
}