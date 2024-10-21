import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselImg } from './CarouselImg';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import '../../../styles/carousel.style.scss';
import 'swiper/scss/pagination';

export const Carousel = ()=>{
    return <Swiper className='carousel' 
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }} // Enable pagination and make it clickable
    modules={[Pagination]} // Add the Pagination module
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide className='imageContainer'><CarouselImg narrowImg="/assets/drushim1440.jpg" wideImg="/assets/drushim3840.jpg"/></SwiperSlide>
    <SwiperSlide className='imageContainer'><CarouselImg narrowImg="/assets/nadlan720.jpg" wideImg="/assets/nadlan2400.jpg"/></SwiperSlide>
    <SwiperSlide className='imageContainer'><CarouselImg narrowImg="/assets/cars1440.jpg" wideImg="/assets/cars3840.jpg"/></SwiperSlide>

  </Swiper>
}