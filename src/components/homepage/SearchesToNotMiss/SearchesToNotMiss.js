import React from "react";
import { SearchToNotMiss } from "./SearchToNotMiss";
import '../../../styles/SearchesToNotMiss.style.scss';

export const SearchesToNotMiss = ()=>{
    const searches = [
        {
            imgSrc: "https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fpopular-searches%2Fvehicles.png&w=828&q=75",
            title: "הרכבים הכי נחשקים סביבך עד 60 אלף שקל"
        },
        {
            imgSrc: "https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fpopular-searches%2Freal-estate.png&w=828&q=75",
            title: "דירות מתחת ל2000000 שח באזור תל אביב"
        },
        {
            imgSrc: "https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fpopular-searches%2Fproducts.png&w=828&q=75",
            title: "המוצרים הפופולרים ביותר מהשבוע האחרון"
        },
        {
            imgSrc: "https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fpopular-searches%2Fcareer-magazine.png&w=828&q=75",
            title: "מגזין הקריירה - המקום שיכין אותך לעבודה הבאה שלך"
        },
    ]
    return <div className="searchesToNotMiss"> 
        <p className="searchesToNotMissTitle">חיפושים שאסור לפספס</p>
        <div className="searchesToNotMissContainer">
            {
                searches.map((search, index)=><SearchToNotMiss title={search.title} imgSrc={search.imgSrc}/>)
            }
        </div>
    </div>
}