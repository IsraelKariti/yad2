import React from "react";

export const ForBusinessOption = ({title, shape})=>{
    return <div className="ForBusinessOption">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="rgb(251, 174, 31)" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d={shape} fill="rgb(251, 174, 31)"></path>
        </svg>
        <p>{title}</p>
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.014 17.884a.75.75 0 01-.98 1.13l-.084-.073-6.137-6.18a.75.75 0 01-.069-.977l.073-.083 6.145-6.103a.75.75 0 011.13.98l-.073.085-5.613 5.573 5.608 5.648z" fill="currentColor"></path></svg>
    </div>
}