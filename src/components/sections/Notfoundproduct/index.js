import React from "react";
import styles from "./index.module.scss";
import imgno from "../../../assets/imgs/notm.png";
function Notfound_product() {
  const restart = () => {
    window.location.reload();
  };
  return (
    <div>
      <div className={styles.notfound_product}>
        <div className={styles.notfound_product_tex}>
          <h1>В ДАННЫЙ МОМЕНТ ТОВАР ОТСУТСТВУЕТ</h1>
        </div>
        <div className={styles.buttonWrap}>
          <button className={styles.button_not} onClick={restart}>
            Перезагрузить
          </button>
          <button className={styles.button_not1}>ОБРАТИТЬСЯ К МЕНЕДЖЕРУ</button>
        </div>
        <div className={styles.notfound_product_img}>
          <img src={imgno} alt="Not found" />
        </div>
      </div>
    </div>
  );
}

export default Notfound_product;
