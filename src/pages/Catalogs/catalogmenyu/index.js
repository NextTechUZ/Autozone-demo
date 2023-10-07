import React  from "react";
import style from "./index.module.scss";
export function Catalogmenyu() {
  return (
    <>
      <div className={style.catalog_menyu}>
        <div className={style.catalog_menyu_p}>
          <p className={style.catalog_menyu_p_p}>ГЛАВНАЯ </p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M8 4L12 10L8 16" stroke="#C53720" stroke-width="4" />
            </svg>
          </span>
          <p className={style.catalog_menyu_p_activ}>КАТАЛОГ</p>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
