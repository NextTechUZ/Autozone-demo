import React from "react";
import styles from "./index.module.scss";
import { ImageSliderdata } from "../../components/sections/slider/indexData";
import { useState } from "react";
import { Catalog } from "../Catalogs/index";
import SearchInfo from "../../components/Search";
import { Titles } from "../../layouts/components/Titles";
export default function Search() {
  return (
    <>
      <ImageSliderdata />
      <Catalog />
      <div className={styles.posik}>
        <Titles head="ПОиск" prgf="Результаты поиска" />
      </div>
      <SearchInfo />
    </>
  );
}
