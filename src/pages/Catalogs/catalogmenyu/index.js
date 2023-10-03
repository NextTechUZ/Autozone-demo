import React  from "react";
import style from "./index.module.scss";
export function Catalogmenyu() {
  // const [value, setValue] = useState('');

  // const handleLinkClick = (newValue) => {
  //   setValue(newValue);
  // };
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
          {/* <div style={{position:"relative" ,zIndex:"5", color:"red"}}>
      <Link value="salom" onClick={() => handleLinkClick("salom")}>salom</Link>
      <Link value="qali" onClick={() => handleLinkClick("qali")}>qali</Link>
      <Link value="nima" onClick={() => handleLinkClick("nima")}>nima</Link>
      <Link value="boss" onClick={() => handleLinkClick("boss")}>boss</Link>
      <Link value="alo" onClick={() => handleLinkClick("alo")}>alo</Link>
      <div>{value}
         </div>
           </div> */}
        </div>
      </div>
    </>
  );
}
