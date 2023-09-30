import React from "react";
import { ImageSlider } from "../HomePage";
import Cards from "../../components/sections/Cards";
import { Catalogtitle } from "../../components/sections/title";
function Catalogs() {
  return (
    <>
      <ImageSlider />
      <Catalogtitle />
      <Cards />
    </>
  );
}

export default Catalogs;
