import React from "react";
import styles from "./buttons.module.scss";
import { Link } from "react-router-dom";

// buttonda bosliganda ish bajarishi uchun
// onclick atribiga function o`zgaruvchisiga funksiya nomini kiriting

// bor biror pagega o`tish uchun <Link> ankori bor
// Boshqa Ppgega o`tish uchun yo`nalishni to`liq bering (<Link to='/page'/>)
export function UnityButton(props) {
  return (
    <button onClick={props.functionName}>
      <Link to={props.link}>{props.nameButton}</Link>
    </button>
  );
}

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
export function Order_button(props) {
  return (
    <button onClick={props.yuborish} className={styles.order_button}>
      ПОКАЗАТЬ
    </button>
  );
}

// tozalash button
export function Cancel_button(props) {
  return (
    <button onClick={props.restart} className={styles.calcle_button}>
      СБРОСИТЬ
    </button>
  );
}
