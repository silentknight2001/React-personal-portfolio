import React, {useContext} from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import Coffee from "../../img/coffee.png"
import Flipkart from "../../img/flipkart.png"
import Mi from "../../img/mi.png"
import Text from "../../img/text.png"
import Magic from "../../img/magic.png"

import 'swiper/css'
import {themeContext} from "../../Context"
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
      <div className="portfolio" id='Protfolio'>
          {/* heading */}
          <span style={{color : darkMode? 'white': ''}}>Recent Projects</span>
          <span>Portfolio</span>
          {/* slider */}
          <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className='portfolio-slider'
           >
              <SwiperSlide className='p'> 
              <img src={Coffee} alt="" />
              </SwiperSlide>

              <SwiperSlide className='p'>
              <img src={Flipkart} alt="" />
              </SwiperSlide>

              <SwiperSlide className='p'>
              <img src={Mi} alt="" />
              </SwiperSlide>

              <SwiperSlide className='p'>
              <img src={Text} alt="" />
              </SwiperSlide>

              <SwiperSlide className='p'>
              <img src={Magic} alt="" />
              </SwiperSlide>
          </Swiper>
      </div>
  )
}

export default Portfolio