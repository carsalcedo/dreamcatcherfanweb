import React from 'react'
import './Discography.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import cover1 from '../../img/cover1.jpg'
import cover2 from '../../img/cover2.jpg'
import cover3 from '../../img/cover3.jpg'
import cover4 from '../../img/cover4.jpg'
import cover5 from '../../img/cover5.jpg'
import 'swiper/css'


const Discografy = () => {
  return (
    <div className="discography" id='discography'>
        <span>Discography</span>
        <span>Albums & Singles</span>

        <Swiper
            spaceBetween={30}
            slidesPerView={4}
            grabCursor={true}
            className='discography-slider'>
            <SwiperSlide>
                <img src={cover1} alt="dreamcatcher" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={cover2} alt="dreamcatcher" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={cover3} alt="dreamcatcher" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={cover4} alt="dreamcatcher" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={cover5} alt="dreamcatcher" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Discografy