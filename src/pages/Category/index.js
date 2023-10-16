import React from "react";
import Cards from "../../components/sections/Cards";
import style from "../../components/sections/title/index.module.scss";
import { Catalog } from "../Catalogs/index";
import { Catalogtitle } from "../../components/sections/title/index";
import { ImageSliderdata } from "../../components/sections/slider/indexData";

function Category() {
  return (
    <>
      <ImageSliderdata />
      <Catalog />
      <Catalogtitle />
      <div className={style.cards}>
        <Cards />
      </div>
    </>
  );
}

export default Category;
