import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { Notfount } from "../../../pages/Notfount";
import Data from "../../../data/products";
import { Catalog } from "../../../pages/Catalogs";


function ProductInfo() {
  const { id } = useParams(); // URL parametridan identifikatorni olish
  const [loading, setLoading] = useState(true); //loading
  const [product, setProduct] = useState(null); //data
  useEffect(() => {
    // Datadan ma'lumot olib chiqarish id buyicha
    try {
      const products = Data;
      setProduct(products[id]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  if (loading) {
    return <Loader />; //malumot kulguncha loading... buladi
  }

  if (!product) {
    return (
      <div>
        <Notfount /> {/* ma'lumot tipilmagan holida 404 chiqadi   */}
      </div>
    );
  }

  return (
    <div>
      <div className={style.product_appearance_wrapper}>
        <Catalog/>
        <div className={style.product_appearance_wrapper_tavar}>
          {/* Datani tavar [] map qilib ma'lumotlarini chiqarish  */}
          {product.tavar.map((item, index) => (
            <div key={index}>
              <h4 className={style.product_appearance_wrapper_tavar_h4}>
                {item.title}
              </h4>
              <div className={style.product_appearance_wrapper_tavar_contin}>
                <div className={style.product_appearance_wrapper_tavar_img}>
                  <img src={item.img} alt="Not fount" />
                </div>
                <div className={style.product_appearance_wrapper_tavar_des}>
                  <div
                    className={
                      style.product_appearance_wrapper_tavar_information
                    }
                  >
                    <div
                      className={
                        style.product_appearance_wrapper_tavar_information_d1
                      }
                    >
                      <h3>{item.name}</h3>
                      <p>{item.information}</p>
                      <p>{item.information1}</p>
                      <p>{item.information2}</p>
                      <p>{item.information3}</p>
                      <p>{item.information4}</p>
                      <p>{item.information5}</p>
                      <p>{item.information6}</p>
                      <p
                        className={
                          style.product_appearance_wrapper_tavar_information_d1_link
                        }
                      >
                        {item.information7}
                      </p>
                    </div>
                    <div
                      className={
                        style.product_appearance_wrapper_tavar_information_d2
                      }
                    >
                      <p className={style.product_pad}>{item.information8}</p>
                      <p>{item.information9}</p>
                      <p>{item.information10}</p>
                      <p>{item.information11}</p>
                      <p>{item.information12}</p>
                      <p>{item.information13}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>

        <div className={style.product_appearance_wrapper_tavar_bottoom}></div>
      </div>
    </div>
  );
}
export default ProductInfo;
