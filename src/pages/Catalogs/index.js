import React from "react";
import Cards from "../../components/sections/Cards";
import { Catalogtitle } from "../../components/sections/title";
import style from "../../components/sections/title/title.module.scss";
import { Catalogmenyu } from "./catalogmenyu/Catalog";
import { ImageSliderdata } from "../../components/sections/slider/indexData";
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
