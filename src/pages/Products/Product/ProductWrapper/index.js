import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { ImageSliderdata } from "../../../../components/sections/slider/indexData";
import ProductTitle from "../../../../components/sections/title";
import Data from "../Data";
import { Notfount } from "../../../Notfount";
import Loader from "../../../../components/sections/Loader";
import { Catalogmenyu } from "../../../Catalogs/catalogmenyu/index";
import Button_one from "../../../../components/ButtonProduct/Button_one";
import Product_Button from "../../../../components/Button";
import { Link } from "react-router-dom";

function ProductData() {
  const [loading, setLoading] = useState(true);
  const [dataResponse, setDataResponse] = useState([]);
  const [isactiv, setIsactiv] = useState();
  const [isactiv1, setIsactiv1] = useState();
  const [isactiv2, setIsactiv2] = useState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const next = () => {
    setIsactiv(!isactiv);
  };
  const next1 = () => {
    setIsactiv1(!isactiv1);
  };
  const next2 = () => {
    setIsactiv2(!isactiv2);
  };

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M8 4L12 10.5L8 16" stroke="white" strokeWidth="4" />
    </svg>
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const filteredData = Data.filter((item) => {
          const productPrice = item.number;
          return productPrice >= minPrice && productPrice <= maxPrice;
        });
        const dataItems = filteredData.map((item) => (
          <div>
            <Link to={`/product/${item.id}`}>
              <div className={style.product_card}>
                <div className={style.product_card_img}>
                  <img src={item.img} alt={item.name} />
                </div>
                <div className={style.product_card_name}>
                  <div className={style.product_card_name_card}>
                    <h2>{item.name}</h2>
                    <h3>{item.title}</h3>
                    <Product_Button />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ));

        setDataResponse(dataItems);
        setLoading(false);
      } catch (error) {
        return <Notfount />;
      }
    }
    fetchData();
  }, [minPrice, maxPrice]);

  return (
    <div>
      <ImageSliderdata />
      <Catalogmenyu />
      <div className={style.product}>
        <ProductTitle />
        <div className={style.product_wrapper}>
          <div className={style.product_left}>
            <div
              className={`${style.product_left_wrapper} ${
                isactiv ? style.product_left_wrapper_active : ""
              }`}
            >
              <button className={style.product_left_button} onClick={next}>
                <div>
                  <p>АККУМУЛЯТОРЫ</p>
                  <p
                    className={`${style.svg} ${
                      isactiv ? style.svg_active : ""
                    }`}
                  >
                    {svg}
                  </p>
                </div>
              </button>
              <Button_one />
            </div>
            <div className={`${style.product_left_wrapper} ${
                isactiv1 ? style.product_left_wrapper_active1 : "" }`}>
              <button className={style.product_left_button} onClick={next1}>
                <div>
                      <p>ЦЕНА</p>
                    <p className={`${style.svg} ${ isactiv1 ? style.svg_active : "" }`}>
                      {svg}
                    </p>
                </div>
              </button>
       <div className={style.product_left_wrapper_input} >
            <div className={style.product_left_wrapper_filter_container}>
                  <label htmlFor="minPrice" className={style.product_left_wrapper_filter_container_label} > {minPrice}</label>
                  <input type="range" id={style.minPrice} name="minPrice" min="0"  max="1000" value={minPrice}
                  onChange={(e) => setMinPrice(parseInt(e.target.value))}/>
            </div>
               <div className={style.product_left_wrapper_filter_container}>
                  <label htmlFor="maxPrice" className={style.product_left_wrapper_filter_container_label1}> {maxPrice}</label>
                  <input type="range" id={style.maxPrice} name="maxPrice" min="0" max="1000" value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
               </div>
       </div>
              </div>
            <div className={`${style.product_left_wrapper} ${
                isactiv2 ? style.product_left_wrapper_active2 : "" }`}>
              <button className={style.product_left_button} onClick={next2}>
                <div>
                    <p>СТАТУС</p>
                    <p  className={`${style.svg} ${
                      isactiv2 ? style.svg_active : ""  }`} > {svg} </p>
                </div>
              </button>
            </div>
          </div>
          <div className={style.product_right}>
            {/* loading holati  */}
            {loading ? <Loader /> : dataResponse}
          </div>
        </div>
        <div className={style.product_wrapper_bottom}></div>
      </div>
    </div>
  );
}

export default ProductData;
