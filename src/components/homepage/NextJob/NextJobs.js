import React from "react";
import { NextJob } from "./NextJob";
import '../../../styles/NextJobs.scss';

export const NextJobs = ()=>{
    const jobs = [
        {
            imgSrc: 'https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fdrushim-smart-alerts.png&w=384&q=75',
            title: 'הסוכנת החכמה',
            description: 'קבלו הצעת עבודה ישירות למייל'
        },
        {
            imgSrc: 'https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fdrushim-cv.png&w=384&q=75',
            title: 'קורות חיים',
            description: 'כתיבת קורות חיים מקצועיים בחינם'
        },
        {
            imgSrc: 'https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fdrushim-calculator.png&w=384&q=75',
            title: 'מחשבון שכר',
            description: 'בו תוכלו לעשות חישוב מדויק של השכר נטו אותו תקבלו'
        },
        {
            imgSrc: 'https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fdrushim-jobs.png&w=384&q=75',
            title: 'פרסום משרה',
            description: '!גיוס עובדים במהירות ובקלות'
        },
    ]
    return <div className="nextJobs">
        <p>בדרך למשרה הבאה שלך</p>
        <div className="jobsContainer">
        {
            jobs.map((job, index)=><NextJob key={index} {...job} />)
        }
        </div>
    </div>
}