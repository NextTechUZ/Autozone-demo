import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { ImageSliderdata } from "../slider/indexData";
import ProductTitle from "../title";
import Data from "../../../data/products";
import { Notfount } from "../../../pages/Notfount";
import Loader from "../Loader";
import Button_one, {
  Button_one1,
  Button_one2,
} from "../../ButtonProduct/Button_one";
import Product_Button, { Cancel_button, Order_button } from "../../Button";
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
  const [hig, setHIg] = useState("40px");
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
  const down = () => {
    setHIg("100%");
  };
  const down1 = () => {
    setHIg("100%");
  };
  const down2 = () => {
    setHIg("100%");
  };
  const handelhig = () => {
    if (hig === "40px") {
      setHIg("161px");
    } else if (hig === "161px") {
      setHIg("100%");
    }
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
          <div className={styles.add}>
            <ProductCard key={item.id} product={item} />
          </div>
        ));
        setDataResponse(dataItems);
        setLoading(false); // loading
      } catch (error) {
        return <Notfount />; //404
      }
      // }, 1000);
    }
    fetchData();
  }, [minPrice, maxPrice]);

  return (
    <div>
      <ImageSliderdata />
      <Catalog />
      <div className={styles.product}>
        <ProductTitle />
        <div className={styles.product_wrapper}>
          <div className={styles.product_left}>
            <div
              className={`${styles.product_left_wrapper} ${
                isactiv ? styles.product_left_wrapper_active : ""
              }`}
              style={{ height: hig }}
              onClick={handelhig}
            >
              <button className={styles.product_left_button} onClick={next}>
                <div>
                  <p>АККУМУЛЯТОРЫ</p>
                  <p
                    className={`${styles.svg} ${
                      isactiv ? styles.svg_active : ""
                    }`}
                  >
                    {svg}
                  </p>
                </div>
              </button>
              <Button_one clik={down} />
              <Button_one1 clik1={down1} />
              <Button_one2 clik2={down2} />
            </div>
            <div
              className={`${styles.product_left_wrapper} ${
                isactiv1 ? styles.product_left_wrapper_active1 : ""
              }`}
            >
              <button className={styles.product_left_button} onClick={next1}>
                <div>
                  <p>ЦЕНА</p>
                  <p
                    className={`${styles.svg} ${
                      isactiv1 ? styles.svg_active : ""
                    }`}
                  >
                    {svg}
                  </p>
                </div>
              </button>
              <div className={styles.product_left_wrapper_value}>
                <div className={styles.product_left_wrapper_input_min}>
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
                <div className={styles.product_left_wrapper_input_max}>
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
              <div className={styles.product_left_wrapper_input}>
                <div className={styles.product_left_wrapper_filter_container}>
                  <label
                    htmlFor="minPrice"
                    className={
                      styles.product_left_wrapper_filter_container_label
                    }
                  >
                    {minPrice}
                  </label>
                  <input
                    type="range"
                    id={styles.minPrice}
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
                <div className={styles.product_left_wrapper_filter_container}>
                  <label
                    htmlFor="maxPrice"
                    className={
                      styles.product_left_wrapper_filter_container_label1
                    }
                  >
                    {maxPrice}
                  </label>
                  <input
                    type="range"
                    id={styles.maxPrice}
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
              className={`${styles.product_left_wrapper} ${
                isactiv2 ? styles.product_left_wrapper_active2 : ""
              }`}
            >
              <button className={styles.product_left_button} onClick={next2}>
                <div>
                  <p>СТАТУС</p>
                  <p
                    className={`${styles.svg} ${
                      isactiv2 ? styles.svg_active : ""
                    }`}
                  >
                    {svg}
                  </p>
                </div>
              </button>
              <div className={styles.product_left_wrapper_active2_input}>
                <div className={styles.product_left_wrapper_active2_input_chek}>
                  <input type="checkbox" id="checkd" />
                  <label htmlFor="checkd">В НАЛИЧИИ</label>
                </div>
                <div className={styles.product_left_wrapper_active2_input_chek}>
                  <input
                    type="checkbox"
                    id="checkd1"
                    className={styles.checkd1}
                  />
                  <label htmlFor="checkd1">ПОД ЗАКАЗ</label>
                </div>
              </div>
              <div className={styles.product_left_wrapper_active2_input_button}>
                <div className={styles.product_bat}>
                  <Order_button />
                  <Cancel_button />
                </div>
              </div>
              <div
                className={styles.product_left_wrapper_active2_input_button_es}
              >
                <p>
                  Подберём аккумулятор и масло конкретно на ваш автомобиль. Цель
                  нашего магазина - предложение широкого ассортимента товаров.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.product_right}>
            {loading ? <Loader /> : dataResponse}
          </div>
        </div>
        <div className={styles.product_wrapper_bottom}></div>
      </div>
    </div>
  );
}

export default ProductData;
