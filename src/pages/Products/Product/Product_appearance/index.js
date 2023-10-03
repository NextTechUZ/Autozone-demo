import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { useParams } from "react-router-dom";
import productData from "../Data";
import { Notfount } from "../../../Notfount";
import Loader from "../../../../components/sections/Loader";

function Product_Appearance() {
  const { id } = useParams(); // Datadan id ni olamiz

  // Product ma'lumotlari uchun o'zgaruvchilarni tayyorlash
  const [loading, setLoading] = useState(true); // "loading" holati uchun useState
  const [product, setProduct] = useState(null); // Mahsulot ma'lumotlari uchun useState

  useEffect(() => {
    // Mahsulot ma'lumotlarini yuklab olish funksiyasi
    async function fetchProductData() {
      setTimeout(() => {
        try {
          // productData faylidan mahsulot ma'lumotlarini olish
          const productDataResponse = productData;
          const products = productDataResponse;

          // Mahsulotlarni state ga saqlash
          setProduct(products[id]);
          setLoading(false); // "loading" holatini o'chirish
        } catch (error) {
          return <Notfount />;
        }
      }, 100000);
    }

    // Mahsulot ma'lumotlarini yuklab olishni chaqirish
    fetchProductData();
  }, [id]);

  if (loading) {
    // Agar yuklab olish davom etayotgan bo'lsa, "Loading..." ko'rsatish
    return (
      <div>
        <p className={style.loading}><Loader/></p>
      </div>
    );
  }

  if (!product) {
    // Agar mahsulot topilmagan bo'lsa, "Notfount" komponentini ko'rsatish
    return (
      <div>
        <Notfount />
      </div>
    );
  }

  const { name, title, img } = product;
  return (
    <div>
      <div className={style.product_appearance_wrapper}>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <img src={img} alt="not img" />
      </div>
    </div>
  );
}

export default Product_Appearance;
