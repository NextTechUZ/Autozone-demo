import React from "react";
import styles from "./buttons.module.scss";
import { Link } from "react-router-dom";
import style from "../../pages/Products/Product/ProductWrapper/index.module.scss" 
// katalog page ga o`tish uchun button

export function KatalogButton() {
  return (
    <button className={styles.katalogbutton}>
      <Link to="" className={styles.linkforbutton}>
        ПЕРЕЙТИ В КАТАЛОГ
      </Link>
    </button>
  );
}

// ЗАДАТЬ ВОПРОС button
export function SavolBerish() {
  return <button className={styles.savolbutton}>ЗАДАТЬ ВОПРОС</button>;
}
export function ZakazButton() {
  return <button className={styles.red}>ЗАКАЗАТЬ ЗВОНОК</button>;
}

export function Button() {
  return <button className={styles.button}>ЗАКАЗАТЬ ОНЛАЙН</button>;
}

// notfount 404

export function Notbutton() {
  return (
    <Link to="/">
      <button className={styles.not_button}>ПЕРЕЙТИ НА ГЛАВНУЮ</button>
    </Link>
  );
}

// porduct button

export default function Product_Button() {
  return (
    <div>
      <button className={styles.product_button}>ПОДРОБНЕЕ</button>
    </div>
  );
}

// order button
export  function Order_button() {
  return <button className={styles.order_button}> ПОКАЗАТЬ</button>
  
}

// tozalash button
export  function Cancel_button() {
  return <button className={styles.calcle_button}> СБРОСИТЬ</button>
  
}
