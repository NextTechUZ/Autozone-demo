import React from "react";
import styles from "./index.module.scss";
import { ImageSliderdata } from "../../components/sections/slider/indexData";
import { useState } from "react";
import { Catalog } from "../Catalogs/index";
import Apppa from "../../components/Search/ap";
export default function Search() {
  return (
    <>
      <ImageSliderdata />
      <Catalog />
      <Apppa />
    </>
  );
}
