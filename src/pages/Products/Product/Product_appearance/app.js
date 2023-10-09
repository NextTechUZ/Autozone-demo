import React from "react";
import style from "./index.module.scss";
import Data from "../Data/index";
import Product_Button from "../../../../components/Button";
function Product_app() {
  // datadan 4ta {} qaytadi filter orqali 
  const filteredObjects = Data.filter((item) => item.id >= 0 && item.id <= 3);
  return (
    <div>
      <div className={style.product_app_card_con}>
        {filteredObjects.map((item) => (
          <div className={style.product_app_card}>
            <div className={style.product_app_card_eliment}>
              <img src={item.img} alt="" />
            </div>
            <div className={style.product_app_card_eliment1}>
              <h2>{item.name}</h2>
              <h3> {item.title} </h3>
              <div>
                <Product_Button />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product_app;
