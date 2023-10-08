import React from "react";
import styles from "./index.module.scss";
import srtfkt1 from "../../../../assets/images/srtfkt1.png";
import srtfkt2 from "../../../../assets/images/srtfkt2.png";
import srtfkt3 from "../../../../assets/images/srtfkt3.png";
import srtfkt4 from "../../../../assets/images/srtfkt4.png";
import srtfkt5 from "../../../../assets/images/srtfkt5.png";
import srtfkt6 from "../../../../assets/images/srtfkt6.png";
import srtfkt7 from "../../../../assets/images/srtfkt7.png";
import { UnityButton } from "../../../Button";

export default function Hamkorlar() {
  return (
    <div className={styles.ham}>
        {/* title */}
        <div className={styles.htit}>
          <h2>ПАРТНЕРЫ</h2>
        </div>
        {/* title tugashi */}
        <div className={styles.hbody}>
          {/* birinchi qism */}
          <div className={styles.marks1}>
            {/* birinchi */}
            <div>
              <img src={srtfkt1} className={styles.mimg} />
              <p className={styles.mp}>Компания «ПартКом»</p>
            </div>
            {/* ikkinchi */}
            <div>
              <img src={srtfkt2} className={styles.mimg} />
              <p className={styles.mp}>Компания «АРМТЕК»</p>
            </div>
          </div>
          <div className={styles.marks2}>
            {/* uchinchi */}
            <div>
              <img src={srtfkt3} className={styles.mimg} />
              <p className={styles.mp}>Компания «Бином»</p>
            </div>
            {/* to`rtinchi */}
            <div>
              <img src={srtfkt4} className={styles.mimg} />
              <p className={styles.mp}>Компания «Маслон»</p>
            </div>
          </div>
          {/* birinchi qism tugashi */}

          {/* ikkinchi qism */}
          <div className={styles.marks3}>
            {/* beshinchi */}
            <div>
              <img src={srtfkt5} className={styles.mimg} />
              <p className={styles.mp}>ООО «Аккумуляторный Мир»</p>
            </div>
            {/* oltinchi */}
            <div>
              <img src={srtfkt6} className={styles.mimg} />
              <p className={styles.mp}>Компания «ЮНИКС» г. Киров</p>
            </div>
          </div>
          <div className={styles.marks4}>
            {/* yettinchi */}
            <div>
              <img src={srtfkt7} className={styles.mimg} />
              <p className={styles.mp}>Компания «Фаворит»</p>
            </div>
          </div>
          {/* ikkinchi qism tugashi */}
        </div>
        <div className={styles.hbtn}>
          <UnityButton nameButton="СТАТЬ ПАРТНЕРОМ" />
        </div>
      </div>
  );
}
