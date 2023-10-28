import React, { useState } from "react";
import styles from "./index.module.scss";
import { ImageSliderdata } from "../slider/indexData";
import ProductTitle from "../title";
import { NotFound } from "../../../pages/NotFound";
import Loader from "../Loader";
import Product_Button, { Cancel_button, Order_button } from "../../Button";
import ProductCard from "../../ProductCard";
import { Catalog } from "../../../pages/Catalogs";
import myAxios from "../../../urlAPI";
import { useQuery } from "react-query";
import Button_one, {
  Button_one1,
  Button_one2,
} from "../../ButtonProduct/Button_one";

function ProductData() {
  const [isactiv, setIsactiv] = useState(false);
  const [isactiv1, setIsactiv1] = useState(false);
  const [isactiv2, setIsactiv2] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [hig, setHig] = useState("40px"); // Fixed variable name
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
    setHig("100%");
  };

  const down1 = () => {
    setHig("100%");
  };

  const down2 = () => {
    setHig("100%");
  };

  const handelhig = () => {
    if (hig === "40px") {
      setHig("161px");
    } else if (hig === "161px") {
      setHig("100%");
    }
  };

  const yuborish = () => {};
  const restart = () => {
    setMinPrice(0);
    setMaxPrice(1000);
  };

  // const fetchPost = async () => {
  //   const response = await myAxios.get("/api/product");
  //   return response.data.data.products;
  // };
  // async function fetchPost() {
  //   try {
  //     const response = await myAxios.get("/api/product");
  //     const product = response.data.data.products;

  //     if (product) {
  //       return product;
  //     } else {
  //       throw new Error("Categories data is missing");
  //     }
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
  async function fetchPost() {
    try {
      const response = await myAxios.get("/api/category");
      const data = response.data.data;

      if (data && data.categories) {
        return data.categories;
      } else {
        console.error("Categories data is missing, returning an empty array.");
        return []; // Return an empty array as a default value
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw new Error("Failed to fetch categories");
    }
  }

  const {
    data: dataResponse,
    isLoading,
    isError,
    error,
  } = useQuery("posts", fetchPost);
  console.log(dataResponse);
  if (isLoading) {
    return (
      <>
        <ImageSliderdata />
        <div className={styles.load}>
          <Loader />
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <div>
        <NotFound />
        {console.log(error.message)}
      </div>
    );
  }

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
                      if (newValue > maxPrice) {
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
                      if (newValue < minPrice) {
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
                  <Order_button yuborish={yuborish} />
                  <Cancel_button restart={restart} />
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
            {dataResponse.map((item) => (
              <div className={styles.add}>
                <ProductCard key={item._id} product={item} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.product_wrapper_bottom}></div>
      </div>
    </div>
  );
}

export default ProductData;
