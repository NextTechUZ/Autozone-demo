//cheksiz sledir infnity
import React from "react";
import styles from "../../../pages/HomePage/index.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./min.scss";
import { KatalogButton, UnityButton } from "../../Button";

function Paragraf() {
  return (
    <div className={styles.bring}>
      <div className={styles.draft}>
        <div className="reveal active">
          <p>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</p>
          <UnityButton nameButton="ПЕРЕЙТИ В КАТАЛОГ" />
        </div>
      </div>
    </div>
  );
}

export function ImageSlider(item) {
  const { sledr, sledr1, sledr2 } = item;
  return (
    <div className={styles.sliderStyle}>
      <Paragraf />
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ disableOnInteraction: false, delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sledr} className={styles.img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sledr1} className={styles.img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sledr2} className={styles.img} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
