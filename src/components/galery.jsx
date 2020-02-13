import React from "react"
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import "./galery.css"
import Image1 from "../components/galery/image1"
import Image2 from "../components/galery/image2"
import Image3 from "../components/galery/image3"


const CenteredSlidesAutoSlidesPerView = () => {
    const params = {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
    return (
    <Swiper {...params}>
        <div><Image1/></div>
        <div><Image2/></div>
        <div><Image3/></div>
    </Swiper>
    )
  }

  
export default CenteredSlidesAutoSlidesPerView;