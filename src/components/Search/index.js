import React, { useContext } from "react";
import { Context } from "./indexx";
import { useQuery } from "react-query";
import myAxios from "../../urlAPI/index";
import { NotFound } from "../../pages/NotFound";
import ProductCard from "../ProductCard"; // Import the ProductCard component
import Loader from "../sections/Loader";
import styles from "./index.module.scss";
function SearchInfo() {
  const { value } = useContext(Context);
  const { data, isLoading, isError } = useQuery(["product", value], () =>
    // myAxios.get(`/api/product?search=${value || ""}`)
    myAxios.get(`/api/product`)
  );
  console.log(data?.data?.data?.products);
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <NotFound />;
  }

  return (
    <>
      <div className={styles.serch_wrapper}>
        {data?.data?.data?.products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </>
  );
}

export default SearchInfo;
