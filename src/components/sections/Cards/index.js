import React from "react";
import Card from "./indexCard";
import style from "./index.module.scss";
import { useState } from "react";
import myAxios from "../../../urlAPI";
import { useQuery } from "react-query";
import Loader from "../Loader";

async function fetchPost() {
  try {
    const response = await myAxios.get("/api/category");
    return response.data.data.categories;
  } catch (error) {
    throw new Error(error.message);
  }
}

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
      <div>
        Error: {console.log(error.message)}
        {error.message}
      </div>
    );
  }
  const showMoreItems = () => {
    setVisibleItems(data.length);
  };
  const showLessItems = () => {
    setVisibleItems(6);
  };

  return (
    <div className={style.card_wrapper}>
      <div className={style.card_wrapper_itme}>
        <div className={style.card_top1}></div>
        {data.slice(0, visibleItems).map((category) => (
          <Card key={category._id} {...category} />
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
  );
}

export default Cards;
