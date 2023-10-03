import React from "react";
import Cards from "../../components/sections/Cards";
import { Catalogtitle } from "../../components/sections/Title/index";
import style from "../../components/sections/Title/index.module.scss"
import { ImageSliderdata } from "../../components/sections/Slider/indexData";
import { Catalogmenyu } from "./catalogmenyu/index";
function Catalogs() {
  return (
    <>
      <ImageSliderdata />
      <Catalogmenyu/>
      <Catalogtitle />
      <div className={style.cards}>
        <Cards />
      </div>
    </>
  );
}

export default Catalogs;
