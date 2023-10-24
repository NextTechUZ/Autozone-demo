import React, { useState } from "react";
import styles from "./index.module.scss";
import srtfkt1 from "../../../../assets/images/srtfkt1.png";
import { UnityButton } from "../../../Button";
import { Hmk } from "../../../../db/hamkorlar";

export default function Hamkorlar() {
  const [count, setCount] = useState(4);

  const changeCount = () => {
    count === Hmk.length ? setCount(4) : setCount(Hmk.length);
  };

  return (
    <div className={styles.ham}>
      <div className={styles.opacity}>
        {/* title */}
        <div className={styles.htit}>
          <h2>ПАРТНЕРЫ</h2>
        </div>
        {/* title tugashi */}
        <div className={styles.hbody}>
          <div className={styles.marks1}>
            {Hmk.slice(0, count).map((r, index) => (
              <div key={index}>
                <img src={r.img} className={styles.mimg} />
                <p className={styles.mp}>{r.cname}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.hbtn}>
          <UnityButton
            functionName={() => {
              count === Hmk.length ? setCount(4) : setCount(Hmk.length);
            }}
            nameButton="СТАТЬ ПАРТНЕРОМ"
          />
        </div>
      </div>
    </div>
  );
}
