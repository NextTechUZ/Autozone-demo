import React, { useState } from "react";
import styles from "./index.module.scss";
import {
  Services,
  Kampaniya,
  Showbottom,
} from "../../components/sections/servicesPart";
import { News } from "../../components/sections/newsPart";

// Import Swiper styles

// import "./min.scss";
import Cards from "../../components/sections/Cards";
import { ImageSliderdata } from "../../components/sections/slider/indexData";
import FootSlide from "../../components/sections/footslide";
import { Title } from "../../components/sections/title";
<ImageSliderdata />;

function HomePage() {
  return (
    <>
      <div className={styles.containerStyle}>
        <ImageSliderdata />
      </div>
      <Showbottom />
      <Title />
      <Cards />
      <Services /> 
      <Kampaniya />
      <News />
      <FootSlide />
    </>
  );
}

export default HomePage;