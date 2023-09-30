import React from "react";
import styles from "./buttons.module.scss";
import { Link } from "react-router-dom";

// katalog page ga o`tish uchun button

export function KatalogButton() {
  return (
    <button className={styles.katalogbutton}>
      <Link to="" className={styles.linkforbutton}>
        {" "}
        ПЕРЕЙТИ В КАТАЛОГ{" "}
      </Link>
    </button>
  );
}

//buyurtma berish uchun button

export function ZakazButton() {
  return <button className={styles.red}>ЗАКАЗАТЬ ЗВОНОК</button>;
}

export function Button() {
  return <button className={styles.button}>ЗАКАЗАТЬ ОНЛАЙН</button>;
}

// not 404

export function Notbutton() {
  return (
    <Link to="/"> 
      <button className={styles.not_button}>ПЕРЕЙТИ НА ГЛАВНУЮ</button>
    </Link>
  );
}
