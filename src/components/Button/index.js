import React from "react";
import styles from "./buttons.module.scss";
import { Link } from "react-router-dom";
<<<<<<< HEAD


// buttonda bosliganda ish bajarishi uchun 
// onclick atribiga function o`zgaruvchisiga funksiya nomini kiriting 

// bor biror pagega o`tish uchun <Link> ankori bor
// Boshqa Ppgega o`tish uchun yo`nalishni to`liq bering (<Link to='/page'/>) 
export function UnityButton(props){
  return(
    <button onClick={props.function}><Link to={props.link}>{props.nameButton}</Link></button>
  )
}

=======
import style from "../../pages/Products/Product/ProductWrapper/index.module.scss" 
>>>>>>> eb62c614a7cc51f0585b1c7ff32ba74c8ef47bb5
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

<<<<<<< HEAD
=======
// ЗАДАТЬ ВОПРОС button
export function SavolBerish() {
  return <button className={styles.savolbutton}>ЗАДАТЬ ВОПРОС</button>;
}
export function ZakazButton() {
  return <button className={styles.red}>ЗАКАЗАТЬ ЗВОНОК</button>;
}

>>>>>>> eb62c614a7cc51f0585b1c7ff32ba74c8ef47bb5
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
