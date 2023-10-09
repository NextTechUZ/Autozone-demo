import React from "react";
import Cards from "../../components/sections/Cards";
import style from "../../components/sections/title/index.module.scss"
import { Catalogmenyu } from "./catalogmenyu/index";
import { Catalogtitle } from "../../components/sections/title/index";
import { ImageSliderdata } from "../../components/sections/slider/indexData";

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
