import React from "react";
import style from "./index.module.scss";
import Product_Button from "../../../../components/Button";
import { Link } from "react-router-dom";
function Product_min({ id, img, name, title }) {
  return (
    <div>
      {/* mahsulotni to'liq ko'rish uchun yangi sahifaga o'tadi bosilganda */}
     <Link to={`/product/${id}`}>  {/*  id buyicha mahsulot ga o'tadi  */}
        <div className={style.product_card}>
          <div className={style.product_card_img}>
            <img src={img} alt={name} />
          </div>
          <div className={style.product_card_name}>
            <div className={style.product_card_name_card}>
              <h2>{name}</h2>
              <h3>{title}</h3>
              <Product_Button />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product_min;
