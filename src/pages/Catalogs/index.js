import React from "react";
import { ImageSlider } from "../HomePage";
import Cards from "../../components/sections/Cards";
import { Catalogtitle } from "../../components/sections/title";
import style from "../../components/sections/title/title.module.scss";
import { Catalogmenyu } from "./catalogmenyu/Catalog";
function Catalogs() {
  return (
    <>
      <ImageSlider />
      <Catalogmenyu />
      <Catalogtitle />
      <div className={style.cards}>
        <Cards />
      </div>
    </>
  );
}

export default Catalogs;
