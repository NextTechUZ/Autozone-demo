import React, { useContext, useState } from "react";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Context } from "../../../../components/Search/indexx";

export function Forsearch(props) {
  const { value, setValue } = useContext(Context);
  const handleSearch = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const onchen = (e) => {
    setTimeout(() => {
      setValue(e.target.value);
    }, 1000);
  };

  return (
    <>
      <div className={styles.forsearchhide}>
        <div className={styles.container}>
          <div className={styles.navform}>
            <form onSubmit={handleSearch}>
            <input type="search" name="searchInput" onChange={onchen} />
            </form>
            <Link to={`/search?query=${value}`}>
            <button type="submit" className={styles.search}>
              найти
            </button></Link>
          </div>
          <div className={styles.closeIcon} onClick={props.funk}>
            <IoClose />
          </div>
        </div>
      </div>      
    </>
  );
}

// Karzinka iconi bosilganda chiquvchi qismi
export function ForShopBacket() {
  return <div className={styles.myShop}></div>;
}
// navbar for demo
