import React from "react";
import styles from "./buttons.module.scss";
import { Link } from "react-router-dom";


// buttonda bosliganda ish bajarishi uchun 
// onclick atribiga function o`zgaruvchisiga funksiya nomini kiriting 

// bor biror pagega o`tish uchun <Link> ankori bor
// Boshqa Ppgega o`tish uchun yo`nalishni to`liq bering (<Link to='/page'/>) 
export function UnityButton(props){
  return(
    <button onClick={props.function}><Link to={props.link}>{props.nameButton}</Link></button>
  )
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

// not 404

export function Notbutton() {
  return (
    <Link to="/"> 
      <button className={styles.not_button}>ПЕРЕЙТИ НА ГЛАВНУЮ</button>
    </Link>
  );
}
