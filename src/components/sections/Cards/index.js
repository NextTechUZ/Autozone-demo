import React from "react";
import Card from "./indexCard";
import style from "./index.module.scss";
import { useState } from "react";
import myAxios from "../../../urlAPI";
import { useQuery } from "react-query";
import Loader from "../Loader";
import { UnityButton } from "../../../components/Button";
async function fetchPost() {
  try {
    const response = await myAxios.get("/api/category");
    return response.data.data.categories;
  } catch (error) {
    throw new Error(error.message);
  }
}
const restart = () => {
  window.location.reload();
};

function Cards() {
  const [visibleItems, setVisibleItems] = useState(6);
  const { data, error, isError, isLoading } = useQuery("posts", fetchPost);
  if (isLoading) {
    return (
      <div className={style.isLoading}>
        <Loader />
      </div>
    );
  }
  if (isError) {
    return (
      <div className={style.not_button}>
        {console.log(error.message)}
        <h2>404</h2>
        <UnityButton nameButton="Перезагрузить" functionName={restart} />
      </div>
    );
  }
  const showMoreItems = () => {
    setVisibleItems(data.length);
  };
  const showLessItems = () => {
    setVisibleItems(6);
  };
  console.log(data);
  return (
    <div className={style.card_wrapper} id="top">
      <div className={style.card_wrapper_itme}>
        <div className={style.card_top1}></div>
        {data.slice(0, visibleItems).map((category) => (
          <Card key={category._id} {...category} />
        ))}
      </div>
      <a href="#top">
        {visibleItems < data.length ? (
          <button className={style.all} onClick={showMoreItems}>
            SEE ALL
          </button>
        ) : (
          <button className={style.less} onClick={showLessItems}>
            SEE LESS
          </button>
        )}
      </a>
      <div className={style.card_bottom1}></div>
    </div>
  );
}

export default Cards;
