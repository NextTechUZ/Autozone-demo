import React from "react";
import style from "./index.module.scss";
import { Button } from "../../Button";
function Card(item) {
  const { title, img } = item;
  return (
    <div
      className={style.card_wrapper_item_cards}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={style.card_wrapper_item_cards_hover}>
        <p className={style.card_wrapper_item_cards_p}>{title}</p>
        <Button />
      </div>
    </div>
  );
}

export default Card;
