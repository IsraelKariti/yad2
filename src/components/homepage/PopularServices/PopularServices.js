import React from "react";
import { PopularService } from "./PopularService";
import '../../../styles/popularServices.style.scss';

export const PopularServices = ()=>{
    const services = [
        {
            title: 'נדלן מסחרי',
            description: 'מאגר הנכסים המסחריים הענק והעדכני',
            imgSrc: 'https://assets.yad2.co.il/homepage/business.svg',
        },
        {
            title: 'יד1',
            description: 'פרויקטים חדשים ודירות חדשות בכל רחבי הארץ',
            imgSrc: 'https://assets.yad2.co.il/homepage/realestate.svg',
        },
        {
            title: 'מחירון רכב',
            description: 'מידע ומחירים בזמן אמת במחיר השוק האמיתי',
            imgSrc: 'https://assets.yad2.co.il/homepage/priceList.svg',
        },
        {
            title: 'Yadata',
            description: 'לדעת כמה הדירה שווה בעזרת מחשבון חדשני',
            imgSrc: 'https://assets.yad2.co.il/homepage/calculator.svg',
        },
    ]
    return <div className="popularServices">
        <p className="popularServicesTitle">שירותים פופולריים</p>
        <div className="popularServicesContainer">
            {
                services.map((service, index)=> <PopularService key={index} title={service.title} description={service.description} imgSrc={service.imgSrc}/>)
            }
        </div>
    </div>
}