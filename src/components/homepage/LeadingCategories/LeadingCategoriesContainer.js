import React from "react";
import { LeadingCategory } from "./LeadingCategory";
import '../../../styles/leadingCategoriesContainer.scss'

export const LeadingCategoriesContainer = ()=>{
    return <div className="leading-categories-container">
        <LeadingCategory imgSrc="/assets/Yad2Categories/leading-category-business.webp" title="עסקים למכירה"/>
        <LeadingCategory imgSrc="/assets/Yad2Categories/leading-category-professional.webp" title="בעלי מקצוע"/>
        <LeadingCategory imgSrc="/assets/Yad2Categories/leading-category-pets.webp" title="חיות מחמד"/>
        <LeadingCategory imgSrc="/assets/Yad2Categories/leading-category-drushim-new.webp" title="דרושים"/>
        <LeadingCategory imgSrc="/assets/Yad2Categories/leading-category-second-hand.webp" title="יד שנייה"/>
        <LeadingCategory imgSrc="/assets/Yad2Categories/leading-category-vehicles.webp" title="רכב"/>
        <LeadingCategory imgSrc="/assets/Yad2Categories/leading-category-real-estate.webp" title='נדל"ן'/>

    </div>
}