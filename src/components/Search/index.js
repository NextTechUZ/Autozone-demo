import React, { useContext, useState } from "react";
import { Context } from "./indexx";
import { useQuery } from "react-query";
import myAxios from "../../urlAPI/index";
import { NotFound } from "../../pages/NotFound";
import ProductCard from "../ProductCard";
import Loader from "../sections/Loader";
import styles from "./index.module.scss";

function SearchInfo() {
  const { value } = useContext(Context);
  const { data, isLoading, isError } = useQuery(["product", value], () =>
    myAxios.get(`/api/product`)
  );
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
    >
      <rect
        x="-2"
        y="2"
        width="48"
        height="48"
        transform="matrix(-1 0 0 1 48 0)"
        stroke="#A5A5A5"
        stroke-width="4"
      />
      <path d="M24 20L28 26L24 32" stroke="#A5A5A5" stroke-width="4" />
    </svg>
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  const totalItems = data?.data?.data?.products.length;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.data?.data?.products.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={styles.serch_wrapper}>
        {currentItems.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrev} className={styles.prev}>
          {svg}
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            className={styles.number}
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            style={
              pageNumber === currentPage
                ? { background: "red", border: "0" }
                : {}
            }
          >
            <span style={pageNumber === currentPage ? { color: "white" } : {}}>
              {pageNumber}
            </span>
          </button>
        ))}
        <button onClick={handleNext} className={styles.next}>
          {svg}
        </button>
      </div>
    </>
  );
}

export default SearchInfo;
