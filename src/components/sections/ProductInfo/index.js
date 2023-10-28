import React from "react";
import { useParams } from "react-router-dom";
import style from "./index.module.scss";
import Loader from "../Loader";
import myAxios from "../../../urlAPI";
import { useQuery } from "react-query";
import { NotFound } from "../../../pages/NotFound";

function ProductInfo() {
  const { id } = useParams(); // Get the id from the URL parameters

  const fetchProduct = async (productId) => {
    // Fetch the product information using the provided id
    const response = await myAxios.get(`/api/product/${productId}`);
    return response.data.data.product; // Assuming that the response contains a single product
  };
  // async function fetchProduct(productId) {
  //   try {
  //     const response = await myAxios.get(`/api/product/${productId}`);
  //     const data = response.data.data.product;

  //     if (data && data.product) {
  //       return data.product;
  //     } else {
  //       console.error("Categories data is missing, returning an empty array.");
  //       return []; // Return an empty array as a default value
  //     }
  //   } catch (error) {
  //     console.error("Error fetching categories:", error);
  //     throw new Error("Failed to fetch categories");
  //   }
  // }

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

  if (isError) {
    // If there's an error, display a "Not Found" message and log the error.
    console.error("Error:", error);
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  // Once data is loaded successfully, render the product information.
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
