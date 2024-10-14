import React from "react";
import { LeadingCategory } from "./LeadingCategory";
import '../../../styles/leadingCategoriesContainer.scss'

export const LeadingCategoriesContainer = ()=>{
    return <div className="leading-categories-container">
        <LeadingCategory/>
        <LeadingCategory/>
        <LeadingCategory/>
        <LeadingCategory/>
        <LeadingCategory/>
        <LeadingCategory/>
        <LeadingCategory/>
    </div>
}