import React, { useState } from "react";
import styles from "../../../pages/HomePage/index.module.scss";

// Import Swiper React components
import {Swiper,SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules"; 
import "./min.scss";
import { KatalogButton } from "../../Button";

function Paragraf(){
    return(
        <div className={styles.draft}>
            <p>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</p>
            <KatalogButton />
        </div>
    )
}


export function ImageSlider(item) {
    const { sledr, sledr1, sledr2 } = item;
    console.log(sledr);
    return (
      <div className={styles.sliderStyle}>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className={styles.sliderStyle}> 
          <SwiperSlide>
            <img src={sledr} className={styles.img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sledr1} className={styles.img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sledr2} className={styles.img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sledr} className={styles.img} />
          </SwiperSlide>
        </Swiper>
        <Paragraf />
      </div>
    );
  }
  