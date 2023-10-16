import React from "react";
import styles from "./index.module.scss";
import aktiv1 from "../../../../assets/images/aktiv1.png";
import passiv1 from "../../../../assets/images/passiv1.png";
import userimg from "../../../../assets/images/userimg.png";
import { UnityButton } from "../../../Button";

export default function Foydalanuvchi() {
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
              <button>
                <img src={aktiv1} className={styles.fimg} />
              </button>
              <div className={styles.clntimg}>
                <img src={userimg} />
              </div>
              <button>
                <img src={passiv1} className={styles.fimg} />
              </button>
            </div>
            <p className={styles.feadback}>
              Обратился за новыми каркасными щётками, в итоге уехал и со щётками
              и с крутыми меховушками! Самый первый бокс на рынке на Нагорном, и
              с адекватными ценами! Обращаться к Андрею, очень толковый и
              отзывчивый продавец!
            </p>
            <hr />
            <p className={styles.username}>Сергей</p>
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
