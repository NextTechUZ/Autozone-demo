import React, { useState } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
function Button_one(props) {
  const [isactiva, setIsactiva] = useState();
  const [isactiv, setIsactiv] = useState();
  // activi calss bulish yoki isactivi bulishi
  const next = () => {
    setIsactiva(!isactiva);
    setIsactiv(!isactiv);
  };
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M8 4L12 10.5L8 16" stroke="white" stroke-width="4" />
    </svg>
  );
  return (
    <div>
      <div
        className={`${style.button_one} ${
          isactiva ? style.button_one_active : ""
        }`}
        onClick={props.clik}
      >
        <button onClick={next} className={style.button_one_btn}>
          <div>
            <p>АКБ MAGNUM</p>
            <p className={`${style.svg} ${isactiv ? style.svg_active : ""}`}>
              {svg}
            </p>
          </div>
        </button>
        <div className={style.button_one_active_link}>
          <Link className={style.a}>
            <p>MAGNUM 60Ah</p>
          </Link>
          <Link className={style.a}>
            <p> MAGNUM 75Ah</p>
          </Link>
          <Link className={style.a}>
            <p> MAGNUM 90Ah</p>
          </Link>
          <Link className={style.a}>
            <p>MAGNUM 132Ah </p>
          </Link>
          <Link className={style.a}>
            <p>MAGNUM 190Ah </p>
          </Link>
          <Link className={style.a}>
            <p> MAGNUM 230Ah</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Button_one;

export function Button_one1(props) {
  const [isactiva1, setIsactiva1] = useState();
  const [isactiv1, setIsactiv1] = useState();

  const next1 = () => {
    setIsactiva1(!isactiva1);
    setIsactiv1(!isactiv1);
  };
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M8 4L12 10.5L8 16" stroke="white" stroke-width="4" />
    </svg>
  );
  return (
    <div>
      <div
        className={`${style.button_one} ${
          isactiva1 ? style.button_one_active1 : ""
        }`}
        onClick={props.clik1}
      >
        <button onClick={next1} className={style.button_one_btn}>
          <div>
            <p>АКБ ЗВЕРЬ</p>
            <p className={`${style.svg} ${isactiv1 ? style.svg_active : ""}`}>
              {svg}
            </p>
          </div>
        </button>
        <div className={style.button_one_active_link}>
          <Link className={style.a}>
            <p>MAGNUM 60Ah</p>
          </Link>
          <Link className={style.a}>
            <p> MAGNUM 75Ah</p>
          </Link>
          <Link className={style.a}>
            <p> MAGNUM 90Ah</p>
          </Link>
          <Link className={style.a}>
            <p>MAGNUM 132Ah </p>
          </Link>
          <Link className={style.a}>
            <p>MAGNUM 190Ah </p>
          </Link>
          <Link className={style.a}>
            <p> MAGNUM 230Ah</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Button_one2(props) {
  const [isactiva2, setIsactiva2] = useState();

  const [isactiv2, setIsactiv2] = useState();
  const next2 = () => {
    setIsactiva2(!isactiva2);
    setIsactiv2(!isactiv2);
  };
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M8 4L12 10.5L8 16" stroke="white" stroke-width="4" />
    </svg>
  );
  return (
    <div>
      <div
        className={`${style.button_one} ${
          isactiva2 ? style.button_one_active2 : ""
        }`}
        onClick={props.clik2}
      >
        <button onClick={next2} className={style.button_one_btn}>
          <div>
            <p>АКБ AKOM</p>
            <p className={`${style.svg} ${isactiv2 ? style.svg_active : ""}`}>
              {svg}
            </p>
          </div>
        </button>
        <div className={style.button_one_active_link}>
          <Link className={style.a}>
            <p>MAGNUM 60Ah</p>
          </Link>
          <Link className={style.a}>
            <p> MAGNUM 75Ah</p>
          </Link>
          <Link className={style.a}>
            <p> MAGNUM 90Ah</p>
          </Link>
          <Link className={style.a}>
            <p>MAGNUM 132Ah </p>
          </Link>
          <Link className={style.a}>
            <p>MAGNUM 190Ah </p>
          </Link>
          <Link className={style.a}>
            <p> MAGNUM 230Ah</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
