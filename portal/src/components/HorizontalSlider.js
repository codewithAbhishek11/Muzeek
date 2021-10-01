
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./Carousel.css";
import "./HorizontalSlider.css";

import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);
function HorizontalSlider({items,title,onItemSelect}) {

    
    const url = "http://localhost:4000"
    return (
        <>
        <div className="clear">
            <h4 className="title">{title}</h4>
            <Swiper slidesPerView={12} centeredSlides={false} spaceBetween={10} pagination={{
        "type": "fraction"
      }} navigation={true} className="mySwiper">
            {
                items.map(item=>{
                    return(
                        <SwiperSlide>
                        <div className="item-container" onClick={()=>onItemSelect(item)}>
                            <img src={url+'/'+item.thumbnail}/>
                            <p className="description">{item.title}</p>
                        </div>
                        </SwiperSlide>

                    )
                })
            }
            </Swiper>
            <hr></hr>
        </div>
  </>

    )
}

export default HorizontalSlider
