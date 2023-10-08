import React from "react";
import Data from "../../../data/products";
import styles from "./index.module.scss";
import ProductCard from "../../ProductCard";
function RelatedProducts() {
  const filteredData = Data.filter((item) => item.id >= 0 && item.id <= 3);
  return (
    <div>
      <div className={styles.product_app}>
        <div className={styles.product_app_wrap}>
          <h1 className={styles.product_app_wrap_h1}>Related products</h1>
          <div className={styles.product_app_card_con}>
            {filteredData.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
