import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import aktiv1 from "../../../../assets/images/aktiv1.png";
import { UnityButton } from "../../../Button";
import { mijozlar } from "../../../../db/foydalanuvchilar";

export default function Foydalanuvchi() {
  const [count, setCount] = useState(0);

  const prev = () => {
    count === 0 ? setCount(mijozlar.length-1) : setCount(count - 1);
  };

  const next = () => {
    count === mijozlar.length - 1 ? setCount(0) : setCount(count + 1);
  };
  

  return (
    <div className={styles.foy}>
      <div className={styles.finside}>
        <div className={styles.container}>
          {/* title */}
          <div className={styles.ftitle}>
            <h2>ОТЗЫВЫ</h2>
            <p>Для нас ценно любое Ваше мнение.</p>
          </div>
          {/* titleni tugashi */}

          {/* foydalanuvchi fikri */}
          <div className={styles.fbody}>
            <div className={styles.imgline}>
              <button onClick={prev}>
                <img src={aktiv1} className={styles.fimg} />
              </button>
              <div className={styles.clntimg}>
                <img src={mijozlar[count].img} />
              </div>
              <button onClick={next}>
                <img src={aktiv1} className={styles.fimg} style={{transform:'rotate(180deg)'}}/>
              </button>
            </div>
            <p className={styles.feadback}>
              {mijozlar[count].text}
            </p>
            <hr />
            <p className={styles.username}>{mijozlar[count].fname}</p>
            <p className={styles.activeuser}>Частный клиент</p>
          </div>
          {/* foydalanuvchi fikri tugashi */}
        </div>
        {/* pastgi tugmalar */}
        <div className={styles.btngrp}>
          <div className={styles.fbtn}>
            <UnityButton nameButton="ОСТАВИТЬ СВОЙ ОТЗЫВ" />
          </div>
        </div>
        {/* pastgi tugmalarni tugashi */}
      </div>
    </div>
  );
}
