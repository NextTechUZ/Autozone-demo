import React, { useState } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import myAxios from "../../../urlAPI";
function Button_one(props) {
  const [isactiva, setIsactiva] = useState();
  const [isactiv, setIsactiv] = useState();
  const [activeButton, setActiveButton] = useState(null);
  const { data } = useQuery(["category"], () => myAxios.get(`/api/category`));
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
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
          {data?.data?.data?.categories.map((category) => (
            <Link
              className={style.a}
              to={`/product?category=${category._id}`}
              key={category._id}
            >
              <p
                className={`${style.btn} ${
                  activeButton === category._id ? style.active : ""
                }`}
                onClick={() =>
                  handleButtonClick(
                    activeButton === category._id ? "" : category._id
                  )
                }
              >
                {category.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Button_one;

export function Button_one1(props) {
  const [isactiva1, setIsactiva1] = useState();
  const [isactiv1, setIsactiv1] = useState();
  const [activeButton, setActiveButton] = useState(null);
  const { data } = useQuery(["car"], () => myAxios.get(`/api/car`));
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
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
          {data?.data?.data?.cars.map((car) => (
            <Link
              className={style.a}
              to={`/product?car=${car._id}`}
              key={car._id}
            >
              <p
                className={`${style.btn} ${
                  activeButton === car._id ? style.active : ""
                }`}
                onClick={() =>
                  handleButtonClick(activeButton === car._id ? "" : car._id)
                }
              >
                {car.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Button_one2(props) {
  const [isactiva2, setIsactiva2] = useState();
  const [activeButton, setActiveButton] = useState(null);
  const { data } = useQuery(["country"], () => myAxios.get(`/api/country`));
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  console.log(data);
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
          {data?.data?.data?.countries.map((country) => (
            <Link
              className={style.a}
              to={`/product?country=${country._id}`}
              key={country._id}
            >
              <p
                className={`${style.btn} ${
                  activeButton === country._id ? style.active : ""
                }`}
                onClick={() =>
                  handleButtonClick(
                    activeButton === country._id ? "" : country._id
                  )
                }
              >
                {country.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
