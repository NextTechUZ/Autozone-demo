import React from "react";
import styles from './index.module.scss'
import { ImageSliderdata } from "../../components/sections/slider/indexData";
import { useState } from "react";
import { Forsearch } from "../../layouts/components/Navbar/parts";


export default function Search() {

  return (
    <div style={{position:'relative'}}>
      <ImageSliderdata />
      {/* <Forsearch /> */}
    </div>
  );
}
