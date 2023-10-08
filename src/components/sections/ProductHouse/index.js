import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { ImageSliderdata } from "../slider/indexData";
import ProductTitle from "../title";
import Data from "../../../data/products";
import { Notfount } from "../../../pages/Notfount";
import Loader from "../Loader";
import Button_one from "../../ButtonProduct/Button_one";
import Product_Button, {
  Cancel_button,
  Order_button,
} from "../../Button";
import ProductCard from "../../ProductCard";
import { Catalog } from "../../../pages/Catalogs";

function ProductData() {
  const [loading, setLoading] = useState(true);
  const [dataResponse, setDataResponse] = useState([]);
  const [isactiv, setIsactiv] = useState(false);
  const [isactiv1, setIsactiv1] = useState(false);
  const [isactiv2, setIsactiv2] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

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

  // activi calss bulgan holati
  const next = () => {
    setIsactiv(!isactiv);
  };

  const next1 = () => {
    setIsactiv1(!isactiv1);
  };

  const next2 = () => {
    setIsactiv2(!isactiv2);
  };
  // Datani fliterlab max min narxiga qarab chiqarish
  // va Link bosilganda datani id buyicha mahsulotga utish va mahsulot haqida tuliq malumot berish
  useEffect(() => {
    async function fetchData() {
      try {
        const filteredData = Data.filter((item) => {
          const productPrice = item.number;
          return productPrice >= minPrice && productPrice <= maxPrice;
        });
        const dataItems = filteredData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ));
        setDataResponse(dataItems);
        setLoading(false); // loading
      } catch (error) {
        return <Notfount />; //404
      }
    }
    fetchData();
  }, [minPrice, maxPrice]);

  return (
    <div>
      <ImageSliderdata />
      <Catalog />
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
            <div
              className={`${style.product_left_wrapper} ${
                isactiv1 ? style.product_left_wrapper_active1 : ""
              }`}
            >
              <button className={style.product_left_button} onClick={next1}>
                <div>
                  <p>ЦЕНА</p>
                  <p
                    className={`${style.svg} ${
                      isactiv1 ? style.svg_active : ""
                    }`}
                  >
                    {svg}
                  </p>
                </div>
              </button>
              <div className={style.product_left_wrapper_value}>
                <div className={style.product_left_wrapper_input_min}>
                  <input
                    type="number"
                    value={minPrice || ""}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (newValue > 1000) {
                        alert("Min  Max dan katta bulmasligi kerak :)");
                        setMinPrice(100);
                      } else if (!isNaN(newValue)) {
                        setMinPrice(newValue);
                      } else {
                        setMinPrice(0);
                      }
                    }}
                  />
                </div>
                <div className={style.product_left_wrapper_input_max}>
                  <input
                    type="number"
                    value={maxPrice || ""}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (newValue < 1000) {
                        alert("Max  Min dan kichkina bulmasligi kerak :)");
                        setMaxPrice(1000);
                      } else if (!isNaN(newValue)) {
                        setMaxPrice(newValue);
                      } else {
                        setMaxPrice(0);
                      }
                    }}
                  />
                </div>
              </div>
              <div className={style.product_left_wrapper_input}>
                <div className={style.product_left_wrapper_filter_container}>
                  <label
                    htmlFor="minPrice"
                    className={
                      style.product_left_wrapper_filter_container_label
                    }
                  >
                    {minPrice}
                  </label>
                  <input
                    type="range"
                    id={style.minPrice}
                    name="minPrice"
                    min="0"
                    max="1000"
                    value={minPrice}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (!isNaN(newValue)) {
                        setMinPrice(newValue);
                      } else {
                        setMinPrice(0);
                      }
                    }}
                    style={{
                      background: `linear-gradient(to right, #3CC051 0%, #3CC051 ${
                        (minPrice / 1000) * 100
                      }%, #1D1D1D ${(minPrice / 1000) * 100}%, #1D1D1D 100%)`,
                    }}
                  />
                </div>
                <div className={style.product_left_wrapper_filter_container}>
                  <label
                    htmlFor="maxPrice"
                    className={
                      style.product_left_wrapper_filter_container_label1
                    }
                  >
                    {maxPrice}
                  </label>
                  <input
                    type="range"
                    id={style.maxPrice}
                    name="maxPrice"
                    min="1000"
                    max="10000"
                    value={maxPrice}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (!isNaN(newValue)) {
                        setMaxPrice(newValue);
                      } else {
                        setMaxPrice(0);
                      }
                    }}
                    style={{
                      background: `linear-gradient(to right, #C53720 0%, #C53720 ${
                        (maxPrice / 10000) * 100
                      }%, #1D1D1D ${(maxPrice / 10000) * 100}%, #1D1D1D 100%)`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${style.product_left_wrapper} ${
                isactiv2 ? style.product_left_wrapper_active2 : ""
              }`}
            >
              <button className={style.product_left_button} onClick={next2}>
                <div>
                  <p>СТАТУС</p>
                  <p
                    className={`${style.svg} ${
                      isactiv2 ? style.svg_active : ""
                    }`}
                  >
                    {svg}
                  </p>
                </div>
              </button>
              <div className={style.product_left_wrapper_active2_input}>
                <div className={style.product_left_wrapper_active2_input_chek}>
                  <input type="checkbox" id="checkd" />
                  <label htmlFor="checkd">В НАЛИЧИИ</label>
                </div>
                <div className={style.product_left_wrapper_active2_input_chek}>
                  <input
                    type="checkbox"
                    id="checkd1"
                    className={style.checkd1}
                  />
                  <label htmlFor="checkd1">ПОД ЗАКАЗ</label>
                </div>
              </div>
              <div className={style.product_left_wrapper_active2_input_button}>
                <div className={style.product_bat}>
                  <Order_button />
                  <Cancel_button />
                </div>
              </div>
              <div
                className={style.product_left_wrapper_active2_input_button_es}
              >
                <p>
                  Подберём аккумулятор и масло конкретно на ваш автомобиль. Цель
                  нашего магазина - предложение широкого ассортимента товаров.
                </p>
              </div>
            </div>
          </div>
          <div className={style.product_right}>
            {loading ? <Loader /> : dataResponse}
          </div>
        </div>
        <div className={style.product_wrapper_bottom}></div>
      </div>
    </div>
  );
}

export default ProductData;
