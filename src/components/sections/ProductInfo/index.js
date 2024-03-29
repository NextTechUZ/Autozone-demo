import React from "react";
import { useParams } from "react-router-dom";
import style from "./index.module.scss";
import Loader from "../Loader";
import myAxios from "../../../urlAPI";
import { useQuery } from "react-query";
import { NotFound } from "../../../pages/NotFound";

function ProductInfo() {
  const { id } = useParams();
  const fetchProduct = async (productId) => {
    const response = await myAxios.get(`/api/product/${productId}`);
    return response.data.data.product;
  };

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery(["product", id], () => fetchProduct(id));

  if (isLoading) {
    return (
      <div className={style.load}>
        <Loader />
      </div>
    );
  }
  console.log(product);

  if (isError) {
    // If there's an error, display a "Not Found" message and log the error.
    console.error("Error:", error);
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div>
      <div className={style.product_appearance_wrapper}>
        <div className={style.product_appearance_wrapper_tavar}>
          {product ? (
            <div key={product._id}>
              <h4 className={style.product_appearance_wrapper_tavar_h4}>
                {product.title}
              </h4>
              <p className={style.product_appearance_wrapper_tavar_p}>
                {product.description}
              </p>
              <div className={style.product_appearance_wrapper_tavar_contin}>
                <div className={style.product_appearance_wrapper_tavar_img}>
                  <img src={product.img} alt="Not found" />
                </div>
                <div className={style.product_appearance_wrapper_tavar_des}>
                  <div
                    className={
                      style.product_appearance_wrapper_tavar_information
                    }
                  >
                    <div
                      className={
                        style.product_appearance_wrapper_tavar_information_d1
                      }
                    >
                      <h3>{product.title}</h3>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                      <p
                        className={
                          style.product_appearance_wrapper_tavar_information_d1_link
                        }
                      >
                        {product.title7}
                      </p>
                    </div>
                    <div
                      className={
                        style.product_appearance_wrapper_tavar_information_d2
                      }
                    >
                      <p className={style.product_pad}>{product.title}</p>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                      <p>{product.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div></div>
        <div className={style.product_appearance_wrapper_tavar_bottoom}></div>
      </div>
    </div>
  );
}

export default ProductInfo;
