import React from "react";
import style from "./index.module.scss";
//cards title hom page
export function Title() {
  return (
    <div className={style.title_wrapper}>
      <h2 className={style.title_h1}>
      КАТАЛОГ
      </h2>
      <div className={style.linya}></div>
      <p className={style.title_pp}>
        PROAuto - это специализированный интернет магазин востребованных <br />
        товаров для автомобилей.
      </p>
    </div>
  );
}

export function Catalogtitle() {
  return (
    <>
      <div className={style.catalogtitle_wrapper}>
        <h2 className={style.title_h1}>КАТАЛОГ</h2>
        <div className={style.linya}></div>
        <p className={style.title_pp}>
          Мы предлагаем лучшие цены на продукцию!
        </p>
      </div>
    </>
  );
}


export default function ProductTitle() {
  return (
    <div className={style.product_title}>
      <h1>MAGNUM - каталог АКБ от 60 до 230Ah</h1>
    </div>
  )
}

