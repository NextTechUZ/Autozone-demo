import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { ImageSliderdata } from "../../../../components/sections/Slider/indexData";
import ProductTitle from "../../../../components/sections/Title";
import Product_min from "./index";
import Data from "../Data/index"; 
import { Notfount } from "../../../Notfount";
import Loader from "../../../../components/sections/Loader";
import { Catalogmenyu } from "../../../Catalogs/catalogmenyu/index";

function ProductData() {
  const [loading, setLoading] = useState(true); //loading
  const [dataResponse, setDataResponse] = useState([]); //  elementlarni saqlash uchun o'zgaruvchi

  useEffect(() => {
    async function fetchData() {
      // Ma'lumotlarni map qilib olamiz va kelgan ma'lumotlarni <Product_min/> ga berib yuboramiz
      try {
        const dataItems = Data.map((item) => (
          <Product_min key={item.id} {...item} />
        ));

        setDataResponse(dataItems);//Datadagi malumotlar yuklanib bulgandan kiyin malumotlarni 
        // statega joylaymiz va UI ga chiqaramiz
        setLoading(!true); //datadan ma'lumot kelganda loading... holati to'xtaydi
      } catch (error) {
        return <Notfount />; //Ma'lumot topilmagan holatida 
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <ImageSliderdata />
      <Catalogmenyu />
      <div className={style.product}>
        <ProductTitle />
        <div className={style.product_wrapper}>
          <div className={style.product_left}></div>
          <div className={style.product_right}>
            {/* loading holati  */}
            {loading ? (
              <Loader/>
            ) : (
              dataResponse  //<Product_min/>dan kelgan ma'lumotlar 
            )}
          </div>
        </div>
        <div className={style.product_wrapper_bottom}></div>
      </div>
    </div>
  );
}

export default ProductData;
