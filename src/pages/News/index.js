import React from "react";
import { ImageSliderdata } from "../../components/sections/slider/indexData";
import Novosti from "../../components/sections/Newspageitem/Novosti";
import Faq from "../../components/sections/Newspageitem/FAQ";
function News() {
  return (
    <>
      <ImageSliderdata />
      <Novosti/>
      <Faq/>
    </>
  );
}

export default News;
