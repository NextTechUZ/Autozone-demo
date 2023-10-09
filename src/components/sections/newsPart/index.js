import React from "react";
import { Titles } from "../../../layouts/components/Titles";
import styles from "./indexNew.module.scss";
import car from "../../../assets/images/car.jpeg";
import Union from "../../../assets/images/Union.svg";
import akk from "../../../assets/images/akk.png";
import dis from "../../../assets/images/dis.png";
import { UnityButton } from "../../Button";

export function News() {
  return (
    <div className={styles.newspart}>
      <div className={styles.title}>
        <Titles head="новости" />
      </div>
      <div className={styles.newinfo}>
        <div className={styles.newsCard}>
          <img className={styles.newimg} src={car} />
          <div className={styles.newbottom}>
            <p>12 февраля 2020 года</p>
            <p>У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!</p>
            <button className={styles.unionfirst}>
              <img src={Union} />
            </button>
          </div>
        </div>
        <div className={styles.newsCard}>
          <img className={styles.newimg} src={akk} />
          <div className={styles.newbottom}>
            <p>10 февраля 2020 года</p>
            <p>ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA </p>
            <button className={styles.union}>
              <img src={Union} />
            </button>
          </div>
        </div>
        <div className={styles.newsCard}>
          <img className={styles.newimg} src={dis} />
          <div className={styles.newbottom}>
            <p>5 февраля 2020 года</p>
            <p>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE</p>
            <button className={styles.union}>
              <img src={Union} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.newsButton}>
        <UnityButton nameButton="ЧИТАТЬ ВСЕ НОВОСТИ" />
      </div>
    </div>
  );
}
