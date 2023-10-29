import React from "react";
import style from "./index.module.scss";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
function Card(category) {
  const { title, image } = category;
  return (
    <Link to={`/product?category=${category?._id}`} className="reveal">
      <div
        className={style.card_wrapper_item_cards}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/${image})`,
        }}
      >
        <div className={style.card_wrapper_item_cards_hover}>
          <p className={style.card_wrapper_item_cards_p}>{title}</p>
          <Button />
        </div>
      </div>
    </Link>
  );
}

export default Card;
