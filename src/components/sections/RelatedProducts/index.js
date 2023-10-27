import React from "react";
import styles from "./index.module.scss";
import ProductCard from "../../ProductCard";
import myAxios from "../../../urlAPI";
import { useQuery } from "react-query";
import { NotFound } from "../../../pages/NotFound";
import Loader from "../Loader";

function RelatedProducts() {
  const fetchPost = async () => {
    const response = await myAxios.get("/api/product");
    return response.data.data.products;
  };

  const {
    data: dataResponse,
    isLoading,
    isError,
    error,
  } = useQuery("posts", fetchPost);

  if (isLoading) {
    return (
      <>
        <div className={styles.load}>
          <Loader />
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <div>
        <NotFound />
        {console.log(error.message)}
      </div>
    );
  }

  function getRandomItems(arr, count) {
    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }

  const extractedItems = getRandomItems(dataResponse, 4);
  console.log(extractedItems);

  return (
    <div>
      <div className={styles.product_app}>
        <div className={styles.product_app_wrap}>
          <h1 className={styles.product_app_wrap_h1}>Related products</h1>
          <div className={styles.product_app_card_con}>
            {extractedItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
