import React, { useState } from "react";
import styles from "./index.module.scss";
import {
  BiWallet,
  BiSupport,
  BiSolidBookmarks,
  BiMessageCheck,
} from "react-icons/bi";
import { KatalogButton } from "../../components/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import sledr from "../../assets/imgs/menu.png"
import sledr1 from "../../assets/imgs/menu1.png"
import sledr2 from "../../assets/imgs/menu2.png"
import "./min.scss"
function ImageSlider() {
  return (
    <div className={styles.sliderStyle}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={styles.sliderStyle}
      >
        <SwiperSlide> <img src={sledr}  className={styles.img}/> </SwiperSlide>
        <SwiperSlide><img src={sledr1} className={styles.img} /> </SwiperSlide>
        <SwiperSlide><img src={sledr2} className={styles.img} /> </SwiperSlide>
        <SwiperSlide><img src={sledr}  className={styles.img} /> </SwiperSlide>
      </Swiper>
      <Paragraf />
    </div>
  );
}

function Paragraf() {
  return (
    <div className={styles.draft}>
      <p>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</p>
      <KatalogButton />
    </div>
  );
}

function Showbottom() {
  return (
    <>
      <div className={styles.headbottom}>
        <div className={styles.container}>
          <div className={styles.first}>
            <BiWallet />
            <p>Наличный и безналичный расчет</p>
          </div>
          <div>
            <BiSupport />
            <p>Техническая поддержка и консультации</p>
          </div>
          <div>
            <BiSolidBookmarks />
            <p>Только качественная и проверенная продукция</p>
          </div>
          <div>
            <BiMessageCheck />
            <p>Мы всегда на связи с 9:00 до 18:00.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function HomePage() {
  const slides = [];

  return (
    <>
      <div className={styles.containerStyle}>
        <ImageSlider slides={slides} />
      </div>
      <Showbottom />
    </>
  );
}

export default HomePage;
