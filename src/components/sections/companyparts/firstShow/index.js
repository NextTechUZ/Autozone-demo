import React from "react";
import styles from "./index.module.scss";
import { UnityButton } from "../../../Button";
import HeadPart from "../../../HeadPart";
import firewal from "../../../../assets/images/firewal.png";

export default function Firstshow() {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.container}>
          <div>
            <HeadPart title="КОМАНДА ВЫСОКОКЛАССНЫХ СПЕЦИАЛИСТОВ" />
            <UnityButton nameButton="ПЕРЕЙТИ В КАТАЛОГ" />
          </div>
        </div>
      </div>
      <div className={styles.whiteline}>
        <div className={styles.container}>
          <div>
            <p>ГЛАВНАЯ</p>
            <img src={firewal} className={styles.firewal} />
            <p>О КОМПАНИИ</p>
          </div>
        </div>
      </div>
    </>
  );
}
