import React from "react";
import Card from "./indexCard";
import style from "./index.module.scss";
import img1 from "../../../assets/imgs/cards/card.png";
import img2 from "../../../assets/imgs/cards/card1.png";
import img3 from "../../../assets/imgs/cards/card2.png";
import img4 from "../../../assets/imgs/cards/card3.png";
import img5 from "../../../assets/imgs/cards/card4.png";
import img6 from "../../../assets/imgs/cards/card5.png";
import { useState } from "react";

function Cards() {
  const data = [
    {
      id: 1,
      title: `АККУМУЛЯТОРЫ`,
      img: img2,
    },
    {
      id: 2,
      title: `АККУМУЛЯТОРЫ`,
      img: img3,
    },
    {
      id: 3,
      title: `АККУМУЛЯТОРЫ`,
      img: img5,
    },
    {
      id: 4,
      title: `АККУМУЛЯТОРЫ`,
      img: img1,
    },
    {
      id: 5,
      title: `АККУМУЛЯТОРЫ`,
      img: img4,
    },
    {
      id: 6,
      title: `АККУМУЛЯТОРЫ`,
      img: img6,
    },
    {
      id: 7,
      title: `АККУМУЛЯТОРЫ`,
      img: img6,
    },
    {
      id: 8,
      title: `АККУМУЛЯТОРЫ`,
      img: img6,
    },
    {
      id: 9,
      title: `АККУМУЛЯТОРЫ`,
      img: img6,
    },
    
  ];

  const [visibleItems, setVisibleItems] = useState(6);

  const showMoreItems = () => {
    setVisibleItems(data.length);
  };

  const showLessItems = () => {
    setVisibleItems(6);
  };
  return (
    <>
      <div className={style.card_wrapper}>
        <div className={style.card_wrapper_itme}>
          <div className={style.card_top1}></div>
          {data.slice(0, visibleItems).map((item) => (
              <Card key={item.id} {...item} />
            ))}
        </div>
        {visibleItems < data.length ? (
            <button className={style.all} onClick={showMoreItems}>
              SEE ALL
            </button>
          ) : (
            <button className={style.less} onClick={showLessItems}>
              SEE LESS
            </button>
          )}
        <div className={style.card_bottom1}></div>
      </div>
    </>
  );
}

export default Cards;
