import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NewInYourAreaSuggestion } from './NewInYourAreaSuggestion';
import 'swiper/css';
import 'swiper/css/navigation';

export const NewInYourAreaSuggestions = ({chosenCategory})=>{
    console.log('suggestion reloadd with category:'+chosenCategory);
    
    const [realestateSuggestions] = useState([
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202409/17/2_2/o/y2_1pa_010550_20240917131744.jpeg?c=3&w=139&h=98',
            price: 9600,
            description: 'כיכר דיזנגוף 4, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202409/11/2_5/o/y2_1_6rBYbjeYSY_20240911.jpg?c=3&w=139&h=98',
            price: 13000000,
            description: 'שולמית, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202406/03/2_5/o/y2_1_TDXFCpwxHF_20240603.jpg?c=3&w=139&h=98',
            price: 5190000,
            description: 'שולמית, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202405/13/2_1/o/y2_1pa_010044_20240513084247.jpeg?c=3&w=139&h=98',
            price: 3900000,
            description: 'כיכר דיזנגוף 26, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/20/2_5/o/y2_1pa_010906_20241020133448.jpeg?c=3&w=139&h=98',
            price: 7250000,
            description: 'כיכר דיזנגוף, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/06/2_6/o/y2_1pa_010581_20241006113545.jpeg?c=3&w=139&h=98',
            price: 6950,
            description: 'כיכר דיזנגוף, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202409/18/2_6/o/y2_1pa_010789_20240918125004.jpeg?c=3&w=139&h=98',
            price: 7900,
            description: 'כיכר דיזנגוף, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202408/17/2_2/o/y2_1pa_010292_20240817192423.jpeg?c=3&w=139&h=98',
            price: 800,
            description: 'בר כוכבא 54, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202409/16/2_2/o/y2_1pa_010668_20240916153719.jpeg?c=3&w=139&h=98',
            price: 6950,
            description: 'שולמית 11, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/15/2_5/o/y2_1pa_010185_20241015212949.jpeg?c=3&w=139&h=98',
            price: 7700000,
            description: 'תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/14/2_5/o/y2_1pa_010329_20241014114330.jpeg?c=3&w=139&h=98',
            price: 4250000,
            description: 'כיכר דיזנגוף, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/14/2_5/o/y2_1_4ciJbvLcVi_20241014.jpeg?c=3&w=139&h=98',
            price: 3490000,
            description: 'תל אביב יפו',
            detail: "חדרים 3.5",rooms: 2,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/13/2_5/o/y2_1pa_010669_20241013235319.jpeg?c=3&w=139&h=98',
            price: 3650000,
            description: 'כיכר דיזנגוף, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/13/2_6/o/y2_1pa_996974_20241013231549.jpeg?c=3&w=139&h=98',
            price: 11000,
            description: 'כיכר דיזנגוף, תל אביב יפו',
            detail: "חדרים 3.5",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/13/2_6/o/y2_1pa_010857_20241013145114.jpeg?c=3&w=139&h=98',
            price: 6300,
            description: 'תל אביב יפו',
            detail: "חדרים 3.5",
        },
    ]);

    const [carSuggestions] = useState([
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202411/04/1_3/o/y2_1pa_010212_20241104151721.jpeg?c=3&w=139&h=98',
            price: 178450,
            description: 'טויוטה RAV4',
            detail: "2021",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202411/04/1_1/o/y2_1pa_010966_20241104160444.jpeg?c=3&w=139&h=98',
            price: 106000,
            description: 'סוזוקי איגניס',
            detail: "2023",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202411/04/1_3/o/y2_1pa_010244_20241104160233.jpeg?c=3&w=139&h=98',
            price: 198500,
            description: 'גיפ רנגלר',
            detail: "2019",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202411/04/1_1/o/y2_1pa_010698_20241104160005.jpeg?c=3&w=139&h=98',
            price: 116000,
            description: 'סקודה סופרב',
            detail: "2022",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202411/04/1_1/o/y2_1pa_010806_20241104155956.jpeg?c=3&w=139&h=98',
            price: 20000,
            description: 'פיאט 500',
            detail: "2015",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202411/04/1_2/o/y2_1pa_010944_20241104154101.jpeg?c=3&w=139&h=98',
            price: 559000,
            description: 'SUV מרצדס בנץ',
            detail: "2024",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202411/04/1_8/o/y2_1pa_010907_20241104154546.jpeg?c=3&w=139&h=98',
            price: 176500,
            description: 'גנסיס G70',
            detail: "2022",
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202411/04/1_2/o/y2_1pa_010580_20241104154127.jpeg?c=3&w=139&h=98',
            price: 229900,
            description: 'שברולט סילברדו',
            detail: '2022',
        },
    ]);

    const [secondHandSuggestion] = useState([
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202404/12/3_0/o/y2_1_01255_20240412141321.jpeg?c=3&w=139&h=98',
            price: 1200,
            description: '156 MOD ROCKER ROME',
            detail: 'תל אביב יפו',
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202405/05/3_0/o/y2_1_04379_20240505093403.jpeg?c=3&w=139&h=98',
            price: 2400,
            description: 'Anderson XFC',
            detail: 'תל אביב יפו',
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202405/31/3_0/o/y2_1_08821_20240531135728.jpeg?c=3&w=139&h=98',
            price: 500,
            description: 'מזוודה ל12 מפוחיות',
            detail: 'תל אביב יפו',
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202312/20/3_0/o/y2_1_07324_20231220174903.jpeg?c=3&w=139&h=98',
            price: 100,
            description: 'מקלות הליכה נורדיים',
            detail: 'תל אביב יפו',
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202304/30/3_0/o/y2_1_01058_20230430231047.jpeg?c=3&w=139&h=98',
            price: 570,
            description: 'מפוחית סיידל',
            detail: 'תל אביב יפו',
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202407/16/3_0/o/y2_1_03816_20240716011718.jpeg?c=3&w=139&h=98',
            price: 60,
            description: 'מטרונום מכני על קפיץ',
            detail: 'תל אביב יפו',
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202208/13/3_0/o/y2_1_06617_20220813155829.jpeg?c=3&w=139&h=98',
            price: 133,
            description: 'טיונר לגיטרה',
            detail: 'תל אביב יפו',
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202312/30/3_0/o/y2_1_09243_20231230212317.jpeg?c=3&w=139&h=98',
            price: 190,
            description: 'תיק צד לנשים מטופו',
            detail: 'תל אביב יפו',
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202302/07/3_0/o/y2_1_03159_20230207134848.jpeg?c=3&w=139&h=98',
            price: 130,
            description: 'שכמיה לגבירות',
            detail: 'תל אביב יפו',
        },
    ]);
    
    return <Swiper className='new-in-your-area-suggestions'
    navigation={true} 
    modules={[Navigation]}
    spaceBetween={10}
    centeredSlides={false}
    slidesPerView="auto"
    watchOverflow={true}
    freeMode={true}
    watchSlidesProgress={true}
    onSwiper={(swiper) => console.log(swiper)}
    scrollbar={{ draggable: true }} // Enable the scrollbar for manual scrolling
  >
    {        
        chosenCategory === "1" ? realestateSuggestions.map((suggestion, index)=>{
            return <SwiperSlide key={index} className='new-in-your-area-slide'><NewInYourAreaSuggestion {...suggestion} /></SwiperSlide>
        }) : 
        chosenCategory === "2" ? carSuggestions.map((suggestion, index)=>{
            return <SwiperSlide key={index} className='new-in-your-area-slide'><NewInYourAreaSuggestion {...suggestion} /></SwiperSlide>
        }) :
        secondHandSuggestion.map((suggestion, index)=>{
            return <SwiperSlide key={index} className='new-in-your-area-slide'><NewInYourAreaSuggestion {...suggestion} /></SwiperSlide>
        })
    }
  </Swiper>
}