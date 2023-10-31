import React from "react";
import { Link } from "react-router-dom";
import Product_Button from "../Button";
import style from "./index.module.scss";
import { useState } from "react";

function ProductCard({ product }) {
  const [post, setPost] = useState(false);
  return (
    <div>
      <Link to={`/product/${product._id}`} className={style.a}>
        <div className={style.product_card}>
          <div className={style.product_card_img}>
            <img
              src={`${process.env.REACT_APP_API_URL}/images/${product.image}`}
              alt={product.name}
            />
          </div>
          <div className={style.product_card_name}>
            <div className={style.product_card_name_card}>
              <h2>{product.title}</h2>
              <h3>
                {post
                  ? product.description
                  : product.description.substring(0, 70)}
                ...
              </h3>
              <Product_Button />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
