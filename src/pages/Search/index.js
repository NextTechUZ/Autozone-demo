import React from "react";
import styles from "./index.module.scss";
import { ImageSliderdata } from "../../components/sections/slider/indexData";
import { useState } from "react";
import { Catalog } from "../Catalogs/index";
export default function Search() {
  return (
    <>
      <ImageSliderdata />
      <Catalog />
    </>
  );
}
