import React from "react";
import Cards from "../../components/sections/Cards";
import { Catalogtitle } from "../../components/sections/Title/index";
import style from "../../components/sections/Title/index.module.scss"
import { Catalogmenyu } from "./catalogmenyu/indexcatalog";
import { ImageSliderdata } from "../../components/sections/Slider/indexData";
function Catalogs() {
  return (
    <>
      <ImageSliderdata />
      <Catalogmenyu />
      <Catalogtitle />
      <div className={style.cards}>
        <Cards />
      </div>
    </>
  );
}

export default Catalogs;
