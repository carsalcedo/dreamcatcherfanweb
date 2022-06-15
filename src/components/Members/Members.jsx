import React, { Profiler } from 'react'
import './Members.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import dami from '../../img/dami.jpg'
import gahyeon from  '../../img/gahyeon.jpg'
import hangdom from  '../../img/hangdom.jpg'
import jiu from  '../../img/jiu.jpg'
import siyeon from  '../../img/siyeon.jpg'
import sua from  '../../img/sua.jpg'
import yoohyeon from  '../../img/yoohyeon.png'


const Members = () => {

    const girls=[
        {
            img: dami,
            name: 'Dami',
            review: 'Raper, Vocalist and Dancer'
        },
        {
            img: gahyeon,
            name: 'Gahyeon',
            review: 'Vocalist, Raper, Dancer and Maknae'
        },
        {
            img: hangdom,
            name: 'Hangdom',
            review: 'Vocalist and Dancer'
        },
        {
            img: jiu,
            name: 'ji U',
            review: 'Leader, Vocalist and Dancer'
        },
        {
            img: siyeon,
            name: 'Si Yeon',
            review: 'Vocalist and Dancer'
        },
        {
            img: sua,
            name: 'Su A',
            review: 'Vocalist, Raper and Dancer'
        },
        {
            img: yoohyeon,
            name: 'Yoo Hyeon',
            review: 'Vocalist and Dancer'
        }
    ]

  return (
    <div className="t-wrapper" id='members'>
        <div className="t-headding">
            <span>Members</span>
            <span> 7 girls</span>
            <span> 6 korean and 1 chiness</span>
            <div className="blur s-blur1" style={{background: 'rgb(238 210 255)', top: '20rem', left: '2rem'}}></div>
            <div className="blur s-blur2" style={{background: 'var(--purple)', top: '9rem', left: '60rem'}}></div>
        </div>
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}>

            {girls.map((girl, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="members">
                            <img src={girl.img} alt={girl.name} />
                            <span>{girl.name}</span>
                            <p>{girl.review}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Members