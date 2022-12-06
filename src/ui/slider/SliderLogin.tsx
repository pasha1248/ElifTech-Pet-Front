/** @format */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper'
//
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// @ts-ignore:next-line
import styles from './SliderLogin.module.scss'
// @ts-ignore:next-line
import slide1 from '../../assets/slider-photo/slider-1.jpg'

export default () => {
  const [open, isOpen] = React.useState(false)
  return (
    <div className={styles.container}>
      {open ? (
        <Swiper
          modules={[Navigation, EffectFade]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide1} alt='slide' height={'600px'} width={'500px'} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide1} alt='slide' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt='slide' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt='slide' />
          </SwiperSlide>
          ...
        </Swiper>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          className={styles.myswiper}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide1} alt='slide' />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide1} alt='slide' />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide1} alt='slide' />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide1} alt='slide' />
          </SwiperSlide>
          ...
        </Swiper>
      )}
    </div>
  )
}
