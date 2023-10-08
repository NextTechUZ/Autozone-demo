import React from "react";
import { Link } from "react-router-dom";
import Product_Button from "../Button";
import style from "./index.module.scss";

function ProductCard({ product }) {
  return (
    <div>
      <Link to={`/product/${product.id}`} className={style.a}>
        <div className={style.product_card}>
          <div className={style.product_card_img}>
            <img src={product.img} alt={product.name} />
          </div>
          <div className={style.product_card_name}>
            <div className={style.product_card_name_card}>
              <h2>{product.name}</h2>
              <h3>{product.title}</h3>
              <Product_Button />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
