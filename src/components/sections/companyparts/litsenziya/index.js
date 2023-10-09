import React from "react";
import styles from "./index.module.scss";
import Group28 from "../../../../assets/images/Group28.png";
import sertifikat from "../../../../assets/images/sertifikat.png";
import lupa from '../../../../assets/images/lupa.png'

export default function Litsenziya() {
  return (
    <div className={styles.lit}>
      <div className={styles.container}>
        {/* titlega */}
        <div className={styles.littitle}>
          <h2>ЛИЦЕНЗИИ</h2>
        </div>
        {/* titleni tugashi */}
        {/* body qismi */}
        <div className={styles.sbody}>
          <div className={styles.f1}>
            <div className={styles.empty}>
              <img src={Group28} className={styles.emptyimg} />
              <p>
                Официальный дистрибьютор материалов марки <i>ELF</i>
              </p>
            </div>
            <div className={styles.empty}>
              <img src={Group28} className={styles.emptyimg} />
              <p>
                Официальный партнер <i>Castrol</i>
              </p>
            </div>
          </div>
          <div className={styles.f2}>
            <div className={styles.full}>
              <img src={lupa} className={styles.lupa} />
              <img src={sertifikat} className={styles.emptyimg} />
              <p>
                Официальный дистрибьютор материалов марки <i>ШЕЛЛ</i>
              </p>
            </div>
            <div className={styles.empty}>
              <img src={Group28} className={styles.emptyimg} />
              <p>
                Официальный дистрибьютор материалов марки <i>Mobil</i>
              </p>
            </div>
          </div>
          <div className={styles.f3}>
            <div className={styles.empty}>
              <img src={Group28} className={styles.emptyimg} />
              <p>
                Официальный дистрибьютор материалов марки <i>LIQUI MOLY</i>
              </p>
            </div>
            <div className={styles.empty}>
              <img src={Group28} className={styles.emptyimg} />
              <p>
                Официальный дистрибьютор материалов марки <i>Motu</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
