import React, { useContext } from "react";
import { Context } from "./indexx";
import { useQuery } from "react-query";
import myAxios from "../../urlAPI/index";
import { NotFound } from "../../pages/NotFound";
import ProductCard from "../ProductCard"; // Import the ProductCard component
import Loader from "../sections/Loader";

function SearchInfo() {
  const { value } = useContext(Context);
  const { data, isLoading, isError } = useQuery(["product", value], () =>
    // myAxios.get(`/api/product?search=${value || ""}`)
    myAxios.get(`/api/product`)
  );

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

  if (!data || !data.data || !data.data.products) {
    return null; // Return null or a placeholder if the data is missing
  }
  console.log(value);

  return (
    <div>
      <div>
        <h1>{value}</h1>
      </div>
      <div>
        {data.products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default SearchInfo;
