import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NewInYourAreaSuggestion } from './NewInYourAreaSuggestion';
import 'swiper/css';
import 'swiper/css/navigation';

export const NewInYourAreaSuggestions = ()=>{
    const [suggestions, setSuggestions] = useState([
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202409/17/2_2/o/y2_1pa_010550_20240917131744.jpeg?c=3&w=139&h=98',
            price: 9600,
            address: 'כיכר דיזנגוף 4, תל אביב יפו',
            rooms: 3.5,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202409/11/2_5/o/y2_1_6rBYbjeYSY_20240911.jpg?c=3&w=139&h=98',
            price: 13000000,
            address: 'שולמית, תל אביב יפו',
            rooms: 3,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202406/03/2_5/o/y2_1_TDXFCpwxHF_20240603.jpg?c=3&w=139&h=98',
            price: 5190000,
            address: 'שולמית, תל אביב יפו',
            rooms: 3,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202405/13/2_1/o/y2_1pa_010044_20240513084247.jpeg?c=3&w=139&h=98',
            price: 3900000,
            address: 'כיכר דיזנגוף 26, תל אביב יפו',
            rooms: 3,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/20/2_5/o/y2_1pa_010906_20241020133448.jpeg?c=3&w=139&h=98',
            price: 7250000,
            address: 'כיכר דיזנגוף, תל אביב יפו',
            rooms: 3,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/06/2_6/o/y2_1pa_010581_20241006113545.jpeg?c=3&w=139&h=98',
            price: 6950,
            address: 'כיכר דיזנגוף, תל אביב יפו',
            rooms: 2,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202409/18/2_6/o/y2_1pa_010789_20240918125004.jpeg?c=3&w=139&h=98',
            price: 7900,
            address: 'כיכר דיזנגוף, תל אביב יפו',
            rooms: 3,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202408/17/2_2/o/y2_1pa_010292_20240817192423.jpeg?c=3&w=139&h=98',
            price: 800,
            address: 'בר כוכבא 54, תל אביב יפו',
            rooms: 1,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202409/16/2_2/o/y2_1pa_010668_20240916153719.jpeg?c=3&w=139&h=98',
            price: 6950,
            address: 'שולמית 11, תל אביב יפו',
            rooms: 4,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/15/2_5/o/y2_1pa_010185_20241015212949.jpeg?c=3&w=139&h=98',
            price: 7700000,
            address: 'תל אביב יפו',
            rooms: 5,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/14/2_5/o/y2_1pa_010329_20241014114330.jpeg?c=3&w=139&h=98',
            price: 4250000,
            address: 'כיכר דיזנגוף, תל אביב יפו',
            rooms: 4,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/14/2_5/o/y2_1_4ciJbvLcVi_20241014.jpeg?c=3&w=139&h=98',
            price: 3490000,
            address: 'תל אביב יפו',
            rooms: 2,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/13/2_5/o/y2_1pa_010669_20241013235319.jpeg?c=3&w=139&h=98',
            price: 3650000,
            address: 'כיכר דיזנגוף, תל אביב יפו',
            rooms: 3,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/13/2_6/o/y2_1pa_996974_20241013231549.jpeg?c=3&w=139&h=98',
            price: 11000,
            address: 'כיכר דיזנגוף, תל אביב יפו',
            rooms: 3,
        },
        {
            imgSrc: 'https://img.yad2.co.il/Pic/202410/13/2_6/o/y2_1pa_010857_20241013145114.jpeg?c=3&w=139&h=98',
            price: 6300,
            address: 'תל אביב יפו',
            rooms: 1,
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
    {suggestions.map((suggestion, index)=>{
            return <SwiperSlide key={index} className='new-in-your-area-slide'><NewInYourAreaSuggestion {...suggestion} /></SwiperSlide>
        })}
  </Swiper>
}